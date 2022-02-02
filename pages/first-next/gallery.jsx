
import { useState, useEffect } from "react";
import Image from 'next/image';
import LayoutDefault from '../../layout/index';
import style from '../../styles/Gallery.module.scss';

const photos = [
    'https://picsum.photos/200/300',
    'https://picsum.photos/201/300',
    'https://picsum.photos/200/301',
];

const Gallery = () =>
{
    const [images, setImages] = useState([]);

    useEffect(() => {
        setImages(photos);
    }, []);

    return (
        <LayoutDefault>
            <div className={style.wrapper}>
                {images.map((img) => 
                    <Image className={style.img} src={img} alt={img} key={img} width={200} height={300} />
                )}
            </div>
        </LayoutDefault>
    );
};

export default Gallery;