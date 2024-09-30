import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Number,Status} from '../../data'
import {Numbers,Statuses} from '../../mock-data'


@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {
 
  numbers: Number[] = Numbers;
  statuses: Status[] = Statuses;

  avatars = [
    'https://i.pravatar.cc/150?u=a042581f4e29026024d',
    'https://i.pravatar.cc/150?u=a04258a2462d826712d',
    'https://i.pravatar.cc/150?u=a042581f4e29026704d',
    'https://i.pravatar.cc/150?u=a04258114e29026302d',
    'https://i.pravatar.cc/150?u=a04258114e29026702d'
  ];
  maxAvatars = 5;
}
