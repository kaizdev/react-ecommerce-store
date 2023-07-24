import { db } from "../../config/firebase";
import {
    collection,
    getDocs,
    addDoc,
    onSnapshot,
    doc,
    getDoc,
    deleteDoc,
    updateDoc,
    increment,
} from "firebase/firestore";

// Get all the products
export const getAllProducts = async () => {
    const collectionRef = collection(db, "products");
    const querySnapshot = await getDocs(collectionRef);
    return querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
};

// Subscribe to the products
export const getProductSubscription = (callback) => {
    const collectionRef = collection(db, "products");
    const unsubscribe = onSnapshot(collectionRef, (snapshot) => {
        const productData = snapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
        }));
        callback(productData);
    });
    return unsubscribe;
};

// Search by Product ID
export const getProductById = async (id) => {
    const docRef = doc(db, "products", id);
    const snapshot = await getDoc(docRef);
    if (!snapshot.exists()) {
        throw new Error("Product not found");
    }
    return { id: snapshot.id, ...snapshot.data() };
};

// Toggle favourite item
export const updateFavouriteById = async (id) => {
    const docRef = doc(db, "products", id);
    const docSnapshot = await getDoc(docRef);
    if (docSnapshot.exists()) {
        // getting the current value of productFavourite (boolean)
        const productFavourite = docSnapshot.data().productFavourite;
        await updateDoc(docRef, {
            productFavourite: !productFavourite,
        });
    }
    return await getProductById(id);
};

// Adding to cart
export const increaseCartQtyById = async (id) => {
    const docRef = doc(db, "products", id);
    const docSnapshot = await getDoc(docRef);
    if (docSnapshot.exists()) {
        const product = docSnapshot.data();

        if (product.productStock > 0) {
            await updateDoc(docRef, {
                productCartQty: increment(1),
                productStock: increment(-1),
            });
        } else {
            console.log("No more product left in stock");
        }
    }
};

// Reducing from cart
export const decreaseCartQtyById = async (id) => {
    const docRef = doc(db, "products", id);
    const docSnapshot = await getDoc(docRef);
    if (docSnapshot.exists()) {
        const product = docSnapshot.data();

        if (product.productCartQty > 0) {
            await updateDoc(docRef, {
                productCartQty: increment(-1),
                productStock: increment(1),
            });
        } else {
            console.log("Cannot decrease quantity below 0");
        }
    }
};

// Update specific quantity to cart (typed)
export const increaseCartQtyInputValById = async (id, newQty) => {
    const docRef = doc(db, "products", id);
    const updatedDoc = await updateDoc(docRef, {
        productCartQty: newQty,
    });
};

// Remove from cart
export const removeFromCartById = async (id) => {
    const docRef = doc(db, "products", id);
    const docSnapshot = await getDoc(docRef);
    if (docSnapshot.exists()) {
        const product = docSnapshot.data();
        const newProductStock = product.productStock + product.productCartQty;

        await updateDoc(docRef, {
            productCartQty: 0,
            productStock: newProductStock,
        });
    }
};
