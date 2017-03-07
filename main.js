'use strict'

const util = require('util')
const path = require('path')
const fs = require('fs')
const { Employee } = require('./Employee')

const employeePromise = new Promise(
  (resolve, reject) => {
    fs.readFile(path.resolve('./employee.json'), (err, data) => {
      if (err) {
        reject(err)
      } else {
        resolve(data)
      }
    })
  }
)

const employee = employeePromise.then((value) => {
  const someObj = JSON.parse(value)
  return new Employee(someObj.name, someObj.title, someObj.salary)
}).then((value) => {
  console.log(value)
  console.log(`is Employee? ${value instanceof Employee}`)
  console.log(`parsed: ${util.inspect(value)}`)
  value.promote('chief petty grunt', 10)
  console.log(`after promotion: ${util.inspect(value)}`)
})
