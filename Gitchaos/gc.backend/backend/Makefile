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

loaddata:
	@python manage.py loaddata data $(LOCALCONF)

database: | migrate loaddata

coverage:
	coverage erase
	coverage run manage.py test $(LOCALCONF)

coverage-report:
	coverage html
