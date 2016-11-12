import { Observable } from 'rxjs/Observable'
import { Injectable } from '@angular/core'

import { Message } from '../models/message'

let mocks: Message[] = [
    {
        name: 'Robert Masen',
        email: 'r.f.masen@gmail.com',
        reason: 'employment',
        company: 'robertmasen.pizza',
        roll: 'Hiring Manager',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris nec erat congue, pellentesque mauris a, lacinia nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Vestibulum eu diam sed augue rhoncus maximus. In dignissim a elit eu hendrerit. Maecenas gravida et quam pretium malesuada. Suspendisse in neque pretium, viverra sapien eu, hendrerit dolor. Donec euismod in leo at porta. Aliquam in maximus metus.\n\nPraesent accumsan, augue sit amet tempor molestie, magna odio luctus massa, eget consequat purus lorem vitae metus. Ut nunc libero, vehicula sed cursus nec, cursus ut ex. Aliquam iaculis in libero a venenatis. Mauris vitae turpis vehicula, semper ante lobortis, semper libero. Donec luctus nisl a lacus placerat, sed congue elit eleifend. Suspendisse sem neque, malesuada sed ex sed, mattis bibendum nibh. Proin pellentesque est et pulvinar auctor. Vivamus vitae neque non arcu pharetra sodales sit amet in mi. Curabitur augue odio, feugiat at arcu quis, dapibus lacinia felis. Etiam nec blandit eros. Proin facilisis felis neque, vel finibus risus vehicula a. Sed posuere, enim non vulputate varius, tellus metus consectetur nunc, quis gravida sem nunc sed tortor.\n\nNam tincidunt non arcu quis tempor. Aliquam laoreet volutpat libero eget tincidunt. Nunc vestibulum ornare nulla in dictum. Interdum et malesuada fames ac ante ipsum primis in faucibus. Sed finibus lorem sit amet leo accumsan feugiat. Duis vel eros ipsum. Interdum et malesuada fames ac ante ipsum primis in faucibus. Duis congue purus augue, non laoreet lorem convallis ut. Nam pharetra lobortis tempor. Cras scelerisque eros eu ultrices pulvinar. Nulla facilisi. Phasellus fermentum, neque ut fringilla commodo, diam augue ornare mi, id congue tellus nisl tempus orci. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Curabitur ac magna sed sem rhoncus commodo efficitur vel quam. Phasellus et tincidunt libero, non mollis purus.\n\nAliquam augue lorem, fermentum vitae mauris vel, maximus porttitor turpis. Cras luctus nisi vel tincidunt scelerisque. Mauris egestas, libero id imperdiet accumsan, libero mauris aliquet urna, vitae dignissim tellus urna in sapien. Sed mollis eros nunc, et porttitor magna pellentesque in. Proin placerat nisl elit, at congue nunc lacinia ac. Suspendisse nec vehicula justo. Cras erat tellus, faucibus at dui at, cursus varius augue.\n\nCurabitur vel consectetur tortor. Donec at rutrum arcu. In porttitor quam velit, vitae elementum ante vehicula vel. Nulla in tristique nunc. Quisque tempor felis lacus, sit amet blandit turpis scelerisque at. Nulla blandit ullamcorper ornare. Proin eget blandit dolor. Donec sed eros pharetra, pellentesque nulla ac, egestas quam.\n\nSed egestas metus egestas tincidunt lacinia. Aliquam rhoncus vulputate lorem a pretium. Aliquam nec sem vitae neque suscipit luctus quis at purus. Fusce rhoncus erat accumsan risus lacinia rutrum. Morbi odio nisl, tristique luctus orci et, euismod pharetra felis. Aenean rutrum velit vel lacus molestie ultricies. Duis mattis blandit varius. Aliquam velit dolor, fermentum id leo eu, fringilla iaculis odio. Aenean congue dui at justo efficitur efficitur. Donec at condimentum mi. Pellentesque aliquet mollis est, scelerisque tristique dolor tristique vehicula. Curabitur ac malesuada ligula. Vivamus sem turpis, varius sit amet pellentesque a, sodales vel quam.\n\nQuisque eget euismod nibh, dictum iaculis sapien. Etiam ornare imperdiet magna sed fringilla. Nam sit amet urna sed sem porttitor fringilla sed ut tortor. Pellentesque laoreet, ante vel gravida condimentum, lorem nisi tempor erat, scelerisque varius diam tellus at urna. Phasellus eu mauris non sapien scelerisque ullamcorper at in ex. Nullam massa orci, sollicitudin vitae magna a, pulvinar pellentesque tellus. Maecenas vitae ultrices massa. Sed nec ultrices ipsum. Curabitur aliquet velit risus, consequat pretium ipsum pellentesque sit amet. Integer ultrices dapibus malesuada. Ut nunc lacus, vestibulum sed dapibus sed, interdum vitae orci.\n\nCras vitae neque at urna imperdiet fermentum. Ut lobortis vitae odio auctor pellentesque. Proin pharetra turpis vulputate, cursus nibh tristique, viverra odio. Pellentesque in dapibus ipsum. Phasellus gravida efficitur lectus, vitae congue diam volutpat et. Phasellus sed efficitur nisl. Curabitur rutrum ac enim sed blandit. Nunc sit amet pretium arcu, nec aliquet justo. Cras convallis odio sed sem molestie, ac rutrum augue hendrerit. Aliquam vitae libero vel arcu mollis consequat. Quisque tincidunt elementum mauris in gravida. Integer facilisis diam varius blandit placerat. Integer eget nulla pharetra, commodo felis id, scelerisque diam. Phasellus ac enim in mauris posuere semper. Aliquam tristique lacinia lacus, a consectetur erat sagittis ut.\n\nDonec in elit et nulla tempus dictum bibendum quis ligula. Maecenas hendrerit velit vel dui ultricies semper. Sed accumsan, justo a accumsan euismod, sapien lectus dictum elit, sed vestibulum tellus enim in sem. Proin at magna ornare metus venenatis venenatis. Aliquam sapien leo, scelerisque sit amet tellus et, sagittis euismod erat. Nunc consequat auctor arcu sed mollis. Ut magna metus, vehicula sed iaculis non, consectetur nec risus. Integer nisl justo, interdum non dui et, semper rhoncus nulla. Vivamus luctus velit vitae libero pretium lacinia et eget mauris. Aenean imperdiet lectus ut augue finibus, non euismod sem porta. Maecenas odio quam, dictum quis purus ac, faucibus fermentum turpis. Mauris dignissim a odio sit amet scelerisque. Fusce tristique sapien in porttitor gravida.\n\nVivamus eget vestibulum dolor. Praesent commodo, mauris nec venenatis venenatis, nunc mauris eleifend dolor, eu consectetur dolor diam vel leo. Ut et sapien eget ligula dapibus ultrices dapibus non justo. Sed sit amet dapibus ligula. In sit amet malesuada neque. Quisque ullamcorper magna metus. Quisque accumsan enim massa, sit amet sollicitudin ex gravida eget. Donec est dolor, porta varius finibus sit amet, lobortis et sapien. Aenean vel augue sed dolor cursus mollis. Mauris viverra orci vitae nunc placerat, sed lacinia tortor tempor. Suspendisse aliquet tempus dolor at tempus. Morbi faucibus leo ut sagittis hendrerit.',
        read: false
    },
    {
        name: 'Robert Masen',
        email: 'r.f.masen@gmail.com',
        reason: 'employment',
        company: 'robertmasen.pizza',
        roll: 'Hiring Manager',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris nec erat congue, pellentesque mauris a, lacinia nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Vestibulum eu diam sed augue rhoncus maximus. In dignissim a elit eu hendrerit. Maecenas gravida et quam pretium malesuada. Suspendisse in neque pretium, viverra sapien eu, hendrerit dolor. Donec euismod in leo at porta. Aliquam in maximus metus.',
        read: false
    },
    {
        name: 'Robert Masen',
        email: 'r.f.masen@gmail.com',
        reason: 'employment',
        company: 'robertmasen.pizza',
        roll: 'Hiring Manager',
        content: 'Testing message content',
        read: false
    }
]

@Injectable()
export class MessagesService {


    constructor() {}

    getUnread(): Observable<Message> {
        return Observable.create(observer => {
                mocks.forEach(message => {
                    observer.next(message)
                })
            }
        )
    }

    getAll(): Observable<Message> {
        return Observable.create(observer =>{
            mocks.forEach(message => {
                observer.next(message)
            })
        })
    } 
}