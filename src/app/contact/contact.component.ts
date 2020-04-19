import { Component, OnInit } from '@angular/core';
import{FormControl,FormGroup,Validators,FormBuilder} from '@angular/forms';
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  userForm: FormGroup;
  constructor(private fb: FormBuilder) {
   this.createForm();
 }
  createForm() {
   this.userForm = this.fb.group({
    name: ['', Validators.required ],
    email: ['', Validators.required ],
    phone:['',[Validators.required,Validators.pattern(/^[6-9]\d{9}$/),Validators.maxLength(10)]],
    msg:['',Validators.required]
   });
 }
}
