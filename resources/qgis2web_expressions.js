// Aggregates

// Color

// Conditionals

// Conversions

// Custom

// Date and Time

// Fields and Values

// Fuzzy Matching

// General

// Geometry
function fnc_azimuth(values, context) {
    return false;
};

function fnc_project(values, context) {
    return false;
};

// Math
function fnc_abs(values, context) {
    return Math.abs(values[0]);
};

function fnc_degrees(values, context) {
    return values[0] * (180/Math.PI);
};

function fnc_radians(values, context) {
    return values[0] * (Math.PI/180);
};

function fnc_sqrt(values, context) {
    return Math.sqrt(values[0]);
};

function fnc_cos(values, context) {
    return Math.cos(values[0]);
};

function fnc_sin(values, context) {
    return Math.sin(values[0]);
};

function fnc_tan(values, context) {
    return Math.tan(values[0]);
};

function fnc_asin(values, context) {
    return Math.asin(values[0]);
};

function fnc_acos(values, context) {
    return Math.acos(values[0]);
};

function fnc_atan(values, context) {
    return Math.atan(values[0]);
};

function fnc_atan2(values, context) {
    return Math.atan2(values[0]);
};

function fnc_exp(values, context) {
    return Math.exp(values[0]);
};

function fnc_ln(values, context) {
    return Math.log(values[0]);
};

function fnc_log10(values, context) {
    return Math.LN10(values[0]);
};

function fnc_log(values, context) {
    return Math.log(values[0]) / Math.log(values[1]);
};

function fnc_round(values, context) {
    return Math.round(values[0]);
};

function fnc_rand(values, context) {
    return Math.floor(Math.random()*(values[1]-values[0]+1)+values[0]);
};

function fnc_randf(values, context) {
    return Math.random()*(values[1]-values[0]+1)+values[0];
};

function fnc_max(values, context) {
    return Math.max.apply(this, values);
};

function fnc_min(values, context) {
    return Math.min.apply(this, values);
};

function fnc_clamp(values, context) {
    return Math.min(Math.max(values[0],values[1]),values[2]);
};

// Operators

// Record

// String

// TimeManager

// Variables



function fnc_scale_linear(values, context) {
    return false;
};

function fnc_scale_exp(values, context) {
    return false;
};

function fnc_floor(values, context) {
    return Math.floor(values[0]);
};

function fnc_ceil(values, context) {
    return Math.ceil(values[0]);
};

function fnc_pi(values, context) {
    return Math.PI;
};

function fnc_to_int(values, context) {
    var intVal = parseInt(values[0],10);
    if ( isNaN(intVal) ) { return false };
    return intVal;
};

function fnc_to_real(values, context) {
    var realVal = parseFloat(values[0]);
    if ( isNaN(realVal) ) { return false };
    return realVal;
};

function fnc_to_string(values, context) {
    return String(values[0]);
};

function fnc_to_datetime(values, context) {
    return false;
};

function fnc_to_date(values, context) {
    return false;
};

function fnc_to_time(values, context) {
    return false;
};

function fnc_to_interval(values, context) {
    return false;
};

function fnc_coalesce(values, context) {
    return false;
};

function fnc_if(values, context) {
    return values[0] ? values[1] : values[2];
}

function fnc_aggregate(values, context) {
    return false;
};

function fnc_relation_aggregate(values, context) {
    return false;
};

function fnc_count(values, context) {
    return false;
};

function fnc_count_distinct(values, context) {
    return false;
};

function fnc_count_missing(values, context) {
    return false;
};

function fnc_minimum(values, context) {
    return false;
};

function fnc_maximum(values, context) {
    return false;
};

function fnc_sum(values, context) {
    return false;
};

function fnc_mean(values, context) {
    return false;
};

function fnc_median(values, context) {
    return false;
};

function fnc_stdev(values, context) {
    return false;
};

function fnc_range(values, context) {
    return false;
};

function fnc_minority(values, context) {
    return false;
};

function fnc_majority(values, context) {
    return false;
};

function fnc_q1(values, context) {
    return false;
};

function fnc_q3(values, context) {
    return false;
};

function fnc_iqr(values, context) {
    return false;
};

function fnc_min_length(values, context) {
    return false;
};

function fnc_max_length(values, context) {
    return false;
};

function fnc_concatenate(values, context) {
    return false;
};

function fnc_regexp_match(values, context) {
    return false;
};

function fnc_now(values, context) {
    return new Date().toISOString();
};

function fnc_age(values, context) {
    return false;
};

function fnc_year(values, context) {
    return false;
};

function fnc_month(values, context) {
    return false;
};

