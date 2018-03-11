import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UsernameValidators } from './username.validators';

@Component({
  selector: 'signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.css']
})
export class SignupFormComponent {
  form = new FormGroup( {
    account : new FormGroup( {
      name : new FormControl('',
      [
        Validators.required,
        Validators.minLength(3),
        UsernameValidators.cannotContainSpace
      ]),
      password: new FormControl()
    })
  });

  get username() {
    return this.form.get('account.name');
  }

  signup_submit() {
    console.log('Signup submitted. Form = ', this.form);
    this.form.setErrors ({
      invalidLogin : true
    });
  }

}
