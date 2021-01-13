import React from 'react';

export const ImageRendu = ({renduForm}) => {

    if (renduForm) {
        return (
            <>
                <div class='text-center' style={{paddingTop: 10}}>
                    <img style={{ width: 200 }} src={renduForm} alt="simple meme"/>
                </div>
            </>
        ) 
    }
    else {
        return (
            <>
            </>
        )
    }
};