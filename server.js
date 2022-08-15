
import express from 'express'
import path from 'path'



const app = express();
const port = proccess.env.PORT || 5000;




const __dirname =path.resolve()
const publicPath = path.join(__dirname, '/frontend/build');
app.use(express.static(publicPath));


app.get('*', (req, res) => {
    res.sendFile(path.join(publicPath,'index.html'));
 });

app.listen(port, () => {
    console.log(`Server is up on port ${port}!`);
 });