import { Component, Input, OnInit } from '@angular/core'
import { ActivatedRoute, Params } from '@angular/router'
import { Location } from '@angular/common'

import { Message } from '../models/message'
import { MessagesService } from '../services/messagesService'

@Component({
    selector: 'message-detail',
    templateUrl: './app/messageDetail/template.html',
    styleUrls: ['./app/messageDetail/styles.css']
})
export class MessageDetail {
    @Input()
    message: Message

    constructor(
        private messagesService: MessagesService,
        private route: ActivatedRoute,
        private location: Location
    ) {}

    ngOnInit(): void {
        this.route.params.forEach((param: Params) => {
            
        })
    }
}