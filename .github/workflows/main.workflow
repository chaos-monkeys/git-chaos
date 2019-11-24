name: Hello World
# Triggers on Push
on: [push, pull_request]

jobs:
  echo:
    name: Echo
  build:
    name: HelloWorld
    runs-on: ubuntu-latest
    steps:
      - name: Hello world
        id: hello-world
        run: |
          echo "Hello World"
