import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MycompComponent } from './mycomp/mycomp.component';

const routes: Routes = [
    {path: 'my-comp', component: MycompComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
