import {getUsers} from './_users';
import login from './_login'
import "jquery";
import logedIn from './_logedin';
// Check if loged in
logedIn();
document.getElementById('loginButton')!.addEventListener('click', function(e){
    e.preventDefault();
    let username:string = (<HTMLInputElement>document.getElementById('username')).value;
    let password:string = (<HTMLInputElement>document.getElementById('password')).value;
    login(getUsers()[0], {username, password});
});