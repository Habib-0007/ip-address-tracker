import "./App.css";
import AddressInfo from "./components/AddressInfo";
import Search from "./components/Search";
import MapCompnent from "./components/MapCompnent";
import { useState } from "react";

function App() {
	const [ip, setIp] = useState("");
	function setNewIp() {
		setIp(event.target.value);
	}
	return (
		<section>
			<section className="top">
				<h1>IP Address Tracker</h1>
				<Search
					ip={ip}
					setNewIp={setNewIp}
				/>
				<AddressInfo ip={ip} />
			</section>
			<MapCompnent />
		</section>
	);
}

export default App;
