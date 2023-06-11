import { Subject, interval, takeUntil } from 'rxjs';

const unsubscribe$ = new Subject<void>();

interval(1000)
    .pipe(takeUntil(unsubscribe$))
    .subscribe(x => {
        console.log(x);
    });

setTimeout(() => {
    unsubscribe$.next();
}, 10000);