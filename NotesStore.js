{/**addNote(state,name)
adds a note with the given name and state to the collection. 
if the passed name is mepty, then it thorws an error with the message
'Name cannot be empty"

if the passed name is non-empty but the given state is not a valid
state for a note, then it thorws an error with the message "Invalid
state (state)"

getNotes(state) returns an array of names of notes with the given state added so far
the names are returned in the order the corressponding notes were added
in addition to that:
if the given state is not a valid note state, then it thorws an error with the messgage "
invalid state(state)"

if no note is found in this state, it returns an empty array;

*/}

class NotesStore {
    collection = [];
    states = ['completed', 'active', 'others'];
    addNote(state, name){
        if(!name){
            throw new Error('Name cannot be empty');
        }
        if(!this.states.includes(state)){
            throw new Error(`Invalid state ${state}`)
        }
        this.collection.push({name, state});
    }

    getNotes(state){

        if(!this.states.includes(state)){
            throw new Error(`Invalid state ${state}`)
        }
        return this.states.filter((i) => i.state === state).map((i) =>i.name); // 배열안에서 state 와 주어진 스테이트들이 일치하는것들만 남긴후, 다시 그중에서 이름만 있는 배열로 변환.
       {/**getNotes(state) returns an array of names of notes with the given state added so far
the names are returned in the order the corressponding notes were added
in addition to that: */} 

    }
}