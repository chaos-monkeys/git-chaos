package main

import (
	"bytes"
	"fmt"
	"testing"
)

func TestOpenFile(t *testing.T) {
	var buffer bytes.Buffer
	buffer.WriteString("--0baee5fe3--2019-05-20--Commit Author")
	content, err := ReadFile(&buffer)
	if err != nil {
		t.Error("Failed to read csv data")
	}
	fmt.Print(content)
}
