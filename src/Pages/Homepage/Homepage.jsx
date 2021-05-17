import React from 'react';
import {Link} from 'react-router-dom';
import {useDispatch} from 'react-redux';
import NavBar from '../../Components/NavBar/NavBar';
import TopNavBar from '../../Components/TopNavBar/TopNavBar';
import {getAllImages} from '../../Redux/photosType/photos.action';

const Homepage = () =>{
const dispatch = useDispatch();

let imageData = dispatch(getAllImages())
console.log('xxxximahe data--------', imageData,'xxxxxxxxxxx')

    return(
        <div className="wrapper">
        {/* <!-- Top Bar Start --> */}
            < TopNavBar/>
        {/* <!-- Top Bar End --> */}

        {/* <!-- Nav Bar Start --> */}
            <NavBar />
        {/* <!-- Nav Bar End --> */}

        <h1> vinany00</h1>

        
        <Link to="#" className="back-to-top"><i className="fa fa-chevron-up"></i></Link>
    </div>

    )
}
 export default Homepage;