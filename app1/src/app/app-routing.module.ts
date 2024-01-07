import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Form2Component } from './Comp/form2/form2.component';
import { FormComponent } from './Comp/form/form.component';

const routes: Routes = [

  {
    path:"RF",
    component:Form2Component
  },
  {
    path:"TF",
    component:FormComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
