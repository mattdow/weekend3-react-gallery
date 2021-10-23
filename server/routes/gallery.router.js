const express = require('express');
const router = express.Router();
const galleryItems = require('../modules/gallery.data');

// DO NOT MODIFY THIS FILE FOR BASE MODE

// PUT Route
router.put('/like/:id', (req, res) => {
    console.log(req.params);
    const galleryId = req.params.id;
    // Debugging code
    // console.log('galleryId is ', galleryId);
    
    for(const galleryItem of galleryItems) {
        // The way my program stack was shaping up, I needed to alter this code in some way.
        // The galleryId as I was console.logging it was ':3', which wouldn't match the
        // galleryItem.id field, as it is just a number. If I called the index 1 position of 
        // the 2-char string, that restored function. Not sure if this is a bug overall or 
        // if it became a bug just for me.
        if(galleryItem.id == galleryId[1]) { 
            console.log('ID found in PUT route', galleryId);
            
            galleryItem.likes += 1;
        }
    }
    res.sendStatus(200);
}); // END PUT Route

// GET Route
router.get('/', (req, res) => {
    res.send(galleryItems);
}); // END GET Route

module.exports = router;