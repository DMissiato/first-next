
import { useState, useEffect, useRef } from 'react';
import { useInterval } from '../../libs/hooks';
import style from './Slider.module.scss';

const photosArray = [
    'https://picsum.photos/1720/720',
    'https://picsum.photos/1721/720',
    'https://picsum.photos/1720/721',
    'https://picsum.photos/1721/721'
];

const Slider = (props) =>
{
    // Props
    const photos = props.images || photosArray;
    const time = props.time || 7000;
    let widthImg = 0;

    // Functions
    const scrollDx = () => 
    {
        widthImg = sliderRef.current.scrollWidth * (1 / images.length);
        if(widthImg && sliderRef.current.scrollLeft % widthImg === 0)
        {
            if((sliderRef.current.scrollLeft + widthImg) >= sliderRef.current.scrollWidth)
            {
                sliderRef.current.scrollLeft = 0;
            }
            else
            {
                sliderRef.current.scrollLeft += widthImg;
            }
        }
    }
    
    const scrollSx = () =>
    {
        widthImg = sliderRef.current.scrollWidth * (1 / images.length);
        if(widthImg && sliderRef.current.scrollLeft % widthImg === 0)
        {
            if((sliderRef.current.scrollLeft - widthImg) < 0)
            {
                sliderRef.current.scrollLeft = sliderRef.current.scrollWidth - widthImg;
            }
            else
            {
                sliderRef.current.scrollLeft -= widthImg;
            }
        }
    }
    
    const resize = () =>
    {
        if(sliderRef.current)
        {
            widthImg = window.innerWidth - 2;
            const n = Math.round(sliderRef.current.scrollLeft / widthImg);

            sliderRef.current.scrollLeft = widthImg * n;
        }
    }

    // State
    const [images, setImages] = useState([]);
    const sliderRef = useRef(); 

    useEffect(() => {
        setImages(photos);
        window.addEventListener('resize', resize);
    }, []);
    
    useInterval(scrollDx, time);


    return (
        <>
        <div className={style.container}>
            <button onClick={scrollSx} style={{marginRight: '-70px'}}>{'<'}</button>
            <div className={style.slider} ref={sliderRef} >
                {images.map((img) => (
                    <img src={img} alt={img} key={img} />
                ))}
            </div>
            <button onClick={scrollDx} style={{marginLeft: '-70px'}}>{'>'}</button>
        </div>
        </>
    );

};

export default Slider;