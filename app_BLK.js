var defaultFill = new ol.style.Fill({
   color: 'rgba(255,255,255,0.4)'
 });
 var defaultStroke = new ol.style.Stroke({
   color: '#cc3333',
   width: 1.25
 });
 var defaultSelectionFill = new ol.style.Fill({
   color: 'rgba(255,255,0,0.4)'
 });
 var defaultSelectionStroke = new ol.style.Stroke({
   color: '#FFFF00',
   width: 1.25
 });


var categories_rencanapolaruang = {"Hutan Lindung": [ new ol.style.Style({
                            stroke: new ol.style.Stroke({color: "rgba(0,0,0,1.0)", lineDash: null, width: 0}),
                        fill: new ol.style.Fill({color: "rgba(27,115,215,1.0)"})
                        })
                        ],
"Hutan Produksi Tetap": [ new ol.style.Style({
                            stroke: new ol.style.Stroke({color: "rgba(0,0,0,1.0)", lineDash: null, width: 0}),
                        fill: new ol.style.Fill({color: "rgba(80,239,63,1.0)"})
                        })
                        ],
"Perkebunan": [ new ol.style.Style({
                            stroke: new ol.style.Stroke({color: "rgba(0,0,0,1.0)", lineDash: null, width: 0}),
                        fill: new ol.style.Fill({color: "rgba(121,223,223,1.0)"})
                        })
                        ],
"Permukiman": [ new ol.style.Style({
                            stroke: new ol.style.Stroke({color: "rgba(0,0,0,1.0)", lineDash: null, width: 0}),
                        fill: new ol.style.Fill({color: "rgba(211,194,123,1.0)"})
                        })
                        ],
"Pertanian Lahan Basah": [ new ol.style.Style({
                            stroke: new ol.style.Stroke({color: "rgba(0,0,0,1.0)", lineDash: null, width: 0}),
                        fill: new ol.style.Fill({color: "rgba(214,151,128,1.0)"})
                        })
                        ],
"Pertanian Lahan Kering": [ new ol.style.Style({
                            stroke: new ol.style.Stroke({color: "rgba(0,0,0,1.0)", lineDash: null, width: 0}),
                        fill: new ol.style.Fill({color: "rgba(78,64,240,1.0)"})
                        })
                        ],
"Sempadan pantai": [ new ol.style.Style({
                            stroke: new ol.style.Stroke({color: "rgba(0,0,0,1.0)", lineDash: null, width: 0}),
                        fill: new ol.style.Fill({color: "rgba(227,33,88,1.0)"})
                        })
                        ],
"Sempadan sungai": [ new ol.style.Style({
                            stroke: new ol.style.Stroke({color: "rgba(0,0,0,1.0)", lineDash: null, width: 0}),
                        fill: new ol.style.Fill({color: "rgba(226,38,195,1.0)"})
                        })
                        ],
"Tambak": [ new ol.style.Style({
                            stroke: new ol.style.Stroke({color: "rgba(0,0,0,1.0)", lineDash: null, width: 0}),
                        fill: new ol.style.Fill({color: "rgba(65,204,125,1.0)"})
                        })
                        ],
"THR. BONTOBAHARI": [ new ol.style.Style({
                            stroke: new ol.style.Stroke({color: "rgba(0,0,0,1.0)", lineDash: null, width: 0}),
                        fill: new ol.style.Fill({color: "rgba(175,209,111,1.0)"})
                        })
                        ],
"": [ new ol.style.Style({
                            stroke: new ol.style.Stroke({color: "rgba(0,0,0,1.0)", lineDash: null, width: 0}),
                        fill: new ol.style.Fill({color: "rgba(173,74,229,1.0)"})
                        })
                        ]};var categoriesSelected_rencanapolaruang = {"Hutan Lindung": [ new ol.style.Style({
                            stroke: new ol.style.Stroke({color: "rgba(255, 204, 0, 1)", lineDash: null, width: 0}),
                        fill: new ol.style.Fill({color: "rgba(255, 204, 0, 1)"})
                        })
                        ],
"Hutan Produksi Tetap": [ new ol.style.Style({
                            stroke: new ol.style.Stroke({color: "rgba(255, 204, 0, 1)", lineDash: null, width: 0}),
                        fill: new ol.style.Fill({color: "rgba(255, 204, 0, 1)"})
                        })
                        ],
"Perkebunan": [ new ol.style.Style({
                            stroke: new ol.style.Stroke({color: "rgba(255, 204, 0, 1)", lineDash: null, width: 0}),
                        fill: new ol.style.Fill({color: "rgba(255, 204, 0, 1)"})
                        })
                        ],
"Permukiman": [ new ol.style.Style({
                            stroke: new ol.style.Stroke({color: "rgba(255, 204, 0, 1)", lineDash: null, width: 0}),
                        fill: new ol.style.Fill({color: "rgba(255, 204, 0, 1)"})
                        })
                        ],
"Pertanian Lahan Basah": [ new ol.style.Style({
                            stroke: new ol.style.Stroke({color: "rgba(255, 204, 0, 1)", lineDash: null, width: 0}),
                        fill: new ol.style.Fill({color: "rgba(255, 204, 0, 1)"})
                        })
                        ],
"Pertanian Lahan Kering": [ new ol.style.Style({
                            stroke: new ol.style.Stroke({color: "rgba(255, 204, 0, 1)", lineDash: null, width: 0}),
                        fill: new ol.style.Fill({color: "rgba(255, 204, 0, 1)"})
                        })
                        ],
"Sempadan pantai": [ new ol.style.Style({
                            stroke: new ol.style.Stroke({color: "rgba(255, 204, 0, 1)", lineDash: null, width: 0}),
                        fill: new ol.style.Fill({color: "rgba(255, 204, 0, 1)"})
                        })
                        ],
"Sempadan sungai": [ new ol.style.Style({
                            stroke: new ol.style.Stroke({color: "rgba(255, 204, 0, 1)", lineDash: null, width: 0}),
                        fill: new ol.style.Fill({color: "rgba(255, 204, 0, 1)"})
                        })
                        ],
"Tambak": [ new ol.style.Style({
                            stroke: new ol.style.Stroke({color: "rgba(255, 204, 0, 1)", lineDash: null, width: 0}),
                        fill: new ol.style.Fill({color: "rgba(255, 204, 0, 1)"})
                        })
                        ],
"THR. BONTOBAHARI": [ new ol.style.Style({
                            stroke: new ol.style.Stroke({color: "rgba(255, 204, 0, 1)", lineDash: null, width: 0}),
                        fill: new ol.style.Fill({color: "rgba(255, 204, 0, 1)"})
                        })
                        ],
"": [ new ol.style.Style({
                            stroke: new ol.style.Stroke({color: "rgba(255, 204, 0, 1)", lineDash: null, width: 0}),
                        fill: new ol.style.Fill({color: "rgba(255, 204, 0, 1)"})
                        })
                        ]};
                    var textStyleCache_rencanapolaruang={}
                    var clusterStyleCache_rencanapolaruang={}
                    var style_rencanapolaruang = function(feature, resolution){
                        
                        var value = feature.get("pola_ruang");
                        var style = categories_rencanapolaruang[value];
                        var allStyles = [];
                        
                        allStyles.push.apply(allStyles, style);
                        return allStyles;
                    };
                    var selectionStyle_rencanapolaruang = function(feature, resolution){
                        
                        var value = feature.get("pola_ruang");
                        var style = categoriesSelected_rencanapolaruang[value]
                        var allStyles = [];
                        
                        allStyles.push.apply(allStyles, style);
                        return allStyles;
                    };

                    var textStyleCache_rencanarelkeretaapi={}
                    var clusterStyleCache_rencanarelkeretaapi={}
                    var style_rencanarelkeretaapi = function(feature, resolution){
                        
                        var value = "";
                        var style = [ new ol.style.Style({
                            stroke: new ol.style.Stroke({color: "rgba(149,66,66,1.0)", lineDash: null, width: 0})
                        })
                        ,new ol.style.Style({
                            stroke: new ol.style.Stroke({color: "rgba(149,66,66,1.0)", lineDash: null, width: 0})
                        })
                        ,new ol.style.Style({
                            
                        })
                        ];
                        var allStyles = [];
                        
                        allStyles.push.apply(allStyles, style);
                        return allStyles;
                    };
                    var selectionStyle_rencanarelkeretaapi = function(feature, resolution){
                        
                        var value = "";
                        var style = [ new ol.style.Style({
                            stroke: new ol.style.Stroke({color: "rgba(255, 204, 0, 1)", lineDash: null, width: 0})
                        })
                        ,new ol.style.Style({
                            stroke: new ol.style.Stroke({color: "rgba(255, 204, 0, 1)", lineDash: null, width: 0})
                        })
                        ,new ol.style.Style({
                            
                        })
                        ]
                        var allStyles = [];
                        
                        allStyles.push.apply(allStyles, style);
                        return allStyles;
                    };

                    var textStyleCache_rencanajalan={}
                    var clusterStyleCache_rencanajalan={}
                    var style_rencanajalan = function(feature, resolution){
                        
                        var value = "";
                        var style = [ new ol.style.Style({
                            stroke: new ol.style.Stroke({color: "rgba(255,179,0,1.0)", lineDash: null, width: 3})
                        })
                        ];
                        var allStyles = [];
                        
                        allStyles.push.apply(allStyles, style);
                        return allStyles;
                    };
                    var selectionStyle_rencanajalan = function(feature, resolution){
                        
                        var value = "";
                        var style = [ new ol.style.Style({
                            stroke: new ol.style.Stroke({color: "rgba(255, 204, 0, 1)", lineDash: null, width: 3})
                        })
                        ]
                        var allStyles = [];
                        
                        allStyles.push.apply(allStyles, style);
                        return allStyles;
                    };

                    var textStyleCache_rencanajaringansutm={}
                    var clusterStyleCache_rencanajaringansutm={}
                    var style_rencanajaringansutm = function(feature, resolution){
                        
                        var value = "";
                        var style = [ new ol.style.Style({
                            stroke: new ol.style.Stroke({color: "rgba(119,195,110,1.0)", lineDash: null, width: 2})
                        })
                        ,new ol.style.Style({
                            stroke: new ol.style.Stroke({color: "rgba(255,255,255,1.0)", lineDash: [6], width: 2})
                        })
                        ];
                        var allStyles = [];
                        
                        allStyles.push.apply(allStyles, style);
                        return allStyles;
                    };
                    var selectionStyle_rencanajaringansutm = function(feature, resolution){
                        
                        var value = "";
                        var style = [ new ol.style.Style({
                            stroke: new ol.style.Stroke({color: "rgba(255, 204, 0, 1)", lineDash: null, width: 2})
                        })
                        ,new ol.style.Style({
                            stroke: new ol.style.Stroke({color: "rgba(255, 204, 0, 1)", lineDash: [6], width: 2})
                        })
                        ]
                        var allStyles = [];
                        
                        allStyles.push.apply(allStyles, style);
                        return allStyles;
                    };
var categories_rencanakawasanstrategis = {"Kawasan Adat Amma Toa": [ new ol.style.Style({
                            image: new ol.style.RegularShape({points: 5, radius: 5.7, stroke: new ol.style.Stroke({color: "rgba(0,0,0,1.0)", lineDash: null, width: 0}), fill: new ol.style.Fill({color: "rgba(80,60,230,1.0)"}), angle: 0})
                        })
                        ],
"Kawasan Agropolitan": [ new ol.style.Style({
                            image: new ol.style.RegularShape({points: 5, radius: 5.7, stroke: new ol.style.Stroke({color: "rgba(0,0,0,1.0)", lineDash: null, width: 0}), fill: new ol.style.Fill({color: "rgba(239,49,198,1.0)"}), angle: 0})
                        })
                        ],
"Kawasan Agrowisata": [ new ol.style.Style({
                            image: new ol.style.RegularShape({points: 5, radius: 5.7, stroke: new ol.style.Stroke({color: "rgba(0,0,0,1.0)", lineDash: null, width: 0}), fill: new ol.style.Fill({color: "rgba(133,233,181,1.0)"}), angle: 0})
                        })
                        ],
"Kawasan Bandar Udara": [ new ol.style.Style({
                            image: new ol.style.RegularShape({points: 5, radius: 5.7, stroke: new ol.style.Stroke({color: "rgba(0,0,0,1.0)", lineDash: null, width: 0}), fill: new ol.style.Fill({color: "rgba(60,227,232,1.0)"}), angle: 0})
                        })
                        ],
"Kawasan Danau Kahaya": [ new ol.style.Style({
                            image: new ol.style.RegularShape({points: 5, radius: 5.7, stroke: new ol.style.Stroke({color: "rgba(0,0,0,1.0)", lineDash: null, width: 0}), fill: new ol.style.Fill({color: "rgba(153,24,218,1.0)"}), angle: 0})
                        })
                        ],
"Kawasan MPC": [ new ol.style.Style({
                            image: new ol.style.RegularShape({points: 5, radius: 5.7, stroke: new ol.style.Stroke({color: "rgba(0,0,0,1.0)", lineDash: null, width: 0}), fill: new ol.style.Fill({color: "rgba(19,106,221,1.0)"}), angle: 0})
                        })
                        ],
"Kawasan Perdagangan": [ new ol.style.Style({
                            image: new ol.style.RegularShape({points: 5, radius: 5.7, stroke: new ol.style.Stroke({color: "rgba(0,0,0,1.0)", lineDash: null, width: 0}), fill: new ol.style.Fill({color: "rgba(209,189,74,1.0)"}), angle: 0})
                        })
                        ],
"Kawasan Wisata Tanjung Bira": [ new ol.style.Style({
                            image: new ol.style.RegularShape({points: 5, radius: 5.7, stroke: new ol.style.Stroke({color: "rgba(0,0,0,1.0)", lineDash: null, width: 0}), fill: new ol.style.Fill({color: "rgba(228,44,87,1.0)"}), angle: 0})
                        })
                        ],
"Tempat Pembuatan Perahu Phinisi": [ new ol.style.Style({
                            image: new ol.style.RegularShape({points: 5, radius: 5.7, stroke: new ol.style.Stroke({color: "rgba(0,0,0,1.0)", lineDash: null, width: 0}), fill: new ol.style.Fill({color: "rgba(210,147,120,1.0)"}), angle: 0})
                        })
                        ],
"Water Front City": [ new ol.style.Style({
                            image: new ol.style.RegularShape({points: 5, radius: 5.7, stroke: new ol.style.Stroke({color: "rgba(0,0,0,1.0)", lineDash: null, width: 0}), fill: new ol.style.Fill({color: "rgba(166,202,111,1.0)"}), angle: 0})
                        })
                        ],
"": [ new ol.style.Style({
                            image: new ol.style.RegularShape({points: 5, radius: 5.7, stroke: new ol.style.Stroke({color: "rgba(0,0,0,1.0)", lineDash: null, width: 0}), fill: new ol.style.Fill({color: "rgba(93,236,83,1.0)"}), angle: 0})
                        })
                        ]};var categoriesSelected_rencanakawasanstrategis = {"Kawasan Adat Amma Toa": [ new ol.style.Style({
                            image: new ol.style.RegularShape({points: 5, radius: 5.7, stroke: new ol.style.Stroke({color: "rgba(255, 204, 0, 1)", lineDash: null, width: 0}), fill: new ol.style.Fill({color: "rgba(255, 204, 0, 1)"}), angle: 0})
                        })
                        ],
"Kawasan Agropolitan": [ new ol.style.Style({
                            image: new ol.style.RegularShape({points: 5, radius: 5.7, stroke: new ol.style.Stroke({color: "rgba(255, 204, 0, 1)", lineDash: null, width: 0}), fill: new ol.style.Fill({color: "rgba(255, 204, 0, 1)"}), angle: 0})
                        })
                        ],
"Kawasan Agrowisata": [ new ol.style.Style({
                            image: new ol.style.RegularShape({points: 5, radius: 5.7, stroke: new ol.style.Stroke({color: "rgba(255, 204, 0, 1)", lineDash: null, width: 0}), fill: new ol.style.Fill({color: "rgba(255, 204, 0, 1)"}), angle: 0})
                        })
                        ],
"Kawasan Bandar Udara": [ new ol.style.Style({
                            image: new ol.style.RegularShape({points: 5, radius: 5.7, stroke: new ol.style.Stroke({color: "rgba(255, 204, 0, 1)", lineDash: null, width: 0}), fill: new ol.style.Fill({color: "rgba(255, 204, 0, 1)"}), angle: 0})
                        })
                        ],
"Kawasan Danau Kahaya": [ new ol.style.Style({
                            image: new ol.style.RegularShape({points: 5, radius: 5.7, stroke: new ol.style.Stroke({color: "rgba(255, 204, 0, 1)", lineDash: null, width: 0}), fill: new ol.style.Fill({color: "rgba(255, 204, 0, 1)"}), angle: 0})
                        })
                        ],
"Kawasan MPC": [ new ol.style.Style({
                            image: new ol.style.RegularShape({points: 5, radius: 5.7, stroke: new ol.style.Stroke({color: "rgba(255, 204, 0, 1)", lineDash: null, width: 0}), fill: new ol.style.Fill({color: "rgba(255, 204, 0, 1)"}), angle: 0})
                        })
                        ],
"Kawasan Perdagangan": [ new ol.style.Style({
                            image: new ol.style.RegularShape({points: 5, radius: 5.7, stroke: new ol.style.Stroke({color: "rgba(255, 204, 0, 1)", lineDash: null, width: 0}), fill: new ol.style.Fill({color: "rgba(255, 204, 0, 1)"}), angle: 0})
                        })
                        ],
"Kawasan Wisata Tanjung Bira": [ new ol.style.Style({
                            image: new ol.style.RegularShape({points: 5, radius: 5.7, stroke: new ol.style.Stroke({color: "rgba(255, 204, 0, 1)", lineDash: null, width: 0}), fill: new ol.style.Fill({color: "rgba(255, 204, 0, 1)"}), angle: 0})
                        })
                        ],
"Tempat Pembuatan Perahu Phinisi": [ new ol.style.Style({
                            image: new ol.style.RegularShape({points: 5, radius: 5.7, stroke: new ol.style.Stroke({color: "rgba(255, 204, 0, 1)", lineDash: null, width: 0}), fill: new ol.style.Fill({color: "rgba(255, 204, 0, 1)"}), angle: 0})
                        })
                        ],
"Water Front City": [ new ol.style.Style({
                            image: new ol.style.RegularShape({points: 5, radius: 5.7, stroke: new ol.style.Stroke({color: "rgba(255, 204, 0, 1)", lineDash: null, width: 0}), fill: new ol.style.Fill({color: "rgba(255, 204, 0, 1)"}), angle: 0})
                        })
                        ],
"": [ new ol.style.Style({
                            image: new ol.style.RegularShape({points: 5, radius: 5.7, stroke: new ol.style.Stroke({color: "rgba(255, 204, 0, 1)", lineDash: null, width: 0}), fill: new ol.style.Fill({color: "rgba(255, 204, 0, 1)"}), angle: 0})
                        })
                        ]};
                    var textStyleCache_rencanakawasanstrategis={}
                    var clusterStyleCache_rencanakawasanstrategis={}
                    var style_rencanakawasanstrategis = function(feature, resolution){
                        
                        var value = feature.get("ket");
                        var style = categories_rencanakawasanstrategis[value];
                        var allStyles = [];
                        
                        allStyles.push.apply(allStyles, style);
                        return allStyles;
                    };
                    var selectionStyle_rencanakawasanstrategis = function(feature, resolution){
                        
                        var value = feature.get("ket");
                        var style = categoriesSelected_rencanakawasanstrategis[value]
                        var allStyles = [];
                        
                        allStyles.push.apply(allStyles, style);
                        return allStyles;
                    };
var categories_rencanajaringanenergi = {"Gardu Induk": [ new ol.style.Style({
                            image: new ol.style.RegularShape({points: 4, radius: 3.8, stroke: new ol.style.Stroke({color: "rgba(0,0,0,1.0)", lineDash: null, width: 0}), fill: new ol.style.Fill({color: "rgba(237,121,134,1.0)"}), angle: 0.7853975})
                        })
                        ],
"PLTD": [ new ol.style.Style({
                            image: new ol.style.RegularShape({points: 4, radius: 3.8, stroke: new ol.style.Stroke({color: "rgba(0,0,0,1.0)", lineDash: null, width: 0}), fill: new ol.style.Fill({color: "rgba(132,206,12,1.0)"}), angle: 0.7853975})
                        })
                        ],
"PLTMH": [ new ol.style.Style({
                            image: new ol.style.RegularShape({points: 4, radius: 3.8, stroke: new ol.style.Stroke({color: "rgba(0,0,0,1.0)", lineDash: null, width: 0}), fill: new ol.style.Fill({color: "rgba(52,227,207,1.0)"}), angle: 0.7853975})
                        })
                        ],
"": [ new ol.style.Style({
                            image: new ol.style.RegularShape({points: 4, radius: 3.8, stroke: new ol.style.Stroke({color: "rgba(0,0,0,1.0)", lineDash: null, width: 0}), fill: new ol.style.Fill({color: "rgba(166,123,235,1.0)"}), angle: 0.7853975})
                        })
                        ]};var categoriesSelected_rencanajaringanenergi = {"Gardu Induk": [ new ol.style.Style({
                            image: new ol.style.RegularShape({points: 4, radius: 3.8, stroke: new ol.style.Stroke({color: "rgba(255, 204, 0, 1)", lineDash: null, width: 0}), fill: new ol.style.Fill({color: "rgba(255, 204, 0, 1)"}), angle: 0.7853975})
                        })
                        ],
"PLTD": [ new ol.style.Style({
                            image: new ol.style.RegularShape({points: 4, radius: 3.8, stroke: new ol.style.Stroke({color: "rgba(255, 204, 0, 1)", lineDash: null, width: 0}), fill: new ol.style.Fill({color: "rgba(255, 204, 0, 1)"}), angle: 0.7853975})
                        })
                        ],
"PLTMH": [ new ol.style.Style({
                            image: new ol.style.RegularShape({points: 4, radius: 3.8, stroke: new ol.style.Stroke({color: "rgba(255, 204, 0, 1)", lineDash: null, width: 0}), fill: new ol.style.Fill({color: "rgba(255, 204, 0, 1)"}), angle: 0.7853975})
                        })
                        ],
"": [ new ol.style.Style({
                            image: new ol.style.RegularShape({points: 4, radius: 3.8, stroke: new ol.style.Stroke({color: "rgba(255, 204, 0, 1)", lineDash: null, width: 0}), fill: new ol.style.Fill({color: "rgba(255, 204, 0, 1)"}), angle: 0.7853975})
                        })
                        ]};
                    var textStyleCache_rencanajaringanenergi={}
                    var clusterStyleCache_rencanajaringanenergi={}
                    var style_rencanajaringanenergi = function(feature, resolution){
                        
                        var value = feature.get("keterangan");
                        var style = categories_rencanajaringanenergi[value];
                        var allStyles = [];
                        
                        allStyles.push.apply(allStyles, style);
                        return allStyles;
                    };
                    var selectionStyle_rencanajaringanenergi = function(feature, resolution){
                        
                        var value = feature.get("keterangan");
                        var style = categoriesSelected_rencanajaringanenergi[value]
                        var allStyles = [];
                        
                        allStyles.push.apply(allStyles, style);
                        return allStyles;
                    };
var categories_rencanajaringantransportasi = {"Pelabuhan Khusus": [ new ol.style.Style({
                            image: new ol.style.RegularShape({points: 5, radius1: 7.6, radius2: 3.8, stroke: new ol.style.Stroke({color: "rgba(0,0,0,1.0)", lineDash: null, width: 0}), fill: new ol.style.Fill({color: "rgba(68,146,4,1.0)"}), angle: 0})
                        })
                        ],
"Pelabuhan Pengumpan": [ new ol.style.Style({
                            image: new ol.style.RegularShape({points: 5, radius1: 7.6, radius2: 3.8, stroke: new ol.style.Stroke({color: "rgba(0,0,0,1.0)", lineDash: null, width: 0}), fill: new ol.style.Fill({color: "rgba(241,244,91,1.0)"}), angle: 0})
                        })
                        ],
"Pelabuhan Penyeberangan": [ new ol.style.Style({
                            image: new ol.style.RegularShape({points: 5, radius1: 7.6, radius2: 3.8, stroke: new ol.style.Stroke({color: "rgba(0,0,0,1.0)", lineDash: null, width: 0}), fill: new ol.style.Fill({color: "rgba(227,26,28,1.0)"}), angle: 0})
                        })
                        ],
"Rencana Bandara": [ new ol.style.Style({
                            image: new ol.style.RegularShape({points: 5, radius1: 7.6, radius2: 3.8, stroke: new ol.style.Stroke({color: "rgba(0,0,0,1.0)", lineDash: null, width: 0}), fill: new ol.style.Fill({color: "rgba(25,32,227,1.0)"}), angle: 0})
                        })
                        ],
"": [ new ol.style.Style({
                            image: new ol.style.Circle({radius: 3.8, stroke: new ol.style.Stroke({color: "rgba(0,0,0,1.0)", lineDash: null, width: 0}), fill: new ol.style.Fill({color: "rgba(230,147,51,1.0)"})})
                        })
                        ]};var categoriesSelected_rencanajaringantransportasi = {"Pelabuhan Khusus": [ new ol.style.Style({
                            image: new ol.style.RegularShape({points: 5, radius1: 7.6, radius2: 3.8, stroke: new ol.style.Stroke({color: "rgba(255, 204, 0, 1)", lineDash: null, width: 0}), fill: new ol.style.Fill({color: "rgba(255, 204, 0, 1)"}), angle: 0})
                        })
                        ],
"Pelabuhan Pengumpan": [ new ol.style.Style({
                            image: new ol.style.RegularShape({points: 5, radius1: 7.6, radius2: 3.8, stroke: new ol.style.Stroke({color: "rgba(255, 204, 0, 1)", lineDash: null, width: 0}), fill: new ol.style.Fill({color: "rgba(255, 204, 0, 1)"}), angle: 0})
                        })
                        ],
"Pelabuhan Penyeberangan": [ new ol.style.Style({
                            image: new ol.style.RegularShape({points: 5, radius1: 7.6, radius2: 3.8, stroke: new ol.style.Stroke({color: "rgba(255, 204, 0, 1)", lineDash: null, width: 0}), fill: new ol.style.Fill({color: "rgba(255, 204, 0, 1)"}), angle: 0})
                        })
                        ],
"Rencana Bandara": [ new ol.style.Style({
                            image: new ol.style.RegularShape({points: 5, radius1: 7.6, radius2: 3.8, stroke: new ol.style.Stroke({color: "rgba(255, 204, 0, 1)", lineDash: null, width: 0}), fill: new ol.style.Fill({color: "rgba(255, 204, 0, 1)"}), angle: 0})
                        })
                        ],
"": [ new ol.style.Style({
                            image: new ol.style.Circle({radius: 3.8, stroke: new ol.style.Stroke({color: "rgba(255, 204, 0, 1)", lineDash: null, width: 0}), fill: new ol.style.Fill({color: "rgba(255, 204, 0, 1)"})})
                        })
                        ]};
                    var textStyleCache_rencanajaringantransportasi={}
                    var clusterStyleCache_rencanajaringantransportasi={}
                    var style_rencanajaringantransportasi = function(feature, resolution){
                        
                        var value = feature.get("Jenis");
                        var style = categories_rencanajaringantransportasi[value];
                        var allStyles = [];
                        
                        allStyles.push.apply(allStyles, style);
                        return allStyles;
                    };
                    var selectionStyle_rencanajaringantransportasi = function(feature, resolution){
                        
                        var value = feature.get("Jenis");
                        var style = categoriesSelected_rencanajaringantransportasi[value]
                        var allStyles = [];
                        
                        allStyles.push.apply(allStyles, style);
                        return allStyles;
                    };
var categories_kepadatanpenduduk = {"> 450": [ new ol.style.Style({
                            stroke: new ol.style.Stroke({color: "rgba(0,0,0,1.0)", lineDash: null, width: 0}),
                        fill: new ol.style.Fill({color: "rgba(179,0,0,1.0)"})
                        })
                        ],
"200 - 250": [ new ol.style.Style({
                            stroke: new ol.style.Stroke({color: "rgba(0,0,0,1.0)", lineDash: null, width: 0}),
                        fill: new ol.style.Fill({color: "rgba(211,49,33,1.0)"})
                        })
                        ],
"250 - 300": [ new ol.style.Style({
                            stroke: new ol.style.Stroke({color: "rgba(0,0,0,1.0)", lineDash: null, width: 0}),
                        fill: new ol.style.Fill({color: "rgba(235,96,63,1.0)"})
                        })
                        ],
"300 - 350": [ new ol.style.Style({
                            stroke: new ol.style.Stroke({color: "rgba(0,0,0,1.0)", lineDash: null, width: 0}),
                        fill: new ol.style.Fill({color: "rgba(252,141,89,1.0)"})
                        })
                        ],
"350 - 400": [ new ol.style.Style({
                            stroke: new ol.style.Stroke({color: "rgba(0,0,0,1.0)", lineDash: null, width: 0}),
                        fill: new ol.style.Fill({color: "rgba(252,183,121,1.0)"})
                        })
                        ],
"400 - 450": [ new ol.style.Style({
                            stroke: new ol.style.Stroke({color: "rgba(0,0,0,1.0)", lineDash: null, width: 0}),
                        fill: new ol.style.Fill({color: "rgba(253,216,164,1.0)"})
                        })
                        ],
"": [ new ol.style.Style({
                            stroke: new ol.style.Stroke({color: "rgba(0,0,0,1.0)", lineDash: null, width: 0}),
                        fill: new ol.style.Fill({color: "rgba(254,240,217,1.0)"})
                        })
                        ]};var categoriesSelected_kepadatanpenduduk = {"> 450": [ new ol.style.Style({
                            stroke: new ol.style.Stroke({color: "rgba(255, 204, 0, 1)", lineDash: null, width: 0}),
                        fill: new ol.style.Fill({color: "rgba(255, 204, 0, 1)"})
                        })
                        ],
"200 - 250": [ new ol.style.Style({
                            stroke: new ol.style.Stroke({color: "rgba(255, 204, 0, 1)", lineDash: null, width: 0}),
                        fill: new ol.style.Fill({color: "rgba(255, 204, 0, 1)"})
                        })
                        ],
"250 - 300": [ new ol.style.Style({
                            stroke: new ol.style.Stroke({color: "rgba(255, 204, 0, 1)", lineDash: null, width: 0}),
                        fill: new ol.style.Fill({color: "rgba(255, 204, 0, 1)"})
                        })
                        ],
"300 - 350": [ new ol.style.Style({
                            stroke: new ol.style.Stroke({color: "rgba(255, 204, 0, 1)", lineDash: null, width: 0}),
                        fill: new ol.style.Fill({color: "rgba(255, 204, 0, 1)"})
                        })
                        ],
"350 - 400": [ new ol.style.Style({
                            stroke: new ol.style.Stroke({color: "rgba(255, 204, 0, 1)", lineDash: null, width: 0}),
                        fill: new ol.style.Fill({color: "rgba(255, 204, 0, 1)"})
                        })
                        ],
"400 - 450": [ new ol.style.Style({
                            stroke: new ol.style.Stroke({color: "rgba(255, 204, 0, 1)", lineDash: null, width: 0}),
                        fill: new ol.style.Fill({color: "rgba(255, 204, 0, 1)"})
                        })
                        ],
"": [ new ol.style.Style({
                            stroke: new ol.style.Stroke({color: "rgba(255, 204, 0, 1)", lineDash: null, width: 0}),
                        fill: new ol.style.Fill({color: "rgba(255, 204, 0, 1)"})
                        })
                        ]};
                    var textStyleCache_kepadatanpenduduk={}
                    var clusterStyleCache_kepadatanpenduduk={}
                    var style_kepadatanpenduduk = function(feature, resolution){
                        
                        var value = feature.get("kepadatan");
                        var style = categories_kepadatanpenduduk[value];
                        var allStyles = [];
                        
                        allStyles.push.apply(allStyles, style);
                        return allStyles;
                    };
                    var selectionStyle_kepadatanpenduduk = function(feature, resolution){
                        
                        var value = feature.get("kepadatan");
                        var style = categoriesSelected_kepadatanpenduduk[value]
                        var allStyles = [];
                        
                        allStyles.push.apply(allStyles, style);
                        return allStyles;
                    };
var categories_tutupanlahan = {"Hutan Sekunder": [ new ol.style.Style({
                            stroke: new ol.style.Stroke({color: "rgba(128,152,72,1.0)", lineDash: null, width: 0}),
                        fill: new ol.style.Fill({color: "rgba(68,146,4,1.0)"})
                        })
                        ],
"Perkebunan": [ new ol.style.Style({
                            stroke: new ol.style.Stroke({color: "rgba(128,152,72,1.0)", lineDash: null, width: 0}),
                        fill: new ol.style.Fill({color: "rgba(144,205,0,1.0)"})
                        })
                        ],
"Permukiman": [ new ol.style.Style({
                            stroke: new ol.style.Stroke({color: "rgba(0,0,0,1.0)", lineDash: null, width: 0}),
                        fill: new ol.style.Fill({color: "rgba(255,179,0,1.0)"})
                        })
                        ],
"Pertanian l. Kering Campur": [ new ol.style.Style({
                            stroke: new ol.style.Stroke({color: "rgba(128,152,72,1.0)", lineDash: null, width: 0}),
                        fill: new ol.style.Fill({color: "rgba(186,221,105,1.0)"})
                        })
                        ],
"Savana": [ new ol.style.Style({
                            stroke: new ol.style.Stroke({color: "rgba(175,179,138,1.0)", lineDash: null, width: 0}),
                        fill: new ol.style.Fill({color: "rgba(241,244,199,1.0)"})
                        })
                        ],
"Sawah": [ new ol.style.Style({
                            stroke: new ol.style.Stroke({color: "rgba(0,0,0,1.0)", lineDash: null, width: 0}),
                        fill: new ol.style.Fill({color: "rgba(122,242,242,1.0)"})
                        })
                        ],
"Semak/Belukar": [ new ol.style.Style({
                            stroke: new ol.style.Stroke({color: "rgba(175,179,138,1.0)", lineDash: null, width: 0}),
                        fill: new ol.style.Fill({color: "rgba(241,244,91,1.0)"})
                        })
                        ],
"Tambak": [ new ol.style.Style({
                            stroke: new ol.style.Stroke({color: "rgba(0,0,0,1.0)", lineDash: null, width: 0}),
                        fill: new ol.style.Fill({color: "rgba(59,69,255,1.0)"})
                        })
                        ],
"Tubuh Air": [ new ol.style.Style({
                            stroke: new ol.style.Stroke({color: "rgba(0,0,0,1.0)", lineDash: null, width: 0}),
                        fill: new ol.style.Fill({color: "rgba(82,154,255,1.0)"})
                        })
                        ],
"": [ new ol.style.Style({
                            stroke: new ol.style.Stroke({color: "rgba(175,179,138,1.0)", lineDash: null, width: 0}),
                        fill: new ol.style.Fill({color: "rgba(241,244,199,1.0)"})
                        })
                        ]};var categoriesSelected_tutupanlahan = {"Hutan Sekunder": [ new ol.style.Style({
                            stroke: new ol.style.Stroke({color: "rgba(255, 204, 0, 1)", lineDash: null, width: 0}),
                        fill: new ol.style.Fill({color: "rgba(255, 204, 0, 1)"})
                        })
                        ],
"Perkebunan": [ new ol.style.Style({
                            stroke: new ol.style.Stroke({color: "rgba(255, 204, 0, 1)", lineDash: null, width: 0}),
                        fill: new ol.style.Fill({color: "rgba(255, 204, 0, 1)"})
                        })
                        ],
"Permukiman": [ new ol.style.Style({
                            stroke: new ol.style.Stroke({color: "rgba(255, 204, 0, 1)", lineDash: null, width: 0}),
                        fill: new ol.style.Fill({color: "rgba(255, 204, 0, 1)"})
                        })
                        ],
"Pertanian l. Kering Campur": [ new ol.style.Style({
                            stroke: new ol.style.Stroke({color: "rgba(255, 204, 0, 1)", lineDash: null, width: 0}),
                        fill: new ol.style.Fill({color: "rgba(255, 204, 0, 1)"})
                        })
                        ],
"Savana": [ new ol.style.Style({
                            stroke: new ol.style.Stroke({color: "rgba(255, 204, 0, 1)", lineDash: null, width: 0}),
                        fill: new ol.style.Fill({color: "rgba(255, 204, 0, 1)"})
                        })
                        ],
"Sawah": [ new ol.style.Style({
                            stroke: new ol.style.Stroke({color: "rgba(255, 204, 0, 1)", lineDash: null, width: 0}),
                        fill: new ol.style.Fill({color: "rgba(255, 204, 0, 1)"})
                        })
                        ],
"Semak/Belukar": [ new ol.style.Style({
                            stroke: new ol.style.Stroke({color: "rgba(255, 204, 0, 1)", lineDash: null, width: 0}),
                        fill: new ol.style.Fill({color: "rgba(255, 204, 0, 1)"})
                        })
                        ],
"Tambak": [ new ol.style.Style({
                            stroke: new ol.style.Stroke({color: "rgba(255, 204, 0, 1)", lineDash: null, width: 0}),
                        fill: new ol.style.Fill({color: "rgba(255, 204, 0, 1)"})
                        })
                        ],
"Tubuh Air": [ new ol.style.Style({
                            stroke: new ol.style.Stroke({color: "rgba(255, 204, 0, 1)", lineDash: null, width: 0}),
                        fill: new ol.style.Fill({color: "rgba(255, 204, 0, 1)"})
                        })
                        ],
"": [ new ol.style.Style({
                            stroke: new ol.style.Stroke({color: "rgba(255, 204, 0, 1)", lineDash: null, width: 0}),
                        fill: new ol.style.Fill({color: "rgba(255, 204, 0, 1)"})
                        })
                        ]};
                    var textStyleCache_tutupanlahan={}
                    var clusterStyleCache_tutupanlahan={}
                    var style_tutupanlahan = function(feature, resolution){
                        
                        var value = feature.get("KELAS_PENU");
                        var style = categories_tutupanlahan[value];
                        var allStyles = [];
                        
                        allStyles.push.apply(allStyles, style);
                        return allStyles;
                    };
                    var selectionStyle_tutupanlahan = function(feature, resolution){
                        
                        var value = feature.get("KELAS_PENU");
                        var style = categoriesSelected_tutupanlahan[value]
                        var allStyles = [];
                        
                        allStyles.push.apply(allStyles, style);
                        return allStyles;
                    };
