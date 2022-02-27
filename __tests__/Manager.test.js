Manager = require('../lib/Manager');

test('Tests the to make sure the manager data is working', () => {
    const manager = new Manager('Josh Arnold', 'ja@icloud.com', '101a', '218-213-3456');

    expect(manager.getRole()).toBe('Manager');
    expect(manager.getName()).toBe('Josh Arnold');
    expect(manager.getEmail()).toBe('ja@icloud.com');
    expect(manager.getId()).toBe('101a');
    expect(manager.getNumber()).toBe('218-213-3456');
});