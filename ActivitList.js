function Activity(amount) {
    this.amount = amount;
 }
 
 Activity.prototype.setAmount = function(amount){
     if(amount <= 0 ){
         return false;
     }else{
         this.amount = amount
         return true;
     }
     
 }
 
 Activity.prototype.getAmount = function(){
     return this.amount;
 }
 
 
 function Payment (amount, receiver) {
     this.setAmount(amount);
     this.setReceiver(receiver);
     
     
 }
 
 Payment.prototype = Object.create(Activity.prototype); // inherits from parents activity
 
 Payment.prototype.setReceiver = function(receiver){
     this.receiver = receiver;
     return true;
 }
 
 Payment.prototype.getReceiver = function(){
     return this.receiver;
 }
 function Refund(amount, sender) {
     this.setAmount(amount);
     this.setSender(sender);
 }
 
 Refund.prototype = Object.create(Activity.prototype);
 
 Refund.prototype.setSender = function(sender){
     this.sender = sender;
     return true;
 }
 
 Refund.prototype.getSender = function(){
     return this.sender;
 }