function fnc_week(values, context) {
    return false;
};

function fnc_day(values, context) {
    return false;
};

function fnc_hour(values, context) {
    return false;
};

function fnc_minute(values, context) {
    return false;
};

function fnc_second(values, context) {
    return false;
};

function fnc_day_of_week(values, context) {
    return false;
};

function fnc_lower(values, context) {
    if ( typeof values[0] != "string" ) { return false; } 
    return values[0].toLowerCase();
};

function fnc_upper(values, context) {
    if ( typeof values[0] != "string" ) { return false; } 
    return values[0].toUpperCase();
};

function fnc_title(values, context) {
    if ( typeof values[0] != "string" ) { return false; }
    return values[0].toLowerCase().split(' ').map(function(word) {
    return (word.charAt(0).toUpperCase() + word.slice(1));
  }).join(' ');
};

function fnc_trim(values, context) {
    if ( typeof values[0] != "string" ) { return false; } 
    return String(values[0]).trim();
};

function fnc_levenshtein(values, context) {
    return false;
};

function fnc_longest_common_substring(values, context) {
    return false;
};

function fnc_hamming_distance(values, context) {
    return false;
};

function fnc_soundex(values, context) {
    return false;
};

function fnc_char(values, context) {
    if ( isNaN(values[0]) || !values[0]) { return null; } return String.fromCodePoint(values[0]);
};

function fnc_wordwrap(values, context) {
    return false;
};

function fnc_length(values, context) {
    return false;
};

function fnc_replace(values, context) {
    return false;
};

function fnc_regexp_replace(values, context) {
    if ( !values[0] ) { return null; } return String(values[0]).replace(RegExp(values[1]),values[2]);
};

function fnc_regexp_substr(values, context) {
    if ( !values[0] ) { return null; }
    return String(values[0]).match(RegExp(values[1]))[0];
};

function fnc_substr(values, context) {
    var length = values[2]
    if ( !values[0] || isNaN(values[1])) { return false; }
    return String(values[0]).substr(values[1], length);
};

function fnc_concat(values, context) {
    return values.join(''); 
};

function fnc_strpos(values, context) {
   if (!values[0] || !values[1]) {return null}
   return String(values[0]).indexOf(String(values[1]))+1;
};

function fnc_left(values, context) {
    return false;
};

function fnc_right(values, context) {
    return false;
};

function fnc_rpad(values, context) {
    return false;
};

function fnc_lpad(values, context) {
    return false;
};

function fnc_format(values, context) {
    return false;
};

function fnc_format_number(values, context) {
    return false;
};

function fnc_format_date(values, context) {
    return false;
};

function fnc_color_rgb(values, context) {
    return false;
};

function fnc_color_rgba(values, context) {
    return false;
};

function fnc_ramp_color(values, context) {
    return false;
};

function fnc_color_hsl(values, context) {
    return false;
};

function fnc_color_hsla(values, context) {
    return false;
};

function fnc_color_hsv(values, context) {
    return false;
};

function fnc_color_hsva(values, context) {
    return false;
};

function fnc_color_cmyk(values, context) {
    return false;
};

function fnc_color_cmyka(values, context) {
    return false;
};

function fnc_color_part(values, context) {
    return false;
};

function fnc_darker(values, context) {
    return false;
};

function fnc_lighter(values, context) {
    return false;
};

function fnc_set_color_part(values, context) {
    return false;
};

function fnc_area(values, context) {
    return false;
};

function fnc_perimeter(values, context) {
    return false;
};

function fnc_x(values, context) {
    return false;
};

function fnc_y(values, context) {
    return false;
};

function fnc_z(values, context) {
    return false;
};

function fnc_m(values, context) {
    return false;
};

function fnc_point_n(values, context) {
    return false;
};

function fnc_start_point(values, context) {
    return false;
};

function fnc_end_point(values, context) {
    return false;
};

function fnc_nodes_to_points(values, context) {
    return false;
};

function fnc_segments_to_lines(values, context) {
    return false;
};

function fnc_make_point(values, context) {
    return false;
};

function fnc_make_point_m(values, context) {
    return false;
};

function fnc_make_line(values, context) {
    return false;
};

function fnc_make_polygon(values, context) {
    return false;
};

function fnc_x_min(values, context) {
    return false;
};

function fnc_x_max(values, context) {
    return false;
};

function fnc_y_min(values, context) {
    return false;
};

function fnc_y_max(values, context) {
    return false;
};

function fnc_geom_from_wkt(values, context) {
    return false;
};

function fnc_geom_from_gml(values, context) {
    return false;
};

