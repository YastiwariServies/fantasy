<?php
header("Content-Type: application/json");

if (isset($_POST['text'])) {
    $text = $_POST['text'];
    $file = "content.txt";

    if (file_put_contents($file, $text) !== false) {
        echo json_encode(["success" => true]);
    } else {
        echo json_encode(["success" => false, "error" => "Failed to write file"]);
    }
} else {
    echo json_encode(["success" => false, "error" => "No text received"]);
}
?>
