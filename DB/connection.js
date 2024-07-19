import { Sequelize } from 'sequelize';
const sequelize = new Sequelize('blog-project', 'root', '' , {
host: 'localhost',
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