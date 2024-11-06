var events =  require('events');
var eventEmitter = new events.EventEmitter();
//Create event hndler
// var soundFunction = function (){
//   console.log("Evnet Occured");
// }
// arrow function

// var soundFunction = () =>{
//     console.log("Evnet Occured");
//   }

var soundFunction = () =>{
    console.log("Evnet Occured");
  }
eventEmitter.on('sound',soundFunction);//assing event handler to an event

eventEmitter.emit('sound'); //emit event