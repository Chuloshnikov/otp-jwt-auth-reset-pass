import express from 'express';
import cors from 'cors';
import morgan from 'morgan';


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

app.listen(port, () => {
    console.log(`Server connected tp //http://localhost:${port}`);
})