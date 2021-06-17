import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { merge } from 'rxjs';
import { filter, map, tap } from 'rxjs/operators';
import { Class1Service } from 'src/app/services/class1/class1.service';

@Component({
  selector: '[class2-page]',
  templateUrl: './class2-page.component.html',
})
export class Class2PageComponent implements OnInit {
  result = [];

  myValue = '';

  form: FormGroup;

  get nameValue(): string {
    return this.form?.value?.name;
  }

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.initForm();
  }

  private initForm(): void {
    this.form = this.fb.group({
      name: '',
    });
  }
}
