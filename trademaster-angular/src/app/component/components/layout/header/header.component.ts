import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  // Page title
  pageTitle: string = 'Dashboard';

  // Sidebar toggle
  toggleSidebar() {
    console.log('Sidebar toggled');
    // later: sidebar service use korte parba
  }

  // Notifications
  notifications: any[] = [
    { message: 'Low stock alert' },
    { message: 'New order received' }
  ];

  // Current user
  currentUser: string = 'Admin';

  // Logout
  logout() {
    console.log('User logged out');
    // later: auth service use korba
  }

}
