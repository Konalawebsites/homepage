import React, { useState } from 'react';
import Modal from './components/Modal/Modal';

// const photoDisplay = Object.keys(photos).map((photo) => {
//     return <img onClick={() => console.log("PERKELE")} key={photo} src={`${photos[photo].url}`} alt={`${photos[photo].image}`} />
// })


const Photos3 = ({photos3}) => {
    const photoDisplay = Object.keys(photos3).map((photo) => {
        return <img onClick={() => {
            setImageUrl(photos3[photo].url)
            setIsModalOpen(true)
        }
        } key={photo} src={`${photos3[photo].url}`} alt={`${photos3[photo].image}`} />
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

export default Photos3;