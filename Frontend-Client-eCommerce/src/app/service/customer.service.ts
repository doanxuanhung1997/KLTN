import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import {Observable} from 'rxjs';
import { Customer } from '../Models/Customer';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor() { }
}
