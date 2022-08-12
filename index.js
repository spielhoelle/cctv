var map = L.map("map");
L.tileLayer("http://{s}.tile.osm.org/{z}/{x}/{y}.png").addTo(map);

map.setView([36.077954, 127.976165], 8);
//37.59864377, 126.9475791

var myRenderer = L.canvas({ padding: 0.5 });
console.log(data);

for (var i = 0; i < data.length; i += 1) { // 100k points
	L.circleMarker({lat: data[i][0], lng: data[i][1]}, {
		renderer: myRenderer
	}).addTo(map).bindPopup('marker ' + i);
}

function getRandomLatLng() {
	return [
		-90 + 180 * Math.random(),
		-180 + 360 * Math.random()
	];
}
//map.on("zoomstart", function (e) { console.log("ZOOMSTART", e); });
//map.on("zoomend", function (e) { console.log("ZOOMEND", e); });
