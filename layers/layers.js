var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_LOT1_1 = new ol.format.GeoJSON();
var features_LOT1_1 = format_LOT1_1.readFeatures(json_LOT1_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LOT1_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LOT1_1.addFeatures(features_LOT1_1);
var lyr_LOT1_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LOT1_1, 
                style: style_LOT1_1,
                popuplayertitle: 'LOT 1',
                interactive: true,
                title: '<img src="styles/legend/LOT1_1.png" /> LOT 1'
            });
var format_LOT2_2 = new ol.format.GeoJSON();
var features_LOT2_2 = format_LOT2_2.readFeatures(json_LOT2_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LOT2_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LOT2_2.addFeatures(features_LOT2_2);
var lyr_LOT2_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LOT2_2, 
                style: style_LOT2_2,
                popuplayertitle: 'LOT 2',
                interactive: true,
                title: '<img src="styles/legend/LOT2_2.png" /> LOT 2'
            });
var format_LOT3_3 = new ol.format.GeoJSON();
var features_LOT3_3 = format_LOT3_3.readFeatures(json_LOT3_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LOT3_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LOT3_3.addFeatures(features_LOT3_3);
var lyr_LOT3_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LOT3_3, 
                style: style_LOT3_3,
                popuplayertitle: 'LOT 3',
                interactive: true,
                title: '<img src="styles/legend/LOT3_3.png" /> LOT 3'
            });
var format_LOT4_4 = new ol.format.GeoJSON();
var features_LOT4_4 = format_LOT4_4.readFeatures(json_LOT4_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LOT4_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LOT4_4.addFeatures(features_LOT4_4);
var lyr_LOT4_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LOT4_4, 
                style: style_LOT4_4,
                popuplayertitle: 'LOT 4',
                interactive: true,
                title: '<img src="styles/legend/LOT4_4.png" /> LOT 4'
            });
var format_LOT5_5 = new ol.format.GeoJSON();
var features_LOT5_5 = format_LOT5_5.readFeatures(json_LOT5_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LOT5_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LOT5_5.addFeatures(features_LOT5_5);
var lyr_LOT5_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LOT5_5, 
                style: style_LOT5_5,
                popuplayertitle: 'LOT 5',
                interactive: true,
                title: '<img src="styles/legend/LOT5_5.png" /> LOT 5'
            });
var format_LOT6_6 = new ol.format.GeoJSON();
var features_LOT6_6 = format_LOT6_6.readFeatures(json_LOT6_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LOT6_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LOT6_6.addFeatures(features_LOT6_6);
var lyr_LOT6_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LOT6_6, 
                style: style_LOT6_6,
                popuplayertitle: 'LOT 6',
                interactive: true,
                title: '<img src="styles/legend/LOT6_6.png" /> LOT 6'
            });
var format_LOT7_7 = new ol.format.GeoJSON();
var features_LOT7_7 = format_LOT7_7.readFeatures(json_LOT7_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LOT7_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LOT7_7.addFeatures(features_LOT7_7);
var lyr_LOT7_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LOT7_7, 
                style: style_LOT7_7,
                popuplayertitle: 'LOT 7',
                interactive: true,
                title: '<img src="styles/legend/LOT7_7.png" /> LOT 7'
            });
var format_LOT8_8 = new ol.format.GeoJSON();
var features_LOT8_8 = format_LOT8_8.readFeatures(json_LOT8_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LOT8_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LOT8_8.addFeatures(features_LOT8_8);
var lyr_LOT8_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LOT8_8, 
                style: style_LOT8_8,
                popuplayertitle: 'LOT 8',
                interactive: true,
                title: '<img src="styles/legend/LOT8_8.png" /> LOT 8'
            });
var format_LOT9_9 = new ol.format.GeoJSON();
var features_LOT9_9 = format_LOT9_9.readFeatures(json_LOT9_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LOT9_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LOT9_9.addFeatures(features_LOT9_9);
var lyr_LOT9_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LOT9_9, 
                style: style_LOT9_9,
                popuplayertitle: 'LOT 9',
                interactive: true,
                title: '<img src="styles/legend/LOT9_9.png" /> LOT 9'
            });
var format_LOT10_10 = new ol.format.GeoJSON();
var features_LOT10_10 = format_LOT10_10.readFeatures(json_LOT10_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LOT10_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LOT10_10.addFeatures(features_LOT10_10);
var lyr_LOT10_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LOT10_10, 
                style: style_LOT10_10,
                popuplayertitle: 'LOT 10',
                interactive: true,
                title: '<img src="styles/legend/LOT10_10.png" /> LOT 10'
            });
var format_LOT11_11 = new ol.format.GeoJSON();
var features_LOT11_11 = format_LOT11_11.readFeatures(json_LOT11_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LOT11_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LOT11_11.addFeatures(features_LOT11_11);
var lyr_LOT11_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LOT11_11, 
                style: style_LOT11_11,
                popuplayertitle: 'LOT 11',
                interactive: true,
                title: '<img src="styles/legend/LOT11_11.png" /> LOT 11'
            });
