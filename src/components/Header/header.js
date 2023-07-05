/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable no-undef */
import React, { useEffect, useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { useWeb3React } from '@web3-react/core'
import UnlockButton from "components/UnlockButton";
import '../../assets/header.css'
import logo from "../../assets/images/mainIcons/Avatar.png";
import ConnectWalletModal from "./ConnectWalletModal";
import ethIcon from "../../assets/images/mainIcons/ethIcon.png";



const Header = () => {
	const { account, activate, deactivate } = useWeb3React()
	// const { account } = useActiveWeb3React()
	// const [add, setAdd] = useState()
	// const [bal, setBal] = useState()
  const [showWallet,setShowWallet] = useState(false)
	
	return (
    <>
		<nav className="navbar navbar-expand-md navbg navbar-dark" style={{ width: "100%",borderBottom:'1px solid #2b3750'}}>
		 <div className="container-fluid">
          <a href="https://www.aquaprotocol.com"><img className="logo" style={{height:'41px',width:'41px'}} src={logo} alt="logo" /></a>
          {/* <a className="navbar-brand" style={{marginLeft:"18px",fontWeight:'bold',fontFamily:'sans-serif',color:'#0000ff'}}
         href="https://www.aquaprotocol.com">AQUA PROTOCOL</a> */}
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
              <div className="collapse navbar-collapse justify-content-end" style={{marginLeft:'60px'}} id="navbarNav">
                <ul className="navbar-nav">
                  <li className="nav-item">
                  <Link
                    style={{color:'white'}}
                      type="button" 
                      className="nav-link btn btn-link navbarbtn buttonn"
                      to="/farms"
                    >
                      Farms
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                    style={{color:'white'}}
                      type="button"
                      className="nav-link btn btn-link navbarbtn buttonn"
                      to="/pools"
                    >
                      Pools
                    </Link>
                  </li>
                  <li className="nav-item">
                    <a
                    style={{color:'white'}}
                      type="button"
                      className="nav-link navbarbtn btn btn-link buttonn"
                      href="https://launch.aquaprotocol.com"
                    >
                      Aquapad
                    </a>
                  </li> 
				</ul>
			</div>
			<div className="collapse navbar-collapse justify-content-end" id="navbarNav">
				<ul className="navbar-nav">
					<li className="nav-item headerdiv">
						{!account ? (
								<div onClick={()=>setShowWallet(true)}><UnlockButton width="100%" /></div>
							) : 
              <div><div className="nav-link buttonn btn connectwalletbtn text-white"
                     style={{borderRadius:'24px',width:'100%',
                     paddingLeft:'32.5px',paddingRight:'32.5px'}}>{account.slice(0,10).concat('....')}</div></div> 
              // <p className="nav-link text-dark m-auto border border-primary navbarbtn"
							// style={{fontWeight:'bold',borderRadius:'24px',
							// padding:'5px',marginRight:'25px'}}>{account.slice(0,7).concat('...')}</p>
						}
					</li>
				</ul>
		</div>
	 </div>
    </nav>
    <ConnectWalletModal onClose={()=>setShowWallet(false)} show={showWallet} />
    </>
	);
};

export default Header;