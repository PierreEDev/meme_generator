import React, { useState } from 'react';
import apiCreateMeme from '../../apis/apiCreateMeme';

const objectToQueryParam = (obj) => {
    const params = Object.entries(obj).map(([key, value]) => `${key}=${value}`);
    return '?' + params.join('&')    
}

export const ImageForm = ({idMeme, rendu}) => {
    const [topText, setTopText] = useState('');
    const [bottomText, setBottomText] = useState('');
    // const [text1, setText1] = useState('');
    // const [text2, setText2] = useState('');
    // const [text3, setText3] = useState('');
    // const [text4, setText4] = useState('');
    const [memeRendu, setMemeRendu] = useState(null);

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
        
            // const box = {
            //     boxes: [
            //         {
            //             "text": text1,
            //             "color": "#ffffff",
            //             "outline_color": "#000000"
            //         },
            //         {
            //             "text": text2,
            //             "color": "#ffffff",
            //             "outline_color": "#000000"
            //         },
            //         {
            //             "text": text3,
            //             "color": "#ffffff",
            //             "outline_color": "#000000"
            //         },
            //         {
            //             "text": text4,
            //             "color": "#ffffff",
            //             "outline_color": "#000000"
            //         }
            //     ]
            // }

            // const params = {
            //     template_id: idMeme,
            //     username: process.env.REACT_APP_USERNAME,
            //     password: process.env.REACT_APP_PASSWORD
            // } 

            const response = await fetch(apiCreateMeme.defaults.baseURL + `${objectToQueryParam(params)}`);
            const json = await response.json();
            setMemeRendu(json.data.url);

            rendu(memeRendu);
            
        }}>
            <label>Text 1 :</label>
            <input type="text" name="text1" value={topText} onChange={e => setTopText(e.target.value)}/>
            <label>Text 2 :</label>
            <input type="text" name="text2" value={bottomText} onChange={e => setBottomText(e.target.value)}/>

            {/* <label>Text 1 :</label>
            <input type="text" name="text1" value={text1} onChange={e => setText1(e.target.value)}/>
            <label>Text 2 :</label>
            <input type="text" name="text2" value={text2} onChange={e => setText2(e.target.value)}/>
            <label>Text 3 :</label>
            <input type="text" name="text3" value={text3} onChange={e => setText3(e.target.value)}/>
            <label>Text 4 :</label>
            <input type="text" name="text4" value={text4} onChange={e => setText4(e.target.value)}/> */}
            <button type="submit" >Create meme</button>
        </form>
    );
};