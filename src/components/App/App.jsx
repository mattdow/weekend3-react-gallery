import React, { useEffect, useState} from 'react';
import './App.css';
import axios from "axios";

function App() {
  // Define and initialize our array of images, and the method we use to set their state.
  let [galleryItems, setGalleryItems] = useState([]);

  // define a function to GET the gallery items from the route /gallery
  const getGalleryItems = () => {
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

  // call useEffect to intialize the page and grab the initial array of photos from the server
  useEffect(() => {
    getGalleryItems();
  }, []);
  // render the content from App to the DOM
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Gallery of My Life</h1>
        </header>
        <p>Gallery goes here</p>
        <img src="images/goat_small.jpg"/>
      </div>
    );
}

export default App;
