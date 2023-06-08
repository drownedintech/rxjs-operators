import { Observable, of } from "rxjs";

export function getObservable(value: string): Observable<string> {
    return of(value)
}