const Intern = require("../lib/intern");

test("name", () => {
    const name = "XXX";
    const e = new Intern(name);
    expect(e.name).toBe(name);
});

test("id", () => {
    const testValue = 123;
    const e = new Intern("XX", testValue);
    expect(e.id).toBe(testValue);
});

test("email", () => {
    const testValue = "123@test.com";
    const e = new Intern("XX", 1, testValue);
    expect(e.email).toBe(testValue);
});

test("school", () => {
    const testValue = "Western";
    const e = new Intern("XX", 1, "123@test.com", testValue);
    expect(e.school).toBe(testValue);
});