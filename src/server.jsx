const express = require("express")
const path = require("path")

const app = express()

/* PHOTOS */
const photos = [
    {
        url: 'src/photos/img3.jpg',
        image: 'windturbine'
    },
    {
        url: 'src/photos/img4.jpg',
        image: 'feather'
    },
    {
        url: 'src/photos/img1.jpg',
        image: 'pekka'
    },
    {
        url: 'src/photos/img2.jpg',
        image: 'windturbine'
    },
]

app.get("/photos", (req, res) => {
    return photos
});


app.listen(process.env.PORT || 5060, () => console.log("server running..."));
