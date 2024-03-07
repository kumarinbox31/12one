<?php 
$hostname = '';
$username = '';
$password = '';
$database = '';
$con = mysqli_connect($hostname,$username,$password,$database) or die('Connection failed.');
$post = $_POST;
if(isset($post['action'])){
    switch($post['action']){
        case 'downloadPanelBoook':
            
        break;
        default:
            echo 'function not found.';
        break;
    }
}else{
    echo 'Action not found.';
}

