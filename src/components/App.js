import React, { useState } from 'react';
import { useMemes } from '../hooks/useMemes';
import { ImageItem } from './ImageItem/ImageItem';
import { ImageRendu } from './ImageRendu/ImageRendu';


export const App = () => {
    const [templates, setMeme] = useMemes();
    const [renduFinal, setRenduFinal] = useState(null);
    
    const rendu = (lien) => {
        setRenduFinal(lien);
    }

    return (
        <div class='container-fluid'>
            <div class='row'>
                <div class='col-9'>
                    <div class='row'>
                        {templates.map(template => {
                            return <ImageItem template={template} rendu={rendu}/>
                        })}
                    </div>
                </div>
                <div class='col-3'>
                    <ImageRendu renduForm={renduFinal}/>
                </div>
            </div>
        </div>
    );
};

export default App;