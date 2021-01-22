/* Your Code Here */

/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */
 let createEmployeeRecord = function(employeeAry){
  let employee = {
    firstName: employeeAry[0],
    familyName: employeeAry[1],
    title: employeeAry[2],
    payPerHour: employeeAry[3],
    timeInEvents: [],
    timeOutEvents: []
  }

  return employee
}

let createEmployeeRecords = function(aryAry){
  let employeeRecords = aryAry.map(function (e){
    return createEmployeeRecord(e)
  })

  return employeeRecords
}

let createTimeInEvent = function(date){
  let timeInEvent = {
    type: "TimeIn",
    hour: parseInt(date.split(" ")[1]),
    date: date.split(" ")[0]
  }
  let employee = this
  employee.timeInEvents.push(timeInEvent)

  return employee
}

let createTimeOutEvent = function(date){
  let timeOutEvent = {
    type: "TimeOut",
    hour: parseInt(date.split(" ")[1]),
    date: date.split(" ")[0]
  }
  let employee = this
  employee.timeOutEvents.push(timeOutEvent)

  return employee
}

let hoursWorkedOnDate = function(date){
  let timeIn = this.timeInEvents.find(timeEvent => timeEvent.date === date).hour;
  let timeOut = this.timeOutEvents.find(timeEvent => timeEvent.date === date).hour;

  return (timeOut - timeIn)/100;
}

let wagesEarnedOnDate = function(date){
  return hoursWorkedOnDate.call(this, date) * this.payPerHour
}

let findEmployeeByFirstName = function(employeeRecords, firstNameString){
  return employeeRecords.find(employee => employee.firstName == firstNameString);
}

let calculatePayroll = function(employeeRecords){
  let payrole = employeeRecords.reduce(function (pay, employee) {
      return pay + allWagesFor.call(employee)
  }, 0)

  return payrole
}

