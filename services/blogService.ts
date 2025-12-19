
import {
    collection,
    getDocs,
    getDoc,
    addDoc,
    deleteDoc,
    doc,
    query,
    orderBy,
    Timestamp
} from "firebase/firestore";
import { db } from "../firebase";
import { BlogPost } from "../types";

const COLLECTION_NAME = "blog_posts";

export const getBlogPosts = async (): Promise<BlogPost[]> => {
    const q = query(collection(db, COLLECTION_NAME), orderBy("createdAt", "desc"));
    const querySnapshot = await getDocs(q);
    return querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
    } as BlogPost));
};

export const getBlogPost = async (id: string): Promise<BlogPost | null> => {
    const docRef = doc(db, COLLECTION_NAME, id);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
        return { id: docSnap.id, ...docSnap.data() } as BlogPost;
    }
    return null;
};

export const addBlogPost = async (post: Omit<BlogPost, "id">) => {
    return await addDoc(collection(db, COLLECTION_NAME), {
        ...post,
        createdAt: Timestamp.now()
    });
};

export const deleteBlogPost = async (id: string) => {
    await deleteDoc(doc(db, COLLECTION_NAME, id));
};
