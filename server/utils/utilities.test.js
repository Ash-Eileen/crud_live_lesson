const mongoose = require('mongoose')
const Post = require('../../server/models/post')
const dbConn = "mongodb://localhost/blog_app_test"

before(done => connectToDb(done))

function connectToDb(done) {
    mongoose.connect(
        dbConn,
        {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useFindAndModify: false
        },
        err => {
            if (err) {
                console.log('Error connecting to database', err)
                done()
            } else {
                console.log('Connected to database!')
            }
        }
    )
}

beforeEach(async function() {
    let post = await.setupData()
    postId = post._id
})

function setupData() {
    let date = Date.now()
    let testPost = {}
    testPost.title = 'Test post 1'
    testPost.username = 'tester'
    testPost.create_date = date
    testPost.modified_date = date
    testPost.content = 'This is the first test post'
    testPost.category = ''
    return Post.create(testPost)
}

after(done => {
    mongoose.disconnect(() => done())
}

afterEach((done) => {
    tearDownData().exec(() => done());
});

function tearDownData() {
    return Post.deleteMany()
}
