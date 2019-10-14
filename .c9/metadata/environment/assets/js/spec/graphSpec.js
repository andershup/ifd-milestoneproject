{"filter":false,"title":"graphSpec.js","tooltip":"/assets/js/spec/graphSpec.js","undoManager":{"mark":100,"position":100,"stack":[[{"start":{"row":9,"column":37},"end":{"row":9,"column":38},"action":"insert","lines":[" "],"id":110}],[{"start":{"row":9,"column":37},"end":{"row":9,"column":38},"action":"remove","lines":[" "],"id":111}],[{"start":{"row":9,"column":37},"end":{"row":9,"column":38},"action":"insert","lines":["B"],"id":112},{"start":{"row":9,"column":38},"end":{"row":9,"column":39},"action":"insert","lines":["e"]}],[{"start":{"row":9,"column":39},"end":{"row":9,"column":41},"action":"insert","lines":["()"],"id":113}],[{"start":{"row":9,"column":40},"end":{"row":9,"column":43},"action":"insert","lines":["\"C\""],"id":114}],[{"start":{"row":9,"column":44},"end":{"row":9,"column":45},"action":"insert","lines":[";"],"id":115}],[{"start":{"row":9,"column":45},"end":{"row":10,"column":0},"action":"insert","lines":["",""],"id":116},{"start":{"row":10,"column":0},"end":{"row":10,"column":11},"action":"insert","lines":["           "]}],[{"start":{"row":10,"column":11},"end":{"row":11,"column":0},"action":"insert","lines":["           expect(transformKey(0)).toBe(\"C\");",""],"id":117}],[{"start":{"row":10,"column":20},"end":{"row":10,"column":21},"action":"remove","lines":[" "],"id":118},{"start":{"row":10,"column":16},"end":{"row":10,"column":20},"action":"remove","lines":["    "]},{"start":{"row":10,"column":12},"end":{"row":10,"column":16},"action":"remove","lines":["    "]},{"start":{"row":10,"column":8},"end":{"row":10,"column":12},"action":"remove","lines":["    "]}],[{"start":{"row":10,"column":8},"end":{"row":10,"column":12},"action":"insert","lines":["    "],"id":119}],[{"start":{"row":10,"column":12},"end":{"row":10,"column":13},"action":"remove","lines":[" "],"id":120},{"start":{"row":10,"column":8},"end":{"row":10,"column":12},"action":"remove","lines":["    "]}],[{"start":{"row":6,"column":0},"end":{"row":6,"column":4},"action":"remove","lines":["    "],"id":121},{"start":{"row":7,"column":39},"end":{"row":7,"column":40},"action":"insert","lines":[" "]},{"start":{"row":8,"column":0},"end":{"row":8,"column":1},"action":"insert","lines":[" "]},{"start":{"row":8,"column":63},"end":{"row":8,"column":64},"action":"insert","lines":[" "]},{"start":{"row":9,"column":11},"end":{"row":9,"column":12},"action":"insert","lines":[" "]},{"start":{"row":10,"column":0},"end":{"row":10,"column":4},"action":"insert","lines":["    "]},{"start":{"row":12,"column":7},"end":{"row":12,"column":8},"action":"insert","lines":[" "]},{"start":{"row":12,"column":10},"end":{"row":12,"column":11},"action":"remove","lines":[" "]}],[{"start":{"row":10,"column":32},"end":{"row":10,"column":33},"action":"remove","lines":["0"],"id":122}],[{"start":{"row":10,"column":32},"end":{"row":10,"column":33},"action":"insert","lines":["1"],"id":123}],[{"start":{"row":10,"column":41},"end":{"row":10,"column":44},"action":"remove","lines":["\"C\""],"id":124},{"start":{"row":10,"column":41},"end":{"row":10,"column":48},"action":"insert","lines":["\"C♯/D♭\""]}],[{"start":{"row":10,"column":50},"end":{"row":11,"column":0},"action":"insert","lines":["",""],"id":125},{"start":{"row":11,"column":0},"end":{"row":11,"column":12},"action":"insert","lines":["            "]}],[{"start":{"row":11,"column":0},"end":{"row":12,"column":0},"action":"remove","lines":["            ",""],"id":127},{"start":{"row":11,"column":0},"end":{"row":12,"column":0},"action":"insert","lines":["            expect(transformKey(1)).toBe(\"C♯/D♭\");",""]}],[{"start":{"row":11,"column":50},"end":{"row":12,"column":0},"action":"remove","lines":["",""],"id":128}],[{"start":{"row":11,"column":32},"end":{"row":11,"column":33},"action":"remove","lines":["1"],"id":129}],[{"start":{"row":11,"column":32},"end":{"row":11,"column":33},"action":"insert","lines":["2"],"id":130}],[{"start":{"row":11,"column":42},"end":{"row":11,"column":48},"action":"remove","lines":["C♯/D♭\""],"id":131},{"start":{"row":11,"column":42},"end":{"row":11,"column":45},"action":"insert","lines":["\"D\""]}],[{"start":{"row":11,"column":41},"end":{"row":11,"column":43},"action":"remove","lines":["\"\""],"id":132}],[{"start":{"row":11,"column":41},"end":{"row":11,"column":42},"action":"insert","lines":["\""],"id":133}],[{"start":{"row":11,"column":46},"end":{"row":12,"column":0},"action":"insert","lines":["",""],"id":134},{"start":{"row":12,"column":0},"end":{"row":12,"column":12},"action":"insert","lines":["            "]}],[{"start":{"row":12,"column":8},"end":{"row":12,"column":12},"action":"remove","lines":["    "],"id":135},{"start":{"row":12,"column":4},"end":{"row":12,"column":8},"action":"remove","lines":["    "]},{"start":{"row":12,"column":0},"end":{"row":12,"column":4},"action":"remove","lines":["    "]},{"start":{"row":11,"column":46},"end":{"row":12,"column":0},"action":"remove","lines":["",""]}],[{"start":{"row":13,"column":7},"end":{"row":14,"column":0},"action":"insert","lines":["",""],"id":136},{"start":{"row":14,"column":0},"end":{"row":14,"column":4},"action":"insert","lines":["    "]}],[{"start":{"row":14,"column":4},"end":{"row":20,"column":7},"action":"insert","lines":["    describe(\"transformKey\", function() {","        it(\"converts number scale to musical scale\", function() {","            expect(transformKey(0)).toBe(\"C\");","            expect(transformKey(1)).toBe(\"C♯/D♭\");","            expect(transformKey(2)).toBe(\"D\");","        });","    });"],"id":137}],[{"start":{"row":14,"column":4},"end":{"row":14,"column":8},"action":"remove","lines":["    "],"id":138}],[{"start":{"row":14,"column":25},"end":{"row":14,"column":26},"action":"remove","lines":["y"],"id":139},{"start":{"row":14,"column":24},"end":{"row":14,"column":25},"action":"remove","lines":["e"]},{"start":{"row":14,"column":23},"end":{"row":14,"column":24},"action":"remove","lines":["K"]}],[{"start":{"row":14,"column":23},"end":{"row":14,"column":24},"action":"insert","lines":["M"],"id":140},{"start":{"row":14,"column":24},"end":{"row":14,"column":25},"action":"insert","lines":["o"]},{"start":{"row":14,"column":25},"end":{"row":14,"column":26},"action":"insert","lines":["d"]},{"start":{"row":14,"column":26},"end":{"row":14,"column":27},"action":"insert","lines":["e"]}],[{"start":{"row":15,"column":21},"end":{"row":15,"column":50},"action":"remove","lines":["number scale to musical scale"],"id":141},{"start":{"row":15,"column":21},"end":{"row":15,"column":61},"action":"insert","lines":["number scale for mode to Minor and Major"]}],[{"start":{"row":18,"column":0},"end":{"row":18,"column":46},"action":"remove","lines":["            expect(transformKey(2)).toBe(\"D\");"],"id":142},{"start":{"row":17,"column":50},"end":{"row":18,"column":0},"action":"remove","lines":["",""]}],[{"start":{"row":16,"column":30},"end":{"row":16,"column":31},"action":"remove","lines":["y"],"id":143},{"start":{"row":16,"column":29},"end":{"row":16,"column":30},"action":"remove","lines":["e"]},{"start":{"row":16,"column":28},"end":{"row":16,"column":29},"action":"remove","lines":["K"]}],[{"start":{"row":16,"column":28},"end":{"row":16,"column":29},"action":"insert","lines":["M"],"id":144},{"start":{"row":16,"column":29},"end":{"row":16,"column":30},"action":"insert","lines":["o"]},{"start":{"row":16,"column":30},"end":{"row":16,"column":31},"action":"insert","lines":["d"]},{"start":{"row":16,"column":31},"end":{"row":16,"column":32},"action":"insert","lines":["e"]}],[{"start":{"row":17,"column":30},"end":{"row":17,"column":31},"action":"remove","lines":["y"],"id":145},{"start":{"row":17,"column":29},"end":{"row":17,"column":30},"action":"remove","lines":["e"]},{"start":{"row":17,"column":28},"end":{"row":17,"column":29},"action":"remove","lines":["K"]}],[{"start":{"row":17,"column":28},"end":{"row":17,"column":29},"action":"insert","lines":["M"],"id":146},{"start":{"row":17,"column":29},"end":{"row":17,"column":30},"action":"insert","lines":["o"]},{"start":{"row":17,"column":30},"end":{"row":17,"column":31},"action":"insert","lines":["d"]},{"start":{"row":17,"column":31},"end":{"row":17,"column":32},"action":"insert","lines":["e"]}],[{"start":{"row":16,"column":42},"end":{"row":16,"column":45},"action":"remove","lines":["\"C\""],"id":147},{"start":{"row":16,"column":42},"end":{"row":16,"column":49},"action":"insert","lines":["\"Minor\""]}],[{"start":{"row":17,"column":43},"end":{"row":17,"column":46},"action":"remove","lines":["C♯/"],"id":148}],[{"start":{"row":17,"column":45},"end":{"row":17,"column":46},"action":"remove","lines":["\""],"id":149},{"start":{"row":17,"column":44},"end":{"row":17,"column":45},"action":"remove","lines":["♭"]},{"start":{"row":17,"column":43},"end":{"row":17,"column":44},"action":"remove","lines":["D"]},{"start":{"row":17,"column":42},"end":{"row":17,"column":43},"action":"remove","lines":["\""]}],[{"start":{"row":17,"column":42},"end":{"row":17,"column":49},"action":"insert","lines":["\"Major\""],"id":150}],[{"start":{"row":12,"column":11},"end":{"row":13,"column":0},"action":"insert","lines":["",""],"id":151},{"start":{"row":13,"column":0},"end":{"row":13,"column":8},"action":"insert","lines":["        "]},{"start":{"row":13,"column":8},"end":{"row":14,"column":0},"action":"insert","lines":["",""]},{"start":{"row":14,"column":0},"end":{"row":14,"column":8},"action":"insert","lines":["        "]}],[{"start":{"row":14,"column":8},"end":{"row":40,"column":18},"action":"insert","lines":["  case 3:","            keyString = \"D♯/E♭\";","            break;","        case 4:","            keyString = \"E\";","            break;","        case 5:","            keyString = \"F\";","            break;","        case 6:","            keyString = \"F♯/G♭\";","            break;","        case 7:","            keyString = \"G\";","            break;","        case 8:","            keyString = \"G♯/A♭\";","            break;","        case 9:","            keyString = \"A\";","            break;","        case 10:","            keyString = \"A♯/B♭\";","            break;","        case 11:","            keyString = \"B\";","            break;"],"id":152}],[{"start":{"row":11,"column":46},"end":{"row":12,"column":0},"action":"insert","lines":["",""],"id":153},{"start":{"row":12,"column":0},"end":{"row":12,"column":12},"action":"insert","lines":["            "]}],[{"start":{"row":12,"column":12},"end":{"row":13,"column":0},"action":"insert","lines":["            expect(transformKey(2)).toBe(\"D\");",""],"id":154}],[{"start":{"row":12,"column":44},"end":{"row":12,"column":45},"action":"remove","lines":["2"],"id":155}],[{"start":{"row":12,"column":44},"end":{"row":12,"column":45},"action":"insert","lines":["3"],"id":156}],[{"start":{"row":12,"column":53},"end":{"row":12,"column":56},"action":"remove","lines":["\"D\""],"id":157},{"start":{"row":12,"column":53},"end":{"row":12,"column":60},"action":"insert","lines":["\"D♯/E♭\""]}],[{"start":{"row":12,"column":12},"end":{"row":12,"column":24},"action":"remove","lines":["            "],"id":158},{"start":{"row":15,"column":0},"end":{"row":15,"column":8},"action":"remove","lines":["        "]},{"start":{"row":16,"column":0},"end":{"row":16,"column":2},"action":"remove","lines":["  "]}],[{"start":{"row":16,"column":2},"end":{"row":18,"column":18},"action":"remove","lines":["      case 3:","            keyString = \"D♯/E♭\";","            break;"],"id":159}],[{"start":{"row":17,"column":8},"end":{"row":17,"column":11},"action":"insert","lines":["// "],"id":160},{"start":{"row":18,"column":8},"end":{"row":18,"column":11},"action":"insert","lines":["// "]},{"start":{"row":19,"column":8},"end":{"row":19,"column":11},"action":"insert","lines":["// "]},{"start":{"row":20,"column":8},"end":{"row":20,"column":11},"action":"insert","lines":["// "]},{"start":{"row":21,"column":8},"end":{"row":21,"column":11},"action":"insert","lines":["// "]},{"start":{"row":22,"column":8},"end":{"row":22,"column":11},"action":"insert","lines":["// "]},{"start":{"row":23,"column":8},"end":{"row":23,"column":11},"action":"insert","lines":["// "]},{"start":{"row":24,"column":8},"end":{"row":24,"column":11},"action":"insert","lines":["// "]},{"start":{"row":25,"column":8},"end":{"row":25,"column":11},"action":"insert","lines":["// "]},{"start":{"row":26,"column":8},"end":{"row":26,"column":11},"action":"insert","lines":["// "]},{"start":{"row":27,"column":8},"end":{"row":27,"column":11},"action":"insert","lines":["// "]},{"start":{"row":28,"column":8},"end":{"row":28,"column":11},"action":"insert","lines":["// "]},{"start":{"row":29,"column":8},"end":{"row":29,"column":11},"action":"insert","lines":["// "]},{"start":{"row":30,"column":8},"end":{"row":30,"column":11},"action":"insert","lines":["// "]},{"start":{"row":31,"column":8},"end":{"row":31,"column":11},"action":"insert","lines":["// "]},{"start":{"row":32,"column":8},"end":{"row":32,"column":11},"action":"insert","lines":["// "]},{"start":{"row":33,"column":8},"end":{"row":33,"column":11},"action":"insert","lines":["// "]},{"start":{"row":34,"column":8},"end":{"row":34,"column":11},"action":"insert","lines":["// "]},{"start":{"row":35,"column":8},"end":{"row":35,"column":11},"action":"insert","lines":["// "]},{"start":{"row":36,"column":8},"end":{"row":36,"column":11},"action":"insert","lines":["// "]},{"start":{"row":37,"column":8},"end":{"row":37,"column":11},"action":"insert","lines":["// "]},{"start":{"row":38,"column":8},"end":{"row":38,"column":11},"action":"insert","lines":["// "]},{"start":{"row":39,"column":8},"end":{"row":39,"column":11},"action":"insert","lines":["// "]},{"start":{"row":40,"column":8},"end":{"row":40,"column":11},"action":"insert","lines":["// "]}],[{"start":{"row":16,"column":1},"end":{"row":16,"column":2},"action":"remove","lines":[" "],"id":161},{"start":{"row":16,"column":0},"end":{"row":16,"column":1},"action":"remove","lines":[" "]},{"start":{"row":15,"column":0},"end":{"row":16,"column":0},"action":"remove","lines":["",""]},{"start":{"row":14,"column":11},"end":{"row":15,"column":0},"action":"remove","lines":["",""]}],[{"start":{"row":13,"column":0},"end":{"row":14,"column":0},"action":"remove","lines":["",""],"id":162},{"start":{"row":13,"column":0},"end":{"row":14,"column":0},"action":"insert","lines":["            expect(transformKey(3)).toBe(\"D♯/E♭\");",""]}],[{"start":{"row":13,"column":32},"end":{"row":13,"column":33},"action":"remove","lines":["3"],"id":163}],[{"start":{"row":13,"column":32},"end":{"row":13,"column":33},"action":"insert","lines":["4"],"id":164}],[{"start":{"row":13,"column":42},"end":{"row":13,"column":47},"action":"remove","lines":["D♯/E♭"],"id":165},{"start":{"row":13,"column":42},"end":{"row":13,"column":43},"action":"insert","lines":["E"]}],[{"start":{"row":15,"column":0},"end":{"row":17,"column":21},"action":"remove","lines":["        // case 4:","        //     keyString = \"E\";","        //     break;"],"id":166}],[{"start":{"row":13,"column":46},"end":{"row":14,"column":0},"action":"insert","lines":["",""],"id":167},{"start":{"row":14,"column":0},"end":{"row":14,"column":12},"action":"insert","lines":["            "]}],[{"start":{"row":14,"column":12},"end":{"row":15,"column":0},"action":"insert","lines":["            expect(transformKey(3)).toBe(\"D♯/E♭\");",""],"id":168}],[{"start":{"row":14,"column":12},"end":{"row":14,"column":24},"action":"remove","lines":["            "],"id":169}],[{"start":{"row":14,"column":32},"end":{"row":14,"column":33},"action":"remove","lines":["3"],"id":170}],[{"start":{"row":14,"column":32},"end":{"row":14,"column":33},"action":"insert","lines":["5"],"id":171}],[{"start":{"row":14,"column":42},"end":{"row":14,"column":47},"action":"remove","lines":["D♯/E♭"],"id":172},{"start":{"row":14,"column":42},"end":{"row":14,"column":43},"action":"insert","lines":["F"]}],[{"start":{"row":17,"column":0},"end":{"row":20,"column":21},"action":"remove","lines":["","        // case 5:","        //     keyString = \"F\";","        //     break;"],"id":173}],[{"start":{"row":15,"column":0},"end":{"row":16,"column":0},"action":"remove","lines":["",""],"id":174},{"start":{"row":15,"column":0},"end":{"row":16,"column":0},"action":"insert","lines":["            expect(transformKey(3)).toBe(\"D♯/E♭\");",""]}],[{"start":{"row":15,"column":32},"end":{"row":15,"column":33},"action":"remove","lines":["3"],"id":175}],[{"start":{"row":15,"column":32},"end":{"row":15,"column":33},"action":"insert","lines":["6"],"id":176}],[{"start":{"row":15,"column":42},"end":{"row":15,"column":47},"action":"remove","lines":["D♯/E♭"],"id":177},{"start":{"row":15,"column":42},"end":{"row":15,"column":47},"action":"insert","lines":["F♯/G♭"]}],[{"start":{"row":18,"column":0},"end":{"row":20,"column":21},"action":"remove","lines":["        // case 6:","        //     keyString = \"F♯/G♭\";","        //     break;"],"id":178}],[{"start":{"row":15,"column":50},"end":{"row":16,"column":0},"action":"insert","lines":["",""],"id":179},{"start":{"row":16,"column":0},"end":{"row":16,"column":12},"action":"insert","lines":["            "]}],[{"start":{"row":16,"column":12},"end":{"row":17,"column":0},"action":"insert","lines":["            expect(transformKey(6)).toBe(\"F♯/G♭\");",""],"id":180}],[{"start":{"row":16,"column":12},"end":{"row":16,"column":24},"action":"remove","lines":["            "],"id":181}],[{"start":{"row":16,"column":32},"end":{"row":16,"column":33},"action":"remove","lines":["6"],"id":182}],[{"start":{"row":16,"column":32},"end":{"row":16,"column":33},"action":"insert","lines":["7"],"id":183}],[{"start":{"row":16,"column":42},"end":{"row":16,"column":47},"action":"remove","lines":["F♯/G♭"],"id":184},{"start":{"row":16,"column":42},"end":{"row":16,"column":43},"action":"insert","lines":["G"]}],[{"start":{"row":16,"column":46},"end":{"row":17,"column":0},"action":"insert","lines":["",""],"id":185},{"start":{"row":17,"column":0},"end":{"row":17,"column":12},"action":"insert","lines":["            "]}],[{"start":{"row":17,"column":12},"end":{"row":18,"column":0},"action":"insert","lines":["            expect(transformKey(6)).toBe(\"F♯/G♭\");",""],"id":186}],[{"start":{"row":17,"column":12},"end":{"row":17,"column":24},"action":"remove","lines":["            "],"id":187}],[{"start":{"row":17,"column":32},"end":{"row":17,"column":33},"action":"remove","lines":["6"],"id":188}],[{"start":{"row":17,"column":32},"end":{"row":17,"column":33},"action":"insert","lines":["8"],"id":189}],[{"start":{"row":21,"column":0},"end":{"row":25,"column":21},"action":"remove","lines":["","","        // case 7:","        //     keyString = \"G\";","        //     break;"],"id":190}],[{"start":{"row":17,"column":42},"end":{"row":17,"column":47},"action":"remove","lines":["F♯/G♭"],"id":191},{"start":{"row":17,"column":42},"end":{"row":17,"column":47},"action":"insert","lines":["G♯/A♭"]}],[{"start":{"row":17,"column":50},"end":{"row":18,"column":0},"action":"insert","lines":["",""],"id":192},{"start":{"row":18,"column":0},"end":{"row":18,"column":12},"action":"insert","lines":["            "]}],[{"start":{"row":18,"column":0},"end":{"row":19,"column":0},"action":"remove","lines":["            ",""],"id":193},{"start":{"row":18,"column":0},"end":{"row":19,"column":0},"action":"insert","lines":["            expect(transformKey(8)).toBe(\"G♯/A♭\");",""]}],[{"start":{"row":18,"column":32},"end":{"row":18,"column":33},"action":"remove","lines":["8"],"id":194}],[{"start":{"row":18,"column":32},"end":{"row":18,"column":33},"action":"insert","lines":["9"],"id":195}],[{"start":{"row":18,"column":42},"end":{"row":18,"column":47},"action":"remove","lines":["G♯/A♭"],"id":196},{"start":{"row":18,"column":42},"end":{"row":18,"column":43},"action":"insert","lines":["A"]}],[{"start":{"row":19,"column":0},"end":{"row":20,"column":0},"action":"remove","lines":["",""],"id":197},{"start":{"row":19,"column":0},"end":{"row":20,"column":0},"action":"insert","lines":["            expect(transformKey(8)).toBe(\"G♯/A♭\");",""]}],[{"start":{"row":19,"column":32},"end":{"row":19,"column":33},"action":"remove","lines":["8"],"id":198}],[{"start":{"row":19,"column":32},"end":{"row":19,"column":33},"action":"insert","lines":["1"],"id":199},{"start":{"row":19,"column":33},"end":{"row":19,"column":34},"action":"insert","lines":["0"]}],[{"start":{"row":20,"column":0},"end":{"row":21,"column":0},"action":"remove","lines":["",""],"id":200},{"start":{"row":20,"column":0},"end":{"row":21,"column":0},"action":"insert","lines":["            expect(transformKey(8)).toBe(\"G♯/A♭\");",""]}],[{"start":{"row":20,"column":32},"end":{"row":20,"column":33},"action":"remove","lines":["8"],"id":201},{"start":{"row":20,"column":31},"end":{"row":20,"column":33},"action":"remove","lines":["()"]}],[{"start":{"row":20,"column":31},"end":{"row":20,"column":32},"action":"insert","lines":["1"],"id":202},{"start":{"row":20,"column":32},"end":{"row":20,"column":33},"action":"insert","lines":["1"]}],[{"start":{"row":20,"column":32},"end":{"row":20,"column":33},"action":"remove","lines":["1"],"id":203},{"start":{"row":20,"column":31},"end":{"row":20,"column":32},"action":"remove","lines":["1"]}],[{"start":{"row":20,"column":31},"end":{"row":20,"column":33},"action":"insert","lines":["()"],"id":204}],[{"start":{"row":20,"column":32},"end":{"row":20,"column":33},"action":"insert","lines":["1"],"id":205},{"start":{"row":20,"column":33},"end":{"row":20,"column":34},"action":"insert","lines":["1"]}],[{"start":{"row":23,"column":1},"end":{"row":28,"column":21},"action":"remove","lines":["       // case 8:","        //     keyString = \"G♯/A♭\";","        //     break;","        // case 9:","        //     keyString = \"A\";","        //     break;"],"id":206}],[{"start":{"row":19,"column":43},"end":{"row":19,"column":48},"action":"remove","lines":["G♯/A♭"],"id":207},{"start":{"row":19,"column":43},"end":{"row":19,"column":48},"action":"insert","lines":["A♯/B♭"]}],[{"start":{"row":20,"column":47},"end":{"row":20,"column":48},"action":"remove","lines":["♭"],"id":208},{"start":{"row":20,"column":46},"end":{"row":20,"column":47},"action":"remove","lines":["A"]},{"start":{"row":20,"column":45},"end":{"row":20,"column":46},"action":"remove","lines":["/"]},{"start":{"row":20,"column":44},"end":{"row":20,"column":45},"action":"remove","lines":["♯"]},{"start":{"row":20,"column":43},"end":{"row":20,"column":44},"action":"remove","lines":["G"]}],[{"start":{"row":20,"column":43},"end":{"row":20,"column":44},"action":"insert","lines":["B"],"id":209}],[{"start":{"row":23,"column":0},"end":{"row":23,"column":1},"action":"remove","lines":[" "],"id":210}],[{"start":{"row":23,"column":0},"end":{"row":29,"column":21},"action":"remove","lines":["","        // case 10:","        //     keyString = \"A♯/B♭\";","        //     break;","        // case 11:","        //     keyString = \"B\";","        //     break;"],"id":211},{"start":{"row":22,"column":0},"end":{"row":23,"column":0},"action":"remove","lines":["",""]},{"start":{"row":21,"column":11},"end":{"row":22,"column":0},"action":"remove","lines":["",""]}]]},"ace":{"folds":[],"scrolltop":0,"scrollleft":0,"selection":{"start":{"row":21,"column":11},"end":{"row":21,"column":11},"isBackwards":false},"options":{"guessTabSize":true,"useWrapMode":false,"wrapToView":true},"firstLineState":0},"timestamp":1571083953768,"hash":"37260d6705bb1efe2e22c357bb76040f3b1f830e"}