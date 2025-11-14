<!-- create the employee table -->
CREATE TABLE employee (
    employee_id INT PRIMARY KEY,
    first_name VARCHAR(50),
    last_name VARCHAR(50),
    email VARCHAR(100) UNIQUE,
    hire_date DATE,
    job_title VARCHAR(100),
    salary DECIMAL(10, 2),
    department_id INT
);
<!--insert sample data into the employee table -->
INSERT INTO employee (employee_id, first_name, last_name, email, hire_date, job_title, salary, department_id) VALUES
(1, 'John', 'Doe', 'john.doe@example.com', '2020-01-15', 'Software Engineer', 75000.00, 1),
(2, 'Jane', 'Smith', 'jane.smith@example.com', '2019-03-22', 'Project Manager', 90000.00, 2),
(3, 'Emily', 'Johnson', 'emily.johnson@example.com', '2021-06-30', 'UX Designer', 80000.00, 1);
  

SELECT * FROM employee;