import { Component } from '@angular/core';
import { HeroComponent } from '../hero/hero.component';
import { FeaturesComponent } from '../features/features.component';
import { ReviewsComponent } from '../reviews/reviews.component';
import { ConnectComponent } from '../connect/connect.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeroComponent,FeaturesComponent,ConnectComponent,ReviewsComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
