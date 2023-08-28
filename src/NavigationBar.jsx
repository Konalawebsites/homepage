import {
    Link
  } from 'react-router-dom'

const NavigationBar = () => {
    return (
        <header>
            <nav className="upbar">
            <Link to ="/" >
                <img className="logo" src="src/photos/miraklemonkey.gif" alt="logo" />
                    </Link>

            <div className="dropdown">
            <div><Link to="/services">
                <button className="dropbtn" on>Services
                </button>
                </Link></div>
            </div>

            <div className="dropdown">
            <div><Link to="/shop">
                <button className="dropbtn" on>Shop
                </button>
                </Link></div>
            </div>

            <div className="dropdown">
                <button className="dropbtn">Photos
                    <i className="fa fa-caret-down"></i>
                </button>
                <div className="dropdown-content">
                    <div><Link to="/p1">1</Link></div>
                    <div><Link to="/p2">2</Link></div>
                    <div><Link to="/p3">3</Link></div>
                    <div><Link to="/p4">4</Link></div>
                </div>
            </div>

            </nav>
        </header>
    )
}

export default NavigationBar;