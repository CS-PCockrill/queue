package main

import "net/http"

func Welcome(w http.ResponseWriter, r *http.Request){
	_, _ = w.Write([]byte("Welcome to Queue Delivery"))
}

func SignUp(w http.ResponseWriter, r *http.Request){
	//if r.Method == http.MethodPost{
	//	Handle SignUp
	//}
	_, _ = w.Write([]byte("Sign Up"))
}

func SignIn(w http.ResponseWriter, r *http.Request){
	//if r.Method == http.MethodPost{
	//	Handle SignIn
	//}
	_, _ =w.Write([]byte("Sign In"))
}