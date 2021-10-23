const express = require('express');
const router = express.Router();
// const galleryItems = require('../modules/gallery.data');
const pool = require('../modules/pool');

// DO NOT MODIFY THIS FILE FOR BASE MODE

// PUT Route
router.put('/like/:id', (req, res) => {
    console.log(req.params);
    const galleryId = req.params.id;
    
    for(const galleryItem of galleryItems) {
        if(galleryItem.id == galleryId) { 
            console.log('ID found in PUT route', galleryId);
            
            galleryItem.likes += 1;
        }
    }
    res.sendStatus(200);
}); // END PUT Route

// GET Route, revised for database access
router.get('/', (req, res) => {
    let queryText = `SELECT * FROM "galleryitems"
                    ORDER BY "likes";`;
    pool.query(queryText).then(result => {
        res.send(result.rows);
    })
    .catch(error => {
        console.log('error getting gallery from server and db', error);
        res.sendStatus(500);        
    }); // end catch statement                   
}); // END GET Route

module.exports = router;