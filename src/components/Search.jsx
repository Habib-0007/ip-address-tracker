const Search = ({ ip, setNewIp }) => {
	return (
		<section className="search-box">
			<div className="area">
				<input
					type="text"
					placeholder="Enter an IP Address"
					value={ip}
					onChange={event => {
						setNewIp();
					}}
				/>
				<button>
					<i className="fa fa-chevron-right"></i>
				</button>
			</div>
		</section>
	);
};

export default Search;
