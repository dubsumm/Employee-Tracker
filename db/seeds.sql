INSERT INTO department (department_name)
VALUES  ('ENGINEERING'),
        ('FINANCE'),
        ('LEGAL'),
        ('SALES');

INSERT INTO jobrole (title, salary, department_id)
VALUES  ('SALES LEAD', 100000, 4),
        ('SALESPERSON', 80000, 4),
        ('LEAD ENGINEER', 150000, 1),
        ('SOFTWARE ENGINEER', 120000, 1),
        ('ACCOUNT MANAGER', 160000, 2),
        ('ACCOUNTANT', 125000, 2),
        ('LEGAL TEAM LEAD', 250000, 3),
        ('LAWYER', 190000, 3);

INSERT INTO employee (first_name, last_name, manager_id, role_id)
VALUES  ('WILL', 'SUMMERLIN', null, 1),
        ('HUNTER', 'PADGETT', 1, 2),
        ('JUNGHOON', 'YOON', 1, 1),
        ('TEAGRIN', 'FORDE', null, 4),
        ('CAT', 'CUETO', 4, 3),
        ('PAULO', 'PINEDO', 4, 2);

Select * FROM department;
Select * FROM jobrole;
Select * FROM employee;


