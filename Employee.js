'use strict'

const fs = require('fs')

class Employee {
  constructor (name, title, salary) {
    this.name = name
    this.title = title
    this.salary = salary
  }
  static parseFromFilePath (path) {
    let parsedObj = JSON.parse(fs.readFileSync(path, (err, data) => {
      if (err) {
        console.error(err)
      }
    }))
    return new Employee(parsedObj.name, parsedObj.title, parsedObj.salary)
  }
  promote (title, salary) {
    this.title = title
    this.salary = salary
  }
}

module.exports = {
  Employee
}
