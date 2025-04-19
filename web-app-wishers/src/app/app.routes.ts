import { Routes } from '@angular/router';
import { ListPromptpayComponent } from './list-promptpay/list-promptpay.component';
import { PromptpayComponent } from './promptpay/promptpay.component';
import { ListWellBookComponent } from './list-well-book/list-well-book.component';
import { WishersComponent } from './wishers/wishers.component';

export const routes: Routes = [
    { path: 'wishers', component: WishersComponent },
    { path: 'list-well-book', component: ListWellBookComponent },
    { path: 'prompt-pay', component: PromptpayComponent },
    { path: 'list-prompt-pay', component: ListPromptpayComponent },
];
