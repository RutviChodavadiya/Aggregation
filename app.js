const express = require("express");
const ConnectDB =require("./ConnectDb")
const studentController = require("./Student/StudentController");
const subjectController = require("./Subject/SubejctController");
const marksController = require("./Marks/MarksController");

const app = express()
ConnectDB()

app.use(express.json())
 
app.post("/student",studentController.addStudent)
app.post("/subject",subjectController.addSubject)
app.get("/marks/:student",marksController.showResult) 

app.listen(5000,() => {
    console.log("server started");
})  