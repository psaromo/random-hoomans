import React from "react";
import { FaSearch } from "react-icons/fa";

const Nav = () => {
	return (
		<nav>
			<h1>Hoomans</h1>
			<div className='search'>
				<input type='text'></input>
				<button>
					<FaSearch />
				</button>
			</div>
		</nav>
	);
};

export default Nav;
