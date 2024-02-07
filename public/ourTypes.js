const user1 = {
    id: 1,
    name: 'James',
    isAdmin: true,
};
const user2 = {
    id: 2,
    name: "Petras",
    isAdmin: true,
};
const usersArr = [];
function userinfo(userObj) {
    // userObj.name
    console.log('userObj.name ===', userObj.name);
    // userObj.name is admin
    // userObj.name is not admin
    console.log('userObj.isAdmin ===', userObj.isAdmin);
    console.log(`${userObj.name} is${userObj.isAdmin === true ? '' : ' NOT'} admin`);
}
export {};
