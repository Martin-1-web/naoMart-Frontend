import { Component } from '@angular/core';

import { HeaderComponent } from "../naoMart/header/header.component";
import { WelcomeComponent } from "../naoMart/welcome/welcome.component";
import { NavbarComponent } from "../naoMart/navbar/navbar.component";
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from "../naoMart/footer/footer.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, WelcomeComponent, NavbarComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'apps';
}
