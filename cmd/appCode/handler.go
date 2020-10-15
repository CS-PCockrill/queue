package main

import (

	"encoding/json"
	"errors"
	"fmt"
	"net/http"


	"github.com/CS-PCockrill/queue/pkg/forms"
	"github.com/CS-PCockrill/queue/pkg/models"
	"github.com/gorilla/mux"


)

func setupCorsResponse(w *http.ResponseWriter, req *http.Request) {
	(*w).Header().Set("Context-Type", "application/x-www-form-urlencoded")
	(*w).Header().Set("Access-Control-Allow-Origin", "*")
	(*w).Header().Set("Access-Control-Allow-Methods", "POST, GET, OPTIONS, PUT, DELETE")
	(*w).Header().Set("Access-Control-Allow-Headers", "Accept, Content-Type, Content-Length, Authorization")
 }

func (app *appInjection) Welcome(w http.ResponseWriter, r *http.Request) {
	_, _ = w.Write([]byte("Welcome to Queue Delivery"))
	allUser := app.user.GetUsers()
	w.Header().Set("content-type", "application/json")
	json.NewEncoder(w).Encode(allUser)
}

func (app *appInjection) SingleUser(w http.ResponseWriter, r *http.Request) {
	params := mux.Vars(r)
	username := params["username"]
	user := app.user.GetUser(username)
	w.Header().Set("content-type", "application/json")
	json.NewEncoder(w).Encode(user)
}

func (app *appInjection) SignUp(w http.ResponseWriter, r *http.Request) {
	setupCorsResponse(&w, r)
	if (*r).Method == "OPTIONS" {
		fmt.Println(w)
		fmt.Fprintln(w)
		return
	}
	
	//Parse the form data
	err := r.ParseForm()
	if err != nil { // I have the app up and running in terminal
		app.clientError(w, http.StatusBadRequest)
		return
	}

	//Validate the form
	form := forms.New(r.PostForm)
	form.Required("userName", "firstName", "lastName", "email", "password")
	form.MaxLength("userName", 255)
	form.MaxLength("firstName", 255)
	form.MaxLength("lastName", 255)
	form.MaxLength("email", 255)
	form.MatchesPattern("email", forms.EmailRX)
	form.MinLength("password", 10)

	//If there are any errors, redisplay the signup form.
	if !form.Valid() {
		//Send the user back to the signUp page, then return
		return
	}

	//If there is no error and the form is validated, create a new user from http request
	//Insert the new user into the database
	err = app.user.Insert(
		form.Get("username"),
		form.Get("firstName"),
		form.Get("lastName"),
		form.Get("email"),
		form.Get("password"))

	if err != nil {
		if errors.Is(err, models.ErrDuplicateEmail) {
			form.Errors.Add("email", "Address is already in use")
			//Return the signUp page back to the user
		} else {
			app.serverError(w, err)
		}
		return
	}

	fmt.Fprintln(w, "Record Inserted")

	//And redirect the user to the login page
	// _, _ = w.Write([]byte("Sign Up"))
}

func (app *appInjection) SignIn(w http.ResponseWriter, r *http.Request) {
	err := r.ParseForm()
	if err != nil {
		app.clientError(w, http.StatusBadRequest)
		return
	}
	//Check that user credentials are valid, if not send user a message,
	//then re-display the login page
	form := forms.New(r.PostForm)
	id, err := app.user.Authenticate(form.Get("email"), form.Get("password"))
	if err != nil {
		if errors.Is(err, models.ErrInvalidCredentials) {
			form.Errors.Add("message", "Incorrect Email or Password")
			//Here is when login page is re-displayed
		} else {
			app.serverError(w, err)
		}
		return
	}
	//TODO: Placeholder to add ID of the current user to the session.
	//For now, just write the ID
	fmt.Fprintln(w, id)

	//If SignIn is successful, redirect the user to the page that will be displayed.

	// _, _ = w.Write([]byte("Sign In"))
}
