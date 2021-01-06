import React from 'react';
import { useMemes } from '../hooks/useMemes';

export const App = () => {
    const [templates] = useMemes();

    return (
        <div className='container'>
            <div className=''>
                {templates.map(template => {
                    return <img key={template.id} src={template.url} alt={template.name} />
                })}
            </div>
        </div>
    );
};

export default App;