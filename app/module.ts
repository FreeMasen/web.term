import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { MaterialModule } from '@angular/material'

import { AppComponent } from './component'
import { Dashboard } from './dashboard/component'
import { MessageDetail } from './messageDetail/component'
import { Messages } from './messages/component'
import { MetricDetail } from './metricDetail/component'
import { Metrics } from './metrics/component'
import { PageDetail } from './pageDetail/component'
import { Pages } from './pages/component'

import { Router } from './router/module'

import { PagesService } from './services/pagesService'
import { MessagesService } from './services/messagesService'
import { AnalyticsService } from './services/analyticsService'

import './util/rxjs'

@NgModule({
    imports: [
        MaterialModule.forRoot(),
        BrowserModule,
        Router
    ],
    declarations: [
        AppComponent,
        Dashboard,
        MessageDetail,
        Messages,
        MetricDetail,
        Metrics,
        PageDetail,
        Pages
    ],
    providers: [
        PagesService,
        MessagesService,
        AnalyticsService
    ],
    bootstrap: [
        AppComponent
    ]
})
export class AppModule { }