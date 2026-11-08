var wms_layers = [];


        var lyr_ESRISatellite_0 = new ol.layer.Tile({
            'title': 'ESRI Satellite',
            'type':'base',
            'opacity': 0.500000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}'
            })
        });
var format__1 = new ol.format.GeoJSON();
var features__1 = format__1.readFeatures(json__1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource__1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__1.addFeatures(features__1);
var lyr__1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource__1, 
                style: style__1,
                popuplayertitle: 'Όρια Περιφερειακών Ενοτήτων',
                interactive: true,
                title: '<img src="styles/legend/_1.png" /> Όρια Περιφερειακών Ενοτήτων'
            });
var format__2 = new ol.format.GeoJSON();
var features__2 = format__2.readFeatures(json__2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource__2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__2.addFeatures(features__2);
var lyr__2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource__2, 
                style: style__2,
                popuplayertitle: 'Οικισμοί',
                interactive: true,
                title: '<img src="styles/legend/_2.png" /> Οικισμοί'
            });
var format___3 = new ol.format.GeoJSON();
var features___3 = format___3.readFeatures(json___3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource___3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource___3.addFeatures(features___3);
var lyr___3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource___3, 
                style: style___3,
                popuplayertitle: 'ΚΑΘΑΡΙΣΜΟΙ ΤΑΦΡΩΝ_Ολοκληρωμένα',
                interactive: true,
                title: '<img src="styles/legend/__3.png" /> ΚΑΘΑΡΙΣΜΟΙ ΤΑΦΡΩΝ_Ολοκληρωμένα'
            });
var format___4 = new ol.format.GeoJSON();
var features___4 = format___4.readFeatures(json___4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource___4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource___4.addFeatures(features___4);
var lyr___4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource___4, 
                style: style___4,
                popuplayertitle: 'ΑΣΦΑΛΤΙΚΑ_ΚΑΤΑΓΡΑΦΗ ΑΝΑΓΚΩΝ',
                interactive: true,
                title: '<img src="styles/legend/__4.png" /> ΑΣΦΑΛΤΙΚΑ_ΚΑΤΑΓΡΑΦΗ ΑΝΑΓΚΩΝ'
            });
var format___5 = new ol.format.GeoJSON();
var features___5 = format___5.readFeatures(json___5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource___5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource___5.addFeatures(features___5);
var lyr___5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource___5, 
                style: style___5,
                popuplayertitle: 'ΤΕΧΝΙΚΑ_ΚΑΤΑΓΡΑΦΗ ΑΝΑΓΚΩΝ',
                interactive: true,
                title: '<img src="styles/legend/__5.png" /> ΤΕΧΝΙΚΑ_ΚΑΤΑΓΡΑΦΗ ΑΝΑΓΚΩΝ'
            });
var format___6 = new ol.format.GeoJSON();
var features___6 = format___6.readFeatures(json___6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource___6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource___6.addFeatures(features___6);
var lyr___6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource___6, 
                style: style___6,
                popuplayertitle: 'ΙΡΛΑΝΔΙΚΕΣ_ΔΙΑΒΑΣΕΙΣ',
                interactive: true,
                title: '<img src="styles/legend/__6.png" /> ΙΡΛΑΝΔΙΚΕΣ_ΔΙΑΒΑΣΕΙΣ'
            });
var format____7 = new ol.format.GeoJSON();
var features____7 = format____7.readFeatures(json____7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource____7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource____7.addFeatures(features____7);
var lyr____7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource____7, 
                style: style____7,
                popuplayertitle: 'ΟΔΙΚΟ ΔΙΚΤΥΟ ΠΕΜΣ_ΠΕΡΙΦΕΡΕΙΑΚΗ ΟΔΟΣ ΒΟΛΟΥ_ΕΚΤΟΣ ΛΕΙΤΟΥΡΓΙΑΣ',
                interactive: true,
                title: '<img src="styles/legend/___7.png" /> ΟΔΙΚΟ ΔΙΚΤΥΟ ΠΕΜΣ_ΠΕΡΙΦΕΡΕΙΑΚΗ ΟΔΟΣ ΒΟΛΟΥ_ΕΚΤΟΣ ΛΕΙΤΟΥΡΓΙΑΣ'
            });
