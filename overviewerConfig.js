var overviewerConfig = {
    "CONST": {
        "tileSize": 384,
        "image": {
            "defaultMarker": "signpost.png",
            "signMarker": "signpost_icon.png",
            "bedMarker": "bed.png",
            "spawnMarker": "icons/marker_home.png",
            "spawnMarker2x": "icons/marker_home_2x.png",
            "queryMarker": "icons/marker_location.png",
            "queryMarker2x": "icons/marker_location_2x.png",
            "compass": {
                "0": "compass_upper-left.png",
                "1": "compass_upper-right.png",
                "3": "compass_lower-left.png",
                "2": "compass_lower-right.png"
            }
        },
        "mapDivId": "mcmap",
        "UPPERLEFT": 0,
        "UPPERRIGHT": 1,
        "LOWERLEFT": 3,
        "LOWERRIGHT": 2
    },
    "worlds": [
        "survival - overworld"
    ],
    "map": {
        "debug": true,
        "cacheTag": "1565390734",
        "north_direction": "lower-left",
        "controls": {
            "pan": true,
            "zoom": true,
            "spawn": true,
            "compass": true,
            "mapType": true,
            "overlays": true,
            "coordsBox": true
        }
    },
    "tilesets": [
        {
            "name": "Survival Daytime",
            "zoomLevels": 5,
            "defaultZoom": 1,
            "maxZoom": 5,
            "path": "survivalday",
            "base": "",
            "bgcolor": "#1a1a1a",
            "world": "survival - overworld",
            "last_rendertime": 1565390444,
            "imgextension": "png",
            "isOverlay": false,
            "poititle": "Markers",
            "showlocationmarker": true,
            "center": [
                0,
                80,
                0
            ],
            "minZoom": 0,
            "spawn": [
                0,
                80,
                0
            ],
            "north_direction": 0
        },
        {
            "name": "Survival Nighttime",
            "zoomLevels": 5,
            "defaultZoom": 1,
            "maxZoom": 5,
            "path": "survivalnight",
            "base": "",
            "bgcolor": "#1a1a1a",
            "world": "survival - overworld",
            "last_rendertime": 1565390444,
            "imgextension": "png",
            "isOverlay": false,
            "poititle": "Markers",
            "showlocationmarker": true,
            "center": [
                0,
                80,
                0
            ],
            "minZoom": 0,
            "spawn": [
                0,
                80,
                0
            ],
            "north_direction": 0
        }
    ]
};
