import {User} from './_users';
import logedIn from './_logedin';
export default function(dbUser:User, fomrInfo:{username:string, password:string}){
    if(fomrInfo.username === dbUser.username){
        if(fomrInfo.password === dbUser.password){
            localStorage.setItem('username', fomrInfo.username);
            logedIn();
        } else{
            return;
        }
    } else{
        return;
    }
}