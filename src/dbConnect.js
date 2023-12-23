import {MongoClient, ServerApiVersion} from 'mongodb'

import {mongoDbConnectionURI} from '../secret.js'

export const client = new MongoClient(mongoDbConnectionURI, {
    ignoreUndefined: false,
    serverApi: ServerApiVersion.v1
})