import DisplayData from "./DisplayData";

const AddressInfo = ({ data, isLoading, error }) => {
	return (
		<section>
			{isLoading && <p> Loading... </p>}
			{data && <DisplayData data={data} />}
			{error && <p> {error} </p>}
		</section>
	);
};

export default AddressInfo;
