import { Component, OnInit, enableProdMode } from '@angular/core';
import 'zone.js';
import 'reflect-metadata';
import { GetdataService } from '../../service/getdata.service';

// @ts-ignore
const DataSet = require('@antv/data-set');

@Component({
  selector: 'app-graphicalform',
  templateUrl: './graphicalform.component.html',
  styleUrls: ['./graphicalform.component.css']
})
export class GraphicalformComponent implements OnInit {

  resData: any = [];
  currentData: any = [];
  radioValue = 'ctr';
  forceFit = true;
  height = 800;
  isShow = true;
  scale =  [{
    dataKey: 'value',
    min: 0
  }, {
    dataKey: 'logDate',
  }];
  constructor(private getdataService: GetdataService) { }

  ngOnInit() {
    this.init();
  }

  init() {
    this.getdataService.getData()
      .then(res => {
        this.resData = res;
        // tslint:disable-next-line:prefer-for-of
        for (let i = 0; i < this.resData.length; i++) {
          this.currentData.push({
            logDate: this.resData[i].logDate,
            value: Number(this.resData[i].ctr)
          });
        }
      });
  }
  ctlChange() {
    let currentKey = '';
    this.isShow = false;
    this.currentData.length = 0;
    // tslint:disable-next-line:forin
    for (const key in this.resData[0]) {
      if (key.indexOf(this.radioValue) >= 0) {
        currentKey = key;
      }
    }
    // tslint:disable-next-line:prefer-for-of
    for (let i = 0; i < this.resData.length; i++) {
      this.currentData.push({
        logDate: this.resData[i].logDate,
        value: Number(this.resData[i][currentKey])
      });
      if (this.currentData.length > 0 ) {
        setTimeout(() => {
          this.isShow = true;
        });
      }
    }
  }
}
