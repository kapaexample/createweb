import bcrypt from 'bcrypt';
import db from '../models/index';

const salt = bcrypt.genSaltSync(10);

let createNewUser = async(data) =>{
    return new Promise(async(resolve,reject) =>{
        try {
            let hashPasswordFromBcypt= await hashUserPassword(data.password);
            await db.User.create({
                email: data.email,
                password: hashPasswordFromBcypt,
                firstName: data.firstName,
                lastName: data.lastName,
                gender: data.gender === '1' ? true :false,
                address: data.address,
                phoneNumber: data.phoneNumber,
                roleId: data.roleId
            })
            resolve('ok created user');
        }catch(e){
        reject(e);
        }
    })

}

let hashUserPassword = async(password) => {
    return new Promise(async(resolve, reject) =>{
        try{
            let hashPassword = await bcrypt.hashSync(password, salt);
            resolve(hashPassword);
        }catch(e) {
             reject(e);
        }

    })
}

module.exports = {
    createNewUser:createNewUser
}