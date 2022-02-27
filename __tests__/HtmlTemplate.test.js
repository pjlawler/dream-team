const html_template = require('../lib/HtmlTemplate')
const Manager = require('../lib/Manager');
const Engineer = require('../lib/Engineer');
const Intern = require('../lib/Intern');

const mock_data = [ 
    new Manager('John Doe', 'johndoe@gmail.com', '100','218-213-3456'),
    new Engineer('Steve Austin','steveaustin@icloud.com', '101','saustin'),
    new Engineer('Isaac Asminov', 'isaac@hotmail.com', '102', 'isaaca'),
    new Engineer('Lena Horn', 'lhorn@yahoo.com','103','lhorn'),
    new Intern('Skippy Stevenson', 'sstevenson@erau.edu', '901', 'Embry-Riddle'),
    new Intern('Johnny Cash', 'jcash@me.com', '902','Hard Knocks U')
];

test('Checks to make sure the html file is created', () => {
    expect(html_template(mock_data)).toEqual(expect.stringContaining('<h3>Manager</h3>'));
    expect(html_template(mock_data)).toEqual(expect.stringContaining('<h3>Engineer</h3>'));
    expect(html_template(mock_data)).toEqual(expect.stringContaining('<h3>Intern</h3>'));
    expect(html_template(mock_data)).toEqual(expect.stringContaining('<h2>Johnny Cash</h2>'));
    expect(html_template(mock_data)).toEqual(expect.stringContaining('<p><span>Id: </span>102</p>'));
    expect(html_template(mock_data)).toEqual(expect.stringContaining('<a href="https://github.com/saustin" target="_blank">saustin</a></p>'));
    expect(html_template(mock_data)).toEqual(expect.stringContaining('<p><span>email: </span><a href="mailto: johndoe@gmail.com">johndoe@gmail.com</a></p>'));
    expect(html_template(mock_data)).toEqual(expect.stringContaining('<p><span>Office Phone: </span>218-213-3456</p>'));
    expect(html_template(mock_data)).toEqual(expect.stringContaining('<p><span>School: </span>Embry-Riddle</p>'));
});
