import { useState, useEffect } from "react";
import PostCard from '../components/PostCard';
import {getAllPosts} from "../services/constants";


function Posts() {
const [posts, setPosts] = useState([{}])

  useEffect(() => {
    const fetchData = async () => {
      try{
        const response = await getAllPosts()
        console.log(response)
        setPosts(response)
      } catch (error) {
          console.log(error)
      }
    }
    fetchData()
  }, [])


  return (
    <div className="posts">
      {posts.map((post, index) => {
        return (
          <PostCard
            id={post._id}
            title={post.title}
            image={`20${index}`}      
          />
        )
      })}
      
    </div>
    
  
)
}

export default Posts