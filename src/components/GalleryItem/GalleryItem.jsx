import './GalleryItem.css'
import React, { useEffect, useState} from 'react';
import axios from 'axios';
// Importing various MaterialUI components
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';


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

    // define a function to make a DELETE request on the particular 
    // image clicked

    const deletePic = () => {
        // initialize and define the ID to delete
        let idToDelete = item.id;
        console.log('Clicked delete for', item.description);
        axios({
            method: 'DELETE',
            // call the route to match the server side route
            url: `/gallery/${idToDelete}`,
        })
        .then((response) => {
            console.log('DELETE response is', response);
            // recall GET method to update list and DOM
            getGalleryItems();
        })
        .catch((error) => {
            console.log('DELETE error', error);
        }); // end of axios delete route
    }; // end of deletePic function

    // JSX rendering code for each photo item
    return (
        <div className="card-gallery">
         
        <Card variant="outlined" sx={{ maxWidth: 200 }}>  
          <CardActionArea>
            {/* Conditional rendering to show picture or description */}
            {showPic ? 
                <CardMedia
                    component="img"
                    height="150"
                    width="150"
                    image={item.path}
                    onClick={togglePic}
                />
                : <CardContent>
                    <Typography gutterBottom variant="body2" color="text.secondary" onClick={togglePic}>
                    {item.description}
                    </Typography>
                    </CardContent>
            }
          </CardActionArea>
          
            <Button size="small" color="primary" onClick={likePic}>Love This!</Button>
            {/* Conditional rendering for like message */}
            {item.likes !== 0 ? 
                      <Typography gutterBottom variant="body2">{item.likes} people love this!</Typography>
                     :<Typography gutterBottom variant="body2">No people love this :(</Typography>
            }
            {/* Button to delete card */}
            <Button size="small" color="warning" onClick={deletePic}>Delete</Button>
           
        </Card>
        </div>
    )
}

export default GalleryItem;