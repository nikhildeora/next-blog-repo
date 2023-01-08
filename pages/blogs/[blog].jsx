import React from 'react'
import { useRouter } from 'next/router'

const Blog = ({blog}) => {
  const router = useRouter();
  return (
    <>
    <div>blog : {blog.title}</div>
    <button onClick={()=>router.replace("/")}>replace</button>
    </>
  )
}


export async function getStaticPaths(){
  let res = await fetch(`https://jsonplaceholder.typicode.com/posts/`)
  let data = await res.json()
  return {
     paths : data?.map((item)=>({params : {blog : String(item.id)}})) ,
     fallback : false,
  }
}

export async function getStaticProps(context){
  const id = context.params.blog;
  let res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
  let data = await res.json()
  return {
    props : {
       blog : data
    }
  }
}


// export async function getServerSideProps(context){
//     const id = context.query.blog;
//     let res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
//     let data = await res.json()
//     return {
//       props : {
//          blog : data
//       }
//     }
// }

export default Blog;