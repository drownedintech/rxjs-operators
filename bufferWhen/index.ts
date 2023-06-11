import { bufferWhen, interval } from 'rxjs';

interval(1000)
    .pipe(bufferWhen(() => interval(3000)))
    .subscribe(x => {
        console.log(x);
    });