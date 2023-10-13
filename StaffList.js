// add(name, age):
// parameters string  name and inteer age are passed to this function
//if age is greater than 20, it add the member with the given name to the collection
// else if age is less than or eqal to 20, it thorws an error with the message staff member age must be 
//greater than 20
// it is gurartneed that at any time, if a member is in the collection, then no other member with the same name will be added to the collection
//remove(name);
// if the member with the given name is in the collection, it removes the member from teh collection and returns true.
// else if the member with the given anme is no in the collection, it does nothing and returns false

// getSize():
// returns the number of members in the collection

class StaffList{
    staffList = [];
    
    

    add(name, age){
        if(Number(age) >20){
            this.staffList.push({name, age})
        }else{
            throw new Error('staff member age must be greater than 20');
        }
    }

    remove(name){
       const found = this.staffList.find((member) => member.name === name)
       if(found){
       this.staffList.filter((member) => member.name !== name);
        return true;
       }return false;
    }

    getSize(){
        return this.staffList.length;
    }
}