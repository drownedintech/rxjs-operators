import { Subject, audit, interval } from 'rxjs';

const auditTrigger$ = new Subject<void>();

interval(1000)
    .pipe(audit(() => auditTrigger$))
    .subscribe(x => {
        console.log(x);
    });

setInterval(() => {
    auditTrigger$.next();
}, 5000);