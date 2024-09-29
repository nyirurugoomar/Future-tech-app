import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  standalone: true,
})
export class HeaderComponent implements OnInit {
  nav = false;
  shadow = false;

  constructor() {}

  ngOnInit(): void {
    // Initial logic if needed
  }

  handleNav() {
    this.nav = !this.nav;
  }

  @HostListener('window:scroll', ['$event'])
  onWindowScroll() {
    if (window.scrollY >= 90) {
      this.shadow = true;
    } else {
      this.shadow = false;
    }
  }
}
