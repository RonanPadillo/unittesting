import {Component, ViewChild} from '@angular/core';
import {NgForm, NgModel, ValidationErrors} from '@angular/forms';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css'],
})
export class AppComponent {
	@ViewChild('form') public form: NgForm;
	@ViewChild('date') public date: NgModel;
	public submitted = false;
	public title = 'test-assessment';
	public user = {name: '', email: '', ageInYears: null};


	save(): void {
		if (!this.form.valid) {
			return;
		}
		this.submitted = true;
		console.log("user",this.user);
	}

	validateBirthDate(): void {
		console.log(this.user.ageInYears);

		const errors: ValidationErrors = {};
		if (!this.user.ageInYears) {
			errors.required = true;
		} else {
			const age: number = Math.abs(parseInt(this.user.ageInYears.split('-')[0], 10) - new Date().getFullYear());

			if (age <= 25) {
				errors.tooYoung = true;
			}
			if (age > 60) {
				errors.tooOld = true;
			}
		}

		setTimeout(() => {
			this.date.control.markAsPristine({onlySelf: true});
			this.date.control.markAsDirty({onlySelf: true});
			this.date.control.markAsTouched({onlySelf: true});
			if (-1 !== Object.values(errors).indexOf(true)) {
				this.date.control.setErrors(errors);
			}
		});
	}
}
