import React, { useState } from 'react';
import Modal from './components/Modal/Modal';

// const photoDisplay = Object.keys(photos).map((photo) => {
//     return <img onClick={() => console.log("PERKELE")} key={photo} src={`${photos[photo].url}`} alt={`${photos[photo].image}`} />
// })


const Photos4 = ({photos4}) => {
    const photoDisplay = Object.keys(photos4).map((photo) => {
        return <img onClick={() => {
            setImageUrl(photos4[photo].url)
            setIsModalOpen(true)
        }
        } key={photo} src={`${photos4[photo].url}`} alt={`${photos4[photo].image}`} />
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

export default Photos4;