import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TypePhone } from '../Models/TypePhone';
import { Color } from '../Models/Color';

@Injectable({
  providedIn: 'root'
})
export class TypePhoneService {
  server: string = "http://127.0.0.1:8000/";
  headers: HttpHeaders = new HttpHeaders();
  options: any;
  constructor(private http: HttpClient) {
    let headers: HttpHeaders = new HttpHeaders();
    headers = headers.append('enctype', 'multipart/form-data');
    headers = headers.append('Content-Type', 'application/json');
    headers = headers.append('X-Requested-With', 'XMLHttpRequest');
    let options = {
      headers: headers
    }
  }
  // get list for page home
  getListSaleProducts(): Observable<TypePhone[]> {
    return this.http.get<TypePhone[]>(this.server + 'getListSaleProducts');
  }
  getListNewProducts(): Observable<TypePhone[]> {
    return this.http.get<TypePhone[]>(this.server + 'getListNewProducts');
  }
  // end get list for page home
  getListProducts(id): Observable<TypePhone[]> {
    const newtp = {
      pc_id: id,
    };
    return this.http.post<TypePhone[]>(this.server + 'getListProducts', newtp);
  }
  getListProductsSearch(id, idSear): Observable<TypePhone[]> {
    const newtp = {
      pc_id: id,
      idSear: idSear
    };
    return this.http.post<TypePhone[]>(this.server + 'getListProductsSearch', newtp);
  }
  getListSearchByName(name): Observable<TypePhone[]> {
    const newSear = {
      name: name
    }
    return this.http.post<TypePhone[]>(this.server + 'getListSearchByName', newSear);
  }
  getDetailProduct(id): Observable<TypePhone> {
    const newtp = {
      tp_id: id
    };
    return this.http.post<TypePhone>(this.server + 'getDetailProduct', newtp);
  }
  getListColorProducts(id): Observable<Color[]> {
    const newtp = {
      tp_id: id
    };
    return this.http.post<Color[]>(this.server + 'getListColorProducts', newtp);
  }
  getListPageSalePr(): Observable<TypePhone[]> {
    return this.http.get<TypePhone[]>(this.server + 'getListPageSalePr');
  }
  getListRelatedProducts(id): Observable<TypePhone[]> {
    const newtp = {
      tp_id: id
    };
    return this.http.post<TypePhone[]>(this.server + 'getListRelatedProducts', newtp);
  }
  getListPageNewPr(): Observable<TypePhone[]> {
    return this.http.get<TypePhone[]>(this.server + 'getListPageNewPr');
  }
  getListAllProducts(): Observable<TypePhone[]> {
    return this.http.get<TypePhone[]>(this.server + 'getListSaleProducts');
  }

}
