import { Routes } from '@angular/router';

import { DashboardComponent } from '../../dashboard/dashboard.component';
import { UserProfileComponent } from '../../user-profile/user-profile.component';
import { TableListComponent } from '../../table-list/table-list.component';
import { TypographyComponent } from '../../typography/typography.component';
import { IconsComponent } from '../../icons/icons.component';
import { MapsComponent } from '../../maps/maps.component';
import { NotificationsComponent } from '../../notifications/notifications.component';
import { UpgradeComponent } from '../../upgrade/upgrade.component';
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


export const AdminLayoutRoutes: Routes = [
    { path: 'dashboard', component: DashboardComponent },
    { path: 'account', component: AccountComponent },
    { path: 'account/create-account', component: CreateAccountComponent },
    { path: 'account/show-account', component: ShowAccountComponent },
    { path: 'account/edit-account', component: EditAccountComponent },
    { path: 'list-product', component: ListProductComponent },
    { path: 'type-phone', component: TypePhoneComponent },
    { path: 'type-phone/create-type-phone', component: CreateTypePhoneComponent },
    { path: 'bill', component: BillComponent },
    { path: 'news', component: NewsComponent },
    { path: 'news/edit-news/:id', component: EditNewsComponent },
    { path: 'user-profile', component: UserProfileComponent },
    { path: 'user-profile/edit', component: EditUserProfileComponent },

    { path: 'table-list', component: TableListComponent },
    { path: 'typography', component: TypographyComponent },
    { path: 'icons', component: IconsComponent },
    { path: 'maps', component: MapsComponent },
    { path: 'notifications', component: NotificationsComponent },
    { path: 'upgrade', component: UpgradeComponent },
];
