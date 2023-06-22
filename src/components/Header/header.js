/* eslint-disable react/jsx-filename-extension */
/* eslint-disable no-undef */
import React, { useEffect, useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { useWeb3React } from '@web3-react/core'
import UnlockButton from "components/UnlockButton";
import '../../assets/header.css'
import logo from "../../assets/images/mainIcons/Avatar.png";
import ethIcon from "../../assets/images/mainIcons/ethIcon.png";



const Header = () => {
	const { account, activate, deactivate } = useWeb3React()
	// const { account } = useActiveWeb3React()
	// const [add, setAdd] = useState()
	// const [bal, setBal] = useState()

	
	return (
		<nav className="navbar navbar-expand-md navbg navbar-dark" style={{ width: "100%",}}>
		 <div className="container-fluid">
          <a href="https://aquaprotocol.com"><img className="logo" style={{height:'40px',width:'40px'}} src={logo} alt="logo" /></a>
              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarNav"
                aria-controls="navbarNav"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon" />
              </button> 
              <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                  <li className="nav-item">
                  <Link
                      type="button" 
                      className="nav-link btn btn-link text-white navbarbtn buttonn"
                      to="/farms"
                    >
                      Farms
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      type="button"
                      className="nav-link btn btn-link navbarbtn text-white buttonn"
                      to="/pools"
                    >
                      Pools
                    </Link>
                  </li>
                  <li className="nav-item">
                    <a
                      type="button"
                      className="nav-link navbarbtn btn btn-link text-white buttonn"
                      href="https://launch.aquaprotocol.com"
                    >
                      Aquapad
                    </a>
                  </li> 
				</ul>
			</div>
			<div className="collapse navbar-collapse justify-content-end" id="navbarNav">
				<ul className="navbar-nav">
					<li className="nav-item">
						{!account ? (
								<UnlockButton width="100%" />
							) : <p className="nav-link text-white border border-primary navbarbtn"
							style={{fontWeight:'bold',borderRadius:'24px',
							padding:'5px',marginRight:'25px'}}>{account.slice(0,7).concat('...')}</p>
						}
					</li>
				</ul>
		</div>
	 </div>
    </nav>
	);
};

export default Header;