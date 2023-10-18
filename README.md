# API1 Boilerplate - Node & Express based API

- express and node based API with authenticated user custom middleware to protect private routes. 

- No endpoints except user auth.



### Setup

#### create a default.json file

- in the config folder to store the secret tokens for Mongo and JWT. store as a json object as follows

```
{
    "mongoURI":"<enter here>",
    "jwtSecret": "<enter here>"
}

```

#### run following command in terminal to run.

```bash
npm i && nodemon
```
