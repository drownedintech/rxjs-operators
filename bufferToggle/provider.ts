import { BehaviorSubject, Observable } from "rxjs";

const value$ = new BehaviorSubject<number>(0);

export function getObservable(): Observable<number> {
    return value$.asObservable();
}

export function start(): void {
    setInterval(() => {
        const count = value$.getValue() + 1;
        value$.next(count);
    }, 1000);
}