import './ImageGalleryItem.scss';

const ImageGalleryItem = ({ image, largeImageURL, tags, onModal }) => {
    console.log(largeImageURL);
    return (
        <li className="ImageGalleryItem">
            <img
                className="ImageGalleryItem-image"
                onClick={() => onModal(largeImageURL)}
                src={image}
                alt={tags}
            />
        </li>
    );
};

export default ImageGalleryItem;
