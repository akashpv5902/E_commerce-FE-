import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-wish-list',
  templateUrl: './wish-list.component.html',
  styleUrls: ['./wish-list.component.css']
})
export class WishListComponent {

  wishlist:any
  emsg:any

  constructor(private api:ApiService) {}

  ngOnInit(): void{


    this.api.getwishlist().subscribe(
      (data:any)=>{
        this.wishlist = data.products
      },
      (data:any)=>{
        this.emsg = data.error.message
      }
    )
  }

  deletewish(product:any){

    this.api.deletefromwish(product.id).subscribe(
      (result:any)=>{
        alert(result.message)
      },
      (result:any)=>{
        alert(result.error.message)
      }
      
    )

  }

}
