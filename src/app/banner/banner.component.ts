import { Component, OnInit, AfterViewInit } from '@angular/core';
import Swiper from 'swiper';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.sass']
})
export class BannerComponent implements OnInit, AfterViewInit {
  constructor() {}

  mySwiper: Swiper;
  images: string[] = [
    'assets/images/banner-1.jpg',
    'assets/images/banner-2.jpg',
    'assets/images/banner-3.jpg'
  ];

  ngAfterViewInit() {
    this.mySwiper = new Swiper('.swiper-container');
  }

  ngOnInit() {}
}
