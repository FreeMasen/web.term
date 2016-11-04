import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'

import { AppComponent } from './component'
import { Dashboard } from './dashboard/component'

import { Router } from './router/module'

@NgModule({
    imports: [
        BrowserModule,
        Router
    ],
    declarations: [
        AppComponent,
        Dashboard
    ],
    bootstrap: [
        AppComponent
    ]
})
export class AppModule { }