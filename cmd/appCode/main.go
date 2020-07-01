package main

import (
	"context"
	"flag"
	"log"
	"net/http"
	"os"
	"time"

	"github.com/CS-PCockrill/queue/pkg/models/mongodb"
	"go.mongodb.org/mongo-driver/mongo"
	"go.mongodb.org/mongo-driver/mongo/options"
	"go.mongodb.org/mongo-driver/mongo/readpref"
)

//Application commonalities that will be accessed all over the application
type appInjection struct {
	user     *mongodb.UserFunctions
	store    *mongodb.StoreFunctions
	driver   *mongodb.DriverFunctions
	errorLog *log.Logger
	infoLog  *log.Logger
}

func main() {
	addr := flag.String("addr", ":3000", "HTTP network address")
	dbUrl := "mongodb://127.0.0.1:27017"
	//Make connection to the mongodb cluster
	ctx, cancel := context.WithTimeout(context.Background(), 10*time.Second)
	defer cancel()
	client, err := mongo.Connect(ctx, options.Client().ApplyURI(dbUrl))
	if err != nil {
		panic(err)
	}
	err = client.Ping(ctx, readpref.Primary())
	if err != nil {
		log.Fatal(err)
	}
	//databases, err := client.ListDatabaseNames(ctx, bson.M{})
	//if err != nil {
	//	log.Fatal(err)
	//}
	//fmt.Println(databases)
	defer client.Disconnect(ctx)

	infoLog := log.New(os.Stdout, "INFO\t", log.Ldate|log.Ltime)
	errLog := log.New(os.Stderr, "ERROR\t", log.Ldate|log.Ltime|log.Lshortfile)

	//Initialize the appInjection struct that will be passed around to rest of the application code
	app := &appInjection{
		user:     &mongodb.UserFunctions{CLIENT: client},
		store:    &mongodb.StoreFunctions{CLIENT: client},
		driver:   &mongodb.DriverFunctions{CLIENT: client},
		errorLog: errLog,
		infoLog:  infoLog,
	}

	// Initialize a new http.Server struct. We set the Addr and Handler fields so
	//that the server uses the same network address and routes as before, and set
	//the ErrorLog field so that the server now uses the custom errorLog logger in
	//the event of any problems
	srv := http.Server{
		Addr:         *addr,
		ErrorLog:     errLog,
		Handler:      app.myRoutes(),
		IdleTimeout:  time.Minute,
		ReadTimeout:  10 * time.Second,
		WriteTimeout: 10 * time.Second,
	}

	infoLog.Printf("Starting server on %s", *addr)
	err = srv.ListenAndServe()
	errLog.Fatal(err)
}
