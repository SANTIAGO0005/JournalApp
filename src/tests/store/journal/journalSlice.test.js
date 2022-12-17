import {
  addNewEmptyNote,
  clearNotesLogout,
  journalSlice,
  savingNewNote,
  setActiveNote,
  setNotes,
  setSaving,
  updateNote,
  deleteNoteById,
} from "../../../store/journal/journalSlice";
import {
  addNewEmptyNoteState,
  clearNoteLogoutState,
  deleteNoteByIdState,
  initialState,
  note1,
  note2,
  note3,
  savingNewNoteState,
  setActiveNoteState,
  setNotesState,
  setPhotosToActiveNoteState,
  setSavingState,
  updateNoteState,
} from "../../fixtures/journalFixtures";

describe("Pruebas en el journalSlice", () => {
  test('debe de regresar el estado inicial y llamarse "journal"', () => {
    // const state = journalSlice.reducer(initialState, {});
    // expect(journalSlice.name).toBe("journal");
    // expect(state).toEqual(initialState);
  });

  test("debe de salvar la nota nueva del state", () => {
    // const state = journalSlice.reducer(savingNewNoteState, savingNewNote());
    // expect(state).toEqual(savingNewNoteState);
  });

  test("debe de agregar una nueva nota en el state", () => {
    // const state = journalSlice.reducer(
    //   addNewEmptyNoteState,
    //   addNewEmptyNote(note1)
    // );
    // expect(state).toEqual({ isSaving: false, notes: [note1] });
  });

  test("debe de activar la nota en state", () => {
    // const state = journalSlice.reducer(
    //   setActiveNoteState,
    //   setActiveNote(note1)
    // );
    // expect(state).toEqual(setActiveNoteState);
  });
  test("debe establecer la nota", () => {
    // const state = journalSlice.reducer(setNotesState, setNotes(note1));
    // expect(state).toEqual({ notes: note1 });
  });
  test("debe establecer el salvado", () => {
    // const state = journalSlice.reducer(setSavingState, setSaving());
    // expect(state).toEqual(setSavingState);
  });
  test("debe actualizar la nota", () => {
    // const state = journalSlice.reducer(updateNoteState, updateNote(note2));
    // expect(state).toEqual({
    //   isSaving: false,
    //   messageSaved: "nota 2, actualizada correctamente",
    //   notes: [note1, note2],
    // });
  });
  // test('debe establecer la photo activa de la nota', () => {
  //     const state = journalSlice.reducer(setPhotosToActiveNoteState, setPhotosToActiveNote(note1))
  //     expect( state ).toEqual()

  //  })
  test("debe limpiar las notas del store", () => {
    // const state = journalSlice.reducer(
    //   clearNoteLogoutState,
    //   clearNotesLogout()
    // );
    // expect(state).toEqual(clearNoteLogoutState);
  });
  test("debe limpiar las notas del store", () => {
    // const state = journalSlice.reducer(
    //   deleteNoteByIdState,
    //   deleteNoteById(note2.id)
    // );
    // expect(state).toEqual({"active": null, "notes": [note1, note3]});
  });
});
