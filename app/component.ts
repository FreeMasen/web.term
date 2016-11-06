import { Component } from '@angular/core'

import { Page } from './models/page'
import { Pages } from './services/pages'

import './util/rxjs'

@Component({
    selector: 'my-app',
    templateUrl: './app/template.html'
})
export class AppComponent { 
    
    constructor(private pagesService: Pages) {}
    pages: Page[] = []
    private pagesObserver = this.pagesService.get()
    private pageStream = this.pagesObserver.subscribe(
        value => { 
            console.log('observer.next')
            this.pages.push(value)
        },
        error => { console.error(error)}
    )

    goTo(page) {
        console.log('goTo')
        console.log(page)
    }

}