import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

 pageTitle = 'Dashboard';

  notifications = [
    { title: 'Low Stock Alert' },
    { title: 'New Order Received' }
  ];

  currentUser = 'Admin';

  toggleSidebar() {
    // You can implement sidebar toggle logic here
    console.log('Sidebar toggled');
  }

  logout() {
    alert('Logout clicked');
  }

}
