import React, {useEffect, useState} from 'react';
import apiMeme from '../apis/apiMeme';

export const useMemes = () => {
    const [templates, setTemplates] = useState([]); 

    useEffect(() => {
        fetch(apiMeme.defaults.baseURL).then(x => 
            x.json().then(response => setTemplates(response.data.memes))
        );
    }, []);

    return [templates];
};