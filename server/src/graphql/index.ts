import { ApolloServer , gql} from 'apollo-server'

import fs from 'fs'
import path from 'path'


const schemas_folder = path.join(__dirname,'schemas/')
const schemas = fs.readdirSync(schemas_folder)

const resolvers_folder = path.join(__dirname,'schemas/')
const resolvers_files = fs.readdirSync(resolvers_folder)

const typeDefs = schemas.reduce((acc,agg)=>{
    const schema = fs.readFileSync(schemas_folder + agg)
    return acc + schema
}, ` `)

const resolvers = []
for (const file of resolvers_files) {
  const imported = import(resolvers_folder + file)
  resolvers.push(imported)
}






export default  new ApolloServer({ typeDefs, resolvers });