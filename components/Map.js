//import React in the code
import React, { Component } from "react";
//import all the components we are going to use
import { StyleSheet } from "react-native";
import MapView, { Marker } from "react-native-maps";
import axios from "axios";
//import language files for translation
import LangAr from "../lang/ar.json";
import LangEn from "../lang/en.json";
import AorE from "../lang/AorE";
//import Api link
import Api from "../Api";

let api = Api.link;

//The beginning of the class
export default class Map extends Component {
    state = {
        markerData: {
            latitude: 24.470901,
            longitude: 39.612236,
        },
        initial: {
            latitude: 24.470901,
            longitude: 39.612236,
        },
        mapData: {
            latitude: 24.470901,
            longitude: 39.612236,
            latitudeDelta: 0.015,
            longitudeDelta: 0.0121,
        },
    };

    //To start the map at trainer's location
    componentDidMount = async () => {
        let currentCity;
        await axios.get(api + "/IdTrainer/" + this.props.mapForUser).then(resp => {
            let items = (resp.data);
            items.filter(function (item) {
                currentCity = item.city
            });
            switch (currentCity) {
                case "Madinah":
                    this.setState({ mapData: { latitude: 24.470901, longitude: 39.612236, latitudeDelta: 0.015, longitudeDelta: 0.0121 } });
                    this.setState({ initial: { latitude: 24.470901, longitude: 39.612236 } });
                    break;
                case "Makkah":
                    this.setState({ mapData: { latitude: 21.422510, longitude: 39.826168, latitudeDelta: 0.015, longitudeDelta: 0.0121 } });
                    this.setState({ initial: { latitude: 21.422510, longitude: 39.826168 } });
                    break;
                case "Taif":
                    this.setState({ mapData: { latitude: 21.437273, longitude: 40.512714, latitudeDelta: 0.015, longitudeDelta: 0.0121 } });
                    this.setState({ initial: { latitude: 21.437273, longitude: 40.512714 } });
                    break;
                case "Yanbu":
                    this.setState({ mapData: { latitude: 24.186848, longitude: 38.026428, latitudeDelta: 0.015, longitudeDelta: 0.0121 } });
                    this.setState({ initial: { latitude: 24.186848, longitude: 38.026428 } });
                    break;
                case "Qunfudhah":
                    this.setState({ mapData: { latitude: 19.12814, longitude: 41.078739, latitudeDelta: 0.015, longitudeDelta: 0.0121 } });
                    this.setState({ initial: { latitude: 19.12814, longitude: 41.078739 } });
                    break;
                case "Laith":
                    this.setState({ mapData: { latitude: 20.151259, longitude: 40.269649, latitudeDelta: 0.015, longitudeDelta: 0.0121 } });
                    this.setState({ initial: { latitude: 20.151259, longitude: 40.269649 } });
                    break;
                case "Khulays":
                    this.setState({ mapData: { latitude: 22.150369, longitude: 39.341375, latitudeDelta: 0.015, longitudeDelta: 0.0121 } });
                    this.setState({ initial: { latitude: 22.150369, longitude: 39.341375 } });
                    break;
                case "Khurmah":
                    this.setState({ mapData: { latitude: 21.923937, longitude: 42.06494, latitudeDelta: 0.015, longitudeDelta: 0.0121 } });
                    this.setState({ initial: { latitude: 21.923937, longitude: 42.06494 } });
                    break;
                case "Ranyah":
                    this.setState({ mapData: { latitude: 21.262738, longitude: 42.85404, latitudeDelta: 0.015, longitudeDelta: 0.0121 } });
                    this.setState({ initial: { latitude: 21.262738, longitude: 42.85404 } });
                    break;
                case "Alula":
                    this.setState({ mapData: { latitude: 26.6167, longitude: 37.9167, latitudeDelta: 0.015, longitudeDelta: 0.0121 } });
                    this.setState({ initial: { latitude: 26.6167, longitude: 37.9167 } });
                    break;
                case "Hinakiyah":
                    this.setState({ mapData: { latitude: 24.8797, longitude: 40.5153, latitudeDelta: 0.015, longitudeDelta: 0.0121 } });
                    this.setState({ initial: { latitude: 24.8797, longitude: 40.5153 } });
                    break;
            }
        })
    }

    //To change red marker position and move the map with it
    handleRegionChange = mapData => {
        this.setState({
            markerData: { latitude: mapData.latitude, longitude: mapData.longitude },
            mapData,
        });
        this.distance(this.state.initial.latitude, this.state.initial.longitude, this.state.mapData.latitude, this.state.mapData.longitude, "K");
    };

    //To calculate the distance from longitude and latitude
    distance(lat1, lon1, lat2, lon2, unit) {
        if ((lat1 == lat2) && (lon1 == lon2)) {
            return 0;
        }
        else {
            var radlat1 = Math.PI * lat1 / 180;
            var radlat2 = Math.PI * lat2 / 180;
            var theta = lon1 - lon2;
            var radtheta = Math.PI * theta / 180;
            var dist = Math.sin(radlat1) * Math.sin(radlat2) + Math.cos(radlat1) * Math.cos(radlat2) * Math.cos(radtheta);
            if (dist > 1) {
                dist = 1;
            }
            dist = Math.acos(dist);
            dist = dist * 180 / Math.PI;
            dist = dist * 60 * 1.1515;
            if (unit == "K") { dist = dist * 1.609344 }
            if (unit == "N") { dist = dist * 0.8684 }
            if (dist > 80) {
                alert(AorE.A == true ? LangAr.Distance : LangEn.Distance)
            }
        }
    }

    render() {
        return (
            <MapView
                style={{ flex: 1 }}
                region={this.state.mapData}
                onResponderStart={this.handleRegionBegin}
                onRegionChangeComplete={this.handleRegionChange}>
                <Marker
                    coordinate={this.state.markerData}
                    title="Your location"
                />
            </MapView>
        );
    }
}
//Declare the style
const styles = StyleSheet.create({
    container: {
        ...StyleSheet.absoluteFillObject,
        justifyContent: "flex-end",
        alignItems: "center",
    },
    map: {
        ...StyleSheet.absoluteFillObject,
    },
});