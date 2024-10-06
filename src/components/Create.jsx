
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from "axios";
import { useState } from "react";
import './Create.css'


const Create = () =>{
    const [name, setName] = useState("");
   const [ image , setImage] = useState('')
   const [ info , setInfo] = useState('')

    const getData = async (e) =>{
     
       
       e.preventDefault();
        await axios.post('https://66fb960f8583ac93b40c4de9.mockapi.io/mansi/project/post' ,{name:name , image:image , info :info})
    //    console.log(name , info , image)
    setName("")
 setImage("")
 setInfo("")

    }
   
   
    
    return(
        <div className='main'>
            <form onSubmit={getData}>
    
            <div className='main2'>
                <input type="text" placeholder="Enter Your name" onChange={((e) =>{setName(e.target.value)})} value={name} className='input-field'/>
                <input type="text" placeholder="Enter image URL" onChange={((e) =>{setImage(e.target.value)})} value={image} className='input-field'/>
                <input  type='text' placeholder='Enter Description' value={info} onChange={((e) =>{setInfo(e.target.value)})} className='input-field' /> 
                <input type="submit" value="Add" className='submit-button'/>
                 </div>
            </form>

        </div>
       
    )
}
export default Create;


