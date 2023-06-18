import React, { useState } from 'react';
import { Button, TextField, Typography } from '@material-ui/core';

function FileUploader() {
  const [selectedFile, setSelectedFile] = useState();
  const [fileName, setFileName] = useState('');

  const handleFileChange = (event) => {
    let file = event.target.files[0];

    // Check if the file is a PDF
    if (file && file.type === 'application/pdf') {
      setSelectedFile(file);
      setFileName(file.name);
    } else {
      alert('Please select a PDF file.');
    }
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
      <Typography variant="h5" gutterBottom>
        Medical Records Desensitizer
      </Typography>
      <input
        accept="application/pdf"
        style={{ display: 'none' }}
        id="raised-button-file"
        type="file"
        onChange={handleFileChange}
      />
      <label htmlFor="raised-button-file">
        <Button variant="raised" component="span">
          Upload
        </Button>
      </label>
      {selectedFile && <Typography variant="subtitle1">{fileName}</Typography>}
    </div>
  );
}

export default FileUploader;
