import { useRef, useState, useEffect } from "react";

function ImageUploader({ image, onImageChange }) {
    const fileInputRef = useRef(null);

    const [preview, setPreview] = useState(image || "https://placehold.co/600x600");

    useEffect(() => {
        setPreview(image || "https://placehold.co/600x600");
    }, [image]);

    const handleImageClick = () => {
        fileInputRef.current.click();
    };

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            const imageURL = URL.createObjectURL(file);
            setPreview(imageURL);
            onImageChange && onImageChange(imageURL);
        }
    };

    return (
        <div className="empleado-foto-container" onClick={handleImageClick} style={{ cursor: "pointer" }}>
            <img src={preview} alt="Foto del empleado" className="empleado-foto" />
            <input type="file" accept="image/*" ref={fileInputRef} onChange={handleFileChange} style={{ display: "none" }} />
        </div>
    );
}

export default ImageUploader;
