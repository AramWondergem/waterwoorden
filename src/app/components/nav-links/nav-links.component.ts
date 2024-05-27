import {Component, EventEmitter, Input, Output} from '@angular/core';
import {RouterLink, RouterLinkActive} from "@angular/router";
import {NgClass} from "@angular/common";

@Component({
  selector: 'app-nav-links',
  standalone: true,
  imports: [
    RouterLinkActive,
    RouterLink,
    NgClass
  ],
  templateUrl: './nav-links.component.html',
  styleUrl: './nav-links.component.css'
})
export class NavLinksComponent {

  @Output() action = new EventEmitter<void>();
  @Input() isFlexColumn: boolean = false;

  onClick() {
    this.action.emit();
  }

}
