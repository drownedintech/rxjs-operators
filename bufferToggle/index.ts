import { Subject, bufferToggle, interval } from 'rxjs';

const bufferStartTrigger$ = new Subject<void>();

interval(1000)
    .pipe(bufferToggle(bufferStartTrigger$, () => interval(3000)))
    .subscribe(x => {
        console.log(x);
    });

setInterval(() => {
    bufferStartTrigger$.next();
}, 5000);