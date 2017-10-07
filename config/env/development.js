module.exports = {
    //mongoUri: 'mongodb://localhost/myFirstNode',
    // or use 
    mongoUri: 'mongodb://admin:password@localhost:27017/testDB1',
    debug: true,
    sessionSecret: 'dev_secret_key',
    google: {
        clientID: '716206600654-525114jc6mq59f6mtvvdssptqo5path7.apps.googleusercontent.com',
        clientSecret: 'MTVOXnZlmLDjQFn7k8yHJtnP',
        callbackURL: 'http://localhost:3000/oauth/google/callback'
    }
}
