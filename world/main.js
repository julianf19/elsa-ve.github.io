let startLayer = L.tileLayer.provider("OpenTopoMap");

let map = L.map("map", {
    center: [50,0],
    zoom: 5,
    layers: [
        L.tileLayer.provider("OpenTopoMap")
    ]
});

L.control.layers({
    "OpenTopoMap": L.tileLayer.provider("OpenTopoMap"),
    "OpenStreetMap.Mapnik": L.tileLayer.provider("OpenStreetMap.Mapnik"),
    "CyclOSM": L.tileLayer.provider("CyclOSM"),
    "OpenMapSurfer.Roads": L.tileLayer.provider("OpenMapSurfer.Roads")

    //add 3-4 more layers!

}).addTo(map);

