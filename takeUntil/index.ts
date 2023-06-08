import { Subject, takeUntil } from 'rxjs';
import { getObservable, start } from './provider';

const unsubscribe$ = new Subject();

getObservable()
    .pipe(takeUntil(unsubscribe$))
    .subscribe(x => {
        console.log(x);
    });

start();

setTimeout(() => {
    unsubscribe$.next(undefined);
}, 10000);