import axios from "axios"

export async function getAllPosts() {
    const results = await (await axios.get("https://bloggr-project.herokuapp.com/blogs")).data.blogs
    return results
}

export async function getBlogById(id) {
    const result = await (await axios.get(`https://bloggr-project.herokuapp.com/blogs/${id}`)).data.blog
    console.log(result)
    return result
}

export async function getCommentsByBlogId(blogId){
    const result = await (await axios.get(`https://bloggr-project.herokuapp.com/comments/`, {blog: blogId})).data.comments
    console.log(result)
    return result
}

export async function createComment(bodyText, blogId) {
    const result = await axios.post(`https://bloggr-project.herokuapp.com/comments/`, {comment: bodyText, blog: blogId})
    console.log("Created comment")
    console.log(result)
}

export async function updateComment(bodyText, id) {
    const result = await axios.put(`https://bloggr-project.herokuapp.com/comments/${id}`, {comment: bodyText})
    console.log("Updated comment")
    return result
}

export async function deleteComment(id) {
    const result = await axios.delete(`https://bloggr-project.herokuapp.com/comments/${id}`, )
    console.log("Deleted comment")
    return result
}