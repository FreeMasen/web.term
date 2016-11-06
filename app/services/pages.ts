import { Observable } from 'rxjs/Observable'
import { Injectable } from '@angular/core'

import { Page } from '../models/page'

let pages: Page[] = [{
    _id: 'testingHome',
    name: 'Home',
    elements: []
},
{
    _id: 'testingAbout',
    name: 'About',
    elements: [{
        name: 'Personal Stuff',
        attributes: [
            {
                name: 'bullets',
                type: 'string',
                editable: true
            }]
    },
    {
        name: 'Software Development',
        attributes: [{
            name: 'bullets',
            type: 'string',
            editable: true
        }]
    }
    ]
},
{
    _id: 'testingContact',
    name: 'Contact',
    elements: [{
        name: 'messages',
        attributes: [{
            name: 'name',
            type: 'string',
            editable: false
        },{
            name: 'email',
            type: 'string',
            editable: false
        },{
            name: 'reason',
            type: 'string',
            editable: false
        },{
            name: 'company',
            type: 'string',
            editable: false
        },{
            name: 'roll',
            type: 'string',
            editable: false
        },{
            name: 'content',
            type: 'string',
            editable: false
        },{
            name: 'read',
            type: 'boolean',
            editable: true
        }]
    }]
}]

@Injectable()
export class Pages {
    private internalValues = pages.values()
    get(): Observable<Page> {
        return Observable.create(observer => {
            pages.forEach(page => {
                observer.next(page)
            })
        })
    }
    private lastIndex = 0

    update(page: Page): Promise<boolean> {
        return new Promise((resolve, reject) => {
            let chance = Math.random() * (100 - 1) + 1

            if (chance > 10) {
                pages = pages.map(x => {
                    if (page._id == x._id) {
                        return page
                    } else {
                        return x
                    }
                })
                resolve(true)
            } else {
                reject(new Error('Error updating page'))
            }
        })
    }
}