import { Subject } from 'rxjs';

export class Banner {
    private subject: Subject<boolean> = new Subject<boolean>();

    public open() {
        this.subject.next(true);
    }

    public getSubject = () => this.subject;
}
