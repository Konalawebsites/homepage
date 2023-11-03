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
            <div><Link to="/cart">
                <img className="icon" src="src/photos/shoppincart.png"/>
                    
                </Link>
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
                    <div><Link to="/p1">Just Photos</Link></div>
                    <div><Link to="/p2">Caparica</Link></div>
                    <div><Link to="/p3">Teknikal Strike</Link></div>
                    <div><Link to="/p4">Not AI generated</Link></div>
                </div>
            
            </div>
            </nav>
        </header>
    )
}

export default NavigationBar;