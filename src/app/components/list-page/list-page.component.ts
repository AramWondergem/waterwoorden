import { Component } from '@angular/core';
import {ServiceService} from "../../services/service.service";

@Component({
  selector: 'app-list-page',
  standalone: true,
  imports: [],
  templateUrl: './list-page.component.html',
  styleUrl: './list-page.component.css'
})
export class ListPageComponent {

  constructor(private service: ServiceService) {
    this.service.getFiles(['assets/waternamen03_L_natuurlijk.csv', 'assets/waternamen03_R_mensgemaakt.csv']).subscribe(data => {
      console.log(data);
    });
  }

}
