## This is API of the shop project given in capgemini full stack hackathon challenge

### Here are the instructions for setting up the API of the project

<strong>Python3 required</strong>

**Step-1** :- <p>Cloning the project</p>

```
git clone https://github.com/vinitraj10/shop-api api

```
**Step-2** :- <p>Installing Virtualenvironment</p>

```
python -m venv env
```

**Step-3** :- <p>Activating the Environment</p>
In windows
```
env\scripts\activate
```
**Step-4** :- <p>Go to api project and Install dependencies</p>

```
cd api
pip install -r requirements\base.txt
```
**Step-5** :- <p>Starting up the server and migrating apps</p>

```
python manage.py makemigrations
python manage.py migrate
python manage.py runserver
```

**Step-6** :- <p>Go to your browser and access it at http://localhost:8000</p>
