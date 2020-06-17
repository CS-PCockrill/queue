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

