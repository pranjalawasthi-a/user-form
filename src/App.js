import './App.css';
import {useState} from 'react';
import AddUser from './components/AddUser'
import UserList from './components/UserList'
function App() {
  const [userList,setUserList]=useState([]);

  const addingDetails = (uName,uAge)=>{
    setUserList((prevList)=>{
      return [...prevList,{name:uName,age:uAge, id: Math.random().toString()}];
    })
  }
  return (
   <div className='main'>
    <AddUser onAddUser={addingDetails} />
    <UserList users={userList}/>
   </div>
  );
}

export default App;
