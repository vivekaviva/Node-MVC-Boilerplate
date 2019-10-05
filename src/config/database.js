
import mongoose from "mongoose";
import { env } from './server';

try {
    // mongodb connection established
    mongoose.connect(env.parsed.MONGODB_URL, { useNewUrlParser: true },(error) => {
        if(error){
            console.error('Error : unable to connect mongodb\n'+error.toString());
        }else{
            console.error(`Mongodb connected successfully`);
        }
    });
} catch (exp) {
    console.log('Exception occurs'+exp)
}