function fnc_relate(values, context) {
    return false;
};

function fnc_intersects_bbox(values, context) {
    return false;
};

function fnc_disjoint(values, context) {
    return false;
};

function fnc_intersects(values, context) {
    return false;
};

function fnc_touches(values, context) {
    return false;
};

function fnc_crosses(values, context) {
    return false;
};

function fnc_contains(values, context) {
    return false;
};

function fnc_overlaps(values, context) {
    return false;
};

function fnc_within(values, context) {
    return false;
};

function fnc_translate(values, context) {
    return false;
};

function fnc_buffer(values, context) {
    return false;
};

function fnc_centroid(values, context) {
    return false;
};

function fnc_point_on_surface(values, context) {
    return false;
};

function fnc_reverse(values, context) {
    return false;
};

function fnc_exterior_ring(values, context) {
    return false;
};

function fnc_interior_ring_n(values, context) {
    return false;
};

function fnc_geometry_n(values, context) {
    return false;
};

function fnc_boundary(values, context) {
    return false;
};

function fnc_line_merge(values, context) {
    return false;
};

function fnc_bounds(values, context) {
    return false;
};

function fnc_num_points(values, context) {
    return false;
};

function fnc_num_interior_rings(values, context) {
    return false;
};

function fnc_num_rings(values, context) {
    return false;
};

function fnc_num_geometries(values, context) {
    return false;
};

function fnc_bounds_width(values, context) {
    return false;
};

function fnc_bounds_height(values, context) {
    return false;
};

function fnc_is_closed(values, context) {
    return false;
};

function fnc_convex_hull(values, context) {
    return false;
};

function fnc_difference(values, context) {
    return false;
};

function fnc_distance(values, context) {
    return false;
};

function fnc_intersection(values, context) {
    return false;
};

function fnc_sym_difference(values, context) {
    return false;
};

function fnc_combine(values, context) {
    return false;
};

function fnc_union(values, context) {
    return false;
};

function fnc_geom_to_wkt(values, context) {
    return false;
};

function fnc_geometry(values, context) {
    return false;
};

function fnc_transform(values, context) {
    return false;
};

function fnc_extrude(values, context) {
    return false;
};

function fnc_order_parts(values, context) {
    return false;
};

function fnc_closest_point(values, context) {
    return false;
};

function fnc_shortest_line(values, context) {
    return false;
};

function fnc_line_interpolate_point(values, context) {
    return false;
};

function fnc_line_interpolate_angle(values, context) {
    return false;
};

function fnc_line_locate_point(values, context) {
    return false;
};

function fnc_angle_at_vertex(values, context) {
    return false;
};

function fnc_distance_to_vertex(values, context) {
    return false;
};

function fnc_uuid(values, context) {
    return false;
};

function fnc_get_feature(values, context) {
    return false;
};

function fnc_layer_property(values, context) {
    return false;
};

function fnc_var(values, context) {
    return false;
};

function fnc_eval(values, context) {
    return false;
};

function fnc_attribute(values, context) {
    return false;
};

function fnc__specialcol_(values, context) {
    return false;
};

function fnc_project_color(values, context) {
    return false;
};



function exp_label_LOT1_1_eval_expression(context) {
    // 'LOT 1'

    var feature = context.feature;
    
    if (feature.properties) {
        return 'LOT 1';
    } else {
        return 'LOT 1';
    }
}


function exp_label_LOT2_2_eval_expression(context) {
    // 'LOT 2'

    var feature = context.feature;
    
    if (feature.properties) {
        return 'LOT 2';
    } else {
        return 'LOT 2';
    }
}


function exp_label_LOT3_3_eval_expression(context) {
    // 'LOT 3'

    var feature = context.feature;
    
    if (feature.properties) {
        return 'LOT 3';
    } else {
        return 'LOT 3';
    }
}


function exp_label_LOT4_4_eval_expression(context) {
    // 'LOT 4'

    var feature = context.feature;
    
    if (feature.properties) {
        return 'LOT 4';
    } else {
        return 'LOT 4';
    }
}


function exp_label_LOT5_5_eval_expression(context) {
    // 'LOT 5'

    var feature = context.feature;
    
    if (feature.properties) {
        return 'LOT 5';
    } else {
        return 'LOT 5';
    }
}


function exp_label_LOT6_6_eval_expression(context) {
    // 'LOT 6'

    var feature = context.feature;
    
    if (feature.properties) {
        return 'LOT 6';
    } else {
        return 'LOT 6';
    }
}


