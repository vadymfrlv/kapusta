# Kapu$ta

## Description 📑

Kapusta is a web application with authentication that allows users to add transactions and view
expense and income statistics in the form of charts. It also features login with Google
functionality. After registration, users will be prompted to enter their initial balance,
accompanied by a sound effect. The application also includes a dark theme and internationalization.

The application consists of the following routes:

- `/` - a public route that displays a login, registration, or Google login form.
- `/transactions` - a private route that displays the Home component with nested routes.
- `/transactions/expenses` - a private route that displays expenses and a form to add new expenses.
- `/transactions/income` - a private route that displays income and a form to add new income.
- `/reports` - a private route that displays expense and income charts by categories.

## Demo 🖥

![Demo](https://raw.githubusercontent.com/vadymfrlv/storage/main/demos/phonebook/phonebook-demo.gif)

## Installation ⚡️

To launch a project on GitHub, you first need to clone the project to your local machine. For
instance, if you're working with a React project created using create-react-app, you can clone the
project by running the command git clone `https://github.com/vadymfrlv/phonebook.git` in your
terminal.

After the project has been cloned, you need to navigate to the project directory and install any
dependencies that the project requires. You can do this by running the command `npm install` in your
terminal.

Once all dependencies have been installed, you can start the development server by running the
command <br> `npm start`. This will launch the project in your default browser and any changes you
make to the code will automatically update in the browser.

## Backend API ⚙️

The application communicates with a backend server to perform various operations. The following API
endpoints are used:

### Authorization endpoints:

#### POST

- `​/auth​/register` - User registration
- `​/auth​/login` - User authentication
- `/auth​/logout` - User logout

#### GET

- `​/auth​/google` - Google authentication. <b> WARNING: </b> Works only for sign-in, after
  registered on front-end (if you're writing your back-end for a SPECIFIC front-end, then you can
  configure it right to work both for sign-up & sign-in)

### Transaction endpoints:

#### GET

- `/transaction​/income` - Get income stats
- `​/transaction​/expense` - Get expense stats
- `​​/transaction​/income-categories` - Get categories for incomes
- `​/transaction​/expense-categories` - Get categories for expenses
- `/transaction​/period-data` - Get transactions data for a specific period

#### POST

- `​/transaction​/income` - Add an income
- `​/transaction​/expense` - Add an expense

#### DELETE

- `/transaction` - Delete transaction

### User endpoints:

#### GET

- `/user` - Get all user info

#### PATCH

- `/user/balance` - Update user's balance

Please refer to the backend documentation for detailed information on these endpoints and schemas
[<b>`https://kapusta-backend.goit.global/api-docs/#/`</b>](https://kapusta-backend.goit.global/api-docs/#/)

## Tech Stack 🛠

The Kapusta application is built using the following technologies:

- React
- Redux Toolkit
- React Router DOM
- React Responsive
- Axios
- Formik
- Yup
- Nanoid
- Moment
- i18next
- Chart.js
- React Loader Spinner

## Author 👨🏻‍💻

This app was developed by frlv
