export const SNIPPET1 = `  getBasicCourse() {
    return from([1, 2, 3, 4, 5]).pipe(
      concatMap((item) => of(item).pipe(delay(1000)))
    );
  }`;

export const SNIPPET2 = `testBasicObservable() {
    this.initResult();
    this.class1Service
      .getBasicCourse()
      .pipe(tap((item: number) => console.log(item)))
      .subscribe((item: number) => (this.result = [...this.result, item]));
  }
`;

export const SNIPPET3 = `  testMapObservable() {
    this.initResult();
    this.class1Service
      .getBasicCourse()
      .pipe(
        map((item: number) => item * 2),
        tap((item: number) => console.log(item))
      )
      .subscribe((item: number) => (this.result = [...this.result, item]));
  }`;

export const SNIPPET4 = `  testFilterObservable() {
    this.initResult();
    this.class1Service
      .getBasicCourse()
      .pipe(
        filter((item: number) => item % 2 === 0),
        tap((item: number) => console.log(item))
      )
      .subscribe((item: number) => (this.result = [...this.result, item]));
  }
`;

export const SNIPPET5 = `  getSecondaryInterval() {
    return from([10, 20, 30, 40, 50]).pipe(
      concatMap((item) => of(item).pipe(delay(1500)))
    );
  }`;

export const SNIPPET6 = `  testConcatObservable() {
    this.initResult();
    const first$ = this.class1Service.getBasicInterval();

    const second$ = this.class1Service.getSecondaryInterval();

    merge(first$, second$)
      .pipe(tap((item: number) => console.log(item)))
      .subscribe((item: number) => (this.result = [...this.result, item]));
  }
`;

export const SNIPPET7 = `<input [(ngModel)]="myValue" />
<p>
  <b>Resultado:</b> {{ myValue }}
</p>`;

export const SNIPPET8 = `myValue = '';`;

export const SNIPPET9 = `this.form = this.fb.group({
  name: '',
});`;
