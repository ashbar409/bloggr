const db = require('../db')
const Blog = require('../models/blog')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const { faker } = require('@faker-js/faker');

const main = async () => {
  const blogPosts = [...Array(10)].map(blog => (
      {
          title: faker.lorem.word(),
          link: faker.lorem.sentence()
      }
  ))

  await Blog.insertMany(blogPosts)
  console.log("Created items!")
}
const run = async () => {
  await main()
  db.close()
}

run()