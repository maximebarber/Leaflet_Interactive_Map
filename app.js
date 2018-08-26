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
var bas_rhin = invert_lat_lng
(
    [
        // * Obernai
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
        ],
        // * Strasbourg
        [
            [
                7.7748870849609375,
                48.62746280105111
            ],
            [
                7.719268798828125,
                48.63063958030254
            ],
            [
                7.7048492431640625,
                48.61929302177067
            ],
            [
                7.6966094970703125,
                48.60158729649512
            ],
            [
                7.6815032958984375,
                48.59931688270807
            ],
            [
                7.679443359375,
                48.59568400838304
            ],
            [
                7.680816650390624,
                48.587963282992845
            ],
            [
                7.6746368408203125,
                48.57342695234659
            ],
            [
                7.6636505126953125,
                48.55797752047523
            ],
            [
                7.658843994140625,
                48.5534326717307
            ],
            [
                7.6663970947265625,
                48.537977131982025
            ],
            [
                7.6773834228515625,
                48.532975799741635
            ],
            [
                7.682876586914063,
                48.518878477951446
            ],
            [
                7.68218994140625,
                48.50068258677571
            ],
            [
                7.680816650390624,
                48.48156986876895
            ],
            [
                7.7048492431640625,
                48.47610776896956
            ],
            [
                7.7405548095703125,
                48.471555569874745
            ],
            [
                7.7542877197265625,
                48.48202501720533
            ],
            [
                7.779006958007812,
                48.500227605781035
            ],
            [
                7.790679931640624,
                48.5216072980982
            ],
            [
                7.7954864501953125,
                48.545705491847464
            ],
            [
                7.796173095703125,
                48.55388717497782
            ],
            [
                7.769393920898437,
                48.60113322190171
            ],
            [
                7.7803802490234375,
                48.61202988553221
            ],
            [
                7.793426513671875,
                48.62519355056901
            ],
            [
                7.798919677734375,
                48.63563125791996
            ],
            [
                7.7748870849609375,
                48.62746280105111
            ]  
        ],
        // * Molsheim 
        [
            [
                7.476882934570312,
                48.552750909204676
            ],
            [
                7.47344970703125,
                48.54252336892718
            ],
            [
                7.467269897460937,
                48.53888641203577
            ],
            [
                7.459716796875001,
                48.5370678355958
            ],
            [
                7.465553283691407,
                48.53183906441962
            ],
            [
                7.4686431884765625,
                48.529792876529015
            ],
            [
                7.479972839355468,
                48.52638237963075
            ],
            [
                7.4871826171875,
                48.525700252688765
            ],
            [
                7.499542236328124,
                48.52797397343302
            ],
            [
                7.504348754882812,
                48.53252110867523
            ],
            [
                7.507781982421875,
                48.53547652761968
            ],
            [
                7.50812530517578,
                48.5402503014931
            ],
            [
                7.506752014160156,
                48.546841915833404
            ],
            [
                7.497138977050781,
                48.55116009425219
            ],
            [
                7.487869262695312,
                48.5493419587775
            ],
            [
                7.476882934570312,
                48.552750909204676
            ]
        ]
    ]
);

var haut_rhin = invert_lat_lng
(
    [
        // * Mulhouse
        [
            [
                7.311401367187499,
                47.78824822248784
            ],
            [
                7.274322509765624,
                47.75686775372488
            ],
            [
                7.252349853515625,
                47.75086639028423
            ],
            [
                7.253036499023437,
                47.746711194756
            ],
            [
                7.2544097900390625,
                47.74440260945156
            ],
            [
                7.2564697265625,
                47.74024689788072
            ],
            [
                7.260589599609374,
                47.73516724432785
            ],
            [
                7.267456054687499,
                47.72916337846899
            ],
            [
                7.2887420654296875,
                47.719001413201916
            ],
            [
                7.31964111328125,
                47.70791337194979
            ],
            [
                7.36083984375,
                47.70606513569572
            ],
            [
                7.4102783203125,
                47.73193447949174
            ],
            [
                7.4267578125,
                47.76702233051035
            ],
            [
                7.40753173828125,
                47.78363463526376
            ],
            [
                7.371826171874999,
                47.81499895328108
            ],
            [
                7.349853515625,
                47.80762081718071
            ],
            [
                7.311401367187499,
                47.78824822248784
            ]
        ],
        // * Colmar
        [
            [
                7.33062744140625,
                48.095508859658345
            ],
            [
                7.3148345947265625,
                48.09321578710874
            ],
            [
                7.309341430664062,
                48.08495987919106
            ],
            [
                7.326507568359375,
                48.07670264591117
            ],
            [
                7.349853515625,
                48.06385542635001
            ],
            [
                7.353973388671875,
                48.05559480584614
            ],
            [
                7.360153198242187,
                48.051004999484974
            ],
            [
                7.3848724365234375,
                48.060643120324514
            ],
            [
                7.3821258544921875,
                48.095050253329354
            ],
            [
                7.3587799072265625,
                48.10513864768105
            ],
            [
                7.353286743164062,
                48.102846004623906
            ],
            [
                7.33062744140625,
                48.095508859658345
            ]
        ]
    ]
);

