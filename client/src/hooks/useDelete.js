import { useState, useEffect } from 'react'
import firebaseApp from '../config/firebase'
import { getStorage, ref, deleteObject } from 'firebase/storage'

const storage = getStorage(firebaseApp)

export async function deleteImg(fileName) {
    const imageRef = ref(storage, fileName)
    try {
        const result = await deleteObject(imageRef)
        return result
    } catch (err) {
        console.log(err)
    }
}
