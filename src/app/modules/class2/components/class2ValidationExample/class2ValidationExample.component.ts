import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: '[class2-validation-example]',
  templateUrl: './class2ValidationExample.component.html',
})
export class Class2ValidationExample implements OnInit {
  form: FormGroup;

  isSubmitted = false;

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.initForm();
  }

  submitForm(): void {
    console.log('He sido submiteado');
    if (!this.form.valid) {
      return;
    }
    this.isSubmitted = true;
  }

  getIfFieldIsValid(fieldName: string): boolean {
    const field = this.form.get(fieldName);
    return field && field.touched && field.invalid;
  }

  private initForm(): void {
    this.form = this.fb.group({
      name: ['', Validators.required],
      surName: ['', Validators.required],
    });
  }
}
