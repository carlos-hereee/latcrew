import { useContext, useState } from "react";
import { AppContext } from "../utils/context/app/AppContext";

// TODO: UPload files
// type FileEventTarget = EventTarget & { files: FileList };
const UploadFile = () => {
  // const { name, baseUrl, path, upload } = props;
  const { uploadImage } = useContext(AppContext);

  const [currentImage, setCurrentImage] = useState();
  const [previewImage, setPreviewImage] = useState("");
  const [progress, setProgress] = useState(0);
  const [message, setMessage] = useState("");
  const [imageInfos, setImageInfos] = useState([]);

  const selectImage = (event) => {
    const selectedFiles = event.target.files;
    setCurrentImage(selectedFiles?.[0]);
    setPreviewImage(URL.createObjectURL(selectedFiles?.[0]));
    setProgress(0);
  };

  const handleSubmit = (e) => {
    // e.preventDefault();
    // setProgress(0);
    // console.log("currentImage", currentImage);
    if (!currentImage) return;
    // let formData = new FormData();
    uploadImage(currentImage);
  };
  return (
    <div className="container">
      <input
        type="file"
        onChange={selectImage}
        accept="image/*"
        className="btn-main"
        // name={name}
        // hidden
      />
      {previewImage && (
        <img className="hero preview-hero" src={previewImage} alt="preview" />
      )}
      {message && <p className="error-message">{message}</p>}
      <button
        type="button"
        className="btn-main"
        disabled={!currentImage}
        onClick={handleSubmit}>
        Upload
      </button>

      {currentImage && progress > 0 && (
        <div
          className="progress-bar"
          role="progressbar"
          aria-valuenow={progress}
          aria-valuemin={0}
          aria-valuemax={100}
          style={{ width: progress + "%" }}>
          {progress}%
        </div>
      )}

      {imageInfos.length > 0 && (
        <div>
          <h3 className="heading">List of images</h3>
          <ul>
            {imageInfos.map((img, idx) => (
              <li className="list-group-item" key={idx}>
                <p>
                  <a href={img.url}>{img.name}</a>
                </p>
                <img src={img.url} alt={img.name} />
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default UploadFile;
