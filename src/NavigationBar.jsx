import {
    Link
  } from 'react-router-dom'

const NavigationBar = () => {
    return (
        <header className="upbar" >
            <img className="logo" src="src/photos/miraklemonkey.gif" alt="logo" />
            <nav>
                <ul className="nav_links">
                    <li><Link to="/1">Photos1</Link></li>
                    <li><Link to="/2">Photos2</Link></li>
                    <li><Link to="/3">Photos3</Link></li>
                    <li><Link to="/4">Photos4</Link></li>
                </ul>
            </nav>
        </header>
    )
}

export default NavigationBar;