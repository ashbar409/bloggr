import {useParams} from "react-router-dom"
import { useEffect, useState } from "react";
import {getBlogById, createComment, updateComment, deleteComment, getCommentsByBlogId} from "../services/constants"
import { handlers } from "browser-router/html5-history/adapter";

//choose the correct post via id
function Post() {

  const { post_id } = useParams();
  console.log(post_id)
  //extracting id from url

  const [post, setPost] = useState([{}])
  const [comments, setComments] = useState([{comment: ""}])
  const [newComment, setNewComment] = useState("")

  const handleChange = (e) => {
    e.preventDefault()
    setNewComment(e.target.value);
  }

  const handleClickUpdate = (e, content, id) => {
    e.preventDefault()
    updateComment(content, id)
  }

  const handleClickDelete = (e, id) => {
    e.preventDefault()
    deleteComment(id)
  }

  const handleClickCreate = (e, content, blogId) => {
    e.preventDefault()
    console.log(post_id)
    createComment(content, blogId)
  }

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

  useEffect(() => {
    const fetchData = async () => {
      try{
        const response = await getCommentsByBlogId(post_id)
        setComments(response)
      } catch (error) {
          console.log(error)
      }
    }
    fetchData()
  }, [comments])

  return (
    <div className="post">
      <div className="hero">
      <img src={`https://picsum.photos/1000`} />
      </div>

      <div className="content">
        <h3>{post.title}</h3>
        <p>{post.body}</p>
      </div>
      <div className="comment-section">
        {
          comments.map(comment => {
            return <div className="comment">
              <p>{comment.comment}</p>
              <input type="text" defaultValue="Update comment" onChange={((e) => handleChange(e))}/>
              <button onClick={(e) => handleClickUpdate(e, newComment, comment._id)}>Update</button>
              <div className="update"></div>
              <button onClick={(e) => handleClickDelete(e, comment._id)}>Delete</button>
            </div>
          })
        }
        <div>
          <input type="text" defaultValue="Type a comment" onChange={(e) => handleChange(e)}/>
          <button onClick={(e) => handleClickCreate(e, newComment, post_id)}>Post comment</button>
        </div>
      </div>
    </div>
  )
} 

export default Post