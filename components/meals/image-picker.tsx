'use client'

import { useRef, useState } from 'react';
import classes from './image-picker.module.css';


const ImagePicker = ({ label }: { label: string }) => {
    const [currentImage, setCurrentImage] = useState<File | null>(null);
    const imageInputRef = useRef<HTMLInputElement | null>(null);

    const handleClick = () => {
        imageInputRef.current?.click();
    }
    return (
        <div className={classes.picker}>
            <label htmlFor='image' >{label}</label>
            <div className={classes.control}>
                <input className={classes.input} type="file" id='image' accept='image/png, image/jpeg' name='image' ref={imageInputRef} />
                <button className={classes.button} type='button' onClick={handleClick}>Upload Image</button>
            </div>
            
        </div>
    );
};
export default ImagePicker