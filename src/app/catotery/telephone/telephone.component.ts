import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-telephone',
  templateUrl: './telephone.component.html',
  styleUrls: ['./telephone.component.css']
})
export class TelephoneComponent implements OnInit {
  category=[

    {
      id:1,
      text:'Điện Thoại',
      routerLink: '/telephone'
    },
   
      ]
      product = [
        {
          id: 1,
          url: 'https://cdn.cellphones.com.vn/media/catalog/product/cache/7/small_image/9df78eab33525d08d6e5fb8d27136e95/i/p/iphone_13-_pro-5_4.jpg',
          name: 'iPhone 13 Pro Max 128GB | Chính hãng VN/A',
          old: '34.990.000 ₫',
          current: '29.350.000 ₫',
          sold: '99 đã bán',
          brand: 'SmartStore',
          origin_name: 'VN/A',
          check: 'Yêu thích',
          percent: '10%',
          label: 'GIẢM',
        },
        {
          id: 1,
          url: 'https://cdn.cellphones.com.vn/media/catalog/product/cache/7/small_image/9df78eab33525d08d6e5fb8d27136e95/i/p/iphone_13-_pro-5_4.jpg',
          name: 'iPhone 13 Pro Max 128GB | Chính hãng VN/A',
          old: '34.990.000 ₫',
          current: '29.350.000 ₫',
          sold: '99 đã bán',
          brand: 'SmartStore',
          origin_name: 'VN/A',
          check: 'Yêu thích',
          percent: '10%',
          label: 'GIẢM',
        },
        {
          id: 1,
          url: 'https://cdn.cellphones.com.vn/media/catalog/product/cache/7/small_image/9df78eab33525d08d6e5fb8d27136e95/i/p/iphone_13-_pro-5_4.jpg',
          name: 'iPhone 13 Pro Max 128GB | Chính hãng VN/A',
          old: '34.990.000 ₫',
          current: '29.350.000 ₫',
          sold: '99 đã bán',
          brand: 'SmartStore',
          origin_name: 'VN/A',
          check: 'Yêu thích',
          percent: '10%',
          label: 'GIẢM',
        },
        {
          id: 1,
          url: 'https://cdn.cellphones.com.vn/media/catalog/product/cache/7/small_image/9df78eab33525d08d6e5fb8d27136e95/i/p/iphone_13-_pro-5_4.jpg',
          name: 'iPhone 13 Pro Max 128GB | Chính hãng VN/A',
          old: '34.990.000 ₫',
          current: '29.350.000 ₫',
          sold: '99 đã bán',
          brand: 'SmartStore',
          origin_name: 'VN/A',
          check: 'Yêu thích',
          percent: '10%',
          label: 'GIẢM',
        },
        {
          id: 1,
          url: 'https://cdn.cellphones.com.vn/media/catalog/product/cache/7/small_image/9df78eab33525d08d6e5fb8d27136e95/i/p/iphone_13-_pro-5_4.jpg',
          name: 'iPhone 13 Pro Max 128GB | Chính hãng VN/A',
          old: '34.990.000 ₫',
          current: '29.350.000 ₫',
          sold: '99 đã bán',
          brand: 'SmartStore',
          origin_name: 'VN/A',
          check: 'Yêu thích',
          percent: '10%',
          label: 'GIẢM',
        },
        {
          id: 1,
          url: 'https://cdn.cellphones.com.vn/media/catalog/product/cache/7/small_image/9df78eab33525d08d6e5fb8d27136e95/i/p/iphone_13-_pro-5_4.jpg',
          name: 'iPhone 13 Pro Max 128GB | Chính hãng VN/A',
          old: '34.990.000 ₫',
          current: '29.350.000 ₫',
          sold: '99 đã bán',
          brand: 'SmartStore',
          origin_name: 'VN/A',
          check: 'Yêu thích',
          percent: '10%',
          label: 'GIẢM',
        },
        {
          id: 1,
          url: 'https://cdn.cellphones.com.vn/media/catalog/product/cache/7/small_image/9df78eab33525d08d6e5fb8d27136e95/i/p/iphone_13-_pro-5_4.jpg',
          name: 'iPhone 13 Pro Max 128GB | Chính hãng VN/A',
          old: '34.990.000 ₫',
          current: '29.350.000 ₫',
          sold: '99 đã bán',
          brand: 'SmartStore',
          origin_name: 'VN/A',
          check: 'Yêu thích',
          percent: '10%',
          label: 'GIẢM',
        },
        {
          id: 1,
          url: 'https://cdn.cellphones.com.vn/media/catalog/product/cache/7/small_image/9df78eab33525d08d6e5fb8d27136e95/i/p/iphone_13-_pro-5_4.jpg',
          name: 'iPhone 13 Pro Max 128GB | Chính hãng VN/A',
          old: '34.990.000 ₫',
          current: '29.350.000 ₫',
          sold: '99 đã bán',
          brand: 'SmartStore',
          origin_name: 'VN/A',
          check: 'Yêu thích',
          percent: '10%',
          label: 'GIẢM',
        },
        {
          id: 1,
          url: 'https://cdn.cellphones.com.vn/media/catalog/product/cache/7/small_image/9df78eab33525d08d6e5fb8d27136e95/i/p/iphone_13-_pro-5_4.jpg',
          name: 'iPhone 13 Pro Max 128GB | Chính hãng VN/A',
          old: '34.990.000 ₫',
          current: '29.350.000 ₫',
          sold: '99 đã bán',
          brand: 'SmartStore',
          origin_name: 'VN/A',
          check: 'Yêu thích',
          percent: '10%',
          label: 'GIẢM',
        },
        {
          id: 1,
          url: 'https://cdn.cellphones.com.vn/media/catalog/product/cache/7/small_image/9df78eab33525d08d6e5fb8d27136e95/i/p/iphone_13-_pro-5_4.jpg',
          name: 'iPhone 13 Pro Max 128GB | Chính hãng VN/A',
          old: '34.990.000 ₫',
          current: '29.350.000 ₫',
          sold: '99 đã bán',
          brand: 'SmartStore',
          origin_name: 'VN/A',
          check: 'Yêu thích',
          percent: '10%',
          label: 'GIẢM',
        },
        {
          id: 1,
          url: 'https://cdn.cellphones.com.vn/media/catalog/product/cache/7/small_image/9df78eab33525d08d6e5fb8d27136e95/i/p/iphone_13-_pro-5_4.jpg',
          name: 'iPhone 13 Pro Max 128GB | Chính hãng VN/A',
          old: '34.990.000 ₫',
          current: '29.350.000 ₫',
          sold: '99 đã bán',
          brand: 'SmartStore',
          origin_name: 'VN/A',
          check: 'Yêu thích',
          percent: '10%',
          label: 'GIẢM',
        },
        {
          id: 1,
          url: 'https://cdn.cellphones.com.vn/media/catalog/product/cache/7/small_image/9df78eab33525d08d6e5fb8d27136e95/i/p/iphone_13-_pro-5_4.jpg',
          name: 'iPhone 13 Pro Max 128GB | Chính hãng VN/A',
          old: '34.990.000 ₫',
          current: '29.350.000 ₫',
          sold: '99 đã bán',
          brand: 'SmartStore',
          origin_name: 'VN/A',
          check: 'Yêu thích',
          percent: '10%',
          label: 'GIẢM',
        },
        {
          id: 1,
          url: 'https://cdn.cellphones.com.vn/media/catalog/product/cache/7/small_image/9df78eab33525d08d6e5fb8d27136e95/i/p/iphone_13-_pro-5_4.jpg',
          name: 'iPhone 13 Pro Max 128GB | Chính hãng VN/A',
          old: '34.990.000 ₫',
          current: '29.350.000 ₫',
          sold: '99 đã bán',
          brand: 'SmartStore',
          origin_name: 'VN/A',
          check: 'Yêu thích',
          percent: '10%',
          label: 'GIẢM',
        },
        {
          id: 1,
          url: 'https://cdn.cellphones.com.vn/media/catalog/product/cache/7/small_image/9df78eab33525d08d6e5fb8d27136e95/i/p/iphone_13-_pro-5_4.jpg',
          name: 'iPhone 13 Pro Max 128GB | Chính hãng VN/A',
          old: '34.990.000 ₫',
          current: '29.350.000 ₫',
          sold: '99 đã bán',
          brand: 'SmartStore',
          origin_name: 'VN/A',
          check: 'Yêu thích',
          percent: '10%',
          label: 'GIẢM',
        },
        {
          id: 1,
          url: 'https://cdn.cellphones.com.vn/media/catalog/product/cache/7/small_image/9df78eab33525d08d6e5fb8d27136e95/i/p/iphone_13-_pro-5_4.jpg',
          name: 'iPhone 13 Pro Max 128GB | Chính hãng VN/A',
          old: '34.990.000 ₫',
          current: '29.350.000 ₫',
          sold: '99 đã bán',
          brand: 'SmartStore',
          origin_name: 'VN/A',
          check: 'Yêu thích',
          percent: '10%',
          label: 'GIẢM',
        },
      ]

  constructor() { }

  ngOnInit(): void {
  }

}