var format_LOT11B_12 = new ol.format.GeoJSON();
var features_LOT11B_12 = format_LOT11B_12.readFeatures(json_LOT11B_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LOT11B_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LOT11B_12.addFeatures(features_LOT11B_12);
var lyr_LOT11B_12 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LOT11B_12, 
                style: style_LOT11B_12,
                popuplayertitle: 'LOT 11B',
                interactive: true,
                title: '<img src="styles/legend/LOT11B_12.png" /> LOT 11B'
            });
var format_LOT12_13 = new ol.format.GeoJSON();
var features_LOT12_13 = format_LOT12_13.readFeatures(json_LOT12_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LOT12_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LOT12_13.addFeatures(features_LOT12_13);
var lyr_LOT12_13 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LOT12_13, 
                style: style_LOT12_13,
                popuplayertitle: 'LOT 12',
                interactive: true,
                title: '<img src="styles/legend/LOT12_13.png" /> LOT 12'
            });
var format_LOT13_14 = new ol.format.GeoJSON();
var features_LOT13_14 = format_LOT13_14.readFeatures(json_LOT13_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LOT13_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LOT13_14.addFeatures(features_LOT13_14);
var lyr_LOT13_14 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LOT13_14, 
                style: style_LOT13_14,
                popuplayertitle: 'LOT 13',
                interactive: true,
                title: '<img src="styles/legend/LOT13_14.png" /> LOT 13'
            });
var format_LOT14_15 = new ol.format.GeoJSON();
var features_LOT14_15 = format_LOT14_15.readFeatures(json_LOT14_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LOT14_15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LOT14_15.addFeatures(features_LOT14_15);
var lyr_LOT14_15 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LOT14_15, 
                style: style_LOT14_15,
                popuplayertitle: 'LOT 14',
                interactive: true,
                title: '<img src="styles/legend/LOT14_15.png" /> LOT 14'
            });
var format_LOT15_16 = new ol.format.GeoJSON();
var features_LOT15_16 = format_LOT15_16.readFeatures(json_LOT15_16, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LOT15_16 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LOT15_16.addFeatures(features_LOT15_16);
var lyr_LOT15_16 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LOT15_16, 
                style: style_LOT15_16,
                popuplayertitle: 'LOT 15',
                interactive: true,
                title: '<img src="styles/legend/LOT15_16.png" /> LOT 15'
            });
var format_LOT16_17 = new ol.format.GeoJSON();
var features_LOT16_17 = format_LOT16_17.readFeatures(json_LOT16_17, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LOT16_17 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LOT16_17.addFeatures(features_LOT16_17);
var lyr_LOT16_17 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LOT16_17, 
                style: style_LOT16_17,
                popuplayertitle: 'LOT 16',
                interactive: true,
                title: '<img src="styles/legend/LOT16_17.png" /> LOT 16'
            });
var format_LOT17_18 = new ol.format.GeoJSON();
var features_LOT17_18 = format_LOT17_18.readFeatures(json_LOT17_18, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LOT17_18 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LOT17_18.addFeatures(features_LOT17_18);
var lyr_LOT17_18 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LOT17_18, 
                style: style_LOT17_18,
                popuplayertitle: 'LOT 17',
                interactive: true,
                title: '<img src="styles/legend/LOT17_18.png" /> LOT 17'
            });
var format_LOT18_19 = new ol.format.GeoJSON();
var features_LOT18_19 = format_LOT18_19.readFeatures(json_LOT18_19, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LOT18_19 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LOT18_19.addFeatures(features_LOT18_19);
var lyr_LOT18_19 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LOT18_19, 
                style: style_LOT18_19,
                popuplayertitle: 'LOT 18',
                interactive: true,
                title: '<img src="styles/legend/LOT18_19.png" /> LOT 18'
            });
var format_LOT19_20 = new ol.format.GeoJSON();
var features_LOT19_20 = format_LOT19_20.readFeatures(json_LOT19_20, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LOT19_20 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LOT19_20.addFeatures(features_LOT19_20);
var lyr_LOT19_20 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LOT19_20, 
                style: style_LOT19_20,
                popuplayertitle: 'LOT 19',
                interactive: true,
                title: '<img src="styles/legend/LOT19_20.png" /> LOT 19'
            });
var format_LOT20_21 = new ol.format.GeoJSON();
var features_LOT20_21 = format_LOT20_21.readFeatures(json_LOT20_21, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LOT20_21 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LOT20_21.addFeatures(features_LOT20_21);
var lyr_LOT20_21 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LOT20_21, 
                style: style_LOT20_21,
                popuplayertitle: 'LOT 20',
                interactive: true,
                title: '<img src="styles/legend/LOT20_21.png" /> LOT 20'
            });
var format_LOT21_22 = new ol.format.GeoJSON();
var features_LOT21_22 = format_LOT21_22.readFeatures(json_LOT21_22, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LOT21_22 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LOT21_22.addFeatures(features_LOT21_22);
var lyr_LOT21_22 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LOT21_22, 
                style: style_LOT21_22,
                popuplayertitle: 'LOT 21',
                interactive: true,
                title: '<img src="styles/legend/LOT21_22.png" /> LOT 21'
            });
