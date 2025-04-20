import { Routes } from '@angular/router';
import { WishersComponent } from './wishers/wishers.component';
import { ListWishersComponent } from './list-wishers/list-wishers.component';
import { PromptpayComponent } from './promptpay/promptpay.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

export const routes: Routes = [
    { path: 'wishers', component: WishersComponent },
    { path: 'list-wishers', component: ListWishersComponent },
    { path: 'promptpay', component: PromptpayComponent },
    {path: '', redirectTo: 'wishers', pathMatch: 'full'},
    { path: '**', component: PageNotFoundComponent }
];
