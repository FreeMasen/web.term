import { Component, OnInit } from '@angular/core'
import { Router } from '@angular/router'


import { PagesService } from '../services/pagesService'
import { MessagesService } from '../services/messagesService'
import { AnalyticsService } from '../services/analyticsService'

@Component({
    selector: 'dashboard',
    templateUrl: './app/dashboard/template.html'
})

export class Dashboard implements OnInit {
    pages = []
    messages = []
    metrics = []
    private pageObserver
    private pageStream
    private messageObserver
    private messageStream
    private metricsObserver
    private metricsStream

    constructor(
        private router: Router,
        private pageService: PagesService,
        private messageService: MessagesService,
        private analyticsService: AnalyticsService
        ) {}

    ngOnInit() {
        this.pageObserver = this.pageService.get()
        this.pageStream = this.pageObserver.subscribe(page => {
            this.pages.push(page)
        }, err => {
            console.error('Pages error', err)
        })
        this.messageObserver = this.messageService.getUnread()
        this.messageStream = this.messageObserver.subscribe(message => {
            this.messages.push(message)
        }, err => {
            console.error('Messages Error', err)
        })
        this.metricsObserver = this.analyticsService.getAnalyticsData()
        this.metricsStream = this.metricsObserver.subscribe(metric => {
            this.metrics.push(metric)
        })
    }

    goToComponent(name): void {
        this.router.navigate(['/', name])
    }

    goToPage(page): void {
        this.router.navigate(['/pages', page.name])
    }

    goToMessage(id) {
        this.router.navigate(['/messages', id])
    }
    
    goToMetric(name) {
        this.router.navigate(['/analytics', name])
    }
}