import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Connect } from '../../data';
import { Connects } from '../../mock-data';

@Component({
  selector: 'app-connect',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './connect.component.html',
  styleUrl: './connect.component.css'
})
export class ConnectComponent {
  connects: Connect[] = Connects;

}
