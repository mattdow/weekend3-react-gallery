import './GalleryItem.css'

function GalleryItem ({item}, {getGalleryItems}) {


    // set out rendering code for each photo item
    return (

        <div className="gallery-item">
            <img src={item.path} />
            <button className="btn">love it!</button>
            <p>{item.likes} people love this!</p>
        </div>

    )
}

export default GalleryItem;