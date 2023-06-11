import { catchError, interval, map, of } from 'rxjs';

interval(1000)
    .pipe(
        map(count => {
            if (count === 10) {
                throw new Error('Error thrown at count of 10');
            }

            return count;
        }),
        catchError((error: Error) => {
            return of('Error handled: ' + error.message)
        }))
    .subscribe(x => {
        console.log(x);
    });