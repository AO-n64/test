<?php
ini_set('display_errors',1);
error_reporting(E_ALL);

define("MOVE","/usr/bin/sudo /home/pi/kotaro/move");
//define("ADDRESS","172.16.2.109");
define("ADDRESS","192.168.11.29");
define("USER","pi");
define("PASSWORD","kotaro");


if(!is_null($_GET["stat"])){

	$sconnection = ssh2_connect(ADDRESS,22);
	ssh2_auth_password($sconnection, USER, PASSWORD);

	$command = MOVE." ".$_GET["stat"];
	$stdio_stream = ssh2_exec($sconnection, $command);

}

?>
