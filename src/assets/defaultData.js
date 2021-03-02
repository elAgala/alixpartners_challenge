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
    situation: 'In process, really promising',
    approach: 'By LinkedIn',
    outcome: 'Almost successful',
    duration: 3,
    employees: ['Julia Pinnel', 'Adriana Maulini'],
    creator: users[0] 
  },
  {
    clientName: 'Roberto', 
    industry: 'Electronics', 
    situation: 'In process, really promising',
    approach: 'By LinkedIn',
    outcome: 'Almost successful',
    duration: 3,
    employees: ['Andrei Rukavina', 'Julian Benitez'],
    creator: users[0] 
  },
  {
    clientName: 'Manuel', 
    industry: 'Phisics', 
    situation: 'In process, really promising',
    approach: 'By LinkedIn',
    outcome: 'Almost successful',
    duration: 3,
    employees: ['Flavia Martinez'],
    creator: users[1] 
  },
  {
    clientName: 'Mariano', 
    industry: 'Teleco', 
    situation: 'In process, really promising',
    approach: 'By LinkedIn',
    outcome: 'Almost successful',
    duration: 3,
    employees: ['Flavia Martinez', 'Julia Pinnel'],
    creator: users[4] 
  },
  {
    clientName: 'Alfredo', 
    industry: 'Medics', 
    situation: 'In process, really promising',
    approach: 'By LinkedIn',
    outcome: 'Almost successful',
    duration: 3,
    employees: ['Andrei Rukavina', 'Julian Benitez', 'Julia Pinnel'],
    creator: users[4] 
  },
  {
    clientName: 'Marcela', 
    industry: 'Mechanics', 
    situation: 'In process, really promising',
    approach: 'By LinkedIn',
    outcome: 'Almost successful',
    duration: 3,
    employees: ['Adriana Maulini'],
    creator: users[4] 
  },
]

export { initialCases, employees, users } 
