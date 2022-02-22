Manager = require('../lib/Manager');

test('Tests the to make sure the manager data is working', () => {
    const manager = new Manager('Josh Arnold', 'ja@icloud.com', '218-213-3456');

    expect(manager.name).toBe('Josh Arnold');
    expect(manager.email).toBe('ja@icloud.com');
    expect(manager.office_number).toBe('218-213-3456');
});