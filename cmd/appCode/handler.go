package main

import (
	"encoding/json"
	"net/http"
)

func (app *appInjection) Welcome(w http.ResponseWriter, r *http.Request){
	//_, _ = w.Write([]byte("Welcome to Queue Delivery"))
	allUser := app.user.GetUser()
	w.Header().Set("content-type", "application/json")
	json.NewEncoder(w).Encode(allUser)
}

func (app *appInjection) SignUp(w http.ResponseWriter, r *http.Request){
	//if r.Method == http.MethodPost{
	//	Handle SignUp
	//}
	_, _ = w.Write([]byte("Sign Up"))
}

func (app *appInjection) SignIn(w http.ResponseWriter, r *http.Request){
	//if r.Method == http.MethodPost{
	//	Handle SignIn
	//}
	_, _ =w.Write([]byte("Sign In"))
}