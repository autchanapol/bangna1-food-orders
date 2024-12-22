import { Component, computed, Input, input, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';
import { Router } from '@angular/router';

export type MenuItem = {
  icon: string;
  label: string;
  route: string;
};

@Component({
  selector: 'app-custom-sidenav',
  standalone: true,
  imports: [CommonModule, MatListModule, MatIconModule],
  templateUrl: './custom-sidenav.component.html',
  styleUrl: './custom-sidenav.component.css',
})
export class CustomSidenavComponent {
  sideNavCollaspsed = signal(false);

  constructor(private router: Router) {}

  @Input() set collapsed(val: boolean) {
    this.sideNavCollaspsed.set(val);
  }
  
  onSelectMenuItem(route: string) {
    // ตรวจสอบว่าเราอยู่ในเส้นทางเดียวกันหรือไม่
    if (this.router.url !== `/${route}`) {
      this.router.navigate([route]);  // เปลี่ยนเส้นทางไปยังหน้าใหม่
    }
  }

  menuItems = signal<MenuItem[]>([
    {
      icon: 'dashboard',
      label: 'Dashboard',
      route: 'home',
    },
    {
      icon: 'account_balance',
      label: 'Wards',
      route: 'wards',
    },
    {
      icon: 'bed',
      label: 'Beds',
      route: 'beds',
    },
  ]);

  profilePicSize = computed(() => (this.sideNavCollaspsed() ? '32' : '100'));
}
