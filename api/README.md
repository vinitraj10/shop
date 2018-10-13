## Overview
This is the Instructions for Setting Up the API of the Project Shop

## Project Setup

Installing Dependencies
```
(env) > pip install - r requirements\base.txt

```
Intialize Database
```
(env) > python manage.py makemigrations
(env) > python manage.py migrate

```
## Load data in database

Loading Store in database

```
(env) > python manage.py runscript load_store
```

Loading product in database

```
(env) > python manage.py runscript load_product
```

Loading LoyaltyProgram in database

```
(env) > python manage.py runscript load_loyalty
```
Loading Sample User in database

```
(env) > python manage.py runscript load_user
```

Credentials For Sample-User

```
    username: test,
    password: test123
```

### Run server

```
(env) > python manage.py runserver
```