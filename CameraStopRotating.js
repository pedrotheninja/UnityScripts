#pragma strict
var status = 0;
function Start () {

}

function Update (){
   

 	if(Input.GetKeyDown(KeyCode.RightArrow || KeyCode.LeftArrow)){ 
		if(status == 0){
			transform.Rotate(Vector3(0.0, -90.0, 0.0));
			status = 1;
		} else { 
			transform.Rotate(Vector3(0.0, 90.0, 0.0));
			status = 0;
		}
	}      
   
};

