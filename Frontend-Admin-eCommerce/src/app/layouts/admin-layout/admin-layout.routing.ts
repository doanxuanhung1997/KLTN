import { Routes } from '@angular/router';

import { DashboardComponent } from '../../dashboard/dashboard.component';
import { UserProfileComponent } from '../../user-profile/user-profile.component';
import { NotificationsComponent } from '../../notifications/notifications.component';
import { AccountComponent } from 'app/account/account.component';
import { CreateAccountComponent } from 'app/account/create-account/create-account.component';
import { ShowAccountComponent } from '../../account/show-account/show-account.component';
import { EditAccountComponent } from '../../account/edit-account/edit-account.component';
import { ListProductComponent } from 'app/list-product/list-product.component';
import { TypePhoneComponent } from 'app/type-phone/type-phone.component';
import { NewsComponent } from 'app/news/news.component';
import { CreateTypePhoneComponent } from '../../type-phone/create-type-phone/create-type-phone.component';
import { EditNewsComponent } from '../../news/edit-news/edit-news.component';
import { BillComponent } from 'app/bill/bill.component';
import { EditUserProfileComponent } from 'app/user-profile/edit-user-profile/edit-user-profile.component';
import { ShowTypePhoneComponent } from 'app/type-phone/show-type-phone/show-type-phone.component';
import { EditTypePhoneComponent } from 'app/type-phone/edit-type-phone/edit-type-phone.component';
import { ShowNewsComponent } from 'app/news/show-news/show-news.component';
import { CreateNewsComponent } from 'app/news/create-news/create-news.component';
import { ShowBillComponent } from 'app/bill/show-bill/show-bill.component';
import { StatisticalComponent } from 'app/statistical/statistical.component';

export const AdminLayoutRoutes: Routes = [
    { path: 'dashboard', component: DashboardComponent },
    { path: 'account', component: AccountComponent },
    { path: 'account/create-account', component: CreateAccountComponent },
    { path: 'account/show-account/:id', component: ShowAccountComponent },
    { path: 'account/edit-account/:id', component: EditAccountComponent },
    { path: 'list-product', component: ListProductComponent },
    { path: 'type-phone', component: TypePhoneComponent },
    { path: 'type-phone/create-type-phone', component: CreateTypePhoneComponent },
    { path: 'type-phone/show-type-phone/:id', component: ShowTypePhoneComponent },
    { path: 'type-phone/edit-type-phone/:id', component: EditTypePhoneComponent },
    { path: 'bill', component: BillComponent },
    { path: 'bill/show-bill/:id', component: ShowBillComponent },
    { path: 'news', component: NewsComponent },
    { path: 'news/edit-news/:id', component: EditNewsComponent },
    { path: 'news/show-news/:id', component: ShowNewsComponent },
    { path: 'news/create-news', component: CreateNewsComponent },
    { path: 'user-profile', component: UserProfileComponent },
    { path: 'user-profile/edit', component: EditUserProfileComponent },
    { path: 'statistical', component: StatisticalComponent },
    { path: 'notifications', component: NotificationsComponent },
];
