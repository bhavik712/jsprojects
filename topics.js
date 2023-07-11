//created a grade calculator to show the use of following topics:-
//Functions(arguments), template strings, mathemetical & logical operator & scope of var

let print_grade = function(student_score, total_marks){
    percentage = (student_score / total_marks)*100
    let grade = calculate_grade(percentage)
    return `You have got Grade ${grade} & ${percentage}%`
}

let calculate_grade = function(percentage){
    let grade
    if(percentage >= 90){
        grade= 'A'
    }
    else if(percentage >= 80){
        grade='B'
    }
    else if(percentage >= 70){
        grade='C'
    }
    else if(percentage >= 60){
        grade='D'
    }
    else{
        grade='F'
    }
    
    return grade
}

let result = print_grade (10,20)
console.log(result)

//creating obj & reading & editing using a function
let person = {
    name: 'Rohit',
    age: 36,
    location: 'Mumbai'
}

let readobj = function(obj){
    console.log(`${obj.name} is ${obj.age} and lives in ${obj.location}`)

}
readobj(person)

let editobj = function(obj){
    person.age += 1

}
editobj(person)
readobj(person)

//returning object from function
let x = 10
let y = 50

let rect = function (l,b){
    return {
        length: l,
        width: b,
        circumference : 2*(l+b),
        area: l*b
    }
}

let rectObj = rect(x,y)
console.log(rectObj)
console.log(rectObj.length)