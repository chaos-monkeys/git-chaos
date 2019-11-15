package main

import (
	"bufio"
	"fmt"
	"io"
	"os"
)

const fileLocation = "../../../example/mysa-carbon-log.txt"

func readerCheck(e error) {
	if e != nil {
		panic(e)
	}
}

func openAndReadFile(fileName string) string {
	file, err := os.Open(fileName)
	readerCheck(err)
	lines, err := ReadFile(file)
	readerCheck(err)
	return lines
}

// ReadFile takes in a buffer and reads it line by line
func ReadFile(reader io.Reader) (string, error) {
	// TODO: Find way to remove declaring error
	var err error
	scanner := bufio.NewScanner(reader)
	for scanner.Scan() {
		// Instead of printing the line apply a the required parsing
		fmt.Println(scanner.Text())
	}

	if scanner.Err() != nil {
		err = scanner.Err()
	}

	return scanner.Text(), err
}

func main() {
	openAndReadFile(fileLocation)
}
