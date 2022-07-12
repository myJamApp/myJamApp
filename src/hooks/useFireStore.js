import { useEffect, useState } from 'react';
import { db } from '~/firebase/firebase';

function useFireStore(collection, condition) {
    const [documents, setDocuments] = useState([]);

    useEffect(() => {
        let conllectionRef = db.collection(collection).orderBy('createAt');

        if (condition) {
            if (!condition.compareValue || !condition.compareValue.length) {
                return;
            }

            conllectionRef = conllectionRef.where(condition.fieldName, condition.operator, condition.compareValue);
        }

        const unsubcribe = conllectionRef.onSnapshot((snapshot) => {
            const documents = snapshot.docs.map((doc) => ({
                ...doc.data(),
                id: doc.id,
            }));

            setDocuments(documents);
        });

        return () => unsubcribe;
    }, [collection, condition]);

    return documents;
}

export default useFireStore;
