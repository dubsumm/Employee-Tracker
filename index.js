const mysql = require('mysql2');
const inquirer = require('inquirer');
const consoleTable = require('console.table');
const util = require('util');

let db = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: 'Willie14',
    database: 'employees_db'
});

db.query = util.promisify(db.query);

db.connect(function (err) {//connect to db and run mainmenu
    if (err) throw err;
    mainMenu();
})

// Query database joining department table and jobrole table
const mainMenu = async () => {
 try {
  let answer = await inquirer.prompt({
    
      type: 'list',
      message: 'What would you like to do?',
      name: 'choice',
      choices: [ 'View all Dpts.','View all Roles','View all Employees','Add a Dpt.','Add a Role','Add an Employee','Update Employee Role','Quit']
    });

    switch (answer.choice) {
      case 'View all Dpts.':
        dptView();
        break;
    
      case 'View all Roles':
        roleView();
        break;
      
      case 'View all Employees':
        empView();
        break;
      
      case 'Add a Dpt.':
        addDpt();
        break;
  }



  } catch(err) {
      console.log(err);
      mainMenu();
  };
}


const dptView = async () => {
  try {
    console.log('\n------------ All Departments ------------\n');
    let query = 'SELECT * FROM department';
    db.query(query, function(err,res) {
      if (err) throw err;
      let dptArray = [];
      res.forEach(dpt => {
        dptArray.push(dpt)
      });
      console.table(dptArray);
      mainMenu();
    });
  } catch(err) {
    console.log(err);
        mainMenu();
  };
}

const roleView = async () => {
  try {
    console.log('\n------------ All Roles ------------\n');
    let query = 'SELECT * FROM jobrole';
    db.query(query, function(err,res) {
      if (err) throw err;
      let roleArray = [];
      res.forEach(role => {
        roleArray.push(role)
      });
      console.table(roleArray);
      mainMenu();
    });
  } catch(err) {
    console.log(err);
        mainMenu();
  };
}

const empView = async () => {
  try {
    console.log('\n------------ All Employees ------------\n');
    let query = 'SELECT * FROM employee';
    db.query(query, function(err,res) {
      if (err) throw err;
      let empArray = [];
      res.forEach(emp => {
        empArray.push(emp)
      });
      console.table(empArray);
      mainMenu();
    });
  } catch(err) {
    console.log(err);
        mainMenu();
  };
}

const addDpt = async () => {
  try {
    console.log('\n------------ Add Department ------------\n');
    let answer = await inquirer.prompt({
      type: 'input',
      name: 'newDpt',
      message: 'What is the name of the new dpt.?',
    })
    // let format = answer.newDpt.toUpperCase() this doesnt work yet
    // console.log(format);
    await db.query('INSERT INTO department SET ?', {
      department_name: answer.newDpt
      })

      console.log(`\n${answer.newDpt} has been added to departments\n`);
      mainMenu();

  } catch(err) {
    console.log(err);
    mainMenu();
  };
}