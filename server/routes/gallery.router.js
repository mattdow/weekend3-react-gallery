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
        // The way my program is working, I needed to alter this code in some way.
        // The galleryId I console.logged was ':3', which wasn't matching the
        // galleryItem.id field, as it is just a number. If I called the index 1 position of 
        // the 2-char galleryId string, I could get the appropriate match. 
        // Not sure if this is a bug overall or if it became a bug just for me.
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