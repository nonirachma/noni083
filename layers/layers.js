var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_Fisik_Alam_Jenis_Tanah_Kaligesing_1 = new ol.format.GeoJSON();
var features_Fisik_Alam_Jenis_Tanah_Kaligesing_1 = format_Fisik_Alam_Jenis_Tanah_Kaligesing_1.readFeatures(json_Fisik_Alam_Jenis_Tanah_Kaligesing_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Fisik_Alam_Jenis_Tanah_Kaligesing_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Fisik_Alam_Jenis_Tanah_Kaligesing_1.addFeatures(features_Fisik_Alam_Jenis_Tanah_Kaligesing_1);
var lyr_Fisik_Alam_Jenis_Tanah_Kaligesing_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Fisik_Alam_Jenis_Tanah_Kaligesing_1, 
                style: style_Fisik_Alam_Jenis_Tanah_Kaligesing_1,
                interactive: true,
                title: '<img src="styles/legend/Fisik_Alam_Jenis_Tanah_Kaligesing_1.png" /> Fisik_Alam_Jenis_Tanah_Kaligesing'
            });
var format_Transportasi_Kecamatan_Kaligesing_LN_2 = new ol.format.GeoJSON();
var features_Transportasi_Kecamatan_Kaligesing_LN_2 = format_Transportasi_Kecamatan_Kaligesing_LN_2.readFeatures(json_Transportasi_Kecamatan_Kaligesing_LN_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Transportasi_Kecamatan_Kaligesing_LN_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Transportasi_Kecamatan_Kaligesing_LN_2.addFeatures(features_Transportasi_Kecamatan_Kaligesing_LN_2);
var lyr_Transportasi_Kecamatan_Kaligesing_LN_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Transportasi_Kecamatan_Kaligesing_LN_2, 
                style: style_Transportasi_Kecamatan_Kaligesing_LN_2,
                interactive: true,
                title: '<img src="styles/legend/Transportasi_Kecamatan_Kaligesing_LN_2.png" /> Transportasi_Kecamatan_Kaligesing_LN'
            });
var format_Ibu_Kota_Kecamatan_Kaligesing_PT_3 = new ol.format.GeoJSON();
var features_Ibu_Kota_Kecamatan_Kaligesing_PT_3 = format_Ibu_Kota_Kecamatan_Kaligesing_PT_3.readFeatures(json_Ibu_Kota_Kecamatan_Kaligesing_PT_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Ibu_Kota_Kecamatan_Kaligesing_PT_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Ibu_Kota_Kecamatan_Kaligesing_PT_3.addFeatures(features_Ibu_Kota_Kecamatan_Kaligesing_PT_3);
var lyr_Ibu_Kota_Kecamatan_Kaligesing_PT_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Ibu_Kota_Kecamatan_Kaligesing_PT_3, 
                style: style_Ibu_Kota_Kecamatan_Kaligesing_PT_3,
                interactive: true,
                title: '<img src="styles/legend/Ibu_Kota_Kecamatan_Kaligesing_PT_3.png" /> Ibu_Kota_Kecamatan_Kaligesing_PT'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_Fisik_Alam_Jenis_Tanah_Kaligesing_1.setVisible(true);lyr_Transportasi_Kecamatan_Kaligesing_LN_2.setVisible(true);lyr_Ibu_Kota_Kecamatan_Kaligesing_PT_3.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_Fisik_Alam_Jenis_Tanah_Kaligesing_1,lyr_Transportasi_Kecamatan_Kaligesing_LN_2,lyr_Ibu_Kota_Kecamatan_Kaligesing_PT_3];
lyr_Fisik_Alam_Jenis_Tanah_Kaligesing_1.set('fieldAliases', {'FID_JENIS_': 'FID_JENIS_', 'JNS_TNH': 'JNS_TNH', 'SUMBER': 'SUMBER', 'FID_Kecama': 'FID_Kecama', 'KDEBPS': 'KDEBPS', 'KDEPUM': 'KDEPUM', 'PROVINSI': 'PROVINSI', 'KABUPATEN': 'KABUPATEN', 'KECAMATAN': 'KECAMATAN', 'DESA': 'DESA', 'SUMBER_1': 'SUMBER_1', 'KELURAHAN_': 'KELURAHAN_', 'Luas_Ha': 'Luas_Ha', });
lyr_Transportasi_Kecamatan_Kaligesing_LN_2.set('fieldAliases', {'Lebar': 'Lebar', 'Fungsi_Jln': 'Fungsi_Jln', 'Nama_Jln_1': 'Nama_Jln_1', });
lyr_Ibu_Kota_Kecamatan_Kaligesing_PT_3.set('fieldAliases', {'Klasifikas': 'Klasifikas', 'Jenis_Utam': 'Jenis_Utam', 'Jenis': 'Jenis', 'Kegiatan_O': 'Kegiatan_O', 'Nama_Objek': 'Nama_Objek', 'Pemerintah': 'Pemerintah', });
lyr_Fisik_Alam_Jenis_Tanah_Kaligesing_1.set('fieldImages', {'FID_JENIS_': '', 'JNS_TNH': '', 'SUMBER': '', 'FID_Kecama': '', 'KDEBPS': '', 'KDEPUM': '', 'PROVINSI': '', 'KABUPATEN': '', 'KECAMATAN': '', 'DESA': '', 'SUMBER_1': '', 'KELURAHAN_': '', 'Luas_Ha': '', });
lyr_Transportasi_Kecamatan_Kaligesing_LN_2.set('fieldImages', {'Lebar': '', 'Fungsi_Jln': '', 'Nama_Jln_1': '', });
lyr_Ibu_Kota_Kecamatan_Kaligesing_PT_3.set('fieldImages', {'Klasifikas': '', 'Jenis_Utam': '', 'Jenis': '', 'Kegiatan_O': '', 'Nama_Objek': '', 'Pemerintah': '', });
lyr_Fisik_Alam_Jenis_Tanah_Kaligesing_1.set('fieldLabels', {'FID_JENIS_': 'no label', 'JNS_TNH': 'no label', 'SUMBER': 'no label', 'FID_Kecama': 'no label', 'KDEBPS': 'no label', 'KDEPUM': 'no label', 'PROVINSI': 'no label', 'KABUPATEN': 'no label', 'KECAMATAN': 'no label', 'DESA': 'no label', 'SUMBER_1': 'no label', 'KELURAHAN_': 'no label', 'Luas_Ha': 'no label', });
lyr_Transportasi_Kecamatan_Kaligesing_LN_2.set('fieldLabels', {'Lebar': 'no label', 'Fungsi_Jln': 'no label', 'Nama_Jln_1': 'no label', });
lyr_Ibu_Kota_Kecamatan_Kaligesing_PT_3.set('fieldLabels', {'Klasifikas': 'no label', 'Jenis_Utam': 'no label', 'Jenis': 'no label', 'Kegiatan_O': 'no label', 'Nama_Objek': 'no label', 'Pemerintah': 'no label', });
lyr_Ibu_Kota_Kecamatan_Kaligesing_PT_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});