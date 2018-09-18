import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-app-blog',
  templateUrl: './app-blog.component.html',
  styleUrls: ['./app-blog.component.css']
})
export class AppBlogComponent implements OnInit {

  constructor() { }

  blogimg: any = '../../../assets/images/blog/blog.jpg';
  blogcontent: any = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, provident corrupti? Soluta deleniti eveniet
  dolorem ducimus vitae? Adipisci culpa amet earum molestias impedit. Fuga animi aliquid molestiae eligendi. Earum
  odio veritatis sint mollitia labore ipsam tenetur cum vitae, atque suscipit rem, corrupti obcaecati ullam nulla,
  sunt doloribus tempore fugiat quibusdam!`;

  posts: any[] = [
    { title: 'post one', content: 'This is article one', by: 'jessica doe', on: '12/02/2017' },
    { title: 'post two', content: 'This is article Two', by: 'jhon smith', on: '02/07/2016' },
    { title: 'post three', content: 'This is article Three', by: 'Will jack', on: '11/03/2016' }];

  ngOnInit() {
  }

}
