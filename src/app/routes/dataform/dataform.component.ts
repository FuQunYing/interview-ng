import { Component, OnInit } from '@angular/core';
import { GetdataService } from '../../service/getdata.service';
import { NzTableModule } from 'ng-zorro-antd';

@Component({
  selector: 'app-dataform',
  templateUrl: './dataform.component.html',
  styleUrls: ['./dataform.component.css'],
})
export class DataformComponent implements OnInit {

  resData: any = [];
  reverseData: any = [];
  sortName: string | null = null;
  sortValue: string | null = null;

  constructor(private getdataService: GetdataService) { }

  ngOnInit() {
    this.init();
  }

  init() {
    this.getdataService.getData()
      .then(res => {
        this.resData = res;
        this.reverseData = [...this.resData];
      });
  }

  number(ctr: any) {
    return (Number(ctr) * 100).toFixed(2) + '%';
  }
  sort(sort: { key: string; value: string }): void {
    this.sortName = sort.key;
    this.sortValue = sort.value;
    this.ctlData();
  }
  ctlData(): void {
    const data = this.resData.filter(() => true);

    if (this.sortName && this.sortValue) {
      this.reverseData = data.sort((a, b) =>
        // tslint:disable-next-line:no-unused-expression no-non-null-assertion
        this.sortValue === 'ascend' ? a[this.sortName!] > b[this.sortName!] ? 1 : -1
          // tslint:disable-next-line:no-non-null-assertion
          : b[this.sortName!] > a[this.sortName!] ? 1 : -1
      );
    } else {
      this.reverseData = data;
    }
  }
}