var categories_topografi = {"0 - 200": [ new ol.style.Style({
                            stroke: new ol.style.Stroke({color: "rgba(0,0,0,1.0)", lineDash: null, width: 0}),
                        fill: new ol.style.Fill({color: "rgba(26,150,65,1.0)"})
                        })
                        ],
"1000 - 1200": [ new ol.style.Style({
                            stroke: new ol.style.Stroke({color: "rgba(0,0,0,1.0)", lineDash: null, width: 0}),
                        fill: new ol.style.Fill({color: "rgba(69,170,77,1.0)"})
                        })
                        ],
"1200 - 1400": [ new ol.style.Style({
                            stroke: new ol.style.Stroke({color: "rgba(0,0,0,1.0)", lineDash: null, width: 0}),
                        fill: new ol.style.Fill({color: "rgba(112,191,90,1.0)"})
                        })
                        ],
"1400 - 1600": [ new ol.style.Style({
                            stroke: new ol.style.Stroke({color: "rgba(0,0,0,1.0)", lineDash: null, width: 0}),
                        fill: new ol.style.Fill({color: "rgba(155,211,102,1.0)"})
                        })
                        ],
"1600 - 1800": [ new ol.style.Style({
                            stroke: new ol.style.Stroke({color: "rgba(0,0,0,1.0)", lineDash: null, width: 0}),
                        fill: new ol.style.Fill({color: "rgba(186,225,125,1.0)"})
                        })
                        ],
"1800 - 2000": [ new ol.style.Style({
                            stroke: new ol.style.Stroke({color: "rgba(0,0,0,1.0)", lineDash: null, width: 0}),
                        fill: new ol.style.Fill({color: "rgba(213,237,152,1.0)"})
                        })
                        ],
"200 - 400": [ new ol.style.Style({
                            stroke: new ol.style.Stroke({color: "rgba(0,0,0,1.0)", lineDash: null, width: 0}),
                        fill: new ol.style.Fill({color: "rgba(241,249,178,1.0)"})
                        })
                        ],
"2000 - 2200": [ new ol.style.Style({
                            stroke: new ol.style.Stroke({color: "rgba(0,0,0,1.0)", lineDash: null, width: 0}),
                        fill: new ol.style.Fill({color: "rgba(254,242,177,1.0)"})
                        })
                        ],
"2200 - 2400": [ new ol.style.Style({
                            stroke: new ol.style.Stroke({color: "rgba(0,0,0,1.0)", lineDash: null, width: 0}),
                        fill: new ol.style.Fill({color: "rgba(254,217,148,1.0)"})
                        })
                        ],
"2400 - 2600": [ new ol.style.Style({
                            stroke: new ol.style.Stroke({color: "rgba(0,0,0,1.0)", lineDash: null, width: 0}),
                        fill: new ol.style.Fill({color: "rgba(253,192,118,1.0)"})
                        })
                        ],
"400 - 600": [ new ol.style.Style({
                            stroke: new ol.style.Stroke({color: "rgba(0,0,0,1.0)", lineDash: null, width: 0}),
                        fill: new ol.style.Fill({color: "rgba(250,162,91,1.0)"})
                        })
                        ],
"600 - 800": [ new ol.style.Style({
                            stroke: new ol.style.Stroke({color: "rgba(0,0,0,1.0)", lineDash: null, width: 0}),
                        fill: new ol.style.Fill({color: "rgba(238,116,70,1.0)"})
                        })
                        ],
"800 - 1000": [ new ol.style.Style({
                            stroke: new ol.style.Stroke({color: "rgba(0,0,0,1.0)", lineDash: null, width: 0}),
                        fill: new ol.style.Fill({color: "rgba(226,70,49,1.0)"})
                        })
                        ],
"": [ new ol.style.Style({
                            stroke: new ol.style.Stroke({color: "rgba(0,0,0,1.0)", lineDash: null, width: 0}),
                        fill: new ol.style.Fill({color: "rgba(215,25,28,1.0)"})
                        })
                        ]};var categoriesSelected_topografi = {"0 - 200": [ new ol.style.Style({
                            stroke: new ol.style.Stroke({color: "rgba(255, 204, 0, 1)", lineDash: null, width: 0}),
                        fill: new ol.style.Fill({color: "rgba(255, 204, 0, 1)"})
                        })
                        ],
"1000 - 1200": [ new ol.style.Style({
                            stroke: new ol.style.Stroke({color: "rgba(255, 204, 0, 1)", lineDash: null, width: 0}),
                        fill: new ol.style.Fill({color: "rgba(255, 204, 0, 1)"})
                        })
                        ],
"1200 - 1400": [ new ol.style.Style({
                            stroke: new ol.style.Stroke({color: "rgba(255, 204, 0, 1)", lineDash: null, width: 0}),
                        fill: new ol.style.Fill({color: "rgba(255, 204, 0, 1)"})
                        })
                        ],
"1400 - 1600": [ new ol.style.Style({
                            stroke: new ol.style.Stroke({color: "rgba(255, 204, 0, 1)", lineDash: null, width: 0}),
                        fill: new ol.style.Fill({color: "rgba(255, 204, 0, 1)"})
                        })
                        ],
"1600 - 1800": [ new ol.style.Style({
                            stroke: new ol.style.Stroke({color: "rgba(255, 204, 0, 1)", lineDash: null, width: 0}),
                        fill: new ol.style.Fill({color: "rgba(255, 204, 0, 1)"})
                        })
                        ],
"1800 - 2000": [ new ol.style.Style({
                            stroke: new ol.style.Stroke({color: "rgba(255, 204, 0, 1)", lineDash: null, width: 0}),
                        fill: new ol.style.Fill({color: "rgba(255, 204, 0, 1)"})
                        })
                        ],
"200 - 400": [ new ol.style.Style({
                            stroke: new ol.style.Stroke({color: "rgba(255, 204, 0, 1)", lineDash: null, width: 0}),
                        fill: new ol.style.Fill({color: "rgba(255, 204, 0, 1)"})
                        })
                        ],
"2000 - 2200": [ new ol.style.Style({
                            stroke: new ol.style.Stroke({color: "rgba(255, 204, 0, 1)", lineDash: null, width: 0}),
                        fill: new ol.style.Fill({color: "rgba(255, 204, 0, 1)"})
                        })
                        ],
"2200 - 2400": [ new ol.style.Style({
                            stroke: new ol.style.Stroke({color: "rgba(255, 204, 0, 1)", lineDash: null, width: 0}),
                        fill: new ol.style.Fill({color: "rgba(255, 204, 0, 1)"})
                        })
                        ],
"2400 - 2600": [ new ol.style.Style({
                            stroke: new ol.style.Stroke({color: "rgba(255, 204, 0, 1)", lineDash: null, width: 0}),
                        fill: new ol.style.Fill({color: "rgba(255, 204, 0, 1)"})
                        })
                        ],
"400 - 600": [ new ol.style.Style({
                            stroke: new ol.style.Stroke({color: "rgba(255, 204, 0, 1)", lineDash: null, width: 0}),
                        fill: new ol.style.Fill({color: "rgba(255, 204, 0, 1)"})
                        })
                        ],
"600 - 800": [ new ol.style.Style({
                            stroke: new ol.style.Stroke({color: "rgba(255, 204, 0, 1)", lineDash: null, width: 0}),
                        fill: new ol.style.Fill({color: "rgba(255, 204, 0, 1)"})
                        })
                        ],
"800 - 1000": [ new ol.style.Style({
                            stroke: new ol.style.Stroke({color: "rgba(255, 204, 0, 1)", lineDash: null, width: 0}),
                        fill: new ol.style.Fill({color: "rgba(255, 204, 0, 1)"})
                        })
                        ],
"": [ new ol.style.Style({
                            stroke: new ol.style.Stroke({color: "rgba(255, 204, 0, 1)", lineDash: null, width: 0}),
                        fill: new ol.style.Fill({color: "rgba(255, 204, 0, 1)"})
                        })
                        ]};
                    var textStyleCache_topografi={}
                    var clusterStyleCache_topografi={}
                    var style_topografi = function(feature, resolution){
                        
                        var value = feature.get("ketinggian");
                        var style = categories_topografi[value];
                        var allStyles = [];
                        
                        allStyles.push.apply(allStyles, style);
                        return allStyles;
                    };
                    var selectionStyle_topografi = function(feature, resolution){
                        
                        var value = feature.get("ketinggian");
                        var style = categoriesSelected_topografi[value]
                        var allStyles = [];
                        
                        allStyles.push.apply(allStyles, style);
                        return allStyles;
                    };
var categories_kemiringanlereng = {"> 40": [ new ol.style.Style({
                            stroke: new ol.style.Stroke({color: "rgba(0,0,0,1.0)", lineDash: null, width: 0}),
                        fill: new ol.style.Fill({color: "rgba(215,25,28,1.0)"})
                        })
                        ],
"15 - 40": [ new ol.style.Style({
                            stroke: new ol.style.Stroke({color: "rgba(0,0,0,1.0)", lineDash: null, width: 0}),
                        fill: new ol.style.Fill({color: "rgba(245,144,83,1.0)"})
                        })
                        ],
"5 - 15": [ new ol.style.Style({
                            stroke: new ol.style.Stroke({color: "rgba(0,0,0,1.0)", lineDash: null, width: 0}),
                        fill: new ol.style.Fill({color: "rgba(254,222,154,1.0)"})
                        })
                        ],
"2 - 5": [ new ol.style.Style({
                            stroke: new ol.style.Stroke({color: "rgba(0,0,0,1.0)", lineDash: null, width: 0}),
                        fill: new ol.style.Fill({color: "rgba(219,239,157,1.0)"})
                        })
                        ],
"0 - 2": [ new ol.style.Style({
                            stroke: new ol.style.Stroke({color: "rgba(0,0,0,1.0)", lineDash: null, width: 0}),
                        fill: new ol.style.Fill({color: "rgba(137,203,97,1.0)"})
                        })
                        ],
"": [ new ol.style.Style({
                            stroke: new ol.style.Stroke({color: "rgba(0,0,0,1.0)", lineDash: null, width: 0}),
                        fill: new ol.style.Fill({color: "rgba(26,150,65,1.0)"})
                        })
                        ]};var categoriesSelected_kemiringanlereng = {"> 40": [ new ol.style.Style({
                            stroke: new ol.style.Stroke({color: "rgba(255, 204, 0, 1)", lineDash: null, width: 0}),
                        fill: new ol.style.Fill({color: "rgba(255, 204, 0, 1)"})
                        })
                        ],
"15 - 40": [ new ol.style.Style({
                            stroke: new ol.style.Stroke({color: "rgba(255, 204, 0, 1)", lineDash: null, width: 0}),
                        fill: new ol.style.Fill({color: "rgba(255, 204, 0, 1)"})
                        })
                        ],
"5 - 15": [ new ol.style.Style({
                            stroke: new ol.style.Stroke({color: "rgba(255, 204, 0, 1)", lineDash: null, width: 0}),
                        fill: new ol.style.Fill({color: "rgba(255, 204, 0, 1)"})
                        })
                        ],
"2 - 5": [ new ol.style.Style({
                            stroke: new ol.style.Stroke({color: "rgba(255, 204, 0, 1)", lineDash: null, width: 0}),
                        fill: new ol.style.Fill({color: "rgba(255, 204, 0, 1)"})
                        })
                        ],
"0 - 2": [ new ol.style.Style({
                            stroke: new ol.style.Stroke({color: "rgba(255, 204, 0, 1)", lineDash: null, width: 0}),
                        fill: new ol.style.Fill({color: "rgba(255, 204, 0, 1)"})
                        })
                        ],
"": [ new ol.style.Style({
                            stroke: new ol.style.Stroke({color: "rgba(255, 204, 0, 1)", lineDash: null, width: 0}),
                        fill: new ol.style.Fill({color: "rgba(255, 204, 0, 1)"})
                        })
                        ]};
                    var textStyleCache_kemiringanlereng={}
                    var clusterStyleCache_kemiringanlereng={}
                    var style_kemiringanlereng = function(feature, resolution){
                        
                        var value = feature.get("keterangan");
                        var style = categories_kemiringanlereng[value];
                        var allStyles = [];
                        
                        allStyles.push.apply(allStyles, style);
                        return allStyles;
                    };
                    var selectionStyle_kemiringanlereng = function(feature, resolution){
                        
                        var value = feature.get("keterangan");
                        var style = categoriesSelected_kemiringanlereng[value]
                        var allStyles = [];
                        
                        allStyles.push.apply(allStyles, style);
                        return allStyles;
                    };
var categories_jenistanah = {"Aluvium muda, berasal dari endapan laut": [ new ol.style.Style({
                            stroke: new ol.style.Stroke({color: "rgba(0,0,0,1.0)", lineDash: null, width: 0}),
                        fill: new ol.style.Fill({color: "rgba(240,128,130,1.0)"})
                        })
                        ],
"Aluvium muda, berasal dari endapan sungai": [ new ol.style.Style({
                            stroke: new ol.style.Stroke({color: "rgba(0,0,0,1.0)", lineDash: null, width: 0}),
                        fill: new ol.style.Fill({color: "rgba(44,233,233,1.0)"})
                        })
                        ],
"Aluvium, endapan kipas aluvial": [ new ol.style.Style({
                            stroke: new ol.style.Stroke({color: "rgba(0,0,0,1.0)", lineDash: null, width: 0}),
                        fill: new ol.style.Fill({color: "rgba(66,91,232,1.0)"})
                        })
                        ],
"Aluvium, endapan kipas aluvial; aluvium muda breasal dari e": [ new ol.style.Style({
                            stroke: new ol.style.Stroke({color: "rgba(0,0,0,1.0)", lineDash: null, width: 0}),
                        fill: new ol.style.Fill({color: "rgba(158,45,206,1.0)"})
                        })
                        ],
"Andesit; basalt": [ new ol.style.Style({
                            stroke: new ol.style.Stroke({color: "rgba(0,0,0,1.0)", lineDash: null, width: 0}),
                        fill: new ol.style.Fill({color: "rgba(104,232,121,1.0)"})
                        })
                        ],
"Andesit; basalt; tephra berbutir halus; tephra berbutir kas": [ new ol.style.Style({
                            stroke: new ol.style.Stroke({color: "rgba(0,0,0,1.0)", lineDash: null, width: 0}),
                        fill: new ol.style.Fill({color: "rgba(205,37,183,1.0)"})
                        })
                        ],
"Basalt; andesit": [ new ol.style.Style({
                            stroke: new ol.style.Stroke({color: "rgba(0,0,0,1.0)", lineDash: null, width: 0}),
                        fill: new ol.style.Fill({color: "rgba(240,23,121,1.0)"})
                        })
                        ],
"Batu gamping; batu karang; napal": [ new ol.style.Style({
                            stroke: new ol.style.Stroke({color: "rgba(0,0,0,1.0)", lineDash: null, width: 0}),
                        fill: new ol.style.Fill({color: "rgba(144,229,107,1.0)"})
                        })
                        ],
"Marmer; batu gamping": [ new ol.style.Style({
                            stroke: new ol.style.Stroke({color: "rgba(0,0,0,1.0)", lineDash: null, width: 0}),
                        fill: new ol.style.Fill({color: "rgba(43,240,155,1.0)"})
                        })
                        ],
"Napal; batu gamping": [ new ol.style.Style({
                            stroke: new ol.style.Stroke({color: "rgba(0,0,0,1.0)", lineDash: null, width: 0}),
                        fill: new ol.style.Fill({color: "rgba(77,149,200,1.0)"})
                        })
                        ],
"Tufit; batu lumpur; batu pasir": [ new ol.style.Style({
                            stroke: new ol.style.Stroke({color: "rgba(0,0,0,1.0)", lineDash: null, width: 0}),
                        fill: new ol.style.Fill({color: "rgba(217,143,89,1.0)"})
                        })
                        ],
"Tufit; batu pasir; batu lumpur": [ new ol.style.Style({
                            stroke: new ol.style.Stroke({color: "rgba(0,0,0,1.0)", lineDash: null, width: 0}),
                        fill: new ol.style.Fill({color: "rgba(169,221,25,1.0)"})
                        })
                        ],
"Tufit; tephra berbutir halus; batu pasir; batu lumpur": [ new ol.style.Style({
                            stroke: new ol.style.Stroke({color: "rgba(0,0,0,1.0)", lineDash: null, width: 0}),
                        fill: new ol.style.Fill({color: "rgba(214,192,79,1.0)"})
                        })
                        ],
"": [ new ol.style.Style({
                            stroke: new ol.style.Stroke({color: "rgba(0,0,0,1.0)", lineDash: null, width: 0}),
                        fill: new ol.style.Fill({color: "rgba(113,73,222,1.0)"})
                        })
                        ]};var categoriesSelected_jenistanah = {"Aluvium muda, berasal dari endapan laut": [ new ol.style.Style({
                            stroke: new ol.style.Stroke({color: "rgba(255, 204, 0, 1)", lineDash: null, width: 0}),
                        fill: new ol.style.Fill({color: "rgba(255, 204, 0, 1)"})
                        })
                        ],
"Aluvium muda, berasal dari endapan sungai": [ new ol.style.Style({
                            stroke: new ol.style.Stroke({color: "rgba(255, 204, 0, 1)", lineDash: null, width: 0}),
                        fill: new ol.style.Fill({color: "rgba(255, 204, 0, 1)"})
                        })
                        ],
"Aluvium, endapan kipas aluvial": [ new ol.style.Style({
                            stroke: new ol.style.Stroke({color: "rgba(255, 204, 0, 1)", lineDash: null, width: 0}),
                        fill: new ol.style.Fill({color: "rgba(255, 204, 0, 1)"})
                        })
                        ],
"Aluvium, endapan kipas aluvial; aluvium muda breasal dari e": [ new ol.style.Style({
                            stroke: new ol.style.Stroke({color: "rgba(255, 204, 0, 1)", lineDash: null, width: 0}),
                        fill: new ol.style.Fill({color: "rgba(255, 204, 0, 1)"})
                        })
                        ],
"Andesit; basalt": [ new ol.style.Style({
                            stroke: new ol.style.Stroke({color: "rgba(255, 204, 0, 1)", lineDash: null, width: 0}),
                        fill: new ol.style.Fill({color: "rgba(255, 204, 0, 1)"})
                        })
                        ],
"Andesit; basalt; tephra berbutir halus; tephra berbutir kas": [ new ol.style.Style({
                            stroke: new ol.style.Stroke({color: "rgba(255, 204, 0, 1)", lineDash: null, width: 0}),
                        fill: new ol.style.Fill({color: "rgba(255, 204, 0, 1)"})
                        })
                        ],
"Basalt; andesit": [ new ol.style.Style({
                            stroke: new ol.style.Stroke({color: "rgba(255, 204, 0, 1)", lineDash: null, width: 0}),
                        fill: new ol.style.Fill({color: "rgba(255, 204, 0, 1)"})
                        })
                        ],
"Batu gamping; batu karang; napal": [ new ol.style.Style({
                            stroke: new ol.style.Stroke({color: "rgba(255, 204, 0, 1)", lineDash: null, width: 0}),
                        fill: new ol.style.Fill({color: "rgba(255, 204, 0, 1)"})
                        })
                        ],
"Marmer; batu gamping": [ new ol.style.Style({
                            stroke: new ol.style.Stroke({color: "rgba(255, 204, 0, 1)", lineDash: null, width: 0}),
                        fill: new ol.style.Fill({color: "rgba(255, 204, 0, 1)"})
                        })
                        ],
"Napal; batu gamping": [ new ol.style.Style({
                            stroke: new ol.style.Stroke({color: "rgba(255, 204, 0, 1)", lineDash: null, width: 0}),
                        fill: new ol.style.Fill({color: "rgba(255, 204, 0, 1)"})
                        })
                        ],
"Tufit; batu lumpur; batu pasir": [ new ol.style.Style({
                            stroke: new ol.style.Stroke({color: "rgba(255, 204, 0, 1)", lineDash: null, width: 0}),
                        fill: new ol.style.Fill({color: "rgba(255, 204, 0, 1)"})
                        })
                        ],
"Tufit; batu pasir; batu lumpur": [ new ol.style.Style({
                            stroke: new ol.style.Stroke({color: "rgba(255, 204, 0, 1)", lineDash: null, width: 0}),
                        fill: new ol.style.Fill({color: "rgba(255, 204, 0, 1)"})
                        })
                        ],
"Tufit; tephra berbutir halus; batu pasir; batu lumpur": [ new ol.style.Style({
                            stroke: new ol.style.Stroke({color: "rgba(255, 204, 0, 1)", lineDash: null, width: 0}),
                        fill: new ol.style.Fill({color: "rgba(255, 204, 0, 1)"})
                        })
                        ],
"": [ new ol.style.Style({
                            stroke: new ol.style.Stroke({color: "rgba(255, 204, 0, 1)", lineDash: null, width: 0}),
                        fill: new ol.style.Fill({color: "rgba(255, 204, 0, 1)"})
                        })
                        ]};
                    var textStyleCache_jenistanah={}
                    var clusterStyleCache_jenistanah={}
                    var style_jenistanah = function(feature, resolution){
                        
                        var value = feature.get("BATUAN_MIN");
                        var style = categories_jenistanah[value];
                        var allStyles = [];
                        
                        allStyles.push.apply(allStyles, style);
                        return allStyles;
                    };
                    var selectionStyle_jenistanah = function(feature, resolution){
                        
                        var value = feature.get("BATUAN_MIN");
                        var style = categoriesSelected_jenistanah[value]
                        var allStyles = [];
                        
                        allStyles.push.apply(allStyles, style);
                        return allStyles;
                    };
var categories_formasigeologi = {"NULL": [ new ol.style.Style({
                            stroke: new ol.style.Stroke({color: "rgba(0,0,0,1.0)", lineDash: null, width: 0}),
                        fill: new ol.style.Fill({color: "rgba(28,195,220,1.0)"})
                        })
                        ],
"Anggota Salayar Formasi Walane": [ new ol.style.Style({
                            stroke: new ol.style.Stroke({color: "rgba(0,0,0,1.0)", lineDash: null, width: 0}),
                        fill: new ol.style.Fill({color: "rgba(145,93,208,1.0)"})
                        })
                        ],
"Basal dan retal basal": [ new ol.style.Style({
                            stroke: new ol.style.Stroke({color: "rgba(0,0,0,1.0)", lineDash: null, width: 0}),
                        fill: new ol.style.Fill({color: "rgba(197,212,79,1.0)"})
                        })
                        ],
"Batuan Gunungapi": [ new ol.style.Style({
                            stroke: new ol.style.Stroke({color: "rgba(0,0,0,1.0)", lineDash: null, width: 0}),
                        fill: new ol.style.Fill({color: "rgba(64,223,20,1.0)"})
                        })
                        ],
"Batuan Gunungapi Lompobatang": [ new ol.style.Style({
                            stroke: new ol.style.Stroke({color: "rgba(0,0,0,1.0)", lineDash: null, width: 0}),
                        fill: new ol.style.Fill({color: "rgba(207,95,194,1.0)"})
                        })
                        ],
"Batuan Malihan Kontak": [ new ol.style.Style({
                            stroke: new ol.style.Stroke({color: "rgba(0,0,0,1.0)", lineDash: null, width: 0}),
                        fill: new ol.style.Fill({color: "rgba(240,66,104,1.0)"})
                        })
                        ],
"Breksi, Lahar dan tupa": [ new ol.style.Style({
                            stroke: new ol.style.Stroke({color: "rgba(0,0,0,1.0)", lineDash: null, width: 0}),
                        fill: new ol.style.Fill({color: "rgba(70,98,209,1.0)"})
                        })
                        ],
"Endapan Aluvium dan Pantai": [ new ol.style.Style({
                            stroke: new ol.style.Stroke({color: "rgba(0,0,0,1.0)", lineDash: null, width: 0}),
                        fill: new ol.style.Fill({color: "rgba(222,132,59,1.0)"})
                        })
                        ],
"Formasi Walanae": [ new ol.style.Style({
                            stroke: new ol.style.Stroke({color: "rgba(0,0,0,1.0)", lineDash: null, width: 0}),
                        fill: new ol.style.Fill({color: "rgba(68,220,139,1.0)"})
                        })
                        ]};var categoriesSelected_formasigeologi = {"NULL": [ new ol.style.Style({
                            stroke: new ol.style.Stroke({color: "rgba(255, 204, 0, 1)", lineDash: null, width: 0}),
                        fill: new ol.style.Fill({color: "rgba(255, 204, 0, 1)"})
                        })
                        ],
"Anggota Salayar Formasi Walane": [ new ol.style.Style({
                            stroke: new ol.style.Stroke({color: "rgba(255, 204, 0, 1)", lineDash: null, width: 0}),
                        fill: new ol.style.Fill({color: "rgba(255, 204, 0, 1)"})
                        })
                        ],
"Basal dan retal basal": [ new ol.style.Style({
                            stroke: new ol.style.Stroke({color: "rgba(255, 204, 0, 1)", lineDash: null, width: 0}),
                        fill: new ol.style.Fill({color: "rgba(255, 204, 0, 1)"})
                        })
                        ],
"Batuan Gunungapi": [ new ol.style.Style({
                            stroke: new ol.style.Stroke({color: "rgba(255, 204, 0, 1)", lineDash: null, width: 0}),
                        fill: new ol.style.Fill({color: "rgba(255, 204, 0, 1)"})
                        })
                        ],
"Batuan Gunungapi Lompobatang": [ new ol.style.Style({
                            stroke: new ol.style.Stroke({color: "rgba(255, 204, 0, 1)", lineDash: null, width: 0}),
                        fill: new ol.style.Fill({color: "rgba(255, 204, 0, 1)"})
                        })
                        ],
"Batuan Malihan Kontak": [ new ol.style.Style({
                            stroke: new ol.style.Stroke({color: "rgba(255, 204, 0, 1)", lineDash: null, width: 0}),
                        fill: new ol.style.Fill({color: "rgba(255, 204, 0, 1)"})
                        })
                        ],
"Breksi, Lahar dan tupa": [ new ol.style.Style({
                            stroke: new ol.style.Stroke({color: "rgba(255, 204, 0, 1)", lineDash: null, width: 0}),
                        fill: new ol.style.Fill({color: "rgba(255, 204, 0, 1)"})
                        })
                        ],
"Endapan Aluvium dan Pantai": [ new ol.style.Style({
                            stroke: new ol.style.Stroke({color: "rgba(255, 204, 0, 1)", lineDash: null, width: 0}),
                        fill: new ol.style.Fill({color: "rgba(255, 204, 0, 1)"})
                        })
                        ],
"Formasi Walanae": [ new ol.style.Style({
                            stroke: new ol.style.Stroke({color: "rgba(255, 204, 0, 1)", lineDash: null, width: 0}),
                        fill: new ol.style.Fill({color: "rgba(255, 204, 0, 1)"})
                        })
                        ]};
                    var textStyleCache_formasigeologi={}
                    var clusterStyleCache_formasigeologi={}
                    var style_formasigeologi = function(feature, resolution){
                        
                        var value = feature.get("FORMASI");
                        var style = categories_formasigeologi[value];
                        var allStyles = [];
                        
                        allStyles.push.apply(allStyles, style);
                        return allStyles;
                    };
                    var selectionStyle_formasigeologi = function(feature, resolution){
                        
                        var value = feature.get("FORMASI");
                        var style = categoriesSelected_formasigeologi[value]
                        var allStyles = [];
                        
                        allStyles.push.apply(allStyles, style);
                        return allStyles;
                    };
var categories_curahhujan = {"1500-2000": [ new ol.style.Style({
                            stroke: new ol.style.Stroke({color: "rgba(0,0,0,1.0)", lineDash: null, width: 0}),
                        fill: new ol.style.Fill({color: "rgba(247,251,255,1.0)"})
                        })
                        ],
"2000-2500": [ new ol.style.Style({
                            stroke: new ol.style.Stroke({color: "rgba(0,0,0,1.0)", lineDash: null, width: 0}),
                        fill: new ol.style.Fill({color: "rgba(209,226,242,1.0)"})
                        })
                        ],
"2500-3000": [ new ol.style.Style({
                            stroke: new ol.style.Stroke({color: "rgba(0,0,0,1.0)", lineDash: null, width: 0}),
                        fill: new ol.style.Fill({color: "rgba(154,199,224,1.0)"})
                        })
                        ],
"3000-3500": [ new ol.style.Style({
                            stroke: new ol.style.Stroke({color: "rgba(0,0,0,1.0)", lineDash: null, width: 0}),
                        fill: new ol.style.Fill({color: "rgba(81,156,204,1.0)"})
                        })
                        ],
"3500-4000": [ new ol.style.Style({
                            stroke: new ol.style.Stroke({color: "rgba(0,0,0,1.0)", lineDash: null, width: 0}),
                        fill: new ol.style.Fill({color: "rgba(28,107,176,1.0)"})
                        })
                        ],
"": [ new ol.style.Style({
                            stroke: new ol.style.Stroke({color: "rgba(0,0,0,1.0)", lineDash: null, width: 0}),
                        fill: new ol.style.Fill({color: "rgba(8,48,107,1.0)"})
                        })
                        ]};var categoriesSelected_curahhujan = {"1500-2000": [ new ol.style.Style({
                            stroke: new ol.style.Stroke({color: "rgba(255, 204, 0, 1)", lineDash: null, width: 0}),
                        fill: new ol.style.Fill({color: "rgba(255, 204, 0, 1)"})
                        })
                        ],
"2000-2500": [ new ol.style.Style({
                            stroke: new ol.style.Stroke({color: "rgba(255, 204, 0, 1)", lineDash: null, width: 0}),
                        fill: new ol.style.Fill({color: "rgba(255, 204, 0, 1)"})
                        })
                        ],
"2500-3000": [ new ol.style.Style({
                            stroke: new ol.style.Stroke({color: "rgba(255, 204, 0, 1)", lineDash: null, width: 0}),
                        fill: new ol.style.Fill({color: "rgba(255, 204, 0, 1)"})
                        })
                        ],
"3000-3500": [ new ol.style.Style({
                            stroke: new ol.style.Stroke({color: "rgba(255, 204, 0, 1)", lineDash: null, width: 0}),
                        fill: new ol.style.Fill({color: "rgba(255, 204, 0, 1)"})
                        })
                        ],
"3500-4000": [ new ol.style.Style({
                            stroke: new ol.style.Stroke({color: "rgba(255, 204, 0, 1)", lineDash: null, width: 0}),
                        fill: new ol.style.Fill({color: "rgba(255, 204, 0, 1)"})
                        })
                        ],
"": [ new ol.style.Style({
                            stroke: new ol.style.Stroke({color: "rgba(255, 204, 0, 1)", lineDash: null, width: 0}),
                        fill: new ol.style.Fill({color: "rgba(255, 204, 0, 1)"})
                        })
                        ]};
                    var textStyleCache_curahhujan={}
                    var clusterStyleCache_curahhujan={}
                    var style_curahhujan = function(feature, resolution){
                        
                        var value = feature.get("CURAH_HUJA");
                        var style = categories_curahhujan[value];
                        var allStyles = [];
                        
                        allStyles.push.apply(allStyles, style);
                        return allStyles;
                    };
                    var selectionStyle_curahhujan = function(feature, resolution){
                        
                        var value = feature.get("CURAH_HUJA");
                        var style = categoriesSelected_curahhujan[value]
                        var allStyles = [];
                        
                        allStyles.push.apply(allStyles, style);
                        return allStyles;
                    };
