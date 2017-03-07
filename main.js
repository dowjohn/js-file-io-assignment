'use strict'

const util = require('util')
const path = require('path')
const { Employee } = require('./Employee')

const employeePromised = new Promise(
  (resolve, reject) => {
    Employee
    .parseFromFilePath(
        path.resolve('./employee.json')
    ).then((value) => {
      const employee = new Employee(value.name, value.title, value.salary)
      console.log(`is Employee? ${employee instanceof Employee}`)
      console.log(`parsed: ${util.inspect(employee)}`)
      employee.promote('chief petty grunt', 10)
      console.log(`after promotion: ${util.inspect(employee)}`)
    })
  })
