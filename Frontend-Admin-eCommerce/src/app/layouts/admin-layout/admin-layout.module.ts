import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';
import { AdminLayoutRoutes } from './admin-layout.routing';
import { DashboardComponent } from '../../dashboard/dashboard.component';
import { UserProfileComponent } from '../../user-profile/user-profile.component';
import { NotificationsComponent } from '../../notifications/notifications.component';
import { AccountComponent } from '../../account/account.component';
import { HighchartsChartComponent } from 'highcharts-angular';
import { CreateAccountComponent } from '../../account/create-account/create-account.component';
import { ShowAccountComponent } from '../../account/show-account/show-account.component';
import { EditAccountComponent } from '../../account/edit-account/edit-account.component';
import { ListProductComponent } from 'app/list-product/list-product.component';
import { TypePhoneComponent } from 'app/type-phone/type-phone.component';
import { CreateTypePhoneComponent } from '../../type-phone/create-type-phone/create-type-phone.component';
import { NewsComponent } from 'app/news/news.component';
import { ShowNewsComponent } from 'app/news/show-news/show-news.component';
import { EditNewsComponent } from '../../news/edit-news/edit-news.component';
import { BillComponent } from 'app/bill/bill.component';
import { EditUserProfileComponent } from 'app/user-profile/edit-user-profile/edit-user-profile.component';
import { HttpClientModule } from '@angular/common/http';
import { PhoneChartComponent } from 'app/dashboard/phone-chart/phone-chart.component';
import { PhoneAvailableChartComponent } from 'app/dashboard/phone-available-chart/phone-available-chart.component';
import { PhoneSoldChartComponent } from 'app/dashboard/phone-sold-chart/phone-sold-chart.component';


import {
  MatButtonModule,
  MatInputModule,
  MatRippleModule,
  MatFormFieldModule,
  MatTooltipModule,
  MatSelectModule
} from '@angular/material';
import { ShowTypePhoneComponent } from 'app/type-phone/show-type-phone/show-type-phone.component';
import { EditTypePhoneComponent } from 'app/type-phone/edit-type-phone/edit-type-phone.component';
import { CreateNewsComponent } from 'app/news/create-news/create-news.component';
import { ShowBillComponent } from 'app/bill/show-bill/show-bill.component';
import { StatisticalComponent } from 'app/statistical/statistical.component';
@NgModule({
  imports: [
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    RouterModule.forChild(AdminLayoutRoutes),
    MatButtonModule,
    MatRippleModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatTooltipModule,
    HttpClientModule,
    NgxPaginationModule,
  ],
  declarations: [
    HighchartsChartComponent,
    DashboardComponent,
    UserProfileComponent,
    EditUserProfileComponent,
    NotificationsComponent,
    AccountComponent,
    CreateAccountComponent,
    ShowAccountComponent,
    EditAccountComponent,
    ListProductComponent,
    TypePhoneComponent,
    CreateTypePhoneComponent,
    ShowTypePhoneComponent,
    EditTypePhoneComponent,
    NewsComponent,
    ShowNewsComponent,
    CreateNewsComponent,
    EditNewsComponent,
    BillComponent,
    ShowBillComponent,
    PhoneChartComponent,
    PhoneAvailableChartComponent,
    PhoneSoldChartComponent,
    StatisticalComponent
  ]
})

export class AdminLayoutModule { }
