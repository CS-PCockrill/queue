package main

import(
	"github.com/gorilla/mux"
	"net/http"
)
func (app *appInjection) myRoutes() http.Handler{
	gMux := mux.NewRouter()
	gMux.HandleFunc("/", app.Welcome).Methods("GET")
	gMux.HandleFunc("/signIn", app.SignIn).Methods("GET")
	gMux.HandleFunc("/signUp", app.SignUp).Methods("GET")

	return gMux
}