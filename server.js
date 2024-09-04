import express from "express";
import ConnectorDatabse from "./db/connectorDatabase.js";
import router from "./router/ContactRouter.js";
import cors from 'cors';
const app = express()
const port = process.env.PORT || 1000;
app.use(cors({
     origin:true,
     methods:["GET", "POST", "PUT", "DELETE"],
     credentials: true
}))

app.use(express.json());
app.use('/api', router)

ConnectorDatabse("mongodb+srv://harshservi48:oQ0xQ9Rv6QCdPtnS@cluster0.elx1j.mongodb.net/")
app.listen(port, () => {
     console.log(`Server is running at port ${port}`);
     
})