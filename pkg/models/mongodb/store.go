package mongodb

import (
	"github.com/CS-PCockrill/queue/pkg/models"
	"go.mongodb.org/mongo-driver/mongo"
)

type StoreFunctions struct{
	MGO *mongo.Client
}
func (s *StoreFunctions) RegisterStore(store *models.Store) (int, error) {
	// Register a store after registering a user...
	return 0, nil
}

<<<<<<< HEAD
func InsertOneProduct(product *models.Product) (int, error) {
=======
func (s *StoreFunctions) InsertOneProduct(product *models.Product) (int, error) {
>>>>>>> tfalade-queue
	// Insert just one product if there is only 1
	return 0, nil
}

<<<<<<< HEAD
func InsertManyProducts([]product *models.Product) (int, error) {
=======
func (s *StoreFunctions) InsertManyProducts(products ...*models.Product) (int, error) {
>>>>>>> tfalade-queue
	// Insert many products if there is an array of products
	return 0, nil
}

<<<<<<< HEAD
func InsertOneService(service *models.Service) (int, error) {
	return 0, nil
}

func InsertManyServices([]service *models.Service) (int, error) {
=======
func (s *StoreFunctions) InsertOneService(service *models.Service) (int, error) {
	return 0, nil
}

func (s *StoreFunctions) InsertManyServices(services ...*models.Service) (int, error) {
>>>>>>> tfalade-queue
	return 0, nil
}
