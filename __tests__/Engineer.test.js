Engineer = require('../lib/Engineer');

test('Tests the creation of the Engineer class', () => {
    
    const engineer = new Engineer('Patrick Lawler', 'pat@hotmail.com', '101', 'pjlawler');
    expect(engineer.getTitle()).toBe('Engineer');
    expect(engineer.getName()).toBe('Patrick Lawler');
    expect(engineer.getEmail()).toBe('pat@hotmail.com');
    expect(engineer.getId()).toBe('101');
    expect(engineer.getGitHub()).toBe('pjlawler');
});



