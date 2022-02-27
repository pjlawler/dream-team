// Creates an html text for the card to be displayed on the webpage
const card = ((employee_data) => {
    let cust_data = null;
    let cust_label = null;

    switch (employee_data.getTitle()) {
        case "Manager":
            cust_data = employee_data.getNumber();
            cust_label = "Office Phone: ";
            break;
        case "Engineer":
            cust_data = `<a href="https://github.com/${employee_data.getGitHub()}">${employee_data.getGitHub()}</a></p>`
            cust_label = "GitHub: ";
            break;
        case "Intern":
            cust_data = employee_data.getSchool();
            cust_label = "School: ";
            break;
        default:
            cust_data = "N/A";
            cust_label = "Other: "
    }

    return `
    <div class="employee_card">
        <div class="card_title">
            <img src="./assets/imgs/${employee_data.getTitle().toLowerCase()}.svg" alt="">
            <div class="title_info">
                <h2>${employee_data.getName()}</h2>
                <h3>${employee_data.getTitle()}</h3>            
            </div>
        </div>
        <div class="employee_data">
            <p><span>Id: </span>${employee_data.id}</p>
            <p><span>email: </span><a href="mailto: ${employee_data.email}">${employee_data.email}</a></p>
            <p><span>${cust_label}</span>${cust_data}</p>
        </div>
    </div>
    `
}) 

// Creates the html text data to be inserted into the template to display the data collected through the CLI
const employee_cards = (data) => {
    
    let cards = "";

    data.forEach((employee) => {
        cards += card(employee);
    });

    return cards;
}

// Generates the index.html with the formated script for displaying the data
module.exports = function(data) {
    
return `
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="./assets/css/styles.css">
        <title>Dream-Team</title>
    </head>
    <body>
        <header><h1>The Dream Team</h1></header>
        <div id="card_container">
            ${employee_cards(data)}
        </div>
        <script src="./index.js"></script>
    </body>
</html> 
`
};
