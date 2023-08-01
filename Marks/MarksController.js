const marksModel = require("./MarksModel");

class MarksController {
    async addMarks(req, res) {
        try {
            const result = await marksModel.insertMarks(req.body)
            console.log(result);
            return res.status(200).send({ message: "Success" })
        } catch (error) {
            console.log(error)
        }
    }


    async showResult(req, res){
        try {
            const {student} = req.params 
            console.log(student)
     
          
            const result = await marksModel.showResult(student)
            if(result){
                return res.status(200).send({ message: "Success",result:result})
            }
            return res.status(500).send({ message: "Internal server error"})
        } catch (error) {
            console.log(error)
            return res.status(500).send({ message: "Internal server error"})
            
        }
    }
}

const marksController = new MarksController()
module.exports = marksController