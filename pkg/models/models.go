package models

import (
	"time"
)

type User struct{
	ID int `json:"id"`
	FirstName string `json:"firstName"`
	LastName string `json:"lastName"`
	Email string `json:"email"`
	HashedPassword []byte `json:"hashedPassword"`
	Created time.Time `json:"created"`
	Active bool `json:"active"`
	Address Address `json:"address"`
}

type Address struct{
	Street string `json:"street"`
	City string `json:"city"`
	State string `json:"state"`
	Zip string `json:"zip"`
}

type Store struct{
	Name string `json:"name"`
	PhoneNumber string `json:"phoneNumber"`
	Owner string `json:"owner"`
	Address Address `json:"address"`
	Products []Product `json:"products"`
	Services []Service `json:"services"`
	// Services Rendered because services have different values and aren't products that can just be
	// picked up
}

type Service struct {
	ServiceId int `json:"serviceId"`
	ServiceName string `json:"serviceName"`
	ServicePrice float64 `json:"servicePrice"`
	ServiceDescription string `json:"serviceDescription"`
}

type Product struct{
	ProductId int `json:"productId"`
	ProductName string `json:"productName"`
	ProductPrice float64 `json:"productPrice"`
	ProductDescription string `json:"productDescription"`
}

type Driver struct{
	User User `json:"user"`
	HashedSSN string `json:"hashedSSN"`
	Insurance Insurance `json:"insurance"`
	License License `json:"license"`
	Vehicle Vehicle `json:"vehicle"`
}

type Image struct{
	photo map[int]int
}

type Vehicle struct {
	VehicleMake string `json:"vehicleMake"`
	VehicleModel string `json:"vehicleModel"`
	VehicleYear string `json:"vehicleYear"`
	VehicleColor string `json:"vehicleColor"`
	VinNumber string `json:"vinNumber"`
}

type Insurance struct{
	Insured *User `json:"insured"`
	InsuranceProvider string `json:"insuranceProvider"`
	PolicyNumber string `json:"policyNumber"`
	ExpirationDate time.Time `json:"expirationDate"`
	Vehicle Vehicle `json:"vehicle"`
}

type License struct{
	Proof Image `json:"proof"`
}
