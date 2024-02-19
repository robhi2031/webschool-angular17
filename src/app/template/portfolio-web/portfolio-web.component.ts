import { CUSTOM_ELEMENTS_SCHEMA, Component } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import { HeaderComponent } from '../../components/portfolio-web/header/header.component';

@Component({
  selector: 'app-portfolio-web',
  standalone: true,
  imports: [
    MatButtonModule,
    HeaderComponent
  ],
  templateUrl: './portfolio-web.component.html',
  styleUrl: './portfolio-web.component.css',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class PortfolioWebComponent {

}
