import { getFirestore } from 'firebase/firestore';
import { initializeApp } from 'firebase/app';

const firebaseConfig = {
	apiKey: 'AIzaSyC0rkQC8YC1vmnNbi-6rPXWLicXZ1VpHUg',
	authDomain: 'fir-ecommerceproject.firebaseapp.com',
	projectId: 'fir-ecommerceproject',
	storageBucket: 'fir-ecommerceproject.appspot.com',
	messagingSenderId: '1034100498579',
	appId: '1:1034100498579:web:335fcee747acbf5fac6d66',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
