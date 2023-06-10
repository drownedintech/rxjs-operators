import { bufferCount } from 'rxjs';
import { getObservable, start } from './provider';

getObservable()
    .pipe(bufferCount(10))
    .subscribe(x => {
        console.log(x);
    });

start();