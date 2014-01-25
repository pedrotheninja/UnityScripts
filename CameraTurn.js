#pragma strict
var Camera_01 : GameObject;
var Destination : Transform;
function Start () {

 
}

function Update () {

 if(Input.GetKeyDown (KeyCode.RightArrow)){
 Camera_01.transform.rotation *= Quaternion.Euler(0, 90, 0);
}
}
