import { useRouter } from 'next/router'
import React from 'react'
import Image from "next/image"

const Blogs = ({blogs}) => {
  const router = useRouter();
  return (
    <div>

      <Image src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg" alt="myimg" width={100} height={100} />
      {blogs?.map((item)=>{
        return (
        <div key={item.id}>
         <h1>{item.title}</h1>
         <button onClick={()=>router.push(`/blogs/${item.id}`)}>go to chimkandi</button>
        </div>)
      })}
    </div>
  )
}

export async function getStaticProps(){
  let res = await fetch(`https://jsonplaceholder.typicode.com/posts`)
  let data = await res.json()
  return {
    props : {
      blogs : data
    }
  }
}

export default Blogs;