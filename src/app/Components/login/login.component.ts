import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms'


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  userobj : any = {
    "EmailId": "",
    "Password": ""
}


// form details

loginform = new FormGroup({
  email : new FormControl(this.userobj.EmailId , [Validators.email , Validators.required , Validators.pattern('^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$') ]),
  pass : new FormControl(this.userobj.Password , [Validators.required  ])
})

get emailhere(){                                      // getting email for validators if conditions (Span)
  return this.loginform.get('email'); 
}

get passhere(){                                       // geting pass
  return this.loginform.get('pass');
}



// API

http = inject(HttpClient)

postvalues(){
  this.userobj = {
    EmailId : this.loginform.get('email')?.value,
    Password : this.loginform.get('pass')?.value
  }
     this.http.post("https://projectapi.gerasim.in/api/UserApp/login", this.userobj).subscribe((val : any)=>{
      if(val.result == true){
        alert("Data saved");
      }
      else{
        alert("Data not saved");
      }
     })
  }
}