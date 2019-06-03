import { Component, OnInit } from '@angular/core';
import { routerList } from '../routes';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit {

  rList = routerList;
  constructor() { }

  ngOnInit() {
  }
}
