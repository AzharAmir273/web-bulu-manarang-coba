var defaultFill = new ol.style.Fill({
   color: 'rgba(255,255,255,0.4)'
 });
 var defaultStroke = new ol.style.Stroke({
   color: '#3399CC',
   width: 1.25
 });
 var defaultSelectionFill = new ol.style.Fill({
   color: 'rgba(255,255,0,0.4)'
 });
 var defaultSelectionStroke = new ol.style.Stroke({
   color: '#FFFF00',
   width: 1.25
 });



                    var textStyleCache_batasi={}
                    var clusterStyleCache_batasi={}
                    var style_batasi = function(feature, resolution){
                        
                        var value = "";
                        var style = [ new ol.style.Style({
                            stroke: new ol.style.Stroke({color: "rgba(0,0,0,1.0)", lineDash: null, width: 0}),
                        fill: new ol.style.Fill({color: "rgba(182,109,194,1.0)"})
                        })
                        ];
                        var allStyles = [];
                        
                        allStyles.push.apply(allStyles, style);
                        return allStyles;
                    };
                    var selectionStyle_batasi = function(feature, resolution){
                        
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

                    var textStyleCache_bulu_manarang={}
                    var clusterStyleCache_bulu_manarang={}
                    var style_bulu_manarang = function(feature, resolution){
                        
                        var value = "";
                        var style = [ new ol.style.Style({
                            stroke: new ol.style.Stroke({color: "rgba(0,0,0,1.0)", lineDash: null, width: 0}),
                        fill: new ol.style.Fill({color: "rgba(104,160,87,1.0)"})
                        })
                        ];
                        var allStyles = [];
                        
                        allStyles.push.apply(allStyles, style);
                        return allStyles;
                    };
                    var selectionStyle_bulu_manarang = function(feature, resolution){
                        
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

                    var textStyleCache_coba={}
                    var clusterStyleCache_coba={}
                    var style_coba = function(feature, resolution){
                        
                        var value = "";
                        var style = [ new ol.style.Style({
                            image: new ol.style.Circle({radius: 3.8, stroke: new ol.style.Stroke({color: "rgba(0,0,0,1.0)", lineDash: null, width: 0}), fill: new ol.style.Fill({color: "rgba(152,64,149,1.0)"})})
                        })
                        ];
                        var allStyles = [];
                        
                        allStyles.push.apply(allStyles, style);
                        return allStyles;
                    };
                    var selectionStyle_coba = function(feature, resolution){
                        
                        var value = "";
                        var style = [ new ol.style.Style({
                            image: new ol.style.Circle({radius: 3.8, stroke: new ol.style.Stroke({color: "rgba(255, 204, 0, 1)", lineDash: null, width: 0}), fill: new ol.style.Fill({color: "rgba(255, 204, 0, 1)"})})
                        })
                        ]
                        var allStyles = [];
                        
                        allStyles.push.apply(allStyles, style);
                        return allStyles;
                    };

                    var textStyleCache_datakontur={}
                    var clusterStyleCache_datakontur={}
                    var style_datakontur = function(feature, resolution){
                        
                        var value = "";
                        var style = [ new ol.style.Style({
                            stroke: new ol.style.Stroke({color: "rgba(129,7,204,1.0)", lineDash: null, width: 0})
                        })
                        ];
                        var allStyles = [];
                        
                        allStyles.push.apply(allStyles, style);
                        return allStyles;
                    };
                    var selectionStyle_datakontur = function(feature, resolution){
                        
                        var value = "";
                        var style = [ new ol.style.Style({
                            stroke: new ol.style.Stroke({color: "rgba(255, 204, 0, 1)", lineDash: null, width: 0})
                        })
                        ]
                        var allStyles = [];
                        
                        allStyles.push.apply(allStyles, style);
                        return allStyles;
                    };
var baseLayers = [new ol.layer.Tile({
                        type: 'base',
                        title: 'No base layer'
                    }),new ol.layer.Tile({
    type: 'base',
    title: 'ESRI world imagery',
    source: new ol.source.XYZ({
        attributions: [new ol.Attribution({ html:['Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community']})],
        url: 'http://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}'
    }),
    projection: 'EPSG:3857'
})
];var baseLayersGroup = new ol.layer.Group({showContent: true,'type':
                    'base-group', 'title': 'Base maps', layers: baseLayers});
var overlayLayers = [];var overlaysGroup = new ol.layer.Group({showContent: true, 'title': 'Overlays', layers: overlayLayers});
var lyr_batasi = new ol.layer.Vector({
                    opacity: 1.0,
                    source: new ol.source.Vector(),
                     
                    style: style_batasi,
                    selectedStyle: selectionStyle_batasi,
                    title: "batasi",
                    id: "batasi20240718204554684",
                    filters: [],
                    timeInfo: null,
                    isSelectable: true,
                    popupInfo: ""
                });
batasi_geojson_callback = function(geojson) {
                              lyr_batasi.getSource().addFeatures(new ol.format.GeoJSON().readFeatures(geojson));
                        };
var lyr_bulu_manarang = new ol.layer.Vector({
                    opacity: 1.0,
                    source: new ol.source.Vector(),
                     
                    style: style_bulu_manarang,
                    selectedStyle: selectionStyle_bulu_manarang,
                    title: "Bulu_manarang",
                    id: "Bulu_manarang20240718204555655",
                    filters: [],
                    timeInfo: null,
                    isSelectable: true,
                    popupInfo: ""
                });
bulu_manarang_geojson_callback = function(geojson) {
                              lyr_bulu_manarang.getSource().addFeatures(new ol.format.GeoJSON().readFeatures(geojson));
                        };
var lyr_coba = new ol.layer.Vector({
                    opacity: 1.0,
                    source: new ol.source.Vector(),
                     
                    style: style_coba,
                    selectedStyle: selectionStyle_coba,
                    title: "coba",
                    id: "coba20240718204557831",
                    filters: [],
                    timeInfo: null,
                    isSelectable: true,
                    popupInfo: "<iframe width='560' height='315' src='https://www.youtube.com/embed/7NfLDPiUsEs?si=fMu-Hb1GXYUqmIxA' title='YouTube video player' frameborder='0' allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share' referrerpolicy='strict-origin-when-cross-origin' allowfullscreen></iframe>"
                });
coba_geojson_callback = function(geojson) {
                              lyr_coba.getSource().addFeatures(new ol.format.GeoJSON().readFeatures(geojson));
                        };
var lyr_datakontur = new ol.layer.Vector({
                    opacity: 1.0,
                    source: new ol.source.Vector(),
                     
                    style: style_datakontur,
                    selectedStyle: selectionStyle_datakontur,
                    title: "data kontur",
                    id: "data_kontur20240718204559113",
                    filters: [],
                    timeInfo: null,
                    isSelectable: true,
                    popupInfo: ""
                });
datakontur_geojson_callback = function(geojson) {
                              lyr_datakontur.getSource().addFeatures(new ol.format.GeoJSON().readFeatures(geojson));
                        };

lyr_batasi.setVisible(true);
lyr_bulu_manarang.setVisible(true);
lyr_coba.setVisible(true);
lyr_datakontur.setVisible(true);for (var i=0;i<baseLayers.length;i++){baseLayers[i].setVisible(false);}baseLayers[1].setVisible(true);
var layersList = [lyr_batasi,lyr_bulu_manarang,lyr_coba,lyr_datakontur];layersList.unshift(baseLayersGroup);
var legendData = {"batasi20240718204554684": [{"href": "0_0.png", "title": ""}], "data_kontur20240718204559113": [{"href": "3_0.png", "title": ""}], "coba20240718204557831": [{"href": "2_0.png", "title": ""}], "Bulu_manarang20240718204555655": [{"href": "1_0.png", "title": ""}]};
var view = new ol.View({ maxZoom: 32, minZoom: 1, projection: 'EPSG:3857'});
var originalExtent = [13310199.033247, -439563.584984, 13341316.136052, -422887.089154];

var map = new ol.Map({
  layers: layersList,
  view: view,
  controls: [new ol.control.FullScreen(),
new ol.control.ZoomSlider(),
new ol.control.MousePosition({"projection": "EPSG:4326", "undefinedHTML": "&nbsp;", "coordinateFormat": ol.coordinate.createStringXY(4)}),
new ol.control.ScaleLine({"minWidth": 64, "units": "metric"}),
new ol.control.Zoom({"zoomOutTipLabel": "Zoom out", "zoomInTipLabel": "Zoom in", "delta": 1.2, "duration": 250, "zoomInLabel": "+", "zoomOutLabel": "-"}),
new ol.control.Attribution()]
});



var BasicApp = React.createClass({
  componentDidMount() {
    map.setTarget(ReactDOM.findDOMNode(this.refs.map));
    view = map.getView();
    view.fit(originalExtent, map.getSize());
    
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
    var options = [{text: 'Table', icon: 'list-alt', onClick: this._toggleTable.bind(this)},
{
                              jsx: React.createElement(Select, {toggleGroup: 'navigation', map:map})
                            }, {
                              text: 'Navigation',
                              icon: 'hand-paper-o',
                              onClick: this._navigationFunc.bind(this)
                            },
{jsx: React.createElement(AddLayer, {map:map})},
{exclude: true, jsx: React.createElement("a", {className:"navbar-brand", href:"#"}, "My Web App")}];
    return React.createElement("article", null,
      React.createElement(Toolbar, {options: options}
      ),
      React.createElement("div", {id: 'content'},
        React.createElement("div", {id: 'map', ref: 'map'}
          ,
React.createElement("div", {id: 'about-panel', className:'about-panel'},
                                        React.createElement("div", {dangerouslySetInnerHTML:{__html: '<h1>Panel Title</h1><br><p>This is the description of my web app</p>'}})
                                    ),
React.createElement("div", {id: 'popup', className: 'ol-popup'},
                                    React.createElement(InfoPopup, {map: map, hover: false})
                                  )
        )
        ,
 React.createElement("div", {id: 'table-panel', className: 'attributes-table'},
                                          React.createElement(FeatureTable, {offset: [20, 20], ref: 'table', resizeTo: 'table-panel', layer: lyr_batasi, pointZoom:16, map: map})
                                    ),
React.createElement("div",{id: "layerlist"},
                                    React.createElement(LayerList, {showOpacity:false, showDownload:false,
                                        showGroupContent:true, showZoomTo:false, allowReordering:false,
                                        allowFiltering:true, tipLabel:'layers', expandOnHover:true,
                                        downloadFormat:'GeoJSON', map:map})),
React.createElement("div", {id:'geolocation-control', className:'ol-unselectable ol-control'},
                                    React.createElement(Geolocation, {map:map})
                                  ),
React.createElement("div", {id:'home-button', className:'ol-unselectable ol-control'},
                                    React.createElement(HomeButton, {map:map})
                                  ),
React.createElement("div",{id: "legend"},
                                React.createElement(QGISLegend, {map:map, legendBasePath:'./resources/legend/',showExpandedOnStartup:false, expandOnHover:true, legendData:legendData})
                            )
      )
    );
  }
});

ReactDOM.render(React.createElement(IntlProvider, {locale: 'en'}, React.createElement(BasicApp)), document.getElementById('main'));


