import './GalleryItem.css'
import React, { useEffect, useState} from 'react';
import axios from 'axios';

function GalleryItem({item, getGalleryItems}) {
    // define a variable and setter to determine if the pic or description should show
    let [showPic, setShowPic] = useState(true);

    // define a quick function to toggle between picture and description
    const togglePic = () => {
        // setting the toggle to it's opposite
        setShowPic(!showPic)
    }

    // define a function to make a PUT request with an added like to a gallery item 
    const likePic = () => {
        // create an ID parameter
       let idToAddLike = item.id;
       console.log('Clicked like on gallery item', item.id, item);
       axios({
           method: 'PUT',
           // call the parameter to match the url in the gallery router
           url: `/gallery/like/${idToAddLike}`
       })
       .then((response) => {
           console.log('PUT add like response is', response);
           // call a refresh of the gallery and subsequent re-render
           getGalleryItems();
           console.log(item.likes);
       })
       .catch((error) => {
           console.log('PUT like error', error);
       });
    };

    // set out rendering code for each photo item
    return (

        <div className="gallery-item">
            {/* create a div to store either the pic or description */}
            <div className="picOrDesc">
                {/* Conditional rendering for either pic or description */}
                {showPic ?
                    (<img src={item.path} onClick={togglePic} />)
                    :(<p onClick={togglePic}>{item.description}</p>)
                }
            </div>
            
            <button className="btn" onClick={likePic}>love it!</button>
                {/* Conditional rendering for like message */}
                {item.likes !== 0 ?
                    (<p>{item.likes} people love this!</p>)
                    :(<p>No people love this :(</p>)
                }
        </div>

    )
}

export default GalleryItem;