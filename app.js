// * Set initial map view
var mymap = 
L.map
(
    'mapid'
)
.setView
(
    [48.5574791, 7.7475236999999995], 
    10
);

// * Add a tile to variable mymap (mapbox)
L.tileLayer
(
    'https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', 
    {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox.streets',
    accessToken: 'pk.eyJ1IjoibWRiYXJiZXIiLCJhIjoiY2psMnBxZmk3MXQ4czNxcDR0Z2V4YzJxeiJ9.KH2_16TV4w9prYDWZUstbg'
    }
)
.addTo(mymap);

// * Initialize Zones and convert them to LAT/LNG
var latlngs = invert_lat_lng
(
    [
        [
            [
                48.64198358792223,
                7.71240234375
            ],
            [
                48.592050872804194,
                7.63824462890625
            ],
            [
                48.54297797016485,
                7.639617919921874
            ],
            [
                48.48839666648745,
                7.72613525390625
            ],
            [
                48.516604348867475,
                7.787933349609374
            ],
            [
                48.57842428752037,
                7.794799804687499
            ],
            [
                48.60385760823255,
                7.797546386718749
            ],
            [
                48.64198358792223,
                7.752227783203125
            ],
            [
                48.64198358792223,
                7.71240234375
            ]
        ],
        [
            [
                48.56252196094323,
                7.474136352539062
            ],
            [
                48.54343256731947,
                7.463836669921875
            ],
            [
                48.52797397343302,
                7.4727630615234375
            ],
            [
                48.524335971242216,
                7.5098419189453125
            ],
            [
                48.54070492314604,
                7.5359344482421875
            ],
            [
                48.55752305397336,
                7.527694702148437
            ],
            [
                48.56570282635063,
                7.489929199218751
            ],
            [
                48.56252196094323,
                7.474136352539062
            ]
        ],
        [
            [
                7.46315,
                48.4729213
            ],
            [
                7.4404907,
                48.4556197
            ],
            [
                7.4521637,
                48.4405898
            ],
            [
                7.4933624,
                48.4351233
            ],
            [
                7.5180817,
                48.4533427
            ],
            [
                7.517395,
                48.4720108
            ],
            [
                7.4830627,
                48.4792941
            ],
            [
                7.4638367,
                48.472466
            ]
        ]
    ]
);

// * Definie zone and add to map
var polygon = L.polygon
(
    latlngs, 
    { color:'#1A237E'}
)
.addTo(mymap);

// zoom the map to the polygon
// map.fitBounds
// (
//     polygon.getBounds()
// );

// * Convert from LNG/LAT to LAT/LNG

function invert_lat_lng(coordinates)
{
    for (j = 0; j < coordinates.length; j++)
    {
        for (i = 0; i < coordinates[j].length; i++)
        {
            let tmp = coordinates[j][i][0];
    
            coordinates[j][i][0] = coordinates[j][i][1];
            coordinates[j][i][1] = tmp;
        }
    }
    return coordinates;
}