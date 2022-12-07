import { collection, doc, setDoc } from "firebase/firestore/lite"
import { FirebaseDB } from "../../firebase/config"
import { loadNote } from "../../helpers/loadNotes"
import { addNewEmptyNote, setActiveNote, setNotes } from "./journalSlice"


export const startNewNote = () => {
    return async(dispatch, getState) => {
        
        dispatch( savingNewNote())

        const { uid } = getState().auth
        // uid

        const newNote = {
            title: '',
            body: '',
            date: new Date().getTime()
        }

        const newDoc = doc( collection( FirebaseDB,`${uid}/journal/notes`))
        await setDoc( newDoc, newNote)
        
        newNote.id = newDoc.id

        //! dispatch
        dispatch( addNewEmptyNote(newNote))
        dispatch( setActiveNote(newNote))

    }
}

 export const startLoadingNotes = () => {
    return async( dispatch, getState) => {
        const { uid } = getState().auth

        if( !uid) throw new Error('El UID del usuario no existe')
        const notes = await loadNote( uid)

        dispatch( setNotes( notes))

    }
 }

