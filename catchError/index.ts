import { catchError, of } from 'rxjs';
import { getObservable, start } from './provider';

getObservable()
    .pipe(catchError((error: Error) => {
        return of('Error handled: ' + error.message)
    }))
    .subscribe(x => {
        console.log(x);
    });

start();