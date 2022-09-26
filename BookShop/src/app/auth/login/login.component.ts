import { Component, OnInit } from '@angular/core';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { Login } from 'src/Interfaces/Login';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { }

  form: Login = {
    email: "",
    password: ""

  }
  ngOnInit(): void {

  }
  submit() {
    console.log(this.form);


    const auth = getAuth();
    signInWithEmailAndPassword(auth, this.form.email, this.form.password)
      .then((userCredential) => {
        // Signed in 
     
        const user = userCredential.user;
        alert("LOGIN SUCCESS")
        // ...
      })
      .catch((error) => {
        alert("LOGIN FAILED")
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode+" "+errorMessage)
      });
  }

}
