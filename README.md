# Git Chaos

## Getting Started

In order to get the python application up and running there are a few steps.

Only the database has been Dockerised.

### Prerequisites

Make sure you're running `python 3.7.X` and `virtualenv`.

### Setting up

- In the root dir: `docker-compose up --build`
  - This spins up the PostgreSQL 11 database
- `cd Gitchaos/gc.backend`
- `virtualenv .venv`
  - Creates a virtualenv to put all project deps
- `source .venv/bin/activate`
  - Activates the virtual env - deactivate to deactivate the virtualenv
- `pip install -r requirements.txt`
  - Recursively installs all packages from requirements.txt to .venv
- `cd backend`
- `make migrate`
  - Runs all the migrations to the Docker database)
- `make runserver`

  - Starts the Python Django webserver

### Running the tests

- `make test`
