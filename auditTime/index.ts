import { auditTime, interval } from 'rxjs';

interval(1000)
    .pipe(auditTime(5000))
    .subscribe(x => {
        console.log(x);
    });