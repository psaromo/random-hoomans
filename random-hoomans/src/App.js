import Users from "./components/Users";
import Nav from "./components/Nav";
import "./styles.css";

function App() {
	return (
		<>
			<Nav />
			<div className='content'>
				<Users />
			</div>
		</>
	);
}

export default App;
