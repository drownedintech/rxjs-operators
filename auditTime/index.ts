import { auditTime } from 'rxjs';
import { getObservable, start } from './provider';

getObservable()
    .pipe(auditTime(10000))
    .subscribe(x => {
        console.log(x);
    });

start();