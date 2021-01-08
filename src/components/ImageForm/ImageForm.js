import React, { useState } from 'react';
import apiCreateMeme from '../../apis/apiCreateMeme';

const objectToQueryParam = (obj) => {
    const params = Object.entries(obj).map(([key, value]) => `${key}=${value}`)
    return '?' + params.join('&')
}

export const ImageForm = ({idMeme}) => {
    const [topText, setTopText] = useState('');
    const [bottomText, setBottomText] = useState('');

    return (
        <form onSubmit={async e => {
            e.preventDefault() 
            const params = {
                template_id: idMeme,
                text0: topText,
                text1: bottomText,
                username: process.env.REACT_APP_USERNAME,
                password: process.env.REACT_APP_PASSWORD
            }    
            const response = await fetch(apiCreateMeme.defaults.baseURL + `${objectToQueryParam(params)}`);

            const data = await response.json();
            console.log(data);
        }}>
            <label>Text 1 :</label>
            <input type="text" name="text1" value={topText} onChange={e => setTopText(e.target.value)}/>
            <label>Text 2 :</label>
            <input type="text" name="text2" value={bottomText} onChange={e => setBottomText(e.target.value)}/>
            <button type="submit" >Create meme</button>
        </form>
    );
};