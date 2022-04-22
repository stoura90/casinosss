<?

if ( $action<>"double" && $action<>"initfc" && $lines<>"1" && $lines<>"3" && $lines<>"5" && $lines<>"7"&& $lines<>"9" )
{   
     $action = "error";
     echo "|lines in corrupt";
}

if ($action<>"double" &&  $action<>"initfc" &&  $bet < 1 || 25 < $bet )
{
    $action = "error";
    echo "|bet in corrupt";
}
if ($action<>"double" &&  $action<>"initfc" &&  $lines < 1 || 9 < $lines )
{
    $action = "error";
}

if ( $user_balance < $betallt )
{
    $action = "error";
    echo "|cash not range";
}
?>