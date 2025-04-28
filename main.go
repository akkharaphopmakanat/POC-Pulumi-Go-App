package main

import (
	"fmt"
	"net/http"
)

func handler(w http.ResponseWriter, r *http.Request) {
	fmt.Fprintf(w, "Hello from Go API running on DigitalOcean!")
}

func main() {
	http.HandleFunc("/", handler)
	port := ":8080"
	fmt.Println("Server listening on", port)
	http.ListenAndServe(port, nil)
}