var format____8 = new ol.format.GeoJSON();
var features____8 = format____8.readFeatures(json____8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource____8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource____8.addFeatures(features____8);
var lyr____8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource____8, 
                style: style____8,
                popuplayertitle: 'ΟΔΙΚΟ ΔΙΚΤΥΟ ΠΕΜΣ_ΠΕΡΙΦΕΡΕΙΑΚΗ ΟΔΟΣ ΒΟΛΟΥ_ ΑΔΙΑΝΟΙΚΤΟ ΤΜΗΜΑ',
                interactive: true,
                title: '<img src="styles/legend/___8.png" /> ΟΔΙΚΟ ΔΙΚΤΥΟ ΠΕΜΣ_ΠΕΡΙΦΕΡΕΙΑΚΗ ΟΔΟΣ ΒΟΛΟΥ_ ΑΔΙΑΝΟΙΚΤΟ ΤΜΗΜΑ'
            });
var format___9 = new ol.format.GeoJSON();
var features___9 = format___9.readFeatures(json___9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource___9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource___9.addFeatures(features___9);
var lyr___9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource___9, 
                style: style___9,
                popuplayertitle: 'ΟΔΙΚΟ ΔΙΚΤΥΟ ΠΕΜΣ_ΠΕΡΙΦΕΡΕΙΑΚΗ ΟΔΟΣ ΒΟΛΟΥ',
                interactive: true,
                title: '<img src="styles/legend/__9.png" /> ΟΔΙΚΟ ΔΙΚΤΥΟ ΠΕΜΣ_ΠΕΡΙΦΕΡΕΙΑΚΗ ΟΔΟΣ ΒΟΛΟΥ'
            });
var format___10 = new ol.format.GeoJSON();
var features___10 = format___10.readFeatures(json___10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource___10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource___10.addFeatures(features___10);
var lyr___10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource___10, 
                style: style___10,
                popuplayertitle: 'ΟΔΙΚΟ ΔΙΚΤΥΟ ΠΕΜΣ_ΠΑΘΕ',
                interactive: true,
                title: '<img src="styles/legend/__10.png" /> ΟΔΙΚΟ ΔΙΚΤΥΟ ΠΕΜΣ_ΠΑΘΕ'
            });
var format___11 = new ol.format.GeoJSON();
var features___11 = format___11.readFeatures(json___11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource___11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource___11.addFeatures(features___11);
var lyr___11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource___11, 
                style: style___11,
                popuplayertitle: 'ΟΔΙΚΟ ΔΙΚΤΥΟ ΠΕΜΣ_ΔΕΥΤΕΡΕΥΟΝ ΕΘΝΙΚΟ ΕΝΤΟΣ ΣΧΕΔΙΟΥ ΠΟΛΕΩΣ',
                interactive: true,
                title: '<img src="styles/legend/__11.png" /> ΟΔΙΚΟ ΔΙΚΤΥΟ ΠΕΜΣ_ΔΕΥΤΕΡΕΥΟΝ ΕΘΝΙΚΟ ΕΝΤΟΣ ΣΧΕΔΙΟΥ ΠΟΛΕΩΣ'
            });
var format___12 = new ol.format.GeoJSON();
var features___12 = format___12.readFeatures(json___12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource___12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource___12.addFeatures(features___12);
var lyr___12 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource___12, 
                style: style___12,
                popuplayertitle: 'ΟΔΙΚΟ ΔΙΚΤΥΟ ΠΕΜΣ_ΔΗΜΟΤΙΚΟ ΧΩΡΙΣ ΑΡΜΟΔΙΟΤΗΤΑ',
                interactive: true,
                title: '<img src="styles/legend/__12.png" /> ΟΔΙΚΟ ΔΙΚΤΥΟ ΠΕΜΣ_ΔΗΜΟΤΙΚΟ ΧΩΡΙΣ ΑΡΜΟΔΙΟΤΗΤΑ'
            });
var format___13 = new ol.format.GeoJSON();
var features___13 = format___13.readFeatures(json___13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource___13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource___13.addFeatures(features___13);
var lyr___13 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource___13, 
                style: style___13,
                popuplayertitle: 'ΟΔΙΚΟ ΔΙΚΤΥΟ ΠΕΜΣ_ΔΗΜΟΤΙΚΟ ΑΡΜΟΔΙΟΤΗΤΑΣ',
                interactive: true,
                title: '<img src="styles/legend/__13.png" /> ΟΔΙΚΟ ΔΙΚΤΥΟ ΠΕΜΣ_ΔΗΜΟΤΙΚΟ ΑΡΜΟΔΙΟΤΗΤΑΣ'
            });
var format___14 = new ol.format.GeoJSON();
var features___14 = format___14.readFeatures(json___14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource___14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource___14.addFeatures(features___14);
var lyr___14 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource___14, 
                style: style___14,
                popuplayertitle: 'ΟΔΙΚΟ ΔΙΚΤΥΟ ΠΕΜΣ_ΔΕΥΤΕΡΟΝ ΕΠΑΡΧΙΑΚΟ',
                interactive: true,
                title: '<img src="styles/legend/__14.png" /> ΟΔΙΚΟ ΔΙΚΤΥΟ ΠΕΜΣ_ΔΕΥΤΕΡΟΝ ΕΠΑΡΧΙΑΚΟ'
            });
