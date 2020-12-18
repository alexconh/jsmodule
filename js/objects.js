let users = [
    { firstName: 'Bradley', lastName: 'Bouley', role: 'Full Stack Resident'},
    { firstName: 'Chloe', lastName: 'Alnaji', role: 'Full Stack Resident' },
    { firstName: 'Jonathan', lastName: 'Baughn', role: 'Enterprise Instructor'},
    { firstName: 'Michael', lastName: 'Herman', role: 'Lead Instructor'},
    { firstName: 'Robert', lastName: 'Hajek', role: 'Full Stack Resident'},
    { firstName: 'Wes', lastName: 'Reid', role: 'Instructor'},
    { firstName: 'Zach', lastName: 'Klabunde', role: 'Instructor'}
]

let list = users.reduce((acc, user)=>{
    let fullname = user.firstName + ' ' + user.lastName
    acc[fullname] = user.role
    return acc
},{})

console.log (list)

const roleFilter = (arr,role) => {
    return arr.filter(user => user.role === role)
}

console.log(roleFilter(users, 'Instructor'))

let persons = [
    {name:'Bob' , age: 30, voted: true},
    {name:'Jake' , age: 32, voted: true},
    {name:'Kate' , age: 25, voted: false},
    {name:'Sam' , age: 20, voted: false},
    {name:'Phil' , age: 21, voted: true},
    {name:'Ed' , age:55, voted:true},
    {name:'Tami' , age: 54, voted:true},
    {name: 'Mary', age: 31, voted: false},
    {name: 'Becky', age: 43, voted: false},
    {name: 'Joey', age: 41, voted: true},
    {name: 'Jeff', age: 30, voted: true},
    {name: 'Zack', age: 19, voted: false}
]

let votants = persons.reduce ((acc, person) => 
person.voted === true ? acc +1 : acc, 0)

let ageVotants = persons.reduce((acc, person) => 
person.voted === true ? acc + person.age : acc, 0)/votants

console.log(`Hubo ${votants} votantes y el promedio de edad es ${ageVotants}`)