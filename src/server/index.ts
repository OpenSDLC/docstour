import * as express from 'express'
const os = require('os');

const app = express();

app.use(express.static('dist'));
app.get('/api/getUsername', (req: express.Request, res: express.Response) => res.send({ username: os.userInfo().username }));

app.listen(process.env.PORT || 3000, () => console.log(`Listening on port ${process.env.PORT || 3000}!`));