import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

function MapComponent({ data, error }) {
	return (
		<section>
			{data &&
				data.latitude >= -90 &&
				data.latitude <= 90 &&
				data.longitude >= -180 &&
				data.longitude <= 180 && (
					<MapContainer
						center={[data.latitude, data.longitude]}
						zoom={13}
						style={{ height: "100vh", width: "100%" }}
					>
						<TileLayer
							url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
							attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
						/>
						<Marker position={[data.latitude, data.longitude]}>
							<Popup>{data.region}</Popup>
						</Marker>
					</MapContainer>
				)}
			{error && <h1>{error}</h1>}
		</section>
	);
}

export default MapComponent;
