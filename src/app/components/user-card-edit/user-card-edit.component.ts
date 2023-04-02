import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UserData, EditUserData } from '../../models/user';

type Form<item> = {
  [Key in keyof item]: FormControl<item[Key]>;
};

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-card-edit.component.html',
  styleUrls: ['./user-card-edit.component.css'],
})
export class UserEditComponent implements OnInit {
  @Input() user!: UserData;
  @Output() userUpdate = new EventEmitter<EditUserData>();

  public updating = false;
  public form = new FormGroup<Form<EditUserData>>({
    first_name: new FormControl('', {
      nonNullable: true,
      validators: [Validators.required, Validators.pattern(/^[A-ZА-Я]/)],
    }),
    last_name: new FormControl('', {
      nonNullable: true,
      validators: [Validators.required, Validators.pattern(/^[A-ZА-Я]/)],
    }),
    email: new FormControl('', {
      nonNullable: true,
      validators: [Validators.required, Validators.email],
    }),
  });

  get firstNameHasError() {
    const control = this.form.controls.first_name;
    return control.invalid && (control.dirty || control.touched);
  }

  get firstNameHasRequiredError() {
    const control = this.form.controls.first_name;
    return (
      control.invalid &&
      (control.dirty || control.touched) &&
      control.errors?.['required']
    );
  }

  get firstNameHasCapitalizeError() {
    const control = this.form.controls.first_name;
    return (
      control.invalid &&
      (control.dirty || control.touched) &&
      control.errors?.['pattern']
    );
  }

  get lastNameHasError() {
    const control = this.form.controls.last_name;
    return control.invalid && (control.dirty || control.touched);
  }

  get lastNameHasRequiredError() {
    const control = this.form.controls.last_name;
    return (
      control.invalid &&
      (control.dirty || control.touched) &&
      control.errors?.['required']
    );
  }

  get lastNameHasCapitalizeError() {
    const control = this.form.controls.last_name;
    return (
      control.invalid &&
      (control.dirty || control.touched) &&
      control.errors?.['pattern']
    );
  }

  get emailHasError() {
    const control = this.form.controls.email;
    return control.invalid && (control.dirty || control.touched);
  }

  get emailHasRequiredError() {
    const control = this.form.controls.email;
    return (
      control.invalid &&
      (control.dirty || control.touched) &&
      control.errors?.['required']
    );
  }

  get emailHasEmailError() {
    const control = this.form.controls.email;
    return (
      control.invalid &&
      (control.dirty || control.touched) &&
      control.errors?.['email']
    );
  }

  public submit() {
    if (this.form.valid) {
      this.updating = true;
      this.userUpdate.emit(this.form.value as Required<typeof this.form.value>);
    }
  }

  ngOnInit(): void {
    this.form.reset({
      ...this.user,
    });
  }
}
