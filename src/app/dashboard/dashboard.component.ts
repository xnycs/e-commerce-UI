import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router'

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, RouterOutlet, DashboardComponent, HttpClientModule, ReactiveFormsModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {
  menus: any = [
    { label: "Shop", icon: "home" },
    { label: "Category", icon: "search" },
    { label: "New", icon: "tag" },
    { icon: "shopping-cart", border_display: {
      label: "Free",
      icon: ""
    }},
    { label: "Me", icon: "user" },
  ];
  menu_icon: string = 'home';

  ngOnInit(): void {
  }

  setIconVal(icon: any): void {
    this.menu_icon = icon;
  }
}
