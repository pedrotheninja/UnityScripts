#pragma strict

var status = 0;
function Start () {

}

function Update (){
   

 	if (Input.GetKeyDown(KeyCode.UpArrow)
 	 || Input.GetKeyDown(KeyCode.DownArrow)) { 
		if(status == 0){
			transform.Rotate(Vector3(0.0, -90.0, 0.0));
			status = 1;
		} else { 
			transform.Rotate(Vector3(0.0, 90.0, 0.0));
			status = 0;
		}
	}      
   if (Input.GetKeyDown (KeyCode.A)) {
			transform.Rotate(Vector3(0.0, 180.0, 0.0));
}
	if(status == 0){
	renderer.enabled = false;
	} else if(status == 1) {
	renderer.enabled = true;
	}
};

