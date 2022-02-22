Intern = require('../lib/Intern');

test('Tests the intern class', () => {
    const intern = new Intern('Pat', 'pat@erau.edu', 'Embry-Riddle');

    expect(intern.name).toBe('Pat');
    expect(intern.email).toBe('pat@erau.edu');
    expect(intern.school).toBe('Embry-Riddle');
})