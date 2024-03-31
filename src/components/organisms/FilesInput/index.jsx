import React, { useState } from "react";
import FilesUpload from '../FilesUpload/FilesUpload';

function FilesInput() {
    const [newTaskImages, setNewTaskImages] = useState({
        attachments: []
    });
  
    const updateUploadedFiles = (attachments) =>
    setNewTaskImages({ ...newTaskImages, attachments: attachments });
  
    return (
      <div>
          <FilesUpload
            accept=".jpg,.png,.jpeg,.svg"
            label="Attachment(s)"
            multiple
            updateFilesCb={updateUploadedFiles}
          />
      </div>
    );
  }
  
  export default FilesInput;