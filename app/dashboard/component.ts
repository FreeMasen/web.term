import { Component, OnInit } from '@angular/core'


import { Pages } from '../services/pages'

@Component({
    selector: 'dashboard',
    templateUrl: './app/dashboard/template.html'
})

export class Dashboard implements OnInit {
    name = 'RobertMasen.pizza'
    pages = []
    private pageObserver
    private pageStream

    constructor(private pageService: Pages) {}

    ngOnInit() {
        console.log('onInit')
        this.pageObserver = this.pageService.get()
        this.pageStream = this.pageObserver.subscribe(page => {
            this.pages.push(page)
        }, err => {
            console.log(err)
        })
    }

}