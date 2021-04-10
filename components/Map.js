//import React in the code
import React, { Component } from "react";
//import all the components we are going to use
import { StyleSheet } from "react-native";
import MapView, { Marker } from "react-native-maps";

//The beginning of the class
export default class Map extends Component {
    state = {
        markerData: {
            latitude: this.props.latitude,
            longitude: this.props.longitude,
        },
        initial: {
            latitude: 24.470901,
            longitude: 39.612236,
        },
        mapData: {
            latitude: this.props.latitude,
            longitude: this.props.longitude,
            latitudeDelta: 0.015,
            longitudeDelta: 0.0121,
        },
    };

    //To change red marker position and move the map with it
    handleRegionChange = mapData => {
        this.setState({
            markerData: { latitude: mapData.latitude, longitude: mapData.longitude },
            mapData,
        });
    };

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