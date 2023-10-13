function filledOrders(order, k) { //k stock 
    order.sort(function(a,b){
        return a-b;
    })
    let afford = 0;
    for(let i = 0; i < order.length; i++){ //어레이 안의 숫자들 관리
        if(order[i] <= k ){
            afford = afford+1;
            k = k-order[i] // 스톡에서 그것만큼빼기 
        }else{
            return afford;
        }
       
            
        }
        return afford;
    }