const Employee = require('../lib/Employee');

test('Test to make sure there is data', () => {
    
    const employee = new Employee('Patrick', "patlaw777@icloud.com");

    expect(employee.name).toBe("Patrick");
    expect(employee.email).toBe("patlaw777@icloud.com")

})