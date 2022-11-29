import './UserList.css';
import Card from './UI/Card'
const UserList = (props) =>{
    //console.log(props.users);
    return (
        <Card className='users'>
      <ul>
        {props.users.map((user) => (
          <li key={user.id}>
            {user.name} ({user.age} years old)
          </li>
        ))}
      </ul>
    </Card>
    );
}

export default UserList;