import { useState } from 'react';

export const useForm = ( initialState = {}) => {

    const [Value, setValue] = useState(initialState);

    const reset = () => {
        setValue(initialState)
    }
    const handleInputChange = ( {target } ) => {
        
        setValue({
            ...Value,
            [target.name]: target.value
        })
    }

    return [Value, handleInputChange, reset];
    
}
