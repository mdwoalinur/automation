import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, OnDestroy {
  currentUser = {
    name: 'Md Woalinur',
    role: 'Administrator',
    email: 'admin@trademaster.com',
    avatar: 'assets/images/admin-avatar.jpg'
  };
  
  pageTitle = 'Dashboard';
  currentDate = new Date();
  private timer: any;

  notifications = [
    {
      id: 1,
      title: 'Low Stock Alert',
      message: 'Samsung TV (Model: Q60B) has only 5 units left',
      time: '5 minutes ago',
      type: 'warning',
      read: false
    },
    {
      id: 2,
      title: 'New Order',
      message: 'Order #INV-001 has been placed by Rahman Store',
      time: '1 hour ago',
      type: 'success',
      read: false
    },
    {
      id: 3,
      title: 'Purchase Delivered',
      message: 'Purchase order #PO-001 has been delivered',
      time: '3 hours ago',
      type: 'info',
      read: true
    },
    {
      id: 4,
      title: 'System Update',
      message: 'System will be updated tonight at 2:00 AM',
      time: 'Yesterday',
      type: 'info',
      read: true
    }
  ];

  messages = [
    {
      id: 1,
      name: 'John Doe',
      avatar: 'assets/images/avatar-1.jpg',
      message: 'Need product update for iPhone 15',
      time: '2 min ago',
      read: false
    },
    {
      id: 2,
      name: 'Jane Smith',
      avatar: 'assets/images/avatar-2.jpg',
      message: 'Invoice #INV-002 has been paid',
      time: '15 min ago',
      read: false
    },
    {
      id: 3,
      name: 'Robert Johnson',
      avatar: 'assets/images/avatar-3.jpg',
      message: 'When will the new stock arrive?',
      time: '1 hour ago',
      read: true
    }
  ];

  unreadNotifications = this.notifications.filter(n => !n.read).length;
  unreadMessages = this.messages.filter(m => !m.read).length;

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.updateDateTime();
    this.timer = setInterval(() => this.updateDateTime(), 1000);
    
    // Update page title on route change
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe(() => {
      this.updatePageTitle();
    });
  }

  ngOnDestroy(): void {
    if (this.timer) {
      clearInterval(this.timer);
    }
  }

  updateDateTime(): void {
    this.currentDate = new Date();
  }

  updatePageTitle(): void {
    const url = this.router.url;
    const titleMap: { [key: string]: string } = {
      '/dashboard': 'Dashboard',
      '/products': 'Products',
      '/products/new': 'Add Product',
      '/inventory': 'Inventory',
      '/sales/pos': 'Point of Sale',
      '/sales/list': 'Sales List',
      '/purchases': 'Purchases',
      '/customers': 'Customers',
      '/suppliers': 'Suppliers',
      '/reports': 'Reports',
      '/settings': 'Settings',
      '/users': 'User Management'
    };
    
    this.pageTitle = titleMap[url] || 'TradeMaster';
  }

  toggleSidebar(): void {
    // Emit event or use service to toggle sidebar
    const sidebar = document.querySelector('.sidebar');
    if (sidebar) {
      sidebar.classList.toggle('collapsed');
    }
  }

  markNotificationAsRead(notificationId: number): void {
    const notification = this.notifications.find(n => n.id === notificationId);
    if (notification) {
      notification.read = true;
      this.unreadNotifications = this.notifications.filter(n => !n.read).length;
    }
  }

  markMessageAsRead(messageId: number): void {
    const message = this.messages.find(m => m.id === messageId);
    if (message) {
      message.read = true;
      this.unreadMessages = this.messages.filter(m => !m.read).length;
    }
  }

  markAllNotificationsRead(): void {
    this.notifications.forEach(n => n.read = true);
    this.unreadNotifications = 0;
  }

  markAllMessagesRead(): void {
    this.messages.forEach(m => m.read = true);
    this.unreadMessages = 0;
  }

  logout(): void {
    // Clear localStorage and navigate to login
    localStorage.removeItem('token');
    localStorage.removeItem('userRole');
    this.router.navigate(['/auth/login']);
  }

  goToProfile(): void {
    this.router.navigate(['/users/profile']);
  }

  goToSettings(): void {
    this.router.navigate(['/settings']);
  }
}