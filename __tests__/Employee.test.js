const Employee = require('../lib/Employee');

test('Test to make sure there is data', () => {
    
    const employee = new Employee('Patrick', "patlaw777@icloud.com", '3');
    
    expect(employee.getRole()).toBe('Employee');
    expect(employee.getName()).toBe("Patrick");
    expect(employee.getEmail()).toBe("patlaw777@icloud.com")
    expect(employee.getId()).toBe("3")
})