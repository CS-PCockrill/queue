package models

import (
	"time"
)

type User struct{
	ID int `json:"id"`
	Name string `json:"name"`
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
}

type Driver struct{
	User User `json:"user"`
	HashedSSN string `json:"hashedSSN"`
	Insurance Insurance `json:"insurance"`

}

type Image struct{
	photo map[int]int
}

type Insurance struct{
	Proof Image `json:"proof"`
}