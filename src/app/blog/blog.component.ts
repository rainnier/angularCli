import { AfterContentChecked, AfterContentInit, Component, OnDestroy, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit, AfterContentInit, OnDestroy {

  name = "newName"
  showBlog = true
  product = 0

  constructor() { }

  @ViewChild('div') div:any
  ngOnInit(): void {
    //console.log(this.div)
  }

  ngAfterContentInit(): void {
    //console.log(this.div)
  }

  ngOnDestroy(): void {
    console.log("destroy")
  }

  getProduct(x:number, y:number):void {
    this.product = x*y
  }

  

}
