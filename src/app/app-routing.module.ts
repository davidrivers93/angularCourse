import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Class1PageComponent } from './pages/class1/class1-page.component';
import { Class2PageComponent } from './modules/class2/pages/class2-page.component';

const routes: Routes = [
  {
    path: 'class1',
    component: Class1PageComponent,
  },
  {
    path: 'class2',
    loadChildren: () =>
      import('./modules/class2/class2.module').then((m) => m.Class2Module),
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
