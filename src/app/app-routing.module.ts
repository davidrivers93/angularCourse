import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Class1PageComponent } from './pages/class1/class1-page.component';

const routes: Routes = [
  {
    path: 'class1',
    component: Class1PageComponent,
  },
  {
    path: '',
    redirectTo: 'class1',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
