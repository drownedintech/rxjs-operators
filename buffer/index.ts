import { Subject, buffer, interval } from 'rxjs';

const bufferTrigger$ = new Subject<void>();

interval(1000)
    .pipe(buffer(bufferTrigger$),)
    .subscribe(x => {
        console.log(x);
    });

setInterval(() => {
    bufferTrigger$.next();
}, 5000);