var categories_daerahaliransungai = {"APARANG": [ new ol.style.Style({
                            stroke: new ol.style.Stroke({color: "rgba(0,0,0,1.0)", lineDash: null, width: 0}),
                        fill: new ol.style.Fill({color: "rgba(23,186,200,1.0)"})
                        })
                        ],
"BALALOHE": [ new ol.style.Style({
                            stroke: new ol.style.Stroke({color: "rgba(0,0,0,1.0)", lineDash: null, width: 0}),
                        fill: new ol.style.Fill({color: "rgba(142,220,97,1.0)"})
                        })
                        ],
"BAPALAIKANG": [ new ol.style.Style({
                            stroke: new ol.style.Stroke({color: "rgba(0,0,0,1.0)", lineDash: null, width: 0}),
                        fill: new ol.style.Fill({color: "rgba(26,210,167,1.0)"})
                        })
                        ],
"BARA": [ new ol.style.Style({
                            stroke: new ol.style.Stroke({color: "rgba(0,0,0,1.0)", lineDash: null, width: 0}),
                        fill: new ol.style.Fill({color: "rgba(213,133,53,1.0)"})
                        })
                        ],
"BIALO": [ new ol.style.Style({
                            stroke: new ol.style.Stroke({color: "rgba(0,0,0,1.0)", lineDash: null, width: 0}),
                        fill: new ol.style.Fill({color: "rgba(88,105,238,1.0)"})
                        })
                        ],
"BIJAWANG": [ new ol.style.Style({
                            stroke: new ol.style.Stroke({color: "rgba(0,0,0,1.0)", lineDash: null, width: 0}),
                        fill: new ol.style.Fill({color: "rgba(47,232,69,1.0)"})
                        })
                        ],
"BIOLA": [ new ol.style.Style({
                            stroke: new ol.style.Stroke({color: "rgba(0,0,0,1.0)", lineDash: null, width: 0}),
                        fill: new ol.style.Fill({color: "rgba(204,54,77,1.0)"})
                        })
                        ],
"BIPALO HE": [ new ol.style.Style({
                            stroke: new ol.style.Stroke({color: "rgba(0,0,0,1.0)", lineDash: null, width: 0}),
                        fill: new ol.style.Fill({color: "rgba(63,206,23,1.0)"})
                        })
                        ],
"BORONG PELENGGE": [ new ol.style.Style({
                            stroke: new ol.style.Stroke({color: "rgba(0,0,0,1.0)", lineDash: null, width: 0}),
                        fill: new ol.style.Fill({color: "rgba(240,137,220,1.0)"})
                        })
                        ],
"BUNYUTANA": [ new ol.style.Style({
                            stroke: new ol.style.Stroke({color: "rgba(0,0,0,1.0)", lineDash: null, width: 0}),
                        fill: new ol.style.Fill({color: "rgba(200,120,118,1.0)"})
                        })
                        ],
"DARUBIAH": [ new ol.style.Style({
                            stroke: new ol.style.Stroke({color: "rgba(0,0,0,1.0)", lineDash: null, width: 0}),
                        fill: new ol.style.Fill({color: "rgba(195,221,44,1.0)"})
                        })
                        ],
"DOAJANG": [ new ol.style.Style({
                            stroke: new ol.style.Stroke({color: "rgba(0,0,0,1.0)", lineDash: null, width: 0}),
                        fill: new ol.style.Fill({color: "rgba(200,83,218,1.0)"})
                        })
                        ],
"GARACING": [ new ol.style.Style({
                            stroke: new ol.style.Stroke({color: "rgba(0,0,0,1.0)", lineDash: null, width: 0}),
                        fill: new ol.style.Fill({color: "rgba(224,103,180,1.0)"})
                        })
                        ],
"GUSUNGE": [ new ol.style.Style({
                            stroke: new ol.style.Stroke({color: "rgba(0,0,0,1.0)", lineDash: null, width: 0}),
                        fill: new ol.style.Fill({color: "rgba(202,199,13,1.0)"})
                        })
                        ],
"KAJANG KEKE": [ new ol.style.Style({
                            stroke: new ol.style.Stroke({color: "rgba(0,0,0,1.0)", lineDash: null, width: 0}),
                        fill: new ol.style.Fill({color: "rgba(80,141,221,1.0)"})
                        })
                        ],
"KALUKUBODO": [ new ol.style.Style({
                            stroke: new ol.style.Stroke({color: "rgba(0,0,0,1.0)", lineDash: null, width: 0}),
                        fill: new ol.style.Fill({color: "rgba(208,74,137,1.0)"})
                        })
                        ],
"KALUMPANG": [ new ol.style.Style({
                            stroke: new ol.style.Stroke({color: "rgba(0,0,0,1.0)", lineDash: null, width: 0}),
                        fill: new ol.style.Fill({color: "rgba(21,159,204,1.0)"})
                        })
                        ],
"KAMPUANG": [ new ol.style.Style({
                            stroke: new ol.style.Stroke({color: "rgba(0,0,0,1.0)", lineDash: null, width: 0}),
                        fill: new ol.style.Fill({color: "rgba(216,169,80,1.0)"})
                        })
                        ],
"KASSI": [ new ol.style.Style({
                            stroke: new ol.style.Stroke({color: "rgba(0,0,0,1.0)", lineDash: null, width: 0}),
                        fill: new ol.style.Fill({color: "rgba(220,98,73,1.0)"})
                        })
                        ],
"KIRASA": [ new ol.style.Style({
                            stroke: new ol.style.Stroke({color: "rgba(0,0,0,1.0)", lineDash: null, width: 0}),
                        fill: new ol.style.Fill({color: "rgba(97,235,224,1.0)"})
                        })
                        ],
"LAIKANG": [ new ol.style.Style({
                            stroke: new ol.style.Stroke({color: "rgba(0,0,0,1.0)", lineDash: null, width: 0}),
                        fill: new ol.style.Fill({color: "rgba(137,40,222,1.0)"})
                        })
                        ],
"LASANG LASANG": [ new ol.style.Style({
                            stroke: new ol.style.Stroke({color: "rgba(0,0,0,1.0)", lineDash: null, width: 0}),
                        fill: new ol.style.Fill({color: "rgba(149,225,62,1.0)"})
                        })
                        ],
"LIUKANG LOE": [ new ol.style.Style({
                            stroke: new ol.style.Stroke({color: "rgba(0,0,0,1.0)", lineDash: null, width: 0}),
                        fill: new ol.style.Fill({color: "rgba(67,59,208,1.0)"})
                        })
                        ],
"LO HE": [ new ol.style.Style({
                            stroke: new ol.style.Stroke({color: "rgba(0,0,0,1.0)", lineDash: null, width: 0}),
                        fill: new ol.style.Fill({color: "rgba(211,72,116,1.0)"})
                        })
                        ],
"LURAYA": [ new ol.style.Style({
                            stroke: new ol.style.Stroke({color: "rgba(0,0,0,1.0)", lineDash: null, width: 0}),
                        fill: new ol.style.Fill({color: "rgba(218,72,213,1.0)"})
                        })
                        ],
"MOTTI": [ new ol.style.Style({
                            stroke: new ol.style.Stroke({color: "rgba(0,0,0,1.0)", lineDash: null, width: 0}),
                        fill: new ol.style.Fill({color: "rgba(112,86,205,1.0)"})
                        })
                        ],
"PUBAB ANJAYA": [ new ol.style.Style({
                            stroke: new ol.style.Stroke({color: "rgba(0,0,0,1.0)", lineDash: null, width: 0}),
                        fill: new ol.style.Fill({color: "rgba(164,223,27,1.0)"})
                        })
                        ],
"SAPO": [ new ol.style.Style({
                            stroke: new ol.style.Stroke({color: "rgba(0,0,0,1.0)", lineDash: null, width: 0}),
                        fill: new ol.style.Fill({color: "rgba(30,201,76,1.0)"})
                        })
                        ],
"SELANG": [ new ol.style.Style({
                            stroke: new ol.style.Stroke({color: "rgba(0,0,0,1.0)", lineDash: null, width: 0}),
                        fill: new ol.style.Fill({color: "rgba(56,237,46,1.0)"})
                        })
                        ],
"TANETANG": [ new ol.style.Style({
                            stroke: new ol.style.Stroke({color: "rgba(0,0,0,1.0)", lineDash: null, width: 0}),
                        fill: new ol.style.Fill({color: "rgba(229,210,126,1.0)"})
                        })
                        ],
"TANGAMBANG": [ new ol.style.Style({
                            stroke: new ol.style.Stroke({color: "rgba(0,0,0,1.0)", lineDash: null, width: 0}),
                        fill: new ol.style.Fill({color: "rgba(47,206,116,1.0)"})
                        })
                        ],
"TARAMPANG": [ new ol.style.Style({
                            stroke: new ol.style.Stroke({color: "rgba(0,0,0,1.0)", lineDash: null, width: 0}),
                        fill: new ol.style.Fill({color: "rgba(110,30,239,1.0)"})
                        })
                        ],
"TEKONA": [ new ol.style.Style({
                            stroke: new ol.style.Stroke({color: "rgba(0,0,0,1.0)", lineDash: null, width: 0}),
                        fill: new ol.style.Fill({color: "rgba(69,208,153,1.0)"})
                        })
                        ],
"TOMBO LOANG": [ new ol.style.Style({
                            stroke: new ol.style.Stroke({color: "rgba(0,0,0,1.0)", lineDash: null, width: 0}),
                        fill: new ol.style.Fill({color: "rgba(19,71,213,1.0)"})
                        })
                        ],
"TURUNGARA": [ new ol.style.Style({
                            stroke: new ol.style.Stroke({color: "rgba(0,0,0,1.0)", lineDash: null, width: 0}),
                        fill: new ol.style.Fill({color: "rgba(170,44,224,1.0)"})
                        })
                        ],
"UJUNG LOE": [ new ol.style.Style({
                            stroke: new ol.style.Stroke({color: "rgba(0,0,0,1.0)", lineDash: null, width: 0}),
                        fill: new ol.style.Fill({color: "rgba(49,149,215,1.0)"})
                        })
                        ],
"": [ new ol.style.Style({
                            stroke: new ol.style.Stroke({color: "rgba(0,0,0,1.0)", lineDash: null, width: 0}),
                        fill: new ol.style.Fill({color: "rgba(219,106,49,1.0)"})
                        })
                        ]};var categoriesSelected_daerahaliransungai = {"APARANG": [ new ol.style.Style({
                            stroke: new ol.style.Stroke({color: "rgba(255, 204, 0, 1)", lineDash: null, width: 0}),
                        fill: new ol.style.Fill({color: "rgba(255, 204, 0, 1)"})
                        })
                        ],
"BALALOHE": [ new ol.style.Style({
                            stroke: new ol.style.Stroke({color: "rgba(255, 204, 0, 1)", lineDash: null, width: 0}),
                        fill: new ol.style.Fill({color: "rgba(255, 204, 0, 1)"})
                        })
                        ],
"BAPALAIKANG": [ new ol.style.Style({
                            stroke: new ol.style.Stroke({color: "rgba(255, 204, 0, 1)", lineDash: null, width: 0}),
                        fill: new ol.style.Fill({color: "rgba(255, 204, 0, 1)"})
                        })
                        ],
"BARA": [ new ol.style.Style({
                            stroke: new ol.style.Stroke({color: "rgba(255, 204, 0, 1)", lineDash: null, width: 0}),
                        fill: new ol.style.Fill({color: "rgba(255, 204, 0, 1)"})
                        })
                        ],
"BIALO": [ new ol.style.Style({
                            stroke: new ol.style.Stroke({color: "rgba(255, 204, 0, 1)", lineDash: null, width: 0}),
                        fill: new ol.style.Fill({color: "rgba(255, 204, 0, 1)"})
                        })
                        ],
"BIJAWANG": [ new ol.style.Style({
                            stroke: new ol.style.Stroke({color: "rgba(255, 204, 0, 1)", lineDash: null, width: 0}),
                        fill: new ol.style.Fill({color: "rgba(255, 204, 0, 1)"})
                        })
                        ],
"BIOLA": [ new ol.style.Style({
                            stroke: new ol.style.Stroke({color: "rgba(255, 204, 0, 1)", lineDash: null, width: 0}),
                        fill: new ol.style.Fill({color: "rgba(255, 204, 0, 1)"})
                        })
                        ],
"BIPALO HE": [ new ol.style.Style({
                            stroke: new ol.style.Stroke({color: "rgba(255, 204, 0, 1)", lineDash: null, width: 0}),
                        fill: new ol.style.Fill({color: "rgba(255, 204, 0, 1)"})
                        })
                        ],
"BORONG PELENGGE": [ new ol.style.Style({
                            stroke: new ol.style.Stroke({color: "rgba(255, 204, 0, 1)", lineDash: null, width: 0}),
                        fill: new ol.style.Fill({color: "rgba(255, 204, 0, 1)"})
                        })
                        ],
"BUNYUTANA": [ new ol.style.Style({
                            stroke: new ol.style.Stroke({color: "rgba(255, 204, 0, 1)", lineDash: null, width: 0}),
                        fill: new ol.style.Fill({color: "rgba(255, 204, 0, 1)"})
                        })
                        ],
"DARUBIAH": [ new ol.style.Style({
                            stroke: new ol.style.Stroke({color: "rgba(255, 204, 0, 1)", lineDash: null, width: 0}),
                        fill: new ol.style.Fill({color: "rgba(255, 204, 0, 1)"})
                        })
                        ],
"DOAJANG": [ new ol.style.Style({
                            stroke: new ol.style.Stroke({color: "rgba(255, 204, 0, 1)", lineDash: null, width: 0}),
                        fill: new ol.style.Fill({color: "rgba(255, 204, 0, 1)"})
                        })
                        ],
"GARACING": [ new ol.style.Style({
                            stroke: new ol.style.Stroke({color: "rgba(255, 204, 0, 1)", lineDash: null, width: 0}),
                        fill: new ol.style.Fill({color: "rgba(255, 204, 0, 1)"})
                        })
                        ],
"GUSUNGE": [ new ol.style.Style({
                            stroke: new ol.style.Stroke({color: "rgba(255, 204, 0, 1)", lineDash: null, width: 0}),
                        fill: new ol.style.Fill({color: "rgba(255, 204, 0, 1)"})
                        })
                        ],
"KAJANG KEKE": [ new ol.style.Style({
                            stroke: new ol.style.Stroke({color: "rgba(255, 204, 0, 1)", lineDash: null, width: 0}),
                        fill: new ol.style.Fill({color: "rgba(255, 204, 0, 1)"})
                        })
                        ],
"KALUKUBODO": [ new ol.style.Style({
                            stroke: new ol.style.Stroke({color: "rgba(255, 204, 0, 1)", lineDash: null, width: 0}),
                        fill: new ol.style.Fill({color: "rgba(255, 204, 0, 1)"})
                        })
                        ],
"KALUMPANG": [ new ol.style.Style({
                            stroke: new ol.style.Stroke({color: "rgba(255, 204, 0, 1)", lineDash: null, width: 0}),
                        fill: new ol.style.Fill({color: "rgba(255, 204, 0, 1)"})
                        })
                        ],
"KAMPUANG": [ new ol.style.Style({
                            stroke: new ol.style.Stroke({color: "rgba(255, 204, 0, 1)", lineDash: null, width: 0}),
                        fill: new ol.style.Fill({color: "rgba(255, 204, 0, 1)"})
                        })
                        ],
"KASSI": [ new ol.style.Style({
                            stroke: new ol.style.Stroke({color: "rgba(255, 204, 0, 1)", lineDash: null, width: 0}),
                        fill: new ol.style.Fill({color: "rgba(255, 204, 0, 1)"})
                        })
                        ],
"KIRASA": [ new ol.style.Style({
                            stroke: new ol.style.Stroke({color: "rgba(255, 204, 0, 1)", lineDash: null, width: 0}),
                        fill: new ol.style.Fill({color: "rgba(255, 204, 0, 1)"})
                        })
                        ],
"LAIKANG": [ new ol.style.Style({
                            stroke: new ol.style.Stroke({color: "rgba(255, 204, 0, 1)", lineDash: null, width: 0}),
                        fill: new ol.style.Fill({color: "rgba(255, 204, 0, 1)"})
                        })
                        ],
"LASANG LASANG": [ new ol.style.Style({
                            stroke: new ol.style.Stroke({color: "rgba(255, 204, 0, 1)", lineDash: null, width: 0}),
                        fill: new ol.style.Fill({color: "rgba(255, 204, 0, 1)"})
                        })
                        ],
"LIUKANG LOE": [ new ol.style.Style({
                            stroke: new ol.style.Stroke({color: "rgba(255, 204, 0, 1)", lineDash: null, width: 0}),
                        fill: new ol.style.Fill({color: "rgba(255, 204, 0, 1)"})
                        })
                        ],
"LO HE": [ new ol.style.Style({
                            stroke: new ol.style.Stroke({color: "rgba(255, 204, 0, 1)", lineDash: null, width: 0}),
                        fill: new ol.style.Fill({color: "rgba(255, 204, 0, 1)"})
                        })
                        ],
"LURAYA": [ new ol.style.Style({
                            stroke: new ol.style.Stroke({color: "rgba(255, 204, 0, 1)", lineDash: null, width: 0}),
                        fill: new ol.style.Fill({color: "rgba(255, 204, 0, 1)"})
                        })
                        ],
"MOTTI": [ new ol.style.Style({
                            stroke: new ol.style.Stroke({color: "rgba(255, 204, 0, 1)", lineDash: null, width: 0}),
                        fill: new ol.style.Fill({color: "rgba(255, 204, 0, 1)"})
                        })
                        ],
"PUBAB ANJAYA": [ new ol.style.Style({
                            stroke: new ol.style.Stroke({color: "rgba(255, 204, 0, 1)", lineDash: null, width: 0}),
                        fill: new ol.style.Fill({color: "rgba(255, 204, 0, 1)"})
                        })
                        ],
"SAPO": [ new ol.style.Style({
                            stroke: new ol.style.Stroke({color: "rgba(255, 204, 0, 1)", lineDash: null, width: 0}),
                        fill: new ol.style.Fill({color: "rgba(255, 204, 0, 1)"})
                        })
                        ],
"SELANG": [ new ol.style.Style({
                            stroke: new ol.style.Stroke({color: "rgba(255, 204, 0, 1)", lineDash: null, width: 0}),
                        fill: new ol.style.Fill({color: "rgba(255, 204, 0, 1)"})
                        })
                        ],
"TANETANG": [ new ol.style.Style({
                            stroke: new ol.style.Stroke({color: "rgba(255, 204, 0, 1)", lineDash: null, width: 0}),
                        fill: new ol.style.Fill({color: "rgba(255, 204, 0, 1)"})
                        })
                        ],
"TANGAMBANG": [ new ol.style.Style({
                            stroke: new ol.style.Stroke({color: "rgba(255, 204, 0, 1)", lineDash: null, width: 0}),
                        fill: new ol.style.Fill({color: "rgba(255, 204, 0, 1)"})
                        })
                        ],
"TARAMPANG": [ new ol.style.Style({
                            stroke: new ol.style.Stroke({color: "rgba(255, 204, 0, 1)", lineDash: null, width: 0}),
                        fill: new ol.style.Fill({color: "rgba(255, 204, 0, 1)"})
                        })
                        ],
"TEKONA": [ new ol.style.Style({
                            stroke: new ol.style.Stroke({color: "rgba(255, 204, 0, 1)", lineDash: null, width: 0}),
                        fill: new ol.style.Fill({color: "rgba(255, 204, 0, 1)"})
                        })
                        ],
"TOMBO LOANG": [ new ol.style.Style({
                            stroke: new ol.style.Stroke({color: "rgba(255, 204, 0, 1)", lineDash: null, width: 0}),
                        fill: new ol.style.Fill({color: "rgba(255, 204, 0, 1)"})
                        })
                        ],
"TURUNGARA": [ new ol.style.Style({
                            stroke: new ol.style.Stroke({color: "rgba(255, 204, 0, 1)", lineDash: null, width: 0}),
                        fill: new ol.style.Fill({color: "rgba(255, 204, 0, 1)"})
                        })
                        ],
"UJUNG LOE": [ new ol.style.Style({
                            stroke: new ol.style.Stroke({color: "rgba(255, 204, 0, 1)", lineDash: null, width: 0}),
                        fill: new ol.style.Fill({color: "rgba(255, 204, 0, 1)"})
                        })
                        ],
"": [ new ol.style.Style({
                            stroke: new ol.style.Stroke({color: "rgba(255, 204, 0, 1)", lineDash: null, width: 0}),
                        fill: new ol.style.Fill({color: "rgba(255, 204, 0, 1)"})
                        })
                        ]};
                    var textStyleCache_daerahaliransungai={}
                    var clusterStyleCache_daerahaliransungai={}
                    var style_daerahaliransungai = function(feature, resolution){
                        
                        var value = feature.get("NAMA_DAS");
                        var style = categories_daerahaliransungai[value];
                        var allStyles = [];
                        
                        allStyles.push.apply(allStyles, style);
                        return allStyles;
                    };
                    var selectionStyle_daerahaliransungai = function(feature, resolution){
                        
                        var value = feature.get("NAMA_DAS");
                        var style = categoriesSelected_daerahaliransungai[value]
                        var allStyles = [];
                        
                        allStyles.push.apply(allStyles, style);
                        return allStyles;
                    };

                    var textStyleCache_administrasi={}
                    var clusterStyleCache_administrasi={}
                    var style_administrasi = function(feature, resolution){
                        
                        var value = "";
                        var style = [ new ol.style.Style({
                            stroke: new ol.style.Stroke({color: "rgba(175,179,138,1.0)", lineDash: null, width: 0}),
                        fill: new ol.style.Fill({color: "rgba(241,244,199,1.0)"})
                        })
                        ];
                        var allStyles = [];
                        
                        allStyles.push.apply(allStyles, style);
                        return allStyles;
                    };
                    var selectionStyle_administrasi = function(feature, resolution){
                        
                        var value = "";
                        var style = [ new ol.style.Style({
                            stroke: new ol.style.Stroke({color: "rgba(255, 204, 0, 1)", lineDash: null, width: 0}),
                        fill: new ol.style.Fill({color: "rgba(255, 204, 0, 1)"})
                        })
                        ]
                        var allStyles = [];
                        
                        allStyles.push.apply(allStyles, style);
                        return allStyles;
                    };

                    var textStyleCache_sungaiarea={}
                    var clusterStyleCache_sungaiarea={}
                    var style_sungaiarea = function(feature, resolution){
                        
                        var value = "";
                        var style = [ new ol.style.Style({
                            stroke: new ol.style.Stroke({color: "rgba(0,0,0,0.0)", lineDash: null, width: 0}),
                        fill: new ol.style.Fill({color: "rgba(78,126,213,1.0)"})
                        })
                        ];
                        var allStyles = [];
                        
                        allStyles.push.apply(allStyles, style);
                        return allStyles;
                    };
                    var selectionStyle_sungaiarea = function(feature, resolution){
                        
                        var value = "";
                        var style = [ new ol.style.Style({
                            stroke: new ol.style.Stroke({color: "rgba(255, 204, 0, 1)", lineDash: null, width: 0}),
                        fill: new ol.style.Fill({color: "rgba(255, 204, 0, 1)"})
                        })
                        ]
                        var allStyles = [];
                        
                        allStyles.push.apply(allStyles, style);
                        return allStyles;
                    };

                    var textStyleCache_garispantai={}
                    var clusterStyleCache_garispantai={}
                    var style_garispantai = function(feature, resolution){
                        
                        var value = "";
                        var style = [ new ol.style.Style({
                            stroke: new ol.style.Stroke({color: "rgba(254,255,192,1.0)", lineDash: null, width: 3})
                        })
                        ];
                        var allStyles = [];
                        
                        allStyles.push.apply(allStyles, style);
                        return allStyles;
                    };
                    var selectionStyle_garispantai = function(feature, resolution){
                        
                        var value = "";
                        var style = [ new ol.style.Style({
                            stroke: new ol.style.Stroke({color: "rgba(255, 204, 0, 1)", lineDash: null, width: 3})
                        })
                        ]
                        var allStyles = [];
                        
                        allStyles.push.apply(allStyles, style);
                        return allStyles;
                    };

                    var textStyleCache_sungaigaris={}
                    var clusterStyleCache_sungaigaris={}
                    var style_sungaigaris = function(feature, resolution){
                        
                        var value = "";
                        var style = [ new ol.style.Style({
                            stroke: new ol.style.Stroke({color: "rgba(67,161,255,1.0)", lineDash: null, width: 3})
                        })
                        ];
                        var allStyles = [];
                        
                        allStyles.push.apply(allStyles, style);
                        return allStyles;
                    };
                    var selectionStyle_sungaigaris = function(feature, resolution){
                        
                        var value = "";
                        var style = [ new ol.style.Style({
                            stroke: new ol.style.Stroke({color: "rgba(255, 204, 0, 1)", lineDash: null, width: 3})
                        })
                        ]
                        var allStyles = [];
                        
                        allStyles.push.apply(allStyles, style);
                        return allStyles;
                    };

                    var textStyleCache_jalan={}
                    var clusterStyleCache_jalan={}
                    var style_jalan = function(feature, resolution){
                        
                        var value = "";
                        var style = [ new ol.style.Style({
                            stroke: new ol.style.Stroke({color: "rgba(227,26,28,1.0)", lineDash: null, width: 3})
                        })
                        ];
                        var allStyles = [];
                        
                        allStyles.push.apply(allStyles, style);
                        return allStyles;
                    };
                    var selectionStyle_jalan = function(feature, resolution){
                        
                        var value = "";
                        var style = [ new ol.style.Style({
                            stroke: new ol.style.Stroke({color: "rgba(255, 204, 0, 1)", lineDash: null, width: 3})
                        })
                        ]
                        var allStyles = [];
                        
                        allStyles.push.apply(allStyles, style);
                        return allStyles;
                    };
