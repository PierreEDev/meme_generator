import React, { useState } from 'react';
import { useMemes } from '../hooks/useMemes';
import { ImageItem } from './ImageItem/ImageItem';
import { ImageForm } from './ImageForm/ImageForm';


export const App = () => {
    const [templates, setMeme] = useMemes();
    
    
    return (
        <div class='container'>
            <div class='row'>
                {templates.map(template => {
                    return <ImageItem template={template}/>
                })}
            </div>
            <div class='row'>
            </div>
        </div>
    );
};

export default App;