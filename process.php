<?php

$name = $_POST['username']; 

header("Location: hello.php?name=" . urlencode($name));
exit();

?>