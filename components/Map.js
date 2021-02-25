import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import MapView, { Marker } from 'react-native-maps';

export default class Map extends Component {
    state = {
        markerData: {
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
                onRegionChangeComplete={this.handleRegionChange}>
                <Marker
                    coordinate={this.state.markerData}
                    title="Your location"
                    onDragEnd={e => {
                        console.log('dragEnd', e.nativeEvent.coordinate);
                    }}
                />
            </MapView>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        ...StyleSheet.absoluteFillObject,
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    map: {
        ...StyleSheet.absoluteFillObject,
    },
});