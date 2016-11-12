import { Component } from '@angular/core'
import { Router } from '@angular/router'

import './util/rxjs'

@Component({
    selector: 'my-app',
    templateUrl: './app/template.html'
})
export class AppComponent { 
    
    constructor(private router: Router) {}

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

    goTo(component) {
        this.router.navigate(['/', component.name.toLowerCase()])
    }

}