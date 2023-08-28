/* PHOTOS */
import react, { useState } from 'react';

const photos = [
    {
        url: 'src/photos/windturbine.jpeg',
        image: 'feather'
    },
    {
        url: 'src/photos/feather.jpeg',
        image: 'windturbine'
    },
    {
        url: 'src/photos/tree.jpeg',
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


const Photos3 = () => {
    return (
        <div>
            {photoDisplay}
        </div>
    )
}

export default Photos3;