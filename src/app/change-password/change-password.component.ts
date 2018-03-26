import { PasswordValidators } from './change-password.validators';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl, AbstractControl } from '@angular/forms';

@Component({
  selector: 'change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent {
  form: FormGroup;
  oldPwd: AbstractControl;

  constructor(fb: FormBuilder) {
    this.form = fb.group({
      oldPassword : ['', Validators.required, PasswordValidators.oldPasswordInvalid],
      newPassword : ['', [Validators.required]],
      confirmPassword : ['', [Validators.required]]
    }, {
        validator : PasswordValidators.passwordsShouldMatch
      });
  }

  get oldPassword() {
    return this.form.get('oldPassword');
  }

  get newPassword() {
    return this.form.get('newPassword');
  }

  get confirmPassword() {
    return this.form.get('confirmPassword');
  }

  submitChange() {
    console.log('Submitting...', this.form);
  }
}
