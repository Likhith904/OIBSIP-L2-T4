# User Auth using Node.js & Passport Login

This is a user login and registration app using Node.js, Express, Passport, Mongoose, EJS and some other packages.
The passwords are stored in encrypted format using bcryptjs.

### Usage

```sh
$ npm install
```

```sh
$ npm start
# Or run with Nodemon
$ npm run dev

# Visit http://localhost:5000
```

### MongoDB

Open .env_sample and rename it to .env and add your mongodb uri there
```sh
MONGODB_URI = "YOUR_MONGODB_URI_HERE"
