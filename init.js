import dotenv from "dotenv";
import "./db";
import app from "./app";
dotenv.config();
import "./models/order";
import "./models/User";

const PORT = process.env.PORT || 5004;

const handleListening = () =>
    console.log(`✅ Listening on: http://localhost:${PORT}`);

app.listen(PORT, handleListening);