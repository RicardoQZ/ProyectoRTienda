import { Client, Databases } from 'appwrite'
import { Appwrite } from './env'

const client = new Client()
client.setProject(Appwrite.projectId)
    .setEndpoint('https://cloud.appwrite.io/v1')

const database = new Databases(client)

export {
    database
}