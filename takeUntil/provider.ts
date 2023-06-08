import { BehaviorSubject, Observable } from "rxjs";

const test = new BehaviorSubject<number>(0);

export function getObservable(): Observable<number> {
    return test.asObservable();
}

export function start(): void {
    setInterval(() => {
        const count = test.getValue() + 1;
        test.next(count);
    }, 1000);
}