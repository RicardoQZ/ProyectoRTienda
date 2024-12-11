import { Client } from 'appwrite'
import { AppProject } from './env'

const client = new Client()
client.setProject(AppProject.projectId)