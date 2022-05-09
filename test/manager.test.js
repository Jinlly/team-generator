// using Manager constructor 
const manager = require('../lib/manager');

// creating manager object  
test('creates an Manager object', () => {
    const manager = new Manager('Jinlly', 90, 'yiciluo2@gmail.com', 1080);

    expect(manager.officeNumber).toEqual(expect.any(Number));
});

// gets role from getRole()
test('gets role of employee', () => {
    const manager = new Manager('Jinlly', 90, 'yiciluo2@gmail.com', 1080);

    expect(manager.getRole()).toEqual("Manager");
});