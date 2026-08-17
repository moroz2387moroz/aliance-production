<?php
$user_name = htmlspecialchars($_POST['username']);
$user_phone = htmlspecialchars($_POST['userphone']);

$token = '8874877309:AAESxwuwGM9DfCmp4dvipIgXVUGUVZdQHFU';
$chat_id = '-5363982458';


// $formData = array(
//     'Клиент: ' => $user_name,
//     'Телефон: ' => $user_phone
// );

// $text = '';
// foreach ($formData as $key => $value) {
//     $text .= $key . "<b>" . $value . "</b>" . "%0A";
// }

// $sendToTelegram = fopen("https://api.telegram.org/bot{$token}/sendMessage?chat_id={$chat_id}&text={$text}&parse_mode=html", "r");

// if ($sendToTelegram) {
//     echo "super";
// } else {
//     echo "bad";
// }

//помощь от AI ангента

$text = "Клиент: <b>{$user_name}</b>\nТелефон: <b>{$user_phone}</b>";

$url = "https://api.telegram.org/bot{$token}/sendMessage";

$data = http_build_query([
    'chat_id' => $chat_id,
    'text' => $text,
    'parse_mode' => 'HTML',
]);

$ch = curl_init();
curl_setopt($ch, CURLOPT_URL, $url);
curl_setopt($ch, CURLOPT_POST, true);
curl_setopt($ch, CURLOPT_POSTFIELDS, $data);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);

$result = curl_exec($ch);
curl_close($ch);

$response = json_decode($result, true);

if (!empty($response['ok'])) {
    echo "super";
} else {
    echo "bad";
}

echo "Имя: " . $user_name . "<br>";
echo "Телефон: <i>" . $user_phone . "</i>";
?>