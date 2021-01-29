import express from "express";
import morgan from "morgan";
import helmet from "helmet";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";

const app = express();

const PORT = 5003;

app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(helmet());
app.use(morgan("dev"));

app.get('/', function (req, res) {
    res.send('Hello world');
});

app.listen(PORT, function () {
    console.log(`Listening on : http://localhost:${PORT}`);
});