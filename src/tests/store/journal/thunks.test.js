import { collection, deleteDoc, getDocs } from "firebase/firestore/lite"
import { FirebaseDB } from "../../../firebase/config"
import { addNewEmptyNote, deleteNoteById, savingNewNote, setActiveNote, setNotes, setPhotosToActiveNote, setSaving, updateNote } from "../../../store/journal/journalSlice"
import { startDeletingNote, startLoadingNotes, startNewNote, startSaveNote, startUploadingFiles } from "../../../store/journal/thunks"

describe('Pruebas en Journal Thunks', () => { 

    const dispatch = jest.fn()

    const getState = jest.fn()


    beforeEach(() => jest.clearAllMocks())

    test('startNewNote debe de crear una nueva nota en blanco', async() => { 
    //     const newNote = {
    //         body: '',
    //         title: '',
    //         id: expect.any( String ),
    //         date: expect.any( Number ),
    //         imageUrls: []
    //     }
    //     const uid = 'TEST-UID'
    //     getState.mockReturnValue({ auth: { uid: uid}})
    //     await startNewNote()(dispatch, getState)

    //     expect( dispatch ).toHaveBeenCalledWith( savingNewNote())
    //     expect( dispatch ).toHaveBeenCalledWith( addNewEmptyNote(newNote))
    //     expect( dispatch ).toHaveBeenCalledWith( setActiveNote(newNote))

    //     // Borrar de firebase
    //     const collectionRef= collection( FirebaseDB, `${uid}/journal/notes`)
    //     const docs = await getDocs( collectionRef)

    //     const deletePromises = []
    //     docs.forEach( doc => deletePromises.push( deleteDoc( doc.ref)))

    //     await Promise.all( deletePromises)

     },10000) 
    
    test('startLoandingNotes debe establecer la notas si el user existe', async() => { 
        
        // const loadNote = jest.fn()
        // const notes = []
        // const uid = 'TEST-UID'
        // getState.mockReturnValue({ auth: { uid: uid}})
        // await loadNote.mockResolvedValue(notes)
        
        // await startLoadingNotes()(dispatch, getState)
        // expect( dispatch ).toHaveBeenCalledWith( setNotes(notes))


     })

    test('startLoandingNotes debe mostrar un error si el user no existe', async() => { 
        
        // const loadNote = jest.fn()
        // const notes = []
        
        // getState.mockReturnValue({auth: {}})
        // await loadNote.mockResolvedValue(notes)
        
        // const resul = await startLoadingNotes()(dispatch, getState)
        // expect( resul ).toBe("El UID del usuario no existe")


     })

    test('startSaveNote debe de guardar la nota en firebase y llamar a updateNote', async() => { 

        // const uid = 'TEST-UID'
        // const note = {
        //     body: 'paaaaaaaaaaaa',
        //     title: 'paaaaaaaaaa',
        //     id: `${new Date().getTime()*2}`,
        //     date: new Date().getTime(),
        //     imageUrls: []
        // }
        // getState.mockReturnValue({ auth: {uid : uid},journal:{active: note}})
        

        // await startSaveNote()( dispatch, getState)
        // expect( dispatch ).toHaveBeenCalledWith( setSaving())
        // expect( dispatch ).toHaveBeenCalledWith( updateNote(note))
        // const collectionRef= collection( FirebaseDB, `${uid}/journal/notes`)
        // const docs = await getDocs( collectionRef)

        // const deletePromises = []
        // docs.forEach( doc => deletePromises.push( deleteDoc( doc.ref)))

        // await Promise.all( deletePromises)

     },10000)

    test('startUploadingFiles debe de llamar setSaving y al setPhotosToActiveNote, ', async() => { 
        // const files = []
        // const fileUpload = jest.fn()

        // fileUpload.mockReturnValue(`${new Date().getTime()}`)

        // await startUploadingFiles(files)(dispatch)

        // expect( dispatch ).toHaveBeenCalledWith( setSaving())
        // expect( dispatch ).toHaveBeenCalledWith( setPhotosToActiveNote([]))
     })

    test('startDeletingNote debe de llamar deleteNoteById', async() => {
        // const uid = 'TEST-UID'
        // const note = {
        //     body: 'paaaaaaaaaaaa',
        //     title: 'paaaaaaaaaa',
        //     id: `${new Date().getTime()*2}`,
        //     date: new Date().getTime(),
        //     imageUrls: []
        // }
        // getState.mockReturnValue({ auth: {uid : uid},journal:{active: note}})

        // await startDeletingNote()( dispatch, getState)

        // expect( dispatch ).toHaveBeenCalledWith( deleteNoteById(note.id))
     })
 })