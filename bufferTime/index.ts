import { bufferTime, interval } from 'rxjs';

interval(1000)
    .pipe(bufferTime(5000))
    .subscribe(x => {
        console.log(x);
    });