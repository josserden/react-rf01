// import { Component } from 'react';
import './Searchbar.scss';

// class Searchbar extends Component {
//     state = { query: '' };

//     handleChange = e => {
//         this.setState({ query: e.target.value });
//     };

//     handleSubmit = e => {
//         e.preventDefault();
//         this.props.onSubmit(this.state.query);
//         this.setState({ query: '' });
//     };

//     render() {
//         return (
//             <header className="Searchbar">
//                 <form className="SearchForm" onSubmit={this.handleSubmit}>
//                     <button type="submit" className="SearchForm-button">
//                         <span className="SearchForm-button-label">Search</span>
//                     </button>

//                     <input
//                         className="SearchForm-input"
//                         value={this.state.query}
//                         onChange={this.handleChange}
//                         type="text"
//                         autoComplete="off"
//                         placeholder="Search images and photos"
//                     />
//                 </form>
//             </header>
//         );
//     }
// }

import { useState } from 'react';

const Searchbar = ({ onSubmit }) => {
    const [query, setQuery] = useState('');

    const handleChange = e => {
        setQuery(e.target.value);
    };

    const handleSubmit = e => {
        e.preventDefault();
        onSubmit(query);
        setQuery('');
    };

    return (
        <header className="Searchbar">
            <form className="SearchForm" onSubmit={handleSubmit}>
                <button type="submit" className="SearchForm-button">
                    <span className="SearchForm-button-label">Search</span>
                </button>

                <input
                    className="SearchForm-input"
                    value={query}
                    onChange={handleChange}
                    type="text"
                    autoComplete="off"
                    placeholder="Search images and photos"
                />
            </form>
        </header>
    );
};

export default Searchbar;
