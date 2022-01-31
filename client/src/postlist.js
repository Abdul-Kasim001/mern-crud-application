import axios from 'axios'
import React, { useEffect, useState } from'react'
import Postitem from './postitem'
function Postlist()
{
    cost[postdata,setpostdata]=useState([])
    useEffect(()=>{
        axios.get('/api/post/getposts').then(res=>{
            console.log(res.data)
            setpostdata(res.data)
        }).catch(err=>{
            console.log(err)
        })
    },[])
    const Postlist=postdata.map(post=>{
        return(
            
            <div className='row justify-content-center'>
                <Postitem post={post}/>
            </div>
        )
    })
    return(
        <div>
            <a href="/addpost" className='btn btn primary m-5'>add post</a>
            {Postlist}
        </div>
    )
}
export default Postlist()