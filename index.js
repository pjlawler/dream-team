const inquirer = require('inquirer');
const html_template = require('./lib/HtmlTemplate');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const { writeFile } = require('./lib/write_html');

// Uses the command line to input the manager's information and insert into the array to be formatted for the webpage writer
const prompt_manager = () => {
    
    console.log(
    `
    ======================
    = Enter the Manger   =
    = of the Dream Team. =
    ======================
    `);

    // Collects teh data from command line inquiries and then returns an object with that data to be used in the chained .then funciton below
    return inquirer.prompt([{
        name: 'name',
        message: "What is the team manager's name?",
        validate: nameInput => {
            if(nameInput) { return true; }
            console.log('Please enter a name for the mangager.')
        }
    },
    {
        name: 'id',
        message: "What is the team manager's ID number?",
        default: 000
    },
    {
        name: 'email',
        message: "What is the team manager's email?",
        validate: emailInput => {
            if(emailInput) { return true; }
            console.log('Please enter a valid email');
        }
    },
    {
        name: 'office_number',
        message: "What is the team manager's office number?",
        default: '(000)000-0000'
    }])
    .then(data => {
        // Returns a new instance of the manager class with the collected data
        return [new Manager( data.name, data.email, data.id, data.office_number)];
    })
};

// Uses the command line to input to add engineers and interns and insert it into the array to be formatted for the webpage writer
const prompt_members = (team_members) => {

    console.log(
    `
    ==========================
    = Enter the team members =
    = of the Dream Team.     =
    ==========================
    `);

    return inquirer.prompt([
        {
            type: 'list',
            name: 'choice',
            message: 'Would you like to add an Engineer or Intern?',
            choices: ['Engineer', 'Intern', "I'm done adding members"],
            default: 0
        }
    ]).then(data => {
        return inquirer.prompt([
            {
                name: 'name',
                message: `What is the ${data.choice}'s name?`,
                validate: inputName => {
                    if (inputName) { return true; }
                    console.log(`Please enter a name for the the ${data.choice}.`)
                },
                when: () => data.choice === "Engineer" || data.choice === "Intern"
            },
            {
                name: 'id',
                message: `What is the ${data.choice}'s ID number?`,
                default: 000,
                when: () => data.choice === "Engineer" || data.choice === "Intern"
            },
            {
                name: 'email',
                message: `What is the ${data.choice}'s email?`,
                validate: emailInput => {
                    if (emailInput) { return true; }
                    console.log(`Please enter a name for the ${data.choice}.`)
                },
                when: () => data.choice === "Engineer" || data.choice === "Intern"
            },
            {
                name: 'github',
                message: "What is the Engineer's github id?",
                validate: githubInput => {
                    if(githubInput) { return true; }
                    console.log(`Please enter a github id for the Engineer`)
                },
                when: () => data.choice === "Engineer"
            },
            {
                name: 'school',
                message: "What is the Intern's school name?",
                validate: schoolInput => {
                    if(schoolInput) { return true; }
                    console.log(`Please enter a school name for the Intern`)
                },
                when: () => data.choice === "Intern"
            }])
        })
        .then (employee => {

            if(!employee.name) {
                return team_members;
            } else if(employee.github) {
                team_members.push(new Engineer(employee.name, employee.email, employee.id, employee.github));
            } else {
                team_members.push(new Intern(employee.name, employee.email, employee.id, employee.school));
            }
            return prompt_members(team_members)
        })
};

// The initialization commands to start the the CLI to get the needed information
function init() {
    // Gets the manager data which is retrurned in an array 
    prompt_manager()

    // Gets the remaining team members information which is returned in the same array
    .then(prompt_members)

    // Passes the array with the team memember information to be inserted into the html_template to create an html text string 
    .then(html_template)

    //Writes the html text string to a file named index.html into the dist folder
    .then(html_text => writeFile(html_text));    
};

init();



