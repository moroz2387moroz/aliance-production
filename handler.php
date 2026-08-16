<?php
$user_name = htmlspecialchars($_POST['username']);
$user_phone = htmlspecialchars($_POST['userphone']);

$token = '8874877309:AAESxwuwGM9DfCmp4dvipIgXVUGUVZdQHFU';
$chat_id = '-5363982458';

$formData = array(
    'Клиент: ' => $user_name,
    'Телефон: ' => $user_phone
);

$text = '';
foreach ($formData as $key => $value) {
    $text .= $key . "<b>" . $value . "</b>" . "%0A";
}

$sendToTelegram = fopen("https://api.telegram.org/bot{$token}/sendMessage?chat_id={$chat_id}&text={$text}&parse_mode=html", "r");

if (sendToTelegram) {
    echo "super";
} else {
    echo "bad";
}


echo "Имя: " . $user_name . "<br>";
echo "Телефон: <i>" . $user_phone . "</i>";
?>