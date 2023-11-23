import { describe, test, expect } from "vitest";
import { sum } from "@utilities/sum";

describe("Sum function", () => {
    test("Add 2 numbers and get correct result", () => {
        expect(sum(1, 4)).toEqual(5);
    });

    // test("Testing error of sum function", () => {

    // });
});
