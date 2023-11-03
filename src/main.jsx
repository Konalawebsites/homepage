import ReactDOM from 'react-dom/client'
import './index.css'
import './bottombar.css'
import {
  BrowserRouter,
  Routes, Route
} from 'react-router-dom'

import NavigationBar from './NavigationBar'
import BottomBar from './components/BottomBar/BottomBar'

import Photos1 from './Photos1'
import Photos2 from './Photos2'
import Photos3 from './Photos3'
import Photos4 from './Photos4'
import Modal from './components/Modal/Modal.jsx'
import Shop from './components/Shop/Shop'
import { ShopContextProvider } from './context/shop-context'
import PRODUCTS from './components/Shop/products'
import { Cart } from './components/Cart/cart'


// /* CURSOR */
let innerCursor = document.querySelector(".inner-cursor");
let outerCursor = document.querySelector(".outer-cursor");

console.log('innercursor', innerCursor)
document.addEventListener("mousemove", moveCursor)

function moveCursor(e) {
  let x = e.clientX;
  let y = e.clientY;

  innerCursor.style.left = `${x}px`
  innerCursor.style.top = `${y}px`
  outerCursor.style.left = `${x}px`
  outerCursor.style.top = `${y}px`
}

let links = Array.from(document.querySelectorAll("p"))

links.forEach((link) => {
  link.addEventListener('mouseover', () => {
    innerCursor.classList.add("grow");
  });
  link.addEventListener('mouseleave', () => {
    innerCursor.classList.remove("grow");
  });
});

const photos = [
  {
      url: 'src/photos/frankfurt-car.png',
      image: '"Routine"',
      id: 0,
  },
  {
      url: 'src/photos/majakka.jpg',
      image: '"Majakka"',
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

const photos2 = [
  {
      url: 'src/photos/portugal/img003.jpg',
      image: '"lets go"',
      id: 0,
  },
  {
      url: 'src/photos/portugal/img018.jpg',
      image: '"Mystical holes"',
      id: 1,
  },
  {
      url: 'src/photos/portugal/img006.jpg',
      image: '"Platform"',
      id: 2,
  },
  {
      url: 'src/photos/portugal/dog.jpg',
      image: '"Portuguese dog"',
      id: 3,
  },
]
const photos3 = [
  {
      url: 'src/photos/suomi/jones2.jpg',
      image: '"super electric"',
      id: 0,
  },
  {
      url: 'src/photos/suomi/sähkötorni.jpg',
      image: '"My friend Waldorf"',
      id: 1,
  },
  {
      url: 'src/photos/suomi/structure.jpg',
      image: '"structural design"',
      id: 2,
  },
  {
      url: 'src/photos/suomi/waldorf.jpg',
      image: '"golfcourse"',
      id: 3,
  },
]
const photos4 = [
  {
      url: 'src/photos/suomi/merto.jpg',
      image: '"super electric"',
      id: 0,
  },
  {
      url: 'src/photos/feather.jpeg',
      image: '"My friend Waldorf"',
      id: 1,
  },
  {
      url: 'src/photos/suomi/catcar.jpg',
      image: '"structural design"',
      id: 2,
  },
  {
      url: 'src/photos/kasa.jpg',
      image: '"golfcourse"',
      id: 3,
  },
]



ReactDOM.createRoot(document.getElementById('root')).render(
  <ShopContextProvider>

    <BrowserRouter>

      <NavigationBar />

      <Routes>
        <Route path="/" element={
          <>
            <p className='info'> welcome! </p>

          </>

        } />
        <Route path="/p1" element={
          <>
            <Photos1 photos={photos}/>
          </>
        } />
        <Route path="/p2" element={
          <>
            <Photos2 photos2={photos2}/>
          </>
        } />

        <Route path="/p3" element={
          <>
            <Photos3 photos3={photos3}/>
          </>
        } />

        <Route path="/p4" element={
          <>
            <Photos4 photos4={photos4}/>
          </>
        } />

        <Route path="/services" element={
          <>
            <p className='info'> service not found </p>
          </>
        } />

        <Route path="/shop" element={
          <>
            <Shop />
          </>
        } />

        <Route path="/cart" element={
          <>
            <Cart />
          </>
        } />

      </Routes>

      <BottomBar />
    </BrowserRouter>
  </ShopContextProvider>
)