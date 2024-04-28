import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Order } from '../models/order.model';

@Component({
  selector: 'app-singup',
  standalone: true,
  imports: [FormsModule, NgIf],
  templateUrl: './singup.component.html',
  styleUrl: './singup.component.css'
})
export class SingupComponent {
  newOrder: Order = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  }

  onSubmit(): void {
    console.log('connexion recu')
  }
}
