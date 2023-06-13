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
		<nav className="navbar navbar-expand-lg navbar-light bg-light">
			<img style={{height:'40px',width:'40px'}} src={logo} alt="Logo" />
			<p className="navbar-brand" style={{marginLeft:"25px"}} >AQUA PROTOCOL DEX</p>
			<div style={{marginLeft:"1000px",borderRadius:"20px",borderColor:"black",borderWidth:"5px",}}>
				{!account ? (
					<UnlockButton width="100%" />
				) : <p style={{fontWeight:'bold'}}>{account.slice(0,7)}</p>
				}
			</div>
        </nav>  
	);
};

export default Header;