var categories_toponimi = {"Anrang": [ new ol.style.Style({
                            image: new ol.style.Circle({radius: 4.56, stroke: new ol.style.Stroke({color: "rgba(0,0,0,1.0)", lineDash: null, width: 0}), fill: new ol.style.Fill({color: "rgba(228,161,113,1.0)"})})
                        })
                        ,new ol.style.Style({
                            image: new ol.style.Circle({radius: 0.95, stroke: new ol.style.Stroke({color: "rgba(0,0,0,1.0)", lineDash: null, width: 0}), fill: new ol.style.Fill({color: "rgba(228,161,113,1.0)"})})
                        })
                        ],
"Anrihua": [ new ol.style.Style({
                            image: new ol.style.Circle({radius: 4.56, stroke: new ol.style.Stroke({color: "rgba(0,0,0,1.0)", lineDash: null, width: 0}), fill: new ol.style.Fill({color: "rgba(76,218,197,1.0)"})})
                        })
                        ,new ol.style.Style({
                            image: new ol.style.Circle({radius: 0.95, stroke: new ol.style.Stroke({color: "rgba(0,0,0,1.0)", lineDash: null, width: 0}), fill: new ol.style.Fill({color: "rgba(76,218,197,1.0)"})})
                        })
                        ],
"Ara": [ new ol.style.Style({
                            image: new ol.style.Circle({radius: 4.56, stroke: new ol.style.Stroke({color: "rgba(0,0,0,1.0)", lineDash: null, width: 0}), fill: new ol.style.Fill({color: "rgba(217,83,188,1.0)"})})
                        })
                        ,new ol.style.Style({
                            image: new ol.style.Circle({radius: 0.95, stroke: new ol.style.Stroke({color: "rgba(0,0,0,1.0)", lineDash: null, width: 0}), fill: new ol.style.Fill({color: "rgba(217,83,188,1.0)"})})
                        })
                        ],
"Baji Minasa": [ new ol.style.Style({
                            image: new ol.style.Circle({radius: 4.56, stroke: new ol.style.Stroke({color: "rgba(0,0,0,1.0)", lineDash: null, width: 0}), fill: new ol.style.Fill({color: "rgba(105,200,79,1.0)"})})
                        })
                        ,new ol.style.Style({
                            image: new ol.style.Circle({radius: 0.95, stroke: new ol.style.Stroke({color: "rgba(0,0,0,1.0)", lineDash: null, width: 0}), fill: new ol.style.Fill({color: "rgba(105,200,79,1.0)"})})
                        })
                        ],
"Balangpesoang": [ new ol.style.Style({
                            image: new ol.style.Circle({radius: 4.56, stroke: new ol.style.Stroke({color: "rgba(0,0,0,1.0)", lineDash: null, width: 0}), fill: new ol.style.Fill({color: "rgba(219,148,85,1.0)"})})
                        })
                        ,new ol.style.Style({
                            image: new ol.style.Circle({radius: 0.95, stroke: new ol.style.Stroke({color: "rgba(0,0,0,1.0)", lineDash: null, width: 0}), fill: new ol.style.Fill({color: "rgba(219,148,85,1.0)"})})
                        })
                        ],
"Balangtoroang": [ new ol.style.Style({
                            image: new ol.style.Circle({radius: 4.56, stroke: new ol.style.Stroke({color: "rgba(0,0,0,1.0)", lineDash: null, width: 0}), fill: new ol.style.Fill({color: "rgba(129,124,217,1.0)"})})
                        })
                        ,new ol.style.Style({
                            image: new ol.style.Circle({radius: 0.95, stroke: new ol.style.Stroke({color: "rgba(0,0,0,1.0)", lineDash: null, width: 0}), fill: new ol.style.Fill({color: "rgba(129,124,217,1.0)"})})
                        })
                        ],
"Balibo": [ new ol.style.Style({
                            image: new ol.style.Circle({radius: 4.56, stroke: new ol.style.Stroke({color: "rgba(0,0,0,1.0)", lineDash: null, width: 0}), fill: new ol.style.Fill({color: "rgba(212,169,111,1.0)"})})
                        })
                        ,new ol.style.Style({
                            image: new ol.style.Circle({radius: 0.95, stroke: new ol.style.Stroke({color: "rgba(0,0,0,1.0)", lineDash: null, width: 0}), fill: new ol.style.Fill({color: "rgba(212,169,111,1.0)"})})
                        })
                        ],
"Balla Saraja": [ new ol.style.Style({
                            image: new ol.style.Circle({radius: 4.56, stroke: new ol.style.Stroke({color: "rgba(0,0,0,1.0)", lineDash: null, width: 0}), fill: new ol.style.Fill({color: "rgba(166,235,81,1.0)"})})
                        })
                        ,new ol.style.Style({
                            image: new ol.style.Circle({radius: 0.95, stroke: new ol.style.Stroke({color: "rgba(0,0,0,1.0)", lineDash: null, width: 0}), fill: new ol.style.Fill({color: "rgba(166,235,81,1.0)"})})
                        })
                        ],
"Balleanging": [ new ol.style.Style({
                            image: new ol.style.Circle({radius: 4.56, stroke: new ol.style.Stroke({color: "rgba(0,0,0,1.0)", lineDash: null, width: 0}), fill: new ol.style.Fill({color: "rgba(201,13,198,1.0)"})})
                        })
                        ,new ol.style.Style({
                            image: new ol.style.Circle({radius: 0.95, stroke: new ol.style.Stroke({color: "rgba(0,0,0,1.0)", lineDash: null, width: 0}), fill: new ol.style.Fill({color: "rgba(201,13,198,1.0)"})})
                        })
                        ],
"Balong": [ new ol.style.Style({
                            image: new ol.style.Circle({radius: 4.56, stroke: new ol.style.Stroke({color: "rgba(0,0,0,1.0)", lineDash: null, width: 0}), fill: new ol.style.Fill({color: "rgba(232,88,127,1.0)"})})
                        })
                        ,new ol.style.Style({
                            image: new ol.style.Circle({radius: 0.95, stroke: new ol.style.Stroke({color: "rgba(0,0,0,1.0)", lineDash: null, width: 0}), fill: new ol.style.Fill({color: "rgba(232,88,127,1.0)"})})
                        })
                        ],
"Barombong": [ new ol.style.Style({
                            image: new ol.style.Circle({radius: 4.56, stroke: new ol.style.Stroke({color: "rgba(0,0,0,1.0)", lineDash: null, width: 0}), fill: new ol.style.Fill({color: "rgba(152,79,216,1.0)"})})
                        })
                        ,new ol.style.Style({
                            image: new ol.style.Circle({radius: 0.95, stroke: new ol.style.Stroke({color: "rgba(0,0,0,1.0)", lineDash: null, width: 0}), fill: new ol.style.Fill({color: "rgba(152,79,216,1.0)"})})
                        })
                        ],
"Barugae": [ new ol.style.Style({
                            image: new ol.style.Circle({radius: 4.56, stroke: new ol.style.Stroke({color: "rgba(0,0,0,1.0)", lineDash: null, width: 0}), fill: new ol.style.Fill({color: "rgba(221,154,129,1.0)"})})
                        })
                        ,new ol.style.Style({
                            image: new ol.style.Circle({radius: 0.95, stroke: new ol.style.Stroke({color: "rgba(0,0,0,1.0)", lineDash: null, width: 0}), fill: new ol.style.Fill({color: "rgba(221,154,129,1.0)"})})
                        })
                        ],
"Batang": [ new ol.style.Style({
                            image: new ol.style.Circle({radius: 4.56, stroke: new ol.style.Stroke({color: "rgba(0,0,0,1.0)", lineDash: null, width: 0}), fill: new ol.style.Fill({color: "rgba(211,190,104,1.0)"})})
                        })
                        ,new ol.style.Style({
                            image: new ol.style.Circle({radius: 0.95, stroke: new ol.style.Stroke({color: "rgba(0,0,0,1.0)", lineDash: null, width: 0}), fill: new ol.style.Fill({color: "rgba(211,190,104,1.0)"})})
                        })
                        ],
"Batu Nilamung": [ new ol.style.Style({
                            image: new ol.style.Circle({radius: 4.56, stroke: new ol.style.Stroke({color: "rgba(0,0,0,1.0)", lineDash: null, width: 0}), fill: new ol.style.Fill({color: "rgba(170,225,131,1.0)"})})
                        })
                        ,new ol.style.Style({
                            image: new ol.style.Circle({radius: 0.95, stroke: new ol.style.Stroke({color: "rgba(0,0,0,1.0)", lineDash: null, width: 0}), fill: new ol.style.Fill({color: "rgba(170,225,131,1.0)"})})
                        })
                        ],
"Batukaropa": [ new ol.style.Style({
                            image: new ol.style.Circle({radius: 4.56, stroke: new ol.style.Stroke({color: "rgba(0,0,0,1.0)", lineDash: null, width: 0}), fill: new ol.style.Fill({color: "rgba(140,231,186,1.0)"})})
                        })
                        ,new ol.style.Style({
                            image: new ol.style.Circle({radius: 0.95, stroke: new ol.style.Stroke({color: "rgba(0,0,0,1.0)", lineDash: null, width: 0}), fill: new ol.style.Fill({color: "rgba(140,231,186,1.0)"})})
                        })
                        ],
"Batulohe": [ new ol.style.Style({
                            image: new ol.style.Circle({radius: 4.56, stroke: new ol.style.Stroke({color: "rgba(0,0,0,1.0)", lineDash: null, width: 0}), fill: new ol.style.Fill({color: "rgba(109,181,216,1.0)"})})
                        })
                        ,new ol.style.Style({
                            image: new ol.style.Circle({radius: 0.95, stroke: new ol.style.Stroke({color: "rgba(0,0,0,1.0)", lineDash: null, width: 0}), fill: new ol.style.Fill({color: "rgba(109,181,216,1.0)"})})
                        })
                        ],
"Benjala": [ new ol.style.Style({
                            image: new ol.style.Circle({radius: 4.56, stroke: new ol.style.Stroke({color: "rgba(0,0,0,1.0)", lineDash: null, width: 0}), fill: new ol.style.Fill({color: "rgba(41,222,159,1.0)"})})
                        })
                        ,new ol.style.Style({
                            image: new ol.style.Circle({radius: 0.95, stroke: new ol.style.Stroke({color: "rgba(0,0,0,1.0)", lineDash: null, width: 0}), fill: new ol.style.Fill({color: "rgba(41,222,159,1.0)"})})
                        })
                        ],
"Benteng Gattareng": [ new ol.style.Style({
                            image: new ol.style.Circle({radius: 4.56, stroke: new ol.style.Stroke({color: "rgba(0,0,0,1.0)", lineDash: null, width: 0}), fill: new ol.style.Fill({color: "rgba(207,48,119,1.0)"})})
                        })
                        ,new ol.style.Style({
                            image: new ol.style.Circle({radius: 0.95, stroke: new ol.style.Stroke({color: "rgba(0,0,0,1.0)", lineDash: null, width: 0}), fill: new ol.style.Fill({color: "rgba(207,48,119,1.0)"})})
                        })
                        ],
"Benteng Malewang": [ new ol.style.Style({
                            image: new ol.style.Circle({radius: 4.56, stroke: new ol.style.Stroke({color: "rgba(0,0,0,1.0)", lineDash: null, width: 0}), fill: new ol.style.Fill({color: "rgba(133,75,227,1.0)"})})
                        })
                        ,new ol.style.Style({
                            image: new ol.style.Circle({radius: 0.95, stroke: new ol.style.Stroke({color: "rgba(0,0,0,1.0)", lineDash: null, width: 0}), fill: new ol.style.Fill({color: "rgba(133,75,227,1.0)"})})
                        })
                        ],
"Benteng Palioi": [ new ol.style.Style({
                            image: new ol.style.Circle({radius: 4.56, stroke: new ol.style.Stroke({color: "rgba(0,0,0,1.0)", lineDash: null, width: 0}), fill: new ol.style.Fill({color: "rgba(235,235,74,1.0)"})})
                        })
                        ,new ol.style.Style({
                            image: new ol.style.Circle({radius: 0.95, stroke: new ol.style.Stroke({color: "rgba(0,0,0,1.0)", lineDash: null, width: 0}), fill: new ol.style.Fill({color: "rgba(235,235,74,1.0)"})})
                        })
                        ],
"Bentengnge": [ new ol.style.Style({
                            image: new ol.style.Circle({radius: 4.56, stroke: new ol.style.Stroke({color: "rgba(0,0,0,1.0)", lineDash: null, width: 0}), fill: new ol.style.Fill({color: "rgba(201,223,129,1.0)"})})
                        })
                        ,new ol.style.Style({
                            image: new ol.style.Circle({radius: 0.95, stroke: new ol.style.Stroke({color: "rgba(0,0,0,1.0)", lineDash: null, width: 0}), fill: new ol.style.Fill({color: "rgba(201,223,129,1.0)"})})
                        })
                        ],
"Bialo": [ new ol.style.Style({
                            image: new ol.style.Circle({radius: 4.56, stroke: new ol.style.Stroke({color: "rgba(0,0,0,1.0)", lineDash: null, width: 0}), fill: new ol.style.Fill({color: "rgba(239,224,90,1.0)"})})
                        })
                        ,new ol.style.Style({
                            image: new ol.style.Circle({radius: 0.95, stroke: new ol.style.Stroke({color: "rgba(0,0,0,1.0)", lineDash: null, width: 0}), fill: new ol.style.Fill({color: "rgba(239,224,90,1.0)"})})
                        })
                        ],
"Bijawang": [ new ol.style.Style({
                            image: new ol.style.Circle({radius: 4.56, stroke: new ol.style.Stroke({color: "rgba(0,0,0,1.0)", lineDash: null, width: 0}), fill: new ol.style.Fill({color: "rgba(147,71,227,1.0)"})})
                        })
                        ,new ol.style.Style({
                            image: new ol.style.Circle({radius: 0.95, stroke: new ol.style.Stroke({color: "rgba(0,0,0,1.0)", lineDash: null, width: 0}), fill: new ol.style.Fill({color: "rgba(147,71,227,1.0)"})})
                        })
                        ],
"Bintarore": [ new ol.style.Style({
                            image: new ol.style.Circle({radius: 4.56, stroke: new ol.style.Stroke({color: "rgba(0,0,0,1.0)", lineDash: null, width: 0}), fill: new ol.style.Fill({color: "rgba(206,121,113,1.0)"})})
                        })
                        ,new ol.style.Style({
                            image: new ol.style.Circle({radius: 0.95, stroke: new ol.style.Stroke({color: "rgba(0,0,0,1.0)", lineDash: null, width: 0}), fill: new ol.style.Fill({color: "rgba(206,121,113,1.0)"})})
                        })
                        ],
"Bira": [ new ol.style.Style({
                            image: new ol.style.Circle({radius: 4.56, stroke: new ol.style.Stroke({color: "rgba(0,0,0,1.0)", lineDash: null, width: 0}), fill: new ol.style.Fill({color: "rgba(94,100,201,1.0)"})})
                        })
                        ,new ol.style.Style({
                            image: new ol.style.Circle({radius: 0.95, stroke: new ol.style.Stroke({color: "rgba(0,0,0,1.0)", lineDash: null, width: 0}), fill: new ol.style.Fill({color: "rgba(94,100,201,1.0)"})})
                        })
                        ],
"Bonto Baji": [ new ol.style.Style({
                            image: new ol.style.Circle({radius: 4.56, stroke: new ol.style.Stroke({color: "rgba(0,0,0,1.0)", lineDash: null, width: 0}), fill: new ol.style.Fill({color: "rgba(64,138,203,1.0)"})})
                        })
                        ,new ol.style.Style({
                            image: new ol.style.Circle({radius: 0.95, stroke: new ol.style.Stroke({color: "rgba(0,0,0,1.0)", lineDash: null, width: 0}), fill: new ol.style.Fill({color: "rgba(64,138,203,1.0)"})})
                        })
                        ],
"Bonto Batua": [ new ol.style.Style({
                            image: new ol.style.Circle({radius: 4.56, stroke: new ol.style.Stroke({color: "rgba(0,0,0,1.0)", lineDash: null, width: 0}), fill: new ol.style.Fill({color: "rgba(63,35,219,1.0)"})})
                        })
                        ,new ol.style.Style({
                            image: new ol.style.Circle({radius: 0.95, stroke: new ol.style.Stroke({color: "rgba(0,0,0,1.0)", lineDash: null, width: 0}), fill: new ol.style.Fill({color: "rgba(63,35,219,1.0)"})})
                        })
                        ],
"Bonto Biraeng": [ new ol.style.Style({
                            image: new ol.style.Circle({radius: 4.56, stroke: new ol.style.Stroke({color: "rgba(0,0,0,1.0)", lineDash: null, width: 0}), fill: new ol.style.Fill({color: "rgba(135,58,234,1.0)"})})
                        })
                        ,new ol.style.Style({
                            image: new ol.style.Circle({radius: 0.95, stroke: new ol.style.Stroke({color: "rgba(0,0,0,1.0)", lineDash: null, width: 0}), fill: new ol.style.Fill({color: "rgba(135,58,234,1.0)"})})
                        })
                        ],
"Bonto Bulaeng": [ new ol.style.Style({
                            image: new ol.style.Circle({radius: 4.56, stroke: new ol.style.Stroke({color: "rgba(0,0,0,1.0)", lineDash: null, width: 0}), fill: new ol.style.Fill({color: "rgba(60,202,62,1.0)"})})
                        })
                        ,new ol.style.Style({
                            image: new ol.style.Circle({radius: 0.95, stroke: new ol.style.Stroke({color: "rgba(0,0,0,1.0)", lineDash: null, width: 0}), fill: new ol.style.Fill({color: "rgba(60,202,62,1.0)"})})
                        })
                        ],
"Bonto Haru": [ new ol.style.Style({
                            image: new ol.style.Circle({radius: 4.56, stroke: new ol.style.Stroke({color: "rgba(0,0,0,1.0)", lineDash: null, width: 0}), fill: new ol.style.Fill({color: "rgba(125,220,47,1.0)"})})
                        })
                        ,new ol.style.Style({
                            image: new ol.style.Circle({radius: 0.95, stroke: new ol.style.Stroke({color: "rgba(0,0,0,1.0)", lineDash: null, width: 0}), fill: new ol.style.Fill({color: "rgba(125,220,47,1.0)"})})
                        })
                        ],
"Bonto Kamase": [ new ol.style.Style({
                            image: new ol.style.Circle({radius: 4.56, stroke: new ol.style.Stroke({color: "rgba(0,0,0,1.0)", lineDash: null, width: 0}), fill: new ol.style.Fill({color: "rgba(215,56,189,1.0)"})})
                        })
                        ,new ol.style.Style({
                            image: new ol.style.Circle({radius: 0.95, stroke: new ol.style.Stroke({color: "rgba(0,0,0,1.0)", lineDash: null, width: 0}), fill: new ol.style.Fill({color: "rgba(215,56,189,1.0)"})})
                        })
                        ],
"Bonto Lohe": [ new ol.style.Style({
                            image: new ol.style.Circle({radius: 4.56, stroke: new ol.style.Stroke({color: "rgba(0,0,0,1.0)", lineDash: null, width: 0}), fill: new ol.style.Fill({color: "rgba(215,56,189,1.0)"})})
                        })
                        ,new ol.style.Style({
                            image: new ol.style.Circle({radius: 0.95, stroke: new ol.style.Stroke({color: "rgba(0,0,0,1.0)", lineDash: null, width: 0}), fill: new ol.style.Fill({color: "rgba(215,56,189,1.0)"})})
                        })
                        ],
"Bonto Macinna": [ new ol.style.Style({
                            image: new ol.style.Circle({radius: 4.56, stroke: new ol.style.Stroke({color: "rgba(0,0,0,1.0)", lineDash: null, width: 0}), fill: new ol.style.Fill({color: "rgba(211,179,104,1.0)"})})
                        })
                        ,new ol.style.Style({
                            image: new ol.style.Circle({radius: 0.95, stroke: new ol.style.Stroke({color: "rgba(0,0,0,1.0)", lineDash: null, width: 0}), fill: new ol.style.Fill({color: "rgba(211,179,104,1.0)"})})
                        })
                        ],
"Bonto Marannu": [ new ol.style.Style({
                            image: new ol.style.Circle({radius: 4.56, stroke: new ol.style.Stroke({color: "rgba(0,0,0,1.0)", lineDash: null, width: 0}), fill: new ol.style.Fill({color: "rgba(114,198,231,1.0)"})})
                        })
                        ,new ol.style.Style({
                            image: new ol.style.Circle({radius: 0.95, stroke: new ol.style.Stroke({color: "rgba(0,0,0,1.0)", lineDash: null, width: 0}), fill: new ol.style.Fill({color: "rgba(114,198,231,1.0)"})})
                        })
                        ],
"Bonto Masila": [ new ol.style.Style({
                            image: new ol.style.Circle({radius: 4.56, stroke: new ol.style.Stroke({color: "rgba(0,0,0,1.0)", lineDash: null, width: 0}), fill: new ol.style.Fill({color: "rgba(223,49,203,1.0)"})})
                        })
                        ,new ol.style.Style({
                            image: new ol.style.Circle({radius: 0.95, stroke: new ol.style.Stroke({color: "rgba(0,0,0,1.0)", lineDash: null, width: 0}), fill: new ol.style.Fill({color: "rgba(223,49,203,1.0)"})})
                        })
                        ],
"Bonto Mate'ne": [ new ol.style.Style({
                            image: new ol.style.Circle({radius: 4.56, stroke: new ol.style.Stroke({color: "rgba(0,0,0,1.0)", lineDash: null, width: 0}), fill: new ol.style.Fill({color: "rgba(228,33,140,1.0)"})})
                        })
                        ,new ol.style.Style({
                            image: new ol.style.Circle({radius: 0.95, stroke: new ol.style.Stroke({color: "rgba(0,0,0,1.0)", lineDash: null, width: 0}), fill: new ol.style.Fill({color: "rgba(228,33,140,1.0)"})})
                        })
                        ],
"Bonto Minasa": [ new ol.style.Style({
                            image: new ol.style.Circle({radius: 4.56, stroke: new ol.style.Stroke({color: "rgba(0,0,0,1.0)", lineDash: null, width: 0}), fill: new ol.style.Fill({color: "rgba(205,183,57,1.0)"})})
                        })
                        ,new ol.style.Style({
                            image: new ol.style.Circle({radius: 0.95, stroke: new ol.style.Stroke({color: "rgba(0,0,0,1.0)", lineDash: null, width: 0}), fill: new ol.style.Fill({color: "rgba(205,183,57,1.0)"})})
                        })
                        ],
"Bonto Raja": [ new ol.style.Style({
                            image: new ol.style.Circle({radius: 4.56, stroke: new ol.style.Stroke({color: "rgba(0,0,0,1.0)", lineDash: null, width: 0}), fill: new ol.style.Fill({color: "rgba(228,56,116,1.0)"})})
                        })
                        ,new ol.style.Style({
                            image: new ol.style.Circle({radius: 0.95, stroke: new ol.style.Stroke({color: "rgba(0,0,0,1.0)", lineDash: null, width: 0}), fill: new ol.style.Fill({color: "rgba(228,56,116,1.0)"})})
                        })
                        ],
"Bonto Rannu": [ new ol.style.Style({
                            image: new ol.style.Circle({radius: 4.56, stroke: new ol.style.Stroke({color: "rgba(0,0,0,1.0)", lineDash: null, width: 0}), fill: new ol.style.Fill({color: "rgba(61,181,208,1.0)"})})
                        })
                        ,new ol.style.Style({
                            image: new ol.style.Circle({radius: 0.95, stroke: new ol.style.Stroke({color: "rgba(0,0,0,1.0)", lineDash: null, width: 0}), fill: new ol.style.Fill({color: "rgba(61,181,208,1.0)"})})
                        })
                        ],
"Bonto Sunggu": [ new ol.style.Style({
                            image: new ol.style.Circle({radius: 4.56, stroke: new ol.style.Stroke({color: "rgba(0,0,0,1.0)", lineDash: null, width: 0}), fill: new ol.style.Fill({color: "rgba(201,106,135,1.0)"})})
                        })
                        ,new ol.style.Style({
                            image: new ol.style.Circle({radius: 0.95, stroke: new ol.style.Stroke({color: "rgba(0,0,0,1.0)", lineDash: null, width: 0}), fill: new ol.style.Fill({color: "rgba(201,106,135,1.0)"})})
                        })
                        ],
"Bonto Tangnga": [ new ol.style.Style({
                            image: new ol.style.Circle({radius: 4.56, stroke: new ol.style.Stroke({color: "rgba(0,0,0,1.0)", lineDash: null, width: 0}), fill: new ol.style.Fill({color: "rgba(201,218,121,1.0)"})})
                        })
                        ,new ol.style.Style({
                            image: new ol.style.Circle({radius: 0.95, stroke: new ol.style.Stroke({color: "rgba(0,0,0,1.0)", lineDash: null, width: 0}), fill: new ol.style.Fill({color: "rgba(201,218,121,1.0)"})})
                        })
                        ],
"Bontobangun": [ new ol.style.Style({
                            image: new ol.style.Circle({radius: 4.56, stroke: new ol.style.Stroke({color: "rgba(0,0,0,1.0)", lineDash: null, width: 0}), fill: new ol.style.Fill({color: "rgba(89,224,222,1.0)"})})
                        })
                        ,new ol.style.Style({
                            image: new ol.style.Circle({radius: 0.95, stroke: new ol.style.Stroke({color: "rgba(0,0,0,1.0)", lineDash: null, width: 0}), fill: new ol.style.Fill({color: "rgba(89,224,222,1.0)"})})
                        })
                        ],
"Bontomanai": [ new ol.style.Style({
                            image: new ol.style.Circle({radius: 4.56, stroke: new ol.style.Stroke({color: "rgba(0,0,0,1.0)", lineDash: null, width: 0}), fill: new ol.style.Fill({color: "rgba(110,231,142,1.0)"})})
                        })
                        ,new ol.style.Style({
                            image: new ol.style.Circle({radius: 0.95, stroke: new ol.style.Stroke({color: "rgba(0,0,0,1.0)", lineDash: null, width: 0}), fill: new ol.style.Fill({color: "rgba(110,231,142,1.0)"})})
                        })
                        ],
"Bontomangiring": [ new ol.style.Style({
                            image: new ol.style.Circle({radius: 4.56, stroke: new ol.style.Stroke({color: "rgba(0,0,0,1.0)", lineDash: null, width: 0}), fill: new ol.style.Fill({color: "rgba(234,51,240,1.0)"})})
                        })
                        ,new ol.style.Style({
                            image: new ol.style.Circle({radius: 0.95, stroke: new ol.style.Stroke({color: "rgba(0,0,0,1.0)", lineDash: null, width: 0}), fill: new ol.style.Fill({color: "rgba(234,51,240,1.0)"})})
                        })
                        ],
"Bontonyeleng": [ new ol.style.Style({
                            image: new ol.style.Circle({radius: 4.56, stroke: new ol.style.Stroke({color: "rgba(0,0,0,1.0)", lineDash: null, width: 0}), fill: new ol.style.Fill({color: "rgba(139,231,120,1.0)"})})
                        })
                        ,new ol.style.Style({
                            image: new ol.style.Circle({radius: 0.95, stroke: new ol.style.Stroke({color: "rgba(0,0,0,1.0)", lineDash: null, width: 0}), fill: new ol.style.Fill({color: "rgba(139,231,120,1.0)"})})
                        })
                        ],
"Borong": [ new ol.style.Style({
                            image: new ol.style.Circle({radius: 4.56, stroke: new ol.style.Stroke({color: "rgba(0,0,0,1.0)", lineDash: null, width: 0}), fill: new ol.style.Fill({color: "rgba(91,33,205,1.0)"})})
                        })
                        ,new ol.style.Style({
                            image: new ol.style.Circle({radius: 0.95, stroke: new ol.style.Stroke({color: "rgba(0,0,0,1.0)", lineDash: null, width: 0}), fill: new ol.style.Fill({color: "rgba(91,33,205,1.0)"})})
                        })
                        ],
"Borongrappoa": [ new ol.style.Style({
                            image: new ol.style.Circle({radius: 4.56, stroke: new ol.style.Stroke({color: "rgba(0,0,0,1.0)", lineDash: null, width: 0}), fill: new ol.style.Fill({color: "rgba(62,201,166,1.0)"})})
                        })
                        ,new ol.style.Style({
                            image: new ol.style.Circle({radius: 0.95, stroke: new ol.style.Stroke({color: "rgba(0,0,0,1.0)", lineDash: null, width: 0}), fill: new ol.style.Fill({color: "rgba(62,201,166,1.0)"})})
                        })
                        ],
"Buhung Bundang": [ new ol.style.Style({
                            image: new ol.style.Circle({radius: 4.56, stroke: new ol.style.Stroke({color: "rgba(0,0,0,1.0)", lineDash: null, width: 0}), fill: new ol.style.Fill({color: "rgba(225,43,15,1.0)"})})
                        })
                        ,new ol.style.Style({
                            image: new ol.style.Circle({radius: 0.95, stroke: new ol.style.Stroke({color: "rgba(0,0,0,1.0)", lineDash: null, width: 0}), fill: new ol.style.Fill({color: "rgba(225,43,15,1.0)"})})
                        })
                        ],
"Bukit Harapan": [ new ol.style.Style({
                            image: new ol.style.Circle({radius: 4.56, stroke: new ol.style.Stroke({color: "rgba(0,0,0,1.0)", lineDash: null, width: 0}), fill: new ol.style.Fill({color: "rgba(69,193,212,1.0)"})})
                        })
                        ,new ol.style.Style({
                            image: new ol.style.Circle({radius: 0.95, stroke: new ol.style.Stroke({color: "rgba(0,0,0,1.0)", lineDash: null, width: 0}), fill: new ol.style.Fill({color: "rgba(69,193,212,1.0)"})})
                        })
                        ],
"Bukit Tinggi": [ new ol.style.Style({
                            image: new ol.style.Circle({radius: 4.56, stroke: new ol.style.Stroke({color: "rgba(0,0,0,1.0)", lineDash: null, width: 0}), fill: new ol.style.Fill({color: "rgba(137,239,233,1.0)"})})
                        })
                        ,new ol.style.Style({
                            image: new ol.style.Circle({radius: 0.95, stroke: new ol.style.Stroke({color: "rgba(0,0,0,1.0)", lineDash: null, width: 0}), fill: new ol.style.Fill({color: "rgba(137,239,233,1.0)"})})
                        })
                        ],
"Bulobulo": [ new ol.style.Style({
                            image: new ol.style.Circle({radius: 4.56, stroke: new ol.style.Stroke({color: "rgba(0,0,0,1.0)", lineDash: null, width: 0}), fill: new ol.style.Fill({color: "rgba(32,204,136,1.0)"})})
                        })
                        ,new ol.style.Style({
                            image: new ol.style.Circle({radius: 0.95, stroke: new ol.style.Stroke({color: "rgba(0,0,0,1.0)", lineDash: null, width: 0}), fill: new ol.style.Fill({color: "rgba(32,204,136,1.0)"})})
                        })
                        ],
"Bulolohe": [ new ol.style.Style({
                            image: new ol.style.Circle({radius: 4.56, stroke: new ol.style.Stroke({color: "rgba(0,0,0,1.0)", lineDash: null, width: 0}), fill: new ol.style.Fill({color: "rgba(38,220,138,1.0)"})})
                        })
                        ,new ol.style.Style({
                            image: new ol.style.Circle({radius: 0.95, stroke: new ol.style.Stroke({color: "rgba(0,0,0,1.0)", lineDash: null, width: 0}), fill: new ol.style.Fill({color: "rgba(38,220,138,1.0)"})})
                        })
                        ],
"Caile": [ new ol.style.Style({
                            image: new ol.style.Circle({radius: 4.56, stroke: new ol.style.Stroke({color: "rgba(0,0,0,1.0)", lineDash: null, width: 0}), fill: new ol.style.Fill({color: "rgba(200,111,224,1.0)"})})
                        })
                        ,new ol.style.Style({
                            image: new ol.style.Circle({radius: 0.95, stroke: new ol.style.Stroke({color: "rgba(0,0,0,1.0)", lineDash: null, width: 0}), fill: new ol.style.Fill({color: "rgba(200,111,224,1.0)"})})
                        })
                        ],
"Caramming": [ new ol.style.Style({
                            image: new ol.style.Circle({radius: 4.56, stroke: new ol.style.Stroke({color: "rgba(0,0,0,1.0)", lineDash: null, width: 0}), fill: new ol.style.Fill({color: "rgba(119,134,235,1.0)"})})
                        })
                        ,new ol.style.Style({
                            image: new ol.style.Circle({radius: 0.95, stroke: new ol.style.Stroke({color: "rgba(0,0,0,1.0)", lineDash: null, width: 0}), fill: new ol.style.Fill({color: "rgba(119,134,235,1.0)"})})
                        })
                        ],
"Dampang": [ new ol.style.Style({
                            image: new ol.style.Circle({radius: 4.56, stroke: new ol.style.Stroke({color: "rgba(0,0,0,1.0)", lineDash: null, width: 0}), fill: new ol.style.Fill({color: "rgba(57,171,205,1.0)"})})
                        })
                        ,new ol.style.Style({
                            image: new ol.style.Circle({radius: 0.95, stroke: new ol.style.Stroke({color: "rgba(0,0,0,1.0)", lineDash: null, width: 0}), fill: new ol.style.Fill({color: "rgba(57,171,205,1.0)"})})
                        })
                        ],
"Darubiah": [ new ol.style.Style({
                            image: new ol.style.Circle({radius: 4.56, stroke: new ol.style.Stroke({color: "rgba(0,0,0,1.0)", lineDash: null, width: 0}), fill: new ol.style.Fill({color: "rgba(68,168,230,1.0)"})})
                        })
                        ,new ol.style.Style({
                            image: new ol.style.Circle({radius: 0.95, stroke: new ol.style.Stroke({color: "rgba(0,0,0,1.0)", lineDash: null, width: 0}), fill: new ol.style.Fill({color: "rgba(68,168,230,1.0)"})})
                        })
                        ],
"Dwi Tiro": [ new ol.style.Style({
                            image: new ol.style.Circle({radius: 4.56, stroke: new ol.style.Stroke({color: "rgba(0,0,0,1.0)", lineDash: null, width: 0}), fill: new ol.style.Fill({color: "rgba(48,228,24,1.0)"})})
                        })
                        ,new ol.style.Style({
                            image: new ol.style.Circle({radius: 0.95, stroke: new ol.style.Stroke({color: "rgba(0,0,0,1.0)", lineDash: null, width: 0}), fill: new ol.style.Fill({color: "rgba(48,228,24,1.0)"})})
                        })
                        ],
"Ela-ela": [ new ol.style.Style({
                            image: new ol.style.Circle({radius: 4.56, stroke: new ol.style.Stroke({color: "rgba(0,0,0,1.0)", lineDash: null, width: 0}), fill: new ol.style.Fill({color: "rgba(220,32,54,1.0)"})})
                        })
                        ,new ol.style.Style({
                            image: new ol.style.Circle({radius: 0.95, stroke: new ol.style.Stroke({color: "rgba(0,0,0,1.0)", lineDash: null, width: 0}), fill: new ol.style.Fill({color: "rgba(220,32,54,1.0)"})})
                        })
                        ],
"Garanta": [ new ol.style.Style({
                            image: new ol.style.Circle({radius: 4.56, stroke: new ol.style.Stroke({color: "rgba(0,0,0,1.0)", lineDash: null, width: 0}), fill: new ol.style.Fill({color: "rgba(114,167,205,1.0)"})})
                        })
                        ,new ol.style.Style({
                            image: new ol.style.Circle({radius: 0.95, stroke: new ol.style.Stroke({color: "rgba(0,0,0,1.0)", lineDash: null, width: 0}), fill: new ol.style.Fill({color: "rgba(114,167,205,1.0)"})})
                        })
                        ],
"Garantungan": [ new ol.style.Style({
                            image: new ol.style.Circle({radius: 4.56, stroke: new ol.style.Stroke({color: "rgba(0,0,0,1.0)", lineDash: null, width: 0}), fill: new ol.style.Fill({color: "rgba(240,131,149,1.0)"})})
                        })
                        ,new ol.style.Style({
                            image: new ol.style.Circle({radius: 0.95, stroke: new ol.style.Stroke({color: "rgba(0,0,0,1.0)", lineDash: null, width: 0}), fill: new ol.style.Fill({color: "rgba(240,131,149,1.0)"})})
                        })
                        ],
"Gattareng": [ new ol.style.Style({
                            image: new ol.style.Circle({radius: 4.56, stroke: new ol.style.Stroke({color: "rgba(0,0,0,1.0)", lineDash: null, width: 0}), fill: new ol.style.Fill({color: "rgba(221,40,33,1.0)"})})
                        })
                        ,new ol.style.Style({
                            image: new ol.style.Circle({radius: 0.95, stroke: new ol.style.Stroke({color: "rgba(0,0,0,1.0)", lineDash: null, width: 0}), fill: new ol.style.Fill({color: "rgba(221,40,33,1.0)"})})
                        })
                        ],
"Gunturu": [ new ol.style.Style({
                            image: new ol.style.Circle({radius: 4.56, stroke: new ol.style.Stroke({color: "rgba(0,0,0,1.0)", lineDash: null, width: 0}), fill: new ol.style.Fill({color: "rgba(54,72,231,1.0)"})})
                        })
                        ,new ol.style.Style({
                            image: new ol.style.Circle({radius: 0.95, stroke: new ol.style.Stroke({color: "rgba(0,0,0,1.0)", lineDash: null, width: 0}), fill: new ol.style.Fill({color: "rgba(54,72,231,1.0)"})})
                        })
                        ],
"Jalanjang": [ new ol.style.Style({
                            image: new ol.style.Circle({radius: 4.56, stroke: new ol.style.Stroke({color: "rgba(0,0,0,1.0)", lineDash: null, width: 0}), fill: new ol.style.Fill({color: "rgba(54,72,231,1.0)"})})
                        })
                        ,new ol.style.Style({
                            image: new ol.style.Circle({radius: 0.95, stroke: new ol.style.Stroke({color: "rgba(0,0,0,1.0)", lineDash: null, width: 0}), fill: new ol.style.Fill({color: "rgba(54,72,231,1.0)"})})
                        })
                        ],
"Jawi-jawi": [ new ol.style.Style({
                            image: new ol.style.Circle({radius: 4.56, stroke: new ol.style.Stroke({color: "rgba(0,0,0,1.0)", lineDash: null, width: 0}), fill: new ol.style.Fill({color: "rgba(152,47,212,1.0)"})})
                        })
                        ,new ol.style.Style({
                            image: new ol.style.Circle({radius: 0.95, stroke: new ol.style.Stroke({color: "rgba(0,0,0,1.0)", lineDash: null, width: 0}), fill: new ol.style.Fill({color: "rgba(152,47,212,1.0)"})})
                        })
                        ],
"Jo'jolo": [ new ol.style.Style({
                            image: new ol.style.Circle({radius: 4.56, stroke: new ol.style.Stroke({color: "rgba(0,0,0,1.0)", lineDash: null, width: 0}), fill: new ol.style.Fill({color: "rgba(204,233,131,1.0)"})})
                        })
                        ,new ol.style.Style({
                            image: new ol.style.Circle({radius: 0.95, stroke: new ol.style.Stroke({color: "rgba(0,0,0,1.0)", lineDash: null, width: 0}), fill: new ol.style.Fill({color: "rgba(204,233,131,1.0)"})})
                        })
                        ],
"Kalumeme": [ new ol.style.Style({
                            image: new ol.style.Circle({radius: 4.56, stroke: new ol.style.Stroke({color: "rgba(0,0,0,1.0)", lineDash: null, width: 0}), fill: new ol.style.Fill({color: "rgba(146,137,229,1.0)"})})
                        })
                        ,new ol.style.Style({
                            image: new ol.style.Circle({radius: 0.95, stroke: new ol.style.Stroke({color: "rgba(0,0,0,1.0)", lineDash: null, width: 0}), fill: new ol.style.Fill({color: "rgba(146,137,229,1.0)"})})
                        })
                        ],
"Kalumpang": [ new ol.style.Style({
                            image: new ol.style.Circle({radius: 4.56, stroke: new ol.style.Stroke({color: "rgba(0,0,0,1.0)", lineDash: null, width: 0}), fill: new ol.style.Fill({color: "rgba(208,45,56,1.0)"})})
                        })
                        ,new ol.style.Style({
                            image: new ol.style.Circle({radius: 0.95, stroke: new ol.style.Stroke({color: "rgba(0,0,0,1.0)", lineDash: null, width: 0}), fill: new ol.style.Fill({color: "rgba(208,45,56,1.0)"})})
                        })
                        ],
"Kambuno": [ new ol.style.Style({
                            image: new ol.style.Circle({radius: 4.56, stroke: new ol.style.Stroke({color: "rgba(0,0,0,1.0)", lineDash: null, width: 0}), fill: new ol.style.Fill({color: "rgba(41,211,217,1.0)"})})
                        })
                        ,new ol.style.Style({
                            image: new ol.style.Circle({radius: 0.95, stroke: new ol.style.Stroke({color: "rgba(0,0,0,1.0)", lineDash: null, width: 0}), fill: new ol.style.Fill({color: "rgba(41,211,217,1.0)"})})
                        })
                        ],
"Karama": [ new ol.style.Style({
                            image: new ol.style.Circle({radius: 4.56, stroke: new ol.style.Stroke({color: "rgba(0,0,0,1.0)", lineDash: null, width: 0}), fill: new ol.style.Fill({color: "rgba(87,118,218,1.0)"})})
                        })
                        ,new ol.style.Style({
                            image: new ol.style.Circle({radius: 0.95, stroke: new ol.style.Stroke({color: "rgba(0,0,0,1.0)", lineDash: null, width: 0}), fill: new ol.style.Fill({color: "rgba(87,118,218,1.0)"})})
                        })
                        ],
"Karassing": [ new ol.style.Style({
                            image: new ol.style.Circle({radius: 4.56, stroke: new ol.style.Stroke({color: "rgba(0,0,0,1.0)", lineDash: null, width: 0}), fill: new ol.style.Fill({color: "rgba(225,120,173,1.0)"})})
                        })
                        ,new ol.style.Style({
                            image: new ol.style.Circle({radius: 0.95, stroke: new ol.style.Stroke({color: "rgba(0,0,0,1.0)", lineDash: null, width: 0}), fill: new ol.style.Fill({color: "rgba(225,120,173,1.0)"})})
                        })
                        ],
"Kasimpureng": [ new ol.style.Style({
                            image: new ol.style.Circle({radius: 4.56, stroke: new ol.style.Stroke({color: "rgba(0,0,0,1.0)", lineDash: null, width: 0}), fill: new ol.style.Fill({color: "rgba(205,91,59,1.0)"})})
                        })
                        ,new ol.style.Style({
                            image: new ol.style.Circle({radius: 0.95, stroke: new ol.style.Stroke({color: "rgba(0,0,0,1.0)", lineDash: null, width: 0}), fill: new ol.style.Fill({color: "rgba(205,91,59,1.0)"})})
                        })
                        ],
"Kindang": [ new ol.style.Style({
                            image: new ol.style.Circle({radius: 4.56, stroke: new ol.style.Stroke({color: "rgba(0,0,0,1.0)", lineDash: null, width: 0}), fill: new ol.style.Fill({color: "rgba(226,148,64,1.0)"})})
                        })
                        ,new ol.style.Style({
                            image: new ol.style.Circle({radius: 0.95, stroke: new ol.style.Stroke({color: "rgba(0,0,0,1.0)", lineDash: null, width: 0}), fill: new ol.style.Fill({color: "rgba(226,148,64,1.0)"})})
                        })
                        ],
"Laikang": [ new ol.style.Style({
                            image: new ol.style.Circle({radius: 4.56, stroke: new ol.style.Stroke({color: "rgba(0,0,0,1.0)", lineDash: null, width: 0}), fill: new ol.style.Fill({color: "rgba(125,209,139,1.0)"})})
                        })
                        ,new ol.style.Style({
                            image: new ol.style.Circle({radius: 0.95, stroke: new ol.style.Stroke({color: "rgba(0,0,0,1.0)", lineDash: null, width: 0}), fill: new ol.style.Fill({color: "rgba(125,209,139,1.0)"})})
                        })
                        ],
"Lembang": [ new ol.style.Style({
                            image: new ol.style.Circle({radius: 4.56, stroke: new ol.style.Stroke({color: "rgba(0,0,0,1.0)", lineDash: null, width: 0}), fill: new ol.style.Fill({color: "rgba(88,213,79,1.0)"})})
                        })
                        ,new ol.style.Style({
                            image: new ol.style.Circle({radius: 0.95, stroke: new ol.style.Stroke({color: "rgba(0,0,0,1.0)", lineDash: null, width: 0}), fill: new ol.style.Fill({color: "rgba(88,213,79,1.0)"})})
                        })
                        ],
"Lembang Lohe": [ new ol.style.Style({
                            image: new ol.style.Circle({radius: 4.56, stroke: new ol.style.Stroke({color: "rgba(0,0,0,1.0)", lineDash: null, width: 0}), fill: new ol.style.Fill({color: "rgba(100,211,135,1.0)"})})
                        })
                        ,new ol.style.Style({
                            image: new ol.style.Circle({radius: 0.95, stroke: new ol.style.Stroke({color: "rgba(0,0,0,1.0)", lineDash: null, width: 0}), fill: new ol.style.Fill({color: "rgba(100,211,135,1.0)"})})
                        })
                        ],
"Lembanna": [ new ol.style.Style({
                            image: new ol.style.Circle({radius: 4.56, stroke: new ol.style.Stroke({color: "rgba(0,0,0,1.0)", lineDash: null, width: 0}), fill: new ol.style.Fill({color: "rgba(105,226,103,1.0)"})})
                        })
                        ,new ol.style.Style({
                            image: new ol.style.Circle({radius: 0.95, stroke: new ol.style.Stroke({color: "rgba(0,0,0,1.0)", lineDash: null, width: 0}), fill: new ol.style.Fill({color: "rgba(105,226,103,1.0)"})})
                        })
                        ],
"Loka": [ new ol.style.Style({
                            image: new ol.style.Circle({radius: 4.56, stroke: new ol.style.Stroke({color: "rgba(0,0,0,1.0)", lineDash: null, width: 0}), fill: new ol.style.Fill({color: "rgba(16,227,164,1.0)"})})
                        })
                        ,new ol.style.Style({
                            image: new ol.style.Circle({radius: 0.95, stroke: new ol.style.Stroke({color: "rgba(0,0,0,1.0)", lineDash: null, width: 0}), fill: new ol.style.Fill({color: "rgba(16,227,164,1.0)"})})
                        })
                        ],
"Lolisang": [ new ol.style.Style({
                            image: new ol.style.Circle({radius: 4.56, stroke: new ol.style.Stroke({color: "rgba(0,0,0,1.0)", lineDash: null, width: 0}), fill: new ol.style.Fill({color: "rgba(119,212,125,1.0)"})})
                        })
                        ,new ol.style.Style({
                            image: new ol.style.Circle({radius: 0.95, stroke: new ol.style.Stroke({color: "rgba(0,0,0,1.0)", lineDash: null, width: 0}), fill: new ol.style.Fill({color: "rgba(119,212,125,1.0)"})})
                        })
                        ],
"Lonrong": [ new ol.style.Style({
                            image: new ol.style.Circle({radius: 4.56, stroke: new ol.style.Stroke({color: "rgba(0,0,0,1.0)", lineDash: null, width: 0}), fill: new ol.style.Fill({color: "rgba(201,97,165,1.0)"})})
                        })
                        ,new ol.style.Style({
                            image: new ol.style.Circle({radius: 0.95, stroke: new ol.style.Stroke({color: "rgba(0,0,0,1.0)", lineDash: null, width: 0}), fill: new ol.style.Fill({color: "rgba(201,97,165,1.0)"})})
                        })
                        ],
"Malleleng": [ new ol.style.Style({
                            image: new ol.style.Circle({radius: 4.56, stroke: new ol.style.Stroke({color: "rgba(0,0,0,1.0)", lineDash: null, width: 0}), fill: new ol.style.Fill({color: "rgba(18,235,214,1.0)"})})
                        })
                        ,new ol.style.Style({
                            image: new ol.style.Circle({radius: 0.95, stroke: new ol.style.Stroke({color: "rgba(0,0,0,1.0)", lineDash: null, width: 0}), fill: new ol.style.Fill({color: "rgba(18,235,214,1.0)"})})
                        })
                        ],
"Manjalling": [ new ol.style.Style({
                            image: new ol.style.Circle({radius: 4.56, stroke: new ol.style.Stroke({color: "rgba(0,0,0,1.0)", lineDash: null, width: 0}), fill: new ol.style.Fill({color: "rgba(24,105,210,1.0)"})})
                        })
                        ,new ol.style.Style({
                            image: new ol.style.Circle({radius: 0.95, stroke: new ol.style.Stroke({color: "rgba(0,0,0,1.0)", lineDash: null, width: 0}), fill: new ol.style.Fill({color: "rgba(24,105,210,1.0)"})})
                        })
                        ],
"Manyampa": [ new ol.style.Style({
                            image: new ol.style.Circle({radius: 4.56, stroke: new ol.style.Stroke({color: "rgba(0,0,0,1.0)", lineDash: null, width: 0}), fill: new ol.style.Fill({color: "rgba(129,200,103,1.0)"})})
                        })
                        ,new ol.style.Style({
                            image: new ol.style.Circle({radius: 0.95, stroke: new ol.style.Stroke({color: "rgba(0,0,0,1.0)", lineDash: null, width: 0}), fill: new ol.style.Fill({color: "rgba(129,200,103,1.0)"})})
                        })
                        ],
"Mariorennu": [ new ol.style.Style({
                            image: new ol.style.Circle({radius: 4.56, stroke: new ol.style.Stroke({color: "rgba(0,0,0,1.0)", lineDash: null, width: 0}), fill: new ol.style.Fill({color: "rgba(150,19,210,1.0)"})})
                        })
                        ,new ol.style.Style({
                            image: new ol.style.Circle({radius: 0.95, stroke: new ol.style.Stroke({color: "rgba(0,0,0,1.0)", lineDash: null, width: 0}), fill: new ol.style.Fill({color: "rgba(150,19,210,1.0)"})})
                        })
                        ],
"Matekko": [ new ol.style.Style({
                            image: new ol.style.Circle({radius: 4.56, stroke: new ol.style.Stroke({color: "rgba(0,0,0,1.0)", lineDash: null, width: 0}), fill: new ol.style.Fill({color: "rgba(190,65,218,1.0)"})})
                        })
                        ,new ol.style.Style({
                            image: new ol.style.Circle({radius: 0.95, stroke: new ol.style.Stroke({color: "rgba(0,0,0,1.0)", lineDash: null, width: 0}), fill: new ol.style.Fill({color: "rgba(190,65,218,1.0)"})})
                        })
                        ],
"Mattirowalie": [ new ol.style.Style({
                            image: new ol.style.Circle({radius: 4.56, stroke: new ol.style.Stroke({color: "rgba(0,0,0,1.0)", lineDash: null, width: 0}), fill: new ol.style.Fill({color: "rgba(209,65,68,1.0)"})})
                        })
                        ,new ol.style.Style({
                            image: new ol.style.Circle({radius: 0.95, stroke: new ol.style.Stroke({color: "rgba(0,0,0,1.0)", lineDash: null, width: 0}), fill: new ol.style.Fill({color: "rgba(209,65,68,1.0)"})})
                        })
                        ],
"Mattoanging": [ new ol.style.Style({
                            image: new ol.style.Circle({radius: 4.56, stroke: new ol.style.Stroke({color: "rgba(0,0,0,1.0)", lineDash: null, width: 0}), fill: new ol.style.Fill({color: "rgba(205,42,78,1.0)"})})
                        })
                        ,new ol.style.Style({
                            image: new ol.style.Circle({radius: 0.95, stroke: new ol.style.Stroke({color: "rgba(0,0,0,1.0)", lineDash: null, width: 0}), fill: new ol.style.Fill({color: "rgba(205,42,78,1.0)"})})
                        })
                        ],
"Orogading": [ new ol.style.Style({
                            image: new ol.style.Circle({radius: 4.56, stroke: new ol.style.Stroke({color: "rgba(0,0,0,1.0)", lineDash: null, width: 0}), fill: new ol.style.Fill({color: "rgba(234,134,209,1.0)"})})
                        })
                        ,new ol.style.Style({
                            image: new ol.style.Circle({radius: 0.95, stroke: new ol.style.Stroke({color: "rgba(0,0,0,1.0)", lineDash: null, width: 0}), fill: new ol.style.Fill({color: "rgba(234,134,209,1.0)"})})
                        })
                        ],
"Padang": [ new ol.style.Style({
                            image: new ol.style.Circle({radius: 4.56, stroke: new ol.style.Stroke({color: "rgba(0,0,0,1.0)", lineDash: null, width: 0}), fill: new ol.style.Fill({color: "rgba(222,186,128,1.0)"})})
                        })
                        ,new ol.style.Style({
                            image: new ol.style.Circle({radius: 0.95, stroke: new ol.style.Stroke({color: "rgba(0,0,0,1.0)", lineDash: null, width: 0}), fill: new ol.style.Fill({color: "rgba(222,186,128,1.0)"})})
                        })
                        ],
"Padangloang": [ new ol.style.Style({
                            image: new ol.style.Circle({radius: 4.56, stroke: new ol.style.Stroke({color: "rgba(0,0,0,1.0)", lineDash: null, width: 0}), fill: new ol.style.Fill({color: "rgba(88,218,149,1.0)"})})
                        })
                        ,new ol.style.Style({
                            image: new ol.style.Circle({radius: 0.95, stroke: new ol.style.Stroke({color: "rgba(0,0,0,1.0)", lineDash: null, width: 0}), fill: new ol.style.Fill({color: "rgba(88,218,149,1.0)"})})
                        })
                        ],
"Paenrelompoe": [ new ol.style.Style({
                            image: new ol.style.Circle({radius: 4.56, stroke: new ol.style.Stroke({color: "rgba(0,0,0,1.0)", lineDash: null, width: 0}), fill: new ol.style.Fill({color: "rgba(211,44,236,1.0)"})})
                        })
                        ,new ol.style.Style({
                            image: new ol.style.Circle({radius: 0.95, stroke: new ol.style.Stroke({color: "rgba(0,0,0,1.0)", lineDash: null, width: 0}), fill: new ol.style.Fill({color: "rgba(211,44,236,1.0)"})})
                        })
                        ],
"Pakubalaho": [ new ol.style.Style({
                            image: new ol.style.Circle({radius: 4.56, stroke: new ol.style.Stroke({color: "rgba(0,0,0,1.0)", lineDash: null, width: 0}), fill: new ol.style.Fill({color: "rgba(49,215,110,1.0)"})})
                        })
                        ,new ol.style.Style({
                            image: new ol.style.Circle({radius: 0.95, stroke: new ol.style.Stroke({color: "rgba(0,0,0,1.0)", lineDash: null, width: 0}), fill: new ol.style.Fill({color: "rgba(49,215,110,1.0)"})})
                        })
                        ],
"Palambarae": [ new ol.style.Style({
                            image: new ol.style.Circle({radius: 4.56, stroke: new ol.style.Stroke({color: "rgba(0,0,0,1.0)", lineDash: null, width: 0}), fill: new ol.style.Fill({color: "rgba(99,165,236,1.0)"})})
                        })
                        ,new ol.style.Style({
                            image: new ol.style.Circle({radius: 0.95, stroke: new ol.style.Stroke({color: "rgba(0,0,0,1.0)", lineDash: null, width: 0}), fill: new ol.style.Fill({color: "rgba(99,165,236,1.0)"})})
                        })
                        ],
"Palampang": [ new ol.style.Style({
                            image: new ol.style.Circle({radius: 4.56, stroke: new ol.style.Stroke({color: "rgba(0,0,0,1.0)", lineDash: null, width: 0}), fill: new ol.style.Fill({color: "rgba(234,88,190,1.0)"})})
                        })
                        ,new ol.style.Style({
                            image: new ol.style.Circle({radius: 0.95, stroke: new ol.style.Stroke({color: "rgba(0,0,0,1.0)", lineDash: null, width: 0}), fill: new ol.style.Fill({color: "rgba(234,88,190,1.0)"})})
                        })
                        ],
"Pantama": [ new ol.style.Style({
                            image: new ol.style.Circle({radius: 4.56, stroke: new ol.style.Stroke({color: "rgba(0,0,0,1.0)", lineDash: null, width: 0}), fill: new ol.style.Fill({color: "rgba(161,215,60,1.0)"})})
                        })
                        ,new ol.style.Style({
                            image: new ol.style.Circle({radius: 0.95, stroke: new ol.style.Stroke({color: "rgba(0,0,0,1.0)", lineDash: null, width: 0}), fill: new ol.style.Fill({color: "rgba(161,215,60,1.0)"})})
                        })
                        ],
"Pataro": [ new ol.style.Style({
                            image: new ol.style.Circle({radius: 4.56, stroke: new ol.style.Stroke({color: "rgba(0,0,0,1.0)", lineDash: null, width: 0}), fill: new ol.style.Fill({color: "rgba(92,92,234,1.0)"})})
                        })
                        ,new ol.style.Style({
                            image: new ol.style.Circle({radius: 0.95, stroke: new ol.style.Stroke({color: "rgba(0,0,0,1.0)", lineDash: null, width: 0}), fill: new ol.style.Fill({color: "rgba(92,92,234,1.0)"})})
                        })
                        ],
"Pattiroang": [ new ol.style.Style({
                            image: new ol.style.Circle({radius: 4.56, stroke: new ol.style.Stroke({color: "rgba(0,0,0,1.0)", lineDash: null, width: 0}), fill: new ol.style.Fill({color: "rgba(203,208,99,1.0)"})})
                        })
                        ,new ol.style.Style({
                            image: new ol.style.Circle({radius: 0.95, stroke: new ol.style.Stroke({color: "rgba(0,0,0,1.0)", lineDash: null, width: 0}), fill: new ol.style.Fill({color: "rgba(203,208,99,1.0)"})})
                        })
                        ],
"Polewali": [ new ol.style.Style({
                            image: new ol.style.Circle({radius: 4.56, stroke: new ol.style.Stroke({color: "rgba(0,0,0,1.0)", lineDash: null, width: 0}), fill: new ol.style.Fill({color: "rgba(208,237,14,1.0)"})})
                        })
                        ,new ol.style.Style({
                            image: new ol.style.Circle({radius: 0.95, stroke: new ol.style.Stroke({color: "rgba(0,0,0,1.0)", lineDash: null, width: 0}), fill: new ol.style.Fill({color: "rgba(208,237,14,1.0)"})})
                        })
                        ],
"Possitana": [ new ol.style.Style({
                            image: new ol.style.Circle({radius: 4.56, stroke: new ol.style.Stroke({color: "rgba(0,0,0,1.0)", lineDash: null, width: 0}), fill: new ol.style.Fill({color: "rgba(190,201,63,1.0)"})})
                        })
                        ,new ol.style.Style({
                            image: new ol.style.Circle({radius: 0.95, stroke: new ol.style.Stroke({color: "rgba(0,0,0,1.0)", lineDash: null, width: 0}), fill: new ol.style.Fill({color: "rgba(190,201,63,1.0)"})})
                        })
                        ],
"Salassae": [ new ol.style.Style({
                            image: new ol.style.Circle({radius: 4.56, stroke: new ol.style.Stroke({color: "rgba(0,0,0,1.0)", lineDash: null, width: 0}), fill: new ol.style.Fill({color: "rgba(209,131,86,1.0)"})})
                        })
                        ,new ol.style.Style({
                            image: new ol.style.Circle({radius: 0.95, stroke: new ol.style.Stroke({color: "rgba(0,0,0,1.0)", lineDash: null, width: 0}), fill: new ol.style.Fill({color: "rgba(209,131,86,1.0)"})})
                        })
                        ],
"Salemba": [ new ol.style.Style({
                            image: new ol.style.Circle({radius: 4.56, stroke: new ol.style.Stroke({color: "rgba(0,0,0,1.0)", lineDash: null, width: 0}), fill: new ol.style.Fill({color: "rgba(162,70,228,1.0)"})})
                        })
                        ,new ol.style.Style({
                            image: new ol.style.Circle({radius: 0.95, stroke: new ol.style.Stroke({color: "rgba(0,0,0,1.0)", lineDash: null, width: 0}), fill: new ol.style.Fill({color: "rgba(162,70,228,1.0)"})})
                        })
                        ],
"Sangkala": [ new ol.style.Style({
                            image: new ol.style.Circle({radius: 4.56, stroke: new ol.style.Stroke({color: "rgba(0,0,0,1.0)", lineDash: null, width: 0}), fill: new ol.style.Fill({color: "rgba(99,144,215,1.0)"})})
                        })
                        ,new ol.style.Style({
                            image: new ol.style.Circle({radius: 0.95, stroke: new ol.style.Stroke({color: "rgba(0,0,0,1.0)", lineDash: null, width: 0}), fill: new ol.style.Fill({color: "rgba(99,144,215,1.0)"})})
                        })
                        ],
"Sapanang": [ new ol.style.Style({
                            image: new ol.style.Circle({radius: 4.56, stroke: new ol.style.Stroke({color: "rgba(0,0,0,1.0)", lineDash: null, width: 0}), fill: new ol.style.Fill({color: "rgba(151,239,63,1.0)"})})
                        })
                        ,new ol.style.Style({
                            image: new ol.style.Circle({radius: 0.95, stroke: new ol.style.Stroke({color: "rgba(0,0,0,1.0)", lineDash: null, width: 0}), fill: new ol.style.Fill({color: "rgba(151,239,63,1.0)"})})
                        })
                        ],
"Sapebonto": [ new ol.style.Style({
                            image: new ol.style.Circle({radius: 4.56, stroke: new ol.style.Stroke({color: "rgba(0,0,0,1.0)", lineDash: null, width: 0}), fill: new ol.style.Fill({color: "rgba(230,111,240,1.0)"})})
                        })
                        ,new ol.style.Style({
                            image: new ol.style.Circle({radius: 0.95, stroke: new ol.style.Stroke({color: "rgba(0,0,0,1.0)", lineDash: null, width: 0}), fill: new ol.style.Fill({color: "rgba(230,111,240,1.0)"})})
                        })
                        ],
"Sapolohe": [ new ol.style.Style({
                            image: new ol.style.Circle({radius: 4.56, stroke: new ol.style.Stroke({color: "rgba(0,0,0,1.0)", lineDash: null, width: 0}), fill: new ol.style.Fill({color: "rgba(115,224,161,1.0)"})})
                        })
                        ,new ol.style.Style({
                            image: new ol.style.Circle({radius: 0.95, stroke: new ol.style.Stroke({color: "rgba(0,0,0,1.0)", lineDash: null, width: 0}), fill: new ol.style.Fill({color: "rgba(115,224,161,1.0)"})})
                        })
                        ],
"Seppang": [ new ol.style.Style({
                            image: new ol.style.Circle({radius: 4.56, stroke: new ol.style.Stroke({color: "rgba(0,0,0,1.0)", lineDash: null, width: 0}), fill: new ol.style.Fill({color: "rgba(214,61,122,1.0)"})})
                        })
                        ,new ol.style.Style({
                            image: new ol.style.Circle({radius: 0.95, stroke: new ol.style.Stroke({color: "rgba(0,0,0,1.0)", lineDash: null, width: 0}), fill: new ol.style.Fill({color: "rgba(214,61,122,1.0)"})})
                        })
                        ],
"Singa": [ new ol.style.Style({
                            image: new ol.style.Circle({radius: 4.56, stroke: new ol.style.Stroke({color: "rgba(0,0,0,1.0)", lineDash: null, width: 0}), fill: new ol.style.Fill({color: "rgba(152,213,61,1.0)"})})
                        })
                        ,new ol.style.Style({
                            image: new ol.style.Circle({radius: 0.95, stroke: new ol.style.Stroke({color: "rgba(0,0,0,1.0)", lineDash: null, width: 0}), fill: new ol.style.Fill({color: "rgba(152,213,61,1.0)"})})
                        })
                        ],
"Swatani": [ new ol.style.Style({
                            image: new ol.style.Circle({radius: 4.56, stroke: new ol.style.Stroke({color: "rgba(0,0,0,1.0)", lineDash: null, width: 0}), fill: new ol.style.Fill({color: "rgba(232,187,52,1.0)"})})
                        })
                        ,new ol.style.Style({
                            image: new ol.style.Circle({radius: 0.95, stroke: new ol.style.Stroke({color: "rgba(0,0,0,1.0)", lineDash: null, width: 0}), fill: new ol.style.Fill({color: "rgba(232,187,52,1.0)"})})
                        })
                        ],
"Tamalanrea": [ new ol.style.Style({
                            image: new ol.style.Circle({radius: 4.56, stroke: new ol.style.Stroke({color: "rgba(0,0,0,1.0)", lineDash: null, width: 0}), fill: new ol.style.Fill({color: "rgba(150,119,222,1.0)"})})
                        })
                        ,new ol.style.Style({
                            image: new ol.style.Circle({radius: 0.95, stroke: new ol.style.Stroke({color: "rgba(0,0,0,1.0)", lineDash: null, width: 0}), fill: new ol.style.Fill({color: "rgba(150,119,222,1.0)"})})
                        })
                        ],
"Tamaona": [ new ol.style.Style({
                            image: new ol.style.Circle({radius: 4.56, stroke: new ol.style.Stroke({color: "rgba(0,0,0,1.0)", lineDash: null, width: 0}), fill: new ol.style.Fill({color: "rgba(205,107,166,1.0)"})})
                        })
                        ,new ol.style.Style({
                            image: new ol.style.Circle({radius: 0.95, stroke: new ol.style.Stroke({color: "rgba(0,0,0,1.0)", lineDash: null, width: 0}), fill: new ol.style.Fill({color: "rgba(205,107,166,1.0)"})})
                        })
                        ],
"Tambangan": [ new ol.style.Style({
                            image: new ol.style.Circle({radius: 4.56, stroke: new ol.style.Stroke({color: "rgba(0,0,0,1.0)", lineDash: null, width: 0}), fill: new ol.style.Fill({color: "rgba(134,220,84,1.0)"})})
                        })
                        ,new ol.style.Style({
                            image: new ol.style.Circle({radius: 0.95, stroke: new ol.style.Stroke({color: "rgba(0,0,0,1.0)", lineDash: null, width: 0}), fill: new ol.style.Fill({color: "rgba(134,220,84,1.0)"})})
                        })
                        ],
"Tammatto": [ new ol.style.Style({
                            image: new ol.style.Circle({radius: 4.56, stroke: new ol.style.Stroke({color: "rgba(0,0,0,1.0)", lineDash: null, width: 0}), fill: new ol.style.Fill({color: "rgba(133,107,236,1.0)"})})
                        })
                        ,new ol.style.Style({
                            image: new ol.style.Circle({radius: 0.95, stroke: new ol.style.Stroke({color: "rgba(0,0,0,1.0)", lineDash: null, width: 0}), fill: new ol.style.Fill({color: "rgba(133,107,236,1.0)"})})
                        })
                        ],
"Tanah Beru": [ new ol.style.Style({
                            image: new ol.style.Circle({radius: 4.56, stroke: new ol.style.Stroke({color: "rgba(0,0,0,1.0)", lineDash: null, width: 0}), fill: new ol.style.Fill({color: "rgba(219,148,16,1.0)"})})
                        })
                        ,new ol.style.Style({
                            image: new ol.style.Circle({radius: 0.95, stroke: new ol.style.Stroke({color: "rgba(0,0,0,1.0)", lineDash: null, width: 0}), fill: new ol.style.Fill({color: "rgba(219,148,16,1.0)"})})
                        })
                        ],
"Tanah Harapan": [ new ol.style.Style({
                            image: new ol.style.Circle({radius: 4.56, stroke: new ol.style.Stroke({color: "rgba(0,0,0,1.0)", lineDash: null, width: 0}), fill: new ol.style.Fill({color: "rgba(93,233,28,1.0)"})})
                        })
                        ,new ol.style.Style({
                            image: new ol.style.Circle({radius: 0.95, stroke: new ol.style.Stroke({color: "rgba(0,0,0,1.0)", lineDash: null, width: 0}), fill: new ol.style.Fill({color: "rgba(93,233,28,1.0)"})})
                        })
                        ],
"Tanah Jaya": [ new ol.style.Style({
                            image: new ol.style.Circle({radius: 4.56, stroke: new ol.style.Stroke({color: "rgba(0,0,0,1.0)", lineDash: null, width: 0}), fill: new ol.style.Fill({color: "rgba(235,225,17,1.0)"})})
                        })
                        ,new ol.style.Style({
                            image: new ol.style.Circle({radius: 0.95, stroke: new ol.style.Stroke({color: "rgba(0,0,0,1.0)", lineDash: null, width: 0}), fill: new ol.style.Fill({color: "rgba(235,225,17,1.0)"})})
                        })
                        ],
"Tanah Kongkong": [ new ol.style.Style({
                            image: new ol.style.Circle({radius: 4.56, stroke: new ol.style.Stroke({color: "rgba(0,0,0,1.0)", lineDash: null, width: 0}), fill: new ol.style.Fill({color: "rgba(123,158,226,1.0)"})})
                        })
                        ,new ol.style.Style({
                            image: new ol.style.Circle({radius: 0.95, stroke: new ol.style.Stroke({color: "rgba(0,0,0,1.0)", lineDash: null, width: 0}), fill: new ol.style.Fill({color: "rgba(123,158,226,1.0)"})})
                        })
                        ],
"Tanah Lemo": [ new ol.style.Style({
                            image: new ol.style.Circle({radius: 4.56, stroke: new ol.style.Stroke({color: "rgba(0,0,0,1.0)", lineDash: null, width: 0}), fill: new ol.style.Fill({color: "rgba(184,124,206,1.0)"})})
                        })
                        ,new ol.style.Style({
                            image: new ol.style.Circle({radius: 0.95, stroke: new ol.style.Stroke({color: "rgba(0,0,0,1.0)", lineDash: null, width: 0}), fill: new ol.style.Fill({color: "rgba(184,124,206,1.0)"})})
                        })
                        ],
"Tanatoa": [ new ol.style.Style({
                            image: new ol.style.Circle({radius: 4.56, stroke: new ol.style.Stroke({color: "rgba(0,0,0,1.0)", lineDash: null, width: 0}), fill: new ol.style.Fill({color: "rgba(35,222,185,1.0)"})})
                        })
                        ,new ol.style.Style({
                            image: new ol.style.Circle({radius: 0.95, stroke: new ol.style.Stroke({color: "rgba(0,0,0,1.0)", lineDash: null, width: 0}), fill: new ol.style.Fill({color: "rgba(35,222,185,1.0)"})})
                        })
                        ],
"Tanete": [ new ol.style.Style({
                            image: new ol.style.Circle({radius: 4.56, stroke: new ol.style.Stroke({color: "rgba(0,0,0,1.0)", lineDash: null, width: 0}), fill: new ol.style.Fill({color: "rgba(104,224,118,1.0)"})})
                        })
                        ,new ol.style.Style({
                            image: new ol.style.Circle({radius: 0.95, stroke: new ol.style.Stroke({color: "rgba(0,0,0,1.0)", lineDash: null, width: 0}), fill: new ol.style.Fill({color: "rgba(104,224,118,1.0)"})})
                        })
                        ],
"Tanuntung": [ new ol.style.Style({
                            image: new ol.style.Circle({radius: 4.56, stroke: new ol.style.Stroke({color: "rgba(0,0,0,1.0)", lineDash: null, width: 0}), fill: new ol.style.Fill({color: "rgba(59,201,214,1.0)"})})
                        })
                        ,new ol.style.Style({
                            image: new ol.style.Circle({radius: 0.95, stroke: new ol.style.Stroke({color: "rgba(0,0,0,1.0)", lineDash: null, width: 0}), fill: new ol.style.Fill({color: "rgba(59,201,214,1.0)"})})
                        })
                        ],
"Terang-terang": [ new ol.style.Style({
                            image: new ol.style.Circle({radius: 4.56, stroke: new ol.style.Stroke({color: "rgba(0,0,0,1.0)", lineDash: null, width: 0}), fill: new ol.style.Fill({color: "rgba(211,63,201,1.0)"})})
                        })
                        ,new ol.style.Style({
                            image: new ol.style.Circle({radius: 0.95, stroke: new ol.style.Stroke({color: "rgba(0,0,0,1.0)", lineDash: null, width: 0}), fill: new ol.style.Fill({color: "rgba(211,63,201,1.0)"})})
                        })
                        ],
"Tibona": [ new ol.style.Style({
                            image: new ol.style.Circle({radius: 4.56, stroke: new ol.style.Stroke({color: "rgba(0,0,0,1.0)", lineDash: null, width: 0}), fill: new ol.style.Fill({color: "rgba(91,205,116,1.0)"})})
                        })
                        ,new ol.style.Style({
                            image: new ol.style.Circle({radius: 0.95, stroke: new ol.style.Stroke({color: "rgba(0,0,0,1.0)", lineDash: null, width: 0}), fill: new ol.style.Fill({color: "rgba(91,205,116,1.0)"})})
                        })
                        ],
"Tri Tiro": [ new ol.style.Style({
                            image: new ol.style.Circle({radius: 4.56, stroke: new ol.style.Stroke({color: "rgba(0,0,0,1.0)", lineDash: null, width: 0}), fill: new ol.style.Fill({color: "rgba(219,152,121,1.0)"})})
                        })
                        ,new ol.style.Style({
                            image: new ol.style.Circle({radius: 0.95, stroke: new ol.style.Stroke({color: "rgba(0,0,0,1.0)", lineDash: null, width: 0}), fill: new ol.style.Fill({color: "rgba(219,152,121,1.0)"})})
                        })
                        ],
"Tugondeng": [ new ol.style.Style({
                            image: new ol.style.Circle({radius: 4.56, stroke: new ol.style.Stroke({color: "rgba(0,0,0,1.0)", lineDash: null, width: 0}), fill: new ol.style.Fill({color: "rgba(54,100,218,1.0)"})})
                        })
                        ,new ol.style.Style({
                            image: new ol.style.Circle({radius: 0.95, stroke: new ol.style.Stroke({color: "rgba(0,0,0,1.0)", lineDash: null, width: 0}), fill: new ol.style.Fill({color: "rgba(54,100,218,1.0)"})})
                        })
                        ],
"": [ new ol.style.Style({
                            image: new ol.style.Circle({radius: 4.56, stroke: new ol.style.Stroke({color: "rgba(0,0,0,1.0)", lineDash: null, width: 0}), fill: new ol.style.Fill({color: "rgba(117,135,216,1.0)"})})
                        })
                        ,new ol.style.Style({
                            image: new ol.style.Circle({radius: 0.95, stroke: new ol.style.Stroke({color: "rgba(0,0,0,1.0)", lineDash: null, width: 0}), fill: new ol.style.Fill({color: "rgba(117,135,216,1.0)"})})
                        })
                        ]};var categoriesSelected_toponimi = {"Anrang": [ new ol.style.Style({
                            image: new ol.style.Circle({radius: 4.56, stroke: new ol.style.Stroke({color: "rgba(255, 204, 0, 1)", lineDash: null, width: 0}), fill: new ol.style.Fill({color: "rgba(255, 204, 0, 1)"})})
                        })
                        ,new ol.style.Style({
                            image: new ol.style.Circle({radius: 0.95, stroke: new ol.style.Stroke({color: "rgba(255, 204, 0, 1)", lineDash: null, width: 0}), fill: new ol.style.Fill({color: "rgba(255, 204, 0, 1)"})})
                        })
                        ],
"Anrihua": [ new ol.style.Style({
                            image: new ol.style.Circle({radius: 4.56, stroke: new ol.style.Stroke({color: "rgba(255, 204, 0, 1)", lineDash: null, width: 0}), fill: new ol.style.Fill({color: "rgba(255, 204, 0, 1)"})})
                        })
                        ,new ol.style.Style({
                            image: new ol.style.Circle({radius: 0.95, stroke: new ol.style.Stroke({color: "rgba(255, 204, 0, 1)", lineDash: null, width: 0}), fill: new ol.style.Fill({color: "rgba(255, 204, 0, 1)"})})
                        })
                        ],
"Ara": [ new ol.style.Style({
                            image: new ol.style.Circle({radius: 4.56, stroke: new ol.style.Stroke({color: "rgba(255, 204, 0, 1)", lineDash: null, width: 0}), fill: new ol.style.Fill({color: "rgba(255, 204, 0, 1)"})})
                        })
                        ,new ol.style.Style({
                            image: new ol.style.Circle({radius: 0.95, stroke: new ol.style.Stroke({color: "rgba(255, 204, 0, 1)", lineDash: null, width: 0}), fill: new ol.style.Fill({color: "rgba(255, 204, 0, 1)"})})
                        })
                        ],
"Baji Minasa": [ new ol.style.Style({
                            image: new ol.style.Circle({radius: 4.56, stroke: new ol.style.Stroke({color: "rgba(255, 204, 0, 1)", lineDash: null, width: 0}), fill: new ol.style.Fill({color: "rgba(255, 204, 0, 1)"})})
                        })
                        ,new ol.style.Style({
                            image: new ol.style.Circle({radius: 0.95, stroke: new ol.style.Stroke({color: "rgba(255, 204, 0, 1)", lineDash: null, width: 0}), fill: new ol.style.Fill({color: "rgba(255, 204, 0, 1)"})})
                        })
                        ],
"Balangpesoang": [ new ol.style.Style({
                            image: new ol.style.Circle({radius: 4.56, stroke: new ol.style.Stroke({color: "rgba(255, 204, 0, 1)", lineDash: null, width: 0}), fill: new ol.style.Fill({color: "rgba(255, 204, 0, 1)"})})
                        })
                        ,new ol.style.Style({
                            image: new ol.style.Circle({radius: 0.95, stroke: new ol.style.Stroke({color: "rgba(255, 204, 0, 1)", lineDash: null, width: 0}), fill: new ol.style.Fill({color: "rgba(255, 204, 0, 1)"})})
                        })
                        ],
"Balangtoroang": [ new ol.style.Style({
                            image: new ol.style.Circle({radius: 4.56, stroke: new ol.style.Stroke({color: "rgba(255, 204, 0, 1)", lineDash: null, width: 0}), fill: new ol.style.Fill({color: "rgba(255, 204, 0, 1)"})})
                        })
                        ,new ol.style.Style({
                            image: new ol.style.Circle({radius: 0.95, stroke: new ol.style.Stroke({color: "rgba(255, 204, 0, 1)", lineDash: null, width: 0}), fill: new ol.style.Fill({color: "rgba(255, 204, 0, 1)"})})
                        })
                        ],
"Balibo": [ new ol.style.Style({
                            image: new ol.style.Circle({radius: 4.56, stroke: new ol.style.Stroke({color: "rgba(255, 204, 0, 1)", lineDash: null, width: 0}), fill: new ol.style.Fill({color: "rgba(255, 204, 0, 1)"})})
                        })
                        ,new ol.style.Style({
                            image: new ol.style.Circle({radius: 0.95, stroke: new ol.style.Stroke({color: "rgba(255, 204, 0, 1)", lineDash: null, width: 0}), fill: new ol.style.Fill({color: "rgba(255, 204, 0, 1)"})})
                        })
                        ],
"Balla Saraja": [ new ol.style.Style({
                            image: new ol.style.Circle({radius: 4.56, stroke: new ol.style.Stroke({color: "rgba(255, 204, 0, 1)", lineDash: null, width: 0}), fill: new ol.style.Fill({color: "rgba(255, 204, 0, 1)"})})
                        })
                        ,new ol.style.Style({
                            image: new ol.style.Circle({radius: 0.95, stroke: new ol.style.Stroke({color: "rgba(255, 204, 0, 1)", lineDash: null, width: 0}), fill: new ol.style.Fill({color: "rgba(255, 204, 0, 1)"})})
                        })
                        ],
"Balleanging": [ new ol.style.Style({
                            image: new ol.style.Circle({radius: 4.56, stroke: new ol.style.Stroke({color: "rgba(255, 204, 0, 1)", lineDash: null, width: 0}), fill: new ol.style.Fill({color: "rgba(255, 204, 0, 1)"})})
                        })
                        ,new ol.style.Style({
                            image: new ol.style.Circle({radius: 0.95, stroke: new ol.style.Stroke({color: "rgba(255, 204, 0, 1)", lineDash: null, width: 0}), fill: new ol.style.Fill({color: "rgba(255, 204, 0, 1)"})})
                        })
                        ],
"Balong": [ new ol.style.Style({
                            image: new ol.style.Circle({radius: 4.56, stroke: new ol.style.Stroke({color: "rgba(255, 204, 0, 1)", lineDash: null, width: 0}), fill: new ol.style.Fill({color: "rgba(255, 204, 0, 1)"})})
                        })
                        ,new ol.style.Style({
                            image: new ol.style.Circle({radius: 0.95, stroke: new ol.style.Stroke({color: "rgba(255, 204, 0, 1)", lineDash: null, width: 0}), fill: new ol.style.Fill({color: "rgba(255, 204, 0, 1)"})})
                        })
                        ],
"Barombong": [ new ol.style.Style({
                            image: new ol.style.Circle({radius: 4.56, stroke: new ol.style.Stroke({color: "rgba(255, 204, 0, 1)", lineDash: null, width: 0}), fill: new ol.style.Fill({color: "rgba(255, 204, 0, 1)"})})
                        })
                        ,new ol.style.Style({
                            image: new ol.style.Circle({radius: 0.95, stroke: new ol.style.Stroke({color: "rgba(255, 204, 0, 1)", lineDash: null, width: 0}), fill: new ol.style.Fill({color: "rgba(255, 204, 0, 1)"})})
                        })
                        ],
"Barugae": [ new ol.style.Style({
                            image: new ol.style.Circle({radius: 4.56, stroke: new ol.style.Stroke({color: "rgba(255, 204, 0, 1)", lineDash: null, width: 0}), fill: new ol.style.Fill({color: "rgba(255, 204, 0, 1)"})})
                        })
                        ,new ol.style.Style({
                            image: new ol.style.Circle({radius: 0.95, stroke: new ol.style.Stroke({color: "rgba(255, 204, 0, 1)", lineDash: null, width: 0}), fill: new ol.style.Fill({color: "rgba(255, 204, 0, 1)"})})
                        })
                        ],
"Batang": [ new ol.style.Style({
                            image: new ol.style.Circle({radius: 4.56, stroke: new ol.style.Stroke({color: "rgba(255, 204, 0, 1)", lineDash: null, width: 0}), fill: new ol.style.Fill({color: "rgba(255, 204, 0, 1)"})})
                        })
                        ,new ol.style.Style({
                            image: new ol.style.Circle({radius: 0.95, stroke: new ol.style.Stroke({color: "rgba(255, 204, 0, 1)", lineDash: null, width: 0}), fill: new ol.style.Fill({color: "rgba(255, 204, 0, 1)"})})
                        })
                        ],
"Batu Nilamung": [ new ol.style.Style({
                            image: new ol.style.Circle({radius: 4.56, stroke: new ol.style.Stroke({color: "rgba(255, 204, 0, 1)", lineDash: null, width: 0}), fill: new ol.style.Fill({color: "rgba(255, 204, 0, 1)"})})
                        })
                        ,new ol.style.Style({
                            image: new ol.style.Circle({radius: 0.95, stroke: new ol.style.Stroke({color: "rgba(255, 204, 0, 1)", lineDash: null, width: 0}), fill: new ol.style.Fill({color: "rgba(255, 204, 0, 1)"})})
                        })
                        ],
"Batukaropa": [ new ol.style.Style({
                            image: new ol.style.Circle({radius: 4.56, stroke: new ol.style.Stroke({color: "rgba(255, 204, 0, 1)", lineDash: null, width: 0}), fill: new ol.style.Fill({color: "rgba(255, 204, 0, 1)"})})
                        })
                        ,new ol.style.Style({
                            image: new ol.style.Circle({radius: 0.95, stroke: new ol.style.Stroke({color: "rgba(255, 204, 0, 1)", lineDash: null, width: 0}), fill: new ol.style.Fill({color: "rgba(255, 204, 0, 1)"})})
                        })
                        ],
"Batulohe": [ new ol.style.Style({
                            image: new ol.style.Circle({radius: 4.56, stroke: new ol.style.Stroke({color: "rgba(255, 204, 0, 1)", lineDash: null, width: 0}), fill: new ol.style.Fill({color: "rgba(255, 204, 0, 1)"})})
                        })
                        ,new ol.style.Style({
                            image: new ol.style.Circle({radius: 0.95, stroke: new ol.style.Stroke({color: "rgba(255, 204, 0, 1)", lineDash: null, width: 0}), fill: new ol.style.Fill({color: "rgba(255, 204, 0, 1)"})})
                        })
                        ],
"Benjala": [ new ol.style.Style({
                            image: new ol.style.Circle({radius: 4.56, stroke: new ol.style.Stroke({color: "rgba(255, 204, 0, 1)", lineDash: null, width: 0}), fill: new ol.style.Fill({color: "rgba(255, 204, 0, 1)"})})
                        })
                        ,new ol.style.Style({
                            image: new ol.style.Circle({radius: 0.95, stroke: new ol.style.Stroke({color: "rgba(255, 204, 0, 1)", lineDash: null, width: 0}), fill: new ol.style.Fill({color: "rgba(255, 204, 0, 1)"})})
                        })
                        ],
"Benteng Gattareng": [ new ol.style.Style({
                            image: new ol.style.Circle({radius: 4.56, stroke: new ol.style.Stroke({color: "rgba(255, 204, 0, 1)", lineDash: null, width: 0}), fill: new ol.style.Fill({color: "rgba(255, 204, 0, 1)"})})
                        })
                        ,new ol.style.Style({
                            image: new ol.style.Circle({radius: 0.95, stroke: new ol.style.Stroke({color: "rgba(255, 204, 0, 1)", lineDash: null, width: 0}), fill: new ol.style.Fill({color: "rgba(255, 204, 0, 1)"})})
                        })
                        ],
"Benteng Malewang": [ new ol.style.Style({
                            image: new ol.style.Circle({radius: 4.56, stroke: new ol.style.Stroke({color: "rgba(255, 204, 0, 1)", lineDash: null, width: 0}), fill: new ol.style.Fill({color: "rgba(255, 204, 0, 1)"})})
                        })
                        ,new ol.style.Style({
                            image: new ol.style.Circle({radius: 0.95, stroke: new ol.style.Stroke({color: "rgba(255, 204, 0, 1)", lineDash: null, width: 0}), fill: new ol.style.Fill({color: "rgba(255, 204, 0, 1)"})})
                        })
                        ],
"Benteng Palioi": [ new ol.style.Style({
                            image: new ol.style.Circle({radius: 4.56, stroke: new ol.style.Stroke({color: "rgba(255, 204, 0, 1)", lineDash: null, width: 0}), fill: new ol.style.Fill({color: "rgba(255, 204, 0, 1)"})})
                        })
                        ,new ol.style.Style({
                            image: new ol.style.Circle({radius: 0.95, stroke: new ol.style.Stroke({color: "rgba(255, 204, 0, 1)", lineDash: null, width: 0}), fill: new ol.style.Fill({color: "rgba(255, 204, 0, 1)"})})
                        })
                        ],
"Bentengnge": [ new ol.style.Style({
                            image: new ol.style.Circle({radius: 4.56, stroke: new ol.style.Stroke({color: "rgba(255, 204, 0, 1)", lineDash: null, width: 0}), fill: new ol.style.Fill({color: "rgba(255, 204, 0, 1)"})})
                        })
                        ,new ol.style.Style({
                            image: new ol.style.Circle({radius: 0.95, stroke: new ol.style.Stroke({color: "rgba(255, 204, 0, 1)", lineDash: null, width: 0}), fill: new ol.style.Fill({color: "rgba(255, 204, 0, 1)"})})
                        })
                        ],
"Bialo": [ new ol.style.Style({
                            image: new ol.style.Circle({radius: 4.56, stroke: new ol.style.Stroke({color: "rgba(255, 204, 0, 1)", lineDash: null, width: 0}), fill: new ol.style.Fill({color: "rgba(255, 204, 0, 1)"})})
                        })
                        ,new ol.style.Style({
                            image: new ol.style.Circle({radius: 0.95, stroke: new ol.style.Stroke({color: "rgba(255, 204, 0, 1)", lineDash: null, width: 0}), fill: new ol.style.Fill({color: "rgba(255, 204, 0, 1)"})})
                        })
                        ],
"Bijawang": [ new ol.style.Style({
                            image: new ol.style.Circle({radius: 4.56, stroke: new ol.style.Stroke({color: "rgba(255, 204, 0, 1)", lineDash: null, width: 0}), fill: new ol.style.Fill({color: "rgba(255, 204, 0, 1)"})})
                        })
                        ,new ol.style.Style({
                            image: new ol.style.Circle({radius: 0.95, stroke: new ol.style.Stroke({color: "rgba(255, 204, 0, 1)", lineDash: null, width: 0}), fill: new ol.style.Fill({color: "rgba(255, 204, 0, 1)"})})
                        })
                        ],
"Bintarore": [ new ol.style.Style({
                            image: new ol.style.Circle({radius: 4.56, stroke: new ol.style.Stroke({color: "rgba(255, 204, 0, 1)", lineDash: null, width: 0}), fill: new ol.style.Fill({color: "rgba(255, 204, 0, 1)"})})
                        })
                        ,new ol.style.Style({
                            image: new ol.style.Circle({radius: 0.95, stroke: new ol.style.Stroke({color: "rgba(255, 204, 0, 1)", lineDash: null, width: 0}), fill: new ol.style.Fill({color: "rgba(255, 204, 0, 1)"})})
                        })
                        ],
"Bira": [ new ol.style.Style({
                            image: new ol.style.Circle({radius: 4.56, stroke: new ol.style.Stroke({color: "rgba(255, 204, 0, 1)", lineDash: null, width: 0}), fill: new ol.style.Fill({color: "rgba(255, 204, 0, 1)"})})
                        })
                        ,new ol.style.Style({
                            image: new ol.style.Circle({radius: 0.95, stroke: new ol.style.Stroke({color: "rgba(255, 204, 0, 1)", lineDash: null, width: 0}), fill: new ol.style.Fill({color: "rgba(255, 204, 0, 1)"})})
                        })
                        ],
"Bonto Baji": [ new ol.style.Style({
                            image: new ol.style.Circle({radius: 4.56, stroke: new ol.style.Stroke({color: "rgba(255, 204, 0, 1)", lineDash: null, width: 0}), fill: new ol.style.Fill({color: "rgba(255, 204, 0, 1)"})})
                        })
                        ,new ol.style.Style({
                            image: new ol.style.Circle({radius: 0.95, stroke: new ol.style.Stroke({color: "rgba(255, 204, 0, 1)", lineDash: null, width: 0}), fill: new ol.style.Fill({color: "rgba(255, 204, 0, 1)"})})
                        })
                        ],
"Bonto Batua": [ new ol.style.Style({
                            image: new ol.style.Circle({radius: 4.56, stroke: new ol.style.Stroke({color: "rgba(255, 204, 0, 1)", lineDash: null, width: 0}), fill: new ol.style.Fill({color: "rgba(255, 204, 0, 1)"})})
                        })
                        ,new ol.style.Style({
                            image: new ol.style.Circle({radius: 0.95, stroke: new ol.style.Stroke({color: "rgba(255, 204, 0, 1)", lineDash: null, width: 0}), fill: new ol.style.Fill({color: "rgba(255, 204, 0, 1)"})})
                        })
                        ],
"Bonto Biraeng": [ new ol.style.Style({
                            image: new ol.style.Circle({radius: 4.56, stroke: new ol.style.Stroke({color: "rgba(255, 204, 0, 1)", lineDash: null, width: 0}), fill: new ol.style.Fill({color: "rgba(255, 204, 0, 1)"})})
                        })
                        ,new ol.style.Style({
                            image: new ol.style.Circle({radius: 0.95, stroke: new ol.style.Stroke({color: "rgba(255, 204, 0, 1)", lineDash: null, width: 0}), fill: new ol.style.Fill({color: "rgba(255, 204, 0, 1)"})})
                        })
                        ],
"Bonto Bulaeng": [ new ol.style.Style({
                            image: new ol.style.Circle({radius: 4.56, stroke: new ol.style.Stroke({color: "rgba(255, 204, 0, 1)", lineDash: null, width: 0}), fill: new ol.style.Fill({color: "rgba(255, 204, 0, 1)"})})
                        })
                        ,new ol.style.Style({
                            image: new ol.style.Circle({radius: 0.95, stroke: new ol.style.Stroke({color: "rgba(255, 204, 0, 1)", lineDash: null, width: 0}), fill: new ol.style.Fill({color: "rgba(255, 204, 0, 1)"})})
                        })
                        ],
"Bonto Haru": [ new ol.style.Style({
                            image: new ol.style.Circle({radius: 4.56, stroke: new ol.style.Stroke({color: "rgba(255, 204, 0, 1)", lineDash: null, width: 0}), fill: new ol.style.Fill({color: "rgba(255, 204, 0, 1)"})})
                        })
                        ,new ol.style.Style({
                            image: new ol.style.Circle({radius: 0.95, stroke: new ol.style.Stroke({color: "rgba(255, 204, 0, 1)", lineDash: null, width: 0}), fill: new ol.style.Fill({color: "rgba(255, 204, 0, 1)"})})
                        })
                        ],
"Bonto Kamase": [ new ol.style.Style({
                            image: new ol.style.Circle({radius: 4.56, stroke: new ol.style.Stroke({color: "rgba(255, 204, 0, 1)", lineDash: null, width: 0}), fill: new ol.style.Fill({color: "rgba(255, 204, 0, 1)"})})
                        })
                        ,new ol.style.Style({
                            image: new ol.style.Circle({radius: 0.95, stroke: new ol.style.Stroke({color: "rgba(255, 204, 0, 1)", lineDash: null, width: 0}), fill: new ol.style.Fill({color: "rgba(255, 204, 0, 1)"})})
                        })
                        ],
"Bonto Lohe": [ new ol.style.Style({
                            image: new ol.style.Circle({radius: 4.56, stroke: new ol.style.Stroke({color: "rgba(255, 204, 0, 1)", lineDash: null, width: 0}), fill: new ol.style.Fill({color: "rgba(255, 204, 0, 1)"})})
                        })
                        ,new ol.style.Style({
                            image: new ol.style.Circle({radius: 0.95, stroke: new ol.style.Stroke({color: "rgba(255, 204, 0, 1)", lineDash: null, width: 0}), fill: new ol.style.Fill({color: "rgba(255, 204, 0, 1)"})})
                        })
                        ],
"Bonto Macinna": [ new ol.style.Style({
                            image: new ol.style.Circle({radius: 4.56, stroke: new ol.style.Stroke({color: "rgba(255, 204, 0, 1)", lineDash: null, width: 0}), fill: new ol.style.Fill({color: "rgba(255, 204, 0, 1)"})})
                        })
                        ,new ol.style.Style({
                            image: new ol.style.Circle({radius: 0.95, stroke: new ol.style.Stroke({color: "rgba(255, 204, 0, 1)", lineDash: null, width: 0}), fill: new ol.style.Fill({color: "rgba(255, 204, 0, 1)"})})
                        })
                        ],
"Bonto Marannu": [ new ol.style.Style({
                            image: new ol.style.Circle({radius: 4.56, stroke: new ol.style.Stroke({color: "rgba(255, 204, 0, 1)", lineDash: null, width: 0}), fill: new ol.style.Fill({color: "rgba(255, 204, 0, 1)"})})
                        })
                        ,new ol.style.Style({
                            image: new ol.style.Circle({radius: 0.95, stroke: new ol.style.Stroke({color: "rgba(255, 204, 0, 1)", lineDash: null, width: 0}), fill: new ol.style.Fill({color: "rgba(255, 204, 0, 1)"})})
                        })
                        ],
"Bonto Masila": [ new ol.style.Style({
                            image: new ol.style.Circle({radius: 4.56, stroke: new ol.style.Stroke({color: "rgba(255, 204, 0, 1)", lineDash: null, width: 0}), fill: new ol.style.Fill({color: "rgba(255, 204, 0, 1)"})})
                        })
                        ,new ol.style.Style({
                            image: new ol.style.Circle({radius: 0.95, stroke: new ol.style.Stroke({color: "rgba(255, 204, 0, 1)", lineDash: null, width: 0}), fill: new ol.style.Fill({color: "rgba(255, 204, 0, 1)"})})
                        })
                        ],
"Bonto Mate'ne": [ new ol.style.Style({
                            image: new ol.style.Circle({radius: 4.56, stroke: new ol.style.Stroke({color: "rgba(255, 204, 0, 1)", lineDash: null, width: 0}), fill: new ol.style.Fill({color: "rgba(255, 204, 0, 1)"})})
                        })
                        ,new ol.style.Style({
                            image: new ol.style.Circle({radius: 0.95, stroke: new ol.style.Stroke({color: "rgba(255, 204, 0, 1)", lineDash: null, width: 0}), fill: new ol.style.Fill({color: "rgba(255, 204, 0, 1)"})})
                        })
                        ],
"Bonto Minasa": [ new ol.style.Style({
                            image: new ol.style.Circle({radius: 4.56, stroke: new ol.style.Stroke({color: "rgba(255, 204, 0, 1)", lineDash: null, width: 0}), fill: new ol.style.Fill({color: "rgba(255, 204, 0, 1)"})})
                        })
                        ,new ol.style.Style({
                            image: new ol.style.Circle({radius: 0.95, stroke: new ol.style.Stroke({color: "rgba(255, 204, 0, 1)", lineDash: null, width: 0}), fill: new ol.style.Fill({color: "rgba(255, 204, 0, 1)"})})
                        })
                        ],
"Bonto Raja": [ new ol.style.Style({
                            image: new ol.style.Circle({radius: 4.56, stroke: new ol.style.Stroke({color: "rgba(255, 204, 0, 1)", lineDash: null, width: 0}), fill: new ol.style.Fill({color: "rgba(255, 204, 0, 1)"})})
                        })
                        ,new ol.style.Style({
                            image: new ol.style.Circle({radius: 0.95, stroke: new ol.style.Stroke({color: "rgba(255, 204, 0, 1)", lineDash: null, width: 0}), fill: new ol.style.Fill({color: "rgba(255, 204, 0, 1)"})})
                        })
                        ],
"Bonto Rannu": [ new ol.style.Style({
                            image: new ol.style.Circle({radius: 4.56, stroke: new ol.style.Stroke({color: "rgba(255, 204, 0, 1)", lineDash: null, width: 0}), fill: new ol.style.Fill({color: "rgba(255, 204, 0, 1)"})})
                        })
                        ,new ol.style.Style({
                            image: new ol.style.Circle({radius: 0.95, stroke: new ol.style.Stroke({color: "rgba(255, 204, 0, 1)", lineDash: null, width: 0}), fill: new ol.style.Fill({color: "rgba(255, 204, 0, 1)"})})
                        })
                        ],
"Bonto Sunggu": [ new ol.style.Style({
                            image: new ol.style.Circle({radius: 4.56, stroke: new ol.style.Stroke({color: "rgba(255, 204, 0, 1)", lineDash: null, width: 0}), fill: new ol.style.Fill({color: "rgba(255, 204, 0, 1)"})})
                        })
                        ,new ol.style.Style({
                            image: new ol.style.Circle({radius: 0.95, stroke: new ol.style.Stroke({color: "rgba(255, 204, 0, 1)", lineDash: null, width: 0}), fill: new ol.style.Fill({color: "rgba(255, 204, 0, 1)"})})
                        })
                        ],
"Bonto Tangnga": [ new ol.style.Style({
                            image: new ol.style.Circle({radius: 4.56, stroke: new ol.style.Stroke({color: "rgba(255, 204, 0, 1)", lineDash: null, width: 0}), fill: new ol.style.Fill({color: "rgba(255, 204, 0, 1)"})})
                        })
                        ,new ol.style.Style({
                            image: new ol.style.Circle({radius: 0.95, stroke: new ol.style.Stroke({color: "rgba(255, 204, 0, 1)", lineDash: null, width: 0}), fill: new ol.style.Fill({color: "rgba(255, 204, 0, 1)"})})
                        })
                        ],
"Bontobangun": [ new ol.style.Style({
                            image: new ol.style.Circle({radius: 4.56, stroke: new ol.style.Stroke({color: "rgba(255, 204, 0, 1)", lineDash: null, width: 0}), fill: new ol.style.Fill({color: "rgba(255, 204, 0, 1)"})})
                        })
                        ,new ol.style.Style({
                            image: new ol.style.Circle({radius: 0.95, stroke: new ol.style.Stroke({color: "rgba(255, 204, 0, 1)", lineDash: null, width: 0}), fill: new ol.style.Fill({color: "rgba(255, 204, 0, 1)"})})
                        })
                        ],
"Bontomanai": [ new ol.style.Style({
                            image: new ol.style.Circle({radius: 4.56, stroke: new ol.style.Stroke({color: "rgba(255, 204, 0, 1)", lineDash: null, width: 0}), fill: new ol.style.Fill({color: "rgba(255, 204, 0, 1)"})})
                        })
                        ,new ol.style.Style({
                            image: new ol.style.Circle({radius: 0.95, stroke: new ol.style.Stroke({color: "rgba(255, 204, 0, 1)", lineDash: null, width: 0}), fill: new ol.style.Fill({color: "rgba(255, 204, 0, 1)"})})
                        })
                        ],
"Bontomangiring": [ new ol.style.Style({
                            image: new ol.style.Circle({radius: 4.56, stroke: new ol.style.Stroke({color: "rgba(255, 204, 0, 1)", lineDash: null, width: 0}), fill: new ol.style.Fill({color: "rgba(255, 204, 0, 1)"})})
                        })
                        ,new ol.style.Style({
                            image: new ol.style.Circle({radius: 0.95, stroke: new ol.style.Stroke({color: "rgba(255, 204, 0, 1)", lineDash: null, width: 0}), fill: new ol.style.Fill({color: "rgba(255, 204, 0, 1)"})})
                        })
                        ],
"Bontonyeleng": [ new ol.style.Style({
                            image: new ol.style.Circle({radius: 4.56, stroke: new ol.style.Stroke({color: "rgba(255, 204, 0, 1)", lineDash: null, width: 0}), fill: new ol.style.Fill({color: "rgba(255, 204, 0, 1)"})})
                        })
                        ,new ol.style.Style({
                            image: new ol.style.Circle({radius: 0.95, stroke: new ol.style.Stroke({color: "rgba(255, 204, 0, 1)", lineDash: null, width: 0}), fill: new ol.style.Fill({color: "rgba(255, 204, 0, 1)"})})
                        })
                        ],
"Borong": [ new ol.style.Style({
                            image: new ol.style.Circle({radius: 4.56, stroke: new ol.style.Stroke({color: "rgba(255, 204, 0, 1)", lineDash: null, width: 0}), fill: new ol.style.Fill({color: "rgba(255, 204, 0, 1)"})})
                        })
                        ,new ol.style.Style({
                            image: new ol.style.Circle({radius: 0.95, stroke: new ol.style.Stroke({color: "rgba(255, 204, 0, 1)", lineDash: null, width: 0}), fill: new ol.style.Fill({color: "rgba(255, 204, 0, 1)"})})
                        })
                        ],
"Borongrappoa": [ new ol.style.Style({
                            image: new ol.style.Circle({radius: 4.56, stroke: new ol.style.Stroke({color: "rgba(255, 204, 0, 1)", lineDash: null, width: 0}), fill: new ol.style.Fill({color: "rgba(255, 204, 0, 1)"})})
                        })
                        ,new ol.style.Style({
                            image: new ol.style.Circle({radius: 0.95, stroke: new ol.style.Stroke({color: "rgba(255, 204, 0, 1)", lineDash: null, width: 0}), fill: new ol.style.Fill({color: "rgba(255, 204, 0, 1)"})})
                        })
                        ],
"Buhung Bundang": [ new ol.style.Style({
                            image: new ol.style.Circle({radius: 4.56, stroke: new ol.style.Stroke({color: "rgba(255, 204, 0, 1)", lineDash: null, width: 0}), fill: new ol.style.Fill({color: "rgba(255, 204, 0, 1)"})})
                        })
                        ,new ol.style.Style({
                            image: new ol.style.Circle({radius: 0.95, stroke: new ol.style.Stroke({color: "rgba(255, 204, 0, 1)", lineDash: null, width: 0}), fill: new ol.style.Fill({color: "rgba(255, 204, 0, 1)"})})
                        })
                        ],
"Bukit Harapan": [ new ol.style.Style({
                            image: new ol.style.Circle({radius: 4.56, stroke: new ol.style.Stroke({color: "rgba(255, 204, 0, 1)", lineDash: null, width: 0}), fill: new ol.style.Fill({color: "rgba(255, 204, 0, 1)"})})
                        })
                        ,new ol.style.Style({
                            image: new ol.style.Circle({radius: 0.95, stroke: new ol.style.Stroke({color: "rgba(255, 204, 0, 1)", lineDash: null, width: 0}), fill: new ol.style.Fill({color: "rgba(255, 204, 0, 1)"})})
                        })
                        ],
"Bukit Tinggi": [ new ol.style.Style({
                            image: new ol.style.Circle({radius: 4.56, stroke: new ol.style.Stroke({color: "rgba(255, 204, 0, 1)", lineDash: null, width: 0}), fill: new ol.style.Fill({color: "rgba(255, 204, 0, 1)"})})
                        })
                        ,new ol.style.Style({
                            image: new ol.style.Circle({radius: 0.95, stroke: new ol.style.Stroke({color: "rgba(255, 204, 0, 1)", lineDash: null, width: 0}), fill: new ol.style.Fill({color: "rgba(255, 204, 0, 1)"})})
                        })
                        ],
"Bulobulo": [ new ol.style.Style({
                            image: new ol.style.Circle({radius: 4.56, stroke: new ol.style.Stroke({color: "rgba(255, 204, 0, 1)", lineDash: null, width: 0}), fill: new ol.style.Fill({color: "rgba(255, 204, 0, 1)"})})
                        })
                        ,new ol.style.Style({
                            image: new ol.style.Circle({radius: 0.95, stroke: new ol.style.Stroke({color: "rgba(255, 204, 0, 1)", lineDash: null, width: 0}), fill: new ol.style.Fill({color: "rgba(255, 204, 0, 1)"})})
                        })
                        ],
"Bulolohe": [ new ol.style.Style({
                            image: new ol.style.Circle({radius: 4.56, stroke: new ol.style.Stroke({color: "rgba(255, 204, 0, 1)", lineDash: null, width: 0}), fill: new ol.style.Fill({color: "rgba(255, 204, 0, 1)"})})
                        })
                        ,new ol.style.Style({
                            image: new ol.style.Circle({radius: 0.95, stroke: new ol.style.Stroke({color: "rgba(255, 204, 0, 1)", lineDash: null, width: 0}), fill: new ol.style.Fill({color: "rgba(255, 204, 0, 1)"})})
                        })
                        ],
"Caile": [ new ol.style.Style({
                            image: new ol.style.Circle({radius: 4.56, stroke: new ol.style.Stroke({color: "rgba(255, 204, 0, 1)", lineDash: null, width: 0}), fill: new ol.style.Fill({color: "rgba(255, 204, 0, 1)"})})
                        })
                        ,new ol.style.Style({
                            image: new ol.style.Circle({radius: 0.95, stroke: new ol.style.Stroke({color: "rgba(255, 204, 0, 1)", lineDash: null, width: 0}), fill: new ol.style.Fill({color: "rgba(255, 204, 0, 1)"})})
                        })
                        ],
"Caramming": [ new ol.style.Style({
                            image: new ol.style.Circle({radius: 4.56, stroke: new ol.style.Stroke({color: "rgba(255, 204, 0, 1)", lineDash: null, width: 0}), fill: new ol.style.Fill({color: "rgba(255, 204, 0, 1)"})})
                        })
                        ,new ol.style.Style({
                            image: new ol.style.Circle({radius: 0.95, stroke: new ol.style.Stroke({color: "rgba(255, 204, 0, 1)", lineDash: null, width: 0}), fill: new ol.style.Fill({color: "rgba(255, 204, 0, 1)"})})
                        })
                        ],
"Dampang": [ new ol.style.Style({
                            image: new ol.style.Circle({radius: 4.56, stroke: new ol.style.Stroke({color: "rgba(255, 204, 0, 1)", lineDash: null, width: 0}), fill: new ol.style.Fill({color: "rgba(255, 204, 0, 1)"})})
                        })
                        ,new ol.style.Style({
                            image: new ol.style.Circle({radius: 0.95, stroke: new ol.style.Stroke({color: "rgba(255, 204, 0, 1)", lineDash: null, width: 0}), fill: new ol.style.Fill({color: "rgba(255, 204, 0, 1)"})})
                        })
                        ],
"Darubiah": [ new ol.style.Style({
                            image: new ol.style.Circle({radius: 4.56, stroke: new ol.style.Stroke({color: "rgba(255, 204, 0, 1)", lineDash: null, width: 0}), fill: new ol.style.Fill({color: "rgba(255, 204, 0, 1)"})})
                        })
                        ,new ol.style.Style({
                            image: new ol.style.Circle({radius: 0.95, stroke: new ol.style.Stroke({color: "rgba(255, 204, 0, 1)", lineDash: null, width: 0}), fill: new ol.style.Fill({color: "rgba(255, 204, 0, 1)"})})
                        })
                        ],
"Dwi Tiro": [ new ol.style.Style({
                            image: new ol.style.Circle({radius: 4.56, stroke: new ol.style.Stroke({color: "rgba(255, 204, 0, 1)", lineDash: null, width: 0}), fill: new ol.style.Fill({color: "rgba(255, 204, 0, 1)"})})
                        })
                        ,new ol.style.Style({
                            image: new ol.style.Circle({radius: 0.95, stroke: new ol.style.Stroke({color: "rgba(255, 204, 0, 1)", lineDash: null, width: 0}), fill: new ol.style.Fill({color: "rgba(255, 204, 0, 1)"})})
                        })
                        ],
"Ela-ela": [ new ol.style.Style({
                            image: new ol.style.Circle({radius: 4.56, stroke: new ol.style.Stroke({color: "rgba(255, 204, 0, 1)", lineDash: null, width: 0}), fill: new ol.style.Fill({color: "rgba(255, 204, 0, 1)"})})
                        })
                        ,new ol.style.Style({
                            image: new ol.style.Circle({radius: 0.95, stroke: new ol.style.Stroke({color: "rgba(255, 204, 0, 1)", lineDash: null, width: 0}), fill: new ol.style.Fill({color: "rgba(255, 204, 0, 1)"})})
                        })
                        ],
"Garanta": [ new ol.style.Style({
                            image: new ol.style.Circle({radius: 4.56, stroke: new ol.style.Stroke({color: "rgba(255, 204, 0, 1)", lineDash: null, width: 0}), fill: new ol.style.Fill({color: "rgba(255, 204, 0, 1)"})})
                        })
                        ,new ol.style.Style({
                            image: new ol.style.Circle({radius: 0.95, stroke: new ol.style.Stroke({color: "rgba(255, 204, 0, 1)", lineDash: null, width: 0}), fill: new ol.style.Fill({color: "rgba(255, 204, 0, 1)"})})
                        })
                        ],
"Garantungan": [ new ol.style.Style({
                            image: new ol.style.Circle({radius: 4.56, stroke: new ol.style.Stroke({color: "rgba(255, 204, 0, 1)", lineDash: null, width: 0}), fill: new ol.style.Fill({color: "rgba(255, 204, 0, 1)"})})
                        })
                        ,new ol.style.Style({
                            image: new ol.style.Circle({radius: 0.95, stroke: new ol.style.Stroke({color: "rgba(255, 204, 0, 1)", lineDash: null, width: 0}), fill: new ol.style.Fill({color: "rgba(255, 204, 0, 1)"})})
                        })
                        ],
"Gattareng": [ new ol.style.Style({
                            image: new ol.style.Circle({radius: 4.56, stroke: new ol.style.Stroke({color: "rgba(255, 204, 0, 1)", lineDash: null, width: 0}), fill: new ol.style.Fill({color: "rgba(255, 204, 0, 1)"})})
                        })
                        ,new ol.style.Style({
                            image: new ol.style.Circle({radius: 0.95, stroke: new ol.style.Stroke({color: "rgba(255, 204, 0, 1)", lineDash: null, width: 0}), fill: new ol.style.Fill({color: "rgba(255, 204, 0, 1)"})})
                        })
                        ],
"Gunturu": [ new ol.style.Style({
                            image: new ol.style.Circle({radius: 4.56, stroke: new ol.style.Stroke({color: "rgba(255, 204, 0, 1)", lineDash: null, width: 0}), fill: new ol.style.Fill({color: "rgba(255, 204, 0, 1)"})})
                        })
                        ,new ol.style.Style({
                            image: new ol.style.Circle({radius: 0.95, stroke: new ol.style.Stroke({color: "rgba(255, 204, 0, 1)", lineDash: null, width: 0}), fill: new ol.style.Fill({color: "rgba(255, 204, 0, 1)"})})
                        })
                        ],
"Jalanjang": [ new ol.style.Style({
                            image: new ol.style.Circle({radius: 4.56, stroke: new ol.style.Stroke({color: "rgba(255, 204, 0, 1)", lineDash: null, width: 0}), fill: new ol.style.Fill({color: "rgba(255, 204, 0, 1)"})})
                        })
                        ,new ol.style.Style({
                            image: new ol.style.Circle({radius: 0.95, stroke: new ol.style.Stroke({color: "rgba(255, 204, 0, 1)", lineDash: null, width: 0}), fill: new ol.style.Fill({color: "rgba(255, 204, 0, 1)"})})
                        })
                        ],
"Jawi-jawi": [ new ol.style.Style({
                            image: new ol.style.Circle({radius: 4.56, stroke: new ol.style.Stroke({color: "rgba(255, 204, 0, 1)", lineDash: null, width: 0}), fill: new ol.style.Fill({color: "rgba(255, 204, 0, 1)"})})
                        })
                        ,new ol.style.Style({
                            image: new ol.style.Circle({radius: 0.95, stroke: new ol.style.Stroke({color: "rgba(255, 204, 0, 1)", lineDash: null, width: 0}), fill: new ol.style.Fill({color: "rgba(255, 204, 0, 1)"})})
                        })
                        ],
"Jo'jolo": [ new ol.style.Style({
                            image: new ol.style.Circle({radius: 4.56, stroke: new ol.style.Stroke({color: "rgba(255, 204, 0, 1)", lineDash: null, width: 0}), fill: new ol.style.Fill({color: "rgba(255, 204, 0, 1)"})})
                        })
                        ,new ol.style.Style({
                            image: new ol.style.Circle({radius: 0.95, stroke: new ol.style.Stroke({color: "rgba(255, 204, 0, 1)", lineDash: null, width: 0}), fill: new ol.style.Fill({color: "rgba(255, 204, 0, 1)"})})
                        })
                        ],
"Kalumeme": [ new ol.style.Style({
                            image: new ol.style.Circle({radius: 4.56, stroke: new ol.style.Stroke({color: "rgba(255, 204, 0, 1)", lineDash: null, width: 0}), fill: new ol.style.Fill({color: "rgba(255, 204, 0, 1)"})})
                        })
                        ,new ol.style.Style({
                            image: new ol.style.Circle({radius: 0.95, stroke: new ol.style.Stroke({color: "rgba(255, 204, 0, 1)", lineDash: null, width: 0}), fill: new ol.style.Fill({color: "rgba(255, 204, 0, 1)"})})
                        })
                        ],
"Kalumpang": [ new ol.style.Style({
                            image: new ol.style.Circle({radius: 4.56, stroke: new ol.style.Stroke({color: "rgba(255, 204, 0, 1)", lineDash: null, width: 0}), fill: new ol.style.Fill({color: "rgba(255, 204, 0, 1)"})})
                        })
                        ,new ol.style.Style({
                            image: new ol.style.Circle({radius: 0.95, stroke: new ol.style.Stroke({color: "rgba(255, 204, 0, 1)", lineDash: null, width: 0}), fill: new ol.style.Fill({color: "rgba(255, 204, 0, 1)"})})
                        })
                        ],
"Kambuno": [ new ol.style.Style({
                            image: new ol.style.Circle({radius: 4.56, stroke: new ol.style.Stroke({color: "rgba(255, 204, 0, 1)", lineDash: null, width: 0}), fill: new ol.style.Fill({color: "rgba(255, 204, 0, 1)"})})
                        })
                        ,new ol.style.Style({
                            image: new ol.style.Circle({radius: 0.95, stroke: new ol.style.Stroke({color: "rgba(255, 204, 0, 1)", lineDash: null, width: 0}), fill: new ol.style.Fill({color: "rgba(255, 204, 0, 1)"})})
                        })
                        ],
"Karama": [ new ol.style.Style({
                            image: new ol.style.Circle({radius: 4.56, stroke: new ol.style.Stroke({color: "rgba(255, 204, 0, 1)", lineDash: null, width: 0}), fill: new ol.style.Fill({color: "rgba(255, 204, 0, 1)"})})
                        })
                        ,new ol.style.Style({
                            image: new ol.style.Circle({radius: 0.95, stroke: new ol.style.Stroke({color: "rgba(255, 204, 0, 1)", lineDash: null, width: 0}), fill: new ol.style.Fill({color: "rgba(255, 204, 0, 1)"})})
                        })
                        ],
"Karassing": [ new ol.style.Style({
                            image: new ol.style.Circle({radius: 4.56, stroke: new ol.style.Stroke({color: "rgba(255, 204, 0, 1)", lineDash: null, width: 0}), fill: new ol.style.Fill({color: "rgba(255, 204, 0, 1)"})})
                        })
                        ,new ol.style.Style({
                            image: new ol.style.Circle({radius: 0.95, stroke: new ol.style.Stroke({color: "rgba(255, 204, 0, 1)", lineDash: null, width: 0}), fill: new ol.style.Fill({color: "rgba(255, 204, 0, 1)"})})
                        })
                        ],
"Kasimpureng": [ new ol.style.Style({
                            image: new ol.style.Circle({radius: 4.56, stroke: new ol.style.Stroke({color: "rgba(255, 204, 0, 1)", lineDash: null, width: 0}), fill: new ol.style.Fill({color: "rgba(255, 204, 0, 1)"})})
                        })
                        ,new ol.style.Style({
                            image: new ol.style.Circle({radius: 0.95, stroke: new ol.style.Stroke({color: "rgba(255, 204, 0, 1)", lineDash: null, width: 0}), fill: new ol.style.Fill({color: "rgba(255, 204, 0, 1)"})})
                        })
                        ],
"Kindang": [ new ol.style.Style({
                            image: new ol.style.Circle({radius: 4.56, stroke: new ol.style.Stroke({color: "rgba(255, 204, 0, 1)", lineDash: null, width: 0}), fill: new ol.style.Fill({color: "rgba(255, 204, 0, 1)"})})
                        })
                        ,new ol.style.Style({
                            image: new ol.style.Circle({radius: 0.95, stroke: new ol.style.Stroke({color: "rgba(255, 204, 0, 1)", lineDash: null, width: 0}), fill: new ol.style.Fill({color: "rgba(255, 204, 0, 1)"})})
                        })
                        ],
"Laikang": [ new ol.style.Style({
                            image: new ol.style.Circle({radius: 4.56, stroke: new ol.style.Stroke({color: "rgba(255, 204, 0, 1)", lineDash: null, width: 0}), fill: new ol.style.Fill({color: "rgba(255, 204, 0, 1)"})})
                        })
                        ,new ol.style.Style({
                            image: new ol.style.Circle({radius: 0.95, stroke: new ol.style.Stroke({color: "rgba(255, 204, 0, 1)", lineDash: null, width: 0}), fill: new ol.style.Fill({color: "rgba(255, 204, 0, 1)"})})
                        })
                        ],
"Lembang": [ new ol.style.Style({
                            image: new ol.style.Circle({radius: 4.56, stroke: new ol.style.Stroke({color: "rgba(255, 204, 0, 1)", lineDash: null, width: 0}), fill: new ol.style.Fill({color: "rgba(255, 204, 0, 1)"})})
                        })
                        ,new ol.style.Style({
                            image: new ol.style.Circle({radius: 0.95, stroke: new ol.style.Stroke({color: "rgba(255, 204, 0, 1)", lineDash: null, width: 0}), fill: new ol.style.Fill({color: "rgba(255, 204, 0, 1)"})})
                        })
                        ],
"Lembang Lohe": [ new ol.style.Style({
                            image: new ol.style.Circle({radius: 4.56, stroke: new ol.style.Stroke({color: "rgba(255, 204, 0, 1)", lineDash: null, width: 0}), fill: new ol.style.Fill({color: "rgba(255, 204, 0, 1)"})})
                        })
                        ,new ol.style.Style({
                            image: new ol.style.Circle({radius: 0.95, stroke: new ol.style.Stroke({color: "rgba(255, 204, 0, 1)", lineDash: null, width: 0}), fill: new ol.style.Fill({color: "rgba(255, 204, 0, 1)"})})
                        })
                        ],
"Lembanna": [ new ol.style.Style({
                            image: new ol.style.Circle({radius: 4.56, stroke: new ol.style.Stroke({color: "rgba(255, 204, 0, 1)", lineDash: null, width: 0}), fill: new ol.style.Fill({color: "rgba(255, 204, 0, 1)"})})
                        })
                        ,new ol.style.Style({
                            image: new ol.style.Circle({radius: 0.95, stroke: new ol.style.Stroke({color: "rgba(255, 204, 0, 1)", lineDash: null, width: 0}), fill: new ol.style.Fill({color: "rgba(255, 204, 0, 1)"})})
                        })
                        ],
"Loka": [ new ol.style.Style({
                            image: new ol.style.Circle({radius: 4.56, stroke: new ol.style.Stroke({color: "rgba(255, 204, 0, 1)", lineDash: null, width: 0}), fill: new ol.style.Fill({color: "rgba(255, 204, 0, 1)"})})
                        })
                        ,new ol.style.Style({
                            image: new ol.style.Circle({radius: 0.95, stroke: new ol.style.Stroke({color: "rgba(255, 204, 0, 1)", lineDash: null, width: 0}), fill: new ol.style.Fill({color: "rgba(255, 204, 0, 1)"})})
                        })
                        ],
"Lolisang": [ new ol.style.Style({
                            image: new ol.style.Circle({radius: 4.56, stroke: new ol.style.Stroke({color: "rgba(255, 204, 0, 1)", lineDash: null, width: 0}), fill: new ol.style.Fill({color: "rgba(255, 204, 0, 1)"})})
                        })
                        ,new ol.style.Style({
                            image: new ol.style.Circle({radius: 0.95, stroke: new ol.style.Stroke({color: "rgba(255, 204, 0, 1)", lineDash: null, width: 0}), fill: new ol.style.Fill({color: "rgba(255, 204, 0, 1)"})})
                        })
                        ],
"Lonrong": [ new ol.style.Style({
                            image: new ol.style.Circle({radius: 4.56, stroke: new ol.style.Stroke({color: "rgba(255, 204, 0, 1)", lineDash: null, width: 0}), fill: new ol.style.Fill({color: "rgba(255, 204, 0, 1)"})})
                        })
                        ,new ol.style.Style({
                            image: new ol.style.Circle({radius: 0.95, stroke: new ol.style.Stroke({color: "rgba(255, 204, 0, 1)", lineDash: null, width: 0}), fill: new ol.style.Fill({color: "rgba(255, 204, 0, 1)"})})
                        })
                        ],
"Malleleng": [ new ol.style.Style({
                            image: new ol.style.Circle({radius: 4.56, stroke: new ol.style.Stroke({color: "rgba(255, 204, 0, 1)", lineDash: null, width: 0}), fill: new ol.style.Fill({color: "rgba(255, 204, 0, 1)"})})
                        })
                        ,new ol.style.Style({
                            image: new ol.style.Circle({radius: 0.95, stroke: new ol.style.Stroke({color: "rgba(255, 204, 0, 1)", lineDash: null, width: 0}), fill: new ol.style.Fill({color: "rgba(255, 204, 0, 1)"})})
                        })
                        ],
"Manjalling": [ new ol.style.Style({
                            image: new ol.style.Circle({radius: 4.56, stroke: new ol.style.Stroke({color: "rgba(255, 204, 0, 1)", lineDash: null, width: 0}), fill: new ol.style.Fill({color: "rgba(255, 204, 0, 1)"})})
                        })
                        ,new ol.style.Style({
                            image: new ol.style.Circle({radius: 0.95, stroke: new ol.style.Stroke({color: "rgba(255, 204, 0, 1)", lineDash: null, width: 0}), fill: new ol.style.Fill({color: "rgba(255, 204, 0, 1)"})})
                        })
                        ],
"Manyampa": [ new ol.style.Style({
                            image: new ol.style.Circle({radius: 4.56, stroke: new ol.style.Stroke({color: "rgba(255, 204, 0, 1)", lineDash: null, width: 0}), fill: new ol.style.Fill({color: "rgba(255, 204, 0, 1)"})})
                        })
                        ,new ol.style.Style({
                            image: new ol.style.Circle({radius: 0.95, stroke: new ol.style.Stroke({color: "rgba(255, 204, 0, 1)", lineDash: null, width: 0}), fill: new ol.style.Fill({color: "rgba(255, 204, 0, 1)"})})
                        })
                        ],
"Mariorennu": [ new ol.style.Style({
                            image: new ol.style.Circle({radius: 4.56, stroke: new ol.style.Stroke({color: "rgba(255, 204, 0, 1)", lineDash: null, width: 0}), fill: new ol.style.Fill({color: "rgba(255, 204, 0, 1)"})})
                        })
                        ,new ol.style.Style({
                            image: new ol.style.Circle({radius: 0.95, stroke: new ol.style.Stroke({color: "rgba(255, 204, 0, 1)", lineDash: null, width: 0}), fill: new ol.style.Fill({color: "rgba(255, 204, 0, 1)"})})
                        })
                        ],
"Matekko": [ new ol.style.Style({
                            image: new ol.style.Circle({radius: 4.56, stroke: new ol.style.Stroke({color: "rgba(255, 204, 0, 1)", lineDash: null, width: 0}), fill: new ol.style.Fill({color: "rgba(255, 204, 0, 1)"})})
                        })
                        ,new ol.style.Style({
                            image: new ol.style.Circle({radius: 0.95, stroke: new ol.style.Stroke({color: "rgba(255, 204, 0, 1)", lineDash: null, width: 0}), fill: new ol.style.Fill({color: "rgba(255, 204, 0, 1)"})})
                        })
                        ],
"Mattirowalie": [ new ol.style.Style({
                            image: new ol.style.Circle({radius: 4.56, stroke: new ol.style.Stroke({color: "rgba(255, 204, 0, 1)", lineDash: null, width: 0}), fill: new ol.style.Fill({color: "rgba(255, 204, 0, 1)"})})
                        })
                        ,new ol.style.Style({
                            image: new ol.style.Circle({radius: 0.95, stroke: new ol.style.Stroke({color: "rgba(255, 204, 0, 1)", lineDash: null, width: 0}), fill: new ol.style.Fill({color: "rgba(255, 204, 0, 1)"})})
                        })
                        ],
"Mattoanging": [ new ol.style.Style({
                            image: new ol.style.Circle({radius: 4.56, stroke: new ol.style.Stroke({color: "rgba(255, 204, 0, 1)", lineDash: null, width: 0}), fill: new ol.style.Fill({color: "rgba(255, 204, 0, 1)"})})
                        })
                        ,new ol.style.Style({
                            image: new ol.style.Circle({radius: 0.95, stroke: new ol.style.Stroke({color: "rgba(255, 204, 0, 1)", lineDash: null, width: 0}), fill: new ol.style.Fill({color: "rgba(255, 204, 0, 1)"})})
                        })
                        ],
"Orogading": [ new ol.style.Style({
                            image: new ol.style.Circle({radius: 4.56, stroke: new ol.style.Stroke({color: "rgba(255, 204, 0, 1)", lineDash: null, width: 0}), fill: new ol.style.Fill({color: "rgba(255, 204, 0, 1)"})})
                        })
                        ,new ol.style.Style({
                            image: new ol.style.Circle({radius: 0.95, stroke: new ol.style.Stroke({color: "rgba(255, 204, 0, 1)", lineDash: null, width: 0}), fill: new ol.style.Fill({color: "rgba(255, 204, 0, 1)"})})
                        })
                        ],
"Padang": [ new ol.style.Style({
                            image: new ol.style.Circle({radius: 4.56, stroke: new ol.style.Stroke({color: "rgba(255, 204, 0, 1)", lineDash: null, width: 0}), fill: new ol.style.Fill({color: "rgba(255, 204, 0, 1)"})})
                        })
                        ,new ol.style.Style({
                            image: new ol.style.Circle({radius: 0.95, stroke: new ol.style.Stroke({color: "rgba(255, 204, 0, 1)", lineDash: null, width: 0}), fill: new ol.style.Fill({color: "rgba(255, 204, 0, 1)"})})
                        })
                        ],
"Padangloang": [ new ol.style.Style({
                            image: new ol.style.Circle({radius: 4.56, stroke: new ol.style.Stroke({color: "rgba(255, 204, 0, 1)", lineDash: null, width: 0}), fill: new ol.style.Fill({color: "rgba(255, 204, 0, 1)"})})
                        })
                        ,new ol.style.Style({
                            image: new ol.style.Circle({radius: 0.95, stroke: new ol.style.Stroke({color: "rgba(255, 204, 0, 1)", lineDash: null, width: 0}), fill: new ol.style.Fill({color: "rgba(255, 204, 0, 1)"})})
                        })
                        ],
"Paenrelompoe": [ new ol.style.Style({
                            image: new ol.style.Circle({radius: 4.56, stroke: new ol.style.Stroke({color: "rgba(255, 204, 0, 1)", lineDash: null, width: 0}), fill: new ol.style.Fill({color: "rgba(255, 204, 0, 1)"})})
                        })
                        ,new ol.style.Style({
                            image: new ol.style.Circle({radius: 0.95, stroke: new ol.style.Stroke({color: "rgba(255, 204, 0, 1)", lineDash: null, width: 0}), fill: new ol.style.Fill({color: "rgba(255, 204, 0, 1)"})})
                        })
                        ],
"Pakubalaho": [ new ol.style.Style({
                            image: new ol.style.Circle({radius: 4.56, stroke: new ol.style.Stroke({color: "rgba(255, 204, 0, 1)", lineDash: null, width: 0}), fill: new ol.style.Fill({color: "rgba(255, 204, 0, 1)"})})
                        })
                        ,new ol.style.Style({
                            image: new ol.style.Circle({radius: 0.95, stroke: new ol.style.Stroke({color: "rgba(255, 204, 0, 1)", lineDash: null, width: 0}), fill: new ol.style.Fill({color: "rgba(255, 204, 0, 1)"})})
                        })
                        ],
"Palambarae": [ new ol.style.Style({
                            image: new ol.style.Circle({radius: 4.56, stroke: new ol.style.Stroke({color: "rgba(255, 204, 0, 1)", lineDash: null, width: 0}), fill: new ol.style.Fill({color: "rgba(255, 204, 0, 1)"})})
                        })
                        ,new ol.style.Style({
                            image: new ol.style.Circle({radius: 0.95, stroke: new ol.style.Stroke({color: "rgba(255, 204, 0, 1)", lineDash: null, width: 0}), fill: new ol.style.Fill({color: "rgba(255, 204, 0, 1)"})})
                        })
                        ],
"Palampang": [ new ol.style.Style({
                            image: new ol.style.Circle({radius: 4.56, stroke: new ol.style.Stroke({color: "rgba(255, 204, 0, 1)", lineDash: null, width: 0}), fill: new ol.style.Fill({color: "rgba(255, 204, 0, 1)"})})
                        })
                        ,new ol.style.Style({
                            image: new ol.style.Circle({radius: 0.95, stroke: new ol.style.Stroke({color: "rgba(255, 204, 0, 1)", lineDash: null, width: 0}), fill: new ol.style.Fill({color: "rgba(255, 204, 0, 1)"})})
                        })
                        ],
"Pantama": [ new ol.style.Style({
                            image: new ol.style.Circle({radius: 4.56, stroke: new ol.style.Stroke({color: "rgba(255, 204, 0, 1)", lineDash: null, width: 0}), fill: new ol.style.Fill({color: "rgba(255, 204, 0, 1)"})})
                        })
                        ,new ol.style.Style({
                            image: new ol.style.Circle({radius: 0.95, stroke: new ol.style.Stroke({color: "rgba(255, 204, 0, 1)", lineDash: null, width: 0}), fill: new ol.style.Fill({color: "rgba(255, 204, 0, 1)"})})
                        })
                        ],
"Pataro": [ new ol.style.Style({
                            image: new ol.style.Circle({radius: 4.56, stroke: new ol.style.Stroke({color: "rgba(255, 204, 0, 1)", lineDash: null, width: 0}), fill: new ol.style.Fill({color: "rgba(255, 204, 0, 1)"})})
                        })
                        ,new ol.style.Style({
                            image: new ol.style.Circle({radius: 0.95, stroke: new ol.style.Stroke({color: "rgba(255, 204, 0, 1)", lineDash: null, width: 0}), fill: new ol.style.Fill({color: "rgba(255, 204, 0, 1)"})})
                        })
                        ],
"Pattiroang": [ new ol.style.Style({
                            image: new ol.style.Circle({radius: 4.56, stroke: new ol.style.Stroke({color: "rgba(255, 204, 0, 1)", lineDash: null, width: 0}), fill: new ol.style.Fill({color: "rgba(255, 204, 0, 1)"})})
                        })
                        ,new ol.style.Style({
                            image: new ol.style.Circle({radius: 0.95, stroke: new ol.style.Stroke({color: "rgba(255, 204, 0, 1)", lineDash: null, width: 0}), fill: new ol.style.Fill({color: "rgba(255, 204, 0, 1)"})})
                        })
                        ],
"Polewali": [ new ol.style.Style({
                            image: new ol.style.Circle({radius: 4.56, stroke: new ol.style.Stroke({color: "rgba(255, 204, 0, 1)", lineDash: null, width: 0}), fill: new ol.style.Fill({color: "rgba(255, 204, 0, 1)"})})
                        })
                        ,new ol.style.Style({
                            image: new ol.style.Circle({radius: 0.95, stroke: new ol.style.Stroke({color: "rgba(255, 204, 0, 1)", lineDash: null, width: 0}), fill: new ol.style.Fill({color: "rgba(255, 204, 0, 1)"})})
                        })
                        ],
"Possitana": [ new ol.style.Style({
                            image: new ol.style.Circle({radius: 4.56, stroke: new ol.style.Stroke({color: "rgba(255, 204, 0, 1)", lineDash: null, width: 0}), fill: new ol.style.Fill({color: "rgba(255, 204, 0, 1)"})})
                        })
                        ,new ol.style.Style({
                            image: new ol.style.Circle({radius: 0.95, stroke: new ol.style.Stroke({color: "rgba(255, 204, 0, 1)", lineDash: null, width: 0}), fill: new ol.style.Fill({color: "rgba(255, 204, 0, 1)"})})
                        })
                        ],
"Salassae": [ new ol.style.Style({
                            image: new ol.style.Circle({radius: 4.56, stroke: new ol.style.Stroke({color: "rgba(255, 204, 0, 1)", lineDash: null, width: 0}), fill: new ol.style.Fill({color: "rgba(255, 204, 0, 1)"})})
                        })
                        ,new ol.style.Style({
                            image: new ol.style.Circle({radius: 0.95, stroke: new ol.style.Stroke({color: "rgba(255, 204, 0, 1)", lineDash: null, width: 0}), fill: new ol.style.Fill({color: "rgba(255, 204, 0, 1)"})})
                        })
                        ],
"Salemba": [ new ol.style.Style({
                            image: new ol.style.Circle({radius: 4.56, stroke: new ol.style.Stroke({color: "rgba(255, 204, 0, 1)", lineDash: null, width: 0}), fill: new ol.style.Fill({color: "rgba(255, 204, 0, 1)"})})
                        })
                        ,new ol.style.Style({
                            image: new ol.style.Circle({radius: 0.95, stroke: new ol.style.Stroke({color: "rgba(255, 204, 0, 1)", lineDash: null, width: 0}), fill: new ol.style.Fill({color: "rgba(255, 204, 0, 1)"})})
                        })
                        ],
"Sangkala": [ new ol.style.Style({
                            image: new ol.style.Circle({radius: 4.56, stroke: new ol.style.Stroke({color: "rgba(255, 204, 0, 1)", lineDash: null, width: 0}), fill: new ol.style.Fill({color: "rgba(255, 204, 0, 1)"})})
                        })
                        ,new ol.style.Style({
                            image: new ol.style.Circle({radius: 0.95, stroke: new ol.style.Stroke({color: "rgba(255, 204, 0, 1)", lineDash: null, width: 0}), fill: new ol.style.Fill({color: "rgba(255, 204, 0, 1)"})})
                        })
                        ],
"Sapanang": [ new ol.style.Style({
                            image: new ol.style.Circle({radius: 4.56, stroke: new ol.style.Stroke({color: "rgba(255, 204, 0, 1)", lineDash: null, width: 0}), fill: new ol.style.Fill({color: "rgba(255, 204, 0, 1)"})})
                        })
                        ,new ol.style.Style({
                            image: new ol.style.Circle({radius: 0.95, stroke: new ol.style.Stroke({color: "rgba(255, 204, 0, 1)", lineDash: null, width: 0}), fill: new ol.style.Fill({color: "rgba(255, 204, 0, 1)"})})
                        })
                        ],
"Sapebonto": [ new ol.style.Style({
                            image: new ol.style.Circle({radius: 4.56, stroke: new ol.style.Stroke({color: "rgba(255, 204, 0, 1)", lineDash: null, width: 0}), fill: new ol.style.Fill({color: "rgba(255, 204, 0, 1)"})})
                        })
                        ,new ol.style.Style({
                            image: new ol.style.Circle({radius: 0.95, stroke: new ol.style.Stroke({color: "rgba(255, 204, 0, 1)", lineDash: null, width: 0}), fill: new ol.style.Fill({color: "rgba(255, 204, 0, 1)"})})
                        })
                        ],
"Sapolohe": [ new ol.style.Style({
                            image: new ol.style.Circle({radius: 4.56, stroke: new ol.style.Stroke({color: "rgba(255, 204, 0, 1)", lineDash: null, width: 0}), fill: new ol.style.Fill({color: "rgba(255, 204, 0, 1)"})})
                        })
                        ,new ol.style.Style({
                            image: new ol.style.Circle({radius: 0.95, stroke: new ol.style.Stroke({color: "rgba(255, 204, 0, 1)", lineDash: null, width: 0}), fill: new ol.style.Fill({color: "rgba(255, 204, 0, 1)"})})
                        })
                        ],
"Seppang": [ new ol.style.Style({
                            image: new ol.style.Circle({radius: 4.56, stroke: new ol.style.Stroke({color: "rgba(255, 204, 0, 1)", lineDash: null, width: 0}), fill: new ol.style.Fill({color: "rgba(255, 204, 0, 1)"})})
                        })
                        ,new ol.style.Style({
                            image: new ol.style.Circle({radius: 0.95, stroke: new ol.style.Stroke({color: "rgba(255, 204, 0, 1)", lineDash: null, width: 0}), fill: new ol.style.Fill({color: "rgba(255, 204, 0, 1)"})})
                        })
                        ],
"Singa": [ new ol.style.Style({
                            image: new ol.style.Circle({radius: 4.56, stroke: new ol.style.Stroke({color: "rgba(255, 204, 0, 1)", lineDash: null, width: 0}), fill: new ol.style.Fill({color: "rgba(255, 204, 0, 1)"})})
                        })
                        ,new ol.style.Style({
                            image: new ol.style.Circle({radius: 0.95, stroke: new ol.style.Stroke({color: "rgba(255, 204, 0, 1)", lineDash: null, width: 0}), fill: new ol.style.Fill({color: "rgba(255, 204, 0, 1)"})})
                        })
                        ],
"Swatani": [ new ol.style.Style({
                            image: new ol.style.Circle({radius: 4.56, stroke: new ol.style.Stroke({color: "rgba(255, 204, 0, 1)", lineDash: null, width: 0}), fill: new ol.style.Fill({color: "rgba(255, 204, 0, 1)"})})
                        })
                        ,new ol.style.Style({
                            image: new ol.style.Circle({radius: 0.95, stroke: new ol.style.Stroke({color: "rgba(255, 204, 0, 1)", lineDash: null, width: 0}), fill: new ol.style.Fill({color: "rgba(255, 204, 0, 1)"})})
                        })
                        ],
"Tamalanrea": [ new ol.style.Style({
                            image: new ol.style.Circle({radius: 4.56, stroke: new ol.style.Stroke({color: "rgba(255, 204, 0, 1)", lineDash: null, width: 0}), fill: new ol.style.Fill({color: "rgba(255, 204, 0, 1)"})})
                        })
                        ,new ol.style.Style({
                            image: new ol.style.Circle({radius: 0.95, stroke: new ol.style.Stroke({color: "rgba(255, 204, 0, 1)", lineDash: null, width: 0}), fill: new ol.style.Fill({color: "rgba(255, 204, 0, 1)"})})
                        })
                        ],
"Tamaona": [ new ol.style.Style({
                            image: new ol.style.Circle({radius: 4.56, stroke: new ol.style.Stroke({color: "rgba(255, 204, 0, 1)", lineDash: null, width: 0}), fill: new ol.style.Fill({color: "rgba(255, 204, 0, 1)"})})
                        })
                        ,new ol.style.Style({
                            image: new ol.style.Circle({radius: 0.95, stroke: new ol.style.Stroke({color: "rgba(255, 204, 0, 1)", lineDash: null, width: 0}), fill: new ol.style.Fill({color: "rgba(255, 204, 0, 1)"})})
                        })
                        ],
"Tambangan": [ new ol.style.Style({
                            image: new ol.style.Circle({radius: 4.56, stroke: new ol.style.Stroke({color: "rgba(255, 204, 0, 1)", lineDash: null, width: 0}), fill: new ol.style.Fill({color: "rgba(255, 204, 0, 1)"})})
                        })
                        ,new ol.style.Style({
                            image: new ol.style.Circle({radius: 0.95, stroke: new ol.style.Stroke({color: "rgba(255, 204, 0, 1)", lineDash: null, width: 0}), fill: new ol.style.Fill({color: "rgba(255, 204, 0, 1)"})})
                        })
                        ],
"Tammatto": [ new ol.style.Style({
                            image: new ol.style.Circle({radius: 4.56, stroke: new ol.style.Stroke({color: "rgba(255, 204, 0, 1)", lineDash: null, width: 0}), fill: new ol.style.Fill({color: "rgba(255, 204, 0, 1)"})})
                        })
                        ,new ol.style.Style({
                            image: new ol.style.Circle({radius: 0.95, stroke: new ol.style.Stroke({color: "rgba(255, 204, 0, 1)", lineDash: null, width: 0}), fill: new ol.style.Fill({color: "rgba(255, 204, 0, 1)"})})
                        })
                        ],
"Tanah Beru": [ new ol.style.Style({
                            image: new ol.style.Circle({radius: 4.56, stroke: new ol.style.Stroke({color: "rgba(255, 204, 0, 1)", lineDash: null, width: 0}), fill: new ol.style.Fill({color: "rgba(255, 204, 0, 1)"})})
                        })
                        ,new ol.style.Style({
                            image: new ol.style.Circle({radius: 0.95, stroke: new ol.style.Stroke({color: "rgba(255, 204, 0, 1)", lineDash: null, width: 0}), fill: new ol.style.Fill({color: "rgba(255, 204, 0, 1)"})})
                        })
                        ],
"Tanah Harapan": [ new ol.style.Style({
                            image: new ol.style.Circle({radius: 4.56, stroke: new ol.style.Stroke({color: "rgba(255, 204, 0, 1)", lineDash: null, width: 0}), fill: new ol.style.Fill({color: "rgba(255, 204, 0, 1)"})})
                        })
                        ,new ol.style.Style({
                            image: new ol.style.Circle({radius: 0.95, stroke: new ol.style.Stroke({color: "rgba(255, 204, 0, 1)", lineDash: null, width: 0}), fill: new ol.style.Fill({color: "rgba(255, 204, 0, 1)"})})
                        })
                        ],
"Tanah Jaya": [ new ol.style.Style({
                            image: new ol.style.Circle({radius: 4.56, stroke: new ol.style.Stroke({color: "rgba(255, 204, 0, 1)", lineDash: null, width: 0}), fill: new ol.style.Fill({color: "rgba(255, 204, 0, 1)"})})
                        })
                        ,new ol.style.Style({
                            image: new ol.style.Circle({radius: 0.95, stroke: new ol.style.Stroke({color: "rgba(255, 204, 0, 1)", lineDash: null, width: 0}), fill: new ol.style.Fill({color: "rgba(255, 204, 0, 1)"})})
                        })
                        ],
"Tanah Kongkong": [ new ol.style.Style({
                            image: new ol.style.Circle({radius: 4.56, stroke: new ol.style.Stroke({color: "rgba(255, 204, 0, 1)", lineDash: null, width: 0}), fill: new ol.style.Fill({color: "rgba(255, 204, 0, 1)"})})
                        })
                        ,new ol.style.Style({
                            image: new ol.style.Circle({radius: 0.95, stroke: new ol.style.Stroke({color: "rgba(255, 204, 0, 1)", lineDash: null, width: 0}), fill: new ol.style.Fill({color: "rgba(255, 204, 0, 1)"})})
                        })
                        ],
"Tanah Lemo": [ new ol.style.Style({
                            image: new ol.style.Circle({radius: 4.56, stroke: new ol.style.Stroke({color: "rgba(255, 204, 0, 1)", lineDash: null, width: 0}), fill: new ol.style.Fill({color: "rgba(255, 204, 0, 1)"})})
                        })
                        ,new ol.style.Style({
                            image: new ol.style.Circle({radius: 0.95, stroke: new ol.style.Stroke({color: "rgba(255, 204, 0, 1)", lineDash: null, width: 0}), fill: new ol.style.Fill({color: "rgba(255, 204, 0, 1)"})})
                        })
                        ],
"Tanatoa": [ new ol.style.Style({
                            image: new ol.style.Circle({radius: 4.56, stroke: new ol.style.Stroke({color: "rgba(255, 204, 0, 1)", lineDash: null, width: 0}), fill: new ol.style.Fill({color: "rgba(255, 204, 0, 1)"})})
                        })
                        ,new ol.style.Style({
                            image: new ol.style.Circle({radius: 0.95, stroke: new ol.style.Stroke({color: "rgba(255, 204, 0, 1)", lineDash: null, width: 0}), fill: new ol.style.Fill({color: "rgba(255, 204, 0, 1)"})})
                        })
                        ],
"Tanete": [ new ol.style.Style({
                            image: new ol.style.Circle({radius: 4.56, stroke: new ol.style.Stroke({color: "rgba(255, 204, 0, 1)", lineDash: null, width: 0}), fill: new ol.style.Fill({color: "rgba(255, 204, 0, 1)"})})
                        })
                        ,new ol.style.Style({
                            image: new ol.style.Circle({radius: 0.95, stroke: new ol.style.Stroke({color: "rgba(255, 204, 0, 1)", lineDash: null, width: 0}), fill: new ol.style.Fill({color: "rgba(255, 204, 0, 1)"})})
                        })
                        ],
"Tanuntung": [ new ol.style.Style({
                            image: new ol.style.Circle({radius: 4.56, stroke: new ol.style.Stroke({color: "rgba(255, 204, 0, 1)", lineDash: null, width: 0}), fill: new ol.style.Fill({color: "rgba(255, 204, 0, 1)"})})
                        })
                        ,new ol.style.Style({
                            image: new ol.style.Circle({radius: 0.95, stroke: new ol.style.Stroke({color: "rgba(255, 204, 0, 1)", lineDash: null, width: 0}), fill: new ol.style.Fill({color: "rgba(255, 204, 0, 1)"})})
                        })
                        ],
"Terang-terang": [ new ol.style.Style({
                            image: new ol.style.Circle({radius: 4.56, stroke: new ol.style.Stroke({color: "rgba(255, 204, 0, 1)", lineDash: null, width: 0}), fill: new ol.style.Fill({color: "rgba(255, 204, 0, 1)"})})
                        })
                        ,new ol.style.Style({
                            image: new ol.style.Circle({radius: 0.95, stroke: new ol.style.Stroke({color: "rgba(255, 204, 0, 1)", lineDash: null, width: 0}), fill: new ol.style.Fill({color: "rgba(255, 204, 0, 1)"})})
                        })
                        ],
"Tibona": [ new ol.style.Style({
                            image: new ol.style.Circle({radius: 4.56, stroke: new ol.style.Stroke({color: "rgba(255, 204, 0, 1)", lineDash: null, width: 0}), fill: new ol.style.Fill({color: "rgba(255, 204, 0, 1)"})})
                        })
                        ,new ol.style.Style({
                            image: new ol.style.Circle({radius: 0.95, stroke: new ol.style.Stroke({color: "rgba(255, 204, 0, 1)", lineDash: null, width: 0}), fill: new ol.style.Fill({color: "rgba(255, 204, 0, 1)"})})
                        })
                        ],
"Tri Tiro": [ new ol.style.Style({
                            image: new ol.style.Circle({radius: 4.56, stroke: new ol.style.Stroke({color: "rgba(255, 204, 0, 1)", lineDash: null, width: 0}), fill: new ol.style.Fill({color: "rgba(255, 204, 0, 1)"})})
                        })
                        ,new ol.style.Style({
                            image: new ol.style.Circle({radius: 0.95, stroke: new ol.style.Stroke({color: "rgba(255, 204, 0, 1)", lineDash: null, width: 0}), fill: new ol.style.Fill({color: "rgba(255, 204, 0, 1)"})})
                        })
                        ],
"Tugondeng": [ new ol.style.Style({
                            image: new ol.style.Circle({radius: 4.56, stroke: new ol.style.Stroke({color: "rgba(255, 204, 0, 1)", lineDash: null, width: 0}), fill: new ol.style.Fill({color: "rgba(255, 204, 0, 1)"})})
                        })
                        ,new ol.style.Style({
                            image: new ol.style.Circle({radius: 0.95, stroke: new ol.style.Stroke({color: "rgba(255, 204, 0, 1)", lineDash: null, width: 0}), fill: new ol.style.Fill({color: "rgba(255, 204, 0, 1)"})})
                        })
                        ],
"": [ new ol.style.Style({
                            image: new ol.style.Circle({radius: 4.56, stroke: new ol.style.Stroke({color: "rgba(255, 204, 0, 1)", lineDash: null, width: 0}), fill: new ol.style.Fill({color: "rgba(255, 204, 0, 1)"})})
                        })
                        ,new ol.style.Style({
                            image: new ol.style.Circle({radius: 0.95, stroke: new ol.style.Stroke({color: "rgba(255, 204, 0, 1)", lineDash: null, width: 0}), fill: new ol.style.Fill({color: "rgba(255, 204, 0, 1)"})})
                        })
                        ]};
                    var textStyleCache_toponimi={}
                    var clusterStyleCache_toponimi={}
                    var style_toponimi = function(feature, resolution){
                        
                        var value = feature.get("toponimi");
                        var style = categories_toponimi[value];
                        var allStyles = [];
                        
                        allStyles.push.apply(allStyles, style);
                        return allStyles;
                    };
                    var selectionStyle_toponimi = function(feature, resolution){
                        
                        var value = feature.get("toponimi");
                        var style = categoriesSelected_toponimi[value]
                        var allStyles = [];
                        
                        allStyles.push.apply(allStyles, style);
                        return allStyles;
                    };
