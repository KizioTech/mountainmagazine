# Mountain Fashion Magazine

## Project Description

This project is a website for a fashion magazine called "Mountain Fashion Magazine". It includes a user authentication system that allows users to register, login, and logout. It also includes a password reset feature.

## Installation Instructions

1.  Clone the repository to your local machine.
2.  Create a MySQL database named `mountain`.
3.  Create a `users` table in the `mountain` database using the following SQL command:

    ```sql
    CREATE TABLE users (
        id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
        username VARCHAR(50) NOT NULL UNIQUE,
        password VARCHAR(255) NOT NULL,
        created_at DATETIME DEFAULT CURRENT_TIMESTAMP
    );
    ```

4.  Update the `config.php` file with your database credentials.
5.  Make sure the web server has write permissions to the project directory.

## Usage Instructions

1.  Navigate to the project directory in your web browser.
2.  You will be redirected to the login page.
3.  If you don't have an account, you can create one by clicking on the "Sign up now" link.
4.  Once you are logged in, you will be redirected to the home page.

## Database Schema

The database schema consists of a single table named `users`.

**users**

| Column | Type | Description |
| --- | --- | --- |
| id | INT | Primary key. Auto-incrementing. |
| username | VARCHAR(50) | The user's username. Must be unique. |
| password | VARCHAR(255) | The user's hashed password. |
| created_at | DATETIME | The date and time the user was created. |

## File Descriptions

*   `index.php`: The home page of the website.
*   `login.php`: The login page.
*   `register.php`: The registration page.
*   `welcome.php`: The page that is displayed after a user logs in.
*   `logout.php`: The script that logs the user out.
*   `reset-password.php`: The page that allows users to reset their password.
*   `config.php`: The database configuration file.
*   `auth.php`: The script that handles user authentication.
*   `.htaccess`: The file that handles URL rewriting and denies access to certain files.
*   `assets/`: This directory contains the CSS, images, and JavaScript files for the website.
*   `components/`: This directory contains the HTML components for the website, such as the navbar and footer.
*   `public/`: This directory contains the public pages of the website, such as the contact and about pages.