import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {HeaderComponent} from "./components/header/header.component";
import {NgClass} from "@angular/common";
import {NavLinksComponent} from "./components/nav-links/nav-links.component";


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, NgClass, NavLinksComponent],
  providers: [],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'waterwoorden';
  menuToggle: boolean = false;

  toggleMenu() {
    this.menuToggle = !this.menuToggle;
  }
  onNavClick() {
    this.toggleMenu()
  }


}
