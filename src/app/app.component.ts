import { Component } from '@angular/core';
import { NavbarComponent } from "../demo/navbar/navbar.component";
import { WelcomeComponent } from "../demo/welcome/welcome.component";
import { FooterComponent } from "../demo/footer/footer.component";
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent, WelcomeComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'apps';
}
