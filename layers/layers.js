ol.proj.get("EPSG:32735").setExtent([697194.273266, 9717455.505089, 711119.564116, 9729272.839068]);
var wms_layers = [];
var baseLayer = new ol.layer.Group({
    'title': '',
    layers: [
new ol.layer.Tile({
    'title': 'OSM',
    'type': 'base',
    source: new ol.source.OSM()
})
]
});
var format_Susceptibilitauglissementdeterrain_0 = new ol.format.GeoJSON();
var features_Susceptibilitauglissementdeterrain_0 = format_Susceptibilitauglissementdeterrain_0.readFeatures(json_Susceptibilitauglissementdeterrain_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32735'});
var jsonSource_Susceptibilitauglissementdeterrain_0 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_Susceptibilitauglissementdeterrain_0.addFeatures(features_Susceptibilitauglissementdeterrain_0);var lyr_Susceptibilitauglissementdeterrain_0 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Susceptibilitauglissementdeterrain_0, 
                style: style_Susceptibilitauglissementdeterrain_0,
    title: 'Susceptibilité au glissement de terrain<br />\
    <img src="styles/legend/Susceptibilitauglissementdeterrain_0_0.png" /> Elevée<br />\
    <img src="styles/legend/Susceptibilitauglissementdeterrain_0_1.png" /> Faible<br />\
    <img src="styles/legend/Susceptibilitauglissementdeterrain_0_2.png" /> Moyenne<br />\
    <img src="styles/legend/Susceptibilitauglissementdeterrain_0_3.png" /> Très élevée<br />'
        });var format_Limiteadministrative_1 = new ol.format.GeoJSON();
var features_Limiteadministrative_1 = format_Limiteadministrative_1.readFeatures(json_Limiteadministrative_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32735'});
var jsonSource_Limiteadministrative_1 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_Limiteadministrative_1.addFeatures(features_Limiteadministrative_1);var lyr_Limiteadministrative_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Limiteadministrative_1, 
                style: style_Limiteadministrative_1,
                title: '<img src="styles/legend/Limiteadministrative_1.png" /> Limite administrative'
            });

lyr_Susceptibilitauglissementdeterrain_0.setVisible(true);lyr_Limiteadministrative_1.setVisible(true);
var layersList = [baseLayer,lyr_Susceptibilitauglissementdeterrain_0,lyr_Limiteadministrative_1];
lyr_Susceptibilitauglissementdeterrain_0.set('fieldAliases', {'DN': 'DN', '_Classe': '_Classe', '_Niveau': '_Niveau', });
lyr_Limiteadministrative_1.set('fieldAliases', {'NOM': 'NOM', 'LOCALIT': 'LOCALIT', 'ZONE': 'ZONE', });
lyr_Susceptibilitauglissementdeterrain_0.set('fieldImages', {'DN': 'TextEdit', '_Classe': 'TextEdit', '_Niveau': 'TextEdit', });
lyr_Limiteadministrative_1.set('fieldImages', {'NOM': 'TextEdit', 'LOCALIT': 'TextEdit', 'ZONE': 'TextEdit', });
lyr_Susceptibilitauglissementdeterrain_0.set('fieldLabels', {'DN': 'no label', '_Classe': 'no label', '_Niveau': 'no label', });
lyr_Limiteadministrative_1.set('fieldLabels', {'NOM': 'no label', 'LOCALIT': 'no label', 'ZONE': 'no label', });
lyr_Limiteadministrative_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});