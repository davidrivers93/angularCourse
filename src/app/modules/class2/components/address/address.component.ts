import {
  Component,
  EventEmitter,
  HostBinding,
  Input,
  OnDestroy,
  OnInit,
  Output,
} from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: '[class2-address]',
  templateUrl: './address.component.html',
})
export class AddressComponent implements OnInit, OnDestroy {
  @HostBinding('class.address--error') get isInvalid(): boolean {
    return this.group.invalid;
  }

  @Input() index: number;
  @Input() group: FormGroup;

  @Output() removeAddress = new EventEmitter<number>();

  private unsubscribe = new Subject();

  ngOnInit(): void {
    this.subscribeToChanges();
  }

  ngOnDestroy(): void {
    this.unsubscribe.next();
    this.unsubscribe.complete();
  }

  onRemoveAddress() {
    this.removeAddress.emit(this.index);
  }

  private subscribeToChanges(): void {
    this.group.valueChanges
      .pipe(takeUntil(this.unsubscribe))
      .subscribe((value) => console.log(value));
  }
}
