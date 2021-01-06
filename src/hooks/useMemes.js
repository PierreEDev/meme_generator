import axios from 'axios';
import React, {useEffect, useState} from 'react';
import apiMeme from '../apis/apiMeme';

export const useMemes = () => {
    const [templates, setMeme] = useState([]); 

    useEffect(() => {
        fetch(apiMeme.defaults.baseURL).then(x => 
            x.json().then(response => setMeme(response.data.memes))
        );
    }, []);

    return [templates];
};