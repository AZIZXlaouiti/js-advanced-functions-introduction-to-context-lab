// Your code here

function createEmployeeRecord(array){
    return {
        firstName : array[0],
        familyName : array[1],
        title : array[2],
        payPerHour : array[3],
        timeInEvents: [],
        timeOutEvents: []
    }
}
function createEmployeeRecords(array){
    return records=[
        createEmployeeRecord(array[0]),
        createEmployeeRecord(array[1])
    ]
}
// let test1 = createEmployeeRecords([
//     ["moe", "sizlak", "barkeep", 2],
//     ["bartholomew", "simpson", "scamp", 3]
//   ])