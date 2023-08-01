const { default : mongoose} = require("mongoose")

const ConnectDB = async () => {
    try {
        await mongoose.connect("mongodb://127.0.0.1:27017/student_result")
        console.log("DB Connected")
    } catch (error) {
        console.log("Db Connection Loss");
    }
}

module.exports = ConnectDB