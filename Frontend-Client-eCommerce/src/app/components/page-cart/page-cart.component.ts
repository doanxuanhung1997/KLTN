import { Component, OnInit } from '@angular/core';
import { TypePhoneService } from '../../service/type-phone.service';
import { ActivatedRoute } from '@angular/router';
import { ItemCart } from 'src/app/Models/ItemCart';
import { Customer } from '../../Models/Customer';
import { UpdateviewService } from '../../service/updateview.service';
import { Color } from '../../Models/Color';
import { AddBillService } from '../../service/add-bill.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-page-cart',
  templateUrl: './page-cart.component.html',
  styleUrls: ['./page-cart.component.scss']
})
export class PageCartComponent implements OnInit {
  ItemCarts: ItemCart[] = [];
  ItemCart: ItemCart;
  Customer: Customer;
  total: number = 0;
  name: String;
  price: number;
  color: String;
  img: String;
  count: number;

  listcolor: Color[] = [];
  option_colorsel: String;

  sexcustomer: string;
  namecustomer: string;
  numberphone: string;
  address: string;
  email: string;

  constructor(private router: Router, private activatedRoute: ActivatedRoute, private TPService: TypePhoneService, private udViewService: UpdateviewService, private addBillService: AddBillService) { }

  ngOnInit() {
    //this.udViewService.setUpdateView("Update page ReView");
    this.activatedRoute.params.subscribe(params => {
      var id = params['id'];
      var option_color: string = params['option_color'];
      //var option_quality:number=params['option_quality'];

      if (id) {
        this.TPService.getDetailProduct(id).subscribe((ItemCartTem) => {

          this.name = ItemCartTem.tp_name;
          this.price = ItemCartTem.tp_price - (ItemCartTem.tp_price * ItemCartTem.tp_discount / 100);
          this.color = option_color;
          this.img = ItemCartTem.tp_img1;
          //this.count=option_quality;
          this.TPService.getListColorProducts(id).subscribe((tpcolor) => {
            console.log("tpcolor" + tpcolor);
            this.listcolor = tpcolor;
            this.option_colorsel = this.listcolor[0].p_color;
          });

          this.ItemCart = new ItemCart(id, this.name, this.price, this.color, this.img, 1);
          console.log("this.ItemCart.color = " + this.ItemCart.tp_color);
          // this.ItemCarts.push(this.ItemCart);

          if (localStorage.getItem('cart') == null) {
            let cart: any = [];
            cart.push(JSON.stringify(this.ItemCart));
            console.log("JSON.stringify(cart) = " + JSON.stringify(cart).toString());
            localStorage.setItem('cart', JSON.stringify(cart));
            // localStorage.setItem('cart',JSON.stringify(this.ItemCarts));
          } else {
            let cart: any = JSON.parse(localStorage.getItem('cart'));
            console.log("JSON.stringify(cart) = " + cart.toString());
            let index: number = -1;
            console.log("Cart length: = " + cart.length);
            for (var i = 0; i < cart.length; i++) {
              let item: ItemCart = JSON.parse(cart[i]);
              if (item.tp_id == id && item.tp_color == this.color) {
                index = i;
                break;
              }
            }
            if (index == -1) {
              cart.push(JSON.stringify(this.ItemCart));
              localStorage.setItem('cart', JSON.stringify(cart));
            } else {
              let item: ItemCart = JSON.parse(cart[index]);
              item.tp_count += 1;//*option_quality;
              cart[index] = JSON.stringify(item);
              localStorage.setItem("cart", JSON.stringify(cart));
            }
          }
          this.loadCart();
        });


      } else {
        this.loadCart();
      }
    });
  }

  loadCart(): void {
    this.total = 0;
    this.ItemCarts = [];
    let cart = JSON.parse(localStorage.getItem('cart'));
    for (var i = 0; i < cart.length; i++) {
      let item = JSON.parse(cart[i]);
      //console.log("item cart : "+item.tp_name);
      this.ItemCarts.push(item);
      this.total += item.tp_price * item.tp_count;
    }
    this.udViewService.setUpdateView("Update page Cart header");
  }
  removeCart(id: number): void {
    let cart: any = JSON.parse(localStorage.getItem('cart'));
    let index: number = -1;
    for (var i = 0; i < cart.length; i++) {
      let item: ItemCart = JSON.parse(cart[i]);
      if (item.tp_id == id) {
        cart.splice(i, 1);
        break;
      }
    }
    localStorage.setItem("cart", JSON.stringify(cart));
    this.loadCart();
    this.udViewService.setUpdateView("Update page Cart header");
  }
  addCount(e) {
    const target = e.target || e.srcElement || e.currentTarget;
    const idTP = target.attributes.id;
    const idvalue = idTP.nodeValue;
    const clTP = target.attributes.class;
    const clvalue = clTP.nodeValue;
    console.log("id tp add count: " + idvalue);
    console.log("id tp add count: " + clvalue);
    let cart: any = JSON.parse(localStorage.getItem('cart'));
    let index: number = -1;
    for (var i = 0; i < cart.length; i++) {
      let item: ItemCart = JSON.parse(cart[i]);
      if (item.tp_id == idvalue && item.tp_color == clvalue) {
        index = i;
        break;
      }
    }
    let item: ItemCart = JSON.parse(cart[index]);
    if (item.tp_count <= 4) {
      item.tp_count += 1;//*option_quality;
      cart[index] = JSON.stringify(item);
      localStorage.setItem("cart", JSON.stringify(cart));
      this.loadCart();
      this.udViewService.setUpdateView("Update page Cart header");
    }

  }
  disCount(e) {
    const target = e.target || e.srcElement || e.currentTarget;
    const idTP = target.attributes.id;
    const idvalue = idTP.nodeValue;
    const clTP = target.attributes.class;
    const clvalue = clTP.nodeValue;
    console.log("id tp add count: " + idvalue);
    console.log("id tp add count: " + clvalue);
    let cart: any = JSON.parse(localStorage.getItem('cart'));
    let index: number = -1;
    for (var i = 0; i < cart.length; i++) {
      let item: ItemCart = JSON.parse(cart[i]);
      if (item.tp_id == idvalue && item.tp_color == clvalue) {
        index = i;
        break;
      }
    }
    let item: ItemCart = JSON.parse(cart[index]);
    if (item.tp_count >= 2) {
      item.tp_count -= 1;//*option_quality;
      cart[index] = JSON.stringify(item);
      localStorage.setItem("cart", JSON.stringify(cart));
      this.loadCart();
      this.udViewService.setUpdateView("Update page Cart header");
    }
  }
  AddBill(e) {
    e.preventDefault();
    console.log("this.namecustomer = " + this.namecustomer);
    if (this.sexcustomer.length != 0 && this.namecustomer.length != 0 && this.numberphone.length != 0 && this.email.length != 0 && this.address.length != 0) {

      this.addBillService.addCustomer(this.namecustomer, this.address, this.numberphone, this.email, this.sexcustomer).subscribe((data) => {
        console.log("data customer= " + data);
        this.addBillService.addBill(this.ItemCarts).subscribe((data) => {
          console.log("length itemcart = " + this.ItemCarts);
          console.log("data total= " + data);
        });
      });

      localStorage.clear();
      this.udViewService.setUpdateView("Update page Cart header");
      this.router.navigateByUrl('complete');
    }
  }

  getFormatNumber(number) {
    return (Math.max(0, number).toFixed(0).replace(/(?=(?:\d{3})+$)(?!^)/g, '.'))
  }
}
