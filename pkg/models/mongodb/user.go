package mongodb

import (
	"github.com/CS-PCockrill/queue/pkg/models"
)

func Insert(user *models.User) error{
	//Insert user to the database
	return nil
}

func Authenticate(email, password string) (int, error){
	//Authenticate user before login
	return 0, nil
}

func GetUser(id int) *models.User{
	//Get a user with its id
	return nil
}

func isAuthenticated(user models.User) bool {
	// Authenticated whether the user is logged in
	// Return T or F
	return false
}