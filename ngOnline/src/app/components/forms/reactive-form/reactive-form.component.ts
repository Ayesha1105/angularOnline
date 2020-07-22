import { UsernameValidators } from './../../../validator/username/username.validator';
import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styles: [],
})
export class ReactiveFormComponent {
  formObj = new FormGroup({
    userName: new FormControl('', [
      Validators.required,
      Validators.minLength(4),
      UsernameValidators.noSpace,
    ]),
    pass: new FormControl('', Validators.required),
  });

  get uName() {
    return this.formObj.get('userName');
  }
}
