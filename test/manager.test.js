const Manager = require("../lib/manager");

test("name", () => {
    const name = "XXX";
    const e = new Manager(name);
    expect(e.name).toBe(name);
});

test("id", () => {
    const testValue = 123;
    const e = new Manager("XX", testValue);
    expect(e.id).toBe(testValue);
});

test("office", () => {
    const testValue = 1233;
    const e = new Manager("XX", 1, 2, testValue);
    expect(e.officeNumber).toBe(testValue);
});