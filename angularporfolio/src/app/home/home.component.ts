import { Component, OnInit } from '@angular/core';
import { PostsService } from '../posts/posts.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [PostsService]
})
export class HomeComponent implements OnInit {

  posts: any = [];
  products: any = [];
  constructor(private postsService: PostsService) { }

  ngOnInit() {
	this.postsService.getAllPosts().subscribe(posts => {
		this.posts = posts;
	});
	
	this.postsService.ProductLists().subscribe(products =>{
		this.products = products;
	});
  }
}
