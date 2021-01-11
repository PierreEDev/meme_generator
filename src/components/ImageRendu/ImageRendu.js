import React from 'react';

export const ImageRendu = ({renduForm}) => {

    if (renduForm) {
        return (
            <>
                <img style={{ width: 200 }} src={renduForm} alt="simple meme"/>
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