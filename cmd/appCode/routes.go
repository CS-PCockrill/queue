package main

import (
	"net/http"

	"github.com/gorilla/mux"
)

func (app *appInjection) myRoutes() http.Handler {
	gMux := mux.NewRouter()
	gMux.HandleFunc("/", app.Welcome).Methods("GET")
	gMux.HandleFunc("/user/{username}", app.SingleUser).Methods("GET")
	gMux.HandleFunc("/signIn", app.SignIn).Methods("POST")
	gMux.HandleFunc("/signUp", app.SignUp).Methods("POST")

	return gMux
}
