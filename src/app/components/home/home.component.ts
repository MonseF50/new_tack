import { Component } from '@angular/core';
import { HeadingComponent } from "../heading/heading.component";

@Component({
  selector: 'app-home',
  imports: [HeadingComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
