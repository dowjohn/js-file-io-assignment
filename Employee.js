'use strict'

const fs = require('fs')

class Employee {
  constructor (name, title, salary) {
    this.name = name
    this.title = title
    this.salary = salary
  }
  static parseFromFilePath (path) {
    return new Promise((resolve, reject) => {
      fs.readFile((path), (err, data) => {
        if (err) {
          reject(err)
        } else {
          resolve(JSON.parse(data))
        }
      })
    })
  }
  promote (title, salary) {
    this.title = title
    this.salary = salary
  }
}

module.exports = {
  Employee
}