function exp_label_LOT7_7_eval_expression(context) {
    // 'LOT 7'

    var feature = context.feature;
    
    if (feature.properties) {
        return 'LOT 7';
    } else {
        return 'LOT 7';
    }
}


function exp_label_LOT8_8_eval_expression(context) {
    // 'LOT 8'

    var feature = context.feature;
    
    if (feature.properties) {
        return 'LOT 8';
    } else {
        return 'LOT 8';
    }
}


function exp_label_LOT9_9_eval_expression(context) {
    // 'LOT 9'

    var feature = context.feature;
    
    if (feature.properties) {
        return 'LOT 9';
    } else {
        return 'LOT 9';
    }
}


function exp_label_LOT10_10_eval_expression(context) {
    // 'LOT 10'

    var feature = context.feature;
    
    if (feature.properties) {
        return 'LOT 10';
    } else {
        return 'LOT 10';
    }
}


function exp_label_LOT11_11_eval_expression(context) {
    // 'LOT 11'

    var feature = context.feature;
    
    if (feature.properties) {
        return 'LOT 11';
    } else {
        return 'LOT 11';
    }
}


function exp_label_LOT11B_12_eval_expression(context) {
    // 'LOT 11B'

    var feature = context.feature;
    
    if (feature.properties) {
        return 'LOT 11B';
    } else {
        return 'LOT 11B';
    }
}


function exp_label_LOT12_13_eval_expression(context) {
    // 'LOT 12'

    var feature = context.feature;
    
    if (feature.properties) {
        return 'LOT 12';
    } else {
        return 'LOT 12';
    }
}


function exp_label_LOT13_14_eval_expression(context) {
    // 'LOT 13'

    var feature = context.feature;
    
    if (feature.properties) {
        return 'LOT 13';
    } else {
        return 'LOT 13';
    }
}


function exp_label_LOT14_15_eval_expression(context) {
    // 'LOT 14'

    var feature = context.feature;
    
    if (feature.properties) {
        return 'LOT 14';
    } else {
        return 'LOT 14';
    }
}


function exp_label_LOT15_16_eval_expression(context) {
    // 'LOT 15'

    var feature = context.feature;
    
    if (feature.properties) {
        return 'LOT 15';
    } else {
        return 'LOT 15';
    }
}


function exp_label_LOT16_17_eval_expression(context) {
    // 'LOT 16'

    var feature = context.feature;
    
    if (feature.properties) {
        return 'LOT 16';
    } else {
        return 'LOT 16';
    }
}


function exp_label_LOT17_18_eval_expression(context) {
    // 'LOT 17'

    var feature = context.feature;
    
    if (feature.properties) {
        return 'LOT 17';
    } else {
        return 'LOT 17';
    }
}


function exp_label_LOT18_19_eval_expression(context) {
    // 'LOT 18'

    var feature = context.feature;
    
    if (feature.properties) {
        return 'LOT 18';
    } else {
        return 'LOT 18';
    }
}


function exp_label_LOT19_20_eval_expression(context) {
    // 'LOT 19'

    var feature = context.feature;
    
    if (feature.properties) {
        return 'LOT 19';
    } else {
        return 'LOT 19';
    }
}


function exp_label_LOT20_21_eval_expression(context) {
    // 'LOT 20'

    var feature = context.feature;
    
    if (feature.properties) {
        return 'LOT 20';
    } else {
        return 'LOT 20';
    }
}


function exp_label_LOT21_22_eval_expression(context) {
    // 'LOT 21'

    var feature = context.feature;
    
    if (feature.properties) {
        return 'LOT 21';
    } else {
        return 'LOT 21';
    }
}


function exp_label_LOT22_23_eval_expression(context) {
    // 'LOT 22'

    var feature = context.feature;
    
    if (feature.properties) {
        return 'LOT 22';
    } else {
        return 'LOT 22';
    }
}


function exp_label_LOT23_24_eval_expression(context) {
    // 'LOT 23'

    var feature = context.feature;
    
    if (feature.properties) {
        return 'LOT 23';
    } else {
        return 'LOT 23';
    }
}


function exp_label_LOT24_25_eval_expression(context) {
    // 'LOT 24'

    var feature = context.feature;
    
    if (feature.properties) {
        return 'LOT 24';
    } else {
        return 'LOT 24';
    }
}


function exp_label_LOT25_26_eval_expression(context) {
    // 'LOT 25'

    var feature = context.feature;
    
    if (feature.properties) {
        return 'LOT 25';
    } else {
        return 'LOT 25';
    }
}


function exp_label_LOT26_27_eval_expression(context) {
    // 'LOT 26'

    var feature = context.feature;
    
    if (feature.properties) {
        return 'LOT 26';
    } else {
        return 'LOT 26';
    }
}


