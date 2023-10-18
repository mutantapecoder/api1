const express = require('express');
const router = express.Router();

//routes

// GET      /api/profiles       PUBLIC
// POST     /api/profiles       PRIVATE
// GET      /api/profiles/:id   PUBLIC
// PUT      /api/profiles/:id   PRIVATE 
// PATCH    /api/profiles/:id   PRIVATE
// DELETE   /api/profiles/:id   PRIVATE



// route -> /api/profile
// desc -> shows all the users and their public profiles.
// access -> public - anyone can see all the users and their profiles.

router.get('/', (req, res) => {
    res.send("profile route")
})


module.exports = router;