## Instructions for Setting Up the API of the Project

### Installing Dependencies

```
(env) > pip install - r requirements\base.txt

```

### Create Table For the database

```
(env) > python manage.py makemigrations
(env) > python manage.py migrate

```
### Load data in database

<p>Loading Store in database</p>

```
(env) > python manage.py runscript load_store
```

<p>Loading product in database</p>

```
(env) > python manage.py runscript load_product
```

<p>Loading LoyaltyProgram in database</p>

```
(env) > python manage.py runscript load_loyalty
```
<p>Loading Sample User in database</p>

```
(env) > python manage.py runscript load_user
```

Credentials For Sample-User

```
    {
        username:test,
        password:test123
    }
```

### Run server

```
(env) > python manage.py runserver
```