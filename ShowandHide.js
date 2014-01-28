#pragma strict
var target1 : Transform;
var target2 : Transform;
function Start () {

}

function Update () {

	if (Input.GetKeyDown(KeyCode.UpArrow)
    || Input.GetKeyDown (KeyCode.DownArrow)) {
        // show
        renderer.enabled = true;
    }
 
    if (Input.GetKeyDown(KeyCode.D)
    || Input.GetKeyDown (KeyCode.A)) {
        // hide
        renderer.enabled = false;
    }
}
