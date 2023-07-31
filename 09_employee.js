const mysql = require('mysql2/promise');

// Database configuration
const dbConfig = {
  //host: 'your_mysql_host',
  user: 'root',
  password: '',
  database: 'employee',
};

// Function to connect to the database
async function connectToDatabase() {
  try {
    const connection = await mysql.createConnection(dbConfig);
    console.log('Connected to the database!');
    return connection;
  } catch (error) {
    throw error;
  }
}

// Function to insert a record into the employee table
async function insertEmployeeRecord(connection, employeeData) {
  try {
    const query = 'INSERT INTO Employeetb (Name, Age, Department, Salary) VALUES (?, ?, ?, ?)';
    const values = [employeeData.name, employeeData.age, employeeData.department, employeeData.salary];
    const [result] = await connection.execute(query, values);
    console.log(`New employee record with ID ${result.insertId} has been inserted.`);
  } catch (error) {
    throw error;
  }
}

// Function to display all records in the employee table
async function displayAllEmployeeRecords(connection) {
  try {
    const [rows] = await connection.execute('SELECT * FROM Employeetb');
    console.log('All employee records:');
    console.table(rows);
  } catch (error) {
    throw error;
  }
}

// Main function to execute the program
async function main() {
  try {
    const connection = await connectToDatabase();

    // Sample data for employee record insertion
    const newEmployeeData = {
      name: 'John Doe',
      age: 30,
      department: 'Engineering',
      salary: 50000,
    };

    await insertEmployeeRecord(connection, newEmployeeData);
    await displayAllEmployeeRecords(connection);

    // Close the connection after executing all queries
    connection.end();
  } catch (error) {
    console.error('Error:', error.message);
  }
}

// Start the program
main();
