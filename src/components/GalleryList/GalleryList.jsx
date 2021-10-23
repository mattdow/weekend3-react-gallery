import GalleryItem from '../GalleryItem/GalleryItem';

function GalleryList ({galleryItems, getGalleryItems}) {
    console.log('In GalleryList');

    // console.log(galleryItems[0].path);
    // create JSX content to render to the DOM when GalleryList is called
    return (
        <div className="container">
            {/* code to test if the data is properly transferred to galleryList */}
            {/* {galleryItems.map((item) => (
                <li>
                    <img src={item.path} />
                    Likes: {item.likes}
                </li> */}
            
            {galleryItems.map((item) => (
                <GalleryItem
                    item={item}
                    key={item.id}
                    getGalleryItems={getGalleryItems}
                />
            ))}
        </div>
    )
}

export default GalleryList