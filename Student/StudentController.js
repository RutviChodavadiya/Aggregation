const studentModel = require("./StudentModel")

class StudentController {
    async addStudent(req, res) {
        try {
            const { name, std } = req.body

            const result = await studentModel.insertStudent({ name: name, std: std })
            if (result) return res.status(200).send({ message: "Success" })
            return res.status(500).send({ message: "Something went wrong" })
        } catch (error) {
            console.log(error)
            return res.status(500).send({ message: "Internal server error" })

        }
    }


}


const studentController = new StudentController()

module.exports = studentController