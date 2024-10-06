// import axios from 'axios';
// import React, { useEffect, useState } from 'react'
// import { useNavigate, useParams } from 'react-router-dom';


// export default function Update() {
//     const [name, setName] = useState("");
//     const [ image , setImage] = useState('')
//     const [ info , setInfo] = useState('')

//      const getData = async (e) =>{
//         e.preventDefault();
//          await axios.get('https://66fb960f8583ac93b40c4de9.mockapi.io/mansi/project/post' ,{name:name , image:image , info :info})
//      //    console.log(name , info , image)
//      setName("")
//   setImage("")
//   setInfo("")
 
//      }
//      useEffect(() =>{
//         getData() 
//      },[])
//      const {id} = useParams()
     
//        const navigate = useNavigate()
//      const updateData = async (e) =>{
//         e.preventDefault();
//         await axios.put(`https://66fb960f8583ac93b40c4de9.mockapi.io/mansi/project/post/${id}`,{name , info , image})
//         navigate('/')
        
//      }
//      const navigate1 = useNavigate()
//      const read1 = () =>{
//         navigate1(`/read`)
          
//       }
//   return (
//     <div>
//          <div className='main'>
//             <form onSubmit={updateData}>
//             <div className='main2'>
//                 <input type="text" placeholder="Enter Your name" onChange={((e) =>{setName(e.target.value)})} value={name} className='input-field'/>
//                 <input type="text" placeholder="Enter image URL" onChange={((e) =>{setImage(e.target.value)})} value={image} className='input-field'/>
//                 <input type="text" placeholder="Enter Description" onChange={((e) =>{setInfo(e.target.value)})} value={info} className='input-field'/>
//                 <input type="submit" value="add" className='submit-button' onClick={() =>{read1()}}/>
//                  </div>
//             </form>

//         </div>
//     </div>
//   )
// }

import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

export default function Update() {
    const [name, setName] = useState("");
    const [image, setImage] = useState('');
    const [info, setInfo] = useState('');

    const { id } = useParams();

    const getData = async () => {
        try {
            const response = await axios.get(`https://66fb960f8583ac93b40c4de9.mockapi.io/mansi/project/post/${id}`);
            setName(response.data.name);
            setImage(response.data.image);
            setInfo(response.data.info);
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };

    useEffect(() => {
        getData();
    }, [id]);

    const updateData = async (e) => {
        e.preventDefault();
       
            await axios.put(`https://66fb960f8583ac93b40c4de9.mockapi.io/mansi/project/post/${id}`, { name, info, image });
            navigate('/');
      
    };
    const navigate = useNavigate()
    
    return (
        <div>
            <div className='main'>
                <form onSubmit={updateData}>
                    <div className='main2'>
                        <input
                            type="text"
                            placeholder="Enter Your name"
                            onChange={(e) => setName(e.target.value)}
                            value={name}
                            className='input-field'
                        />
                        <input
                            type="text"
                            placeholder="Enter image URL"
                            onChange={(e) => setImage(e.target.value)}
                            value={image}
                            className='input-field'
                        />
                        <input
                            type="text"
                            placeholder="Enter Description"
                            onChange={(e) => setInfo(e.target.value)}
                            value={info}
                            className='input-field'
                        />
                        <input type="submit" value="Update" className='submit-button' 
                         
     />
                    </div>
                </form>
            </div>
        </div>
    );
}
