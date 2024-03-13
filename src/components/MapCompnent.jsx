import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

function MapComponent() {
	return (
		<MapContainer
			center={[37.7749, -122.4194]}
			zoom={13}
			style={{ height: "100vh", width: "100%" }}
		>
			<TileLayer
				url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
				attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
			/>
			<Marker position={[37.7749, -122.4194]}>
				<Popup>Silicon Valley</Popup>
			</Marker>
		</MapContainer>
	);
}

export default MapComponent;
