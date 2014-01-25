#pragma strict
 
var player : Transform;
var trackingSpeed = 2.0;
var zoomSpeed = 5.0;
 
function Start () {
 
if (player == null)
    player = GameObject.Find("Player").transform;
}
 
function Update () {
    var pos = player.position;
    pos.y = transform.position.y;
 
    transform.position = Vector3.Lerp(transform.position, pos, trackingSpeed * Time.deltaTime);
   
}