var france =
{
    "departements":
    [
        {
            "name": "gironde",
            "number": 33,
            "polygons": invert_lat_lng
            ([
                // * Pauillac
                [
                    [
                        -0.7834625244140625,
                        45.206231026242214
                    ],
                    [
                        -0.7395172119140625,
                        45.17913284309501
                    ],
                    [
                        -0.7477569580078125,
                        45.21010114198755
                    ]
                ],
                // * Bordeaux
                [
                    [
                        -0.65643310546875,
                        44.91813929958515
                    ],
                    [
                        -0.71136474609375,
                        44.86560301534198
                    ],
                    [
                        -0.72784423828125,
                        44.84418558537004
                    ],
                    [
                        -0.7072448730468749,
                        44.79645449978889
                    ],
                    [
                        -0.6976318359375,
                        44.77403648591521
                    ],
                    [
                        -0.5891418457031249,
                        44.74185630294231
                    ],
                    [
                        -0.48614501953124994,
                        44.78573392716592
                    ],
                    [
                        -0.435333251953125,
                        44.87630874326679
                    ],
                    [
                        -0.4222869873046875,
                        44.9643120983638
                    ],
                    [
                        -0.4003143310546875,
                        44.992969144596394
                    ],
                    [
                        -0.4030609130859375,
                        45.03228854011636
                    ],
                    [
                        -0.427093505859375,
                        45.03859654645257
                    ],
                    [
                        -0.46348571777343744,
                        45.03325904788863
                    ],
                    [
                        -0.49850463867187494,
                        45.01578738994143
                    ],
                    [
                        -0.53558349609375,
                        44.96917023288551
                    ],
                    [
                        -0.597381591796875,
                        44.939529212272305
                    ],
                    [
                        -0.626220703125,
                        44.93758500391091
                    ],
                    [
                        -0.65643310546875,
                        44.91813929958515
                    ]
                ]
            ])
        },
        {        
            "name": "herault",
            "number": 34,
            "polygons": invert_lat_lng
            ([
                // * Montpellier
                [
                    [
                        3.9385986328125,
                        43.63110543935801
                    ],
                    [
                        3.8438415527343746,
                        43.63806292753483
                    ],
                    [
                        3.6639404296874996,
                        43.574421623084234
                    ],
                    [
                        3.5060119628906246,
                        43.44494295526125
                    ],
                    [
                        3.49639892578125,
                        43.3781031842174
                    ],
                    [
                        3.519744873046875,
                        43.31918320532585
                    ],
                    [
                        3.552703857421875,
                        43.31918320532585
                    ],
                    [
                        3.58978271484375,
                        43.35014829117744
                    ],
                    [
                        3.6543273925781254,
                        43.394071624983866
                    ],
                    [
                        3.690032958984375,
                        43.393073720674415
                    ],
                    [
                        3.7229919433593746,
                        43.414026260415305
                    ],
                    [
                        3.7628173828124996,
                        43.47783692169239
                    ],
                    [
                        3.8136291503906246,
                        43.519676085239226
                    ],
                    [
                        3.8507080078125004,
                        43.51868025160499
                    ],
                    [
                        3.89190673828125,
                        43.560491112629286
                    ],
                    [
                        3.9509582519531246,
                        43.5734266934657
                    ],
                    [
                        3.9797973632812496,
                        43.58735421230633
                    ],
                    [
                        3.9385986328125,
                        43.63110543935801
                    ]

                ]
            ])
        }
    ]
}

let coordinates = "";

// * Loop through all the polygons and add to map
for (i in france.departements)
{
    coordinates += france.departements[i].polygons;

    // * Set polygon color
    var polygonColor = { color: 'red' }
    
    // * Set polygon position
    L.polygon
    (
        france.departements[i].polygons,
        polygonColor 
    )
    .addTo(mymap);
}

document.getElementById("demo").innerHTML = coordinates;

// * Define shape and add to map with coordinates
var polygon_bas_rhin = L.polygon
(
    bas_rhin, 
    { color:'#1A237E'}
)
.addTo(mymap);

var polygon_haut_rhin = L.polygon
(
    haut_rhin,
    { color: '#1A237E'}
)
.addTo(mymap);

// * Set polygon color
var polygonColor = {color: '#1A237E'}

// * Get departement data from form

function getDepartement() 
{
    let dept;

    dept = document.getElementById("dept");

    const errorMsg = "Département indisponible";
    
    switch(dept.value)
    {
        case '67':
            mymap.fitBounds
            (
            polygon_bas_rhin.getBounds()
            ); 
            document.getElementById("errorMsg").innerHTML = "";
            break;
        case '68':
            mymap.fitBounds
            (
            polygon_haut_rhin.getBounds()
            );
            document.getElementById("errorMsg").innerHTML = "";
            break;
        case '33':
            mymap.fitBounds
            (
            polygon_gironde.getBounds()
            );
            document.getElementById("errorMsg").innerHTML = "";
            break;
        default:
            mymap.fitBounds
            (
            polygon_bas_rhin.getBounds()
            );
            document.getElementById("errorMsg").innerHTML = errorMsg;
    }
}

// * Zoom the map to the given departement
//let departement = getDepartement();



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