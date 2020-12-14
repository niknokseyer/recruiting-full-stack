<?php
/*

TODO:

If your system has PHP installed, you can easily test this script by using PHP's
built-in web server:

$ php -S localhost:8000 -t src/php/

You can then fetch() this script in JavaScript with the following URL:
http://localhost:8000/webservice.php

*/


header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET');
header('Access-Control-Max-Age: 1000');
header('Access-Control-Allow-Headers: Origin, Content-Type');
header('Content-Type: application/json');

$requestMethod = $_SERVER['REQUEST_METHOD'];

// retrieve the inbound parameters based on request type.
if (in_array($requestMethod, ["GET"])) {

    switch ($requestMethod) {
        case 'GET':
            $the_request = &$_GET;

            $file = "data.csv";
            $json = file_get_contents('../data/testdata.json');
            echo $json;
            break;
        default:
            header("HTTP/1.1 405 Method Not Allowed");
            $response_data = array("Message" => "Method not allowed.");
            echo json_encode($response_data);
    }

} else {
    header("HTTP/1.1 405 Method Not Allowed");
    $response_data = array("Message" => "Method not allowed.");
    echo json_encode($response_data);
}
