import { of } from 'rxjs';

of('Test Value')
    .subscribe(x => {
        console.log(x);
    });