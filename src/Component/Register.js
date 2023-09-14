import React, { useState } from "react";
import axios from "axios";
import '../App.css';


const Register = () => {
    const [data, setData] = useState(
        {
            name: "",
            phone: "",
            email: "",
            password: ""
        }
    )

    const handleInput = (event) => {
        setData({ ...data, [event.target.name]: event.target.value })
    }

    async function handleSubmit(event) {
        event.preventDefault()
        try{
            const dataAxios = await axios.post('https://formdata-api.onrender.com/user/register', data)
            setData({
                name: "",
                phone:"",
                email:"",
                password:""

            })
            console.log(dataAxios.data)
        }
        catch(err){ console.log(err)}

    }

    return (
        <div className="Registercompo">
            <div className="leftRegister">
                <img className="regimg" src="https://www.pngkey.com/png/detail/203-2035339_register-user-register-online-icon-png.png"/>
            </div>


            <div>
            <form onSubmit={handleSubmit}>
                <div className="formItem">
                <label>Name:</label> <input  className="formIItem" type="text" onChange={handleInput} name="name"></input>
                <label>Phone:</label> <input className="formIItem"  type="number" onChange={handleInput} name="phone"></input>
                <label>Email:</label> <input className="formIItem"  type="email" onChange={handleInput} name="email"></input>
                <label>Password:</label> <input className="formIItem"  type="password" onChange={handleInput} name="password"></input>

                </div>

                
                <button className="registerbtn" type="submit" >Register</button>
            </form>

            </div>

        </div>
    )
}
export default Register