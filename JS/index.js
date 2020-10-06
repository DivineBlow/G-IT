//2GIS карта
let map;
DG.then(function () {
    map = DG.map('map', {
        center: [55.75, 37.61],
        zoom: 8.5,
});
DG.marker([55.75, 37.61]).addTo(map).bindPopup('Москва и Московская область');
});
//2GIS карта

