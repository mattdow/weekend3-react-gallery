import './GalleryItem.css'
import React, { useEffect, useState} from 'react';

function GalleryItem ({item}, {getGalleryItems}) {
    // define a variable and setter to determine if the pic or description should show
    let [showPic, setshowPic] = useState(true);

    const togglePic = () => {
        // setting the toggle to it's opposite
        setshowPic(!showPic)
    }

    // set out rendering code for each photo item
    return (

        <div className="gallery-item">
            {/* create a div to store either the pic or description */}
            <div className="picOrDesc">
                {/* Conditional rendering for either pic or description */}
                {showPic ?
                (<img src={item.path} onClick={togglePic} />)
                :<p onClick={togglePic}>{item.description}</p>}
            </div>
            
            <button className="btn">love it!</button>
            <p>{item.likes} people love this!</p>
        </div>

    )
}

export default GalleryItem;