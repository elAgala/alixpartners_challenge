const users = [
  {
    name: 'Julia Pinnel',
    email: 'julia@pinnel.com',
    password: '1234'
  },
  {
    name: 'Adriana Maulini',
    email: 'adriana@maulini.com',
    password: '1234'
  },
  {
    name: 'Andrei Rukavina',
    email: 'andrei@rukavina.com',
    password: '1234'
  },
  {
    name: 'Flavia Martinez',
    email: 'flavia@martinez.com',
    password: '1234'
  },
  {
    name: 'Julian Benitez',
    email: 'julian@benitez.com',
    password: '1234'
  },
]

const employees = [
  'Julia Pinnel',
  'Adriana Maulini',
  'Andrei Rukavina',
  'Flavia Martinez',
  'Julian Benitez'
]

const initialCases = [
  {
    clientName: 'Julian', 
    industry: 'Tech', 
    situation: 'Nice situation',
    approach: 'By LinkedIn',
    outcome: 'Almost successful',
    duration: 3,
    employees: ['Julia Pinnel', 'Adriana Maulini'],
    creator: users[0] 
  },
  {
    clientName: 'Robert', 
    industry: 'Electronics', 
    situation: 'Nice situation',
    approach: 'By LinkedIn',
    outcome: 'Bad result',
    duration: 3,
    employees: ['Andrei Rukavina', 'Julian Benitez'],
    creator: users[0] 
  },
  {
    clientName: 'John', 
    industry: 'Phisics', 
    situation: 'Ended with some problems',
    approach: 'By LinkedIn',
    outcome: 'Almost successful',
    duration: 2,
    employees: ['Flavia Martinez'],
    creator: users[1] 
  },
  {
    clientName: 'Tommy', 
    industry: 'Teleco', 
    situation: 'No problems at all',
    approach: 'By LinkedIn',
    outcome: 'Almost successful',
    duration: 9,
    employees: ['Flavia Martinez', 'Julia Pinnel'],
    creator: users[4] 
  },
  {
    clientName: 'Anna', 
    industry: 'Medics', 
    situation: 'No problems at all',
    approach: 'By LinkedIn',
    outcome: 'Almost successful',
    duration: 4,
    employees: ['Andrei Rukavina', 'Julian Benitez', 'Julia Pinnel'],
    creator: users[4] 
  },
  {
    clientName: 'Adele', 
    industry: 'Mechanics', 
    situation: 'Some problems',
    approach: 'By LinkedIn',
    outcome: 'Great result',
    duration: 7,
    employees: ['Adriana Maulini'],
    creator: users[4] 
  },
]

export { initialCases, employees, users } 
