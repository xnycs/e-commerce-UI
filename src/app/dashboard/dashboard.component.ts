import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router'
import { AuthService } from '../auth.service';

import { MeComponent } from '../me/me.component';
import { NgModule } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {

  constructor(
  ) { }

  menus: any = [
    { label: "Shop", icon: "home", component: 'shop' },
    { label: "Category", icon: "search", component: 'category' },
    { label: "New", icon: "tag", component: 'new' },
    { icon: "shopping-cart", border_display: {
      label: "Free",
      icon: ""
    }, component: 'cart'},
    { label: "Me", icon: "user", component: 'me' },
  ];
  menu_icon: string = 'home';
  selectedComponent: string = 'shop';

  ngOnInit(): void {
  }

  setIconVal(data: any): void {
    this.menu_icon = data?.icon;
    this.selectedComponent = data?.component;
  }
}

/*
<app-me></app-me>
<app-shop></app-shop>
<app-cart></app-cart>
<app-new></app-new>
<app-category></app-category>
*/