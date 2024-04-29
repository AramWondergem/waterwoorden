import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {ServiceService} from "./service.service";


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  providers: [ServiceService],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'waterwoorden';

  constructor(private service: ServiceService) {
    this.service.getFiles(['assets/waternamen03_L_natuurlijk.csv', 'assets/waternamen03_R_mensgemaakt.csv']).subscribe(data => {
      console.log(data);
    });
  }
}
