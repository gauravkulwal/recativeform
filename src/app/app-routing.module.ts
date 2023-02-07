import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ListComponent } from './pages/list/list.component';

const routes: Routes = [
  {path: '' , redirectTo:'list' , pathMatch:'full'},
  {path:'list' , component: ListComponent   },
  {path: 'add' , component: HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
