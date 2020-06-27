package mongodb

import (
	"context"
	"fmt"
	"github.com/CS-PCockrill/queue/pkg/models"
	"go.mongodb.org/mongo-driver/bson"
	"go.mongodb.org/mongo-driver/mongo"
	"go.mongodb.org/mongo-driver/mongo/options"
)

type UserFunctions struct{
	CLIENT *mongo.Client
	CTX context.Context
}

func (u *UserFunctions) Insert(user *models.User) error{
	//Insert user to the database
	return nil
}

func (u *UserFunctions) Authenticate(email, password string) (int, error){
	//Authenticate user before login
	return 0, nil
}

//func (u *UserFunctions) GetUser(id int) []models.User{
//
//}

func (u *UserFunctions) GetUser() []models.Students{
	//Get a user with its id
	myUser := u.CLIENT.Database("students")
	moviesCollection := myUser.Collection("grades")
	var students []models.Students
	options := options.Find()
	options.SetLimit(10)
	cursor, err := moviesCollection.Find(u.CTX,bson.M{}, options)

	if err != nil {
		panic(err)
	}
	defer cursor.Close(u.CTX)
	//for cursor.Next(u.CTX){
	//	var oneMovie models.Movie
	//	cursor.Decode(oneMovie)
	//	movies = append(movies, oneMovie)
	//}
	if err = cursor.All(u.CTX, &students); err != nil {
		fmt.Println(err)
		panic(err)
	}
	return students
}

