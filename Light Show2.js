#pragma strict

var status = 0;
function Start () {

}

function Update (){
   

 	if (Input.GetKeyDown(KeyCode.UpArrow)
 	 || Input.GetKeyDown(KeyCode.DownArrow)) { 
		if(status == 0){
			status = 1;
		} else { 
			status = 0;
		}
	}      
 
	if(status == 0){
	light.intensity =0;
	} else if(status == 1) {
	light.intensity =8;
	
	}
};
