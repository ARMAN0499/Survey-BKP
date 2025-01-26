var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_IUP_1 = new ol.format.GeoJSON();
var features_IUP_1 = format_IUP_1.readFeatures(json_IUP_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_IUP_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_IUP_1.addFeatures(features_IUP_1);
var lyr_IUP_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_IUP_1, 
                style: style_IUP_1,
                popuplayertitle: "IUP",
                interactive: true,
                title: '<img src="styles/legend/IUP_1.png" /> IUP'
            });
var format_IUPBKP_2 = new ol.format.GeoJSON();
var features_IUPBKP_2 = format_IUPBKP_2.readFeatures(json_IUPBKP_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_IUPBKP_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_IUPBKP_2.addFeatures(features_IUPBKP_2);
var lyr_IUPBKP_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_IUPBKP_2, 
                style: style_IUPBKP_2,
                popuplayertitle: "IUP BKP",
                interactive: true,
                title: '<img src="styles/legend/IUPBKP_2.png" /> IUP BKP'
            });
var format_TitikSurvey_3 = new ol.format.GeoJSON();
var features_TitikSurvey_3 = format_TitikSurvey_3.readFeatures(json_TitikSurvey_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TitikSurvey_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TitikSurvey_3.addFeatures(features_TitikSurvey_3);
var lyr_TitikSurvey_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TitikSurvey_3, 
                style: style_TitikSurvey_3,
                popuplayertitle: "Titik Survey",
                interactive: true,
                title: '<img src="styles/legend/TitikSurvey_3.png" /> Titik Survey'
            });
var format_RuteSite_4 = new ol.format.GeoJSON();
var features_RuteSite_4 = format_RuteSite_4.readFeatures(json_RuteSite_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RuteSite_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RuteSite_4.addFeatures(features_RuteSite_4);
var lyr_RuteSite_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RuteSite_4, 
                style: style_RuteSite_4,
                popuplayertitle: "Rute Site",
                interactive: true,
                title: '<img src="styles/legend/RuteSite_4.png" /> Rute Site'
            });

lyr_GoogleSatellite_0.setVisible(true);lyr_IUP_1.setVisible(true);lyr_IUPBKP_2.setVisible(true);lyr_TitikSurvey_3.setVisible(true);lyr_RuteSite_4.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_IUP_1,lyr_IUPBKP_2,lyr_TitikSurvey_3,lyr_RuteSite_4];
lyr_IUP_1.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', 'path': 'path', });
lyr_IUPBKP_2.set('fieldAliases', {'fid': 'fid', 'Id': 'Id', 'Area': 'Area', });
lyr_TitikSurvey_3.set('fieldAliases', {'fid': 'fid', 'Id': 'Id', 'Doc.': 'Doc.', });
lyr_RuteSite_4.set('fieldAliases', {'fid': 'fid', 'Name': 'Name', 'Panjang': 'Panjang', });
lyr_IUP_1.set('fieldImages', {'fid': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', });
lyr_IUPBKP_2.set('fieldImages', {'fid': 'TextEdit', 'Id': 'TextEdit', 'Area': 'Range', });
lyr_TitikSurvey_3.set('fieldImages', {'fid': 'TextEdit', 'Id': 'TextEdit', 'Doc.': 'ExternalResource', });
lyr_RuteSite_4.set('fieldImages', {'fid': 'TextEdit', 'Name': 'TextEdit', 'Panjang': '', });
lyr_IUP_1.set('fieldLabels', {'fid': 'hidden field', 'layer': 'no label', 'path': 'hidden field', });
lyr_IUPBKP_2.set('fieldLabels', {'fid': 'hidden field', 'Id': 'no label', 'Area': 'no label', });
lyr_TitikSurvey_3.set('fieldLabels', {'fid': 'hidden field', 'Id': 'no label', 'Doc.': 'no label', });
lyr_RuteSite_4.set('fieldLabels', {'fid': 'hidden field', 'Name': 'no label', 'Panjang': 'no label', });
lyr_RuteSite_4.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});