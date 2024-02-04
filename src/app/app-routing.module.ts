import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from "./components/home-page/home-page.component";
import { UserCreatePageComponent } from "./components/user-create-page/user-create-page.component";
import { UserEditPageComponent } from "./components/user-edit-page/user-edit-page.component";

const routes: Routes = [
  {
    path: '',
    component: HomePageComponent,
  },
  {
    path: 'create',
    component: UserCreatePageComponent,
  },
  {
    path: 'edit/:id',
    component: UserEditPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
