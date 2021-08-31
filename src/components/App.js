import React, { Component } from 'react';
import imageApi from '../services/image-api';
import Container from './Container';
import Searchbar from './Searchbar/Searchbar';
import ImageGallery from './ImageGallery';
import Button from './Button/Button';
import Modal from './Modal';

class App extends Component {
    state = {
        searchQuery: '',
        hits: [],
        currentPage: 1,
        modal: false,
        modalImage: '',
    };

    componentDidUpdate(prevProps, prevState) {
        if (prevState.searchQuery !== this.state.searchQuery) {
            this.fetchImg();
        }
    }

    // useEffect(() => {
    //     if (!searchQuery) {
    //       return;
    //     }

    //     fetchImg();
    //   }, [searchQuery]);

    handleInputChange = data => {
        this.setState({ searchQuery: data.trim(), currentPage: 1, hits: [] });
    };

    fetchImg = () => {
        const { searchQuery, currentPage } = this.state;
        const option = { searchQuery, currentPage };
        if (!searchQuery) return;
        imageApi(option).then(result => {
            this.setState(prevState => ({
                hits: [...prevState.hits, ...result],
                currentPage: prevState.currentPage + 1,
            }));
        });
        window.scrollTo({
            top: document.documentElement.scrollHeight,
            behavior: 'smooth',
        });
    };

    handleModalOpen = largeImageUrl => {
        console.log(largeImageUrl);
        this.setState({ modal: true, modalImage: largeImageUrl });
    };

    handleModalClose = () => {
        this.setState({ modal: false, modalImage: '' });
    };

    render() {
        return (
            <>
                <Container>
                    <Searchbar onSubmit={this.handleInputChange} />
                    {this.state.searchQuery && (
                        <ImageGallery
                            hits={this.state.hits}
                            onImageClick={this.handleModalOpen}
                        />
                    )}
                    <Button onLoadClick={this.fetchImg} text="Load more" />
                </Container>
                {this.state.modal && (
                    <Modal onClose={this.handleModalClose}>
                        <img src={this.state.modalImage} alt="" />
                    </Modal>
                )}
            </>
        );
    }
}

export default App;
