import React, { useState } from'react'
import uniqid from'uniqid'
import axios from'axios'
import Swal from 'sweetalert2'
function Addpost()
{
    const[title,settitle]=useState('')
    const[imageurl,setimageurl]=useState('')
    const[description,setdescription]=useState('')
    function addpost()
    {
        var post ={
            title:title,
            imageurl:imageurl,
            description:imageurl,
            postid: uniqid()
        }

        axios.post('/api/post/addnewpost',post).then(res=>{
            alert(res.data)
            Swal.fire('congrats','your post added','success')
        }).then(err=>{
            console.log(err)
        })
    }

    return(
        <div className='row justyfy-content-center'>


            <div className='col-md-6'>
                <h1 className='m-3'>add new post</h1>

            <div>
                <a href="/" className='btn btn-primary'>see post</a>
            <input type="text" placeholder='title' className='from-control'
            value={title} onChange={(e=>{settitle(e.target.value)})}
            />
            
            <input type="text" placeholder='imageurl' className='from-control'
            
            value={imageurl} onChange={(e=>{setimageurl(e.target.value)})}
            />
            <textarea  cols ="30" row="10" placeholder='description' className='from-control'
            value={description} onChange={(e=>{setdescription(e.target.value)})}
            />
            <button className='btn btn-success float-left'>Addpost</button>
            </div>

            </div>
            
        </div>
    )
}
export default Addpost