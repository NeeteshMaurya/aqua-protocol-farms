/* eslint-disable no-undef */
import React, { useEffect, useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { useWeb3React } from '@web3-react/core'
import UnlockButton from "components/UnlockButton";
import logo from "../../assets/images/mainIcons/Avatar.png";
import ethIcon from "../../assets/images/mainIcons/ethIcon.png";



const Header = () => {
	const { account, activate, deactivate } = useWeb3React()
	// const { account } = useActiveWeb3React()
	// const [add, setAdd] = useState()
	// const [bal, setBal] = useState()

	
	return (
		<nav className="navbar navbar-expand-sm navbar-dark bg-dark" style={{width:'100%'}}>
		<div className="container-fluid">
			<a href="https://aqua-protocol-dex.vercel.app"><img style={{height:'40px',width:'40px'}} src={logo} alt="Logo" /></a>
		 	<a className="navbar-brand text-white" href="https://aqua-protocol-dex.vercel.app" style={{marginLeft:"25px"}} >
		 	   AQUA PROTOCOL DEX
	 	    </a>
		   
		   <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
		   <span className="navbar-toggler-icon" />
		   </button>
		   <div className="collapse navbar-collapse" id="navbarNav">
		   <ul className="navbar-nav">
		            <li className="nav-item">
						<Link type="button" style={{fontWeight:'bold',borderRadius:'24px',marginLeft:'40px',padding:'10px',marginRight:'40px'}}
						className="nav-link btn btn-primary btn-m border border-primary text-white" 
						to="/farms">Farms</Link>
					</li>
					<li className="nav-item">
						<Link type="button" style={{padding:'10px',fontWeight:'bold',borderRadius:'24px',marginLeft:'40px',marginRight:'40px'}}
						className="nav-link btn btn-primary btn-m text-white"
						 to="/pools">Pools</Link>
					</li>
		   </ul>
		   </div>
		   <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
			  <ul className="navbar-nav ">
					<li className="nav-item " >
						{!account ? (
							<UnlockButton width="100%" />
						) : <p style={{fontWeight:'bold',borderRadius:'24px',padding:'11px'}} className="text-white border border-primary">{account.slice(0,7).concat('...')}</p>
						}	
					</li>
			  </ul>
		   </div>
		</div>
	 </nav>
	);
};

export default Header;