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

            <div className='dropdown'>
                <div> 
                    <a href="https://www.youtube.com/channel/UCVmYIjLRBChW6_pCnd4OZqw">
                        <img className="youtube-icon" src="src/photos/youtube.png">
                            </img>
                    </a> 
                </div>
            </div>

            <div className="dropdown">
            <div><Link to="/services">
                <button className="dropbtn"><h3>Services</h3>
                </button>
                </Link></div>
            </div>

            <div className="dropdown">
            <div><Link to="/shop">
                <button className="dropbtn"><h3>Shop</h3>
                    <i className="fa fa-caret-down"></i>
                </button>
                </Link></div>
            </div>

            <div className="dropdown">
                <button className="dropbtn"> <h3>Photos</h3>
                    <i className="fa fa-caret-down"></i>
                </button>
                <div className="dropdown-content">
                    <div><Link to="/p1">Routine</Link></div>
                    <div><Link to="/p2">TBA</Link></div>
                    <div><Link to="/p3">TBA</Link></div>
                    <div><Link to="/p4">TBA</Link></div>
                </div>
            
            </div>
            </nav>
        </header>
    )
}

export default NavigationBar;