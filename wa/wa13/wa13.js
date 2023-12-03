// Q1
const employeeInfo = {
    "employees" : [
        {
            "Name" : "Sam",
            "Department" : "Tech",
            "Designation" : "Manager",
            "Salary" : "40000",
            "Raise Eligible" : "true"
        },
        {
            "Name" : "Mary",
            "Department" : "Finance",
            "Designation" : "Trainee",
            "Salary" : "18500",
            "Raise Eligible" : "true"
        },
        {
            "Name" : "Bill",
            "Department" : "HR",
            "Designation" : "Executive",
            "Salary" : "21200",
            "Raise Eligible" : "false"
        }
    ]
};

console.log("*** Question 1 ***");
console.log(employeeInfo);

// Q2
const companyInfo = {
    "company" : [
        {
            "CompanyName" : "Tech Stars",
            "Website" : "www.techstars.site",
            "Employees" : employeeInfo
        }
    ]
};

console.log("*** Question 2 ***");
console.log(companyInfo);

// Q3
employeeInfo.employees.push(
    {
        "Name" : "Anna",
        "Department" : "Tech",
        "Designation" : "Executive",
        "Salary" : "25600",
        "Raise Eligible" : "false"
    }
);
console.log("*** Question 3 ***");
console.log(employeeInfo);

// Q4
let totalSalary = 0;
for (employee in employeeInfo.employees) {
    totalSalary += parseInt(employee.Salary);
}
console.log("*** Question 4 ***");
console.log('Total salary: $',totalSalary);

// Q5
for (employee in employeeInfo.employees) {
    if (employee["Raise Eligible"] === "true") {
        employee.Salary = employee.Salary * 1.1;
        employee["Raise Eligible"] = "false";
    }
}
console.log("*** Question 5 ***");
console.log(employeeInfo);

// Q6
const wfh_employees = ["Anna", "Sam"];
for (employee in employeeInfo.employees) {
    if (wfh_employees.includes(employee["Name"])) {
        employee.wfh = "true";
    }
    else {
        employee.wfh = "false";
    }
}
console.log("*** Question 6 ***");
console.log(employeeInfo);