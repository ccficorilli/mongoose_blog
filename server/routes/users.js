const express = require('express');
const router = express.Router();
const User = require('../models/User');

router.get('/', (req, res) => {
    User    
        .find()
        .then(users => {
            res.status(200).json(users);
        })
        .catch(err => console.log(`find ${err.message}`));
});
router.get('/:id', (req, res) => {
    const id = req.params.id;
    console.log(id)
    User    
        .findById(id)
        .then(found => {
            console.log(found);
            res.status(200).json(found)
        })
        .catch(err => res.status(404).send('Sorry, user not known'));
})
// router.post('/', (req, res) => {
//     const firstName = req.query.firstName;
//     const lastName = req.query.lastName;
//     const email = req.query.email;

// })
router.put('/:id', (req, res) => {
    const id = req.params.id;
    User
        .findByIdAndUpdate( id, {

            }
        )
        .then(saved => {
            res.status(200).send(`${id} saved successfully`)
        })
        .catch(err => console.log(err));
})

module.exports = router;