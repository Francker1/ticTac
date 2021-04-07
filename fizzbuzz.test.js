//import { fizzbuzz } from "./fizzbuzz";
const fizzbuzz = require("./fizzbuzz");

describe("fizzbuzz", () => {


    test("should print 1 if received 1", () => {

        const numberRecieved = 1;
        const result = fizzbuzz(1);

        expect(numberRecieved).toBe(result);
    });

    test("should print fizz if received 3", () => {

        const expected = "fizz";
        const result = fizzbuzz(3);

        expect(expected).toBe(result);
    });

    test("should print fizz if received a multiple of 3", () => {

        const expected = "fizz";
        const result = fizzbuzz(6);

        expect(expected).toBe(result);
    });

    test("should print buzz if received 5", () => {

        const expected = "buzz";
        const result = fizzbuzz(5);

        expect(expected).toBe(result);
    });

    test("should print buzz if received a multiple of 5", () => {

        const expected = "buzz";
        const result = fizzbuzz(10);

        expect(expected).toBe(result);
    });

    test("should print fizzbuzz if received multiple of 3 and 5", () => {

        const expected = "fizzbuzz";
        const result = fizzbuzz(15);

        expect(expected).toBe(result);
    });
});