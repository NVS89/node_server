import express from 'express';
import bodyParser from 'body-parser';

//Router Handlers
import messagesRouter from './routes/messages/messages.routes.js';

const server = express();
const port = process.env.PORT || 8080;

// form data handler
// parse application/x-www-form-urlencoded
server.use(bodyParser.urlencoded({ extended: true }));
// parse application/json
server.use(bodyParser.json());


// enable CORS
server.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,POST,PUT,DELETE,OPTIONS');
    res.header(
        'Access-Control-Allow-Headers', 
        'Content-Type, Accept, Cache-Control, Content-Disposition, Authorization'
    );
    next();
});


// routes 
// server.use('/auth', authRoutes);
// server.use('/user', userRoutes);
server.use('/dashboard', messagesRouter);

const appServer = server.listen(port, function () {
    console.log('====================================');
    console.log(`server start on port ${port}`);
    console.log('====================================');
});
