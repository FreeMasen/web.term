import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'

import { Dashboard } from '../dashboard/component'
import { Pages } from '../pages/component'
import { PageDetail } from '../pageDetail/component'
import { Messages } from '../messages/component'
import { MessageDetail } from '../messageDetail/component'
import { Metrics } from '../metrics/component'
import { MetricDetail } from '../metricDetail/component'

const routes: Routes = [
    {path: '', redirectTo: '/dashboard', pathMatch: 'full'},
    {path: 'dashboard', component: Dashboard },
    {path: 'pages', component: Pages},
    {path: 'pages/:id', component: PageDetail },
    {path: 'messages', component: Messages},
    {path: 'messages/:id', component: MessageDetail},
    {path: 'analytics', component: Metrics},
    {path: 'analytics/:id', component: MetricDetail},
]

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [
        RouterModule
    ]
})
export class Router { }