const accountId = 144553
let accountEmail ="hitesh@gmail.com"
var accountPassword = "12345"
let accountState;

// accountId = 2  not allowed

accountEmail = "hc@hc"
accountPassword = "12321"

/*
prefer not to use var
because of issue in block scope and functional scope
*/

console.table([accountId, accountEmail, accountPassword, accountState]);