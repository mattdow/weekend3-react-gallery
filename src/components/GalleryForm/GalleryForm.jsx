import { useState } from 'react';
import { Typography, TextField, Input, Button } from '@mui/material';
import './GalleryForm.css';

function GalleryForm({ addItem }) {
    const [newImage, setNewImage] = useState('');
    const [newDescription, setNewDescription] = useState('');

    const handleSubmit = (event) => {
        // prevent any default functionality from executing
        event.preventDefault();
        // define a new gallery object to add to the array
        const newGalleryObject = {
            path: newImage,
            description: newDescription
        };
        // reset our input fields after creating the object
        setNewImage('');
        setNewDescription('');
        // add the new object to the gallery, and logging for troubleshooting
        addItem(newGalleryObject);
        console.log(newGalleryObject);
    }
    // returning JSX to render the form to the DOM
    return (
        <>
          <Typography variant="h4">
              Add an Image
          </Typography>
          <form onSubmit={handleSubmit}>
                <TextField
                    className="text-input"
                    required
                    margin="normal"
                    fullWidth
                    type='text'
                    placeholder='URL of your image'
                    value={newImage}
                    onChange={(evt) => setNewImage(evt.target.value)}
                />
                <TextField
                    className="text-input"
                    fullWidth
                    margin="normal"
                    type='text'
                    placeholder='Description'
                    value={newDescription}
                    onChange={(evt) => setNewDescription(evt.target.value)}
                />
                <Button 
                    variant="contained" 
                    color="primary"
                    type='submit' 
                    value='Save Image'>Save Image
                </Button>
          </form>
        </>
      );
}

export default GalleryForm;