var baseLayers = [new ol.layer.Tile({
                        type: 'base',
                        title: 'No base layer'/*
})
,new ol.layer.Tile({
    type: 'base',
    title: 'CartoDB dark',
    source: new ol.source.XYZ({
        url: 'http://s.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}.png',
        attributions: [new ol.Attribution({ html: ['&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, &copy; <a href="http://cartodb.com/attributions">CartoDB</a>']
        })]
    }),
    projection: 'EPSG:3857'*/
})
,new ol.layer.Tile({
    type: 'base',
    title: 'OSM Mapnik',
    source: new ol.source.OSM(),
    projection: 'EPSG:3857'
})
,new ol.layer.Tile({
    type: 'base',
    title: 'Citra Satelit',
    source: new ol.source.XYZ({
        attributions: [new ol.Attribution({ html:['Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community']})],
        url: 'http://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}'
    }),
    projection: 'EPSG:3857'
})
];var baseLayersGroup = new ol.layer.Group({showContent: true,'type':
                    'base-group', 'title': 'Base maps', layers: baseLayers});var overviewMapBaseLayer = baseLayersGroup;
var overlayLayers = [];var overlaysGroup = new ol.layer.Group({showContent: true, 'title': 'Overlays', layers: overlayLayers});
var lyr_rencanapolaruang = new ol.layer.Vector({
                    opacity: 1.0,
                    source: new ol.source.Vector(),
                     
                    style: style_rencanapolaruang,
                    selectedStyle: selectionStyle_rencanapolaruang,
                    title: "Rencana Pola Ruang",
                    id: "rencana_pola_ruang220230805031438557",
                    filters: [],
                    timeInfo: null,
                    isSelectable: true,
                    popupInfo: "<table class='popup-table'><tr><th>Attribute</th><th>Value</th><tr><td>pola_ruang</td><td style='text-align:right'>[pola_ruang]</td></tr><tr><td>Keterangan</td><td style='text-align:right'>[Keterangan]</td></tr></table>"
                });
