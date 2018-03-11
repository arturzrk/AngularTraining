import { ValidationErrors } from '@angular/forms';
import { AbstractControl } from '@angular/forms';

export class PasswordValidators {
    static oldPasswordInvalid(c: AbstractControl): Promise<ValidationErrors | null> {
        return new Promise((resolve, reject) => {
            if (c.value !== '1234') {
                resolve({oldPasswordInvalid: true});
            } else {
                resolve( null );
            }
        });
    }

    static passwordsShouldMatch(c: AbstractControl): ValidationErrors | null {
        const newP = c.get('newPassword').value;
        const confirmP = c.get('confirmPassword').value;
        if ( newP !== confirmP ) {
            return {passwordsShouldMatch: true};
        }
        return null;
    }
}
