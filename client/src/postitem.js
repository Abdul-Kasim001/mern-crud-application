import React from'react'
import {link} from 'react-router-dom'
import AOS from'aos'
import 'aos/dist/aos.css'
import axios from 'axios'
function Postitem({post})
{
    const history = useHistory()

    useEffect(()=>{
        AOS.init()
    },[])
    function deletepost(postid)
    {
        axios.post('/api/post/deletepost',{postid:postid}).then(res=>{
            alert(res.data)
            history.go(0)
        }).catch(err=>{
            console.log(err)
        })
    }
    return(
        <div className='"col-md-8 shadow p-3 mb-5 bg-white rounded"'data-aos="fade-up">
          <h1 className='p-1'>{post.title}</h1>
          <img style= {{height:'200px'}} src={post.imageurl} className='img-fluid'/>
          <p className='p-1'>{post.description}</p>
          <button className='btn btn-info'>Edit</button>
          <button className='btm btn-danger' onClick={()=>{deletepost(post.postid)}}>Delete</button>
        </div>
    )
}
export default Postitem