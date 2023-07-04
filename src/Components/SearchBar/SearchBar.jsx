import React, { useState, useEffect } from 'react';
import './SearchBar.css';
import Select from 'react-select';

const SearchBar = ({ CategoryList, formSubmit, value, handleSearchKey, clearSearch }) => {
    const [placeholder, setPlaceholder] = useState("");

    const placeholderTexts = [
        'Search By Category',
        'Search By Question',
        'Search By Author'
    ];
    const delay = 200;
    let currentTextIndex = 0;
    let currentCharIndex = 0;

    useEffect(() => {
        const typingEffect = () => {
            const currentText = placeholderTexts[currentTextIndex];
            try {
                if (currentCharIndex === currentText.length) {
                    currentTextIndex = 0;
                    currentCharIndex = 0;
                }

                setPlaceholder(currentText.slice(0, currentCharIndex + 1));

                if (currentCharIndex === currentText.length - 1) {
                    setTimeout(eraseEffect, 2000);
                } else {
                    currentCharIndex++;
                    setTimeout(typingEffect, delay);
                }
            } catch (error) {
                setPlaceholder("Search");
                currentTextIndex = 0;
                currentCharIndex = 0;
                console.log(error);
            }
        };

        const eraseEffect = () => {
            const currentText = placeholderTexts[currentTextIndex];

            if (currentCharIndex === 0) {
                currentTextIndex++;
                setTimeout(typingEffect, delay);
            } else {
                setPlaceholder(currentText.slice(0, currentCharIndex));

                currentCharIndex--;
                setTimeout(eraseEffect, delay);
            }
        };

        const timeoutId = setTimeout(typingEffect, delay);

        return () => clearTimeout(timeoutId);
    }, []);

    async function handleSearch(e) {
        e.preventDefault();
    }

    const options = [
        { value: '', label: 'All' },
        ...CategoryList.map((category) => ({ value: category, label: category }))
      ];
    const selectedOption = value ? { value: value, label: value } : null;

    return (
        <div className='searchBar-wrap'>
            <form onSubmit={formSubmit}>
                <Select
                    className='search-input-field'
                    options={options}
                    placeholder={placeholder}
                    value={selectedOption}
                    onChange={(selectedOption) => handleSearchKey(selectedOption?.value)}
                />
                <button>Go</button>
            </form>
        </div>
    );
};

export default SearchBar;