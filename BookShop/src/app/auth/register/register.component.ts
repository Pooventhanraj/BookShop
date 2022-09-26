import { Component, OnInit } from '@angular/core';
import { Register } from 'src/Interfaces/Register';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor() { }
  form:Register={
    email:"",
    password:"",
    confirmPassword:""

  }
  ispasswordMatched :boolean = true;
  ngOnInit(): void {
  }

  submit()
  {
   
    if(this.form.password!=this.form.confirmPassword)
    {
      this.ispasswordMatched=false;
    }
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, this.form.email, this.form.password)
      .then((userCredential) => {
        // Signed in 
       alert("Registration Successfull");
        const user = userCredential.user;
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
      });
  }

}
