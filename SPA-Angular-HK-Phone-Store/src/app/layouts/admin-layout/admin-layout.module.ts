import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminLayoutRoutes } from './admin-layout.routing';
import { DashboardComponent } from '../../dashboard/dashboard.component';
import { UserProfileComponent } from '../../user-profile/user-profile.component';
import { TableListComponent } from '../../table-list/table-list.component';
import { TypographyComponent } from '../../typography/typography.component';
import { IconsComponent } from '../../icons/icons.component';
import { MapsComponent } from '../../maps/maps.component';
import { NotificationsComponent } from '../../notifications/notifications.component';
import { UpgradeComponent } from '../../upgrade/upgrade.component';
import { AccountComponent } from '../../account/account.component';

import { CreateAccountComponent } from '../../account/create-account/create-account.component';
import { ShowAccountComponent } from '../../account/show-account/show-account.component';
import { EditAccountComponent } from '../../account/edit-account/edit-account.component';
import { ListProductComponent } from 'app/list-product/list-product.component';
import { TypePhoneComponent } from 'app/type-phone/type-phone.component';
import { CreateTypePhoneComponent } from '../../type-phone/create-type-phone/create-type-phone.component';
import { NewsComponent } from 'app/news/news.component';
import { EditNewsComponent } from '../../news/edit-news/edit-news.component';
import { BillComponent } from 'app/bill/bill.component';
import { EditUserProfileComponent } from 'app/user-profile/edit-user-profile/edit-user-profile.component';
import { HttpClientModule } from '@angular/common/http';

import {
  MatButtonModule,
  MatInputModule,
  MatRippleModule,
  MatFormFieldModule,
  MatTooltipModule,
  MatSelectModule
} from '@angular/material';
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
  ],
  declarations: [
    DashboardComponent,
    UserProfileComponent,
    EditUserProfileComponent,
    TableListComponent,
    TypographyComponent,
    IconsComponent,
    MapsComponent,
    NotificationsComponent,
    UpgradeComponent,
    AccountComponent,
    CreateAccountComponent,
    ShowAccountComponent,
    EditAccountComponent,
    ListProductComponent,
    TypePhoneComponent,
    CreateTypePhoneComponent,
    NewsComponent,
    EditNewsComponent,
    BillComponent,
  ]
})

export class AdminLayoutModule { }
