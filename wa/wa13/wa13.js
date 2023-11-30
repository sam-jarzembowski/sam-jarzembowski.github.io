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
        },
        {
            "Name" : "Anna",
            "Department" : "Tech",
            "Designation" : "Executive",
            "Salary" : "25600",
            "Raise Eligible" : "false"
        }
    ]
};

console.log("Question 1:");
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

console.log("Question 2");
console.log(companyInfo);

// Q3
// see above
console.log("Question 3");
console.log(employeeInfo);

// Q4
const totalSalary = 0;
for (employees in employeeInfo) {
    totalSalary += int(employeeInfo[0]["Salary"]);
}
console.log(totalSalary);

// Q5
