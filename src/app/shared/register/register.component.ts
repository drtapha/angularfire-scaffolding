import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Validators, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { AuthService } from '../../services';

import { CustomValidator, Credential, Submit } from '../../entities';

@Component({
  selector: 'sbm-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent extends Submit implements OnInit {
  userForm: FormGroup;
  passwordForm: FormGroup;
  password: FormControl;
  confirmPassword: FormControl;
  done: EventEmitter<any> = new EventEmitter();
  constructor(
    private auth: AuthService,
    private formBuilder: FormBuilder
  ) { super(); }

  ngOnInit() {
    this.buildForm();
  }

  register() {
    let credentials: Credential = {
      email: this.emailCtrl.value,
      password: this.password.value
    };

    this.toggleSubmit();

    this.auth.register(credentials).then((user) => {
      this.toggleSubmit();
      this.done.emit(user);
    }).catch(error =>{ console.log(error); this.toggleSubmit(); });
  }
  
  private buildForm() {
    this.password = this.formBuilder.control('', Validators.required);
    this.confirmPassword = this.formBuilder.control('', Validators.required);

    this.passwordForm = this.formBuilder.group({
      password: this.password,
      confirmPassword: this.confirmPassword
    }, { validator: CustomValidator.passwordMatch });

    this.userForm = this.formBuilder.group({ email: this.emailCtrl, passwordForm: this.passwordForm });
  }

}
