const Engineer = require("../lib/engineer");

test("name", () => {
    const name = "XXX";
    const e = new Engineer(name);
    expect(e.name).toBe(name);
});

test("id", () => {
    const testValue = 123;
    const e = new Engineer("XX", testValue);
    expect(e.id).toBe(testValue);
});

test("github", () => {
    const testValue = "GitHubUser";
    const e = new Engineer("XX", 1, "test@test.com", testValue);
    expect(e.github).toBe(testValue);
});
