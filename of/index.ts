import { getObservable } from './provider';

getObservable('Test Value')
    .subscribe(x => {
        console.log(x);
    });