var format_LOT22_23 = new ol.format.GeoJSON();
var features_LOT22_23 = format_LOT22_23.readFeatures(json_LOT22_23, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LOT22_23 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LOT22_23.addFeatures(features_LOT22_23);
var lyr_LOT22_23 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LOT22_23, 
                style: style_LOT22_23,
                popuplayertitle: 'LOT 22',
                interactive: true,
                title: '<img src="styles/legend/LOT22_23.png" /> LOT 22'
            });
var format_LOT23_24 = new ol.format.GeoJSON();
var features_LOT23_24 = format_LOT23_24.readFeatures(json_LOT23_24, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LOT23_24 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LOT23_24.addFeatures(features_LOT23_24);
var lyr_LOT23_24 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LOT23_24, 
                style: style_LOT23_24,
                popuplayertitle: 'LOT 23',
                interactive: true,
                title: '<img src="styles/legend/LOT23_24.png" /> LOT 23'
            });
var format_LOT24_25 = new ol.format.GeoJSON();
var features_LOT24_25 = format_LOT24_25.readFeatures(json_LOT24_25, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LOT24_25 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LOT24_25.addFeatures(features_LOT24_25);
var lyr_LOT24_25 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LOT24_25, 
                style: style_LOT24_25,
                popuplayertitle: 'LOT 24',
                interactive: true,
                title: '<img src="styles/legend/LOT24_25.png" /> LOT 24'
            });
var format_LOT25_26 = new ol.format.GeoJSON();
var features_LOT25_26 = format_LOT25_26.readFeatures(json_LOT25_26, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LOT25_26 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LOT25_26.addFeatures(features_LOT25_26);
var lyr_LOT25_26 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LOT25_26, 
                style: style_LOT25_26,
                popuplayertitle: 'LOT 25',
                interactive: true,
                title: '<img src="styles/legend/LOT25_26.png" /> LOT 25'
            });
var format_LOT26_27 = new ol.format.GeoJSON();
var features_LOT26_27 = format_LOT26_27.readFeatures(json_LOT26_27, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LOT26_27 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LOT26_27.addFeatures(features_LOT26_27);
var lyr_LOT26_27 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LOT26_27, 
                style: style_LOT26_27,
                popuplayertitle: 'LOT 26',
                interactive: true,
                title: '<img src="styles/legend/LOT26_27.png" /> LOT 26'
            });
var format_LOT27_28 = new ol.format.GeoJSON();
var features_LOT27_28 = format_LOT27_28.readFeatures(json_LOT27_28, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LOT27_28 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LOT27_28.addFeatures(features_LOT27_28);
var lyr_LOT27_28 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LOT27_28, 
                style: style_LOT27_28,
                popuplayertitle: 'LOT 27',
                interactive: true,
                title: '<img src="styles/legend/LOT27_28.png" /> LOT 27'
            });
var format_LOT28_29 = new ol.format.GeoJSON();
var features_LOT28_29 = format_LOT28_29.readFeatures(json_LOT28_29, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LOT28_29 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LOT28_29.addFeatures(features_LOT28_29);
var lyr_LOT28_29 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LOT28_29, 
                style: style_LOT28_29,
                popuplayertitle: 'LOT 28',
                interactive: true,
                title: '<img src="styles/legend/LOT28_29.png" /> LOT 28'
            });
var format_LOT29_30 = new ol.format.GeoJSON();
var features_LOT29_30 = format_LOT29_30.readFeatures(json_LOT29_30, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LOT29_30 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LOT29_30.addFeatures(features_LOT29_30);
var lyr_LOT29_30 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LOT29_30, 
                style: style_LOT29_30,
                popuplayertitle: 'LOT 29',
                interactive: true,
                title: '<img src="styles/legend/LOT29_30.png" /> LOT 29'
            });
var format_LOT30_31 = new ol.format.GeoJSON();
var features_LOT30_31 = format_LOT30_31.readFeatures(json_LOT30_31, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LOT30_31 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LOT30_31.addFeatures(features_LOT30_31);
var lyr_LOT30_31 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LOT30_31, 
                style: style_LOT30_31,
                popuplayertitle: 'LOT 30',
                interactive: true,
                title: '<img src="styles/legend/LOT30_31.png" /> LOT 30'
            });
var format_LOT31_32 = new ol.format.GeoJSON();
var features_LOT31_32 = format_LOT31_32.readFeatures(json_LOT31_32, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LOT31_32 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LOT31_32.addFeatures(features_LOT31_32);
var lyr_LOT31_32 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LOT31_32, 
                style: style_LOT31_32,
                popuplayertitle: 'LOT 31',
                interactive: true,
                title: '<img src="styles/legend/LOT31_32.png" /> LOT 31'
            });
var format_LOT32_33 = new ol.format.GeoJSON();
var features_LOT32_33 = format_LOT32_33.readFeatures(json_LOT32_33, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LOT32_33 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LOT32_33.addFeatures(features_LOT32_33);
var lyr_LOT32_33 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LOT32_33, 
                style: style_LOT32_33,
                popuplayertitle: 'LOT 32',
                interactive: true,
                title: '<img src="styles/legend/LOT32_33.png" /> LOT 32'
            });
