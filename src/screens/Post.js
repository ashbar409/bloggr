import {useParams} from "react-router-dom"
import { useEffect, useState } from "react";
import {getBlogById} from "../services/constants"

//choose the correct post via id
function Post() {

  const { post_id } = useParams();
  //extracting id from url

  const [post, setPost] = useState([{}])

  useEffect(() => {
    const fetchData = async () => {
      try{
        const response = await getBlogById(post_id)
        console.log(response)
        setPost(response)
      } catch (error) {
          console.log(error)
      }
    }
    fetchData()
  }, [])

  return (
    <div className="post">
      <div className="hero">
      <img src={`https://picsum.photos/1000`} />
      </div>

      <div className="content">
        <h3>{post.title}</h3>
        <p>{post.body}</p>
      </div>
    </div>
  )
} 

export default Post