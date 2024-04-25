
#Get the lastest mysql image
FROM mysql:latest

#Set environments variables for Mysql
ENV MYSQL_DATABASE=blog_db
ENV MYSQL_ROOT_PASSWORD=root_password

#User and password for mysql 
ENV MYSQL_USER = blog_user
ENV MYSQL_PASSWORD = blog_password


COPY schema.sql ./docker-entrypoint-initdb.d/