rencanapolaruang_geojson_callback = function(geojson) {
                              lyr_rencanapolaruang.getSource().addFeatures(new ol.format.GeoJSON().readFeatures(geojson));
                        };
var lyr_rencanarelkeretaapi = new ol.layer.Vector({
                    opacity: 1.0,
                    source: new ol.source.Vector(),
                     
                    style: style_rencanarelkeretaapi,
                    selectedStyle: selectionStyle_rencanarelkeretaapi,
                    title: "Rencana Rel Kereta Api",
                    id: "rencana_rel_kereta_api20230805031548148",
                    filters: [],
                    timeInfo: null,
                    isSelectable: true,
                    popupInfo: "<table class='popup-table'><tr><th>Attribute</th><th>Value</th><tr><td>Id</td><td style='text-align:right'>[Id]</td></tr><tr><td>Panjang</td><td style='text-align:right'>[Panjang]</td></tr><tr><td>NAMA</td><td style='text-align:right'>[NAMA]</td></tr><tr><td>Jurusan</td><td style='text-align:right'>[Jurusan]</td></tr><tr><td>JENIS</td><td style='text-align:right'>[JENIS]</td></tr><tr><td>Keterangan</td><td style='text-align:right'>[Keterangan]</td></tr></table>"
                });
rencanarelkeretaapi_geojson_callback = function(geojson) {
                              lyr_rencanarelkeretaapi.getSource().addFeatures(new ol.format.GeoJSON().readFeatures(geojson));
                        };
