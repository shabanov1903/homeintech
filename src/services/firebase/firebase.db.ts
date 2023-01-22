import app from './firebase.js';
import { getFirestore, collection, getDocs, Firestore, doc, setDoc, query, where } from 'firebase/firestore/lite';

export interface User {
    Name: string;
    Mail: string;
    Phone: string;
    Date: Date;
    IsChecked: boolean;
}

export class DB {
    db: Firestore;

    public constructor() {
        this.db = getFirestore(app);
    }

    async getAllUsers(): Promise<Array<User>> {
        const col = collection(this.db, 'Users');
        const snp = await getDocs(col);
        const lst = snp.docs.map(doc => doc.data() as User);

        return lst;
    }
    
    async getNotCheckedUsers(): Promise<Array<User>> {
        const q = query(collection(this.db, "Users"), where("IsChecked", "==", false));
        const snp = await getDocs(q);
        const lst = snp.docs.map(doc => doc.data() as User);

        return lst;
    }
    
    async addUser(user: User): Promise<void> {
        await setDoc(doc(this.db, 'Users', user.Mail), user);
    }
}
