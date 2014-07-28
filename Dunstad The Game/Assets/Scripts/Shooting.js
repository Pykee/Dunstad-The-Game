#pragma strict

var projectile : Rigidbody;
var speed = 20;
var clone : Rigidbody;
var hands : Transform;

function Update () {
		if (networkView.isMine) {
									
								if (Input.GetMouseButtonDown(0)){
								
									clone = Network.Instantiate(projectile, hands.position, hands.rotation, 0);
									clone.velocity = transform.TransformDirection(Vector3(0, 0, speed));
									
									Network.Destroy(gameObject(2).viewID);
						
								}
		
					}
}