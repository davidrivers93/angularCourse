import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: '[class2-basic-example]',
  templateUrl: './class2BasicExample.component.html',
})
export class Class2BasicExample implements OnInit {
  form: FormGroup;

  isSubmitted = false;

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.initForm();
  }

  submitForm(): void {
    this.isSubmitted = true;
  }

  private initForm(): void {
    this.form = this.fb.group({
      name: '',
      surName: '',
    });
  }
}
