import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { ResumeSendComponent } from './resume-send/resume-send.component';
import { AuthGuard } from './auth.guard';
import { MeComponent } from './me/me.component';
import { CartComponent } from './cart/cart.component';
import { NewComponent } from './new/new.component';
import { CategoryComponent } from './category/category.component';
import { ShopComponent } from './shop/shop.component';

import { Router, NavigationEnd } from '@angular/router';

export const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard] },
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  { path: 'resume', component: ResumeSendComponent },
  /*
  { path: 'me', component: MeComponent, canActivate: [AuthGuard] },
  { path: 'cart', component: CartComponent, canActivate: [AuthGuard] },
  { path: 'new', component: NewComponent, canActivate: [AuthGuard] },
  { path: 'category', component: CategoryComponent, canActivate: [AuthGuard] },
  { path: 'shop', component: ShopComponent, canActivate: [AuthGuard] },
  */
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {

  constructor(private router: Router) {
    // Subscribe to the NavigationEnd event
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        // Handle route change here
        localStorage.setItem('current_page', event?.url);
      }
    });
  }
 }