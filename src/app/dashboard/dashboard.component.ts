import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule],
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
    console.log('test');
  }

  setIconVal(icon: any): void {
    this.menu_icon = icon;
  }
}
