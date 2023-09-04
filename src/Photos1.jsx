import React, { useState } from 'react';

const photos = [
    {
        url: 'src/photos/frankfurt-car.png',
        image: '"Routine"', 
        id: 0,
    },
    {
        url: 'src/photos/porche.png',
        image: '"Porche"',
        id: 1,
    },
    {
        url: 'src/photos/bailar.png',
        image: '"Dance Dance Dance"',
        id: 2,
    },
    {
        url: 'src/photos/sincity.png',
        image: '"Sin City"',
        id: 3,
    },
]

console.log('photos', photos)

const photoDisplay = Object.keys(photos).map((photo) => {
    return <img key={photo} src={`${photos[photo].url}`} alt={`${photos[photo].image}`} />
})

console.log('photodisplay', photoDisplay)

const Photos1 = () => {
    return (
        <div className='photos'> 
            {photoDisplay}
        </div>
    )
}

export default Photos1;