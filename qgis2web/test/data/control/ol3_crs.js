ol.proj.get("EPSG:2964").setExtent([-4480198.522214, 1433525.798872, 4615124.978985, 6502586.830347]);
var wms_layers = [];

var format_airports_0 = new ol.format.GeoJSON();
var features_airports_0 = format_airports_0.readFeatures(json_airports_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:2964'});
var jsonSource_airports_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_airports_0.addFeatures(features_airports_0);
var lyr_airports_0 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_airports_0, 
                style: style_airports_0,
                interactive: true,
                title: '<img src="styles/legend/airports_0.png" /> airports'
            });

lyr_airports_0.setVisible(true);
var layersList = [lyr_airports_0];
lyr_airports_0.set('fieldAliases', {'ID': 'ID', 'fk_region': 'fk_region', 'ELEV': 'ELEV', 'NAME': 'NAME', 'USE': 'USE', });
lyr_airports_0.set('fieldImages', {'ID': '', 'fk_region': '', 'ELEV': '', 'NAME': '', 'USE': '', });
lyr_airports_0.set('fieldLabels', {'ID': 'no label', 'fk_region': 'no label', 'ELEV': 'no label', 'NAME': 'no label', 'USE': 'no label', });
lyr_airports_0.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});