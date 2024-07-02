import Dropzone from "react-dropzone";
import { useState } from "react";

export default function MyDropZone({ field, form, fileData, setFileData }) {
  const [dropState, setDropState] = useState({ state: "", className: "" });
  const onAccepted = (acceptedFiles) => {
    const file = acceptedFiles[0];
    const preview = Object.assign(file, {
      preview: URL.createObjectURL(file),
    });
    setFileData({ ...fileData, filePreview: preview.preview });
    form.setValue(field.name, file);
    console.log(fileData);
  };

  const onDropRejected = (rejectedFiles) => {
    form.setError(field.name, rejectedFiles[0].errors[0]);
    setFileData({
      ...fileData,
      errorMessage: rejectedFiles[0].errors[0].message,
    });
  };

  const onError = (error) => {
    form.setError(field.name, error);
    setFileData({ ...fileData, errorMessage: error.message });
  };

  return (
    <Dropzone
      maxFiles={1}
      multiple={false}
      autoFocus={true}
      maxSize={5 * 1024 * 1024} //5Mb
      onDropAccepted={onAccepted}
      onDropRejected={onDropRejected}
      onError={onError}
      onDragEnter={() => {
        setDropState({
          state: "over",
          className: "ring-2 ring-offset-2 ring-ring",
        });
      }}
      onDragLeave={() => {
        setDropState({
          state: "",
          className: "",
        });
      }}
      onFileDialogOpen={() => {
        setDropState({
          state: "open",
          className: "ring-2 ring-offset-2 ring-ring",
        });
      }}
      onFileDialogCancel={() => {
        setDropState({
          state: "",
          className: "",
        });
      }}
      accept={{ "image/*": [".png", ".jpg", ".jpeg"] }}
    >
      {({ getRootProps, getInputProps }) => (
        <div
          {...getRootProps()}
          className={`p-2 flex items-center justify-center border-2 border-dashed rounded focus:ring-2 focus:ring-ring focus:ring-offset-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 ${dropState.className}`}
        >
          <input type="file" {...getInputProps()} />
          {fileData.errorMessage !== "" ? (
            <p className="text-center">{fileData.errorMessage}</p>
          ) : (
            <p className="text-center">
              {dropState.state === ""
                ? "Drag and drop an image here, or click to select."
                : dropState.state === "over"
                ? "Drop your image here"
                : "Select an image to upload"}
            </p>
          )}
        </div>
      )}
    </Dropzone>
  );
}
