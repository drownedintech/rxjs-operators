import { Subject, bufferToggle, interval } from 'rxjs';
import { getObservable, start } from './provider';

const bufferStartTrigger$ = new Subject<void>();

getObservable()
    .pipe(bufferToggle(bufferStartTrigger$, () => interval(3000)))
    .subscribe(x => {
        console.log(x);
    });

start();

setInterval(() => {
    bufferStartTrigger$.next();
}, 5000);