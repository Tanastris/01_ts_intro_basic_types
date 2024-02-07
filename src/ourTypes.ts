
type User = {
  id: number;
  name: string;
  isAdmin: boolean;
}

const user1: User = {
  id: 1,
  name: 'James',
  isAdmin: true,
  }

  const user2: User = {
    id: 2,
    name: "Petras",
    isAdmin: true,
  }
  const usersArr: User[]=[]
  function userinfo(userObj: User) {
    // userObj.name
    console.log('userObj.name ===', userObj.name);
    // userObj.name is admin
    // userObj.name is not admin
    console.log('userObj.isAdmin ===', userObj.isAdmin);
    console.log(`${userObj.name} is${userObj.isAdmin === true ? '' : ' NOT'} admin`);
  
  }
  export{}