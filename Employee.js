'use strict'

const fs = require('fs')

class Employee {
  constructor (name, title, salary) {
    this.name = name
    this.title = title
    this.salary = salary
  }
  promote (title, salary) {
    this.title = title
    this.salary = salary
  }
}

module.exports = {
  Employee
}
