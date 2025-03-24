# Movie Management Application

A simple Movie Management Application built using Django (Backend) and
React (Frontend). This project allows users to view a list of movies,
search for movies, and perform CRUD operations (Create, Read, Update,
Delete) on the movies in the database.

## Project Features:

-   Fetches and displays a list of movies.
-   Users can search movies by title.
-   Perform CRUD operations on movies (Create, Update, Delete).
-   Interactive frontend with React and a RESTful backend built with
    Django.

------------------------------------------------------------------------

## Technologies Used:

### Backend:

-   Django (for creating the API and managing the database)
-   Django Rest Framework (for building API endpoints)
-   SQLite (Database for development; can be replaced with PostgreSQL or
    another database for production)

### Frontend:

-   React (for building the user interface)
-   Axios (for making HTTP requests to the Django API)

------------------------------------------------------------------------

## Installation Guide

### 1. Clone the Repository:

\`\`\`bash git clone `<repository_url>`{=html} cd
`<project_directory>`{=html} 2. Setup Backend (Django): Install the
required dependencies for the backend: bash Copy Edit cd Backend python
-m venv env \# Create a virtual environment source env/bin/activate \#
Activate the virtual environment (Windows:
env`\Scripts`{=tex}`\activate`{=tex}) pip install -r requirements.txt \#
Install the dependencies Set up the database and run migrations: bash
Copy Edit python manage.py migrate \# Apply database migrations python
manage.py runserver \# Start the Django development server The backend
should now be running on http://127.0.0.1:8000/.

3.  Setup Frontend (React): Install the required dependencies for the
    frontend: bash Copy Edit cd frontend npm install \# Install
    dependencies using npm Run the React development server: bash Copy
    Edit npm start \# Start the React development server The frontend
    should now be running on http://localhost:3000/.

Usage: The frontend will make API calls to the Django backend, which
will handle CRUD operations.

You can add movies, update their details, or delete them directly from
the user interface.

The search bar allows users to search for movies by title.

API Endpoints: Movies API: GET /movies/: Fetches the list of all movies.

POST /movies/: Create a new movie.

PUT /movies/{id}/: Update an existing movie.

DELETE /movies/{id}/: Delete a movie.

Notes: Make sure both the backend and frontend servers are running for
the application to function properly.

If you face any issues, check the browser console or Django server logs
for errors.

The project uses SQLite as the default database. You can configure a
different database like PostgreSQL in the settings.py file of Django.

License: This project is open-source and available under the MIT
License.

Author: Your Name / Your Team Name

vbnet Copy Edit

This `README.md` covers the basic project description, setup, usage, and
API endpoints. You can adjust it based on your project specifics or
further details you might need to add.

Let me know if you need more changes or adjustments!
