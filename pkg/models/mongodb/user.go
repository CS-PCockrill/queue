package mongodb

import (
	"github.com/CS-PCockrill/queue/pkg/models"
	"go.mongodb.org/mongo-driver/mongo"
)

type UserFunctions struct{
	MGO *mongo.Client
}

func (u *UserFunctions) Insert(user *models.User) error{
	//Insert user to the database
	return nil
}

func (u *UserFunctions) Authenticate(email, password string) (int, error){
	//Authenticate user before login
	return 0, nil
}

func (u *UserFunctions) GetUser(id int) *models.User{
	//Get a user with its id
	return nil
}

