import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-app-slide',
  templateUrl: './app-slide.component.html',
  styleUrls: ['./app-slide.component.css']
})
export class AppSlideComponent implements OnInit {

  constructor() { }

  simg1: any = '../../../assets/images/slides/simg1.jpg';
  simg2: any = '../../../assets/images/slides/simg3.jpg';
  simg3: any = '../../../assets/images/slides/simg1.jpg';
  simg4: any = '../../../assets/images/slides/simg4.jpg';

  ngOnInit() {
  }

}
