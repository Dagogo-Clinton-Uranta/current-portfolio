
import express from 'express'
import path from 'path'

dotenv.config()

const app = express();
const port = 5000;





const publicPath = path.join(__dirname, '/build');
app.use(express.static(publicPath));


app.get('*', (req, res) => {
    res.sendFile(path.join(publicPath, 'index.html'));
 });

app.listen(port, () => {
    console.log(`Server is up on port ${port}!`);
 });