import { FormGroup } from '@angular/forms';
export class CustomValidator {
    static passwordMatch(form: FormGroup) {
        let password = form.get('password').value;
        let confirmPassword = form.get('confirmPassword').value;
        return password == confirmPassword ? null : { passwordMatch: true };
    }
}