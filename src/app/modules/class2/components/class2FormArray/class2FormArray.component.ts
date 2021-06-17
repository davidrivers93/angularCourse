import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';

import { PanelBarExpandMode } from '@progress/kendo-angular-layout';

@Component({
  selector: '[class2-form-array]',
  templateUrl: './class2FormArray.component.html',
})
export class Class2FormArrayComponent implements OnInit {
  form: FormArray;
  expandMode = PanelBarExpandMode.Full;
  height = 320;

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.initForm();
  }

  addAddressItem(): void {
    this.form.push(this.initializeFormArrayItem());
  }

  onRemoveAddress(index: number): void {
    this.form.removeAt(index);
  }

  private initForm(): void {
    this.form = this.fb.array([
      this.initializeFormArrayItem(),
      this.initializeFormArrayItem(),
    ]);
  }

  private initializeFormArrayItem(): FormGroup {
    return this.fb.group({
      direction: ['', Validators.required],
      postalCode: ['', Validators.required],
      city: ['', Validators.required],
      country: ['', Validators.required],
    });
  }
}
