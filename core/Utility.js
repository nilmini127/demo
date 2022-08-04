import multer from 'multer';
const utility ={};

utility.addDb = async(Model ,data) =>{
    return Model(data).save();
}
utility.getOneDb = async(Model,query)=>{
    return Model.findOne(query);
}

export default utility;