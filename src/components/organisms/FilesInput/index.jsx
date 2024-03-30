import React, { useState } from "react";
import FilesUpload from '../FilesUpload/FilesUpload';

function FilesInput() {
    const [newTaskImages, setNewTaskImages] = useState({
        attachments: []
    });
  
    const updateUploadedFiles = (files) =>
    setNewTaskImages({ ...newTaskImages, attachments: files });
  
    const handleSubmit = (event) => {
      event.preventDefault();
    };
  
    return (
      <div>
        <form onSubmit={handleSubmit}>
          <FilesUpload
            accept=".jpg,.png,.jpeg,.svg"
            label="Attachment(s)"
            multiple
            updateFilesCb={updateUploadedFiles}
          />
        </form>
      </div>
    );
  }
  
  export default FilesInput;