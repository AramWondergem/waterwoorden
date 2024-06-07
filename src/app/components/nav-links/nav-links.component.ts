import {Component, EventEmitter, Input, Output} from '@angular/core';
import {NgClass} from "@angular/common";
import {DataSharingService} from "../../services/data-sharing.service";

@Component({
  selector: 'app-nav-links',
  standalone: true,
  imports: [
    NgClass
  ],
  templateUrl: './nav-links.component.html',
  styleUrl: './nav-links.component.css'
})
export class NavLinksComponent {
  toggle: boolean = true;

  @Output() action = new EventEmitter<void>();
  @Input() isFlexColumn: boolean = false;

  constructor(
    private dataService: DataSharingService
  ) {
    this.dataService.toggleNavLinks$.subscribe((value: boolean)  => this.toggle = value)
  }

  onClick() {
    this.dataService.toggleNavLinks()
  }

}
