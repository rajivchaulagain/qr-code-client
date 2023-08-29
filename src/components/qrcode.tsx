import { useState } from "react";
import { generateCode } from "../api/qrcode";

const QrCodeForm = () => {
  const [url, setUrl] = useState("");
  const [imageUri, setImageUri] = useState("");

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const imageUri = await generateCode(url);
    setImageUri(imageUri.imageUrl);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="url"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          placeholder="url"
        />
        <button>generate Code</button>
      </form>
      {imageUri && <img src={imageUri} alt="qrcode" />}
    </>
  );
};

export default QrCodeForm;
