import 'dotenv/config'
import { connect } from 'mongoose'

async function dbConnect (): Promise<void> {
  const DB_URI = `mongodb+srv://${ process.env.BBDD_USER }:${ process.env.BBDD_PASS }@mybbdd.c3unr1n.mongodb.net/${ process.env.BBDD_SCHEMA }?retryWrites=true&w=majority`
  await connect( DB_URI )
}

export default dbConnect