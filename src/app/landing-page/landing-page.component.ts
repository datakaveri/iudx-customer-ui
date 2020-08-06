import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ConstantsService } from '../constants.service';
import { InterceptorService } from '../interceptor.service';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements OnInit {


  showAdvanceSearch: boolean = false;
  overlay: boolean = false;
  names: any = {};
  query: string;
  resultData: any;
  categoriesData: any[] = [];

  constructor(private _search: InterceptorService) {
    this.showAdvanceSearch = false;
    this.overlay = false;
    this.names = new ConstantsService();
  }

  ngOnInit(): void {
    this._search.get_api('customer/summary?city=pune')
      .then((data) => {
        this.resultData = data;
        this.categoriesData = this.resultData.categories;
        console.log(this.resultData);
      }
      ).catch(e => {
        console.log(e);
      });
  }

  handleChange() {
    this._search.get_api('customer/summary?city=pune')
      .then((result) => console.log(this.categoriesData)

      ).catch(e => {
        console.log(e);
      });
  }


  goToAdvanceSearch() {
    // showing the overlay
    this.overlay = true;
    // showing the advanceSearch popup
    this.showAdvanceSearch = true;
  }

  // getAdvanceSearch(value) {
  //   this.showAdvanceSearch = value;
  // }

  getOverlay(value) {
    this.overlay = value;
  }
}
