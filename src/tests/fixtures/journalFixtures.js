export const initialState = {
    isSaving: false,
    messageSaved: '',
    notes: [],
    active: null
}

export const savingNewNoteState = {
    isSaving: true
}

export const note1 = {
    body: '',
    title: 'nota 1',
    id: 'CBA321',
    date: '',
    imageUrls: ['fsfhnshf','akdhfksbhf']
}
export const note2 = {
    body: '',
    title: 'nota 2',
    id: 'ABC123',
    date: '',
    imageUrls: []
}
export const note3 = {
    body: '',
    title: '',
    id: 'ACB132',
    date: '',
    imageUrls: []
}

export const addNewEmptyNoteState = {
    notes: [],
    isSaving: false,
}

export const setActiveNoteState = {
    active: note1,
    messageSaved: ''
}

export const setNotesState ={
    notes: []
}
export const setSavingState ={
    isSaving: true,
    messageSaved: ''
}

export const updateNoteState = {
    isSaving: false,
    notes: [note1,note2],
    messageSaved: `${ note1.title}, actualizada correctamente`

}

// export const setPhotosToActiveNoteState = {
    
//     isSaving: false
// }
export const clearNoteLogoutState = {
    isSaving: false,
    messageSaved: '',
    notes: [],
    active: null
}

export const deleteNoteByIdState = {
    active: null,
    notes: [note1,note3,note2]
}