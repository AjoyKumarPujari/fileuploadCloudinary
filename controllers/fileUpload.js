const File = require("../models/File");


//localfileupload -> handle function


exports.localFileUpload = async(req, res) =>{
    try {
        //fetch the file
        const file =req.files.file;
        console.log("File is here", file);

        let path = __dirname + "/files/" + Date.now() + `.${file.name.split('.')[1]}`; //current file path
        console.log("PATH->" , path)

        file.mv(path, (err) => {
            console.log(err);
        });
        res.json({
            success: true,
            message: "Local File Added Successfully"
        })
    } catch (error) {
        console.log(error);
    }
}