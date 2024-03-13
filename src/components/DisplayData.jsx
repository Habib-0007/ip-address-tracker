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
							{data.location.region}, {data.location.country}
						</h1>
					</div>
					<div>
						<p>TIMEZONE</p>
						<h1>UTC {data.location.timezone}</h1>
					</div>
					<div>
						<p>ISP</p>
						<h1>{data.isp}</h1>
					</div> 
		</section>
	);
};

export default DisplayData;
