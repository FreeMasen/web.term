import { Component } from '@angular/core'
import { OnInit } from '@angular/core'
import { Router } from '@angular/router'


import { Message } from '../models/message'
import { MessagesService } from '../services/messagesService'


@Component({
    selector: 'messages',
    templateUrl: './app/messages/template.html',
    styleUrls: ['./app/messages/styles.css']
})
export class Messages {
    messages: Message[] = []
    private messagesObserver
    private messagesStream

    constructor(
        private messagesService: MessagesService,
        private router: Router
        ) {}

    ngOnInit() {
        this.messagesObserver = this.messagesService.getAll()
        this.messagesStream = this.messagesObserver.subscribe(message => {
            this.messages.push(message)
        }, err => {
            console.error('Messages Error', err)
        })
    }

    archiveMessage(id: string): void {
        //send http request to archive
    }

    deleteMessage(id: string): void {
        //send http request to delete
    }

    reply(message: Message): void {
        //open new message with reply paradigm
    }

    replyAll(message: Message): void {
        //open new message with reply all paradigm
    }

    forward(message: Message): void {
        //open new message with forward paradigm
    }

    messageDetails(message): void {
        this.router.navigate(['/messages', message.id])
    }

}