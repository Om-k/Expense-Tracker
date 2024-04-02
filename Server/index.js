const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const userModel = require("./models/user");
const expenseModel = require("./models/expense");
const savingModel = require("./models/savings");

const app = express();
app.use(express.json());
app.use(cors());

mongoose
  .connect(
    "mongodb+srv://omkpoojary:Om%4012345@cluster0.gcxfdxk.mongodb.net/Expenso?retryWrites=true&w=majority"
  )
  .then(() => {
    console.log("Connected to MongoDB");
    app.listen(3001, () => {
      console.log("Server is running");
    });
  })
  .catch((error) => {
    console.error("Error connecting to MongoDB:", error);
    process.exit(1); // Exit the process if MongoDB connection fails
  });

app.post("/LogIn", (req, res) => {
  const { email, password } = req.body;
  userModel.findOne({ email: email }).then((user) => {
    if (user) {
      if (user.password === password) {
        res.json("Success");
      } else {
        res.json("Incorrect Password");
      }
    } else {
      res.json("User does'nt exist");
    }
  });
});

app.post("/SignUp", (req, res) => {
  userModel
    .create(req.body)
    .then((userData) => res.json(userData))
    .catch((err) => {
      console.error("Error creating user:", err);
      res.status(500).json({ error: "Error creating user" }); // Send error response
    });
});

app.post("/AddExpense", (req, res) => {
  expenseModel
    .create(req.body)
    .then((userData) => res.json(userData))
    .catch((err) => {
      console.error("Error creating user:", err);
      res.status(500).json({ error: "Error creating user" }); // Send error response
    });
});

app.post("/AddSaving", (req, res) => {
  savingModel
    .create(req.body)
    .then((userData) => res.json(userData))
    .catch((err) => {
      console.error("Error creating user:", err);
      res.status(500).json({ error: "Error creating user" }); // Send error response
    });
});

app.post("/GetExpense", (req, res) => {
  const { userEmail } = req.body;
  console.log("In", userEmail);
  expenseModel
    .find({ userEmail: userEmail })
    .then((expenseData) => {
      if (expenseData.length > 0) {
        res.json(expenseData); // Send the array of expense data for the user
      } else {
        res.json("No expenses found for the user");
      }
    })
    .catch((err) => {
      console.error("Error fetching expenses:", err);
      res.status(500).json("Internal Server Error");
    });
});

app.post("/GetSaving", (req, res) => {
  const { userEmail } = req.body;
  console.log("In", userEmail);
  savingModel
    .find({ userEmail: userEmail })
    .then((expenseData) => {
      if (expenseData.length > 0) {
        res.json(expenseData); // Send the array of expense data for the user
      } else {
        res.json("No savings found for the user");
      }
    })
    .catch((err) => {
      console.error("Error fetching expenses:", err);
      res.status(500).json("Internal Server Error");
    });
});
