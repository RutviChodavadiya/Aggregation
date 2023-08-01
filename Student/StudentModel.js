const { default: mongoose } = require("mongoose")

class StudentModel {
    constructor() {
        this.schema = new mongoose.Schema({
            name: { type: String, required: true },
            std: { type: Number, required: true }
        })

        this.student = mongoose.model("tbl_students", this.schema)
    }


    insertStudent(data) {
        return this.student.create(data) 
    }
}    

const studentModel = new StudentModel()

module.exports = studentModel   