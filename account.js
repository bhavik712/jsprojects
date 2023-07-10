//creating a tracker program to track the details of an account
//an account object will be interacted using different functions 
let myaccount = {
    name: 'Bhavik',
    income: 0,
    expense: 0
}

let addIncome= function(account,amount){
    account.income = account.income + amount
    console.log(`Total income = ${account.income}`)
}

let addExpense = function(account,amount){
    account.expense = account.expense + amount
    console.log(`Total Expense = ${account.expense}`)
}

let resetAccount = function(account){
    account.income =0
    account.expense =0
}

let getsummary = function(account){
    let name = account.name
    let total_income = account.income
    let total_expense = account.expense
    let current_balance = total_income - total_expense

    console.log(`this is account of ${name}. Current balance = ${current_balance}. Total income = ${total_income}. Total expence = ${total_expense} `)
}

getsummary(myaccount)
addIncome(myaccount,1000)
addExpense(myaccount,200)
getsummary(myaccount)
resetAccount(myaccount)
getsummary(myaccount)