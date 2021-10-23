import { useState } from 'react';
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
          <h2>Add an Image to the Gallery</h2>
          <form onSubmit={handleSubmit}>
                <input
                    className='text-input'
                    type='text'
                    placeholder='URL of your image'
                    value={newImage}
                    onChange={(evt) => setNewImage(evt.target.value)}
                />
                <input
                    className='text-input'
                    type='text'
                    placeholder='Description'
                    value={newDescription}
                    onChange={(evt) => setNewDescription(evt.target.value)}
                />
                <input type='submit' value='Save Image'/>
          </form>
        </>
      );
}

export default GalleryForm;