const Employee = require("../lib/employee");

test("name", () => {
    const name = "XXX";
    const e = new Employee(name);
    expect(e.name).toBe(name);
});

test("id", () => {
    const testValue = 123;
    const e = new Employee("XX", testValue);
    expect(e.id).toBe(testValue);
});

test("email", () => {
    const testValue = "123@test.com";
    const e = new Employee("XX", 1, testValue);
    expect(e.email).toBe(testValue);
});


