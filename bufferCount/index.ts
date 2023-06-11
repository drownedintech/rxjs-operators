import { bufferCount, interval } from 'rxjs';

interval(1000)
    .pipe(bufferCount(10))
    .subscribe(x => {
        console.log(x);
    });