import { Component, inject } from '@angular/core';
import { Category } from '../../models/product.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  
  Category = Category; 

  private _router = inject(Router)

  

  viewAllProducts() {
    this._router.navigate(['/products']);
  }


  seeProductsByCategory(category: Category) {
    this._router.navigate(['/products'], { queryParams: { category } });
  }

  
}
