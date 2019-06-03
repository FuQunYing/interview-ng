import { Injectable } from '@angular/core';
import 'rxjs/add/operator/toPromise';
import { HttpClient, HttpHeaders, HttpClientJsonpModule} from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class GetdataService {

  constructor( private http: HttpClient, private jsonp: HttpClientJsonpModule) { }
  public headers = new HttpHeaders({
    'data-type': 'jsonp'
  });

//  数据查询
  public getData(): Promise<any> {
    const url = 'https://pm.linkworld.cn/json/test';
    return this.http.jsonp(url, 'callback')
      .toPromise();
  }
}
