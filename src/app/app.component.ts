import { Component } from '@angular/core';
import { HeaderComponent } from "../naoMart/header/header.component";
import { MainContentComponent } from "../naoMart/main-content/main-content.component";
import { FooterComponent } from "../naoMart/footer/footer.component";
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, MainContentComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'apps';
}
