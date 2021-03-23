import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import userRouter from "./routes/user";
import emailRouter from "./routes/email";
import productRouter from "./routes/product";
import ordersRouter from "./routes/orders";
import models, { sequalize } from "./models";
import passport from "./passport";

//
const app = express();
app.use(express.static("public"));
app.use(cors());
app.use(bodyParser.json());
app.use(passport.initialize());
app.get("/test", passport.authenticate("jwt", { session: false }), (req, res) =>
    res.send("hello world")
);

app.use("/users", userRouter);
app.use("/email", emailRouter);
app.use("/products", productRouter);
app.use("/orders", ordersRouter);

const port = process.env.PORT;
sequalize.sync().then(() => {
    console.log("connected to database");
    app.listen(port, () => {
        console.log(`app is listening on port: ${port}`);
    });
});
