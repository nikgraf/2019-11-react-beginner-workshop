import React from "react";
import Leaflet from "leaflet";

const link = document.createElement("link");
link.rel = "stylesheet";
link.href = "https://unpkg.com/leaflet@latest/dist/leaflet.css";
document.body.appendChild(link);

class Map extends React.Component {
  constructor(props) {
    super(props);
    this.mapElement = React.createRef();
  }

  componentDidMount() {
    this.map = Leaflet.map(this.mapElement.current).setView(
      [this.props.location.lat, this.props.location.long],
      13
    );

    Leaflet.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(this.map);
  }

  render() {
    return <div ref={this.mapElement} style={{ height: 200 }} />;
  }
}

export default Map;
