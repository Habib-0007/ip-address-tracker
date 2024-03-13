import "./App.css";
import AddressInfo from "./components/AddressInfo";
import Search from "./components/Search";
import MapCompnent from "./components/MapCompnent";
import { useState } from "react";
import useFetch from "./components/useFetch";

function App() {
	const [ip, setIp] = useState("");
	function setNewIp() {
		setIp(event.target.value);
	}

	const { data, isLoading, error } = useFetch(`https://ipapi.co/${ip}/json/`);
	return (
		<section>
			<section className="top">
				<h1>IP Address Tracker</h1>
				<Search
					ip={ip}
					setNewIp={setNewIp}
				/>
				<AddressInfo
					data={data}
					isLoading={isLoading}
					error={error}
				/>
			</section>
			<MapCompnent
				isLoading={isLoading}
				data={data}
				error={error}
			/>
		</section>
	);
}

export default App;
