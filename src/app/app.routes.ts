import { Routes } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { WishersComponent } from './wishers/wishers.component';
import { SwitcherComponent } from './switcher/switcher.component';
import { ListWishersComponent } from './list-wishers/list-wishers.component';
import { PromptpayComponent } from './promptpay/promptpay.component';
import { ListPromptpayComponent } from './list-promptpay/list-promptpay.component';

export const routes: Routes = [
    { path: '', component: SwitcherComponent },
    { path: 'wishers', component: WishersComponent },
    { path: 'list-wishers', component: ListWishersComponent },
    { path: 'promptpay', component: PromptpayComponent },
    { path: 'list-promptpay', component: ListPromptpayComponent },
    { path: '', redirectTo: '/', pathMatch: 'full' },
    { path: '**', component: PageNotFoundComponent }
];
