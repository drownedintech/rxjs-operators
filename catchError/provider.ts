import { BehaviorSubject, Observable, map } from "rxjs";

const value$ = new BehaviorSubject<number>(0);

export function getObservable(): Observable<number> {
    return value$.asObservable().pipe(
        map(count => {
            if (count === 10) {
                throw new Error('Error thrown at count of 10');
            }

            return count;
        }));
}

export function start(): void {
    setInterval(() => {
        const count = value$.getValue() + 1;
        value$.next(count);
    }, 1000);
}