
const messageTicTac = require("./tictac");

describe("messageTicTac", () => {

    test("should print Error if argument is not a number", () => {

        const expected = "Ey, you should pass a number";
        const result = messageTicTac("25");

        expect(expected).toBe(result);
    });

    test("should print 1 if received 1", () => {

        const numberRecieved = 1;
        const result = messageTicTac(1);

        expect(numberRecieved).toBe(result);
    });

    test("should print tic if received 3", () => {

        const expected = "tic";
        const result = messageTicTac(3);

        expect(expected).toBe(result);
    });

    test("should print tic if received a multiple of 3", () => {

        const expected = "tic";
        const result = messageTicTac(6);

        expect(expected).toBe(result);
    });

    test("should print tac if received 5", () => {

        const expected = "tac";
        const result = messageTicTac(5);

        expect(expected).toBe(result);
    });

    test("should print tac if received a multiple of 5", () => {

        const expected = "tac";
        const result = messageTicTac(10);

        expect(expected).toBe(result);
    });

    test("should print tictac if received multiple of 3 and 5", () => {

        const expected = "tictac";
        const result = messageTicTac(15);

        expect(expected).toBe(result);
    });
});