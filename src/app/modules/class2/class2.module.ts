import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { Class2RoutingModule } from './class2-routing.module';
import { Class2BasicExample } from './components/class2BasicExample/class2BasicExample.component';
import { Class2FormArrayComponent } from './components/class2FormArray/class2FormArray.component';
import { Class2ValidationExample } from './components/class2ValidationExample/class2ValidationExample.component';
import { Class2PageComponent } from './pages/class2-page.component';
import { AddressComponent } from './components/address/address.component';

import { InputsModule } from '@progress/kendo-angular-inputs';
import { LayoutModule } from '@progress/kendo-angular-layout';

@NgModule({
  imports: [
    Class2RoutingModule,
    InputsModule,
    CommonModule,
    ReactiveFormsModule,
    LayoutModule,
  ],
  declarations: [
    Class2PageComponent,
    Class2ValidationExample,
    Class2BasicExample,
    Class2FormArrayComponent,
    AddressComponent,
  ],
})
export class Class2Module {}
