Engineer = require('../lib/Engineer');

test('Tests the creation of the Engineer class', () => {
    const engineer = new Engineer('Patrick Lawler', 'pat@hotmail.com', 'pjlawler');

    expect(engineer.name).toBe('Patrick Lawler');
    expect(engineer.email).toBe('pat@hotmail.com');
    expect(engineer.github).toBe('pjlawler');
});



