import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";


const Login = () => {
 
    const [Data, setData] = useState(
        {
            email: "",
            password: ""
        }
    )

    const handleInput = (event) => {
        setData({ ...Data, [event.target.name]: event.target.value })
    }

    async function handleSubmit(event) {
        event.preventDefault()
        localStorage.clear()
        await axios.post('https://formdata-api.onrender.com/user/login', Data)
          .then((res)=>{console.log(res.data);localStorage.setItem('token', res.data.token)})
          .catch((err) => console.log(err))
          console.log(localStorage.getItem('token'))
       

    }

    return (
        <div className="Registercompo">

            <div className="leftRegister">
               
                <img  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXd4BYpJD9jCn74lV9IJnBbgh0o2i1tpCDoPUyito5fwyyNyRTnzURWvfQhDMi6alKusM&usqp=CAU" alt=""/>
            </div>

            <form onSubmit={handleSubmit}>
                <div className="formItem">
                    <label>Email:</label> <input className="formIItem" type="email" onChange={handleInput} name="email"></input>
                    <label>Password:</label> <input className="formIItem" type="password" onChange={handleInput} name="password"></input>

                </div>

               

               
                <button className="registerbtn" type="submit" >Login</button>
             
            <Link className="loginRegister" to='/register'>
                <h1>You dont have an account register here</h1>
           

            </Link>
        </form>

        </div >
    )
}
export default Login