var format_LOT33_34 = new ol.format.GeoJSON();
var features_LOT33_34 = format_LOT33_34.readFeatures(json_LOT33_34, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LOT33_34 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LOT33_34.addFeatures(features_LOT33_34);
var lyr_LOT33_34 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LOT33_34, 
                style: style_LOT33_34,
                popuplayertitle: 'LOT 33',
                interactive: true,
                title: '<img src="styles/legend/LOT33_34.png" /> LOT 33'
            });
var format_LOT34_35 = new ol.format.GeoJSON();
var features_LOT34_35 = format_LOT34_35.readFeatures(json_LOT34_35, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LOT34_35 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LOT34_35.addFeatures(features_LOT34_35);
var lyr_LOT34_35 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LOT34_35, 
                style: style_LOT34_35,
                popuplayertitle: 'LOT 34',
                interactive: true,
                title: '<img src="styles/legend/LOT34_35.png" /> LOT 34'
            });
var format_LOT35_36 = new ol.format.GeoJSON();
var features_LOT35_36 = format_LOT35_36.readFeatures(json_LOT35_36, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LOT35_36 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LOT35_36.addFeatures(features_LOT35_36);
var lyr_LOT35_36 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LOT35_36, 
                style: style_LOT35_36,
                popuplayertitle: 'LOT 35',
                interactive: true,
                title: '<img src="styles/legend/LOT35_36.png" /> LOT 35'
            });
var format_LOT36_37 = new ol.format.GeoJSON();
var features_LOT36_37 = format_LOT36_37.readFeatures(json_LOT36_37, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LOT36_37 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LOT36_37.addFeatures(features_LOT36_37);
var lyr_LOT36_37 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LOT36_37, 
                style: style_LOT36_37,
                popuplayertitle: 'LOT 36',
                interactive: true,
                title: '<img src="styles/legend/LOT36_37.png" /> LOT 36'
            });
var format_LOT37_38 = new ol.format.GeoJSON();
var features_LOT37_38 = format_LOT37_38.readFeatures(json_LOT37_38, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LOT37_38 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LOT37_38.addFeatures(features_LOT37_38);
var lyr_LOT37_38 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LOT37_38, 
                style: style_LOT37_38,
                popuplayertitle: 'LOT 37',
                interactive: true,
                title: '<img src="styles/legend/LOT37_38.png" /> LOT 37'
            });
var format_LOT38_39 = new ol.format.GeoJSON();
var features_LOT38_39 = format_LOT38_39.readFeatures(json_LOT38_39, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LOT38_39 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LOT38_39.addFeatures(features_LOT38_39);
var lyr_LOT38_39 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LOT38_39, 
                style: style_LOT38_39,
                popuplayertitle: 'LOT 38',
                interactive: true,
                title: '<img src="styles/legend/LOT38_39.png" /> LOT 38'
            });
var format_LOT39_40 = new ol.format.GeoJSON();
var features_LOT39_40 = format_LOT39_40.readFeatures(json_LOT39_40, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LOT39_40 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LOT39_40.addFeatures(features_LOT39_40);
var lyr_LOT39_40 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LOT39_40, 
                style: style_LOT39_40,
                popuplayertitle: 'LOT 39',
                interactive: true,
                title: '<img src="styles/legend/LOT39_40.png" /> LOT 39'
            });
var format_LOT40_41 = new ol.format.GeoJSON();
var features_LOT40_41 = format_LOT40_41.readFeatures(json_LOT40_41, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LOT40_41 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LOT40_41.addFeatures(features_LOT40_41);
var lyr_LOT40_41 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LOT40_41, 
                style: style_LOT40_41,
                popuplayertitle: 'LOT 40',
                interactive: true,
                title: '<img src="styles/legend/LOT40_41.png" /> LOT 40'
            });
var format_LOT41_42 = new ol.format.GeoJSON();
var features_LOT41_42 = format_LOT41_42.readFeatures(json_LOT41_42, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LOT41_42 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LOT41_42.addFeatures(features_LOT41_42);
var lyr_LOT41_42 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LOT41_42, 
                style: style_LOT41_42,
                popuplayertitle: 'LOT 41',
                interactive: true,
                title: '<img src="styles/legend/LOT41_42.png" /> LOT 41'
            });
var format_LOT42_43 = new ol.format.GeoJSON();
var features_LOT42_43 = format_LOT42_43.readFeatures(json_LOT42_43, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LOT42_43 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LOT42_43.addFeatures(features_LOT42_43);
var lyr_LOT42_43 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LOT42_43, 
                style: style_LOT42_43,
                popuplayertitle: 'LOT 42',
                interactive: true,
                title: '<img src="styles/legend/LOT42_43.png" /> LOT 42'
            });
