import useFetch from "./useFetch";
import DisplayData from "./DisplayData";

const AddressInfo = ({ ip }) => {
	const { data, isLoading, error } = useFetch(
		`https://geo.ipify.org/api/v2/country?apiKey=at_A9dIeC17MmxpnG5DitiZP0SWorpTP&ipAddress=${ip}`
	);

	return (
		<section>
			{isLoading && <p> Loading... </p>}
			{data && <DisplayData data={data} />}
			{error && <p> {error} </p>}
		</section>
	);
};

export default AddressInfo;
