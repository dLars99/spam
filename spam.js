import customers from "./customers.js"

const emailDatabase = customers.flatMap(customer => {
    return customer.contacts.email
})

console.log(emailDatabase)