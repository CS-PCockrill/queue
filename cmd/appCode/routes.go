package main

import(
	"github.com/gorilla/mux"
	"net/http"
)
func myRoutes() http.Handler{
	mux := mux.NewRouter()
	mux.HandleFunc("/", Welcome).Methods("GET")
	mux.HandleFunc("/signIn", SignIn).Methods("GET")
	mux.HandleFunc("/signUp", SignUp).Methods("GET")

	return mux
}