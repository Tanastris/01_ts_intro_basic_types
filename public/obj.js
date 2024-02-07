"use strict";
const user1 = {
    id: 1,
    name: 'James',
    isAdmin: true,
};
// user1.isAdmin = false
// user1.town = 'London' //negalima
const user2 = {
    id: 2,
    name: 'Jane',
    isAdmin: false,
};
function userinfo(userObj) {
    // userObj.name
    console.log('userObj.name ===', userObj.name);
    // userObj.name is admin
    // userObj.name is not admin
    console.log('userObj.isAdmin ===', userObj.isAdmin);
    console.log(`${userObj.name} is${userObj.isAdmin === true ? '' : ' NOT'} admin`);
}
userinfo(user1);
