import { interval, map } from 'rxjs';

interval(1000)
    .pipe(map(x => `Value mapped: ${x}`))
    .subscribe(x => {
        console.log(x);
    });