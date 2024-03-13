const DisplayData = ({ data }) => {
	return (
		<section className="ip-ids">
			<div>
				<p>IP ADDRESS</p>
				<h1>{data.ip}</h1>
			</div>
			<div>
				<p>LOCATION</p>
				<h1>
					{data.region}, {data.country}
				</h1>
			</div>
			<div>
				<p>TIMEZONE</p>
				<h1>UTC {data.utc_offset}</h1>
			</div>
			<div>
				<p>ISP</p>
				<h1>{data.org}</h1>
			</div>
		</section>
	);
};

export default DisplayData;
