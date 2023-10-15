const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema({
    userId : {type : mongoose.Schema.Types.ObjectId, ref : 'user', required : true},
    projectname : {type : String, required : true},
    desc : {type : String, required : true},
    date : {type : Date, default : Date.now, required : true}
    
})

const ProjectModel = mongoose.model('donation', projectSchema);

module.exports = ProjectModel;
