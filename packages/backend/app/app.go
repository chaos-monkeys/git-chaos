package main

import (
	"log"
	"net/http"
)

// HealthCheckHandler provides a simple up / down api of the service
func HealthCheckHandler(w http.ResponseWriter, r *http.Request) {
	w.WriteHeader(http.StatusOK)
}

func main() {
	http.HandleFunc("/healthCheck", HealthCheckHandler)
	log.Fatal(http.ListenAndServe(":80", nil))
}
