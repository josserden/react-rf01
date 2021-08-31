import ImageGalleryItem from '../ImageGalleryItem';
import './ImageGallery.scss';

const ImageGallery = ({ hits, onImageClick }) => {
    console.log(hits);
    return (
        <ul className="ImageGallery">
            {hits.map(({ id, largeImageURL, webformatURL, tags }) => (
                <ImageGalleryItem
                    onModal={onImageClick}
                    key={id}
                    image={webformatURL}
                    tags={tags}
                    largeImageURL={largeImageURL}
                />
            ))}
        </ul>
    );
};

export default ImageGallery;