var format___15 = new ol.format.GeoJSON();
var features___15 = format___15.readFeatures(json___15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource___15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource___15.addFeatures(features___15);
var lyr___15 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource___15, 
                style: style___15,
                popuplayertitle: 'ΟΔΙΚΟ ΔΙΚΤΥΟ ΠΕΜΣ_ΠΡΩΤΕΥΟΝ ΕΠΑΡΧΙΑΚΟ',
                interactive: true,
                title: '<img src="styles/legend/__15.png" /> ΟΔΙΚΟ ΔΙΚΤΥΟ ΠΕΜΣ_ΠΡΩΤΕΥΟΝ ΕΠΑΡΧΙΑΚΟ'
            });
var format___16 = new ol.format.GeoJSON();
var features___16 = format___16.readFeatures(json___16, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource___16 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource___16.addFeatures(features___16);
var lyr___16 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource___16, 
                style: style___16,
                popuplayertitle: 'ΟΔΙΚΟ ΔΙΚΤΥΟ ΠΕΜΣ_ΤΡΙΤΕΥΟΝ ΕΘΝΙΚΟ',
                interactive: true,
                title: '<img src="styles/legend/__16.png" /> ΟΔΙΚΟ ΔΙΚΤΥΟ ΠΕΜΣ_ΤΡΙΤΕΥΟΝ ΕΘΝΙΚΟ'
            });
var format___17 = new ol.format.GeoJSON();
var features___17 = format___17.readFeatures(json___17, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource___17 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource___17.addFeatures(features___17);
var lyr___17 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource___17, 
                style: style___17,
                popuplayertitle: 'ΟΔΙΚΟ ΔΙΚΤΥΟ ΠΕΜΣ_ΔΕΥΤΕΡΕΥΟΝ ΕΘΝΙΚΟ',
                interactive: true,
                title: '<img src="styles/legend/__17.png" /> ΟΔΙΚΟ ΔΙΚΤΥΟ ΠΕΜΣ_ΔΕΥΤΕΡΕΥΟΝ ΕΘΝΙΚΟ'
            });
var format___18 = new ol.format.GeoJSON();
var features___18 = format___18.readFeatures(json___18, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource___18 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource___18.addFeatures(features___18);
var lyr___18 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource___18, 
                style: style___18,
                popuplayertitle: 'ΟΔΙΚΟ ΔΙΚΤΥΟ ΠΕΜΣ_ΠΡΩΤΕΥΟΝ ΕΘΝΙΚΟ',
                interactive: true,
                title: '<img src="styles/legend/__18.png" /> ΟΔΙΚΟ ΔΙΚΤΥΟ ΠΕΜΣ_ΠΡΩΤΕΥΟΝ ΕΘΝΙΚΟ'
            });
var group_ = new ol.layer.Group({
                                layers: [lyr_ESRISatellite_0,lyr__1,lyr__2,lyr___3,lyr___4,lyr___5,lyr___6,lyr____7,lyr____8,lyr___9,lyr___10,lyr___11,lyr___12,lyr___13,lyr___14,lyr___15,lyr___16,lyr___17,lyr___18,],
                                fold: 'open',
                                title: 'ΟΔΙΚΟ ΔΙΚΤΥΟ ΠΕΜΣ'});

