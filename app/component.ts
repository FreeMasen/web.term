import { Component } from '@angular/core'

import './util/rxjs'

@Component({
    selector: 'my-app',
    templateUrl: './app/template.html'
})
export class AppComponent { 
    
    constructor() {}

    components = [
        {
            name: 'Dashboard',
            link: '/dashboard'
        },
        {
            name: 'Messages',
            link: '/messages'
        },
        {
            name: 'Analytics',
            link: '/analytics'
        },
        {
            name: 'Preferences',
            link: '/preferences'
        }
    ]

    website = {
        name: 'RobertMasen.pizza',
        url: 'http://robertmasen.com'
    }

    goTo(page) {
        console.log('goTo')
        console.log(page)
    }

}