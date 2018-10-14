
<?php

// Tworzymy zmienną dla imienia i nazwiska
$name = $_POST['nazwa_firmy'];

// Tworzymy zmienną dla adresu email
$email = $_POST['adres'];

// Tworzymy zmienną dla wiadomości
$content = $_POST['tresc_wiadomosci'];


// Podajesz adres email na który chcesz otrzymać wiadomość
$dokogo = "yokngalam@arturchochla.nazwa.pl";

// Podajesz tytuł jaki ma mieć ta wiadomość email
$tytul = "Formularz kontaktowy z YonGalam";

// Przygotowujesz treść wiadomości
$wiadomosc = "";
$wiadomosc .= "Imie i nazwisko: " . $name . "\n";
$wiadomosc .= "Email: " . $email . "\n";
$wiadomosc .= "Wiadomość: " . $content . "\n";

// Wysyłamy wiadomość
$sukces = mail($dokogo, $tytul, $wiadomosc, "Od: <$email>");

// Przekierowywujemy na potwierdzenie
if ($sukces){
 $message = "Wiadomość została wysłana !";
    echo "<script type='text/javascript'>alert('$message');</script>";
    
    print "<meta http-equiv=\"refresh\" content=\"0;URL=http://yokngalam.pl/\">";
}
else{
    $message2 = "Wiadomość nie została wysłana!";
    echo "<script type='text/javascript'>alert('$message2');</script>";
}
?>