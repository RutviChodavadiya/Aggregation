const { default: mongoose, Schema, mongo } = require("mongoose");

class MarksModel {
    constructor() {
        this.schema = new mongoose.Schema({
            marks: { type: Number, required: true },
            subject: { type: Schema.Types.ObjectId, required: true, ref: "tbl_subjects" },
            student: { type: Schema.Types.ObjectId, required: true, ref: "tbl_students" },
            totalMarks: { type: Number, required: true, default: 100 }
        })

        this.marks = mongoose.model("tbl_marks", this.schema)
    }


    insertMarks(data) {
        return this.marks.create(data)
    }
  
    showResult(student) {

        const query = [ 

            {
                $match:{
                    student:new mongoose.Types.ObjectId(student)
                }
            },
            {
                $lookup:{
                    from:"tbl_subjects",
                    localField:"subject",
                    foreignField:"_id",
                    as:"subject"

                }
            },
            {
                $unwind:"$subject"
            },
            {
                $group:{
                    _id:"$student",
                    totalMarks:{$sum:"$totalMarks"},
                    achievedMarks:{$sum:"$marks"},
                    percentage:{$avg:"$marks"},

                    subject:{
                        $push:{
                            $mergeObjects:[{name:"$subject.name"},{marks:"$marks"},{totalMarks:"$totalMarks"}]
                        }
                    }
                }
            },
            {
                $lookup:{
                    from:"tbl_students",
                    localField:"_id",
                    foreignField:"_id",
                    as:"student"

                }
            },
            {
                $unwind:"$student"
            },
            {
                "$project":{
                    _id:false,
                    // "student._id":false
                }
            }
        ]

        return this.marks.aggregate(query)
    } 
}

const marksModel = new MarksModel()

module.exports = marksModel 