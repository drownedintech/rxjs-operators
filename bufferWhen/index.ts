import { bufferWhen, interval } from 'rxjs';
import { getObservable, start } from './provider';

getObservable()
    .pipe(bufferWhen(() => interval(3000)))
    .subscribe(x => {
        console.log(x);
    });

start();