import { useEffect, useState } from 'react'
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDatabase, ref, child, get, onValue } from "firebase/database";

const firebaseConfig = {
  apiKey: `${process.env['NEXT_PUBLIC_FIREBASE_KEY']}`,
  authDomain: "chunky-platform.firebaseapp.com",
  databaseURL: `${process.env['NEXT_PUBLIC_FIREBASE_URL']}`,
  projectId: "chunky-platform",
  storageBucket: "chunky-platform.firebasestorage.app",
  messagingSenderId: "749572323876",
  appId: "1:749572323876:web:1f484e8ccf4e0e900a36b1",
  measurementId: "G-3GLT0KHLW5"
}

const app = initializeApp(firebaseConfig)
const db = getDatabase(app);

export const useCarmel = () => {
    const [isListeningForUser, setIsListeningForUser] = useState(false)
    const [userTransactions, setUserTransactions] = useState<any>([])
    const [isLoading, setIsLoading] = useState(true)
    const [isReady, setIsReady] = useState(false)
    
    const [data, setData] = useState<any>({})

    useEffect(() => {
        if (isReady) return 
        onValue(ref(db, 'carmel'), (snapshot) => {
          let _data = snapshot.val()
          Object.keys(_data).map((section: string) => {
            _data[section] = (Array.isArray( _data[section]) ? _data[section] :  Object.values(_data[section])).filter((i: any) => i)
          })
          setData(_data)
          setIsLoading(false)
        })
        setIsReady(true)
    }, [])

    // const getData = async (path: string) => {
    //     const snapshot: any = await get(child(dbRef, path))
    //     console.log(snapshot)
    //     return snapshot && snapshot.exists() ? snapshot.val() : undefined
    // }

    // const listenForUserNotifications = (username: string) => {
    //     if (isListeningForUser) {
    //         return 
    //     }

    //     const topups = ref(db, '/transactions/' + username)        
    //     onValue(topups, (snapshot: any) => { 
    //         let all = [
    //             ...userTransactions,
    //             ...Object.values(snapshot.val() || {})
    //         ]
    //         all = all.sort((a: any, b: any) => b.timestamp - a.timestamp)
    //         setUserTransactions(all)
    //     })
    //     setIsListeningForUser(true)
    // }

    return { data, isLoading, isReady }
}