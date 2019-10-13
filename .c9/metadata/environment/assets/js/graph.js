{"filter":false,"title":"graph.js","tooltip":"/assets/js/graph.js","undoManager":{"mark":100,"position":100,"stack":[[{"start":{"row":3,"column":0},"end":{"row":3,"column":14},"action":"insert","lines":["/* global d3*/"],"id":4749}],[{"start":{"row":3,"column":11},"end":{"row":3,"column":12},"action":"remove","lines":["3"],"id":4750},{"start":{"row":3,"column":10},"end":{"row":3,"column":11},"action":"remove","lines":["d"]}],[{"start":{"row":3,"column":10},"end":{"row":3,"column":11},"action":"insert","lines":["g"],"id":4751},{"start":{"row":3,"column":11},"end":{"row":3,"column":12},"action":"insert","lines":["r"]},{"start":{"row":3,"column":12},"end":{"row":3,"column":13},"action":"insert","lines":["o"]},{"start":{"row":3,"column":13},"end":{"row":3,"column":14},"action":"insert","lines":["u"]},{"start":{"row":3,"column":14},"end":{"row":3,"column":15},"action":"insert","lines":["p"]}],[{"start":{"row":3,"column":0},"end":{"row":3,"column":17},"action":"remove","lines":["/* global group*/"],"id":4752},{"start":{"row":2,"column":14},"end":{"row":3,"column":0},"action":"remove","lines":["",""]}],[{"start":{"row":12,"column":0},"end":{"row":12,"column":33},"action":"remove","lines":["    unique_count_groupall(group);"],"id":4753},{"start":{"row":11,"column":20},"end":{"row":12,"column":0},"action":"remove","lines":["",""]}],[{"start":{"row":51,"column":1},"end":{"row":52,"column":0},"action":"remove","lines":["",""],"id":4754}],[{"start":{"row":51,"column":1},"end":{"row":52,"column":0},"action":"insert","lines":["",""],"id":4755}],[{"start":{"row":22,"column":1},"end":{"row":23,"column":0},"action":"insert","lines":["",""],"id":4758},{"start":{"row":23,"column":0},"end":{"row":24,"column":0},"action":"insert","lines":["",""]}],[{"start":{"row":24,"column":0},"end":{"row":24,"column":62},"action":"insert","lines":["const spotifyData = d3.csvParse(d3.select('pre#data').text());"],"id":4759}],[{"start":{"row":24,"column":0},"end":{"row":24,"column":1},"action":"insert","lines":["/"],"id":4760},{"start":{"row":24,"column":1},"end":{"row":24,"column":2},"action":"insert","lines":["/"]}],[{"start":{"row":39,"column":0},"end":{"row":43,"column":4},"action":"remove","lines":["// function totalSongs(ndx) {","//     var dim = ndx.dimension(dc.pluck(\"name\"));","//     var individualSongs = dim.group().all().length;","//     $(\"#all-songs\").text(individualSongs);","// }"],"id":4766},{"start":{"row":38,"column":0},"end":{"row":39,"column":0},"action":"remove","lines":["",""]}],[{"start":{"row":41,"column":0},"end":{"row":42,"column":0},"action":"insert","lines":["",""],"id":4767}],[{"start":{"row":42,"column":0},"end":{"row":43,"column":0},"action":"insert","lines":["",""],"id":4768}],[{"start":{"row":42,"column":0},"end":{"row":42,"column":1},"action":"insert","lines":["/"],"id":4769},{"start":{"row":42,"column":1},"end":{"row":42,"column":2},"action":"insert","lines":["/"]},{"start":{"row":42,"column":2},"end":{"row":42,"column":3},"action":"insert","lines":["T"]},{"start":{"row":42,"column":3},"end":{"row":42,"column":4},"action":"insert","lines":["h"]},{"start":{"row":42,"column":4},"end":{"row":42,"column":5},"action":"insert","lines":["e"]}],[{"start":{"row":42,"column":5},"end":{"row":42,"column":6},"action":"insert","lines":[" "],"id":4770},{"start":{"row":42,"column":6},"end":{"row":42,"column":7},"action":"insert","lines":["C"]},{"start":{"row":42,"column":7},"end":{"row":42,"column":8},"action":"insert","lines":["o"]},{"start":{"row":42,"column":8},"end":{"row":42,"column":9},"action":"insert","lines":["d"]},{"start":{"row":42,"column":9},"end":{"row":42,"column":10},"action":"insert","lines":["e"]}],[{"start":{"row":42,"column":10},"end":{"row":42,"column":11},"action":"insert","lines":[" "],"id":4771}],[{"start":{"row":42,"column":10},"end":{"row":42,"column":11},"action":"remove","lines":[" "],"id":4772},{"start":{"row":42,"column":9},"end":{"row":42,"column":10},"action":"remove","lines":["e"]},{"start":{"row":42,"column":8},"end":{"row":42,"column":9},"action":"remove","lines":["d"]},{"start":{"row":42,"column":7},"end":{"row":42,"column":8},"action":"remove","lines":["o"]},{"start":{"row":42,"column":6},"end":{"row":42,"column":7},"action":"remove","lines":["C"]}],[{"start":{"row":42,"column":6},"end":{"row":42,"column":7},"action":"insert","lines":["c"],"id":4773},{"start":{"row":42,"column":7},"end":{"row":42,"column":8},"action":"insert","lines":["o"]},{"start":{"row":42,"column":8},"end":{"row":42,"column":9},"action":"insert","lines":["d"]},{"start":{"row":42,"column":9},"end":{"row":42,"column":10},"action":"insert","lines":["e"]}],[{"start":{"row":42,"column":10},"end":{"row":42,"column":11},"action":"insert","lines":[" "],"id":4774},{"start":{"row":42,"column":11},"end":{"row":42,"column":12},"action":"insert","lines":["f"]},{"start":{"row":42,"column":12},"end":{"row":42,"column":13},"action":"insert","lines":["o"]},{"start":{"row":42,"column":13},"end":{"row":42,"column":14},"action":"insert","lines":["r"]}],[{"start":{"row":42,"column":14},"end":{"row":42,"column":15},"action":"insert","lines":[" "],"id":4775},{"start":{"row":42,"column":15},"end":{"row":42,"column":16},"action":"insert","lines":["t"]},{"start":{"row":42,"column":16},"end":{"row":42,"column":17},"action":"insert","lines":["h"]},{"start":{"row":42,"column":17},"end":{"row":42,"column":18},"action":"insert","lines":["i"]},{"start":{"row":42,"column":18},"end":{"row":42,"column":19},"action":"insert","lines":["s"]}],[{"start":{"row":42,"column":19},"end":{"row":42,"column":20},"action":"insert","lines":[" "],"id":4776},{"start":{"row":42,"column":20},"end":{"row":42,"column":21},"action":"insert","lines":["f"]},{"start":{"row":42,"column":21},"end":{"row":42,"column":22},"action":"insert","lines":["u"]},{"start":{"row":42,"column":22},"end":{"row":42,"column":23},"action":"insert","lines":["n"]},{"start":{"row":42,"column":23},"end":{"row":42,"column":24},"action":"insert","lines":["c"]},{"start":{"row":42,"column":24},"end":{"row":42,"column":25},"action":"insert","lines":["t"]},{"start":{"row":42,"column":25},"end":{"row":42,"column":26},"action":"insert","lines":["i"]},{"start":{"row":42,"column":26},"end":{"row":42,"column":27},"action":"insert","lines":["o"]},{"start":{"row":42,"column":27},"end":{"row":42,"column":28},"action":"insert","lines":["n"]}],[{"start":{"row":42,"column":28},"end":{"row":42,"column":29},"action":"insert","lines":[" "],"id":4777},{"start":{"row":42,"column":29},"end":{"row":42,"column":30},"action":"insert","lines":["w"]},{"start":{"row":42,"column":30},"end":{"row":42,"column":31},"action":"insert","lines":["a"]},{"start":{"row":42,"column":31},"end":{"row":42,"column":32},"action":"insert","lines":["s"]}],[{"start":{"row":42,"column":32},"end":{"row":42,"column":33},"action":"insert","lines":[" "],"id":4778}],[{"start":{"row":42,"column":33},"end":{"row":42,"column":34},"action":"insert","lines":["f"],"id":4779},{"start":{"row":42,"column":34},"end":{"row":42,"column":35},"action":"insert","lines":["i"]},{"start":{"row":42,"column":35},"end":{"row":42,"column":36},"action":"insert","lines":["g"]},{"start":{"row":42,"column":36},"end":{"row":42,"column":37},"action":"insert","lines":["u"]},{"start":{"row":42,"column":37},"end":{"row":42,"column":38},"action":"insert","lines":["t"]},{"start":{"row":42,"column":38},"end":{"row":42,"column":39},"action":"insert","lines":["e"]}],[{"start":{"row":42,"column":38},"end":{"row":42,"column":39},"action":"remove","lines":["e"],"id":4780},{"start":{"row":42,"column":37},"end":{"row":42,"column":38},"action":"remove","lines":["t"]}],[{"start":{"row":42,"column":37},"end":{"row":42,"column":38},"action":"insert","lines":["r"],"id":4781}],[{"start":{"row":42,"column":37},"end":{"row":42,"column":38},"action":"remove","lines":["r"],"id":4782}],[{"start":{"row":42,"column":37},"end":{"row":42,"column":38},"action":"insert","lines":["e"],"id":4783},{"start":{"row":42,"column":38},"end":{"row":42,"column":39},"action":"insert","lines":["d"]}],[{"start":{"row":42,"column":38},"end":{"row":42,"column":39},"action":"remove","lines":["d"],"id":4784},{"start":{"row":42,"column":37},"end":{"row":42,"column":38},"action":"remove","lines":["e"]}],[{"start":{"row":42,"column":37},"end":{"row":42,"column":38},"action":"insert","lines":["r"],"id":4785},{"start":{"row":42,"column":38},"end":{"row":42,"column":39},"action":"insert","lines":["e"]},{"start":{"row":42,"column":39},"end":{"row":42,"column":40},"action":"insert","lines":["d"]}],[{"start":{"row":42,"column":40},"end":{"row":42,"column":41},"action":"insert","lines":[" "],"id":4786},{"start":{"row":42,"column":41},"end":{"row":42,"column":42},"action":"insert","lines":["o"]},{"start":{"row":42,"column":42},"end":{"row":42,"column":43},"action":"insert","lines":["u"]},{"start":{"row":42,"column":43},"end":{"row":42,"column":44},"action":"insert","lines":["t"]}],[{"start":{"row":42,"column":44},"end":{"row":42,"column":45},"action":"insert","lines":[" "],"id":4787},{"start":{"row":42,"column":45},"end":{"row":42,"column":46},"action":"insert","lines":["w"]},{"start":{"row":42,"column":46},"end":{"row":42,"column":47},"action":"insert","lines":["i"]},{"start":{"row":42,"column":47},"end":{"row":42,"column":48},"action":"insert","lines":["t"]},{"start":{"row":42,"column":48},"end":{"row":42,"column":49},"action":"insert","lines":["h"]},{"start":{"row":42,"column":49},"end":{"row":42,"column":50},"action":"insert","lines":["a"]}],[{"start":{"row":42,"column":49},"end":{"row":42,"column":50},"action":"remove","lines":["a"],"id":4788}],[{"start":{"row":42,"column":49},"end":{"row":42,"column":50},"action":"insert","lines":[" "],"id":4789}],[{"start":{"row":42,"column":49},"end":{"row":42,"column":50},"action":"remove","lines":[" "],"id":4790},{"start":{"row":42,"column":48},"end":{"row":42,"column":49},"action":"remove","lines":["h"]},{"start":{"row":42,"column":47},"end":{"row":42,"column":48},"action":"remove","lines":["t"]},{"start":{"row":42,"column":46},"end":{"row":42,"column":47},"action":"remove","lines":["i"]},{"start":{"row":42,"column":45},"end":{"row":42,"column":46},"action":"remove","lines":["w"]}],[{"start":{"row":42,"column":45},"end":{"row":42,"column":46},"action":"insert","lines":["f"],"id":4791},{"start":{"row":42,"column":46},"end":{"row":42,"column":47},"action":"insert","lines":["r"]},{"start":{"row":42,"column":47},"end":{"row":42,"column":48},"action":"insert","lines":["o"]},{"start":{"row":42,"column":48},"end":{"row":42,"column":49},"action":"insert","lines":["m"]}],[{"start":{"row":42,"column":49},"end":{"row":42,"column":50},"action":"insert","lines":[" "],"id":4792},{"start":{"row":42,"column":50},"end":{"row":42,"column":51},"action":"insert","lines":["a"]}],[{"start":{"row":42,"column":51},"end":{"row":42,"column":52},"action":"insert","lines":[" "],"id":4793},{"start":{"row":42,"column":52},"end":{"row":42,"column":53},"action":"insert","lines":["q"]},{"start":{"row":42,"column":53},"end":{"row":42,"column":54},"action":"insert","lines":["u"]},{"start":{"row":42,"column":54},"end":{"row":42,"column":55},"action":"insert","lines":["e"]},{"start":{"row":42,"column":55},"end":{"row":42,"column":56},"action":"insert","lines":["s"]},{"start":{"row":42,"column":56},"end":{"row":42,"column":57},"action":"insert","lines":["t"]},{"start":{"row":42,"column":57},"end":{"row":42,"column":58},"action":"insert","lines":["i"]},{"start":{"row":42,"column":58},"end":{"row":42,"column":59},"action":"insert","lines":["o"]},{"start":{"row":42,"column":59},"end":{"row":42,"column":60},"action":"insert","lines":["n"]}],[{"start":{"row":42,"column":60},"end":{"row":42,"column":61},"action":"insert","lines":[" "],"id":4794},{"start":{"row":42,"column":61},"end":{"row":42,"column":62},"action":"insert","lines":["I"]}],[{"start":{"row":42,"column":62},"end":{"row":42,"column":63},"action":"insert","lines":[" "],"id":4795},{"start":{"row":42,"column":63},"end":{"row":42,"column":64},"action":"insert","lines":["a"]},{"start":{"row":42,"column":64},"end":{"row":42,"column":65},"action":"insert","lines":["s"]},{"start":{"row":42,"column":65},"end":{"row":42,"column":66},"action":"insert","lines":["k"]},{"start":{"row":42,"column":66},"end":{"row":42,"column":67},"action":"insert","lines":["e"]},{"start":{"row":42,"column":67},"end":{"row":42,"column":68},"action":"insert","lines":["d"]}],[{"start":{"row":42,"column":68},"end":{"row":42,"column":69},"action":"insert","lines":[" "],"id":4796},{"start":{"row":42,"column":69},"end":{"row":42,"column":70},"action":"insert","lines":["o"]},{"start":{"row":42,"column":70},"end":{"row":42,"column":71},"action":"insert","lines":["n"]}],[{"start":{"row":42,"column":71},"end":{"row":42,"column":72},"action":"insert","lines":[" "],"id":4797},{"start":{"row":42,"column":72},"end":{"row":42,"column":73},"action":"insert","lines":["S"]},{"start":{"row":42,"column":73},"end":{"row":42,"column":74},"action":"insert","lines":["a"]},{"start":{"row":42,"column":74},"end":{"row":42,"column":75},"action":"insert","lines":["t"]}],[{"start":{"row":42,"column":74},"end":{"row":42,"column":75},"action":"remove","lines":["t"],"id":4798},{"start":{"row":42,"column":73},"end":{"row":42,"column":74},"action":"remove","lines":["a"]}],[{"start":{"row":42,"column":73},"end":{"row":42,"column":74},"action":"insert","lines":["t"],"id":4799},{"start":{"row":42,"column":74},"end":{"row":42,"column":75},"action":"insert","lines":["a"]},{"start":{"row":42,"column":75},"end":{"row":42,"column":76},"action":"insert","lines":["c"]},{"start":{"row":42,"column":76},"end":{"row":42,"column":77},"action":"insert","lines":["k"]}],[{"start":{"row":42,"column":77},"end":{"row":42,"column":78},"action":"insert","lines":[" "],"id":4800},{"start":{"row":42,"column":78},"end":{"row":42,"column":79},"action":"insert","lines":["O"]},{"start":{"row":42,"column":79},"end":{"row":42,"column":80},"action":"insert","lines":["v"]},{"start":{"row":42,"column":80},"end":{"row":42,"column":81},"action":"insert","lines":["e"]},{"start":{"row":42,"column":81},"end":{"row":42,"column":82},"action":"insert","lines":["r"]},{"start":{"row":42,"column":82},"end":{"row":42,"column":83},"action":"insert","lines":["l"]},{"start":{"row":42,"column":83},"end":{"row":42,"column":84},"action":"insert","lines":["f"]},{"start":{"row":42,"column":84},"end":{"row":42,"column":85},"action":"insert","lines":["o"]}],[{"start":{"row":42,"column":84},"end":{"row":42,"column":85},"action":"remove","lines":["o"],"id":4801},{"start":{"row":42,"column":83},"end":{"row":42,"column":84},"action":"remove","lines":["f"]},{"start":{"row":42,"column":82},"end":{"row":42,"column":83},"action":"remove","lines":["l"]}],[{"start":{"row":42,"column":82},"end":{"row":42,"column":83},"action":"insert","lines":["f"],"id":4802},{"start":{"row":42,"column":83},"end":{"row":42,"column":84},"action":"insert","lines":["l"]},{"start":{"row":42,"column":84},"end":{"row":42,"column":85},"action":"insert","lines":["o"]},{"start":{"row":42,"column":85},"end":{"row":42,"column":86},"action":"insert","lines":["w"]},{"start":{"row":42,"column":86},"end":{"row":42,"column":87},"action":"insert","lines":[":"]}],[{"start":{"row":42,"column":87},"end":{"row":42,"column":88},"action":"insert","lines":[" "],"id":4803}],[{"start":{"row":42,"column":88},"end":{"row":42,"column":204},"action":"insert","lines":["https://stackoverflow.com/questions/58321985/how-to-get-dynamic-field-count-in-dc-js-numberdisplay/58343323#58343323"],"id":4804}],[{"start":{"row":42,"column":2},"end":{"row":42,"column":3},"action":"insert","lines":[" "],"id":4805}],[{"start":{"row":37,"column":1},"end":{"row":38,"column":0},"action":"remove","lines":["",""],"id":4806}],[{"start":{"row":61,"column":0},"end":{"row":69,"column":4},"action":"remove","lines":["","// function totalArtists(ndx) {","//     // Select the artists","//     var dim = ndx.dimension(dc.pluck(\"artists\"));","//     // Count them","//     var uniqueArtists = dim.group().all().length;","//     // Use jQuery to display the value on the page","//     $(\"#unique-artists\").text(uniqueArtists);","// }"],"id":4807}],[{"start":{"row":61,"column":0},"end":{"row":62,"column":0},"action":"remove","lines":["",""],"id":4808}],[{"start":{"row":90,"column":41},"end":{"row":90,"column":42},"action":"insert","lines":[":"],"id":4810}],[{"start":{"row":90,"column":41},"end":{"row":90,"column":42},"action":"remove","lines":[":"],"id":4811}],[{"start":{"row":84,"column":0},"end":{"row":85,"column":0},"action":"insert","lines":["",""],"id":4812}],[{"start":{"row":85,"column":0},"end":{"row":85,"column":107},"action":"insert","lines":["https://stackoverflow.com/questions/21294302/converting-milliseconds-to-minutes-and-seconds-with-javascript"],"id":4813}],[{"start":{"row":85,"column":0},"end":{"row":85,"column":1},"action":"insert","lines":["/"],"id":4814},{"start":{"row":85,"column":1},"end":{"row":85,"column":2},"action":"insert","lines":["/"]}],[{"start":{"row":85,"column":2},"end":{"row":85,"column":3},"action":"insert","lines":[" "],"id":4815},{"start":{"row":85,"column":3},"end":{"row":85,"column":4},"action":"insert","lines":["T"]},{"start":{"row":85,"column":4},"end":{"row":85,"column":5},"action":"insert","lines":["h"]},{"start":{"row":85,"column":5},"end":{"row":85,"column":6},"action":"insert","lines":["e"]}],[{"start":{"row":85,"column":6},"end":{"row":85,"column":7},"action":"insert","lines":[" "],"id":4816},{"start":{"row":85,"column":7},"end":{"row":85,"column":8},"action":"insert","lines":["C"]},{"start":{"row":85,"column":8},"end":{"row":85,"column":9},"action":"insert","lines":["o"]},{"start":{"row":85,"column":9},"end":{"row":85,"column":10},"action":"insert","lines":["d"]},{"start":{"row":85,"column":10},"end":{"row":85,"column":11},"action":"insert","lines":["e"]}],[{"start":{"row":85,"column":11},"end":{"row":85,"column":12},"action":"insert","lines":[" "],"id":4817},{"start":{"row":85,"column":12},"end":{"row":85,"column":13},"action":"insert","lines":["f"]},{"start":{"row":85,"column":13},"end":{"row":85,"column":14},"action":"insert","lines":["o"]},{"start":{"row":85,"column":14},"end":{"row":85,"column":15},"action":"insert","lines":["r"]}],[{"start":{"row":85,"column":15},"end":{"row":85,"column":16},"action":"insert","lines":[" "],"id":4818},{"start":{"row":85,"column":16},"end":{"row":85,"column":17},"action":"insert","lines":["t"]},{"start":{"row":85,"column":17},"end":{"row":85,"column":18},"action":"insert","lines":["h"]},{"start":{"row":85,"column":18},"end":{"row":85,"column":19},"action":"insert","lines":["i"]},{"start":{"row":85,"column":19},"end":{"row":85,"column":20},"action":"insert","lines":["s"]}],[{"start":{"row":85,"column":20},"end":{"row":85,"column":21},"action":"insert","lines":[" "],"id":4819},{"start":{"row":85,"column":21},"end":{"row":85,"column":22},"action":"insert","lines":["s"]},{"start":{"row":85,"column":22},"end":{"row":85,"column":23},"action":"insert","lines":["o"]},{"start":{"row":85,"column":23},"end":{"row":85,"column":24},"action":"insert","lines":["l"]},{"start":{"row":85,"column":24},"end":{"row":85,"column":25},"action":"insert","lines":["i"]}],[{"start":{"row":85,"column":25},"end":{"row":85,"column":26},"action":"insert","lines":["t"],"id":4820}],[{"start":{"row":85,"column":25},"end":{"row":85,"column":26},"action":"remove","lines":["t"],"id":4821},{"start":{"row":85,"column":24},"end":{"row":85,"column":25},"action":"remove","lines":["i"]}],[{"start":{"row":85,"column":24},"end":{"row":85,"column":25},"action":"insert","lines":["u"],"id":4822},{"start":{"row":85,"column":25},"end":{"row":85,"column":26},"action":"insert","lines":["t"]},{"start":{"row":85,"column":26},"end":{"row":85,"column":27},"action":"insert","lines":["i"]},{"start":{"row":85,"column":27},"end":{"row":85,"column":28},"action":"insert","lines":["o"]},{"start":{"row":85,"column":28},"end":{"row":85,"column":29},"action":"insert","lines":["n"]}],[{"start":{"row":85,"column":29},"end":{"row":85,"column":30},"action":"insert","lines":[" "],"id":4823},{"start":{"row":85,"column":30},"end":{"row":85,"column":31},"action":"insert","lines":["w"]},{"start":{"row":85,"column":31},"end":{"row":85,"column":32},"action":"insert","lines":["a"]},{"start":{"row":85,"column":32},"end":{"row":85,"column":33},"action":"insert","lines":["s"]}],[{"start":{"row":85,"column":33},"end":{"row":85,"column":34},"action":"insert","lines":[" "],"id":4824}],[{"start":{"row":85,"column":34},"end":{"row":85,"column":35},"action":"insert","lines":["w"],"id":4825}],[{"start":{"row":85,"column":34},"end":{"row":85,"column":35},"action":"remove","lines":["w"],"id":4826}],[{"start":{"row":85,"column":34},"end":{"row":85,"column":35},"action":"insert","lines":["i"],"id":4827},{"start":{"row":85,"column":35},"end":{"row":85,"column":36},"action":"insert","lines":["n"]},{"start":{"row":85,"column":36},"end":{"row":85,"column":37},"action":"insert","lines":["s"]},{"start":{"row":85,"column":37},"end":{"row":85,"column":38},"action":"insert","lines":["p"]},{"start":{"row":85,"column":38},"end":{"row":85,"column":39},"action":"insert","lines":["i"]},{"start":{"row":85,"column":39},"end":{"row":85,"column":40},"action":"insert","lines":["r"]},{"start":{"row":85,"column":40},"end":{"row":85,"column":41},"action":"insert","lines":["e"]},{"start":{"row":85,"column":41},"end":{"row":85,"column":42},"action":"insert","lines":["d"]}],[{"start":{"row":85,"column":42},"end":{"row":85,"column":43},"action":"insert","lines":[" "],"id":4828},{"start":{"row":85,"column":43},"end":{"row":85,"column":44},"action":"insert","lines":["f"]},{"start":{"row":85,"column":44},"end":{"row":85,"column":45},"action":"insert","lines":["r"]},{"start":{"row":85,"column":45},"end":{"row":85,"column":46},"action":"insert","lines":["o"]},{"start":{"row":85,"column":46},"end":{"row":85,"column":47},"action":"insert","lines":["m"]},{"start":{"row":85,"column":47},"end":{"row":85,"column":48},"action":"insert","lines":[":"]}],[{"start":{"row":85,"column":48},"end":{"row":85,"column":49},"action":"insert","lines":[" "],"id":4829}],[{"start":{"row":85,"column":156},"end":{"row":86,"column":0},"action":"insert","lines":["",""],"id":4830}],[{"start":{"row":85,"column":0},"end":{"row":85,"column":4},"action":"insert","lines":["    "],"id":4831}],[{"start":{"row":85,"column":0},"end":{"row":86,"column":0},"action":"remove","lines":["    // The Code for this solution was inspired from: https://stackoverflow.com/questions/21294302/converting-milliseconds-to-minutes-and-seconds-with-javascript",""],"id":4832}],[{"start":{"row":85,"column":0},"end":{"row":86,"column":0},"action":"remove","lines":["",""],"id":4833}],[{"start":{"row":93,"column":0},"end":{"row":107,"column":5},"action":"remove","lines":["// function averageSongLength(ndx) {","//     var dim = ndx.dimension(dc.pluck(\"duration_ms\"));","//     // Count them","//     var songLengths = dim.group().all();","//     var songCount = songLengths.length;","","//     var summedLength = 0;","","//     songLengths.forEach(function(songLength) {","//         summedLength += parseFloat(songLength.key);","//     });","//     var avg = summedLength / songCount;","//     var averageMins = millisToMinutesAndSeconds(avg);","//     $(\"#AverageLengthCard\").text(averageMins);","// };"],"id":4834},{"start":{"row":92,"column":0},"end":{"row":93,"column":0},"action":"remove","lines":["",""]}],[{"start":{"row":92,"column":0},"end":{"row":93,"column":0},"action":"remove","lines":["",""],"id":4835}],[{"start":{"row":94,"column":0},"end":{"row":95,"column":0},"action":"insert","lines":["",""],"id":4836}],[{"start":{"row":95,"column":0},"end":{"row":96,"column":0},"action":"insert","lines":["    // The Code for this solution was inspired from: https://stackoverflow.com/questions/21294302/converting-milliseconds-to-minutes-and-seconds-with-javascript",""],"id":4837}],[{"start":{"row":95,"column":38},"end":{"row":95,"column":51},"action":"remove","lines":["inspired from"],"id":4838},{"start":{"row":95,"column":38},"end":{"row":95,"column":39},"action":"insert","lines":["f"]},{"start":{"row":95,"column":39},"end":{"row":95,"column":40},"action":"insert","lines":["o"]},{"start":{"row":95,"column":40},"end":{"row":95,"column":41},"action":"insert","lines":["u"]},{"start":{"row":95,"column":41},"end":{"row":95,"column":42},"action":"insert","lines":["n"]},{"start":{"row":95,"column":42},"end":{"row":95,"column":43},"action":"insert","lines":["d"]}],[{"start":{"row":95,"column":43},"end":{"row":95,"column":44},"action":"insert","lines":[" "],"id":4839},{"start":{"row":95,"column":44},"end":{"row":95,"column":45},"action":"insert","lines":["i"]},{"start":{"row":95,"column":45},"end":{"row":95,"column":46},"action":"insert","lines":["n"]}],[{"start":{"row":95,"column":45},"end":{"row":95,"column":46},"action":"remove","lines":["n"],"id":4840},{"start":{"row":95,"column":44},"end":{"row":95,"column":45},"action":"remove","lines":["i"]}],[{"start":{"row":95,"column":44},"end":{"row":95,"column":45},"action":"insert","lines":["a"],"id":4841},{"start":{"row":95,"column":45},"end":{"row":95,"column":46},"action":"insert","lines":["t"]}],[{"start":{"row":95,"column":46},"end":{"row":95,"column":47},"action":"remove","lines":[":"],"id":4842}],[{"start":{"row":137,"column":0},"end":{"row":137,"column":26},"action":"remove","lines":["        //.clipPadding(50)"],"id":4843},{"start":{"row":136,"column":50},"end":{"row":137,"column":0},"action":"remove","lines":["",""]}],[{"start":{"row":95,"column":0},"end":{"row":95,"column":4},"action":"remove","lines":["    "],"id":4844}],[{"start":{"row":271,"column":0},"end":{"row":272,"column":23},"action":"remove","lines":["","    // Create the chart"],"id":4845}],[{"start":{"row":352,"column":0},"end":{"row":352,"column":23},"action":"remove","lines":["    // Create the chart"],"id":4846},{"start":{"row":351,"column":0},"end":{"row":352,"column":0},"action":"remove","lines":["",""]}],[{"start":{"row":407,"column":0},"end":{"row":409,"column":43},"action":"remove","lines":["    //     .attr(\"height\", \"100%\")","    //     .attr(\"width\", \"100%\")","    //     .attr(\"viewBox\", \"0 0 500 400\");"],"id":4847},{"start":{"row":406,"column":26},"end":{"row":407,"column":0},"action":"remove","lines":["",""]},{"start":{"row":406,"column":25},"end":{"row":406,"column":26},"action":"remove","lines":[")"]},{"start":{"row":406,"column":24},"end":{"row":406,"column":25},"action":"remove","lines":["\""]},{"start":{"row":406,"column":23},"end":{"row":406,"column":24},"action":"remove","lines":["g"]},{"start":{"row":406,"column":22},"end":{"row":406,"column":23},"action":"remove","lines":["v"]},{"start":{"row":406,"column":21},"end":{"row":406,"column":22},"action":"remove","lines":["s"]},{"start":{"row":406,"column":20},"end":{"row":406,"column":21},"action":"remove","lines":["\""]},{"start":{"row":406,"column":19},"end":{"row":406,"column":20},"action":"remove","lines":["("]},{"start":{"row":406,"column":18},"end":{"row":406,"column":19},"action":"remove","lines":["t"]},{"start":{"row":406,"column":17},"end":{"row":406,"column":18},"action":"remove","lines":["c"]},{"start":{"row":406,"column":16},"end":{"row":406,"column":17},"action":"remove","lines":["e"]},{"start":{"row":406,"column":15},"end":{"row":406,"column":16},"action":"remove","lines":["l"]},{"start":{"row":406,"column":14},"end":{"row":406,"column":15},"action":"remove","lines":["e"]},{"start":{"row":406,"column":13},"end":{"row":406,"column":14},"action":"remove","lines":["s"]},{"start":{"row":406,"column":12},"end":{"row":406,"column":13},"action":"remove","lines":["."]}],[{"start":{"row":406,"column":11},"end":{"row":406,"column":12},"action":"remove","lines":["t"],"id":4848},{"start":{"row":406,"column":10},"end":{"row":406,"column":11},"action":"remove","lines":["r"]},{"start":{"row":406,"column":9},"end":{"row":406,"column":10},"action":"remove","lines":["a"]},{"start":{"row":406,"column":8},"end":{"row":406,"column":9},"action":"remove","lines":["h"]},{"start":{"row":406,"column":7},"end":{"row":406,"column":8},"action":"remove","lines":["c"]},{"start":{"row":406,"column":6},"end":{"row":406,"column":7},"action":"remove","lines":[" "]},{"start":{"row":406,"column":5},"end":{"row":406,"column":6},"action":"remove","lines":["/"]},{"start":{"row":406,"column":4},"end":{"row":406,"column":5},"action":"remove","lines":["/"]},{"start":{"row":406,"column":0},"end":{"row":406,"column":4},"action":"remove","lines":["    "]},{"start":{"row":405,"column":57},"end":{"row":406,"column":0},"action":"remove","lines":["",""]}],[{"start":{"row":454,"column":0},"end":{"row":457,"column":0},"action":"remove","lines":["// $(window).resize(function() {","//     dc.renderAll();","// });",""],"id":4849},{"start":{"row":453,"column":0},"end":{"row":454,"column":0},"action":"remove","lines":["",""]}],[{"start":{"row":341,"column":0},"end":{"row":342,"column":0},"action":"insert","lines":["",""],"id":4850}],[{"start":{"row":342,"column":0},"end":{"row":347,"column":1},"action":"insert","lines":["function show_pie_percentage(key, endAngle, startAngle) {","    var percent = dc.utils.printSingleValue((endAngle - startAngle) / (2 * Math.PI) * 100);","    if (percent > 0) {","        return key + ' ' + Math.round(percent) + '%';","    }","}"],"id":4851}],[{"start":{"row":347,"column":1},"end":{"row":348,"column":0},"action":"insert","lines":["",""],"id":4852}],[{"start":{"row":342,"column":16},"end":{"row":342,"column":17},"action":"remove","lines":["e"],"id":4853},{"start":{"row":342,"column":15},"end":{"row":342,"column":16},"action":"remove","lines":["i"]},{"start":{"row":342,"column":14},"end":{"row":342,"column":15},"action":"remove","lines":["p"]}],[{"start":{"row":342,"column":14},"end":{"row":342,"column":15},"action":"insert","lines":["m"],"id":4854},{"start":{"row":342,"column":15},"end":{"row":342,"column":16},"action":"insert","lines":["o"]},{"start":{"row":342,"column":16},"end":{"row":342,"column":17},"action":"insert","lines":["d"]},{"start":{"row":342,"column":17},"end":{"row":342,"column":18},"action":"insert","lines":["e"]}],[{"start":{"row":368,"column":0},"end":{"row":371,"column":15},"action":"remove","lines":["        .on('pretransition', function(chart) {","            chart.selectAll('text.pie-slice').text(function(d) {","                return d.data.key + ' ' + Math.round(dc.utils.printSingleValue((d.endAngle - d.startAngle) / (2 * Math.PI) * 100)) + '%';","            });"],"id":4855},{"start":{"row":368,"column":0},"end":{"row":371,"column":15},"action":"insert","lines":["        .on('pretransition', function(chart) {","            chart.selectAll('text.pie-slice').text(function(d) {","                return show_pie_percentage(d.data.key, d.endAngle, d.startAngle);","            });"]}],[{"start":{"row":370,"column":30},"end":{"row":370,"column":31},"action":"remove","lines":["e"],"id":4856},{"start":{"row":370,"column":29},"end":{"row":370,"column":30},"action":"remove","lines":["i"]},{"start":{"row":370,"column":28},"end":{"row":370,"column":29},"action":"remove","lines":["p"]}],[{"start":{"row":370,"column":28},"end":{"row":370,"column":29},"action":"insert","lines":["m"],"id":4857},{"start":{"row":370,"column":29},"end":{"row":370,"column":30},"action":"insert","lines":["o"]},{"start":{"row":370,"column":30},"end":{"row":370,"column":31},"action":"insert","lines":["d"]},{"start":{"row":370,"column":31},"end":{"row":370,"column":32},"action":"insert","lines":["e"]}]]},"ace":{"folds":[],"scrolltop":5643,"scrollleft":0,"selection":{"start":{"row":370,"column":32},"end":{"row":370,"column":32},"isBackwards":false},"options":{"guessTabSize":true,"useWrapMode":false,"wrapToView":true},"firstLineState":{"row":351,"state":"start","mode":"ace/mode/javascript"}},"timestamp":1570971493513,"hash":"334711fc44933cd9bd8e1b408342182ec2748f35"}