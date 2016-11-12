import { Injectable } from '@angular/core'
import { Observable } from 'rxjs/Observable'


let mocks = [
    {
        name: 'Links Clicked'
    },
    {
        name: 'Unique Page Views'
    }
]

@Injectable()
export class AnalyticsService {

    constructor() { }

    getAnalyticsData(): Observable<any> {
        return Observable.create(observer => {
            mocks.forEach(metric => {
                observer.next(metric)
            })
        })
    }
}