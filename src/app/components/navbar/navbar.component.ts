import { initFlowbite } from 'flowbite';
import { FlowbiteService } from './../../services/flowbite.service';
import { Component, HostListener } from '@angular/core';
import { RouterLink, RouterLinkActive } from "@angular/router";

@Component({
  selector: 'app-navbar',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  constructor(private flowbiteService: FlowbiteService) { }

  ngOnInit(): void {
    this.flowbiteService.loadFlowbite((flowbite) => {
      initFlowbite();
    });
  }
  padding: string = 'py-8'
  @HostListener('window:scroll', ['$event']) scrolled(): void {
    console.log('scrolling');
    if (window.scrollY > 10) {
      this.padding = 'py-2'
    } else {
      this.padding = 'py-8'
    }
  }
}
