import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Class2PageComponent } from './pages/class2-page.component';

const routes: Routes = [
  {
    path: '',
    component: Class2PageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Class2RoutingModule {}
