<?php
function sanitizeInput($input) {
    $sanitized_string = stripslashes($input);
    return htmlentities($sanitized_string);
}

function get_post($var) {
    $postvar = $_REQUEST[$var];
    return sanitizeInput($postvar);
}

function send_email($email, $message) {

        $date = date("Y-m-d");
        $to = "trevorj93@earthlink.net";
        $subject = "Message from Website";
        $header = "From: $email\r\n";
        $headers .= "MIME-Version: 1.0\r\n";
        $header .= "Content-Type: text/html\r\n";
        $body = <<<EMAILBODY
                <html>
                <header></header>
                <body>
                <table>
                    <tbody>
                    <tr>
                        <th>Email</th>
                        <td>$email</td>
                    </tr>
                    <tr>
                        <th>Message</th>
                        <td>$message</td>
                    </tr>
                    <tr>
                        <th>Date</th>
                        <td>$date</td>
                    </tr>
                    <tr>
                        <th>Name</th>
                        <td>$name</td>
                    </tr>
                    </tbody>
                </table>
                </body>
                </html>
EMAILBODY;

        return mail($to, $subject, $body, $header);
}

$postdata = file_get_contents("php://input");
$request = json_decode($postdata);
$email = sanitizeInput($request->email);
$name = sanitizeInput($request->name);
$message = sanitizeInput($request->message);

$arr = array(
      'sent'=>FALSE
);

//$name = get_post("name");
//$email = get_post("email");
//$message = get_post("message");

if(filter_var($email, FILTER_VALIDATE_EMAIL) && send_email($email, $message)) {
    $arr["sent"] = TRUE;

}

echo json_encode($arr);
?>