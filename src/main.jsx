import ReactDOM from 'react-dom/client'
import './index.css'
import {
  BrowserRouter,
  Routes, Route
} from 'react-router-dom'
import NavigationBar from './NavigationBar'

import App from './App'
import Photos1 from './Photos1'
import Photos2 from './Photos2'
import Photos3 from './Photos3'
import Photos4 from './Photos4'

// /* CURSOR */
let innerCursor = document.querySelector(".inner-cursor");
let outerCursor = document.querySelector(".outer-cursor");

document.addEventListener("mousemove", moveCursor)

function moveCursor(e) {
  let x = e.clientX;
  let y = e.clientY;

  innerCursor.style.left = `${x}px`
  innerCursor.style.top = `${y}px`
  outerCursor.style.left = `${x}px`
  outerCursor.style.top = `${y}px`
}

let links = Array.from(document.querySelectorAll("a"))

console.log(links)
links.forEach((link) => {
  link.addEventListener('mouseover', () => {
    innerCursor.classList.add("grow");
  });
  link.addEventListener('mouseleave', () => {
    innerCursor.classList.remove("grow");
  });
});


ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={
        <>
          <NavigationBar />
          <p className='info'> welcome! </p>
        </>

      } />
      <Route path="/p1" element={
        <>
          <NavigationBar />
          <Photos1 />
        </>
      } />
       <Route path="/p2" element={
        <>
          <NavigationBar />
          <Photos2 />
        </>
      } />

      <Route path="/p3" element={
              <>
                <NavigationBar />
                <Photos3 />
              </>
            } /> 

      <Route path="/p4" element={
                    <>
                      <NavigationBar />
                      <Photos4 />
                    </>
                  } /> 

      <Route path="/services" element={
                          <>
                            <NavigationBar />
                          <p className='info'> service not found </p>
                          </>
                        } /> 

      <Route path="/shop" element={
                                <>
                                  <NavigationBar />
                                <p className='info'> shop is empty,come back tomorrw </p>
                                </>
                              } /> 

    </Routes>
  </BrowserRouter>
)