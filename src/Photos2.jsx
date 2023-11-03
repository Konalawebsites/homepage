import React, { useState } from 'react';
import Modal from './components/Modal/Modal';

// const photoDisplay = Object.keys(photos).map((photo) => {
//     return <img onClick={() => console.log("PERKELE")} key={photo} src={`${photos[photo].url}`} alt={`${photos[photo].image}`} />
// })


const Photos2 = ({photos2}) => {
    const photoDisplay = Object.keys(photos2).map((photo) => {
        return <img onClick={() => {
            setImageUrl(photos2[photo].url)
            setIsModalOpen(true)
        }
        } key={photo} src={`${photos2[photo].url}`} alt={`${photos2[photo].image}`} />
    })
    const [isModalOpen, setIsModalOpen] = useState(false)
    const [imageUrl, setImageUrl] = useState("")
    console.log(isModalOpen)
    return (
        <>
            {isModalOpen && <Modal imageUrl={imageUrl} setIsModalOpen={setIsModalOpen}/>}
            <div className='photos'>
                {photoDisplay}
            </div>
        </>
    )
}

export default Photos2;