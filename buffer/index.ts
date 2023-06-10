import { Subject, buffer } from 'rxjs';
import { getObservable, start } from './provider';

const bufferTrigger$ = new Subject<void>();

getObservable()
    .pipe(buffer(bufferTrigger$))
    .subscribe(x => {
        console.log(x);
    });

start();

setInterval(() => {
    bufferTrigger$.next();
}, 5000);