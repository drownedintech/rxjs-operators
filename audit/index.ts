import { BehaviorSubject, Observable, Subject, audit, auditTime, interval, takeUntil } from 'rxjs';
import { getObservable, start } from './provider';

const auditTrigger$ = new Subject<void>();

getObservable()
    .pipe(audit(() => auditTrigger$))
    .subscribe(x => {
        console.log(x);
    });

start();

setInterval(() => {
    auditTrigger$.next();
}, 5000);