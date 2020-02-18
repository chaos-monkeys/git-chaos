FROM python:3.7.5

COPY requirements.txt /requirements.txt
RUN pip install -r requirements.txt

RUN mkdir /src
COPY backend /src/
WORKDIR /src

ENV DEPLOY_ENV=production

RUN ["chmod", "+x", "docker-entrypoint.sh"]
ENTRYPOINT ["/src/docker-entrypoint.sh"]

EXPOSE 8000
CMD ["uwsgi", "--ini", "/src/conf/uwsgi.ini"]
