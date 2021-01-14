import React, { useState } from 'react';
import { useMemes } from '../hooks/useMemes';
import { ImageItem } from './ImageItem/ImageItem';
import { ImageRendu } from './ImageRendu/ImageRendu';


export const App = () => {
    const [meme] = useMemes();
    const [renduFinal, setRenduFinal] = useState([]);
    
    var rendu = (lien) => {  
        var state = renduFinal.concat(lien)
        setRenduFinal(state);
    }

    return (
        <div class='container-fluid' style={{backgroundColor: 'gray'}}>
            <div class='row'>
                <div class='col-9'>
                    <h1 class='text-center'>Générateur de memes</h1>
                    <div class='row'>
                        {meme.map(template => {
                            return <ImageItem template={template} rendu={rendu}/>
                        })}
                    </div>
                </div>
                <div class='col-3' style={{backgroundColor: 'silver'}}>
                    <h2 class='text-center'>Rendu des memes</h2>
                    {renduFinal.map(renduForm => {
                        return <ImageRendu renduForm={renduForm} />
                    })}
                </div>
            </div>
        </div>
    );
};

export default App;