var format_LOT43_44 = new ol.format.GeoJSON();
var features_LOT43_44 = format_LOT43_44.readFeatures(json_LOT43_44, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LOT43_44 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LOT43_44.addFeatures(features_LOT43_44);
var lyr_LOT43_44 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LOT43_44, 
                style: style_LOT43_44,
                popuplayertitle: 'LOT 43',
                interactive: true,
                title: '<img src="styles/legend/LOT43_44.png" /> LOT 43'
            });
var format_LOT44_45 = new ol.format.GeoJSON();
var features_LOT44_45 = format_LOT44_45.readFeatures(json_LOT44_45, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LOT44_45 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LOT44_45.addFeatures(features_LOT44_45);
var lyr_LOT44_45 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LOT44_45, 
                style: style_LOT44_45,
                popuplayertitle: 'LOT 44',
                interactive: true,
                title: '<img src="styles/legend/LOT44_45.png" /> LOT 44'
            });
var format_LOT45_46 = new ol.format.GeoJSON();
var features_LOT45_46 = format_LOT45_46.readFeatures(json_LOT45_46, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LOT45_46 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LOT45_46.addFeatures(features_LOT45_46);
var lyr_LOT45_46 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LOT45_46, 
                style: style_LOT45_46,
                popuplayertitle: 'LOT 45',
                interactive: true,
                title: '<img src="styles/legend/LOT45_46.png" /> LOT 45'
            });
var format_LOT46_47 = new ol.format.GeoJSON();
var features_LOT46_47 = format_LOT46_47.readFeatures(json_LOT46_47, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LOT46_47 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LOT46_47.addFeatures(features_LOT46_47);
var lyr_LOT46_47 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LOT46_47, 
                style: style_LOT46_47,
                popuplayertitle: 'LOT 46',
                interactive: true,
                title: '<img src="styles/legend/LOT46_47.png" /> LOT 46'
            });
