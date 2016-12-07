/*

	Christian Buco
	Pd.1
	12/7/16
*/

var myArray = ["pig", "bacon", 10, true];

console.log(myArray[2]);

function Open(a){
	if(a == true){
		console.log("cook " + myArray[0] + " = " + myArray[2] + " " + myArray[1])
	}else{
		console.log("You Shall Not Pass!")
	}
}
Open(3);

var batman = {
	man : true,
	utilityBelt : ["smoke bomb", "knife", "grenade"],
	vehicle : "batmobile",
	sidekick : "robin"
}

function batmen(b){
	if(b == true){
		console.log("batman uses " + batman.utilityBelt[0] + ". He's " + batman.vehicle + " came with " + batman.sidekick + " inside.")
	}else{
		console.log("No, I'm the Bat")
	}
}
batmen(batman.man)
