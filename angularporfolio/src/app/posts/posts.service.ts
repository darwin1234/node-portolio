import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';

@Injectable({
  providedIn: 'root'
})
export class PostsService {
   readonly baseURL = 'http://localhost:3000/products';
  constructor(private http: HttpClient) { }
  
  getAllPosts(){
	  return this.http.get('/routes/posts').map((posts)=>{
		 return posts; 
	  });
  }
  
  ProductLists(){
	   return this.http.get(this.baseURL).map((products)=>{
		 return products; 
	  });
  }
}


