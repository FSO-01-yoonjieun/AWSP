import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyDywUmPXLlqTsaS7K91UgeAzOHtkTUCNmk",
  authDomain: "react-router-firebase-19d38.firebaseapp.com",
  projectId: "react-router-firebase-19d38",
  storageBucket: "react-router-firebase-19d38.firebasestorage.app",
  messagingSenderId: "1078334595932",
  appId: "1:1078334595932:web:abe17bef3562d5dd881799",
  measurementId: "G-GZYX62QE1P",
  databaseURL: 'https://react-router-firebase-19d38-default-rtdb.asia-southeast1.firebasedatabase.app/'
};

// 설정한 Firebase 프로젝트 초기화
const app = initializeApp(firebaseConfig);

// 프로젝트의 인증관련 설정이 담긴 객체
export const auth = getAuth(app);

// 구글 로그인 제공자
export const googleProvider = new GoogleAuthProvider()

// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);
export const rtdb = getDatabase(app);
