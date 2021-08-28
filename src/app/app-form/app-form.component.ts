import { LOCATION_INITIALIZED } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-app-form',
  templateUrl: './app-form.component.html',
  styleUrls: ['./app-form.component.css']
})
export class AppFormComponent implements OnInit {

  Type: any = ['Home Loan', 'Personal Loan', 'Business Loan'];
  ngForm: FormGroup;

  constructor(public fb: FormBuilder) { }

  ngOnInit() {
    this.ngForm = this.fb.group({
      appNumber: new FormControl('', Validators.required),
      appType: new FormControl('', Validators.required),
      amount: new FormControl('', Validators.required),
      switchOne: new FormControl('', Validators.required),
      fullName: new FormControl('', Validators.required),
      switchTwo: new FormControl('', Validators.required),
      gender: new FormControl('', Validators.required),
      
    })

  }
  
  get f() {
    return this.ngForm.controls;
  }
  Registration(formData: FormGroup) {
    console.log(formData.value);
    console.log(formData.valid);
  }

  // Choose Loan using select dropdown
  changeType(e) {
    this.appType.setValue(e.target.value, {
      onlySelf: true
    })
  }

  // Getter method to access formcontrols
  get appType() {
    return this.ngForm.get('appType');
  }
 
}
