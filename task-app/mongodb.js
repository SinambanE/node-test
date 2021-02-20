const { MongoClient, ObjectID } = require('mongodb')

const connectionUrl = 'mongodb://root:root@db:27017'
const dbName = 'task-app'

const id = new ObjectID()

MongoClient.connect(connectionUrl, { useNewUrlParser: true, useUnifiedTopology: true }, (error, client) => {
    if (error) {
        console.log('error!')
        return console.log(error)
    } 
    const db = client.db(dbName)

    // db.collection('users').updateOne({
    //     _id: new ObjectID('603132b136e6ab00fb5ef0b6')
    // }, {
    //     $inc: {
    //         age: 1
    //     }
    // }).then((result) => {
    //     console.log(result.modifiedCount)
    // }).catch((e) => console.log(e))

    // db.collection('tasks').updateMany({
    //     completed: false
    // }, {
    //     $set: {
    //         completed: true
    //     }
    // }).then((result) => {
    //     console.log(result.modifiedCount)
    // }).catch((e) => e)
    
    db.collection('tasks').deleteMany({
        description: 'TEST2'
    }).then((result) => {
        console.log(result.deletedCount)
    }).catch((e) => e)

})