import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  standalone: true,
  selector: 'app-root',              // HTML tag για να το χρησιμοποιήσεις
  templateUrl: './app.component.html',  // Το HTML template
  styleUrls: ['./app.component.scss'],
  imports: [RouterModule],  // Τα CSS/SCSS styles
})
export class AppComponent {
  title = 'my-weather-app';          // Μεταβλητή που μπορεί να χρησιμοποιηθεί στο HTML
}
