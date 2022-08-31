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