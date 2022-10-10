/* 
There are three events that we need to take care of.
The order event will be fired when we place an order for some food. It should output Order placed for food, where food will be the variable passed to the emitter.
The doorbell event will be fired when our food is at the door. It should output RING RING!.
The payment event will be fired once we pay for our food at the door. It should output Enjoy your food, where food will be the variable passed to the emitter.
All the outputs should be done using console.log.
The placeOrder function on line 5 describes the flow of how the events might be emitted. It is only there to help you. You do not have to uncomment it.
*/



const EventEmitter = require( "events" )
const myEmitter = new EventEmitter()

myEmitter.on( "order", ( food ) =>{
    console.log("Order placed for", food);
} )

myEmitter.on("doorbell" ,( )=> {
    console.log("Ring RIng !!!");
} )

myEmitter.on( "payment", ( food ) =>
{
    console.log("enjoy your", food);
})