var format_Lot12_48 = new ol.format.GeoJSON();
var features_Lot12_48 = format_Lot12_48.readFeatures(json_Lot12_48, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Lot12_48 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Lot12_48.addFeatures(features_Lot12_48);
cluster_Lot12_48 = new ol.source.Cluster({
  distance: 30,
  source: jsonSource_Lot12_48
});
var lyr_Lot12_48 = new ol.layer.Vector({
                declutter: false,
                source:cluster_Lot12_48, 
                style: style_Lot12_48,
                popuplayertitle: 'Lot 12',
                interactive: true,
                title: '<img src="styles/legend/Lot12_48.png" /> Lot 12'
            });
var group_MVSMSDPONLY = new ol.layer.Group({
                                layers: [lyr_OpenStreetMap_0,lyr_LOT1_1,lyr_LOT2_2,lyr_LOT3_3,lyr_LOT4_4,lyr_LOT5_5,lyr_LOT6_6,lyr_LOT7_7,lyr_LOT8_8,lyr_LOT9_9,lyr_LOT10_10,lyr_LOT11_11,lyr_LOT11B_12,lyr_LOT12_13,lyr_LOT13_14,lyr_LOT14_15,lyr_LOT15_16,lyr_LOT16_17,lyr_LOT17_18,lyr_LOT18_19,lyr_LOT19_20,lyr_LOT20_21,lyr_LOT21_22,lyr_LOT22_23,lyr_LOT23_24,lyr_LOT24_25,lyr_LOT25_26,lyr_LOT26_27,lyr_LOT27_28,lyr_LOT28_29,lyr_LOT29_30,lyr_LOT30_31,lyr_LOT31_32,lyr_LOT32_33,lyr_LOT33_34,lyr_LOT34_35,lyr_LOT35_36,lyr_LOT36_37,lyr_LOT37_38,lyr_LOT38_39,lyr_LOT39_40,lyr_LOT40_41,lyr_LOT41_42,lyr_LOT42_43,lyr_LOT43_44,lyr_LOT44_45,lyr_LOT45_46,lyr_LOT46_47,],
                                fold: 'close',
                                title: 'MVSM (SDP ONLY)'});

lyr_OpenStreetMap_0.setVisible(true);lyr_LOT1_1.setVisible(true);lyr_LOT2_2.setVisible(true);lyr_LOT3_3.setVisible(true);lyr_LOT4_4.setVisible(true);lyr_LOT5_5.setVisible(true);lyr_LOT6_6.setVisible(true);lyr_LOT7_7.setVisible(true);lyr_LOT8_8.setVisible(true);lyr_LOT9_9.setVisible(true);lyr_LOT10_10.setVisible(true);lyr_LOT11_11.setVisible(true);lyr_LOT11B_12.setVisible(true);lyr_LOT12_13.setVisible(true);lyr_LOT13_14.setVisible(true);lyr_LOT14_15.setVisible(true);lyr_LOT15_16.setVisible(true);lyr_LOT16_17.setVisible(true);lyr_LOT17_18.setVisible(true);lyr_LOT18_19.setVisible(true);lyr_LOT19_20.setVisible(true);lyr_LOT20_21.setVisible(true);lyr_LOT21_22.setVisible(true);lyr_LOT22_23.setVisible(true);lyr_LOT23_24.setVisible(true);lyr_LOT24_25.setVisible(true);lyr_LOT25_26.setVisible(true);lyr_LOT26_27.setVisible(true);lyr_LOT27_28.setVisible(true);lyr_LOT28_29.setVisible(true);lyr_LOT29_30.setVisible(true);lyr_LOT30_31.setVisible(true);lyr_LOT31_32.setVisible(true);lyr_LOT32_33.setVisible(true);lyr_LOT33_34.setVisible(true);lyr_LOT34_35.setVisible(true);lyr_LOT35_36.setVisible(true);lyr_LOT36_37.setVisible(true);lyr_LOT37_38.setVisible(true);lyr_LOT38_39.setVisible(true);lyr_LOT39_40.setVisible(true);lyr_LOT40_41.setVisible(true);lyr_LOT41_42.setVisible(true);lyr_LOT42_43.setVisible(true);lyr_LOT43_44.setVisible(true);lyr_LOT44_45.setVisible(true);lyr_LOT45_46.setVisible(true);lyr_LOT46_47.setVisible(true);lyr_Lot12_48.setVisible(true);
var layersList = [group_MVSMSDPONLY,lyr_Lot12_48];
lyr_LOT1_1.set('fieldAliases', {'LOT 1': 'LOT 1', });
lyr_LOT2_2.set('fieldAliases', {'LOT 2': 'LOT 2', });
lyr_LOT3_3.set('fieldAliases', {'LOT 3': 'LOT 3', });
lyr_LOT4_4.set('fieldAliases', {'LOT 4': 'LOT 4', });
lyr_LOT5_5.set('fieldAliases', {'LOT 5': 'LOT 5', });
lyr_LOT6_6.set('fieldAliases', {'LOT 6': 'LOT 6', });
lyr_LOT7_7.set('fieldAliases', {'LOT 7': 'LOT 7', });
lyr_LOT8_8.set('fieldAliases', {'LOT 8': 'LOT 8', });
lyr_LOT9_9.set('fieldAliases', {'LOT 9': 'LOT 9', });
lyr_LOT10_10.set('fieldAliases', {'LOT 10': 'LOT 10', });
lyr_LOT11_11.set('fieldAliases', {'LOT 11': 'LOT 11', });
lyr_LOT11B_12.set('fieldAliases', {'LOT 11B': 'LOT 11B', });
lyr_LOT12_13.set('fieldAliases', {'LOT 12': 'LOT 12', });
lyr_LOT13_14.set('fieldAliases', {'LOT13D': 'LOT13D', });
lyr_LOT14_15.set('fieldAliases', {'LOT 14': 'LOT 14', });
lyr_LOT15_16.set('fieldAliases', {'1': '1', });
lyr_LOT16_17.set('fieldAliases', {'LOT 16': 'LOT 16', });
lyr_LOT17_18.set('fieldAliases', {'LOT 17': 'LOT 17', });
lyr_LOT18_19.set('fieldAliases', {'LOT 18': 'LOT 18', });
lyr_LOT19_20.set('fieldAliases', {'LOT 19': 'LOT 19', });
lyr_LOT20_21.set('fieldAliases', {'LOT 20': 'LOT 20', });
lyr_LOT21_22.set('fieldAliases', {'LOT 21': 'LOT 21', });
lyr_LOT22_23.set('fieldAliases', {'LOT 22': 'LOT 22', });
lyr_LOT23_24.set('fieldAliases', {'LOT 23': 'LOT 23', });
lyr_LOT24_25.set('fieldAliases', {'LOT 24': 'LOT 24', });
lyr_LOT25_26.set('fieldAliases', {'LOT 25': 'LOT 25', });
lyr_LOT26_27.set('fieldAliases', {'LOT 26': 'LOT 26', });
lyr_LOT27_28.set('fieldAliases', {'LOT 27': 'LOT 27', });
lyr_LOT28_29.set('fieldAliases', {'LOT 28': 'LOT 28', });
lyr_LOT29_30.set('fieldAliases', {'LOT 29': 'LOT 29', });
lyr_LOT30_31.set('fieldAliases', {'LOT 30': 'LOT 30', });
lyr_LOT31_32.set('fieldAliases', {'LO 31': 'LO 31', });
lyr_LOT32_33.set('fieldAliases', {'LOT 32': 'LOT 32', });
lyr_LOT33_34.set('fieldAliases', {'LOT 33': 'LOT 33', });
lyr_LOT34_35.set('fieldAliases', {'LOT 34': 'LOT 34', });
lyr_LOT35_36.set('fieldAliases', {'LOT 35': 'LOT 35', });
lyr_LOT36_37.set('fieldAliases', {'LOT 36': 'LOT 36', });
lyr_LOT37_38.set('fieldAliases', {'LOT 37': 'LOT 37', });
lyr_LOT38_39.set('fieldAliases', {'LOT 38': 'LOT 38', });
lyr_LOT39_40.set('fieldAliases', {'LOT 39': 'LOT 39', });
lyr_LOT40_41.set('fieldAliases', {'LOT 40': 'LOT 40', });
lyr_LOT41_42.set('fieldAliases', {'LOT 41': 'LOT 41', });
lyr_LOT42_43.set('fieldAliases', {'LOT 42': 'LOT 42', });
lyr_LOT43_44.set('fieldAliases', {'LOT 43': 'LOT 43', });
lyr_LOT44_45.set('fieldAliases', {'LOT 44': 'LOT 44', });
lyr_LOT45_46.set('fieldAliases', {'LOT 45': 'LOT 45', });
lyr_LOT46_47.set('fieldAliases', {'LOT 46': 'LOT 46', });
lyr_Lot12_48.set('fieldAliases', {'lat': 'lat', 'lon': 'lon', });
lyr_LOT1_1.set('fieldImages', {'LOT 1': 'TextEdit', });
lyr_LOT2_2.set('fieldImages', {'LOT 2': 'TextEdit', });
lyr_LOT3_3.set('fieldImages', {'LOT 3': 'TextEdit', });
lyr_LOT4_4.set('fieldImages', {'LOT 4': 'TextEdit', });
lyr_LOT5_5.set('fieldImages', {'LOT 5': 'TextEdit', });
lyr_LOT6_6.set('fieldImages', {'LOT 6': 'TextEdit', });
lyr_LOT7_7.set('fieldImages', {'LOT 7': 'TextEdit', });
lyr_LOT8_8.set('fieldImages', {'LOT 8': 'TextEdit', });
lyr_LOT9_9.set('fieldImages', {'LOT 9': 'TextEdit', });
lyr_LOT10_10.set('fieldImages', {'LOT 10': 'TextEdit', });
lyr_LOT11_11.set('fieldImages', {'LOT 11': 'TextEdit', });
lyr_LOT11B_12.set('fieldImages', {'LOT 11B': 'TextEdit', });
lyr_LOT12_13.set('fieldImages', {'LOT 12': 'TextEdit', });
lyr_LOT13_14.set('fieldImages', {'LOT13D': 'TextEdit', });
lyr_LOT14_15.set('fieldImages', {'LOT 14': 'TextEdit', });
lyr_LOT15_16.set('fieldImages', {'1': 'TextEdit', });
lyr_LOT16_17.set('fieldImages', {'LOT 16': 'TextEdit', });
lyr_LOT17_18.set('fieldImages', {'LOT 17': 'TextEdit', });
lyr_LOT18_19.set('fieldImages', {'LOT 18': 'TextEdit', });
lyr_LOT19_20.set('fieldImages', {'LOT 19': 'TextEdit', });
lyr_LOT20_21.set('fieldImages', {'LOT 20': 'TextEdit', });
lyr_LOT21_22.set('fieldImages', {'LOT 21': 'TextEdit', });
lyr_LOT22_23.set('fieldImages', {'LOT 22': 'TextEdit', });
lyr_LOT23_24.set('fieldImages', {'LOT 23': 'TextEdit', });
lyr_LOT24_25.set('fieldImages', {'LOT 24': 'TextEdit', });
lyr_LOT25_26.set('fieldImages', {'LOT 25': 'TextEdit', });
lyr_LOT26_27.set('fieldImages', {'LOT 26': 'TextEdit', });
lyr_LOT27_28.set('fieldImages', {'LOT 27': 'TextEdit', });
lyr_LOT28_29.set('fieldImages', {'LOT 28': 'TextEdit', });
lyr_LOT29_30.set('fieldImages', {'LOT 29': 'TextEdit', });
lyr_LOT30_31.set('fieldImages', {'LOT 30': 'TextEdit', });
lyr_LOT31_32.set('fieldImages', {'LO 31': 'TextEdit', });
lyr_LOT32_33.set('fieldImages', {'LOT 32': 'TextEdit', });
lyr_LOT33_34.set('fieldImages', {'LOT 33': 'TextEdit', });
lyr_LOT34_35.set('fieldImages', {'LOT 34': 'TextEdit', });
lyr_LOT35_36.set('fieldImages', {'LOT 35': 'TextEdit', });
lyr_LOT36_37.set('fieldImages', {'LOT 36': 'TextEdit', });
lyr_LOT37_38.set('fieldImages', {'LOT 37': 'TextEdit', });
lyr_LOT38_39.set('fieldImages', {'LOT 38': 'TextEdit', });
lyr_LOT39_40.set('fieldImages', {'LOT 39': 'TextEdit', });
lyr_LOT40_41.set('fieldImages', {'LOT 40': 'TextEdit', });
lyr_LOT41_42.set('fieldImages', {'LOT 41': 'TextEdit', });
lyr_LOT42_43.set('fieldImages', {'LOT 42': 'TextEdit', });
lyr_LOT43_44.set('fieldImages', {'LOT 43': 'TextEdit', });
lyr_LOT44_45.set('fieldImages', {'LOT 44': 'TextEdit', });
lyr_LOT45_46.set('fieldImages', {'LOT 45': 'TextEdit', });
lyr_LOT46_47.set('fieldImages', {'LOT 46': 'TextEdit', });
lyr_Lot12_48.set('fieldImages', {'lat': '', 'lon': '', });
lyr_LOT1_1.set('fieldLabels', {'LOT 1': 'inline label - visible with data', });
lyr_LOT2_2.set('fieldLabels', {'LOT 2': 'inline label - visible with data', });
lyr_LOT3_3.set('fieldLabels', {'LOT 3': 'inline label - visible with data', });
lyr_LOT4_4.set('fieldLabels', {'LOT 4': 'inline label - visible with data', });
lyr_LOT5_5.set('fieldLabels', {'LOT 5': 'inline label - visible with data', });
lyr_LOT6_6.set('fieldLabels', {'LOT 6': 'inline label - visible with data', });
lyr_LOT7_7.set('fieldLabels', {'LOT 7': 'inline label - visible with data', });
lyr_LOT8_8.set('fieldLabels', {'LOT 8': 'inline label - visible with data', });
lyr_LOT9_9.set('fieldLabels', {'LOT 9': 'inline label - visible with data', });
lyr_LOT10_10.set('fieldLabels', {'LOT 10': 'inline label - visible with data', });
lyr_LOT11_11.set('fieldLabels', {'LOT 11': 'inline label - visible with data', });
lyr_LOT11B_12.set('fieldLabels', {'LOT 11B': 'inline label - visible with data', });
lyr_LOT12_13.set('fieldLabels', {'LOT 12': 'inline label - visible with data', });
lyr_LOT13_14.set('fieldLabels', {'LOT13D': 'inline label - visible with data', });
lyr_LOT14_15.set('fieldLabels', {'LOT 14': 'inline label - visible with data', });
lyr_LOT15_16.set('fieldLabels', {'1': 'inline label - visible with data', });
lyr_LOT16_17.set('fieldLabels', {'LOT 16': 'inline label - visible with data', });
lyr_LOT17_18.set('fieldLabels', {'LOT 17': 'inline label - visible with data', });
lyr_LOT18_19.set('fieldLabels', {'LOT 18': 'inline label - visible with data', });
lyr_LOT19_20.set('fieldLabels', {'LOT 19': 'inline label - visible with data', });
lyr_LOT20_21.set('fieldLabels', {'LOT 20': 'inline label - visible with data', });
lyr_LOT21_22.set('fieldLabels', {'LOT 21': 'inline label - visible with data', });
lyr_LOT22_23.set('fieldLabels', {'LOT 22': 'inline label - visible with data', });
lyr_LOT23_24.set('fieldLabels', {'LOT 23': 'inline label - visible with data', });
lyr_LOT24_25.set('fieldLabels', {'LOT 24': 'inline label - visible with data', });
lyr_LOT25_26.set('fieldLabels', {'LOT 25': 'inline label - visible with data', });
lyr_LOT26_27.set('fieldLabels', {'LOT 26': 'inline label - visible with data', });
lyr_LOT27_28.set('fieldLabels', {'LOT 27': 'inline label - visible with data', });
lyr_LOT28_29.set('fieldLabels', {'LOT 28': 'inline label - visible with data', });
lyr_LOT29_30.set('fieldLabels', {'LOT 29': 'inline label - visible with data', });
lyr_LOT30_31.set('fieldLabels', {'LOT 30': 'inline label - visible with data', });
lyr_LOT31_32.set('fieldLabels', {'LO 31': 'inline label - visible with data', });
lyr_LOT32_33.set('fieldLabels', {'LOT 32': 'inline label - visible with data', });
lyr_LOT33_34.set('fieldLabels', {'LOT 33': 'inline label - visible with data', });
lyr_LOT34_35.set('fieldLabels', {'LOT 34': 'inline label - visible with data', });
lyr_LOT35_36.set('fieldLabels', {'LOT 35': 'inline label - visible with data', });
lyr_LOT36_37.set('fieldLabels', {'LOT 36': 'inline label - visible with data', });
lyr_LOT37_38.set('fieldLabels', {'LOT 37': 'inline label - visible with data', });
lyr_LOT38_39.set('fieldLabels', {'LOT 38': 'inline label - visible with data', });
lyr_LOT39_40.set('fieldLabels', {'LOT 39': 'inline label - visible with data', });
lyr_LOT40_41.set('fieldLabels', {'LOT 40': 'inline label - visible with data', });
lyr_LOT41_42.set('fieldLabels', {'LOT 41': 'inline label - visible with data', });
lyr_LOT42_43.set('fieldLabels', {'LOT 42': 'inline label - visible with data', });
lyr_LOT43_44.set('fieldLabels', {'LOT 43': 'inline label - visible with data', });
lyr_LOT44_45.set('fieldLabels', {'LOT 44': 'inline label - visible with data', });
lyr_LOT45_46.set('fieldLabels', {'LOT 45': 'inline label - visible with data', });
lyr_LOT46_47.set('fieldLabels', {'LOT 46': 'inline label - visible with data', });
lyr_Lot12_48.set('fieldLabels', {'lat': 'inline label - visible with data', 'lon': 'inline label - visible with data', });
lyr_Lot12_48.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});