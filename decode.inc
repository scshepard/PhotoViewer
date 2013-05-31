<?php
	function Decode($string)
		{
			$string = str_replace("%25","%",$string);
			$string = str_replace("%20"," ",$string);
			$string = str_replace("%2B","+",$string);
			$string = str_replace("+"," ",$string);
			$string = str_replace("+"," ",$string);
			$string = str_replace("%2C",",",$string);
			$string = str_replace("%2F","/",$string);
			$string = str_replace("+"," ",$string);
			$string = str_replace("%40","@",$string);
			$string = str_replace("%27","'",$string);
	
			return $string;
		}

