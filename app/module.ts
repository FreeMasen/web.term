import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { MaterialModule } from '@angular/material'

import { AppComponent } from './component'
import { Dashboard } from './dashboard/component'

import { Router } from './router/module'
import { Pages } from './services/pages'

import './util/rxjs'

@NgModule({
    imports: [
        MaterialModule.forRoot(),
        BrowserModule,
        Router
    ],
    declarations: [
        AppComponent,
        Dashboard
    ],
    providers: [
        Pages
    ],
    bootstrap: [
        AppComponent
    ]
})
export class AppModule { }