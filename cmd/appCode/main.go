package main

import (
	"flag"
	"github.com/CS-PCockrill/queue/pkg/models/mongodb"
	"log"
	"net/http"
	"os"
	"time"
)

type appInjection struct{
	users *mongodb.UserFunctions
	store *mongodb.StoreFunctions
	driver *mongodb.DriverFunctions
	errorLog *log.Logger
	infoLog *log.Logger
}

func main(){
	addr := flag.String("addr",":3000", "HTTP network address")

	infoLog := log.New(os.Stdout, "INFO\t", log.Ldate|log.Ltime)
	errLog := log.New(os.Stderr, "ERROR\t", log.Ldate|log.Ltime|log.Lshortfile)

	srv := http.Server{
		Addr: *addr,
		ErrorLog: errLog,
		Handler : myRoutes(),
		IdleTimeout: time.Minute,
		ReadTimeout: 5 * time.Second,
		WriteTimeout: 10 * time.Second,
	}

	infoLog.Printf("Starting server on %s", *addr)
	err := srv.ListenAndServe()
	errLog.Fatal(err)
}
