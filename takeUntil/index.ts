import { Subject, takeUntil } from 'rxjs';
import { getObservable, start } from './provider';

const unsubscribe$ = new Subject<void>();

getObservable()
    .pipe(takeUntil(unsubscribe$))
    .subscribe(x => {
        console.log(x);
    });

start();

setTimeout(() => {
    unsubscribe$.next();
}, 10000);