import react, { useState } from 'react';

const photos = [
    {
        url: 'src/photos/frankfurt-car.png',
        image: 'frankfurt-car', 
        id: 0,
    },
    {
        url: 'src/photos/porche.png',
        image: 'porche',
        id: 1,
    },
    {
        url: 'src/photos/bailar.png',
        image: 'bailar',
        id: 2,
    },
    {
        url: 'src/photos/sincity.png',
        image: 'sincity',
        id: 3,
    },
]

console.log('photos', photos)

const photoDisplay = Object.keys(photos).map((photo) => {
    return <img className='photo' key={photo} src={`${photos[photo].url}`} alt='photo not visible' />
})

console.log('photodisplay', photoDisplay)

const Photos1 = () => {
    return (
        <div> 
            {photoDisplay}
        </div>
    )
}

export default Photos1;