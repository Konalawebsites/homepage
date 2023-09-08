import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import './modal.css';

const images = document.querySelectorAll(".photos img");
const modal = document.querySelector(".modal");
const modalImg = document.querySelector(".modalImg");
const modalTxt = document.querySelector(".modalTxt")
const close = document.querySelector(".close")


// images.forEach(image => {
//     console.log('clicked image')
//     image.addEventListener('click', () => {
//         modalImg.src = image.src;
//         modalTxt.innerHTML = image.alt;
//         console.log('image.alt', image.alt)
//         modal.classList.add("appear");

//     close.addEventListener('click', () => {
//         modal.classList.remove("appear");
//         })
//     })
// })

const Modal = ({ imageUrl, setIsModalOpen }) => {
    console.log(imageUrl)

    return (
        <div className='modal'>
            <div className='modalContent'>
                <img src={imageUrl} className='modalImg' />
                <span className='modalTxt'></span>
                <span className='close'>
                    <img onClick={() =>setIsModalOpen(false) } className='close-btn' src='src/photos/close.png'></img>
                </span>
            </div>
        </div>

    )
}

export default Modal 