lyr_ESRISatellite_0.setVisible(true);lyr__1.setVisible(true);lyr__2.setVisible(true);lyr___3.setVisible(true);lyr___4.setVisible(true);lyr___5.setVisible(true);lyr___6.setVisible(true);lyr____7.setVisible(true);lyr____8.setVisible(true);lyr___9.setVisible(true);lyr___10.setVisible(true);lyr___11.setVisible(true);lyr___12.setVisible(true);lyr___13.setVisible(true);lyr___14.setVisible(true);lyr___15.setVisible(true);lyr___16.setVisible(true);lyr___17.setVisible(true);lyr___18.setVisible(true);
var layersList = [group_];
lyr__1.set('fieldAliases', {'PARENT': 'PARENT', 'ESYE_ID': 'ESYE_ID', 'NAME_GR': 'NAME_GR', 'NAME_ENG': 'NAME_ENG', 'POP': 'POP', 'EDRA': 'EDRA', 'SHAPE_LENG': 'SHAPE_LENG', 'SHAPE_AREA': 'SHAPE_AREA', });
lyr__2.set('fieldAliases', {'ONOMA': 'ONOMA', 'COORD_X': 'COORD_X', 'COORD_Y': 'COORD_Y', });
lyr___3.set('fieldAliases', {'id': 'id', 'X_Start': 'X_Start', 'Y_Start': 'Y_Start', 'X_Finish': 'X_Finish', 'Y_Finish': 'Y_Finish', 'Έναρξ': 'Έναρξ', 'Λήξη': 'Λήξη', 'Ανάδο': 'Ανάδο', 'Επιβλ': 'Επιβλ', 'Length': 'Length', });
lyr___4.set('fieldAliases', {'ID': 'ID', 'COORDS EGSA 87 (X)': 'COORDS EGSA 87 (X)', 'COORDS EGSA 87 (Y)': 'COORDS EGSA 87 (Y)', 'POINT CODE NAME': 'POINT CODE NAME', 'LENGTH': 'LENGTH', });
lyr___5.set('fieldAliases', {'field_1': 'field_1', 'field_2': 'field_2', 'field_3': 'field_3', 'field_4': 'field_4', });
lyr___6.set('fieldAliases', {'field_1': 'field_1', 'field_2': 'field_2', 'field_3': 'field_3', });
lyr____7.set('fieldAliases', {'qc_id': 'qc_id', 'objectid_1': 'objectid_1', 'route_1': 'route_1', 'length_1': 'length_1', 'κατατ': 'κατατ', 'περιγ': 'περιγ', 'shape_leng': 'shape_leng', 'ονομα': 'ονομα', 'αποφα': 'αποφα', 'παρατ': 'παρατ', 'φεκ': 'φεκ', 'αρμοδ': 'αρμοδ', 'φεκ_α': 'φεκ_α', 'βατοτ': 'βατοτ', });
lyr____8.set('fieldAliases', {'qc_id': 'qc_id', 'objectid_1': 'objectid_1', 'route_1': 'route_1', 'length_1': 'length_1', 'κατατ': 'κατατ', 'περιγ': 'περιγ', 'shape_leng': 'shape_leng', 'ονομα': 'ονομα', 'αποφα': 'αποφα', 'παρατ': 'παρατ', 'φεκ': 'φεκ', 'αρμοδ': 'αρμοδ', 'φεκ_α': 'φεκ_α', 'βατοτ': 'βατοτ', });
lyr___9.set('fieldAliases', {'qc_id': 'qc_id', 'objectid_1': 'objectid_1', 'route_1': 'route_1', 'length_1': 'length_1', 'κατατ': 'κατατ', 'περιγ': 'περιγ', 'shape_leng': 'shape_leng', 'ονομα': 'ονομα', 'αποφα': 'αποφα', 'παρατ': 'παρατ', 'φεκ': 'φεκ', 'αρμοδ': 'αρμοδ', 'φεκ_α': 'φεκ_α', 'βατοτ': 'βατοτ', });
lyr___10.set('fieldAliases', {'qc_id': 'qc_id', 'objectid_1': 'objectid_1', 'route_1': 'route_1', 'length_1': 'length_1', 'κατατ': 'κατατ', 'περιγ': 'περιγ', 'shape_leng': 'shape_leng', 'ονομα': 'ονομα', 'αποφα': 'αποφα', 'παρατ': 'παρατ', 'φεκ': 'φεκ', 'αρμοδ': 'αρμοδ', 'φεκ_α': 'φεκ_α', 'βατοτ': 'βατοτ', });
lyr___11.set('fieldAliases', {'qc_id': 'qc_id', 'objectid_1': 'objectid_1', 'route_1': 'route_1', 'length_1': 'length_1', 'κατατ': 'κατατ', 'περιγ': 'περιγ', 'shape_leng': 'shape_leng', 'ονομα': 'ονομα', 'αποφα': 'αποφα', 'παρατ': 'παρατ', 'φεκ': 'φεκ', 'αρμοδ': 'αρμοδ', 'φεκ_α': 'φεκ_α', 'βατοτ': 'βατοτ', });
lyr___12.set('fieldAliases', {'qc_id': 'qc_id', 'objectid_1': 'objectid_1', 'route_1': 'route_1', 'length_1': 'length_1', 'κατατ': 'κατατ', 'περιγ': 'περιγ', 'shape_leng': 'shape_leng', 'ονομα': 'ονομα', 'αποφα': 'αποφα', 'παρατ': 'παρατ', 'φεκ': 'φεκ', 'αρμοδ': 'αρμοδ', 'φεκ_α': 'φεκ_α', 'βατοτ': 'βατοτ', });
lyr___13.set('fieldAliases', {'qc_id': 'qc_id', 'objectid_1': 'objectid_1', 'route_1': 'route_1', 'length_1': 'length_1', 'κατατ': 'κατατ', 'περιγ': 'περιγ', 'shape_leng': 'shape_leng', 'ονομα': 'ονομα', 'αποφα': 'αποφα', 'παρατ': 'παρατ', 'φεκ': 'φεκ', 'αρμοδ': 'αρμοδ', 'φεκ_α': 'φεκ_α', 'βατοτ': 'βατοτ', });
lyr___14.set('fieldAliases', {'qc_id': 'qc_id', 'objectid_1': 'objectid_1', 'route_1': 'route_1', 'length_1': 'length_1', 'κατατ': 'κατατ', 'περιγ': 'περιγ', 'shape_leng': 'shape_leng', 'ονομα': 'ονομα', 'αποφα': 'αποφα', 'παρατ': 'παρατ', 'φεκ': 'φεκ', 'αρμοδ': 'αρμοδ', 'φεκ_α': 'φεκ_α', 'βατοτ': 'βατοτ', });
lyr___15.set('fieldAliases', {'qc_id': 'qc_id', 'objectid_1': 'objectid_1', 'route_1': 'route_1', 'length_1': 'length_1', 'κατατ': 'κατατ', 'περιγ': 'περιγ', 'shape_leng': 'shape_leng', 'ονομα': 'ονομα', 'αποφα': 'αποφα', 'παρατ': 'παρατ', 'φεκ': 'φεκ', 'αρμοδ': 'αρμοδ', 'φεκ_α': 'φεκ_α', 'βατοτ': 'βατοτ', });
lyr___16.set('fieldAliases', {'qc_id': 'qc_id', 'objectid_1': 'objectid_1', 'route_1': 'route_1', 'length_1': 'length_1', 'κατατ': 'κατατ', 'περιγ': 'περιγ', 'shape_leng': 'shape_leng', 'ονομα': 'ονομα', 'αποφα': 'αποφα', 'παρατ': 'παρατ', 'φεκ': 'φεκ', 'αρμοδ': 'αρμοδ', 'φεκ_α': 'φεκ_α', 'βατοτ': 'βατοτ', });
lyr___17.set('fieldAliases', {'qc_id': 'qc_id', 'objectid_1': 'objectid_1', 'route_1': 'route_1', 'length_1': 'length_1', 'κατατ': 'κατατ', 'περιγ': 'περιγ', 'shape_leng': 'shape_leng', 'ονομα': 'ονομα', 'αποφα': 'αποφα', 'παρατ': 'παρατ', 'φεκ': 'φεκ', 'αρμοδ': 'αρμοδ', 'φεκ_α': 'φεκ_α', 'βατοτ': 'βατοτ', });
lyr___18.set('fieldAliases', {'qc_id': 'qc_id', 'objectid_1': 'objectid_1', 'route_1': 'route_1', 'length_1': 'length_1', 'κατατ': 'κατατ', 'περιγ': 'περιγ', 'shape_leng': 'shape_leng', 'ονομα': 'ονομα', 'αποφα': 'αποφα', 'παρατ': 'παρατ', 'φεκ': 'φεκ', 'αρμοδ': 'αρμοδ', 'φεκ_α': 'φεκ_α', 'βατοτ': 'βατοτ', });
lyr__1.set('fieldImages', {'PARENT': 'TextEdit', 'ESYE_ID': 'TextEdit', 'NAME_GR': 'TextEdit', 'NAME_ENG': 'TextEdit', 'POP': 'TextEdit', 'EDRA': 'TextEdit', 'SHAPE_LENG': 'TextEdit', 'SHAPE_AREA': 'TextEdit', });
lyr__2.set('fieldImages', {'ONOMA': 'TextEdit', 'COORD_X': 'TextEdit', 'COORD_Y': 'TextEdit', });
lyr___3.set('fieldImages', {'id': 'TextEdit', 'X_Start': 'TextEdit', 'Y_Start': 'TextEdit', 'X_Finish': 'TextEdit', 'Y_Finish': 'TextEdit', 'Έναρξ': 'DateTime', 'Λήξη': 'DateTime', 'Ανάδο': 'TextEdit', 'Επιβλ': 'TextEdit', 'Length': 'TextEdit', });
lyr___4.set('fieldImages', {'ID': 'Range', 'COORDS EGSA 87 (X)': 'TextEdit', 'COORDS EGSA 87 (Y)': 'TextEdit', 'POINT CODE NAME': 'TextEdit', 'LENGTH': 'Range', });
lyr___5.set('fieldImages', {'field_1': 'Range', 'field_2': 'TextEdit', 'field_3': 'TextEdit', 'field_4': 'TextEdit', });
lyr___6.set('fieldImages', {'field_1': 'Range', 'field_2': 'TextEdit', 'field_3': 'TextEdit', });
lyr____7.set('fieldImages', {'qc_id': 'TextEdit', 'objectid_1': 'TextEdit', 'route_1': 'TextEdit', 'length_1': 'TextEdit', 'κατατ': 'TextEdit', 'περιγ': 'TextEdit', 'shape_leng': 'TextEdit', 'ονομα': 'TextEdit', 'αποφα': 'TextEdit', 'παρατ': 'TextEdit', 'φεκ': 'TextEdit', 'αρμοδ': 'TextEdit', 'φεκ_α': 'TextEdit', 'βατοτ': 'TextEdit', });
lyr____8.set('fieldImages', {'qc_id': 'TextEdit', 'objectid_1': 'TextEdit', 'route_1': 'TextEdit', 'length_1': 'TextEdit', 'κατατ': 'TextEdit', 'περιγ': 'TextEdit', 'shape_leng': 'TextEdit', 'ονομα': 'TextEdit', 'αποφα': 'TextEdit', 'παρατ': 'TextEdit', 'φεκ': 'TextEdit', 'αρμοδ': 'TextEdit', 'φεκ_α': 'TextEdit', 'βατοτ': 'TextEdit', });
lyr___9.set('fieldImages', {'qc_id': 'TextEdit', 'objectid_1': 'TextEdit', 'route_1': 'TextEdit', 'length_1': 'TextEdit', 'κατατ': 'TextEdit', 'περιγ': 'TextEdit', 'shape_leng': 'TextEdit', 'ονομα': 'TextEdit', 'αποφα': 'TextEdit', 'παρατ': 'TextEdit', 'φεκ': 'TextEdit', 'αρμοδ': 'TextEdit', 'φεκ_α': 'TextEdit', 'βατοτ': 'TextEdit', });
lyr___10.set('fieldImages', {'qc_id': 'TextEdit', 'objectid_1': 'TextEdit', 'route_1': 'TextEdit', 'length_1': 'TextEdit', 'κατατ': 'TextEdit', 'περιγ': 'TextEdit', 'shape_leng': 'TextEdit', 'ονομα': 'TextEdit', 'αποφα': 'TextEdit', 'παρατ': 'TextEdit', 'φεκ': 'TextEdit', 'αρμοδ': 'TextEdit', 'φεκ_α': 'TextEdit', 'βατοτ': 'TextEdit', });
lyr___11.set('fieldImages', {'qc_id': 'TextEdit', 'objectid_1': 'TextEdit', 'route_1': 'TextEdit', 'length_1': 'TextEdit', 'κατατ': 'TextEdit', 'περιγ': 'TextEdit', 'shape_leng': 'TextEdit', 'ονομα': 'TextEdit', 'αποφα': 'TextEdit', 'παρατ': 'TextEdit', 'φεκ': 'TextEdit', 'αρμοδ': 'TextEdit', 'φεκ_α': 'TextEdit', 'βατοτ': 'TextEdit', });
lyr___12.set('fieldImages', {'qc_id': 'TextEdit', 'objectid_1': 'TextEdit', 'route_1': 'TextEdit', 'length_1': 'TextEdit', 'κατατ': 'TextEdit', 'περιγ': 'TextEdit', 'shape_leng': 'TextEdit', 'ονομα': 'TextEdit', 'αποφα': 'TextEdit', 'παρατ': 'TextEdit', 'φεκ': 'TextEdit', 'αρμοδ': 'TextEdit', 'φεκ_α': 'TextEdit', 'βατοτ': 'TextEdit', });
lyr___13.set('fieldImages', {'qc_id': 'TextEdit', 'objectid_1': 'TextEdit', 'route_1': 'TextEdit', 'length_1': 'TextEdit', 'κατατ': 'TextEdit', 'περιγ': 'TextEdit', 'shape_leng': 'TextEdit', 'ονομα': 'TextEdit', 'αποφα': 'TextEdit', 'παρατ': 'TextEdit', 'φεκ': 'TextEdit', 'αρμοδ': 'TextEdit', 'φεκ_α': 'TextEdit', 'βατοτ': 'TextEdit', });
lyr___14.set('fieldImages', {'qc_id': 'TextEdit', 'objectid_1': 'TextEdit', 'route_1': 'TextEdit', 'length_1': 'TextEdit', 'κατατ': 'TextEdit', 'περιγ': 'TextEdit', 'shape_leng': 'TextEdit', 'ονομα': 'TextEdit', 'αποφα': 'TextEdit', 'παρατ': 'TextEdit', 'φεκ': 'TextEdit', 'αρμοδ': 'TextEdit', 'φεκ_α': 'TextEdit', 'βατοτ': 'TextEdit', });
lyr___15.set('fieldImages', {'qc_id': 'TextEdit', 'objectid_1': 'TextEdit', 'route_1': 'TextEdit', 'length_1': 'TextEdit', 'κατατ': 'TextEdit', 'περιγ': 'TextEdit', 'shape_leng': 'TextEdit', 'ονομα': 'TextEdit', 'αποφα': 'TextEdit', 'παρατ': 'TextEdit', 'φεκ': 'TextEdit', 'αρμοδ': 'TextEdit', 'φεκ_α': 'TextEdit', 'βατοτ': 'TextEdit', });
lyr___16.set('fieldImages', {'qc_id': 'TextEdit', 'objectid_1': 'TextEdit', 'route_1': 'TextEdit', 'length_1': 'TextEdit', 'κατατ': 'TextEdit', 'περιγ': 'TextEdit', 'shape_leng': 'TextEdit', 'ονομα': 'TextEdit', 'αποφα': 'TextEdit', 'παρατ': 'TextEdit', 'φεκ': 'TextEdit', 'αρμοδ': 'TextEdit', 'φεκ_α': 'TextEdit', 'βατοτ': 'TextEdit', });
lyr___17.set('fieldImages', {'qc_id': 'TextEdit', 'objectid_1': 'TextEdit', 'route_1': 'TextEdit', 'length_1': 'TextEdit', 'κατατ': 'TextEdit', 'περιγ': 'TextEdit', 'shape_leng': 'TextEdit', 'ονομα': 'TextEdit', 'αποφα': 'TextEdit', 'παρατ': 'TextEdit', 'φεκ': 'TextEdit', 'αρμοδ': 'TextEdit', 'φεκ_α': 'TextEdit', 'βατοτ': 'TextEdit', });
lyr___18.set('fieldImages', {'qc_id': 'TextEdit', 'objectid_1': 'TextEdit', 'route_1': 'TextEdit', 'length_1': 'TextEdit', 'κατατ': 'TextEdit', 'περιγ': 'TextEdit', 'shape_leng': 'TextEdit', 'ονομα': 'TextEdit', 'αποφα': 'TextEdit', 'παρατ': 'TextEdit', 'φεκ': 'TextEdit', 'αρμοδ': 'TextEdit', 'φεκ_α': 'TextEdit', 'βατοτ': 'TextEdit', });
lyr__1.set('fieldLabels', {'PARENT': 'no label', 'ESYE_ID': 'no label', 'NAME_GR': 'no label', 'NAME_ENG': 'no label', 'POP': 'no label', 'EDRA': 'no label', 'SHAPE_LENG': 'no label', 'SHAPE_AREA': 'no label', });
lyr__2.set('fieldLabels', {'ONOMA': 'no label', 'COORD_X': 'no label', 'COORD_Y': 'no label', });
lyr___3.set('fieldLabels', {'id': 'no label', 'X_Start': 'no label', 'Y_Start': 'no label', 'X_Finish': 'no label', 'Y_Finish': 'no label', 'Έναρξ': 'no label', 'Λήξη': 'no label', 'Ανάδο': 'no label', 'Επιβλ': 'no label', 'Length': 'no label', });
lyr___4.set('fieldLabels', {'ID': 'no label', 'COORDS EGSA 87 (X)': 'no label', 'COORDS EGSA 87 (Y)': 'no label', 'POINT CODE NAME': 'no label', 'LENGTH': 'no label', });
lyr___5.set('fieldLabels', {'field_1': 'no label', 'field_2': 'no label', 'field_3': 'no label', 'field_4': 'no label', });
lyr___6.set('fieldLabels', {'field_1': 'no label', 'field_2': 'no label', 'field_3': 'no label', });
lyr____7.set('fieldLabels', {'qc_id': 'no label', 'objectid_1': 'no label', 'route_1': 'no label', 'length_1': 'no label', 'κατατ': 'no label', 'περιγ': 'no label', 'shape_leng': 'no label', 'ονομα': 'no label', 'αποφα': 'no label', 'παρατ': 'no label', 'φεκ': 'no label', 'αρμοδ': 'no label', 'φεκ_α': 'no label', 'βατοτ': 'no label', });
lyr____8.set('fieldLabels', {'qc_id': 'no label', 'objectid_1': 'no label', 'route_1': 'no label', 'length_1': 'no label', 'κατατ': 'no label', 'περιγ': 'no label', 'shape_leng': 'no label', 'ονομα': 'no label', 'αποφα': 'no label', 'παρατ': 'no label', 'φεκ': 'no label', 'αρμοδ': 'no label', 'φεκ_α': 'no label', 'βατοτ': 'no label', });
lyr___9.set('fieldLabels', {'qc_id': 'no label', 'objectid_1': 'no label', 'route_1': 'no label', 'length_1': 'no label', 'κατατ': 'no label', 'περιγ': 'no label', 'shape_leng': 'no label', 'ονομα': 'no label', 'αποφα': 'no label', 'παρατ': 'no label', 'φεκ': 'no label', 'αρμοδ': 'no label', 'φεκ_α': 'no label', 'βατοτ': 'no label', });
lyr___10.set('fieldLabels', {'qc_id': 'no label', 'objectid_1': 'no label', 'route_1': 'no label', 'length_1': 'no label', 'κατατ': 'no label', 'περιγ': 'no label', 'shape_leng': 'no label', 'ονομα': 'no label', 'αποφα': 'no label', 'παρατ': 'no label', 'φεκ': 'no label', 'αρμοδ': 'no label', 'φεκ_α': 'no label', 'βατοτ': 'no label', });
lyr___11.set('fieldLabels', {'qc_id': 'no label', 'objectid_1': 'no label', 'route_1': 'no label', 'length_1': 'no label', 'κατατ': 'no label', 'περιγ': 'no label', 'shape_leng': 'no label', 'ονομα': 'no label', 'αποφα': 'no label', 'παρατ': 'no label', 'φεκ': 'no label', 'αρμοδ': 'no label', 'φεκ_α': 'no label', 'βατοτ': 'no label', });
lyr___12.set('fieldLabels', {'qc_id': 'no label', 'objectid_1': 'no label', 'route_1': 'no label', 'length_1': 'no label', 'κατατ': 'no label', 'περιγ': 'no label', 'shape_leng': 'no label', 'ονομα': 'no label', 'αποφα': 'no label', 'παρατ': 'no label', 'φεκ': 'no label', 'αρμοδ': 'no label', 'φεκ_α': 'no label', 'βατοτ': 'no label', });
lyr___13.set('fieldLabels', {'qc_id': 'no label', 'objectid_1': 'no label', 'route_1': 'no label', 'length_1': 'no label', 'κατατ': 'no label', 'περιγ': 'no label', 'shape_leng': 'no label', 'ονομα': 'no label', 'αποφα': 'no label', 'παρατ': 'no label', 'φεκ': 'no label', 'αρμοδ': 'no label', 'φεκ_α': 'no label', 'βατοτ': 'no label', });
lyr___14.set('fieldLabels', {'qc_id': 'no label', 'objectid_1': 'no label', 'route_1': 'no label', 'length_1': 'no label', 'κατατ': 'no label', 'περιγ': 'no label', 'shape_leng': 'no label', 'ονομα': 'no label', 'αποφα': 'no label', 'παρατ': 'no label', 'φεκ': 'no label', 'αρμοδ': 'no label', 'φεκ_α': 'no label', 'βατοτ': 'no label', });
lyr___15.set('fieldLabels', {'qc_id': 'no label', 'objectid_1': 'no label', 'route_1': 'no label', 'length_1': 'no label', 'κατατ': 'no label', 'περιγ': 'no label', 'shape_leng': 'no label', 'ονομα': 'no label', 'αποφα': 'no label', 'παρατ': 'no label', 'φεκ': 'no label', 'αρμοδ': 'no label', 'φεκ_α': 'no label', 'βατοτ': 'no label', });
lyr___16.set('fieldLabels', {'qc_id': 'no label', 'objectid_1': 'no label', 'route_1': 'no label', 'length_1': 'no label', 'κατατ': 'no label', 'περιγ': 'no label', 'shape_leng': 'no label', 'ονομα': 'no label', 'αποφα': 'no label', 'παρατ': 'no label', 'φεκ': 'no label', 'αρμοδ': 'no label', 'φεκ_α': 'no label', 'βατοτ': 'no label', });
lyr___17.set('fieldLabels', {'qc_id': 'no label', 'objectid_1': 'no label', 'route_1': 'no label', 'length_1': 'no label', 'κατατ': 'no label', 'περιγ': 'no label', 'shape_leng': 'no label', 'ονομα': 'hidden field', 'αποφα': 'no label', 'παρατ': 'no label', 'φεκ': 'no label', 'αρμοδ': 'no label', 'φεκ_α': 'no label', 'βατοτ': 'no label', });
lyr___18.set('fieldLabels', {'qc_id': 'no label', 'objectid_1': 'no label', 'route_1': 'no label', 'length_1': 'no label', 'κατατ': 'no label', 'περιγ': 'no label', 'shape_leng': 'no label', 'ονομα': 'no label', 'αποφα': 'no label', 'παρατ': 'no label', 'φεκ': 'no label', 'αρμοδ': 'no label', 'φεκ_α': 'no label', 'βατοτ': 'hidden field', });
lyr___18.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});