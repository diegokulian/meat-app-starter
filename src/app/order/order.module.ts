import {NgModule} from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SharedModule } from 'app/shared/shared.module';

import {DeliveryCostsComponent} from './delivery-costs/delivery-costs.component';
import {OrderItemsComponent} from './order-items/order-items.component';
import {OrderComponent} from './order.component';

const ROUTES: Routes = [
    {path:'', component: OrderComponent}
]

@NgModule({
    declarations:[ OrderComponent, OrderItemsComponent, DeliveryCostsComponent ],
    imports:[SharedModule, RouterModule.forChild(ROUTES)]

})

export class OrderModule {}