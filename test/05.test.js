const {cyberReindeer} = require("../ejercicios/05");

describe("ciberReindeer",() =>{
    test("road adventJS", () => {
        expect(cyberReindeer("S..|...|..",10)).toStrictEqual([
            'S..|...|..', // estado inicial
            '.S.|...|..', // avanza el trineo la carretera
            '..S|...|..', // avanza el trineo la carretera
            '..S|...|..', // el trineo para en la barrera
            '..S|...|..', // el trineo para en la barrera
            '...S...*..', // se abre la barrera, el trineo avanza
            '...*S..*..', // avanza el trineo la carretera
            '...*.S.*..', // avanza el trineo la carretera
            '...*..S*..', // avanza el trineo la carretera
            '...*...S..', // avanza por la barrera abierta
          ])
    });
    test("test Ivette", () => {
        expect(cyberReindeer('S.|.|.|......|.||.........', 8)).toStrictEqual([
            "S.|.|.|......|.||.........",
            ".S|.|.|......|.||.........",
            ".S|.|.|......|.||.........",
            ".S|.|.|......|.||.........",
            ".S|.|.|......|.||.........",
            "..S.*.*......*.**.........",
            "..*S*.*......*.**.........",
            "..*.S.*......*.**........."
          ])
    })
})