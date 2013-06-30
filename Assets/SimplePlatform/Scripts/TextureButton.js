public var normalTexture : Texture2D;
public var rollOverTexture : Texture2D;
public var clickSound : AudioClip;

public var key : GameObject;
public var Player : GameObject;

public function OnMouseEnter () : void {  //Mouse Roll over function
	guiTexture.texture = rollOverTexture;
}

public function OnMouseExit() : void { //Mouse Roll out function
	guiTexture.texture = normalTexture;
}

public function OnMouseUp() : IEnumerator{ // Mouse up function
	audio.PlayOneShot(clickSound);
	yield new WaitForSeconds (1.0); //Wait for 0.5 secs. until do the next function
	//Create a new Player at the start position by cloning from our prefab
	Instantiate(Player, new Vector3(Player.transform.position.x, Player.transform.position.y, 0.0), Player.transform.rotation);
	//Create a new key at the start position by cloning from our prefab
	Instantiate(key, new Vector3(key.transform.position.x, key.transform.position.y, 0.0), key.transform.rotation);
	//Hide restart button
	guiTexture.enabled = false;
}

@script RequireComponent(AudioSource)

