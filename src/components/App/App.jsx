import React, { useEffect, useState} from 'react';
import './App.css';
import axios from 'axios';
import Typography from '@mui/material/Typography';
import GalleryList from '../GalleryList/GalleryList';
import GalleryForm from '../GalleryForm/GalleryForm';


function App() {
  // Define and initialize our array of images, and the method we use to set their state.
  let [galleryItems, setGalleryItems] = useState([]);

  // define a function to GET the gallery items from the route /gallery
  const getGalleryItems = () => {
    console.log('In getGalleryItems');
    axios
      .get('/gallery')
      .then((response) => {
        console.log('Gallery list is ->', response.data);
        // Use the set state function to load the array of photos from the server response
        setGalleryItems(response.data);
        // Prepare a console.log in case of error in the GET request.
      }).catch((err) => {
        console.log('Error getting gallery', err);
      })
  }
  // define a function to POST new gallery items
  const addItem = (newGalleryObject) => {
    axios
      .post('/gallery', newGalleryObject)
      .then((response) => {
        console.log('New gallery object', newGalleryObject);
        // call the GET function to reload and re-render
        getGalleryItems();
      })
      .catch((err) => {
        console.log('Error in POST method', err);
      });
  };

  // call useEffect to intialize the page and grab the initial array of photos from the server
  useEffect(() => {
    getGalleryItems();
  }, []);
  // render the content from App to the DOM
    return (
      <div className="App">
        <header className="App-header">
          <Typography variant="h2" className="App-title">Matt-agram
          </Typography>
        </header>
        <GalleryForm addItem={addItem} />
        <GalleryList galleryItems={galleryItems} getGalleryItems={getGalleryItems} />
      </div>
    );
}

export default App;
