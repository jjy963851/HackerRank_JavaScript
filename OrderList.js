{/**
function processOrderList that:

takes 3 arguments: an order list orderlist, a number orderId,
and a string state that is either 'processing' or 'Deilivered". orderlist is
an array of order objects. An order object has the follwing schema:

{ 
    id: Number,
    state: String,
}

Update the order list depending on the state and returns the updated list
if the state is 'Processing, it updates the object inthe list havin gid as 
orderedId, to have the state 'processing'

if the state is "devilivered" it deletes the object from the list
having the id of oderID

if there is no order with the given oderId then the functin
returns the list orderList Unchanged.
*/}


function processOrderList(orderList, orderId, state){


if(state['Delivered']){
    orderList = orderList.filter((a) => a.id !==orderId);
}else{
    orderList = orderList.map((a) => {if(a.id === orderId){
        a.state = "Processing"
    } return a})
}
return orderList;
}