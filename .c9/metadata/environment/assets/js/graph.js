{"filter":false,"title":"graph.js","tooltip":"/assets/js/graph.js","undoManager":{"mark":100,"position":100,"stack":[[{"start":{"row":0,"column":0},"end":{"row":28,"column":1},"action":"remove","lines":["","function makeGraphs(error, data) {","    var ndx = crossfilter(data);","","    show_danceability(ndx);","","    dc.renderAll();","}","","function show_danceability(ndx) {","    var dim = ndx.dimension(dc.pluck('danceability'));","    var group = dim.group();","","    dc.barChart(\"#danceability-chart\")","        .width(400)","        .height(300)","        .margins({ top: 10, right: 50, bottom: 30, left: 50 })","        .dimension(dim)","        .group(group)","        .transitionDuration(500)","        .x(d3.scale.linear())","        .xUnits(dc.units.linear)","        .elasticY(false)","        .xAxisLabel(\"Danceability\")","        .yAxis().tick(20);","","","","}"],"id":2},{"start":{"row":0,"column":0},"end":{"row":31,"column":1},"action":"insert","lines":["queue()","    .defer(d3.csv, \"data/top2018.csv\")","    .await(makeGraphs);","","function makeGraphs(error, data) {","    var ndx = crossfilter(data);","","    show_danceability(ndx);","","    dc.renderAll();","}","","function show_danceability(ndx) {","    var dim = ndx.dimension(dc.pluck('danceability'));","    var group = dim.group();","","    dc.barChart(\"#danceability-chart\")","        .width(400)","        .height(300)","        .margins({ top: 10, right: 50, bottom: 30, left: 50 })","        .dimension(dim)","        .group(group)","        .transitionDuration(500)","        .x(d3.scale.linear())","        .xUnits(dc.units.linear)","        .elasticY(false)","        .xAxisLabel(\"Danceability\")","        .yAxis().tick(20);","","","","}"]}],[{"start":{"row":1,"column":20},"end":{"row":1,"column":36},"action":"remove","lines":["data/top2018.csv"],"id":3},{"start":{"row":1,"column":20},"end":{"row":1,"column":44},"action":"insert","lines":["/assets/data/top2018.csv"]}],[{"start":{"row":1,"column":20},"end":{"row":1,"column":21},"action":"remove","lines":["/"],"id":4}],[{"start":{"row":31,"column":1},"end":{"row":32,"column":0},"action":"insert","lines":["",""],"id":5},{"start":{"row":32,"column":0},"end":{"row":33,"column":0},"action":"insert","lines":["",""]},{"start":{"row":33,"column":0},"end":{"row":34,"column":0},"action":"insert","lines":["",""]}],[{"start":{"row":34,"column":0},"end":{"row":62,"column":1},"action":"insert","lines":["queue()","    .defer(d3.csv, \"data/Salaries.csv\")","    .await(makeGraphs);","    ","function makeGraphs(error, salaryData) {","    var ndx = crossfilter(salaryData);","    ","    show_gender_balance(ndx);","    ","    dc.renderAll();","}","","function show_gender_balance(ndx) {","    var dim = ndx.dimension(dc.pluck('sex'));","    var group = dim.group();","    ","    dc.barChart(\"#gender-balance\")","        .width(400)","        .height(300)","        .margins({top: 10, right: 50, bottom: 30, left: 50})","        .dimension(dim)","        .group(group)","        .transitionDuration(500)","        .x(d3.scale.ordinal())","        .xUnits(dc.units.ordinal)","        .elasticY(true)","        .xAxisLabel(\"Gender\")","        .yAxis().ticks(20);","}"],"id":6}],[{"start":{"row":1,"column":20},"end":{"row":1,"column":43},"action":"remove","lines":["assets/data/top2018.csv"],"id":7}],[{"start":{"row":35,"column":25},"end":{"row":35,"column":33},"action":"remove","lines":["Salaries"],"id":8}],[{"start":{"row":35,"column":28},"end":{"row":35,"column":29},"action":"remove","lines":["v"],"id":9},{"start":{"row":35,"column":27},"end":{"row":35,"column":28},"action":"remove","lines":["s"]},{"start":{"row":35,"column":26},"end":{"row":35,"column":27},"action":"remove","lines":["c"]},{"start":{"row":35,"column":25},"end":{"row":35,"column":26},"action":"remove","lines":["."]},{"start":{"row":35,"column":24},"end":{"row":35,"column":25},"action":"remove","lines":["/"]},{"start":{"row":35,"column":23},"end":{"row":35,"column":24},"action":"remove","lines":["a"]},{"start":{"row":35,"column":22},"end":{"row":35,"column":23},"action":"remove","lines":["t"]},{"start":{"row":35,"column":21},"end":{"row":35,"column":22},"action":"remove","lines":["a"]},{"start":{"row":35,"column":20},"end":{"row":35,"column":21},"action":"remove","lines":["d"]}],[{"start":{"row":35,"column":20},"end":{"row":35,"column":43},"action":"insert","lines":["assets/data/top2018.csv"],"id":10}],[{"start":{"row":38,"column":28},"end":{"row":38,"column":32},"action":"remove","lines":["alar"],"id":11},{"start":{"row":38,"column":28},"end":{"row":38,"column":29},"action":"insert","lines":["p"]},{"start":{"row":38,"column":29},"end":{"row":38,"column":30},"action":"insert","lines":["i"]},{"start":{"row":38,"column":30},"end":{"row":38,"column":31},"action":"insert","lines":["t"]}],[{"start":{"row":38,"column":30},"end":{"row":38,"column":31},"action":"remove","lines":["t"],"id":12},{"start":{"row":38,"column":29},"end":{"row":38,"column":30},"action":"remove","lines":["i"]}],[{"start":{"row":38,"column":29},"end":{"row":38,"column":30},"action":"insert","lines":["o"],"id":13},{"start":{"row":38,"column":30},"end":{"row":38,"column":31},"action":"insert","lines":["t"]},{"start":{"row":38,"column":31},"end":{"row":38,"column":32},"action":"insert","lines":["i"]},{"start":{"row":38,"column":32},"end":{"row":38,"column":33},"action":"insert","lines":["f"]}],[{"start":{"row":39,"column":26},"end":{"row":39,"column":36},"action":"remove","lines":["salaryData"],"id":14},{"start":{"row":39,"column":26},"end":{"row":39,"column":37},"action":"insert","lines":["spotifyData"]}],[{"start":{"row":41,"column":4},"end":{"row":41,"column":23},"action":"remove","lines":["show_gender_balance"],"id":15},{"start":{"row":41,"column":4},"end":{"row":41,"column":5},"action":"insert","lines":["s"]},{"start":{"row":41,"column":5},"end":{"row":41,"column":6},"action":"insert","lines":["h"]},{"start":{"row":41,"column":6},"end":{"row":41,"column":7},"action":"insert","lines":["o"]},{"start":{"row":41,"column":7},"end":{"row":41,"column":8},"action":"insert","lines":["w"]}],[{"start":{"row":41,"column":4},"end":{"row":41,"column":8},"action":"remove","lines":["show"],"id":16},{"start":{"row":41,"column":4},"end":{"row":41,"column":21},"action":"insert","lines":["show_danceability"]}],[{"start":{"row":46,"column":9},"end":{"row":46,"column":28},"action":"remove","lines":["show_gender_balance"],"id":17},{"start":{"row":46,"column":9},"end":{"row":46,"column":26},"action":"insert","lines":["show_danceability"]}],[{"start":{"row":47,"column":38},"end":{"row":47,"column":41},"action":"remove","lines":["sex"],"id":18}],[{"start":{"row":47,"column":38},"end":{"row":47,"column":39},"action":"insert","lines":["d"],"id":19},{"start":{"row":47,"column":39},"end":{"row":47,"column":40},"action":"insert","lines":["a"]}],[{"start":{"row":47,"column":38},"end":{"row":47,"column":40},"action":"remove","lines":["da"],"id":20},{"start":{"row":47,"column":38},"end":{"row":47,"column":50},"action":"insert","lines":["danceability"]}],[{"start":{"row":50,"column":25},"end":{"row":50,"column":32},"action":"remove","lines":["balance"],"id":21},{"start":{"row":50,"column":24},"end":{"row":50,"column":25},"action":"remove","lines":["-"]},{"start":{"row":50,"column":23},"end":{"row":50,"column":24},"action":"remove","lines":["r"]},{"start":{"row":50,"column":22},"end":{"row":50,"column":23},"action":"remove","lines":["e"]},{"start":{"row":50,"column":21},"end":{"row":50,"column":22},"action":"remove","lines":["d"]},{"start":{"row":50,"column":20},"end":{"row":50,"column":21},"action":"remove","lines":["n"]},{"start":{"row":50,"column":19},"end":{"row":50,"column":20},"action":"remove","lines":["e"]},{"start":{"row":50,"column":18},"end":{"row":50,"column":19},"action":"remove","lines":["g"]}],[{"start":{"row":50,"column":18},"end":{"row":50,"column":19},"action":"insert","lines":["d"],"id":22},{"start":{"row":50,"column":19},"end":{"row":50,"column":20},"action":"insert","lines":["a"]}],[{"start":{"row":50,"column":18},"end":{"row":50,"column":20},"action":"remove","lines":["da"],"id":23},{"start":{"row":50,"column":18},"end":{"row":50,"column":30},"action":"insert","lines":["danceability"]}],[{"start":{"row":60,"column":21},"end":{"row":60,"column":27},"action":"remove","lines":["Gender"],"id":24},{"start":{"row":60,"column":21},"end":{"row":60,"column":22},"action":"insert","lines":["d"]},{"start":{"row":60,"column":22},"end":{"row":60,"column":23},"action":"insert","lines":["a"]},{"start":{"row":60,"column":23},"end":{"row":60,"column":24},"action":"insert","lines":["n"]}],[{"start":{"row":60,"column":21},"end":{"row":60,"column":24},"action":"remove","lines":["dan"],"id":25},{"start":{"row":60,"column":21},"end":{"row":60,"column":33},"action":"insert","lines":["danceability"]}],[{"start":{"row":57,"column":20},"end":{"row":57,"column":27},"action":"remove","lines":["ordinal"],"id":26},{"start":{"row":57,"column":20},"end":{"row":57,"column":21},"action":"insert","lines":["l"]},{"start":{"row":57,"column":21},"end":{"row":57,"column":22},"action":"insert","lines":["i"]}],[{"start":{"row":57,"column":20},"end":{"row":57,"column":22},"action":"remove","lines":["li"],"id":27},{"start":{"row":57,"column":20},"end":{"row":57,"column":26},"action":"insert","lines":["linear"]}],[{"start":{"row":0,"column":0},"end":{"row":32,"column":0},"action":"remove","lines":["queue()","    .defer(d3.csv, \"\")","    .await(makeGraphs);","","function makeGraphs(error, data) {","    var ndx = crossfilter(data);","","    show_danceability(ndx);","","    dc.renderAll();","}","","function show_danceability(ndx) {","    var dim = ndx.dimension(dc.pluck('danceability'));","    var group = dim.group();","","    dc.barChart(\"#danceability-chart\")","        .width(400)","        .height(300)","        .margins({ top: 10, right: 50, bottom: 30, left: 50 })","        .dimension(dim)","        .group(group)","        .transitionDuration(500)","        .x(d3.scale.linear())","        .xUnits(dc.units.linear)","        .elasticY(false)","        .xAxisLabel(\"Danceability\")","        .yAxis().tick(20);","","","","}",""],"id":28},{"start":{"row":1,"column":0},"end":{"row":2,"column":0},"action":"remove","lines":["",""]},{"start":{"row":0,"column":0},"end":{"row":1,"column":0},"action":"remove","lines":["",""]}],[{"start":{"row":16,"column":30},"end":{"row":16,"column":31},"action":"insert","lines":["-"],"id":29},{"start":{"row":16,"column":31},"end":{"row":16,"column":32},"action":"insert","lines":["c"]},{"start":{"row":16,"column":32},"end":{"row":16,"column":33},"action":"insert","lines":["h"]},{"start":{"row":16,"column":33},"end":{"row":16,"column":34},"action":"insert","lines":["a"]}],[{"start":{"row":16,"column":34},"end":{"row":16,"column":35},"action":"insert","lines":["r"],"id":30},{"start":{"row":16,"column":35},"end":{"row":16,"column":36},"action":"insert","lines":["t"]}],[{"start":{"row":23,"column":20},"end":{"row":23,"column":26},"action":"remove","lines":["linear"],"id":31},{"start":{"row":23,"column":20},"end":{"row":23,"column":21},"action":"insert","lines":["o"]}],[{"start":{"row":23,"column":20},"end":{"row":23,"column":21},"action":"remove","lines":["o"],"id":32},{"start":{"row":23,"column":20},"end":{"row":23,"column":27},"action":"insert","lines":["ordinal"]}],[{"start":{"row":23,"column":20},"end":{"row":23,"column":27},"action":"remove","lines":["ordinal"],"id":33},{"start":{"row":23,"column":20},"end":{"row":23,"column":21},"action":"insert","lines":["l"]},{"start":{"row":23,"column":21},"end":{"row":23,"column":22},"action":"insert","lines":["i"]},{"start":{"row":23,"column":22},"end":{"row":23,"column":23},"action":"insert","lines":["n"]},{"start":{"row":23,"column":23},"end":{"row":23,"column":24},"action":"insert","lines":["e"]},{"start":{"row":23,"column":24},"end":{"row":23,"column":25},"action":"insert","lines":["a"]},{"start":{"row":23,"column":25},"end":{"row":23,"column":26},"action":"insert","lines":["r"]}],[{"start":{"row":24,"column":25},"end":{"row":24,"column":32},"action":"remove","lines":["ordinal"],"id":34},{"start":{"row":24,"column":25},"end":{"row":24,"column":26},"action":"insert","lines":["l"]},{"start":{"row":24,"column":26},"end":{"row":24,"column":27},"action":"insert","lines":["e"]}],[{"start":{"row":24,"column":26},"end":{"row":24,"column":27},"action":"remove","lines":["e"],"id":35}],[{"start":{"row":24,"column":25},"end":{"row":24,"column":26},"action":"remove","lines":["l"],"id":36},{"start":{"row":24,"column":25},"end":{"row":24,"column":31},"action":"insert","lines":["linear"]}],[{"start":{"row":23,"column":20},"end":{"row":23,"column":26},"action":"remove","lines":["linear"],"id":37},{"start":{"row":23,"column":20},"end":{"row":23,"column":21},"action":"insert","lines":["o"]},{"start":{"row":23,"column":21},"end":{"row":23,"column":22},"action":"insert","lines":["r"]},{"start":{"row":23,"column":22},"end":{"row":23,"column":23},"action":"insert","lines":["d"]},{"start":{"row":23,"column":23},"end":{"row":23,"column":24},"action":"insert","lines":["i"]},{"start":{"row":23,"column":24},"end":{"row":23,"column":25},"action":"insert","lines":["n"]},{"start":{"row":23,"column":25},"end":{"row":23,"column":26},"action":"insert","lines":["a"]},{"start":{"row":23,"column":26},"end":{"row":23,"column":27},"action":"insert","lines":["l"]}],[{"start":{"row":24,"column":25},"end":{"row":24,"column":31},"action":"remove","lines":["linear"],"id":38},{"start":{"row":24,"column":25},"end":{"row":24,"column":26},"action":"insert","lines":["o"]},{"start":{"row":24,"column":26},"end":{"row":24,"column":27},"action":"insert","lines":["r"]},{"start":{"row":24,"column":27},"end":{"row":24,"column":28},"action":"insert","lines":["i"]}],[{"start":{"row":24,"column":27},"end":{"row":24,"column":28},"action":"remove","lines":["i"],"id":39}],[{"start":{"row":24,"column":25},"end":{"row":24,"column":27},"action":"remove","lines":["or"],"id":40},{"start":{"row":24,"column":25},"end":{"row":24,"column":32},"action":"insert","lines":["ordinal"]}],[{"start":{"row":26,"column":21},"end":{"row":26,"column":22},"action":"remove","lines":["d"],"id":41}],[{"start":{"row":26,"column":21},"end":{"row":26,"column":22},"action":"insert","lines":["D"],"id":42}],[{"start":{"row":27,"column":24},"end":{"row":27,"column":25},"action":"remove","lines":["0"],"id":43},{"start":{"row":27,"column":23},"end":{"row":27,"column":24},"action":"remove","lines":["2"]}],[{"start":{"row":27,"column":23},"end":{"row":27,"column":24},"action":"insert","lines":["1"],"id":44},{"start":{"row":27,"column":24},"end":{"row":27,"column":25},"action":"insert","lines":["0"]}],[{"start":{"row":27,"column":24},"end":{"row":27,"column":25},"action":"remove","lines":["0"],"id":45},{"start":{"row":27,"column":23},"end":{"row":27,"column":24},"action":"remove","lines":["1"]}],[{"start":{"row":27,"column":23},"end":{"row":27,"column":24},"action":"insert","lines":["5"],"id":46}],[{"start":{"row":25,"column":23},"end":{"row":26,"column":0},"action":"insert","lines":["",""],"id":47},{"start":{"row":26,"column":0},"end":{"row":26,"column":8},"action":"insert","lines":["        "]},{"start":{"row":26,"column":8},"end":{"row":26,"column":9},"action":"insert","lines":["."]}],[{"start":{"row":26,"column":9},"end":{"row":26,"column":32},"action":"insert","lines":["d3.format(\".2s\") : 1.5k"],"id":48}],[{"start":{"row":26,"column":31},"end":{"row":26,"column":32},"action":"remove","lines":["k"],"id":49},{"start":{"row":26,"column":30},"end":{"row":26,"column":31},"action":"remove","lines":["5"]},{"start":{"row":26,"column":29},"end":{"row":26,"column":30},"action":"remove","lines":["."]},{"start":{"row":26,"column":28},"end":{"row":26,"column":29},"action":"remove","lines":["1"]},{"start":{"row":26,"column":27},"end":{"row":26,"column":28},"action":"remove","lines":[" "]},{"start":{"row":26,"column":26},"end":{"row":26,"column":27},"action":"remove","lines":[":"]},{"start":{"row":26,"column":25},"end":{"row":26,"column":26},"action":"remove","lines":[" "]}],[{"start":{"row":26,"column":8},"end":{"row":26,"column":25},"action":"remove","lines":[".d3.format(\".2s\")"],"id":51},{"start":{"row":26,"column":4},"end":{"row":26,"column":8},"action":"remove","lines":["    "]},{"start":{"row":26,"column":0},"end":{"row":26,"column":4},"action":"remove","lines":["    "]},{"start":{"row":25,"column":23},"end":{"row":26,"column":0},"action":"remove","lines":["",""]}],[{"start":{"row":16,"column":18},"end":{"row":16,"column":36},"action":"remove","lines":["danceability-chart"],"id":52},{"start":{"row":16,"column":18},"end":{"row":16,"column":31},"action":"insert","lines":["valence-chart"]}],[{"start":{"row":13,"column":38},"end":{"row":13,"column":50},"action":"remove","lines":["danceability"],"id":53},{"start":{"row":13,"column":38},"end":{"row":13,"column":39},"action":"insert","lines":["v"]},{"start":{"row":13,"column":39},"end":{"row":13,"column":40},"action":"insert","lines":["a"]},{"start":{"row":13,"column":40},"end":{"row":13,"column":41},"action":"insert","lines":["l"]},{"start":{"row":13,"column":41},"end":{"row":13,"column":42},"action":"insert","lines":["e"]},{"start":{"row":13,"column":42},"end":{"row":13,"column":43},"action":"insert","lines":["n"]},{"start":{"row":13,"column":43},"end":{"row":13,"column":44},"action":"insert","lines":["c"]},{"start":{"row":13,"column":44},"end":{"row":13,"column":45},"action":"insert","lines":["e"]}],[{"start":{"row":12,"column":14},"end":{"row":12,"column":26},"action":"remove","lines":["danceability"],"id":54},{"start":{"row":12,"column":14},"end":{"row":12,"column":15},"action":"insert","lines":["v"]},{"start":{"row":12,"column":15},"end":{"row":12,"column":16},"action":"insert","lines":["a"]},{"start":{"row":12,"column":16},"end":{"row":12,"column":17},"action":"insert","lines":["l"]},{"start":{"row":12,"column":17},"end":{"row":12,"column":18},"action":"insert","lines":["e"]},{"start":{"row":12,"column":18},"end":{"row":12,"column":19},"action":"insert","lines":["n"]},{"start":{"row":12,"column":19},"end":{"row":12,"column":20},"action":"insert","lines":["c"]},{"start":{"row":12,"column":20},"end":{"row":12,"column":21},"action":"insert","lines":["e"]}],[{"start":{"row":7,"column":9},"end":{"row":7,"column":21},"action":"remove","lines":["danceability"],"id":55},{"start":{"row":7,"column":9},"end":{"row":7,"column":10},"action":"insert","lines":["v"]},{"start":{"row":7,"column":10},"end":{"row":7,"column":11},"action":"insert","lines":["a"]},{"start":{"row":7,"column":11},"end":{"row":7,"column":12},"action":"insert","lines":["l"]},{"start":{"row":7,"column":12},"end":{"row":7,"column":13},"action":"insert","lines":["e"]},{"start":{"row":7,"column":13},"end":{"row":7,"column":14},"action":"insert","lines":["n"]},{"start":{"row":7,"column":14},"end":{"row":7,"column":15},"action":"insert","lines":["c"]},{"start":{"row":7,"column":15},"end":{"row":7,"column":16},"action":"insert","lines":["e"]}],[{"start":{"row":26,"column":21},"end":{"row":26,"column":33},"action":"remove","lines":["Danceability"],"id":56},{"start":{"row":26,"column":21},"end":{"row":26,"column":22},"action":"insert","lines":["V"]},{"start":{"row":26,"column":22},"end":{"row":26,"column":23},"action":"insert","lines":["a"]},{"start":{"row":26,"column":23},"end":{"row":26,"column":24},"action":"insert","lines":["l"]},{"start":{"row":26,"column":24},"end":{"row":26,"column":25},"action":"insert","lines":["e"]},{"start":{"row":26,"column":25},"end":{"row":26,"column":26},"action":"insert","lines":["n"]},{"start":{"row":26,"column":26},"end":{"row":26,"column":27},"action":"insert","lines":["c"]},{"start":{"row":26,"column":27},"end":{"row":26,"column":28},"action":"insert","lines":["e"]}],[{"start":{"row":27,"column":23},"end":{"row":27,"column":24},"action":"remove","lines":["5"],"id":57}],[{"start":{"row":27,"column":23},"end":{"row":27,"column":24},"action":"insert","lines":["3"],"id":58}],[{"start":{"row":27,"column":23},"end":{"row":27,"column":24},"action":"remove","lines":["3"],"id":59}],[{"start":{"row":27,"column":23},"end":{"row":27,"column":24},"action":"insert","lines":["5"],"id":60}],[{"start":{"row":12,"column":0},"end":{"row":12,"column":3},"action":"insert","lines":["// "],"id":61},{"start":{"row":13,"column":0},"end":{"row":13,"column":3},"action":"insert","lines":["// "]},{"start":{"row":14,"column":0},"end":{"row":14,"column":3},"action":"insert","lines":["// "]},{"start":{"row":16,"column":0},"end":{"row":16,"column":3},"action":"insert","lines":["// "]},{"start":{"row":17,"column":0},"end":{"row":17,"column":3},"action":"insert","lines":["// "]},{"start":{"row":18,"column":0},"end":{"row":18,"column":3},"action":"insert","lines":["// "]},{"start":{"row":19,"column":0},"end":{"row":19,"column":3},"action":"insert","lines":["// "]},{"start":{"row":20,"column":0},"end":{"row":20,"column":3},"action":"insert","lines":["// "]},{"start":{"row":21,"column":0},"end":{"row":21,"column":3},"action":"insert","lines":["// "]},{"start":{"row":22,"column":0},"end":{"row":22,"column":3},"action":"insert","lines":["// "]},{"start":{"row":23,"column":0},"end":{"row":23,"column":3},"action":"insert","lines":["// "]},{"start":{"row":24,"column":0},"end":{"row":24,"column":3},"action":"insert","lines":["// "]},{"start":{"row":25,"column":0},"end":{"row":25,"column":3},"action":"insert","lines":["// "]},{"start":{"row":26,"column":0},"end":{"row":26,"column":3},"action":"insert","lines":["// "]},{"start":{"row":27,"column":0},"end":{"row":27,"column":3},"action":"insert","lines":["// "]},{"start":{"row":28,"column":0},"end":{"row":28,"column":3},"action":"insert","lines":["// "]}],[{"start":{"row":10,"column":1},"end":{"row":11,"column":0},"action":"insert","lines":["",""],"id":62},{"start":{"row":11,"column":0},"end":{"row":12,"column":0},"action":"insert","lines":["",""]}],[{"start":{"row":12,"column":0},"end":{"row":35,"column":6},"action":"insert","lines":["function showEnergy(ndx){","\tvar chart = dc.lineChart(\"#energy\");","\tvar dim = ndx.dimension(function(data) { ","\t\treturn parseFloat(data.energy).toFixed(1);","\t});","","\tvar group = dim.group();","","\tconsole.log(group);","","\tchart.width(800)","   .height(300)","   // .y(d3.scale.linear().domain([0,1]))","   .x(d3.scale.linear().domain([0.30,1.00]))","   .brushOn(false)","   .yAxisLabel(\"Frequency\")","   .xAxisLabel(\"energy\")","   .dimension(dim)","   .group(group)","   .on('renderlet', function(chart) {","      chart.selectAll('rect').on('click', function(d) {","         console.log('click!', d);","      });","   });"],"id":63}],[{"start":{"row":35,"column":6},"end":{"row":36,"column":0},"action":"insert","lines":["",""],"id":64},{"start":{"row":36,"column":0},"end":{"row":36,"column":3},"action":"insert","lines":["   "]},{"start":{"row":36,"column":3},"end":{"row":37,"column":0},"action":"insert","lines":["",""]},{"start":{"row":37,"column":0},"end":{"row":37,"column":3},"action":"insert","lines":["   "]}],[{"start":{"row":37,"column":3},"end":{"row":38,"column":1},"action":"insert","lines":["chart.render();","}"],"id":65}],[{"start":{"row":9,"column":4},"end":{"row":9,"column":19},"action":"remove","lines":["dc.renderAll();"],"id":66}],[{"start":{"row":7,"column":9},"end":{"row":7,"column":16},"action":"remove","lines":["valence"],"id":67},{"start":{"row":7,"column":8},"end":{"row":7,"column":9},"action":"remove","lines":["_"]}],[{"start":{"row":7,"column":8},"end":{"row":7,"column":9},"action":"insert","lines":["E"],"id":68},{"start":{"row":7,"column":9},"end":{"row":7,"column":10},"action":"insert","lines":["n"]},{"start":{"row":7,"column":10},"end":{"row":7,"column":11},"action":"insert","lines":["e"]},{"start":{"row":7,"column":11},"end":{"row":7,"column":12},"action":"insert","lines":["r"]},{"start":{"row":7,"column":12},"end":{"row":7,"column":13},"action":"insert","lines":["g"]},{"start":{"row":7,"column":13},"end":{"row":7,"column":14},"action":"insert","lines":["y"]}],[{"start":{"row":7,"column":20},"end":{"row":8,"column":0},"action":"insert","lines":["",""],"id":69},{"start":{"row":8,"column":0},"end":{"row":8,"column":4},"action":"insert","lines":["    "]},{"start":{"row":8,"column":4},"end":{"row":9,"column":0},"action":"insert","lines":["",""]},{"start":{"row":9,"column":0},"end":{"row":9,"column":4},"action":"insert","lines":["    "]}],[{"start":{"row":9,"column":4},"end":{"row":9,"column":19},"action":"insert","lines":["dc.renderAll();"],"id":70}],[{"start":{"row":39,"column":0},"end":{"row":40,"column":1},"action":"remove","lines":["   chart.render();","}"],"id":71},{"start":{"row":38,"column":3},"end":{"row":39,"column":0},"action":"remove","lines":["",""]}],[{"start":{"row":38,"column":3},"end":{"row":39,"column":1},"action":"insert","lines":["   chart.render();","}"],"id":72}],[{"start":{"row":9,"column":3},"end":{"row":9,"column":19},"action":"remove","lines":[" dc.renderAll();"],"id":73}],[{"start":{"row":11,"column":2},"end":{"row":11,"column":3},"action":"remove","lines":[" "],"id":74},{"start":{"row":11,"column":1},"end":{"row":11,"column":2},"action":"remove","lines":[" "]},{"start":{"row":11,"column":0},"end":{"row":11,"column":1},"action":"remove","lines":[" "]},{"start":{"row":10,"column":4},"end":{"row":11,"column":1},"action":"remove","lines":[""," "]},{"start":{"row":10,"column":0},"end":{"row":10,"column":4},"action":"remove","lines":["    "]},{"start":{"row":9,"column":3},"end":{"row":10,"column":0},"action":"remove","lines":["",""]},{"start":{"row":9,"column":2},"end":{"row":9,"column":3},"action":"remove","lines":[" "]},{"start":{"row":9,"column":1},"end":{"row":9,"column":2},"action":"remove","lines":[" "]}],[{"start":{"row":9,"column":0},"end":{"row":9,"column":1},"action":"remove","lines":[" "],"id":75}],[{"start":{"row":38,"column":0},"end":{"row":39,"column":0},"action":"insert","lines":["",""],"id":76},{"start":{"row":39,"column":0},"end":{"row":40,"column":0},"action":"insert","lines":["",""]},{"start":{"row":40,"column":0},"end":{"row":41,"column":0},"action":"insert","lines":["",""]}],[{"start":{"row":39,"column":0},"end":{"row":66,"column":1},"action":"insert","lines":["function showDanceability(ndx){","\tvar chart = dc.lineChart(\"#danceability\");","","\tvar dim = ndx.dimension(function(data) { ","\t\treturn parseFloat(data.danceability).toFixed(1);","\t});","","\tvar group = dim.group();","","\tconsole.log(group);","","\tchart.width(800)","   .height(300)","   // .y(d3.scale.linear().domain([0,1]))","   .x(d3.scale.linear().domain([0.30,1.00]))","   .brushOn(false)","   .yAxisLabel(\"Frequency\")","   .xAxisLabel(\"Dancibility\")","   .dimension(dim)","   .group(group)","   .on('renderlet', function(chart) {","      chart.selectAll('rect').on('click', function(d) {","         console.log('click!', d);","      });","   });","","chart.render();","}"],"id":77}],[{"start":{"row":3,"column":0},"end":{"row":3,"column":4},"action":"remove","lines":["    "],"id":78},{"start":{"row":6,"column":0},"end":{"row":6,"column":4},"action":"remove","lines":["    "]},{"start":{"row":8,"column":0},"end":{"row":8,"column":4},"action":"remove","lines":["    "]},{"start":{"row":12,"column":24},"end":{"row":12,"column":25},"action":"insert","lines":[" "]},{"start":{"row":13,"column":0},"end":{"row":13,"column":1},"action":"remove","lines":["\t"]},{"start":{"row":13,"column":0},"end":{"row":13,"column":4},"action":"insert","lines":["    "]},{"start":{"row":14,"column":0},"end":{"row":14,"column":1},"action":"remove","lines":["\t"]},{"start":{"row":14,"column":0},"end":{"row":14,"column":4},"action":"insert","lines":["    "]},{"start":{"row":14,"column":44},"end":{"row":15,"column":5},"action":"insert","lines":["","     "]},{"start":{"row":15,"column":6},"end":{"row":16,"column":2},"action":"remove","lines":["","\t\t"]},{"start":{"row":15,"column":6},"end":{"row":15,"column":8},"action":"insert","lines":["  "]},{"start":{"row":16,"column":0},"end":{"row":16,"column":1},"action":"remove","lines":["\t"]},{"start":{"row":16,"column":0},"end":{"row":16,"column":4},"action":"insert","lines":["    "]},{"start":{"row":18,"column":0},"end":{"row":18,"column":1},"action":"remove","lines":["\t"]},{"start":{"row":18,"column":0},"end":{"row":18,"column":4},"action":"insert","lines":["    "]},{"start":{"row":20,"column":0},"end":{"row":20,"column":1},"action":"remove","lines":["\t"]},{"start":{"row":20,"column":0},"end":{"row":20,"column":4},"action":"insert","lines":["    "]},{"start":{"row":22,"column":0},"end":{"row":22,"column":1},"action":"remove","lines":["\t"]},{"start":{"row":22,"column":0},"end":{"row":22,"column":4},"action":"insert","lines":["    "]},{"start":{"row":23,"column":3},"end":{"row":23,"column":8},"action":"insert","lines":["     "]},{"start":{"row":24,"column":0},"end":{"row":24,"column":5},"action":"insert","lines":["     "]},{"start":{"row":25,"column":3},"end":{"row":25,"column":8},"action":"insert","lines":["     "]},{"start":{"row":25,"column":42},"end":{"row":25,"column":43},"action":"insert","lines":[" "]},{"start":{"row":26,"column":0},"end":{"row":26,"column":5},"action":"insert","lines":["     "]},{"start":{"row":27,"column":3},"end":{"row":27,"column":8},"action":"insert","lines":["     "]},{"start":{"row":28,"column":0},"end":{"row":28,"column":5},"action":"insert","lines":["     "]},{"start":{"row":29,"column":3},"end":{"row":29,"column":8},"action":"insert","lines":["     "]},{"start":{"row":30,"column":3},"end":{"row":30,"column":8},"action":"insert","lines":["     "]},{"start":{"row":31,"column":0},"end":{"row":31,"column":5},"action":"insert","lines":["     "]},{"start":{"row":32,"column":0},"end":{"row":32,"column":6},"action":"insert","lines":["      "]},{"start":{"row":33,"column":0},"end":{"row":33,"column":5},"action":"insert","lines":["     "]},{"start":{"row":33,"column":14},"end":{"row":33,"column":16},"action":"insert","lines":["  "]},{"start":{"row":34,"column":6},"end":{"row":34,"column":12},"action":"insert","lines":["      "]},{"start":{"row":35,"column":3},"end":{"row":35,"column":8},"action":"insert","lines":["     "]},{"start":{"row":36,"column":0},"end":{"row":36,"column":1},"action":"remove","lines":[" "]},{"start":{"row":36,"column":4},"end":{"row":36,"column":5},"action":"remove","lines":[" "]},{"start":{"row":39,"column":30},"end":{"row":39,"column":31},"action":"insert","lines":[" "]},{"start":{"row":40,"column":0},"end":{"row":40,"column":1},"action":"remove","lines":["\t"]},{"start":{"row":40,"column":0},"end":{"row":40,"column":4},"action":"insert","lines":["    "]},{"start":{"row":42,"column":0},"end":{"row":42,"column":1},"action":"remove","lines":["\t"]},{"start":{"row":42,"column":0},"end":{"row":42,"column":4},"action":"insert","lines":["    "]},{"start":{"row":42,"column":44},"end":{"row":42,"column":45},"action":"remove","lines":[" "]},{"start":{"row":43,"column":0},"end":{"row":43,"column":2},"action":"remove","lines":["\t\t"]},{"start":{"row":43,"column":0},"end":{"row":43,"column":8},"action":"insert","lines":["        "]},{"start":{"row":44,"column":0},"end":{"row":44,"column":1},"action":"remove","lines":["\t"]},{"start":{"row":44,"column":0},"end":{"row":44,"column":4},"action":"insert","lines":["    "]},{"start":{"row":46,"column":0},"end":{"row":46,"column":1},"action":"remove","lines":["\t"]},{"start":{"row":46,"column":0},"end":{"row":46,"column":4},"action":"insert","lines":["    "]},{"start":{"row":48,"column":0},"end":{"row":48,"column":1},"action":"remove","lines":["\t"]},{"start":{"row":48,"column":0},"end":{"row":48,"column":4},"action":"insert","lines":["    "]},{"start":{"row":50,"column":0},"end":{"row":50,"column":1},"action":"remove","lines":["\t"]},{"start":{"row":50,"column":0},"end":{"row":50,"column":4},"action":"insert","lines":["    "]},{"start":{"row":51,"column":0},"end":{"row":51,"column":5},"action":"insert","lines":["     "]},{"start":{"row":52,"column":3},"end":{"row":52,"column":8},"action":"insert","lines":["     "]},{"start":{"row":53,"column":3},"end":{"row":53,"column":8},"action":"insert","lines":["     "]},{"start":{"row":53,"column":42},"end":{"row":53,"column":43},"action":"insert","lines":[" "]},{"start":{"row":54,"column":3},"end":{"row":54,"column":8},"action":"insert","lines":["     "]},{"start":{"row":55,"column":3},"end":{"row":55,"column":8},"action":"insert","lines":["     "]},{"start":{"row":56,"column":0},"end":{"row":56,"column":5},"action":"insert","lines":["     "]},{"start":{"row":57,"column":3},"end":{"row":57,"column":8},"action":"insert","lines":["     "]},{"start":{"row":58,"column":0},"end":{"row":58,"column":5},"action":"insert","lines":["     "]},{"start":{"row":59,"column":3},"end":{"row":59,"column":8},"action":"insert","lines":["     "]},{"start":{"row":60,"column":0},"end":{"row":60,"column":6},"action":"insert","lines":["      "]},{"start":{"row":61,"column":0},"end":{"row":61,"column":1},"action":"insert","lines":[" "]},{"start":{"row":61,"column":10},"end":{"row":61,"column":16},"action":"insert","lines":["      "]},{"start":{"row":62,"column":0},"end":{"row":62,"column":1},"action":"insert","lines":[" "]},{"start":{"row":62,"column":7},"end":{"row":62,"column":12},"action":"insert","lines":["     "]},{"start":{"row":63,"column":0},"end":{"row":63,"column":5},"action":"insert","lines":["     "]},{"start":{"row":65,"column":0},"end":{"row":65,"column":4},"action":"insert","lines":["    "]},{"start":{"row":72,"column":0},"end":{"row":72,"column":4},"action":"remove","lines":["    "]},{"start":{"row":85,"column":4},"end":{"row":86,"column":0},"action":"insert","lines":["",""]}],[{"start":{"row":7,"column":20},"end":{"row":8,"column":0},"action":"insert","lines":["",""],"id":79},{"start":{"row":8,"column":0},"end":{"row":8,"column":4},"action":"insert","lines":["    "]},{"start":{"row":8,"column":4},"end":{"row":8,"column":5},"action":"insert","lines":["s"]},{"start":{"row":8,"column":5},"end":{"row":8,"column":6},"action":"insert","lines":["h"]},{"start":{"row":8,"column":6},"end":{"row":8,"column":7},"action":"insert","lines":["o"]}],[{"start":{"row":8,"column":4},"end":{"row":8,"column":7},"action":"remove","lines":["sho"],"id":80},{"start":{"row":8,"column":4},"end":{"row":8,"column":22},"action":"insert","lines":["showDanceability()"]}],[{"start":{"row":8,"column":21},"end":{"row":8,"column":22},"action":"insert","lines":["n"],"id":81},{"start":{"row":8,"column":22},"end":{"row":8,"column":23},"action":"insert","lines":["d"]},{"start":{"row":8,"column":23},"end":{"row":8,"column":24},"action":"insert","lines":["x"]}],[{"start":{"row":8,"column":25},"end":{"row":8,"column":26},"action":"insert","lines":[";"],"id":82}],[{"start":{"row":23,"column":16},"end":{"row":23,"column":17},"action":"remove","lines":["8"],"id":83}],[{"start":{"row":23,"column":16},"end":{"row":23,"column":17},"action":"insert","lines":["4"],"id":84}],[{"start":{"row":51,"column":16},"end":{"row":51,"column":17},"action":"remove","lines":["8"],"id":85}],[{"start":{"row":51,"column":16},"end":{"row":51,"column":17},"action":"insert","lines":["4"],"id":86}],[{"start":{"row":57,"column":25},"end":{"row":57,"column":26},"action":"remove","lines":["i"],"id":87}],[{"start":{"row":57,"column":25},"end":{"row":57,"column":26},"action":"insert","lines":["e"],"id":88},{"start":{"row":57,"column":26},"end":{"row":57,"column":27},"action":"insert","lines":["a"]}],[{"start":{"row":53,"column":8},"end":{"row":53,"column":46},"action":"remove","lines":["// .y(d3.scale.linear().domain([0,1]))"],"id":89},{"start":{"row":53,"column":4},"end":{"row":53,"column":8},"action":"remove","lines":["    "]},{"start":{"row":53,"column":0},"end":{"row":53,"column":4},"action":"remove","lines":["    "]},{"start":{"row":52,"column":20},"end":{"row":53,"column":0},"action":"remove","lines":["",""]}],[{"start":{"row":28,"column":21},"end":{"row":28,"column":30},"action":"remove","lines":["Frequency"],"id":90},{"start":{"row":28,"column":21},"end":{"row":28,"column":22},"action":"insert","lines":["D"]}],[{"start":{"row":28,"column":21},"end":{"row":28,"column":22},"action":"remove","lines":["D"],"id":91}],[{"start":{"row":28,"column":21},"end":{"row":28,"column":22},"action":"insert","lines":["S"],"id":92},{"start":{"row":28,"column":22},"end":{"row":28,"column":23},"action":"insert","lines":["o"]},{"start":{"row":28,"column":23},"end":{"row":28,"column":24},"action":"insert","lines":["n"]},{"start":{"row":28,"column":24},"end":{"row":28,"column":25},"action":"insert","lines":["g"]}],[{"start":{"row":28,"column":25},"end":{"row":28,"column":26},"action":"insert","lines":[" "],"id":93},{"start":{"row":28,"column":26},"end":{"row":28,"column":27},"action":"insert","lines":["C"]},{"start":{"row":28,"column":27},"end":{"row":28,"column":28},"action":"insert","lines":["o"]},{"start":{"row":28,"column":28},"end":{"row":28,"column":29},"action":"insert","lines":["u"]},{"start":{"row":28,"column":29},"end":{"row":28,"column":30},"action":"insert","lines":["n"]},{"start":{"row":28,"column":30},"end":{"row":28,"column":31},"action":"insert","lines":["t"]}],[{"start":{"row":23,"column":9},"end":{"row":24,"column":0},"action":"insert","lines":["",""],"id":100},{"start":{"row":24,"column":0},"end":{"row":24,"column":4},"action":"insert","lines":["    "]}],[{"start":{"row":24,"column":4},"end":{"row":24,"column":8},"action":"insert","lines":["    "],"id":101}],[{"start":{"row":30,"column":21},"end":{"row":30,"column":22},"action":"remove","lines":["e"],"id":102}],[{"start":{"row":30,"column":21},"end":{"row":30,"column":22},"action":"insert","lines":["E"],"id":125}],[{"start":{"row":6,"column":0},"end":{"row":7,"column":0},"action":"insert","lines":["",""],"id":126}],[{"start":{"row":7,"column":0},"end":{"row":7,"column":4},"action":"insert","lines":["    "],"id":127}],[{"start":{"row":7,"column":4},"end":{"row":7,"column":63},"action":"insert","lines":["<script src=\"assets/js/libraries/jquery-3.4.1.js\"></script>"],"id":128}],[{"start":{"row":7,"column":4},"end":{"row":7,"column":63},"action":"remove","lines":["<script src=\"assets/js/libraries/jquery-3.4.1.js\"></script>"],"id":144},{"start":{"row":7,"column":0},"end":{"row":7,"column":4},"action":"remove","lines":["    "]},{"start":{"row":6,"column":0},"end":{"row":7,"column":0},"action":"remove","lines":["",""]}],[{"start":{"row":9,"column":0},"end":{"row":10,"column":0},"action":"remove","lines":["",""],"id":145}],[{"start":{"row":6,"column":0},"end":{"row":7,"column":0},"action":"insert","lines":["",""],"id":146}]]},"ace":{"folds":[],"scrolltop":0,"scrollleft":0,"selection":{"start":{"row":7,"column":0},"end":{"row":7,"column":0},"isBackwards":true},"options":{"guessTabSize":true,"useWrapMode":false,"wrapToView":true},"firstLineState":0},"timestamp":1567097135703,"hash":"c4e8ff8c5b02c0524a155121fd64a0b61ff07078"}