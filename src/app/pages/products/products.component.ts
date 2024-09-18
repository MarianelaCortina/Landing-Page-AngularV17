import { Component, inject, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { IProduct } from '../../models/product.model';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent implements OnInit{
 

  productList: IProduct [] = [];

  private _apiService = inject(ApiService);
  private _router = inject(Router)
  private _activatedRoute = inject(ActivatedRoute)


  ngOnInit(): void {
      // Suscribirse a los parámetros de la URL
    this._activatedRoute.queryParams.subscribe(params => {
      const category = params['category'];

      // Si hay una categoría, traer productos filtrados, si no, traer todos los productos
      if (category) {
        this._apiService.getProductsByCategory(category).subscribe({
          next: (products) => {
            this.productList = products;
          },
          error: (error) => {
            console.error('Error fetching products by category:', error);
          },
          complete: () => {
            console.log('Completed fetching products by category');
          }
        });
      } else {
        this._apiService.getProducts().subscribe({
          next: (products) => {
            this.productList = products;
          },
          error: (error) => {
            console.error('Error fetching all products:', error);
          },
          complete: () => {
            console.log('Completed fetching all products');
          }
        });
      }
    });
  }


  seeDetails(id: number){
    /* console.log(id) */
     this._router.navigate(['/products', id]);
    
  }


}
