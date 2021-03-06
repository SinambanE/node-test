const dbOptions = {
    useNewUrlParser: true,
    useCreateIndex: true,
    dbName: 'task-app-api',
    user: 'root',
    pass: 'root',
    auth: {
        authdb: 'admin'
    },
    useUnifiedTopology: true,
}
const DB_HOST = 'mongodb://root:root@db:27017/admin'

module.exports = {
    dbOptions,
    DB_HOST
}