var lyr_rencanajalan = new ol.layer.Vector({
                    opacity: 1.0,
                    source: new ol.source.Vector(),
                     
                    style: style_rencanajalan,
                    selectedStyle: selectionStyle_rencanajalan,
                    title: "Rencana Jalan",
                    id: "jalan_rencana20230805031548095",
                    filters: [],
                    timeInfo: null,
                    isSelectable: true,
                    popupInfo: "<table class='popup-table'><tr><th>Attribute</th><th>Value</th><tr><td>OBJECTID</td><td style='text-align:right'>[OBJECTID]</td></tr><tr><td>UNSUR</td><td style='text-align:right'>[UNSUR]</td></tr><tr><td>NAMA_UNSUR</td><td style='text-align:right'>[NAMA_UNSUR]</td></tr><tr><td>kelas</td><td style='text-align:right'>[kelas]</td></tr><tr><td>Eksisting</td><td style='text-align:right'>[Eksisting]</td></tr></table>"
                });
rencanajalan_geojson_callback = function(geojson) {
                              lyr_rencanajalan.getSource().addFeatures(new ol.format.GeoJSON().readFeatures(geojson));
                        };
var lyr_rencanajaringansutm = new ol.layer.Vector({
                    opacity: 1.0,
                    source: new ol.source.Vector(),
                     
                    style: style_rencanajaringansutm,
                    selectedStyle: selectionStyle_rencanajaringansutm,
                    title: "Rencana Jaringan SUTM",
                    id: "jaringan_sutm120230805031548117",
                    filters: [],
                    timeInfo: null,
                    isSelectable: true,
                    popupInfo: "<table class='popup-table'><tr><th>Attribute</th><th>Value</th><tr><td>Id</td><td style='text-align:right'>[Id]</td></tr><tr><td>KV</td><td style='text-align:right'>[KV]</td></tr><tr><td>KET</td><td style='text-align:right'>[KET]</td></tr></table>"
                });
rencanajaringansutm_geojson_callback = function(geojson) {
                              lyr_rencanajaringansutm.getSource().addFeatures(new ol.format.GeoJSON().readFeatures(geojson));
                        };
var lyr_rencanakawasanstrategis = new ol.layer.Vector({
                    opacity: 1.0,
                    source: new ol.source.Vector(),
                     
                    style: style_rencanakawasanstrategis,
                    selectedStyle: selectionStyle_rencanakawasanstrategis,
                    title: "Rencana Kawasan Strategis",
                    id: "kawasan_strategis_120230805031354222",
                    filters: [],
                    timeInfo: null,
                    isSelectable: true,
                    popupInfo: "<table class='popup-table'><tr><th>Attribute</th><th>Value</th><tr><td>Id</td><td style='text-align:right'>[Id]</td></tr><tr><td>keterangan</td><td style='text-align:right'>[keterangan]</td></tr><tr><td>ket</td><td style='text-align:right'>[ket]</td></tr></table>"
                });
rencanakawasanstrategis_geojson_callback = function(geojson) {
                              lyr_rencanakawasanstrategis.getSource().addFeatures(new ol.format.GeoJSON().readFeatures(geojson));
                        };
var lyr_rencanajaringanenergi = new ol.layer.Vector({
                    opacity: 1.0,
                    source: new ol.source.Vector(),
                     
                    style: style_rencanajaringanenergi,
                    selectedStyle: selectionStyle_rencanajaringanenergi,
                    title: "Rencana Jaringan Energi",
                    id: "jaringan_energi20230805031548101",
                    filters: [],
                    timeInfo: null,
                    isSelectable: true,
                    popupInfo: "<table class='popup-table'><tr><th>Attribute</th><th>Value</th><tr><td>Id</td><td style='text-align:right'>[Id]</td></tr><tr><td>keterangan</td><td style='text-align:right'>[keterangan]</td></tr><tr><td>Kondisi</td><td style='text-align:right'>[Kondisi]</td></tr></table>"
                });
rencanajaringanenergi_geojson_callback = function(geojson) {
                              lyr_rencanajaringanenergi.getSource().addFeatures(new ol.format.GeoJSON().readFeatures(geojson));
                        };
var lyr_rencanajaringantransportasi = new ol.layer.Vector({
                    opacity: 1.0,
                    source: new ol.source.Vector(),
                     
                    style: style_rencanajaringantransportasi,
                    selectedStyle: selectionStyle_rencanajaringantransportasi,
                    title: "Rencana Jaringan Transportasi",
                    id: "jaringan_transportasi20230805031548132",
                    filters: [],
                    timeInfo: null,
                    isSelectable: true,
                    popupInfo: "<table class='popup-table'><tr><th>Attribute</th><th>Value</th><tr><td>Id</td><td style='text-align:right'>[Id]</td></tr><tr><td>Jenis</td><td style='text-align:right'>[Jenis]</td></tr></table>"
                });
rencanajaringantransportasi_geojson_callback = function(geojson) {
                              lyr_rencanajaringantransportasi.getSource().addFeatures(new ol.format.GeoJSON().readFeatures(geojson));
                        };
