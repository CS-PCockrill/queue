package mongodb

import (
	"github.com/CS-PCockrill/queue/pkg/models"
)

func RegisterDriver(driver *models.Driver) (int, error) {
	// Register a driver, verify background check, and verify state id & insurance
	return 0, nil
}

func Validate(email, password string) (int, error) {
	// Validate the drivers login credentials
	return 0, nil
}

func getDriver(id int) *models.Driver {
	// Get a driver with parameter id
	return nil
}