SHELL := /bin/sh

VENV=.venv
LOCALCONF=--settings=conf.settings.local

runserver:
	@python manage.py runserver $(LOCALCONF)

makemigrations:
	@python manage.py makemigrations $(LOCALCONF)

migrate:
	@python manage.py migrate $(LOCALCONF)

test:
	@python manage.py test $(LOCALCONF)

shell:
	@python manage.py shell $(LOCALCONF)
