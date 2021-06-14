import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { merge } from 'rxjs';
import { filter, map, tap } from 'rxjs/operators';
import { Class1Service } from 'src/app/services/class1/class1.service';
import {
  SNIPPET1,
  SNIPPET2,
  SNIPPET3,
  SNIPPET4,
  SNIPPET5,
  SNIPPET6,
  SNIPPET7,
  SNIPPET8,
  SNIPPET9,
} from './snippets';

@Component({
  selector: '[class1-page]',
  templateUrl: './class1-page.component.html',
})
export class Class1PageComponent implements OnInit {
  codeSnippet1 = SNIPPET1;
  codeSnippet2 = SNIPPET2;
  codeSnippet3 = SNIPPET3;
  codeSnippet4 = SNIPPET4;
  codeSnippet5 = SNIPPET5;
  codeSnippet6 = SNIPPET6;
  codeSnippet7 = SNIPPET7;
  codeSnippet8 = SNIPPET8;
  codeSnippet9 = SNIPPET9;

  result = [];

  myValue = '';

  form: FormGroup;

  get nameValue(): string {
    return this.form?.value?.name;
  }

  constructor(private class1Service: Class1Service, private fb: FormBuilder) {}

  ngOnInit(): void {
    this.initForm();
  }

  testBasicObservable(): void {
    this.initResult();
    this.class1Service
      .getBasicInterval()
      .pipe(tap((item: number) => console.log(item)))
      .subscribe((item: number) => (this.result = [...this.result, item]));
  }

  testMapObservable(): void {
    this.initResult();
    this.class1Service
      .getBasicInterval()
      .pipe(
        map((item: number) => item * 2),
        tap((item: number) => console.log(item))
      )
      .subscribe((item: number) => (this.result = [...this.result, item]));
  }

  testFilterObservable(): void {
    this.initResult();
    this.class1Service
      .getBasicInterval()
      .pipe(
        filter((item: number) => item % 2 === 0),
        tap((item: number) => console.log(item))
      )
      .subscribe((item: number) => (this.result = [...this.result, item]));
  }

  testConcatObservable(): void {
    this.initResult();
    const first$ = this.class1Service.getBasicInterval();

    const second$ = this.class1Service.getSecondaryInterval();

    merge(first$, second$)
      .pipe(tap((item: number) => console.log(item)))
      .subscribe((item: number) => (this.result = [...this.result, item]));
  }

  private initResult(): void {
    this.result = [];
  }

  private initForm(): void {
    this.form = this.fb.group({
      name: '',
    });
  }
}
