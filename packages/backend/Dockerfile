FROM golang:latest

# Add Maintainer Info
LABEL maintainer="Chaos Monkeys <admin@chaosmonkeys.dev>"

WORKDIR /app

# Uncoment when we add modules
# COPY go.mod go.sum ./

# Uncoment when we have dependencies / dependencies are cached.
# RUN go mod download

# Copy the source from the current directory to the Working Directory inside the container
COPY ./app .

# Build the Go app
RUN go build -o app .

# Expose port 8080 to the outside world
EXPOSE 8080

# Command to run the executable
CMD ["./app"]