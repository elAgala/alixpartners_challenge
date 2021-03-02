export class Case {
  
  constructor(aCase = {
    clientName,
    industry,
    duration,
    situation,
    approach,
    outcome,
    employees,
    creator
  }, id){
    Object.assign(this, {...aCase, id})
  }

  isTheCreator(aUserMail){
    return aUserMail == this.creator.email
  }

  get employeesText() {
    const morePeopleString = `${this.employees[0]} and ${this.employees.length - 1} more` 
    return this.employees.length > 1 ? morePeopleString : `${this.employees[0]}`
  }

  get searchText() {
    return `${this.clientName} - ${this.industry}`
  }

  get durationText(){
    return `${this.duration} week(s)`
  }
}
