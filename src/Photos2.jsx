/* PHOTOS */
import react, { useState } from 'react';

const photos = [
    {
        url: 'src/photos/img4.jpg',
        image: 'feather'
    },
    {
        url: 'src/photos/img2.jpg',
        image: 'windturbine'
    },
    {
        url: 'src/photos/img3.jpg',
        image: 'windturbine'
    },

    {
        url: 'src/photos/img1.jpg',
        image: 'pekka'
    },
]

const photoDisplay = Object.keys(photos).map((photo) => {
    return <img className='photo' key={photo} src={`${photos[photo].url}`} alt='photo not visible' />
})


const Photos2 = () => {
    return (
        <div>
            {photoDisplay}
        </div>
    )
}

export default Photos2;