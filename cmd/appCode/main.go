package main

import (
	"flag"
	"log"
	"net/http"
)

type app struct{

}

func main(){
	addr := flag.String("addr",":3000", "HTTP network address")
	srv := http.Server{
		Addr: *addr,
		Handler : myRoutes(),
	}

	err := srv.ListenAndServe()
	log.Fatal(err)
}
