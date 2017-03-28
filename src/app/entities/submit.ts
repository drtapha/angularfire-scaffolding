import { FormControl, Validators } from '@angular/forms';
export class Submit {
    submitted: boolean;
    emailCtrl: FormControl;
    constructor() {
        this.emailCtrl = new FormControl('', Validators.email);
    }
    toggleSubmit() {
        this.submitted = !this.submitted;
    }
}
