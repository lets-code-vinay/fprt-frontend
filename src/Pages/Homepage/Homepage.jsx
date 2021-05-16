import React from 'react';
import {Link} from 'react-router-dom';
import NavBar from '../../Components/NavBar/NavBar';
import TopNavBar from '../../Components/TopNavBar/TopNavBar';

const Homepage = () =>{

    return(
        <div className="wrapper">
        {/* <!-- Top Bar Start --> */}
            < TopNavBar/>
        {/* <!-- Top Bar End --> */}

        {/* <!-- Nav Bar Start --> */}
            <NavBar />
        {/* <!-- Nav Bar End --> */}
        
        <Link to="#" className="back-to-top"><i className="fa fa-chevron-up"></i></Link>
    </div>

    )
}
 export default Homepage;