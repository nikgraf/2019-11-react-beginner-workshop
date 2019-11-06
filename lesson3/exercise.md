## React - Refs & LiveCycle Hooks

1. Use createRef & componentDidMount to build a Map component. Use the plain Google Maps API, plain [Leaflet](https://leafletjs.com/) or similar. Do not use react-leaflet or similar!

**Hint** How to use Leaflet:

Run `npm install --save leaflet`

```js
import Leaflet from "leaflet";

const link = document.createElement("link");
link.rel = "stylesheet";
link.href = "https://unpkg.com/leaflet@latest/dist/leaflet.css";
document.body.appendChild(link);

const map = Leaflet.map(!!TODO_ELEMENT!!).setView([51.505, -0.09], 13);

Leaflet.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
  attribution:
    '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);
```

2. For each entry show a small map and center the map at the location position.
3. Bonus Exercise: Add one larger map on top that accepts a prop `markers` incl. the position and name. Use this to display all the places with markers.
