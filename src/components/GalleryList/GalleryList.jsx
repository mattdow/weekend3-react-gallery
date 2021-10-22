

function GalleryList ({galleryItems}) {
    console.log('In GalleryList');

    console.log(galleryItems[0].path);
    // create JSX content to render to the DOM when GalleryList is called
    return (
        <ul>
            {galleryItems.map((item) => (
                <li>
                    <img src={item.path} />
                    Likes: {item.likes}
                </li>
            ))}
            {/* {galleryItems.map((item) => (
                <GalleryItem
                    item={item}
                    key={item.id}
                    getGalleryItems={getGalleryItems}
                />
            ))} */}
        </ul>
    )
}

export default GalleryList