import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder} from '@angular/forms'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'introMaterial';
 
  public myForm: FormGroup;

  constructor(private fb :FormBuilder){}

  ngOnInit(){
   /*  this.myForm = new FormGroup({
      username: new FormControl('',Validators.required),
      email: new FormControl(''),
      password: new FormControl('')
    }); */
    this.myForm = this.fb.group({
      input:[''],
      checkbox:[''],
      radio:[''],
      slidetoggle:['']
    })
    console.log(this.myForm)
  }
  submit(){
    console.log(this.myForm.value)
  }
}
