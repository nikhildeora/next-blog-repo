import React from 'react'
import Link from "next/link"
import {useRouter} from "next/router"

const Navbar = () => {
 const router = useRouter()
 
 
  return (
    <div>
        <button onClick={()=>router.back()}>Back</button>
        <Link href={"/"}>Home</Link>
        <Link href={"/blogs"}>Blogs</Link>
        <button onClick={()=>router.push("/blogs/3")}>blog</button>
    </div>
  )
}

export default Navbar;