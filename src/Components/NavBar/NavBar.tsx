import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { Dropdown } from 'react-bootstrap';
import './Navbar.css';
import { getCookie } from '../../services/cookie';
import { logout } from '../../Redux/usersType/userType.action';
const NavbBar = () => {
    const dispatch = useDispatch();
    const history = useHistory();
    // let cookieToken = JSON.parse(getCookie('access_token'));
    // console.log('cookieToken----', cookieToken);
    const isLoggedIn = useSelector((state: any) => state.userType.isLoggedIn)
    const Usertoken = useSelector((state: any) => state.userType.token);
    const userID = useSelector((state: any) => state.userType.role);
    const userDetail = useSelector((state: any) => state.userType);
    let strict_loggedIn = isLoggedIn && Usertoken ? true : false;
    let localToken = window.localStorage.getItem('access_token');

    console.log('userDetail in userDetail------', userDetail.userData.fullName);
    const logoutButton = () => {
        dispatch(logout())
        localStorage.clear();
        sessionStorage.clear();
        history.push('/login');
    }

    return (
        <>
            <div className="nav-bar">
                <div className="container-fluid">
                    <nav className="navbar navbar-expand-lg bg-dark navbar-dark">
                        <Link to="#" className="navbar-brand">MENU</Link>
                        <button type="button" className="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
                            <span className="navbar-toggler-icon"></span>
                        </button>

                        <div className="collapse navbar-collapse justify-content-between" id="navbarCollapse">
                            <div className="navbar-nav mr-auto">
                                <Link to="/homepage" className="nav-item nav-link active">Home</Link> {/*-- home-- */}
                                <Link to="/scrap-list" className="nav-item nav-link">Card</Link> {/*-- prices of scraps-- */}
                                <Link to="/scrap-list" className="nav-item nav-link">Price Calculator</Link>  {/*-- scrap calculator-- */}
                          </div>
                            <div className="ml-auto">

                                {!localToken ?
                                    <Link className="btn" to="/login">Login / Signup</Link> /*-- Login signup popup-- */
                                    : <><Dropdown className="btn profile">
                                        <Dropdown.Toggle >
                                            {userDetail.userData && userDetail.userData.fullName ? userDetail.userData.fullName : 'Welcome'}
                                    </Dropdown.Toggle>

                                        <Dropdown.Menu>
                                            <Dropdown.Item href="/profile">{userDetail.userData.firstName}</Dropdown.Item>
                                            <Dropdown.Item href="/profile">Setting</Dropdown.Item>
                                            <Dropdown.Item href="/logout" onClick={logoutButton}>Logout</Dropdown.Item>
                                        </Dropdown.Menu>
                                    </Dropdown>
                                    <i className="fas fa-shopping-basket"></i></>
                                }
                            </div>
                        </div>
                    </nav>
                </div>
            </div>

        </>
    )
}
export default NavbBar;