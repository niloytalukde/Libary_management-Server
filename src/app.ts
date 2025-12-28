
import express, { Request, Response } from "express"
import cors from "cors"
import { bookRouter } from "./app/controllers/book.controller"
import { borrowRoute } from "./app/controllers/borrow.controller"
const app = express()
app.use(express.json())
  cors({
    origin: ["http://localhost:5173", "https://library-management-frontend-zeta-three.vercel.app/"],
    credentials: true,
  })


app.use(express.urlencoded({ extended: true }));

app.get("/", (req:Request, res:Response) => {
  res.send("Server is running");
});

app.use("/api", bookRouter);
app.use("/api", borrowRoute);
export default app
