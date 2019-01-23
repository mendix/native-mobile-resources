/**
 * AUTO-GENERATED file: please do not change this file otherwise it will be overwritten
 * @author Mendix Widgets Team
 */

interface CommonProps {
    id: string;
    class: string;
}

export interface MapsProps extends CommonProps {
    markerTitle: PluginWidget.EditableValue<string>;
    markerDescription: PluginWidget.EditableValue<string>;
    markerLatitude: PluginWidget.EditableValue<BigJs.Big>;
    markerLongitude: PluginWidget.EditableValue<BigJs.Big>;
    latitude: PluginWidget.EditableValue<BigJs.Big>;
    longitude: PluginWidget.EditableValue<BigJs.Big>;
    latitudeDelta: PluginWidget.EditableValue<BigJs.Big>;
    longitudeDelta: PluginWidget.EditableValue<BigJs.Big>;
    mapType: "standard" | "satellite" | "hybrid";
    showsUserLocation: boolean;
    showsMyLocationButton: boolean;
    showsPointsOfInterest: boolean;
    showsCompass: boolean;
    showsScale: boolean;
    showsBuildings: boolean;
    showsTraffic: boolean;
    showsIndoors: boolean;
    zoomEnabled: boolean;
    minZoomLevel: number;
    maxZoomLevel: number;
    rotateEnabled: boolean;
    scrollEnabled: boolean;
    pitchEnabled: boolean;
    onRegionChange?: PluginWidget.ActionValue;
    onMarkerPress?: PluginWidget.ActionValue;
}
