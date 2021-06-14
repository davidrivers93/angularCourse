import { Injectable } from '@angular/core';
import { from, of } from 'rxjs';
import { concatMap, delay } from 'rxjs/operators';

@Injectable()
export class Class1Service {
  getBasicInterval() {
    return from([1, 2, 3, 4, 5]).pipe(
      concatMap((item) => of(item).pipe(delay(1000)))
    );
  }

  getSecondaryInterval() {
    return from([10, 20, 30, 40, 50]).pipe(
      concatMap((item) => of(item).pipe(delay(1500)))
    );
  }
}
