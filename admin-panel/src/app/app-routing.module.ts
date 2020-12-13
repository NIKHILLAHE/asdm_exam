import { ProductAddComponent } from './product-add/product-add.component';
import { SingupComponent } from './singup/singup.component';
import { LoginComponent } from './login/login.component';
import { ProductListComponent } from './product-list/product-list.component';
import { UserListComponent } from './user-list/user-list.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OrderListComponent } from './order-list/order-list.component';

const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent },
  { path: 'user-list', component: UserListComponent },
  { path: 'product-list', component: ProductListComponent },
  { path: 'order-list', component: OrderListComponent },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SingupComponent },
  { path: 'product-add', component: ProductAddComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
