import React, { useState } from 'react';
import { ImageForm } from '../ImageForm/ImageForm';

export const ImageItem = ({template, rendu}) => {
  const [showForm, setShowForm] = useState(false);
  const [selectedMeme, setSelectedMeme] = useState('');

    return (
      <div class="col">
        <img style={{width:200}} key={template.id} src={template.url} alt={template.name} onClick={() => {
          setShowForm(!showForm)
          setSelectedMeme(template.id)
        }}/>
        {showForm && <ImageForm idMeme={selectedMeme} rendu={rendu}/>}
      </div>
    );
};