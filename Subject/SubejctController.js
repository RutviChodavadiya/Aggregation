const subjectModel = require("./SubjectModel")

class SubjectController {
    async addSubject(req, res) {
        try {
            const { name } = req.body

            const result = await subjectModel.insertSubject({name: name})
            console.log(result)
            if(result) return res.status(200).send({message:"Success"})
            return res.status(500).send({message : 'Something went wrong'})
        } catch (error) {
            console.log(error)
            return res.status(500).send({message:"Internal server error"})
        }
    }
}

const subjectController  = new SubjectController()

module.exports = subjectController