function exp_label_LOT27_28_eval_expression(context) {
    // 'LOT 27'

    var feature = context.feature;
    
    if (feature.properties) {
        return 'LOT 27';
    } else {
        return 'LOT 27';
    }
}


function exp_label_LOT28_29_eval_expression(context) {
    // 'LOT 28'

    var feature = context.feature;
    
    if (feature.properties) {
        return 'LOT 28';
    } else {
        return 'LOT 28';
    }
}


function exp_label_LOT29_30_eval_expression(context) {
    // 'LOT 29'

    var feature = context.feature;
    
    if (feature.properties) {
        return 'LOT 29';
    } else {
        return 'LOT 29';
    }
}


function exp_label_LOT30_31_eval_expression(context) {
    // 'LOT 30'

    var feature = context.feature;
    
    if (feature.properties) {
        return 'LOT 30';
    } else {
        return 'LOT 30';
    }
}


function exp_label_LOT31_32_eval_expression(context) {
    // 'LOT 31'

    var feature = context.feature;
    
    if (feature.properties) {
        return 'LOT 31';
    } else {
        return 'LOT 31';
    }
}


function exp_label_LOT32_33_eval_expression(context) {
    // 'LOT 32'

    var feature = context.feature;
    
    if (feature.properties) {
        return 'LOT 32';
    } else {
        return 'LOT 32';
    }
}


function exp_label_LOT33_34_eval_expression(context) {
    // 'LOT 33'

    var feature = context.feature;
    
    if (feature.properties) {
        return 'LOT 33';
    } else {
        return 'LOT 33';
    }
}


function exp_label_LOT34_35_eval_expression(context) {
    // 'LOT 34'

    var feature = context.feature;
    
    if (feature.properties) {
        return 'LOT 34';
    } else {
        return 'LOT 34';
    }
}


function exp_label_LOT35_36_eval_expression(context) {
    // 'LOT 35'

    var feature = context.feature;
    
    if (feature.properties) {
        return 'LOT 35';
    } else {
        return 'LOT 35';
    }
}


function exp_label_LOT36_37_eval_expression(context) {
    // 'LOT 36'

    var feature = context.feature;
    
    if (feature.properties) {
        return 'LOT 36';
    } else {
        return 'LOT 36';
    }
}


function exp_label_LOT37_38_eval_expression(context) {
    // 'LOT 37'

    var feature = context.feature;
    
    if (feature.properties) {
        return 'LOT 37';
    } else {
        return 'LOT 37';
    }
}


function exp_label_LOT38_39_eval_expression(context) {
    // 'LOT 38'

    var feature = context.feature;
    
    if (feature.properties) {
        return 'LOT 38';
    } else {
        return 'LOT 38';
    }
}


function exp_label_LOT39_40_eval_expression(context) {
    // 'LOT 39'

    var feature = context.feature;
    
    if (feature.properties) {
        return 'LOT 39';
    } else {
        return 'LOT 39';
    }
}


function exp_label_LOT40_41_eval_expression(context) {
    // 'LOT 40'

    var feature = context.feature;
    
    if (feature.properties) {
        return 'LOT 40';
    } else {
        return 'LOT 40';
    }
}


function exp_label_LOT41_42_eval_expression(context) {
    // 'LOT 41'

    var feature = context.feature;
    
    if (feature.properties) {
        return 'LOT 41';
    } else {
        return 'LOT 41';
    }
}


function exp_label_LOT42_43_eval_expression(context) {
    // 'LOT 42'

    var feature = context.feature;
    
    if (feature.properties) {
        return 'LOT 42';
    } else {
        return 'LOT 42';
    }
}


function exp_label_LOT43_44_eval_expression(context) {
    // 'LOT 43'

    var feature = context.feature;
    
    if (feature.properties) {
        return 'LOT 43';
    } else {
        return 'LOT 43';
    }
}


function exp_label_LOT44_45_eval_expression(context) {
    // 'LOT 44'

    var feature = context.feature;
    
    if (feature.properties) {
        return 'LOT 44';
    } else {
        return 'LOT 44';
    }
}


function exp_label_LOT45_46_eval_expression(context) {
    // 'LOT 45'

    var feature = context.feature;
    
    if (feature.properties) {
        return 'LOT 45';
    } else {
        return 'LOT 45';
    }
}


function exp_label_LOT46_47_eval_expression(context) {
    // 'LOT 46'

    var feature = context.feature;
    
    if (feature.properties) {
        return 'LOT 46';
    } else {
        return 'LOT 46';
    }
}