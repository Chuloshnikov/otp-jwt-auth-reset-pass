import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import connect from './database/connection.js';
import router from './router/route.js';


const app = express();


/*middleware*/
app.use(express.json());
app.use(cors());
app.use(morgan('tiny'));
app.disable('x-powered-by'); //less hackers know about our stack


const port = 8080;


app.get('/', (req, res) => {
    res.status(201).json("Home GET Request");
});

/** routes */
app.use('/api', router);

// Error handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something broke!');
});

/** start server when  have valid connection */
connect().then(() => {
    try {
        app.listen(port, () => {
            console.log(`Server connected tp http://localhost:${port}`);
        });
    } catch (error) {
        console.log("Cannot connect to the server");
    }
}).catch(error => {
    console.log("Invalid database connection!");
})

