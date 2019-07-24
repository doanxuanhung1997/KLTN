import { Component, OnInit } from '@angular/core';
import { ContactService } from '../../service/contact.service';
@Component({
  selector: 'app-page-contact',
  templateUrl: './page-contact.component.html',
  styleUrls: ['./page-contact.component.scss']
})
export class PageContactComponent implements OnInit {
  stt: number = 0;
  name: string;
  email: string;
  phone: string;
  content: string;
  constructor(private CTService: ContactService) { }

  ngOnInit() {
  }
  AddContact(e) {
    e.preventDefault();
    if (this.name.length != 0 && this.email.length != 0 && this.phone.length != 0 && this.content.length != 0) {
      this.CTService.addNewContact(this.name, this.email, this.phone, this.content).subscribe((data) => {
        //console.log("review added"+data.r_id);
        this.name = "";
        this.email = "";
        this.phone = "";
        this.content = "";
        this.stt = 1;
      });
    }
  }
}
