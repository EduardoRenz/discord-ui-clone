import { ApolloServer } from 'apollo-server'

import fs from 'fs'
import path from 'path'

const schemas_folder = path.join(__dirname,'schemas/')
const schemas = fs.readdirSync(schemas_folder)





const typeDefs = schemas.reduce((acc,agg)=>{
    const schema = fs.readFileSync(schemas_folder + agg)
    return acc + schema
}, ` `)



const books = [
    {
      title: 'Harry Potter and the Chamber of Secrets',
      author: 'J.K. Rowling',
    },
    {
      title: 'Jurassic Park',
      author: 'Michael Crichton',
    },
  ]

const resolvers = {
    Query: {
      books: () => books,
    },
  };


export default  new ApolloServer({ typeDefs, resolvers });