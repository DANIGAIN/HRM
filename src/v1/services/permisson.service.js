const connect = require('./../../config/db.config');
const RC_Maping = require('./../../v1/models/r_c_maping.model');
const getPermisson = async(roleId) =>{
    try{
        await connect();
        const data = await RC_Maping.find({ role: roleId })
                .populate('role component', '_id name isActive')
        return data ;

    }catch(error){
        console.log(error)
    }     
    return data ;    

}
module.exports = getPermisson;