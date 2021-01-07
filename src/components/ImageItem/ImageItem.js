import React, { useState } from 'react';
import { ImageForm } from '../ImageForm/ImageForm';

export const ImageItem = ({template}) => {
  const [showForm, setShowForm] = useState(false);

    return (
      <div class="col">
        <img style={{width:200}} key={template.id} src={template.url} alt={template.name} onClick={() => setShowForm(!showForm)}/>
        {showForm && <ImageForm/>}
      </div>
    );
};