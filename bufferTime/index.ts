import { bufferTime } from 'rxjs';
import { getObservable, start } from './provider';

getObservable()
    .pipe(bufferTime(5000))
    .subscribe(x => {
        console.log(x);
    });

start();