<?php

error_reporting('E_ALL');
ini_set ( 'display_errors', 'On' );

function db_connect()
{

	$result = new mysqli("act", "pwd", "web", "table");

   if ($result == "failed")
     throw new Exception('Could not connect to database server');
   else
     return $result;
}
