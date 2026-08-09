// firebase-config.js
// 콘솔(index.html) + 오버레이 3종(overlay.html, score-overlay.html, vs-overlay.html)이
// 공통으로 사용하는 Firebase 초기화 모듈입니다.
// Firebase 프로젝트 설정이 바뀔 일이 있으면 이 파일 하나만 고치면 모든 페이지에 반영됩니다.

import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-app.js";
import { getDatabase } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-database.js";

const firebaseConfig = {
    apiKey: "AIzaSyDkFwwmrV9iFp3XnS3h2Oa0FI-T-3WbxPA",
    authDomain: "starcraft-console.firebaseapp.com",
    databaseURL: "https://starcraft-console-default-rtdb.firebaseio.com",
    projectId: "starcraft-console",
    storageBucket: "starcraft-console.firebasestorage.app",
    messagingSenderId: "928203238966",
    appId: "1:928203238966:web:4c5333274ffb3255ff3297",
    measurementId: "G-8KXBQ9J2MT"
};

const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);
