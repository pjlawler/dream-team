Intern = require('../dist/lib/Intern');

test('Tests the intern class', () => {
    const intern = new Intern('Pat', 'pat@erau.edu', '101', 'Embry-Riddle');
    
    expect(intern.getRole()).toBe('Intern');
    expect(intern.getName()).toBe('Pat');
    expect(intern.getEmail()).toBe('pat@erau.edu');
    expect(intern.getId()).toBe('101');
    expect(intern.getSchool()).toBe('Embry-Riddle');
})