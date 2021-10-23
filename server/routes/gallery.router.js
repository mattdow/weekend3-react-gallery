const express = require('express');
const router = express.Router();
// const galleryItems = require('../modules/gallery.data');
const pool = require('../modules/pool');

// DO NOT MODIFY THIS FILE FOR BASE MODE

// PUT Route
router.put('/like/:id', (req, res) => {
    console.log(req.params);
    const galleryId = req.params.id;
    let queryText = `UPDATE "galleryitems"
                    SET likes = likes+1
                    WHERE id = $1;`;
    pool.query(queryText, [galleryId])
        .then((result) => {
            console.log('PUT add like result is', result);
            res.sendStatus(201);            
        })
        .catch((err) => {
            console.log('Error making PUT edit to likes', err);
            res.sendStatus(500);            
        });
    // deprecated code for hardcoded array
    // for(const galleryItem of galleryItems) {
    //     if(galleryItem.id == galleryId) { 
    //         console.log('ID found in PUT route', galleryId);
            
    //         galleryItem.likes += 1;
    //     }
    // }
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