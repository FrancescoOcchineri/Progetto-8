import React, { useState } from 'react';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';

const AutocompleteInput = () => {
    const [value, setValue] = useState(null);
    const [options, setOptions] = useState([]);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const handleInputChange = (event, newInputValue) => {
        // Verifica se l'input è presente
        const inputValue = event ? event.target.value : newInputValue;

        // Implementa la logica per ottenere i suggerimenti in base all'inputValue
        // ...

        // Esempio di suggerimenti simulati
        const simulatedOptions = [
            'Parma, Italy',
            'Paris, France',
            'Berlin, Germany',
            // ... altri suggerimenti ...
        ];

        // Filtra i suggerimenti in base all'inputValue
        const filteredOptions = simulatedOptions.filter(option =>
            option.toLowerCase().includes(inputValue.toLowerCase())
        );

        setOptions(filteredOptions);
    };

    return (
        <Autocomplete
            value={value}
            onChange={handleChange}
            inputValue={value}
            onInputChange={handleInputChange}
            options={options}
            renderInput={(params) => (
                <TextField
                    {...params}
                    label="Search City..."
                    variant="outlined"
                />
            )}
        />
    );
};




