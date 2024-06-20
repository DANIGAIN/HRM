const connect = require('./../../config/db.config');
const RC_Maping = require('./../../v1/models/r_c_maping.model');
const Component = require('./../models/component.model');
const getPermisson = async(roleId , path ) =>{
    try{
        await connect();
                const component = await Component.findOne({name:path})
                const data = await RC_Maping.findOne({
                  role: roleId,
                  component:component._id
                })
       
        return data ;
  
    }catch(error){
        console.log(error)
    }     
    // return data ;    

}
module.exports = getPermisson;