var lyr_kepadatanpenduduk = new ol.layer.Vector({
                    opacity: 1.0,
                    source: new ol.source.Vector(),
                     
                    style: style_kepadatanpenduduk,
                    selectedStyle: selectionStyle_kepadatanpenduduk,
                    title: "Kepadatan Penduduk",
                    id: "kepadatan_penduduk20230805030541828",
                    filters: [],
                    timeInfo: null,
                    isSelectable: true,
                    popupInfo: "<table class='popup-table'><tr><th>Attribute</th><th>Value</th><tr><td>Id</td><td style='text-align:right'>[Id]</td></tr><tr><td>Kecamatan</td><td style='text-align:right'>[Kecamatan]</td></tr><tr><td>kepadatan</td><td style='text-align:right'>[kepadatan]</td></tr><tr><td>rerata</td><td style='text-align:right'>[rerata]</td></tr></table>"
                });
kepadatanpenduduk_geojson_callback = function(geojson) {
                              lyr_kepadatanpenduduk.getSource().addFeatures(new ol.format.GeoJSON().readFeatures(geojson));
                        };
var lyr_tutupanlahan = new ol.layer.Vector({
                    opacity: 1.0,
                    source: new ol.source.Vector(),
                     
                    style: style_tutupanlahan,
                    selectedStyle: selectionStyle_tutupanlahan,
                    title: "Tutupan Lahan",
                    id: "Tutupan_Lahan20230805030607994",
                    filters: [],
                    timeInfo: null,
                    isSelectable: true,
                    popupInfo: "<table class='popup-table'><tr><th>Attribute</th><th>Value</th><tr><td>SIMBOL</td><td style='text-align:right'>[SIMBOL]</td></tr><tr><td>KELAS_PENU</td><td style='text-align:right'>[KELAS_PENU]</td></tr></table>"
                });
tutupanlahan_geojson_callback = function(geojson) {
                              lyr_tutupanlahan.getSource().addFeatures(new ol.format.GeoJSON().readFeatures(geojson));
                        };
var lyr_topografi = new ol.layer.Vector({
                    opacity: 1.0,
                    source: new ol.source.Vector(),
                     
                    style: style_topografi,
                    selectedStyle: selectionStyle_topografi,
                    title: "Topografi",
                    id: "topografi20230805030556362",
                    filters: [],
                    timeInfo: null,
                    isSelectable: true,
                    popupInfo: "<table class='popup-table'><tr><th>Attribute</th><th>Value</th><tr><td>ID</td><td style='text-align:right'>[ID]</td></tr><tr><td>GRIDCODE</td><td style='text-align:right'>[GRIDCODE]</td></tr><tr><td>ketinggian</td><td style='text-align:right'>[ketinggian]</td></tr></table>"
                });
topografi_geojson_callback = function(geojson) {
                              lyr_topografi.getSource().addFeatures(new ol.format.GeoJSON().readFeatures(geojson));
                        };
var lyr_kemiringanlereng = new ol.layer.Vector({
                    opacity: 1.0,
                    source: new ol.source.Vector(),
                     
                    style: style_kemiringanlereng,
                    selectedStyle: selectionStyle_kemiringanlereng,
                    title: "Kemiringan Lereng",
                    id: "kemiringan_lereng20230805030529385",
                    filters: [],
                    timeInfo: null,
                    isSelectable: true,
                    popupInfo: "<table class='popup-table'><tr><th>Attribute</th><th>Value</th><tr><td>ID</td><td style='text-align:right'>[ID]</td></tr><tr><td>GRIDCODE</td><td style='text-align:right'>[GRIDCODE]</td></tr><tr><td>keterangan</td><td style='text-align:right'>[keterangan]</td></tr></table>"
                });
kemiringanlereng_geojson_callback = function(geojson) {
                              lyr_kemiringanlereng.getSource().addFeatures(new ol.format.GeoJSON().readFeatures(geojson));
                        };
var lyr_jenistanah = new ol.layer.Vector({
                    opacity: 1.0,
                    source: new ol.source.Vector(),
                     
                    style: style_jenistanah,
                    selectedStyle: selectionStyle_jenistanah,
                    title: "Jenis Tanah",
                    id: "jenis_tanah20230805030510272",
                    filters: [],
                    timeInfo: null,
                    isSelectable: true,
                    popupInfo: "<table class='popup-table'><tr><th>Attribute</th><th>Value</th><tr><td>BATUAN_MIN</td><td style='text-align:right'>[BATUAN_MIN]</td></tr></table>"
                });
jenistanah_geojson_callback = function(geojson) {
                              lyr_jenistanah.getSource().addFeatures(new ol.format.GeoJSON().readFeatures(geojson));
                        };
var lyr_formasigeologi = new ol.layer.Vector({
                    opacity: 1.0,
                    source: new ol.source.Vector(),
                     
                    style: style_formasigeologi,
                    selectedStyle: selectionStyle_formasigeologi,
                    title: "Formasi Geologi",
                    id: "formasi_geologi20230805030451021",
                    filters: [],
                    timeInfo: null,
                    isSelectable: true,
                    popupInfo: "<table class='popup-table'><tr><th>Attribute</th><th>Value</th><tr><td>SIMBOL</td><td style='text-align:right'>[SIMBOL]</td></tr><tr><td>FORMASI</td><td style='text-align:right'>[FORMASI]</td></tr><tr><td>KETERANGAN</td><td style='text-align:right'>[KETERANGAN]</td></tr></table>"
                });
formasigeologi_geojson_callback = function(geojson) {
                              lyr_formasigeologi.getSource().addFeatures(new ol.format.GeoJSON().readFeatures(geojson));
                        };
var lyr_curahhujan = new ol.layer.Vector({
                    opacity: 1.0,
                    source: new ol.source.Vector(),
                     
                    style: style_curahhujan,
                    selectedStyle: selectionStyle_curahhujan,
                    title: null,
                    id: "curah_hujan_buluk20230805030427569",
                    filters: [],
                    timeInfo: null,
                    isSelectable: true,
                    popupInfo: "<table class='popup-table'><tr><th>Attribute</th><th>Value</th><tr><td>CURAH_HUJA</td><td style='text-align:right'>[CURAH_HUJA]</td></tr><tr><td>sumber_pet</td><td style='text-align:right'>[sumber_pet]</td></tr></table>"
                });
curahhujan_geojson_callback = function(geojson) {
                              lyr_curahhujan.getSource().addFeatures(new ol.format.GeoJSON().readFeatures(geojson));
                        };
var lyr_daerahaliransungai = new ol.layer.Vector({
                    opacity: 1.0,
                    source: new ol.source.Vector(),
                     
                    style: style_daerahaliransungai,
                    selectedStyle: selectionStyle_daerahaliransungai,
                    title: "Daerah Aliran Sungai",
                    id: "das_bulukumba20230805030439141",
                    filters: [],
                    timeInfo: null,
                    isSelectable: true,
                    popupInfo: "<table class='popup-table'><tr><th>Attribute</th><th>Value</th><tr><td>KD_LINTAS</td><td style='text-align:right'>[KD_LINTAS]</td></tr><tr><td>KD_DAS</td><td style='text-align:right'>[KD_DAS]</td></tr><tr><td>NAMA_DAS</td><td style='text-align:right'>[NAMA_DAS]</td></tr><tr><td>WIL_KERJA</td><td style='text-align:right'>[WIL_KERJA]</td></tr></table>"
                });
daerahaliransungai_geojson_callback = function(geojson) {
                              lyr_daerahaliransungai.getSource().addFeatures(new ol.format.GeoJSON().readFeatures(geojson));
                        };
var lyr_administrasi = new ol.layer.Vector({
                    opacity: 1.0,
                    source: new ol.source.Vector(),
                     
                    style: style_administrasi,
                    selectedStyle: selectionStyle_administrasi,
                    title: "Administrasi",
                    id: "batas_administrasi_poly20230805025741364",
                    filters: [],
                    timeInfo: null,
                    isSelectable: true,
                    popupInfo: "<table class='popup-table'><tr><th>Attribute</th><th>Value</th><tr><td>Id</td><td style='text-align:right'>[Id]</td></tr><tr><td>kecamata_1</td><td style='text-align:right'>[kecamata_1]</td></tr><tr><td>keterangan</td><td style='text-align:right'>[keterangan]</td></tr></table>"
                });
administrasi_geojson_callback = function(geojson) {
                              lyr_administrasi.getSource().addFeatures(new ol.format.GeoJSON().readFeatures(geojson));
                        };
var lyr_sungaiarea = new ol.layer.Vector({
                    opacity: 1.0,
                    source: new ol.source.Vector(),
                     
                    style: style_sungaiarea,
                    selectedStyle: selectionStyle_sungaiarea,
                    title: "Sungai Area",
                    id: "sungai_poly20230805030221244",
                    filters: [],
                    timeInfo: null,
                    isSelectable: true,
                    popupInfo: "<table class='popup-table'><tr><th>Attribute</th><th>Value</th><tr><td>Id</td><td style='text-align:right'>[Id]</td></tr><tr><td>nama_sunga</td><td style='text-align:right'>[nama_sunga]</td></tr></table>"
                });
sungaiarea_geojson_callback = function(geojson) {
                              lyr_sungaiarea.getSource().addFeatures(new ol.format.GeoJSON().readFeatures(geojson));
                        };
var lyr_garispantai = new ol.layer.Vector({
                    opacity: 1.0,
                    source: new ol.source.Vector(),
                     
                    style: style_garispantai,
                    selectedStyle: selectionStyle_garispantai,
                    title: "Garis Pantai",
                    id: "garis_pantai20230805025953298",
                    filters: [],
                    timeInfo: null,
                    isSelectable: true,
                    popupInfo: "<table class='popup-table'><tr><th>Attribute</th><th>Value</th><tr><td>FID_laut</td><td style='text-align:right'>[FID_laut]</td></tr><tr><td>Id</td><td style='text-align:right'>[Id]</td></tr></table>"
                });
garispantai_geojson_callback = function(geojson) {
                              lyr_garispantai.getSource().addFeatures(new ol.format.GeoJSON().readFeatures(geojson));
                        };
var lyr_sungaigaris = new ol.layer.Vector({
                    opacity: 1.0,
                    source: new ol.source.Vector(),
                     
                    style: style_sungaigaris,
                    selectedStyle: selectionStyle_sungaigaris,
                    title: "Sungai Garis",
                    id: "sungai_line20230805030221229",
                    filters: [],
                    timeInfo: null,
                    isSelectable: true,
                    popupInfo: "<table class='popup-table'><tr><th>Attribute</th><th>Value</th><tr><td>LENGTH</td><td style='text-align:right'>[LENGTH]</td></tr><tr><td>KODE_UNSUR</td><td style='text-align:right'>[KODE_UNSUR]</td></tr><tr><td>TOPONIM</td><td style='text-align:right'>[TOPONIM]</td></tr><tr><td>PELAKSANA</td><td style='text-align:right'>[PELAKSANA]</td></tr><tr><td>UPDATE</td><td style='text-align:right'>[UPDATE]</td></tr></table>"
                });
sungaigaris_geojson_callback = function(geojson) {
                              lyr_sungaigaris.getSource().addFeatures(new ol.format.GeoJSON().readFeatures(geojson));
                        };
var lyr_jalan = new ol.layer.Vector({
                    opacity: 1.0,
                    source: new ol.source.Vector(),
                     
                    style: style_jalan,
                    selectedStyle: selectionStyle_jalan,
                    title: "Jalan",
                    id: "jalan_rencana20230805030158008",
                    filters: [],
                    timeInfo: null,
                    isSelectable: true,
                    popupInfo: "<table class='popup-table'><tr><th>Attribute</th><th>Value</th><tr><td>OBJECTID</td><td style='text-align:right'>[OBJECTID]</td></tr><tr><td>UNSUR</td><td style='text-align:right'>[UNSUR]</td></tr><tr><td>NAMA_UNSUR</td><td style='text-align:right'>[NAMA_UNSUR]</td></tr><tr><td>kelas</td><td style='text-align:right'>[kelas]</td></tr></table>"
                });
jalan_geojson_callback = function(geojson) {
                              lyr_jalan.getSource().addFeatures(new ol.format.GeoJSON().readFeatures(geojson));
                        };
var lyr_toponimi = new ol.layer.Vector({
                    opacity: 1.0,
                    source: new ol.source.Vector(),
                     
                    style: style_toponimi,
                    selectedStyle: selectionStyle_toponimi,
                    title: "Toponimi",
                    id: "toponimi20230805030318440",
                    filters: [],
                    timeInfo: null,
                    isSelectable: true,
                    popupInfo: "<table class='popup-table'><tr><th>Attribute</th><th>Value</th><tr><td>Id</td><td style='text-align:right'>[Id]</td></tr><tr><td>toponimi</td><td style='text-align:right'>[toponimi]</td></tr></table>"
                });
toponimi_geojson_callback = function(geojson) {
                              lyr_toponimi.getSource().addFeatures(new ol.format.GeoJSON().readFeatures(geojson));
                        };
var group_petarencana = new ol.layer.Group({
                                layers: [lyr_rencanapolaruang,lyr_rencanarelkeretaapi,lyr_rencanajalan,lyr_rencanajaringansutm,lyr_rencanakawasanstrategis,lyr_rencanajaringanenergi,lyr_rencanajaringantransportasi],
                                showContent: true,
                                title: "Peta Rencana"});
var group_petatematik = new ol.layer.Group({
                                layers: [lyr_kepadatanpenduduk,lyr_tutupanlahan,lyr_topografi,lyr_kemiringanlereng,lyr_jenistanah,lyr_formasigeologi,lyr_curahhujan,lyr_daerahaliransungai],
                                showContent: true,
                                title: "Peta Tematik"});
var group_petadasar = new ol.layer.Group({
                                layers: [lyr_administrasi,lyr_sungaiarea,lyr_garispantai,lyr_sungaigaris,lyr_jalan,lyr_toponimi],
                                showContent: true,
                                title: "Peta Dasar"});

lyr_rencanapolaruang.setVisible(false);
lyr_rencanarelkeretaapi.setVisible(false);
lyr_rencanajalan.setVisible(false);
lyr_rencanajaringansutm.setVisible(false);
lyr_rencanakawasanstrategis.setVisible(false);
lyr_rencanajaringanenergi.setVisible(false);
lyr_rencanajaringantransportasi.setVisible(false);
lyr_kepadatanpenduduk.setVisible(false);
lyr_tutupanlahan.setVisible(false);
lyr_topografi.setVisible(false);
lyr_kemiringanlereng.setVisible(false);
lyr_jenistanah.setVisible(false);
lyr_formasigeologi.setVisible(false);
lyr_curahhujan.setVisible(false);
lyr_daerahaliransungai.setVisible(false);
lyr_administrasi.setVisible(false);
lyr_sungaiarea.setVisible(false);
lyr_garispantai.setVisible(false);
lyr_sungaigaris.setVisible(false);
lyr_jalan.setVisible(false);
lyr_toponimi.setVisible(false);for (var i=0;i<baseLayers.length;i++){baseLayers[i].setVisible(false);}baseLayers[1].setVisible(true);
var layersList = [group_petarencana,group_petatematik,group_petadasar];layersList.unshift(baseLayersGroup);
var legendData = {"garis_pantai20230805025953298": [{"href": "17_0.png", "title": ""}], "sungai_line20230805030221229": [{"href": "18_0.png", "title": ""}], "topografi20230805030556362": [{"href": "9_0.png", "title": "0 - 200"}, {"href": "9_1.png", "title": "1000 - 1200"}, {"href": "9_2.png", "title": "1200 - 1400"}, {"href": "9_3.png", "title": "1400 - 1600"}, {"href": "9_4.png", "title": "1600 - 1800"}, {"href": "9_5.png", "title": "1800 - 2000"}, {"href": "9_6.png", "title": "200 - 400"}, {"href": "9_7.png", "title": "2000 - 2200"}, {"href": "9_8.png", "title": "2200 - 2400"}, {"href": "9_9.png", "title": "2400 - 2600"}, {"href": "9_10.png", "title": "400 - 600"}, {"href": "9_11.png", "title": "600 - 800"}, {"href": "9_12.png", "title": "800 - 1000"}, {"href": "9_13.png", "title": ""}], "batas_administrasi_poly20230805025741364": [{"href": "15_0.png", "title": ""}], "jalan_rencana20230805030158008": [{"href": "19_0.png", "title": ""}], "Tutupan_Lahan20230805030607994": [{"href": "8_0.png", "title": "Hutan Sekunder"}, {"href": "8_1.png", "title": "Perkebunan"}, {"href": "8_2.png", "title": "Permukiman"}, {"href": "8_3.png", "title": "Pertanian l. Kering Campur"}, {"href": "8_4.png", "title": "Savana"}, {"href": "8_5.png", "title": "Sawah"}, {"href": "8_6.png", "title": "Semak/Belukar"}, {"href": "8_7.png", "title": "Tambak"}, {"href": "8_8.png", "title": "Tubuh Air"}, {"href": "8_9.png", "title": ""}], "kawasan_strategis_120230805031354222": [{"href": "4_0.png", "title": "Kawasan Adat Amma Toa"}, {"href": "4_1.png", "title": "Kawasan Agropolitan"}, {"href": "4_2.png", "title": "Kawasan Agrowisata"}, {"href": "4_3.png", "title": "Kawasan Bandar Udara"}, {"href": "4_4.png", "title": "Kawasan Danau Kahaya"}, {"href": "4_5.png", "title": "Kawasan MPC"}, {"href": "4_6.png", "title": "Kawasan Perdagangan"}, {"href": "4_7.png", "title": "Kawasan Wisata Tanjung Bira"}, {"href": "4_8.png", "title": "Tempat Pembuatan Perahu Phinisi"}, {"href": "4_9.png", "title": "Water Front City"}, {"href": "4_10.png", "title": ""}], "formasi_geologi20230805030451021": [{"href": "12_0.png", "title": ""}, {"href": "12_1.png", "title": "Anggota Salayar Formasi Walane"}, {"href": "12_2.png", "title": "Basal dan retal basal"}, {"href": "12_3.png", "title": "Batuan Gunungapi"}, {"href": "12_4.png", "title": "Batuan Gunungapi Lompobatang"}, {"href": "12_5.png", "title": "Batuan Malihan Kontak"}, {"href": "12_6.png", "title": "Breksi, Lahar dan tupa"}, {"href": "12_7.png", "title": "Endapan Aluvium dan Pantai"}, {"href": "12_8.png", "title": "Formasi Walanae"}], "jaringan_sutm120230805031548117": [{"href": "3_0.png", "title": ""}], "kemiringan_lereng20230805030529385": [{"href": "10_0.png", "title": "> 40"}, {"href": "10_1.png", "title": "15 - 40"}, {"href": "10_2.png", "title": "5 - 15"}, {"href": "10_3.png", "title": "2 - 5"}, {"href": "10_4.png", "title": "0 - 2"}, {"href": "10_5.png", "title": ""}], "sungai_poly20230805030221244": [{"href": "16_0.png", "title": ""}], "rencana_pola_ruang220230805031438557": [{"href": "0_0.png", "title": "Hutan Lindung"}, {"href": "0_1.png", "title": "Hutan Produksi Tetap"}, {"href": "0_2.png", "title": "Perkebunan"}, {"href": "0_3.png", "title": "Permukiman"}, {"href": "0_4.png", "title": "Pertanian Lahan Basah"}, {"href": "0_5.png", "title": "Pertanian Lahan Kering"}, {"href": "0_6.png", "title": "Sempadan pantai"}, {"href": "0_7.png", "title": "Sempadan sungai"}, {"href": "0_8.png", "title": "Tambak"}, {"href": "0_9.png", "title": "THR. BONTOBAHARI"}, {"href": "0_10.png", "title": ""}], "jaringan_energi20230805031548101": [{"href": "5_0.png", "title": "Gardu Induk"}, {"href": "5_1.png", "title": "PLTD"}, {"href": "5_2.png", "title": "PLTMH"}, {"href": "5_3.png", "title": ""}], "jalan_rencana20230805031548095": [{"href": "2_0.png", "title": ""}], "jaringan_transportasi20230805031548132": [{"href": "6_0.png", "title": "Pelabuhan Khusus"}, {"href": "6_1.png", "title": "Pelabuhan Pengumpan"}, {"href": "6_2.png", "title": "Pelabuhan Penyeberangan"}, {"href": "6_3.png", "title": "Rencana Bandara"}, {"href": "6_4.png", "title": ""}], "jenis_tanah20230805030510272": [{"href": "11_0.png", "title": "Aluvium muda, berasal dari endapan laut"}, {"href": "11_1.png", "title": "Aluvium muda, berasal dari endapan sungai"}, {"href": "11_2.png", "title": "Aluvium, endapan kipas aluvial"}, {"href": "11_3.png", "title": "Aluvium, endapan kipas aluvial; aluvium muda breasal dari e"}, {"href": "11_4.png", "title": "Andesit; basalt"}, {"href": "11_5.png", "title": "Andesit; basalt; tephra berbutir halus; tephra berbutir kas"}, {"href": "11_6.png", "title": "Basalt; andesit"}, {"href": "11_7.png", "title": "Batu gamping; batu karang; napal"}, {"href": "11_8.png", "title": "Marmer; batu gamping"}, {"href": "11_9.png", "title": "Napal; batu gamping"}, {"href": "11_10.png", "title": "Tufit; batu lumpur; batu pasir"}, {"href": "11_11.png", "title": "Tufit; batu pasir; batu lumpur"}, {"href": "11_12.png", "title": "Tufit; tephra berbutir halus; batu pasir; batu lumpur"}, {"href": "11_13.png", "title": ""}], "kepadatan_penduduk20230805030541828": [{"href": "7_0.png", "title": "> 450"}, {"href": "7_1.png", "title": "200 - 250"}, {"href": "7_2.png", "title": "250 - 300"}, {"href": "7_3.png", "title": "300 - 350"}, {"href": "7_4.png", "title": "350 - 400"}, {"href": "7_5.png", "title": "400 - 450"}, {"href": "7_6.png", "title": ""}], "rencana_rel_kereta_api20230805031548148": [{"href": "1_0.png", "title": ""}], "das_bulukumba20230805030439141": [{"href": "14_0.png", "title": "APARANG"}, {"href": "14_1.png", "title": "BALALOHE"}, {"href": "14_2.png", "title": "BAPALAIKANG"}, {"href": "14_3.png", "title": "BARA"}, {"href": "14_4.png", "title": "BIALO"}, {"href": "14_5.png", "title": "BIJAWANG"}, {"href": "14_6.png", "title": "BIOLA"}, {"href": "14_7.png", "title": "BIPALO HE"}, {"href": "14_8.png", "title": "BORONG PELENGGE"}, {"href": "14_9.png", "title": "BUNYUTANA"}, {"href": "14_10.png", "title": "DARUBIAH"}, {"href": "14_11.png", "title": "DOAJANG"}, {"href": "14_12.png", "title": "GARACING"}, {"href": "14_13.png", "title": "GUSUNGE"}, {"href": "14_14.png", "title": "KAJANG KEKE"}, {"href": "14_15.png", "title": "KALUKUBODO"}, {"href": "14_16.png", "title": "KALUMPANG"}, {"href": "14_17.png", "title": "KAMPUANG"}, {"href": "14_18.png", "title": "KASSI"}, {"href": "14_19.png", "title": "KIRASA"}, {"href": "14_20.png", "title": "LAIKANG"}, {"href": "14_21.png", "title": "LASANG LASANG"}, {"href": "14_22.png", "title": "LIUKANG LOE"}, {"href": "14_23.png", "title": "LO HE"}, {"href": "14_24.png", "title": "LURAYA"}, {"href": "14_25.png", "title": "MOTTI"}, {"href": "14_26.png", "title": "PUBAB ANJAYA"}, {"href": "14_27.png", "title": "SAPO"}, {"href": "14_28.png", "title": "SELANG"}, {"href": "14_29.png", "title": "TANETANG"}, {"href": "14_30.png", "title": "TANGAMBANG"}, {"href": "14_31.png", "title": "TARAMPANG"}, {"href": "14_32.png", "title": "TEKONA"}, {"href": "14_33.png", "title": "TOMBO LOANG"}, {"href": "14_34.png", "title": "TURUNGARA"}, {"href": "14_35.png", "title": "UJUNG LOE"}, {"href": "14_36.png", "title": ""}], "toponimi20230805030318440": [{"href": "20_0.png", "title": "Anrang"}, {"href": "20_1.png", "title": "Anrihua"}, {"href": "20_2.png", "title": "Ara"}, {"href": "20_3.png", "title": "Baji Minasa"}, {"href": "20_4.png", "title": "Balangpesoang"}, {"href": "20_5.png", "title": "Balangtoroang"}, {"href": "20_6.png", "title": "Balibo"}, {"href": "20_7.png", "title": "Balla Saraja"}, {"href": "20_8.png", "title": "Balleanging"}, {"href": "20_9.png", "title": "Balong"}, {"href": "20_10.png", "title": "Barombong"}, {"href": "20_11.png", "title": "Barugae"}, {"href": "20_12.png", "title": "Batang"}, {"href": "20_13.png", "title": "Batu Nilamung"}, {"href": "20_14.png", "title": "Batukaropa"}, {"href": "20_15.png", "title": "Batulohe"}, {"href": "20_16.png", "title": "Benjala"}, {"href": "20_17.png", "title": "Benteng Gattareng"}, {"href": "20_18.png", "title": "Benteng Malewang"}, {"href": "20_19.png", "title": "Benteng Palioi"}, {"href": "20_20.png", "title": "Bentengnge"}, {"href": "20_21.png", "title": "Bialo"}, {"href": "20_22.png", "title": "Bijawang"}, {"href": "20_23.png", "title": "Bintarore"}, {"href": "20_24.png", "title": "Bira"}, {"href": "20_25.png", "title": "Bonto Baji"}, {"href": "20_26.png", "title": "Bonto Batua"}, {"href": "20_27.png", "title": "Bonto Biraeng"}, {"href": "20_28.png", "title": "Bonto Bulaeng"}, {"href": "20_29.png", "title": "Bonto Haru"}, {"href": "20_30.png", "title": "Bonto Kamase"}, {"href": "20_31.png", "title": "Bonto Lohe"}, {"href": "20_32.png", "title": "Bonto Macinna"}, {"href": "20_33.png", "title": "Bonto Marannu"}, {"href": "20_34.png", "title": "Bonto Masila"}, {"href": "20_35.png", "title": "Bonto Mate'ne"}, {"href": "20_36.png", "title": "Bonto Minasa"}, {"href": "20_37.png", "title": "Bonto Raja"}, {"href": "20_38.png", "title": "Bonto Rannu"}, {"href": "20_39.png", "title": "Bonto Sunggu"}, {"href": "20_40.png", "title": "Bonto Tangnga"}, {"href": "20_41.png", "title": "Bontobangun"}, {"href": "20_42.png", "title": "Bontomanai"}, {"href": "20_43.png", "title": "Bontomangiring"}, {"href": "20_44.png", "title": "Bontonyeleng"}, {"href": "20_45.png", "title": "Borong"}, {"href": "20_46.png", "title": "Borongrappoa"}, {"href": "20_47.png", "title": "Buhung Bundang"}, {"href": "20_48.png", "title": "Bukit Harapan"}, {"href": "20_49.png", "title": "Bukit Tinggi"}, {"href": "20_50.png", "title": "Bulobulo"}, {"href": "20_51.png", "title": "Bulolohe"}, {"href": "20_52.png", "title": "Caile"}, {"href": "20_53.png", "title": "Caramming"}, {"href": "20_54.png", "title": "Dampang"}, {"href": "20_55.png", "title": "Darubiah"}, {"href": "20_56.png", "title": "Dwi Tiro"}, {"href": "20_57.png", "title": "Ela-ela"}, {"href": "20_58.png", "title": "Garanta"}, {"href": "20_59.png", "title": "Garantungan"}, {"href": "20_60.png", "title": "Gattareng"}, {"href": "20_61.png", "title": "Gunturu"}, {"href": "20_62.png", "title": "Jalanjang"}, {"href": "20_63.png", "title": "Jawi-jawi"}, {"href": "20_64.png", "title": "Jo'jolo"}, {"href": "20_65.png", "title": "Kalumeme"}, {"href": "20_66.png", "title": "Kalumpang"}, {"href": "20_67.png", "title": "Kambuno"}, {"href": "20_68.png", "title": "Karama"}, {"href": "20_69.png", "title": "Karassing"}, {"href": "20_70.png", "title": "Kasimpureng"}, {"href": "20_71.png", "title": "Kindang"}, {"href": "20_72.png", "title": "Laikang"}, {"href": "20_73.png", "title": "Lembang"}, {"href": "20_74.png", "title": "Lembang Lohe"}, {"href": "20_75.png", "title": "Lembanna"}, {"href": "20_76.png", "title": "Loka"}, {"href": "20_77.png", "title": "Lolisang"}, {"href": "20_78.png", "title": "Lonrong"}, {"href": "20_79.png", "title": "Malleleng"}, {"href": "20_80.png", "title": "Manjalling"}, {"href": "20_81.png", "title": "Manyampa"}, {"href": "20_82.png", "title": "Mariorennu"}, {"href": "20_83.png", "title": "Matekko"}, {"href": "20_84.png", "title": "Mattirowalie"}, {"href": "20_85.png", "title": "Mattoanging"}, {"href": "20_86.png", "title": "Orogading"}, {"href": "20_87.png", "title": "Padang"}, {"href": "20_88.png", "title": "Padangloang"}, {"href": "20_89.png", "title": "Paenrelompoe"}, {"href": "20_90.png", "title": "Pakubalaho"}, {"href": "20_91.png", "title": "Palambarae"}, {"href": "20_92.png", "title": "Palampang"}, {"href": "20_93.png", "title": "Pantama"}, {"href": "20_94.png", "title": "Pataro"}, {"href": "20_95.png", "title": "Pattiroang"}, {"href": "20_96.png", "title": "Polewali"}, {"href": "20_97.png", "title": "Possitana"}, {"href": "20_98.png", "title": "Salassae"}, {"href": "20_99.png", "title": "Salemba"}, {"href": "20_100.png", "title": "Sangkala"}, {"href": "20_101.png", "title": "Sapanang"}, {"href": "20_102.png", "title": "Sapebonto"}, {"href": "20_103.png", "title": "Sapolohe"}, {"href": "20_104.png", "title": "Seppang"}, {"href": "20_105.png", "title": "Singa"}, {"href": "20_106.png", "title": "Swatani"}, {"href": "20_107.png", "title": "Tamalanrea"}, {"href": "20_108.png", "title": "Tamaona"}, {"href": "20_109.png", "title": "Tambangan"}, {"href": "20_110.png", "title": "Tammatto"}, {"href": "20_111.png", "title": "Tanah Beru"}, {"href": "20_112.png", "title": "Tanah Harapan"}, {"href": "20_113.png", "title": "Tanah Jaya"}, {"href": "20_114.png", "title": "Tanah Kongkong"}, {"href": "20_115.png", "title": "Tanah Lemo"}, {"href": "20_116.png", "title": "Tanatoa"}, {"href": "20_117.png", "title": "Tanete"}, {"href": "20_118.png", "title": "Tanuntung"}, {"href": "20_119.png", "title": "Terang-terang"}, {"href": "20_120.png", "title": "Tibona"}, {"href": "20_121.png", "title": "Tri Tiro"}, {"href": "20_122.png", "title": "Tugondeng"}, {"href": "20_123.png", "title": ""}]};
var view = new ol.View({ maxZoom: 32, minZoom: 1, projection: 'EPSG:3857'});
var originalExtent = [13360958.598955, -642751.559544, 13422009.905098, -592060.351337];

var map = new ol.Map({
  layers: layersList,
  view: view,
  controls: [new ol.control.FullScreen(),
new ol.control.ZoomSlider(),
new ol.control.ScaleLine({"minWidth": 64, "units": "metric"}),
new ol.control.Zoom({"zoomOutTipLabel": "Zoom out", "zoomInTipLabel": "Zoom in", "delta": 1.2, "duration": 250, "zoomInLabel": "+", "zoomOutLabel": "-"}),
new ol.control.Attribution(),
new ol.control.MousePosition({"projection": "EPSG:4326", "undefinedHTML": "&nbsp;", "coordinateFormat": ol.coordinate.createStringXY(4)})]
});



var BasicApp = React.createClass({
  componentDidMount() {
    map.setTarget(ReactDOM.findDOMNode(this.refs.map));
    view = map.getView();
    view.fit(originalExtent, map.getSize());
    map.addControl(new ol.control.OverviewMap({collapsed: false, layers: [overviewMapBaseLayer, lyr_administrasi]}));
  },
  _toggle(el) {
    if (el.style.display === 'block') {
      el.style.display = 'none';
    } else {
      el.style.display = 'block';
    }
  },
  _toggleTable() {
    this._toggle(document.getElementById('table-panel'));
    this.refs.table.getWrappedInstance().setDimensionsOnState();
  },
  _toggleWFST() {
    this._toggle(document.getElementById('wfst'));
  },
  _toggleQuery() {
    this._toggle(document.getElementById('query-panel'));
  },
  _toggleEdit() {
    this._toggle(document.getElementById('edit-tool-panel'));
  },
  _toggleAboutPanel() {
    this._toggle(document.getElementById('about-panel'));
  },
  _toggleChartPanel(evt) {
    evt.preventDefault();
    this._toggle(document.getElementById('chart-panel'));
  },
  _navigationFunc() {
    ToolActions.activateTool(null, 'navigation');
  },
  render() {
    var options = [{text: 'Tabel', icon: 'list-alt', onClick: this._toggleTable.bind(this)},
{jsx: React.createElement(Measure, {toggleGroup:'navigation', map:map})},
{jsx: React.createElement(DD.Dropdown, {title:"Tautan"},
                                        React.createElement(DD.DropdownItem, {href:"https://instagram.com/konturgeografi?igshid=OGQ5ZDc2ODk2ZA=="}, "Mitra"),
React.createElement(DD.DropdownItem, {href:"https://instagram.com/__syamsir__?utm_source=qr&igshid=MzNlNGNkZWQ4Mg%3D%3D"}, "Pembuat"),
React.createElement(DD.DropdownItem, {href:"https://instagram.com/rumi.prasad?igshid=OGQ5ZDc2ODk2ZA=="}, "Mentor"),
React.createElement(DD.DropdownItem, {href:"https://bulukumbakab.go.id"}, "Instansi")
                                    )},
{text: 'Digitasi', icon: 'pencil', onClick: this._toggleEdit.bind(this)},
{
                              jsx: React.createElement(Select, {toggleGroup: 'navigation', map:map})
                            }, {
                              text: 'Navigasi',
                              icon: 'hand-paper-o',
                              onClick: this._navigationFunc.bind(this)
                            },
{jsx: React.createElement(AddLayer, {map:map})},
{exclude: true, jsx: React.createElement("a", {className:"navbar-brand", href:"beranda/index_beranda.html"/*, target:"_blank"*/}, "Beranda")}];
    return React.createElement("article", null,
      React.createElement(Toolbar, {options: options}
      ),
      React.createElement("div", {id: 'content'},
        React.createElement("div", {id: 'map', ref: 'map'},
 React.createElement("div", {id: 'edit-tool-panel'},
                                      React.createElement(Edit, {map: map, toggleGroup:'navigation'})
                                    ),
React.createElement("div", {id: 'popup', className: 'ol-popup'},
                                    React.createElement(InfoPopup, {map: map, hover: false})
                                  )
        ),
React.createElement("div", {id: 'table-panel', className: 'attributes-table'},
                                          React.createElement(FeatureTable, {offset: [20, 20], ref: 'table', resizeTo: 'table-panel', layer: lyr_rencanapolaruang, pointZoom:16, map: map})
                                    ),
React.createElement("div",{id: "layerlist"},
                                    React.createElement(LayerList, {showOpacity:true, showDownload:true, 
                                        showGroupContent:true, showZoomTo:true, allowReordering:false, allowLabeling: true,
                                        allowFiltering:false, tipLabel:'layers', expandOnHover:true,
                                        downloadFormat:'KML', map:map})),
React.createElement("div", {id:'geolocation-control', className:'ol-unselectable ol-control'},
                                    React.createElement(Geolocation, {map:map})
                                  ),
React.createElement("div", {id:'home-button', className:'ol-unselectable ol-control'},
                                    React.createElement(HomeButton, {map:map})
                                  ),/*
React.createElement("div",{id: "legend"},
                                React.createElement(QGISLegend, {map:map, legendBasePath:'./resources/legend/',showExpandedOnStartup:false, expandOnHover:true, legendData:legendData})
                            )*/
      )
    );
  }
});

ReactDOM.render(React.createElement(IntlProvider, {locale: 'en'}, React.createElement(BasicApp)), document.getElementById('main'));


