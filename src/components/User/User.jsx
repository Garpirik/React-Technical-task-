import { useEffect, useState } from 'react';
import './User.css'
const User = (props) =>{
    const [name, setName] = useState('')
    const[findUser, setFindUser] = useState(props.users)
    useEffect(() => {
        setFindUser(props.users);
    }, [props.users]);
    const handleChange = (e) =>{
        const searchUser = e.target.value;
        setName(searchUser);

        const findedUser = props.users.filter((user) =>{
            return  user.firstName.toLowerCase().includes(e.target.value.toLowerCase())
        })
        setFindUser(findedUser)
    }

        
 
    return(
        <div>
        <form>
        <input type="text" value={name} onChange={handleChange}/>
    </form>
        <div className="grid_block">
        {
            findUser.map(u => <div key={u.id} >
    
            <p>Name : {u.firstName}</p>
            <img  src={u.image}/>
            <p><button>Профиль</button></p>
        </div> )
        }
        </div>
        </div>
        )
     
}

export default User;

