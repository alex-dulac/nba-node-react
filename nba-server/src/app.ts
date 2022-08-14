import express, {json, Request, Response} from 'express';
import axios from "axios";

const app = express();
app.use(express.json());

app.get('/', (req: Request, res: Response) => {
    const options = {
        method: 'GET',
        url: 'https://api-nba-v1.p.rapidapi.com/seasons',
        headers: {
            'X-RapidAPI-Key': 'KEY',
            'X-RapidAPI-Host': 'api-nba-v1.p.rapidapi.com'
        }
    };

    axios.request(options).then(function (response) {
        console.log(response.data);
    }).catch(function (error) {
        console.error(error);
    });
});

app.listen(4000, () => {
    console.log("Backend application listening at port 4000...")
});
