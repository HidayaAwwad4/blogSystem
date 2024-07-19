import { Sequelize } from 'sequelize';
const sequelize = new Sequelize('freedb_blogSystem', 'freedb_hidaya', 'zmdkEC4A&7TUrwE' , {
host: 'sql.freedb.tech',
port:3306,
dialect:'mysql' 
});

export const connectDb = async()=>{
    try{
        return await sequelize.sync({alter:false});
    }catch(error){
        console.log("error to connect db",error);
    }
}
export { sequelize };
export default connectDb;