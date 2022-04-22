<?php
function vercard( $dig )
{
    $c1 = array( 0, 13, 26, 39 );
    $c2 = array( 1, 14, 27, 40 );
    $c3 = array( 2, 15, 28, 41 );
    $c4 = array( 3, 16, 29, 42 );
    $c5 = array( 4, 17, 30, 43 );
    $c6 = array( 5, 18, 31, 44 );
    $c7 = array( 6, 19, 32, 45 );
    $c8 = array( 7, 20, 33, 46 );
    $c9 = array( 8, 21, 34, 47 );
    $c10 = array( 9, 22, 35, 48 );
    $c11 = array( 10, 23, 36, 49 );
    $c12 = array( 11, 24, 37, 50 );
    $c13 = array( 12, 25, 38, 51 );
    $mas = ${ "c".$dig };
    shuffle( &$mas );
    return $mas[0];
}
$allbet = $bet * $lines;
function winlimit( )
{
    $mysql = new mysqli('localhost', 'Admin', '12345678', 'matrix');
    ${ "bvbvbv" } = $mysql -> query( "select * from g_set_new where g_name='cocktail'" );
    ${ "hghghg" } = ${ "bvbvbv" }['g_bank'];

    return ${ "hghghg" };
}



$mysql = new mysqli('localhost', 'Admin', '12345678', 'matrix');
if ( isset( $_POST['action'] ) )
{
    $action = $_POST['action'];
}
else
{
    $action = "error";
}
$asc = explode( "|", $action );
$action = str_replace( "action=", "", $asc[0] );
$bet = str_replace( "bet=", "", $asc[1] );
$lines = str_replace( "lines=", "", $asc[2] );
$nado_card = $asc[1];
$betallt = $bet * $lines;
$row = $mysql -> query( "select * from merchants where username='".$l."'" );
$user_balance = floor( $row[3] );
if ( $bet < 0 || 25 < $bet )
{
    $action = "error";
}
if ( $line < 0 || 9 < $line )
{
    $action = "error";
}
if ( $user_balance < $betallt )
{
    $action = "error";
}
if ( $action == "error" )
{
    echo "error|error";
}
if ( $action == "init" )
{
    echo "OK|".$user_balance."|&extralife=10";
}
if ( $action == "play" )
{







    $stat_txt = "cocktail";
    $date = date( "d.m.y" );
    $time = date( "H:i:s" );
    $allbet = $bet * $lines;
$delitel = 225/$allbet;
$_SESSION['delitel'] = $delitel;
    $win1 = 0;
    $win2 = 0;
    $win3 = 0;
    $win4 = 0;
    $win5 = 0;
    $win6 = 0;
    $win7 = 0;
    $win8 = 0;
    $win9 = 0;
    $winall = 0;
    $mysql -> query( "update merchants set balance=balance-'".$allbet."' where username='$l'" );
    $rowb9 = $mysql -> query( "select * from g_set_new where g_name='cocktail'" );
    $proc4 = $rowb9['g_proc'];
    $allbet23 = $allbet / 100 * $proc4;
    $mysql -> query( "update g_set_new set g_bank=g_bank+'".$allbet23."' where g_name='cocktail'" );
    $row_bon = $mysql -> query( "select * from g_set_new where g_name='cocktail'"  );
    $g_rezim = $row_bon['g_rezim'];

    if ( $g_rezim == 1 )
    {
        $mx2 = array( 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 6, 6, 7, 7 );
    }
    if ( $g_rezim == 2 )
    {
        $mx2 = array( 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 6, 6, 6, 6, 6, 7, 7, 7, 7, 7 );
    }
    if ( $g_rezim == 3 )
    {
        $mx2 = array( 0, 0, 0, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 3, 3, 3, 3, 3, 4, 4, 4, 4, 4, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 7, 7, 7, 7, 7, 7, 7, 7 );
    }
    if ( $g_rezim == 4 )
    {
        $mx2 = array( 0, 0, 0, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 3, 3, 3, 3, 3, 4, 4, 4, 4, 4, 5, 5, 5, 5, 5, 6, 6, 6, 6, 6, 7, 7, 7, 7, 7 );
    }
    if ( $g_rezim == 5 )
    {
        $mx2 = array( 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 4, 4, 4, 4, 4, 5, 5, 5, 5, 5, 6, 6, 6, 6, 6, 7, 7, 7, 7, 7 );
    }
    $psym[0] = array( 0, 0, 0, 100, 500, 2000 ); // ;tkn cnhe,fx 
    $psym[1] = array( 0, 0, 0, 2, 3, 10 );  // вишня 
    $psym[2] = array( 0, 0, 0, 3, 5, 20 );  //абрикос 
    $psym[3] = array( 0, 0, 0, 5, 10, 50 ); // лимон
    $psym[4] = array( 0, 0, 0, 10, 30, 100 ); // яблоко
    $psym[5] = array( 0, 0, 0, 20, 50, 200 );  // груша
    $psym[6] = array( 0, 0, 0, 30, 100, 500 ); // арбуз 
    $psym[7] = array( 0, 0, 0, 200, 1000, 5000 ); // фруит 
    $psym[8] = array( 0, 0, 0, 0, 0, 0 );  // клуб 
    $m_line = array( 5, 6, 7, 8, 9, 0, 1, 2, 3, 4, 10, 11, 12, 13, 14, 0, 6, 12, 8, 4, 10, 6, 2, 8, 14, 0, 1, 7, 3, 4, 10, 11, 7, 13, 14, 5, 11, 12, 13, 9, 5, 1, 2, 3, 9 );
    $km2 = 0;
    $m_ln = 0;
    for ( ; $m_ln <= 8; ++$m_ln )
    {
        $km = 0;
        for ( ; $km <= 4; ++$km )
        {
            $lin[$m_ln][$km] = $m_line[$km2];
            ++$km2;
            continue;
        }
    }
    $row_bon =  $mysql -> query( "select * from g_set_new where g_name='cocktail'" );
    $ooo1 = $row_bon['g_shansbon'];
    $ooo2 = $row_bon['g_shanswin'];
    $shs = explode( "|", $ooo2 );
    if ( $lines == 1 )
    {
        $ooo2 = $shs[0];
    }
    if ( $lines == 3 )
    {
        $ooo2 = $shs[1];
    }
    if ( $lines == 5 )
    {
        $ooo2 = $shs[2];
    }
    if ( $lines == 7 )
    {
        $ooo2 = $shs[3];
    }
    if ( $lines == 9 )
    {
        $ooo2 = $shs[4];
    }
    $casbank = winlimit( );
$casbank /= $delitel;
    if ( $casbank < 5 )
    {
        $ooo2 = 2000;
    }
    $rnd_bonus = rand( 1, $ooo1 );
    $rnd_result = rand( 1, $ooo2 );
    if ( $rnd_result == 1 )
    {
        $mas_win = 1;
    }
    else
    {
        $mas_win = 0;
    }
    $casbank = winlimit( );
$casbank /= $delitel;
    $am = 0;
    while ( $am < 100000 )
    {
        $map_win1 = array( 0, 0, 0, 0, 0, 0, 0, 0, 0 );
        $map_win2 = array( 0, 0, 0, 0, 0, 0, 0, 0, 0 );
        $no = 0;
        srand( ( double )microtime( ) * 1000000 );
        shuffle( &$mx2 );
        $k = 0;
        for ( ; $k <= 14; ++$k )
        {
            $map[$k] = $mx2[$k];




 if ( $map[$k] == $map[$k-5] )
{
 $map[$k] = rand( 0, 7 );
}
 if ( $map[$k] == $map[$k-10] )
{
 $map[$k] = rand( 0, 7 );
}
 if ( $map[$k] == $map[$k-5] )
{
 $map[$k] = rand( 0, 7 );
}
 if ( $map[$k] == $map[$k-10] )
{
 $map[$k] = rand( 0, 7 );
}

 if ( $map[$k] == $map[$k-5] )
{
 $map[$k] = rand( 0, 7 );
}
 if ( $map[$k] == $map[$k-10] )
{
 $map[$k] = rand( 0, 7 );
}
 if ( $map[$k] == $map[$k-5] )
{
 $map[$k] = rand( 0, 7 );
}
 if ( $map[$k] == $map[$k-10] )
{
 $map[$k] = rand( 0, 7 );
}






        }
         $ln = 0;
        for ( ; $ln <= 8; ++$ln )
        {
            $s1 = $map[$lin[$ln][0]];
            $s2 = $map[$lin[$ln][1]];
            $s3 = $map[$lin[$ln][2]];
            $s4 = $map[$lin[$ln][3]];
            $s5 = $map[$lin[$ln][4]];
            if ( $s1 == 0 && $s2 == $s3 && $s2 <> 7 )
            {
                $s1 = $s2;
                $gg = $s2;
            }
            if ( $s2 == 0 && $s1 == $s3 && $s1 <> 7 )
            {
                $s2 = $s3;
                $gg = $s3;
            }
            if ( $s3 == 0 && $s1 == $s2 && $s2 <> 7 )
            {
                $s3 = $s2;
                $gg = $s2;
            }
            if ( $s1 == 0 && $s2 == 0 && $s3 <> 7 )
            {
                $s1 = $s3;
                $s2 = $s3;
                $gg = $s3;
            }
            if ( $s2 == 0 && $s3 == 0 && $s1 <> 7 )
            {
                $s2 = $s1;
                $s3 = $s1;
                $gg = $s1;
            }
            if ( $s1 == 0 && $s3 == 0 && $s2 <> 7 )
            {
                $s1 = $s2;
                $s3 = $s2;
                $gg = $s2;
            }
            if ( $s1 == 0 && $s2 == $s3 && $s3 == $s4 && $s2 <> 7 )
            {
                $s1 = $s2;
                $gg = $s2;
            }
            if ( $s2 == 0 && $s1 == $s3 && $s3 == $s4 && $s1 <> 7 )
            {
                $s2 = $s3;
                $gg = $s3;
            }
            if ( $s3 == 0 && $s1 == $s2 && $s2 == $s3 && $s2 <> 7 )
            {
                $s3 = $s2;
                $gg = $s2;
            }
            if ( $s4 == 0 && $s1 == $s2 && $s2 == $s3 && $s2 <> 7 )
            {
                $s4 = $s2;
                $gg = $s2;
            }
            if ( $s1 == 0 && $s2 == 0 && $s3 == $s4 && $s3 <> 7 )
            {
                $s1 = $s3;
                $s2 = $s3;
                $gg = $s3;
            }
            if ( $s1 == 0 && $s3 == 0 && $s2 == $s4 && $s2 <> 7 )
            {
                $s1 = $s2;
                $s3 = $s2;
                $gg = $s2;
            }
            if ( $s1 == 0 && $s4 == 0 && $s2 == $s3 && $s2 <> 7 )
            {
                $s1 = $s2;
                $s4 = $s2;
                $gg = $s2;
            }
            if ( $s2 == 0 && $s3 == 0 && $s1 == $s4 && $s1 <> 7 )
            {
                $s2 = $s1;
                $s3 = $s1;
                $gg = $s1;
            }
            if ( $s2 == 0 && $s4 == 0 && $s1 == $s3 && $s1 <> 7 )
            {
                $s2 = $s1;
                $s4 = $s1;
                $gg = $s1;
            }
            if ( $s3 == 0 && $s4 == 0 && $s1 == $s2 && $s1 <> 7 )
            {
                $s3 = $s1;
                $s4 = $s1;
                $gg = $s1;
            }
            if ( $s1 == $s2 && $s2 == $s3 )
            {
                $map_win1[$ln] = $psym[$s2][3];
            }
            if ( $s1 == $s2 && $s2 == $s3 && $s3 == $s4 )

            {
                $map_win1[$ln] = $psym[$s3][4];
            }
            if ( $s1 == $s2 && $s2 == $s3 && $s3 == $s4 && $s4 == $s5 )

            {
                $map_win1[$ln] = $psym[$s3][5];
            }






        }
        $ln = 0;
        for ( ; $ln <= 8; ++$ln )
        {
            $s1 = $map[$lin[$ln][0]];
            $s2 = $map[$lin[$ln][1]];
            $s3 = $map[$lin[$ln][2]];
            $s4 = $map[$lin[$ln][3]];
            $s5 = $map[$lin[$ln][4]];

            if ( $s5 == 0 && $s4 == $s3 && $s4 <> 7 )
            {
                $s5 = $s4;
                $gg = $s4;
            }
            if ( $s4 == 0 && $s5 == $s3 && $s5 <> 7 )
            {
                $s4 = $s3;
                $gg = $s3;
            }
            if ( $s3 == 0 && $s5 == $s4 && $s5 <> 7 )
            {
                $s3 = $s4;
                $gg = $s4;
            }
            if ( $s5 == 0 && $s4 == 0 && $s3 <> 7 )
            {
                $s5 = $s3;
                $s4 = $s3;
                $gg = $s3;
            }
            if ( $s4 == 0 && $s3 == 0 && $s5 <> 7 )
            {
                $s4 = $s5;
                $s3 = $s5;
                $gg = $s5;
            }
            if ( $s5 == 0 && $s3 == 0 && $s4 <> 7 )
            {
                $s5 = $s4;
                $s3 = $s4;
                $gg = $s4;
            }
            if ( $s5 == 0 && $s4 == $s3 && $s3 == $s2 && $s4 <> 7 )
            {
                $s5 = $s2;
                $gg = $s2;
            }
            if ( $s4 == 0 && $s5 == $s3 && $s3 == $s2 && $s5 <> 7 )
            {
                $s4 = $s3;
                $gg = $s3;
            }
            if ( $s3 == 0 && $s5 == $s4 && $s4 == $s3 && $s5 <> 7 )
            {
                $s3 = $s4;
                $gg = $s4;
            }
            if ( $s2 == 0 && $s5 == $s4 && $s5 == $s3  && $s5 <> 7)
            {
                $s2 = $s4;
                $gg = $s4;
            }
            if ( $s5 == 0 && $s4 == 0 && $s3 == $s2 && $s3 <> 7 )
            {
                $s5 = $s3;
                $s4 = $s3;
                $gg = $s3;
            }
            if ( $s5 == 0 && $s3 == 0 && $s4 == $s2 && $s4 <> 7 )
            {
                $s5 = $s4;
                $s3 = $s4;
                $gg = $s4;
            }
            if ( $s5 == 0 && $s2 == 0 && $s3 == $s4 && $s4 <> 7 )
            {
                $s5 = $s4;
                $s2 = $s4;
                $gg = $s4;
            }
            if ( $s4 == 0 && $s3 == 0 && $s5 == $s2 && $s5 <> 7 )
            {
                $s4 = $s5;
                $s3 = $s5;
                $gg = $s5;
            }
            if ( $s4 == 0 && $s2 == 0 && $s5 == $s3 && $s5 <> 7 )
            {
                $s4 = $s5;
                $s2 = $s5;
                $gg = $s5;
            }
            if ( $s3 == 0 && $s2 == 0 && $s5 == $s4 && $s5 <> 7 )
            {
                $s3 = $s5;
                $s2 = $s5;
                $gg = $s5;
            }
            if ( $s1 == 0 && $s2 == $s3 && $s3 == $s4 && $s4 == $s5 && $s2 <> 7 )
            {
                $s1 = $s2;
                $gg = $s2;
            }
            if ( $s2 == 0 && $s1 == $s3 && $s3 == $s4 && $s4 == $s5 && $s1 <> 7 )
            {
                $s2 = $s3;
                $gg = $s3;
            }
            if ( $s3 == 0 && $s1 == $s2 && $s2 == $s4 && $s4 == $s5 && $s1 <> 7 )
            {
                $s3 = $s2;
                $gg = $s2;
            }
            if ( $s4 == 0 && $s1 == $s2 && $s2 == $s3 && $s3 == $s5 && $s1 <> 7 )
            {
                $s4 = $s2;
                $gg = $s2;
            }
            if ( $s1 == 0 && $s2 == 0 && $s3 == $s4 && $s4 == $s5 && $s5 <> 7 )
            {
                $s1 = $s3;
                $s2 = $s3;
                $gg = $s3;
            }
            if ( $s1 == 0 && $s3 == 0 && $s2 == $s4 && $s4 == $s5 && $s2 <> 7 )
            {
                $s1 = $s2;
                $s3 = $s2;
                $gg = $s2;
            }
            if ( $s1 == 0 && $s4 == 0 && $s2 == $s3 && $s3 == $s5 && $s2 <> 7 )
            {
                $s1 = $s2;
                $s4 = $s2;
                $gg = $s2;
            }
            if ( $s1 == 0 && $s5 == 0 && $s2 == $s3 && $s3 == $s4 && $s2 <> 7 )
            {
                $s1 = $s2;
                $s5 = $s2;
                $gg = $s2;
            }
            if ( $s2 == 0 && $s3 == 0 && $s1 == $s4 && $s4 == $s5 && $s1 <> 7 )
            {
                $s2 = $s1;
                $s3 = $s1;
                $gg = $s1;
            }
            if ( $s2 == 0 && $s4 == 0 && $s1 == $s3 && $s3 == $s5 && $s1 <> 7 )
            {
                $s2 = $s1;
                $s4 = $s1;
                $gg = $s1;
            }
            if ( $s2 == 0 && $s5 == 0 && $s1 == $s3 && $s3 == $s4 && $s1 <> 7 )
            {
                $s2 = $s1;
                $s5 = $s1;
                $gg = $s1;
            }
            if ( $s3 == 0 && $s4 == 0 && $s1 == $s2 && $s2 == $s5 && $s1 <> 7 )
            {
                $s3 = $s1;
                $s4 = $s1;
                $gg = $s1;
            }
            if ( $s3 == 0 && $s5 == 0 && $s1 == $s2 && $s2 == $s4 && $s1 <> 7 )
            {
                $s3 = $s1;
                $s5 = $s1;
                $gg = $s1;
            }
            if ( $s4 == 0 && $s5 == 0 && $s1 == $s2 && $s2 == $s3 && $s1 <> 7 )
            {
                $s4 = $s1;
                $s5 = $s1;
                $gg = $s1;
            }
            if ( $s5 == $s4 && $s4 == $s3 )
            {
                $map_win2[$ln] = $psym[$s4][3];
            }
            if ( $s5 == $s4 && $s4 == $s3 && $s3 == $s2 )
            {
                $map_win2[$ln] = $psym[$s3][4];
            }
            if ( $s5 == $s4 && $s4 == $s3 && $s3 == $s2 && $s2 == $s1 )

            {
                $map_win2[$ln] = $psym[$s3][5];
            }

            if ( $map_win2[$ln] > $map_win1[$ln] )
{
$map_win1[$ln] = 0;
}


            if ( $map_win1[$ln] >= $map_win2[$ln] )
{
$map_win2[$ln] = 0;
}





        }

        $k = 1;
        for ( ; $k <= 15; ++$k )
        {
            ${ "sym".$k } = $map[$k - 1];
        }
        $k = 1;
        for ( ; $k <= 9; ++$k )
        {
            ${ "win_1".$k } = $bet * $map_win1[$k - 1];
        }
        $k = 1;
        for ( ; $k <= 9; ++$k )
        {
            ${ "win_2".$k } = $bet * $map_win2[$k - 1];
        }
        $k = 1;
        for ( ; $k <= 9; ++$k )
        {
            ${ "win".$k } = ${ "win_1".$k } + ${ "win_2".$k };
        }
        if ( $lines == 1 )
        {
            $win2 = 0;
            $win3 = 0;
            $win4 = 0;
            $win5 = 0;
            $win6 = 0;
            $win7 = 0;
            $win8 = 0;
            $win9 = 0;
        }
        if ( $lines == 2 )
        {
            $win3 = 0;
            $win4 = 0;
            $win5 = 0;
            $win6 = 0;
            $win7 = 0;
            $win8 = 0;
            $win9 = 0;
        }
        if ( $lines == 3 )
        {
            $win4 = 0;
            $win5 = 0;
            $win6 = 0;
            $win7 = 0;
            $win8 = 0;
            $win9 = 0;
        }
        if ( $lines == 4 )
        {
            $win5 = 0;
            $win6 = 0;
            $win7 = 0;
            $win8 = 0;
            $win9 = 0;
        }
        if ( $lines == 5 )
        {
            $win6 = 0;
            $win7 = 0;
            $win8 = 0;
            $win9 = 0;
        }
        if ( $lines == 6 )
        {
            $win7 = 0;
            $win8 = 0;
            $win9 = 0;
        }
        if ( $lines == 7 )
        {
            $win8 = 0;
            $win9 = 0;
        }
        if ( $lines == 8 )
        {
            $win9 = 0;
        }
        $winall = $win1 + $win2 + $win3 + $win4 + $win5 + $win6 + $win7 + $win8 + $win9;
        ++$am;
        if ( $mas_win == 1 && $winall == 0 )
        {
            $am = 10;
        }
        if ( $mas_win == 0 && $winall == 0 )
        {
            $am = 120000;
        }
        if ( $mas_win == 0 && $winall == 0 && $rnd_bonus == 1 )
        {
            $am = 120000;
            $startbon = 1;
        }
        if ( $mas_win == 1 && 0 < $winall )
        {
            $am = 120000;
        }





        if ( $casbank <= $winall )
        {
            $am = 10;
$mas_win = 0;
        }

    }
    if ( $startbon == 1 )
    {
        $tttb1 = array( 1, 6, 11 );
        $tttb2 = array( 2, 7, 12 );
        $tttb3 = array( 3, 8, 13 );
        $tttb4 = array( 4, 9, 14 );
        $tttb5 = array( 5, 10, 15 );
        shuffle( &$tttb1 );
        $rnd_sym_bon1 = $tttb1[0];
        shuffle( &$tttb2 );
        $rnd_sym_bon2 = $tttb2[0];
        shuffle( &$tttb3 );
        $rnd_sym_bon3 = $tttb3[0];
        shuffle( &$tttb4 );
        $rnd_sym_bon4 = $tttb4[0];
        shuffle( &$tttb5 );
        $rnd_sym_bon5 = $tttb5[0];
        $bb_count_map = array( 3, 3, 3, 3, 3, 4, 4, 5, 5 );
        shuffle( &$bb_count_map );
        $goldsvet = $bb_count_map[0];
        if ( $goldsvet == 3 )
        {
            $goldsvet2 = rand( 1, 4 );
            if ( $goldsvet2 == 1 )
            {
                ${ "sym".$rnd_sym_bon3 } = 8;
                ${ "sym".$rnd_sym_bon4 } = 8;
                ${ "sym".$rnd_sym_bon5 } = 8;
            }
            if ( $goldsvet2 == 2 )
            {
                ${ "sym".$rnd_sym_bon1 } = 8;
                ${ "sym".$rnd_sym_bon3 } = 8;
                ${ "sym".$rnd_sym_bon5 } = 8;
            }
            if ( $goldsvet2 == 3 )
            {
                ${ "sym".$rnd_sym_bon1 } = 8;
                ${ "sym".$rnd_sym_bon2 } = 8;
                ${ "sym".$rnd_sym_bon4 } = 8;
            }
            if ( $goldsvet2 == 4 )
            {
                ${ "sym".$rnd_sym_bon1 } = 8;
                ${ "sym".$rnd_sym_bon2 } = 8;
                ${ "sym".$rnd_sym_bon3 } = 8;
            }
            $bb_win_map = array( 0, 0, 0, 2, 2, 2, 5, 5, 5, 10, 10, 20, 50, 70, 100, 100, 100 );
        }
        if ( $goldsvet == 4 )
        {
            ${ "sym".$rnd_sym_bon2 } = 8;
            ${ "sym".$rnd_sym_bon3 } = 8;
            ${ "sym".$rnd_sym_bon4 } = 8;
            ${ "sym".$rnd_sym_bon5 } = 8;
            $bb_win_map = array( 0, 0, 0, 2, 2, 2, 5, 5, 5, 10, 10, 20, 50, 70, 100, 100, 100, 100 );
        }
        if ( $goldsvet == 5 )
        {
            ${ "sym".$rnd_sym_bon1 } = 8;
            ${ "sym".$rnd_sym_bon2 } = 8;
            ${ "sym".$rnd_sym_bon3 } = 8;
            ${ "sym".$rnd_sym_bon4 } = 8;
            ${ "sym".$rnd_sym_bon5 } = 8;
            $bb_win_map = array( 0, 0, 0, 2, 2, 2, 5, 5, 5, 10, 10, 20, 50, 70, 100, 100, 100, 100, 100 );
        }
        $casbank = winlimit( );
$casbank /= $delitel;
        $am444 = 0;
        while ( $am444 < 1000000 )
        {
            ++$am444;
            shuffle( &$bb_win_map );
            $bb_win = $bb_win_map[0];
            $bonus_win = $bb_win * $allbet;
            if ( 0 < $bonus_win )
            {
                $am444 = 1500000;
            }



            if ( $casbank <= $bonus_win )
            {
                $am444 = 1;

            }
            if ( $bonus_win == 0 )
            {
                $am444 = 1500000;            }

        }

















        if ( $bb_win == 0 )
        {



            $bonus_win = 0;
            if ( $goldsvet == 3 )
            {
                $mega = rand( 1, 3 );
            if ( $mega == 1 )
                {
                $bs1 = rand( 2, 6 );
                $bs2 = rand( 2, 6 );
                $bs3 = rand( 2, 6 );

                $bonusik = "&reel=".$bs1."|$bs2|$bs3|0|$bonus_win";
                }

            if ( $mega == 2 )
                {
                $bs1 = array( 1, 2, 3, 4, 5, 6  );
                shuffle( &$bs1 );
                $bs01 = array( 4, 8, 12, 16, 21, 25 );
                shuffle( &$bs01 );
                $bss1 = $bs1[0];
                $bss2 = $bs1[1];
                $bss3 = $bs1[2];
                $bss0 = $bs01[0];
                $bs012 = array( 0, 7, 13, 20 );
                shuffle( &$bs012 );
                $bss12 = $bs1[3];
                $bss22 = $bs1[4];
                $bss32 = $bs1[5];
                $bss02 = $bs012[0];
                $bonusik = "&reel=".$bss1."|$bss2|$bss3|$bss0|$bonus_win|reel=$bss12|$bss22|$bss32|$bss02|$bonus_win";
                }

            if ( $mega == 3 )
                {
                $bs1 = array( 1, 2, 0, 4, 5, 6  );
                shuffle( &$bs1 );
                $bs01 = array( 3, 10, 23 );
                shuffle( &$bs01 );
                $bss1 = $bs1[1];
                $bss2 = $bs1[2];
                $bss3 = $bs1[3];
                $bss0 = $bs01[0];


                $bs12 = array( 0, 2, 3, 4, 5, 6  );
                shuffle( &$bs12 );
                $bs02 = array( 2, 9, 15, 18, 22 );
                shuffle( &$bs02 );
                $bss12 = $bs12[1];
                $bss22 = $bs12[2];
                $bss32 = $bs12[3];
                $bss02 = $bs02[0];

                $bs13 = array( 0, 1, 2, 3, 4, 5, 6  );
                shuffle( &$bs13 );
                $bs03 = array( 0, 7, 13, 20 );
                shuffle( &$bs03 );
                $bss13 = $bs13[1];
                $bss23 = $bs13[2];
                $bss33 = $bs13[3];
                $bss03 = $bs03[0];
                $bonusik = "&reel=$bss1|$bss2|$bss3|$bss0|$bonus_win|reel=$bss12|$bss22|$bss32|$bss02|$bonus_win|reel=$bss13|$bss23|$bss33|$bss03|$bonus_win";
                }




            }
            if ( $goldsvet == 4 )
            {
            $mega = rand( 1, 3 );
            if ( $mega == 1 ) 
             {
                $bs1 = array( 1, 2, 0, 4, 5, 6  );
                shuffle( &$bs1 );
                $bs01 = array( 3, 10, 23 );
                shuffle( &$bs01 );
                $bss1 = $bs1[1];
                $bss2 = $bs1[2];
                $bss3 = $bs1[3];
                $bss0 = $bs01[0];


                $bs12 = array( 0, 1, 2, 3, 4, 5, 6  );
                shuffle( &$bs12 );
                $bs02 = array( 0, 7, 13, 20 );
                shuffle( &$bs02 );
                $bss12 = $bs12[1];
                $bss22 = $bs12[2];
                $bss32 = $bs12[3];
                $bss02 = $bs02[0];

                $bs13 = array( 0, 1, 2, 3, 4, 5, 6  );
                shuffle( &$bs13 );
                $bs03 = array( 0, 7, 13, 20 );
                shuffle( &$bs03 );
                $bss13 = $bs13[1];
                $bss23 = $bs13[2];
                $bss33 = $bs13[3];
                $bss03 = $bs03[0];
                $bonusik = "&reel=$bss1|$bss2|$bss3|$bss0|$bonus_win|reel=$bss12|$bss22|$bss32|$bss02|$bonus_win|reel=$bss13|$bss23|$bss33|$bss03|$bonus_win";
             }   
            if ( $mega == 2 ) 
             {
                $bs1 = array( 1, 2, 3, 4, 5, 6  );
                shuffle( &$bs1 );
                $bs01 = array( 0, 7, 13, 20 );
                shuffle( &$bs01 );
                $bss1 = $bs1[1];
                $bss2 = $bs1[2];
                $bss3 = $bs1[3];
                $bss0 = $bs01[0];


                $bs12 = array( 1, 2, 0, 4, 5, 6  );
                shuffle( &$bs12 );
                $bs02 = array( 3, 10, 23 );
                shuffle( &$bs02 );
                $bss12 = $bs12[1];
                $bss22 = $bs12[2];
                $bss32 = $bs12[3];
                $bss02 = $bs02[0];

                $bs13 = array( 0, 1, 2, 3, 4, 5, 6  );
                shuffle( &$bs13 );
                $bs03 = array( 0, 7, 13, 20 );
                shuffle( &$bs03 );
                $bss13 = $bs13[1];
                $bss23 = $bs13[2];
                $bss33 = $bs13[3];
                $bss03 = $bs03[0];
                $bonusik = "&reel=$bss1|$bss2|$bss3|$bss0|$bonus_win|reel=$bss12|$bss22|$bss32|$bss02|$bonus_win|reel=$bss13|$bss23|$bss33|$bss03|$bonus_win";
             }

            if ( $mega == 3 ) 
             {
                $bs1 = array( 1, 2, 3, 4, 0, 6  );
                shuffle( &$bs1 );
                $bs01 = array( 6 );
                shuffle( &$bs01 );
                $bss1 = $bs1[1];
                $bss2 = $bs1[2];
                $bss3 = $bs1[3];
                $bss0 = $bs01[0];


                $bs12 = array( 1, 2, 3, 4, 5, 0  );
                shuffle( &$bs12 );
                $bs02 = array( 19 );
                shuffle( &$bs02 );
                $bss12 = $bs12[1];
                $bss22 = $bs12[2];
                $bss32 = $bs12[3];
                $bss02 = $bs02[0];

                $bs13 = array( 1, 0, 3, 4, 5, 6  );
                shuffle( &$bs13 );
                $bs03 = array( 5, 11, 17, 24 );
                shuffle( &$bs03 );
                $bss13 = $bs13[1];
                $bss23 = $bs13[2];
                $bss33 = $bs13[3];
                $bss03 = $bs03[0];

                $bs14 = array( 0, 1, 2, 3, 4, 5, 6  );
                shuffle( &$bs14 );
                $bs04 = array( 0, 7, 13, 20 );
                shuffle( &$bs04 );
                $bss14 = $bs14[1];
                $bss24 = $bs14[2];
                $bss34 = $bs14[3];
                $bss04 = $bs04[0];

                $bs15 = array( 0, 1, 2, 3, 4, 5, 6  );
                shuffle( &$bs15 );
                $bs05 = array( 0, 7, 13, 20 );
                shuffle( &$bs05 );
                $bss15 = $bs15[1];
                $bss25 = $bs15[2];
                $bss35 = $bs15[3];
                $bss05 = $bs05[0];

                $bonusik = "&reel=$bss1|$bss2|$bss3|$bss0|$bonus_win|reel=$bss12|$bss22|$bss32|$bss02|$bonus_win|reel=$bss13|$bss23|$bss33|$bss03|$bonus_win|reel=$bss14|$bss24|$bss34|$bss04|$bonus_win|reel=$bss15|$bss25|$bss35|$bss05|$bonus_win";
             } 






            }
            if ( $goldsvet == 5 )
            {
           $mega = rand( 1, 3 );
            if ( $mega == 1 ) 
             {
                $bs1 = array( 0, 1, 2, 3, 4, 5, 6  );
                shuffle( &$bs1 );
                $bs01 = array( 0, 7, 13, 20 );
                shuffle( &$bs01 );
                $bss1 = $bs1[1];
                $bss2 = $bs1[2];
                $bss3 = $bs1[3];
                $bss0 = $bs01[0];


                $bs12 = array( 0, 1, 2, 3, 4, 5, 6  );
                shuffle( &$bs12 );
                $bs02 = array( 0, 7, 13, 20 );
                shuffle( &$bs02 );
                $bss12 = $bs12[1];
                $bss22 = $bs12[2];
                $bss32 = $bs12[3];
                $bss02 = $bs02[0];

                $bs13 = array( 0, 1, 2, 3, 4, 5, 6  );
                shuffle( &$bs13 );
                $bs03 = array( 0, 7, 13, 20 );
                shuffle( &$bs03 );
                $bss13 = $bs13[1];
                $bss23 = $bs13[2];
                $bss33 = $bs13[3];
                $bss03 = $bs03[0];

                $bonusik = "&reel=$bss1|$bss2|$bss3|$bss0|$bonus_win|reel=$bss12|$bss22|$bss32|$bss02|$bonus_win|reel=$bss13|$bss23|$bss33|$bss03|$bonus_win";
             }   

            if ( $mega == 2 ) 
             {
                $bs1 = array( 0, 1, 2, 3, 4, 5, 6  );
                shuffle( &$bs1 );
                $bs01 = array( 0, 7, 13, 20 );
                shuffle( &$bs01 );
                $bss1 = $bs1[1];
                $bss2 = $bs1[2];
                $bss3 = $bs1[3];
                $bss0 = $bs01[0];


                $bs12 = array( 0, 1, 2, 4, 5, 6  );
                shuffle( &$bs12 );
                $bs02 = array( 3, 10,23 );
                shuffle( &$bs02 );
                $bss12 = $bs12[1];
                $bss22 = $bs12[2];
                $bss32 = $bs12[3];
                $bss02 = $bs02[0];

                $bs13 = array( 0, 1, 2, 3, 4, 5, 6  );
                shuffle( &$bs13 );
                $bs03 = array( 0, 7, 13, 20 );
                shuffle( &$bs03 );
                $bss13 = $bs13[1];
                $bss23 = $bs13[2];
                $bss33 = $bs13[3];
                $bss03 = $bs03[0];

                $bs14 = array( 1, 2, 3, 4, 5, 6  );
                shuffle( &$bs14 );
                $bs04 = array( 4, 8, 12, 16, 21, 25 );
                shuffle( &$bs04 );
                $bss14 = $bs14[1];
                $bss24 = $bs14[2];
                $bss34 = $bs14[3];
                $bss04 = $bs04[0];

                $bs15 = array( 0, 1, 2, 3, 4, 5, 6  );
                shuffle( &$bs15 );
                $bs05 = array( 0, 7, 13, 20 );
                shuffle( &$bs05 );
                $bss15 = $bs15[1];
                $bss25 = $bs15[2];
                $bss35 = $bs15[3];
                $bss05 = $bs05[0];





                $bonusik = "&reel=$bss1|$bss2|$bss3|$bss0|$bonus_win|reel=$bss12|$bss22|$bss32|$bss02|$bonus_win|reel=$bss13|$bss23|$bss33|$bss03|$bonus_win|reel=$bss14|$bss24|$bss34|$bss04|$bonus_win|reel=$bss15|$bss25|$bss35|$bss05|$bonus_win";
             }   


            if ( $mega == 3 ) 
             {
                $bs1 = array( 0, 1, 2, 3, 4, 5, 6  );
                shuffle( &$bs1 );
                $bs01 = array( 0, 7, 13, 20 );
                shuffle( &$bs01 );
                $bss1 = $bs1[1];
                $bss2 = $bs1[2];
                $bss3 = $bs1[3];
                $bss0 = $bs01[0];


                $bs12 = array( 0, 1, 2, 3, 4, 5, 6  );
                shuffle( &$bs12 );
                $bs02 = array( 0, 7, 13, 20 );
                shuffle( &$bs02 );
                $bss12 = $bs12[1];
                $bss22 = $bs12[2];
                $bss32 = $bs12[3];
                $bss02 = $bs02[0];

                $bs13 = array( 1, 2, 3, 4, 5, 6  );
                shuffle( &$bs13 );
                $bs03 = array( 4, 8, 12, 16, 21, 25 );
                shuffle( &$bs03 );
                $bss13 = $bs13[1];
                $bss23 = $bs13[2];
                $bss33 = $bs13[3];
                $bss03 = $bs03[0];

                $bs14 = array( 1, 2, 3, 4, 5, 0  );
                shuffle( &$bs14 );
                $bs04 = array( 19 );
                shuffle( &$bs04 );
                $bss14 = $bs14[1];
                $bss24 = $bs14[2];
                $bss34 = $bs14[3];
                $bss04 = $bs04[0];

                $bs15 = array( 0, 1, 2, 3, 4, 5, 6  );
                shuffle( &$bs15 );
                $bs05 = array( 0, 7, 13, 20 );
                shuffle( &$bs05 );
                $bss15 = $bs15[1];
                $bss25 = $bs15[2];
                $bss35 = $bs15[3];
                $bss05 = $bs05[0];





                $bonusik = "&reel=$bss1|$bss2|$bss3|$bss0|$bonus_win|reel=$bss12|$bss22|$bss32|$bss02|$bonus_win|reel=$bss13|$bss23|$bss33|$bss03|$bonus_win|reel=$bss14|$bss24|$bss34|$bss04|$bonus_win|reel=$bss15|$bss25|$bss35|$bss05|$bonus_win";
             }   













            }
        }













        if ( $bb_win == 2 )
        {
           if ( $goldsvet == 3 )
            {
            $mega = rand( 1, 2 );
            if ( $mega == 1 )
                { 
                $bs1 = array( 1, 2, 3, 4, 5, 6  );
                shuffle( &$bs1 );
                $bs01 = array( 4, 8, 12, 16, 21, 25 );
                shuffle( &$bs01 );
                $bss1 = $bs1[0];
                $bss2 = $bs1[1];
                $bss3 = $bs1[2];
                $bss0 = $bs01[0];
                $bs012 = array( 0, 7, 13, 20 );
                shuffle( &$bs012 );
                $bss12 = $bs1[3];
                $bss22 = $bs1[4];
                $bss32 = $bs1[5];
                $bss02 = $bs012[0];
                $vish = rand( 1, 3 );
                if ( $vish == 1 )
                {
                 $bss1 = 0;
                }
                if ( $vish == 2 )
                {
                 $bss2 = 0;
                }
                if ( $vish == 3 )
                {
                 $bss3 = 0;
                }

                $bonusik = "&reel=$bss1|$bss2|$bss3|$bss0|$bonus_win|reel=$bss12|$bss22|$bss32|$bss02|$bonus_win";
                }



            if ( $mega == 2 )
                { 
                $bs1 = array( 1, 2, 3, 4, 5, 6  );
                shuffle( &$bs1 );
                $bs01 = array( 4, 8, 12, 16, 21, 25 );
                shuffle( &$bs01 );
                $bss1 = $bs1[0];
                $bss2 = $bs1[1];
                $bss3 = $bs1[2];
                $bss0 = $bs01[0];
                $bs012 = array( 0, 7, 13, 20 );
                shuffle( &$bs012 );
                $bss12 = $bs1[3];
                $bss22 = $bs1[4];
                $bss32 = $bs1[5];
                $bss02 = $bs012[0];
                $vish = rand( 1, 3 );
                if ( $vish == 1 )
                {
                 $bss1 = 0;
                }
                if ( $vish == 2 )
                {
                 $bss2 = 0;
                }
                if ( $vish == 3 )
                {
                 $bss3 = 0;
                }

                $bs14 = array( 0, 1, 2, 4, 5, 6  );
                shuffle( &$bs14 );
                $bs04 = array( 3, 10, 23 );
                shuffle( &$bs04 );
                $bss14 = $bs14[1];
                $bss24 = $bs14[2];
                $bss34 = $bs14[3];
                $bss04 = $bs04[0];

                $bs15 = array( 1, 2, 3, 6, 5  );
                shuffle( &$bs15 );
                $bs05 = array( 1, 14 );
                shuffle( &$bs05 );
                $bss15 = $bs15[1];
                $bss25 = $bs15[2];
                $bss35 = $bs15[3];
                $bss05 = $bs05[0];

                $bs16 = array( 0, 1, 3, 4, 5, 6  );
                shuffle( &$bs16 );
                $bs06 = array( 5, 11, 17, 24 );
                shuffle( &$bs06 );
                $bss16 = $bs16[1];
                $bss26 = $bs16[2];
                $bss36 = $bs16[3];
                $bss06 = $bs06[0];
            $me = rand( 1, 2 );
            if ( $me == 1 )
                { 
                $bonusik = "&reel=$bss16|$bss26|$bss36|$bss06|$bonus_win|reel=$bss15|$bss25|$bss35|$bss05|$bonus_win|reel=$bss14|$bss24|$bss34|$bss04|$bonus_win|reel=$bss1|$bss2|$bss3|$bss0|$bonus_win|reel=$bss12|$bss22|$bss32|$bss02|$bonus_win";
               }
            if ( $me == 2 )
                { 
                $bonusik = "&reel=$bss15|$bss25|$bss35|$bss05|$bonus_win|reel=$bss14|$bss24|$bss34|$bss04|$bonus_win|reel=$bss16|$bss26|$bss36|$bss06|$bonus_win|reel=$bss1|$bss2|$bss3|$bss0|$bonus_win|reel=$bss12|$bss22|$bss32|$bss02|$bonus_win";
               }

 }





            }

            if ( $goldsvet == 4 )
            {
            $mega = rand( 1, 2 );
            if ( $mega == 1 ) 
             {
                $bs1 = array( 1, 2, 3, 4, 5, 6  );
                shuffle( &$bs1 );
                $bs01 = array( 4, 8, 12, 16, 21, 25 );
                shuffle( &$bs01 );
                $bss1 = $bs1[1];
                $bss2 = $bs1[2];
                $bss3 = $bs1[3];
                $bss0 = $bs01[0];
                $vish = rand( 1, 3 );

                if ( $vish == 1 )
                {
                 $bss1 = 0;
                }
                if ( $vish == 2 )
                {
                 $bss2 = 0;
                }
                if ( $vish == 3 )
                {
                 $bss3 = 0;
                }

                $bs12 = array( 0, 1, 2, 3, 4, 5, 6  );
                shuffle( &$bs12 );
                $bs02 = array( 0, 7, 13, 20 );
                shuffle( &$bs02 );
                $bss12 = $bs12[1];
                $bss22 = $bs12[2];
                $bss32 = $bs12[3];
                $bss02 = $bs02[0];

                $bs13 = array( 0, 1, 2, 3, 4, 5, 6  );
                shuffle( &$bs13 );
                $bs03 = array( 0, 7, 13, 20 );
                shuffle( &$bs03 );
                $bss13 = $bs13[1];
                $bss23 = $bs13[2];
                $bss33 = $bs13[3];
                $bss03 = $bs03[0];
                $bonusik = "&reel=$bss1|$bss2|$bss3|$bss0|$bonus_win|reel=$bss12|$bss22|$bss32|$bss02|$bonus_win|reel=$bss13|$bss23|$bss33|$bss03|$bonus_win";
             }  
            if ( $mega == 2 ) 
             {
                $bs1 = array( 1, 2, 3, 4, 5, 6  );
                shuffle( &$bs1 );
                $bs01 = array( 4, 8, 12, 16, 21, 25 );
                shuffle( &$bs01 );
                $bss1 = $bs1[1];
                $bss2 = $bs1[2];
                $bss3 = $bs1[3];
                $bss0 = $bs01[0];
                $vish = rand( 1, 3 );

                if ( $vish == 1 )
                {
                 $bss1 = 0;
                }
                if ( $vish == 2 )
                {
                 $bss2 = 0;
                }
                if ( $vish == 3 )
                {
                 $bss3 = 0;
                }

                $bs12 = array( 0, 1, 2, 3, 4, 5, 6  );
                shuffle( &$bs12 );
                $bs02 = array( 0, 7, 13, 20 );
                shuffle( &$bs02 );
                $bss12 = $bs12[1];
                $bss22 = $bs12[2];
                $bss32 = $bs12[3];
                $bss02 = $bs02[0];

                $bs13 = array( 0, 1, 2, 3, 4, 5, 6  );
                shuffle( &$bs13 );
                $bs03 = array( 0, 7, 13, 20 );
                shuffle( &$bs03 );
                $bss13 = $bs13[1];
                $bss23 = $bs13[2];
                $bss33 = $bs13[3];
                $bss03 = $bs03[0];
                $bonusik = "&reel=$bss13|$bss23|$bss33|$bss03|$bonus_win|reel=$bss1|$bss2|$bss3|$bss0|$bonus_win|reel=$bss12|$bss22|$bss32|$bss02|$bonus_win";
             } 
}


            if ( $goldsvet == 5 )
            {
           $mega = rand( 1, 3 );
            if ( $mega == 1 ) 
             {
                $bs1 = array( 1, 2, 3, 4, 5, 6  );
                shuffle( &$bs1 );
                $bs01 = array( 4, 8, 12, 16, 21, 25 );
                shuffle( &$bs01 );
                $bss1 = $bs1[1];
                $bss2 = $bs1[2];
                $bss3 = $bs1[3];
                $bss0 = $bs01[0];
                $vish = rand( 1, 3 );

                if ( $vish == 1 )
                {
                 $bss1 = 0;
                }
                if ( $vish == 2 )
                {
                 $bss2 = 0;
                }
                if ( $vish == 3 )
                {
                 $bss3 = 0;
                }

                $bs12 = array( 0, 1, 2, 3, 4, 5, 6  );
                shuffle( &$bs12 );
                $bs02 = array( 0, 7, 13, 20 );
                shuffle( &$bs02 );
                $bss12 = $bs12[1];
                $bss22 = $bs12[2];
                $bss32 = $bs12[3];
                $bss02 = $bs02[0];

                $bs13 = array( 0, 1, 2, 3, 4, 5, 6  );
                shuffle( &$bs13 );
                $bs03 = array( 0, 7, 13, 20 );
                shuffle( &$bs03 );
                $bss13 = $bs13[1];
                $bss23 = $bs13[2];
                $bss33 = $bs13[3];
                $bss03 = $bs03[0];

                $bs14 = array( 0, 1, 2, 3, 4, 5, 6  );
                shuffle( &$bs14 );
                $bs04 = array( 0, 7, 13, 20 );
                shuffle( &$bs04 );
                $bss14 = $bs14[1];
                $bss24 = $bs14[2];
                $bss34 = $bs14[3];
                $bss04 = $bs04[0];

                $bonusik = "&reel=$bss1|$bss2|$bss3|$bss0|$bonus_win|reel=$bss12|$bss22|$bss32|$bss02|$bonus_win|reel=$bss13|$bss23|$bss33|$bss03|$bonus_win|reel=$bss14|$bss24|$bss34|$bss04|$bonus_win";
             } 

            if ( $mega == 2 ) 
             {
                $bs1 = array( 1, 2, 3, 4, 5, 6  );
                shuffle( &$bs1 );
                $bs01 = array( 4, 8, 12, 16, 21, 25 );
                shuffle( &$bs01 );
                $bss1 = $bs1[1];
                $bss2 = $bs1[2];
                $bss3 = $bs1[3];
                $bss0 = $bs01[0];
                $vish = rand( 1, 3 );

                if ( $vish == 1 )
                {
                 $bss1 = 0;
                }
                if ( $vish == 2 )
                {
                 $bss2 = 0;
                }
                if ( $vish == 3 )
                {
                 $bss3 = 0;
                }

                $bs12 = array( 0, 1, 2, 3, 4, 5, 6  );
                shuffle( &$bs12 );
                $bs02 = array( 0, 7, 13, 20 );
                shuffle( &$bs02 );
                $bss12 = $bs12[1];
                $bss22 = $bs12[2];
                $bss32 = $bs12[3];
                $bss02 = $bs02[0];

                $bs13 = array( 0, 1, 2, 3, 4, 5, 6  );
                shuffle( &$bs13 );
                $bs03 = array( 0, 7, 13, 20 );
                shuffle( &$bs03 );
                $bss13 = $bs13[1];
                $bss23 = $bs13[2];
                $bss33 = $bs13[3];
                $bss03 = $bs03[0];

                $bs14 = array( 0, 1, 2, 3, 4, 5, 6  );
                shuffle( &$bs14 );
                $bs04 = array( 0, 7, 13, 20 );
                shuffle( &$bs04 );
                $bss14 = $bs14[1];
                $bss24 = $bs14[2];
                $bss34 = $bs14[3];
                $bss04 = $bs04[0];

                $bonusik = "&reel=$bss12|$bss22|$bss32|$bss02|$bonus_win|reel=$bss1|$bss2|$bss3|$bss0|$bonus_win|reel=$bss13|$bss23|$bss33|$bss03|$bonus_win|reel=$bss14|$bss24|$bss34|$bss04|$bonus_win";
             }

           if ( $mega == 3 ) 
             {
                $bs1 = array( 1, 2, 3, 4, 5, 6  );
                shuffle( &$bs1 );
                $bs01 = array( 4, 8, 12, 16, 21, 25 );
                shuffle( &$bs01 );
                $bss1 = $bs1[1];
                $bss2 = $bs1[2];
                $bss3 = $bs1[3];
                $bss0 = $bs01[0];
                $vish = rand( 1, 3 );

                if ( $vish == 1 )
                {
                 $bss1 = 0;
                }
                if ( $vish == 2 )
                {
                 $bss2 = 0;
                }
                if ( $vish == 3 )
                {
                 $bss3 = 0;
                }

                $bs12 = array( 0, 1, 2, 3, 4, 5, 6  );
                shuffle( &$bs12 );
                $bs02 = array( 0, 7, 13, 20 );
                shuffle( &$bs02 );
                $bss12 = $bs12[1];
                $bss22 = $bs12[2];
                $bss32 = $bs12[3];
                $bss02 = $bs02[0];

                $bs13 = array( 0, 1, 2, 3, 4, 5, 6  );
                shuffle( &$bs13 );
                $bs03 = array( 0, 7, 13, 20 );
                shuffle( &$bs03 );
                $bss13 = $bs13[1];
                $bss23 = $bs13[2];
                $bss33 = $bs13[3];
                $bss03 = $bs03[0];

                $bs14 = array( 0, 1, 2, 3, 4, 5, 6  );
                shuffle( &$bs14 );
                $bs04 = array( 0, 7, 13, 20 );
                shuffle( &$bs04 );
                $bss14 = $bs14[1];
                $bss24 = $bs14[2];
                $bss34 = $bs14[3];
                $bss04 = $bs04[0];

                $bs15 = array( 1, 2, 3, 4, 5, 6  );
                shuffle( &$bs15 );
                $bs05 = array( 4, 8, 12, 16, 21, 25 );
                shuffle( &$bs05 );
                $bss15 = $bs15[1];
                $bss25 = $bs15[2];
                $bss35 = $bs15[3];
                $bss05 = $bs05[0];

                $bs16 = array( 0, 1, 2, 3, 4, 5  );
                shuffle( &$bs16 );
                $bs06 = array( 19 );
                shuffle( &$bs06 );
                $bss16 = $bs16[1];
                $bss26 = $bs16[2];
                $bss36 = $bs16[3];
                $bss06 = $bs06[0];

                $bonusik = "&reel=$bss12|$bss22|$bss32|$bss02|$bonus_win|reel=$bss15|$bss25|$bss35|$bss05|$bonus_win|reel=$bss13|$bss23|$bss33|$bss03|$bonus_win|reel=$bss16|$bss26|$bss36|$bss06|$bonus_win|reel=$bss1|$bss2|$bss3|$bss0|$bonus_win|reel=$bss14|$bss24|$bss34|$bss04|$bonus_win";
             }


  
}






        }


        if ( $bb_win == 5 )
        {





           if ( $goldsvet == 3 )
            {
            $mega = rand( 1, 2 );
            if ( $mega == 1 )
                {
                $bs1 = array( 0, 2, 3, 4, 5, 6  );
                shuffle( &$bs1 );
                $bs01 = array( 2, 9, 15, 18, 22 );
                shuffle( &$bs01 );
                $bss1 = $bs1[0];
                $bss2 = $bs1[1];
                $bss3 = $bs1[2];
                $bss0 = $bs01[0];
                $bs012 = array( 0, 7, 13, 20 );
                shuffle( &$bs012 );
                $bss12 = $bs1[3];
                $bss22 = $bs1[4];
                $bss32 = $bs1[5];
                $bss02 = $bs012[0];
                $vish = rand( 1, 3 );
                if ( $vish == 1 )
                {
                 $bss1 = 1;
                }
                if ( $vish == 2 )
                {
                 $bss2 = 1;
                }
                if ( $vish == 3 )
                {
                 $bss3 = 1;
                }

                $bonusik = "&reel=$bss1|$bss2|$bss3|$bss0|$bonus_win|reel=$bss12|$bss22|$bss32|$bss02|$bonus_win";
}

            if ( $mega == 2 )
                { 
                $bs1 = array( 0, 2, 3, 4, 5, 6  );
                shuffle( &$bs1 );
                $bs01 = array( 2, 9, 15, 18, 22 );
                shuffle( &$bs01 );
                $bss1 = $bs1[0];
                $bss2 = $bs1[1];
                $bss3 = $bs1[2];
                $bss0 = $bs01[0];
                $bs012 = array( 0, 7, 13, 20 );
                shuffle( &$bs012 );
                $bss12 = $bs1[3];
                $bss22 = $bs1[4];
                $bss32 = $bs1[5];
                $bss02 = $bs012[0];
                $vish = rand( 1, 3 );
                if ( $vish == 1 )
                {
                 $bss1 = 1;
                }
                if ( $vish == 2 )
                {
                 $bss2 = 1;
                }
                if ( $vish == 3 )
                {
                 $bss3 = 1;
                }

                $bs14 = array( 0, 1, 2, 4, 5, 6  );
                shuffle( &$bs14 );
                $bs04 = array( 3, 10, 23 );
                shuffle( &$bs04 );
                $bss14 = $bs14[1];
                $bss24 = $bs14[2];
                $bss34 = $bs14[3];
                $bss04 = $bs04[0];

                $bs15 = array( 1, 2, 3, 6, 5  );
                shuffle( &$bs15 );
                $bs05 = array( 1, 14 );
                shuffle( &$bs05 );
                $bss15 = $bs15[1];
                $bss25 = $bs15[2];
                $bss35 = $bs15[3];
                $bss05 = $bs05[0];

                $bs16 = array( 0, 1, 3, 4, 5, 6  );
                shuffle( &$bs16 );
                $bs06 = array( 5, 11, 17, 24 );
                shuffle( &$bs06 );
                $bss16 = $bs16[1];
                $bss26 = $bs16[2];
                $bss36 = $bs16[3];
                $bss06 = $bs06[0];
            $me = rand( 1, 2 );
            if ( $me == 1 )
                { 
                $bonusik = "&reel=$bss16|$bss26|$bss36|$bss06|$bonus_win|reel=$bss15|$bss25|$bss35|$bss05|$bonus_win|reel=$bss14|$bss24|$bss34|$bss04|$bonus_win|reel=$bss1|$bss2|$bss3|$bss0|$bonus_win|reel=$bss12|$bss22|$bss32|$bss02|$bonus_win";
               }
            if ( $me == 2 )
                { 
                $bonusik = "&reel=$bss15|$bss25|$bss35|$bss05|$bonus_win|reel=$bss14|$bss24|$bss34|$bss04|$bonus_win|reel=$bss16|$bss26|$bss36|$bss06|$bonus_win|reel=$bss1|$bss2|$bss3|$bss0|$bonus_win|reel=$bss12|$bss22|$bss32|$bss02|$bonus_win";
               }

 }















                
            }

            if ( $goldsvet == 4 )
            {
            $mega = rand( 1, 2 );
            if ( $mega == 1 ) 
             {
                $bs1 = array( 0, 2, 3, 4, 5, 6  );
                shuffle( &$bs1 );
                $bs01 = array( 2, 9, 15, 18, 22 );
                shuffle( &$bs01 );
                $bss1 = $bs1[1];
                $bss2 = $bs1[2];
                $bss3 = $bs1[3];
                $bss0 = $bs01[0];
                $vish = rand( 1, 3 );

                if ( $vish == 1 )
                {
                 $bss1 = 1;
                }
                if ( $vish == 2 )
                {
                 $bss2 = 1;
                }
                if ( $vish == 3 )
                {
                 $bss3 = 1;
                }

                $bs12 = array( 0, 1, 2, 3, 4, 5, 6  );
                shuffle( &$bs12 );
                $bs02 = array( 0, 7, 13, 20 );
                shuffle( &$bs02 );
                $bss12 = $bs12[1];
                $bss22 = $bs12[2];
                $bss32 = $bs12[3];
                $bss02 = $bs02[0];

                $bs13 = array( 0, 1, 2, 3, 4, 5, 6  );
                shuffle( &$bs13 );
                $bs03 = array( 0, 7, 13, 20 );
                shuffle( &$bs03 );
                $bss13 = $bs13[1];
                $bss23 = $bs13[2];
                $bss33 = $bs13[3];
                $bss03 = $bs03[0];
                $bonusik = "&reel=$bss1|$bss2|$bss3|$bss0|$bonus_win|reel=$bss12|$bss22|$bss32|$bss02|$bonus_win|reel=$bss13|$bss23|$bss33|$bss03|$bonus_win";
             }  
            if ( $mega == 2 ) 
             {
                $bs1 = array( 0, 2, 3, 4, 5, 6  );
                shuffle( &$bs1 );
                $bs01 = array( 2, 9, 15, 18, 22 );
                shuffle( &$bs01 );
                $bss1 = $bs1[1];
                $bss2 = $bs1[2];
                $bss3 = $bs1[3];
                $bss0 = $bs01[0];
                $vish = rand( 1, 3 );

                if ( $vish == 1 )
                {
                 $bss1 = 1;
                }
                if ( $vish == 2 )
                {
                 $bss2 = 1;
                }
                if ( $vish == 3 )
                {
                 $bss3 = 1;
                }

                $bs12 = array( 0, 1, 2, 3, 4, 5, 6  );
                shuffle( &$bs12 );
                $bs02 = array( 0, 7, 13, 20 );
                shuffle( &$bs02 );
                $bss12 = $bs12[1];
                $bss22 = $bs12[2];
                $bss32 = $bs12[3];
                $bss02 = $bs02[0];

                $bs13 = array( 0, 1, 2, 3, 4, 5, 6  );
                shuffle( &$bs13 );
                $bs03 = array( 0, 7, 13, 20 );
                shuffle( &$bs03 );
                $bss13 = $bs13[1];
                $bss23 = $bs13[2];
                $bss33 = $bs13[3];
                $bss03 = $bs03[0];
                $bonusik = "&reel=$bss13|$bss23|$bss33|$bss03|$bonus_win|reel=$bss1|$bss2|$bss3|$bss0|$bonus_win|reel=$bss12|$bss22|$bss32|$bss02|$bonus_win";
             } 
}


            if ( $goldsvet == 5 )
            {
           $mega = rand( 1, 3 );
            if ( $mega == 1 ) 
             {
                $bs1 = array( 0, 2, 3, 4, 5, 6  );
                shuffle( &$bs1 );
                $bs01 = array( 2, 9, 15, 18, 22 );
                shuffle( &$bs01 );
                $bss1 = $bs1[1];
                $bss2 = $bs1[2];
                $bss3 = $bs1[3];
                $bss0 = $bs01[0];
                $vish = rand( 1, 3 );

                if ( $vish == 1 )
                {
                 $bss1 = 1;
                }
                if ( $vish == 2 )
                {
                 $bss2 = 1;
                }
                if ( $vish == 3 )
                {
                 $bss3 = 1;
                }

                $bs12 = array( 0, 1, 2, 3, 4, 5, 6  );
                shuffle( &$bs12 );
                $bs02 = array( 0, 7, 13, 20 );
                shuffle( &$bs02 );
                $bss12 = $bs12[1];
                $bss22 = $bs12[2];
                $bss32 = $bs12[3];
                $bss02 = $bs02[0];

                $bs13 = array( 0, 1, 2, 3, 4, 5, 6  );
                shuffle( &$bs13 );
                $bs03 = array( 0, 7, 13, 20 );
                shuffle( &$bs03 );
                $bss13 = $bs13[1];
                $bss23 = $bs13[2];
                $bss33 = $bs13[3];
                $bss03 = $bs03[0];

                $bs14 = array( 0, 1, 2, 3, 4, 5, 6  );
                shuffle( &$bs14 );
                $bs04 = array( 0, 7, 13, 20 );
                shuffle( &$bs04 );
                $bss14 = $bs14[1];
                $bss24 = $bs14[2];
                $bss34 = $bs14[3];
                $bss04 = $bs04[0];

                $bonusik = "&reel=$bss1|$bss2|$bss3|$bss0|$bonus_win|reel=$bss12|$bss22|$bss32|$bss02|$bonus_win|reel=$bss13|$bss23|$bss33|$bss03|$bonus_win|reel=$bss14|$bss24|$bss34|$bss04|$bonus_win";
             } 

            if ( $mega == 2 ) 
             {
                $bs1 = array( 0, 2, 3, 4, 5, 6  );
                shuffle( &$bs1 );
                $bs01 = array( 2, 9, 15, 18, 22 );
                shuffle( &$bs01 );
                $bss1 = $bs1[1];
                $bss2 = $bs1[2];
                $bss3 = $bs1[3];
                $bss0 = $bs01[0];
                $vish = rand( 1, 3 );

                if ( $vish == 1 )
                {
                 $bss1 = 1;
                }
                if ( $vish == 2 )
                {
                 $bss2 = 1;
                }
                if ( $vish == 3 )
                {
                 $bss3 = 1;
                }

                $bs12 = array( 0, 1, 2, 3, 4, 5, 6  );
                shuffle( &$bs12 );
                $bs02 = array( 0, 7, 13, 20 );
                shuffle( &$bs02 );
                $bss12 = $bs12[1];
                $bss22 = $bs12[2];
                $bss32 = $bs12[3];
                $bss02 = $bs02[0];

                $bs13 = array( 0, 1, 2, 3, 4, 5, 6  );
                shuffle( &$bs13 );
                $bs03 = array( 0, 7, 13, 20 );
                shuffle( &$bs03 );
                $bss13 = $bs13[1];
                $bss23 = $bs13[2];
                $bss33 = $bs13[3];
                $bss03 = $bs03[0];

                $bs14 = array( 0, 1, 2, 3, 4, 5, 6  );
                shuffle( &$bs14 );
                $bs04 = array( 0, 7, 13, 20 );
                shuffle( &$bs04 );
                $bss14 = $bs14[1];
                $bss24 = $bs14[2];
                $bss34 = $bs14[3];
                $bss04 = $bs04[0];

                $bonusik = "&reel=$bss12|$bss22|$bss32|$bss02|$bonus_win|reel=$bss1|$bss2|$bss3|$bss0|$bonus_win|reel=$bss13|$bss23|$bss33|$bss03|$bonus_win|reel=$bss14|$bss24|$bss34|$bss04|$bonus_win";
             }

           if ( $mega == 3 ) 
             {
                $bs1 = array( 0, 2, 3, 4, 5, 6  );
                shuffle( &$bs1 );
                $bs01 = array( 2, 9, 15, 18, 22 );
                shuffle( &$bs01 );
                $bss1 = $bs1[1];
                $bss2 = $bs1[2];
                $bss3 = $bs1[3];
                $bss0 = $bs01[0];
                $vish = rand( 1, 3 );

                if ( $vish == 1 )
                {
                 $bss1 = 1;
                }
                if ( $vish == 2 )
                {
                 $bss2 = 1;
                }
                if ( $vish == 3 )
                {
                 $bss3 = 1;
                }

                $bs12 = array( 0, 1, 2, 3, 4, 5, 6  );
                shuffle( &$bs12 );
                $bs02 = array( 0, 7, 13, 20 );
                shuffle( &$bs02 );
                $bss12 = $bs12[1];
                $bss22 = $bs12[2];
                $bss32 = $bs12[3];
                $bss02 = $bs02[0];

                $bs13 = array( 0, 1, 2, 3, 4, 5, 6  );
                shuffle( &$bs13 );
                $bs03 = array( 0, 7, 13, 20 );
                shuffle( &$bs03 );
                $bss13 = $bs13[1];
                $bss23 = $bs13[2];
                $bss33 = $bs13[3];
                $bss03 = $bs03[0];

                $bs14 = array( 0, 1, 2, 3, 4, 5, 6  );
                shuffle( &$bs14 );
                $bs04 = array( 0, 7, 13, 20 );
                shuffle( &$bs04 );
                $bss14 = $bs14[1];
                $bss24 = $bs14[2];
                $bss34 = $bs14[3];
                $bss04 = $bs04[0];

                $bs15 = array( 1, 2, 3, 4, 5, 6  );
                shuffle( &$bs15 );
                $bs05 = array( 4, 8, 12, 16, 21, 25 );
                shuffle( &$bs05 );
                $bss15 = $bs15[1];
                $bss25 = $bs15[2];
                $bss35 = $bs15[3];
                $bss05 = $bs05[0];

                $bs16 = array( 0, 1, 2, 3, 4, 5  );
                shuffle( &$bs16 );
                $bs06 = array( 19 );
                shuffle( &$bs06 );
                $bss16 = $bs16[1];
                $bss26 = $bs16[2];
                $bss36 = $bs16[3];
                $bss06 = $bs06[0];

                $bonusik = "&reel=$bss12|$bss22|$bss32|$bss02|$bonus_win|reel=$bss15|$bss25|$bss35|$bss05|$bonus_win|reel=$bss13|$bss23|$bss33|$bss03|$bonus_win|reel=$bss16|$bss26|$bss36|$bss06|$bonus_win|reel=$bss1|$bss2|$bss3|$bss0|$bonus_win|reel=$bss14|$bss24|$bss34|$bss04|$bonus_win";
             }


  
}

        }









         if ( $bb_win == 10 )
        {





           if ( $goldsvet == 3 )
            {
            $mega = rand( 1, 2 );

            if ( $mega == 1 )
                { 




                $bs1 = array( 0, 1, 3, 4, 5, 6  );
                shuffle( &$bs1 );
                $bs01 = array( 5, 11, 17, 24 );
                shuffle( &$bs01 );
                $bss1 = $bs1[0];
                $bss2 = $bs1[1];
                $bss3 = $bs1[2];
                $bss0 = $bs01[0];
                $bs012 = array( 0, 7, 13, 20 );
                shuffle( &$bs012 );
                $bss12 = $bs1[3];
                $bss22 = $bs1[4];
                $bss32 = $bs1[5];
                $bss02 = $bs012[0];
                $vish = rand( 1, 3 );
                if ( $vish == 1 )
                {
                 $bss1 = 2;
                }
                if ( $vish == 2 )
                {
                 $bss2 = 2;
                }
                if ( $vish == 3 )
                {
                 $bss3 = 2;
                }

                $bonusik = "&reel=$bss1|$bss2|$bss3|$bss0|$bonus_win|reel=$bss12|$bss22|$bss32|$bss02|$bonus_win";
}
            if ( $mega == 2 )
                { 
                $bs1 = array( 0, 1, 3, 4, 5, 6  );
                shuffle( &$bs1 );
                $bs01 = array( 5, 11, 17, 24 );
                shuffle( &$bs01 );
                $bss1 = $bs1[0];
                $bss2 = $bs1[1];
                $bss3 = $bs1[2];
                $bss0 = $bs01[0];
                $bs012 = array( 0, 7, 13, 20 );
                shuffle( &$bs012 );
                $bss12 = $bs1[3];
                $bss22 = $bs1[4];
                $bss32 = $bs1[5];
                $bss02 = $bs012[0];
                $vish = rand( 1, 3 );
                if ( $vish == 1 )
                {
                 $bss1 = 2;
                }
                if ( $vish == 2 )
                {
                 $bss2 = 2;
                }
                if ( $vish == 3 )
                {
                 $bss3 = 2;
                }

                $bs14 = array( 0, 1, 2, 4, 5, 6  );
                shuffle( &$bs14 );
                $bs04 = array( 3, 10, 23 );
                shuffle( &$bs04 );
                $bss14 = $bs14[1];
                $bss24 = $bs14[2];
                $bss34 = $bs14[3];
                $bss04 = $bs04[0];

                $bs15 = array( 1, 2, 3, 6, 5  );
                shuffle( &$bs15 );
                $bs05 = array( 1, 14 );
                shuffle( &$bs05 );
                $bss15 = $bs15[1];
                $bss25 = $bs15[2];
                $bss35 = $bs15[3];
                $bss05 = $bs05[0];

                $bs16 = array( 0, 1, 2, 3, 4, 5  );
                shuffle( &$bs16 );
                $bs06 = array( 19 );
                shuffle( &$bs06 );
                $bss16 = $bs16[1];
                $bss26 = $bs16[2];
                $bss36 = $bs16[3];
                $bss06 = $bs06[0];
            $me = rand( 1, 2 );
            if ( $me == 1 )
                { 
                $bonusik = "&reel=$bss16|$bss26|$bss36|$bss06|$bonus_win|reel=$bss15|$bss25|$bss35|$bss05|$bonus_win|reel=$bss14|$bss24|$bss34|$bss04|$bonus_win|reel=$bss1|$bss2|$bss3|$bss0|$bonus_win|reel=$bss12|$bss22|$bss32|$bss02|$bonus_win";
               }
            if ( $me == 2 )
                { 
                $bonusik = "&reel=$bss15|$bss25|$bss35|$bss05|$bonus_win|reel=$bss14|$bss24|$bss34|$bss04|$bonus_win|reel=$bss16|$bss26|$bss36|$bss06|$bonus_win|reel=$bss1|$bss2|$bss3|$bss0|$bonus_win|reel=$bss12|$bss22|$bss32|$bss02|$bonus_win";
               }

 }









                
            }

            if ( $goldsvet == 4 )
            {
            $mega = rand( 1, 2 );
            if ( $mega == 1 ) 
             {
                $bs1 = array( 0, 1, 3, 4, 5, 6  );
                shuffle( &$bs1 );
                $bs01 = array( 5, 11, 17, 24 );
                shuffle( &$bs01 );
                $bss1 = $bs1[1];
                $bss2 = $bs1[2];
                $bss3 = $bs1[3];
                $bss0 = $bs01[0];
                $vish = rand( 1, 3 );

                if ( $vish == 1 )
                {
                 $bss1 = 2;
                }
                if ( $vish == 2 )
                {
                 $bss2 = 2;
                }
                if ( $vish == 3 )
                {
                 $bss3 = 2;
                }

                $bs12 = array( 0, 1, 2, 3, 4, 5, 6  );
                shuffle( &$bs12 );
                $bs02 = array( 0, 7, 13, 20 );
                shuffle( &$bs02 );
                $bss12 = $bs12[1];
                $bss22 = $bs12[2];
                $bss32 = $bs12[3];
                $bss02 = $bs02[0];

                $bs13 = array( 0, 1, 2, 3, 4, 5, 6  );
                shuffle( &$bs13 );
                $bs03 = array( 0, 7, 13, 20 );
                shuffle( &$bs03 );
                $bss13 = $bs13[1];
                $bss23 = $bs13[2];
                $bss33 = $bs13[3];
                $bss03 = $bs03[0];
                $bonusik = "&reel=$bss1|$bss2|$bss3|$bss0|$bonus_win|reel=$bss12|$bss22|$bss32|$bss02|$bonus_win|reel=$bss13|$bss23|$bss33|$bss03|$bonus_win";
             }  
            if ( $mega == 2 ) 
             {
                $bs1 = array( 0, 1, 3, 4, 5, 6  );
                shuffle( &$bs1 );
                $bs01 = array( 5, 11, 17, 24 );
                shuffle( &$bs01 );
                $bss1 = $bs1[1];
                $bss2 = $bs1[2];
                $bss3 = $bs1[3];
                $bss0 = $bs01[0];
                $vish = rand( 1, 3 );

                if ( $vish == 1 )
                {
                 $bss1 = 2;
                }
                if ( $vish == 2 )
                {
                 $bss2 = 2;
                }
                if ( $vish == 3 )
                {
                 $bss3 = 2;
                }

                $bs12 = array( 0, 1, 2, 3, 4, 5, 6  );
                shuffle( &$bs12 );
                $bs02 = array( 0, 7, 13, 20 );
                shuffle( &$bs02 );
                $bss12 = $bs12[1];
                $bss22 = $bs12[2];
                $bss32 = $bs12[3];
                $bss02 = $bs02[0];

                $bs13 = array( 0, 1, 2, 3, 4, 5, 6  );
                shuffle( &$bs13 );
                $bs03 = array( 0, 7, 13, 20 );
                shuffle( &$bs03 );
                $bss13 = $bs13[1];
                $bss23 = $bs13[2];
                $bss33 = $bs13[3];
                $bss03 = $bs03[0];
                $bonusik = "&reel=$bss13|$bss23|$bss33|$bss03|$bonus_win|reel=$bss1|$bss2|$bss3|$bss0|$bonus_win|reel=$bss12|$bss22|$bss32|$bss02|$bonus_win";
             } 
}


            if ( $goldsvet == 5 )
            {
           $mega = rand( 1, 3 );
            if ( $mega == 1 ) 
             {
                $bs1 = array( 0, 1, 3, 4, 5, 6  );
                shuffle( &$bs1 );
                $bs01 = array( 5, 11, 17, 24 );
                shuffle( &$bs01 );
                $bss1 = $bs1[1];
                $bss2 = $bs1[2];
                $bss3 = $bs1[3];
                $bss0 = $bs01[0];
                $vish = rand( 1, 3 );

                if ( $vish == 1 )
                {
                 $bss1 = 2;
                }
                if ( $vish == 2 )
                {
                 $bss2 = 2;
                }
                if ( $vish == 3 )
                {
                 $bss3 = 2;
                }

                $bs12 = array( 0, 1, 2, 3, 4, 5, 6  );
                shuffle( &$bs12 );
                $bs02 = array( 0, 7, 13, 20 );
                shuffle( &$bs02 );
                $bss12 = $bs12[1];
                $bss22 = $bs12[2];
                $bss32 = $bs12[3];
                $bss02 = $bs02[0];

                $bs13 = array( 0, 1, 2, 3, 4, 5, 6  );
                shuffle( &$bs13 );
                $bs03 = array( 0, 7, 13, 20 );
                shuffle( &$bs03 );
                $bss13 = $bs13[1];
                $bss23 = $bs13[2];
                $bss33 = $bs13[3];
                $bss03 = $bs03[0];

                $bs14 = array( 0, 1, 2, 3, 4, 5, 6  );
                shuffle( &$bs14 );
                $bs04 = array( 0, 7, 13, 20 );
                shuffle( &$bs04 );
                $bss14 = $bs14[1];
                $bss24 = $bs14[2];
                $bss34 = $bs14[3];
                $bss04 = $bs04[0];

                $bonusik = "&reel=$bss1|$bss2|$bss3|$bss0|$bonus_win|reel=$bss12|$bss22|$bss32|$bss02|$bonus_win|reel=$bss13|$bss23|$bss33|$bss03|$bonus_win|reel=$bss14|$bss24|$bss34|$bss04|$bonus_win";
             } 

            if ( $mega == 2 ) 
             {
                $bs1 = array( 0, 1, 3, 4, 5, 6  );
                shuffle( &$bs1 );
                $bs01 = array( 5, 11, 17, 24 );
                shuffle( &$bs01 );
                $bss1 = $bs1[1];
                $bss2 = $bs1[2];
                $bss3 = $bs1[3];
                $bss0 = $bs01[0];
                $vish = rand( 1, 3 );

                if ( $vish == 1 )
                {
                 $bss1 = 2;
                }
                if ( $vish == 2 )
                {
                 $bss2 = 2;
                }
                if ( $vish == 3 )
                {
                 $bss3 = 2;
                }

                $bs12 = array( 0, 1, 2, 3, 4, 5, 6  );
                shuffle( &$bs12 );
                $bs02 = array( 0, 7, 13, 20 );
                shuffle( &$bs02 );
                $bss12 = $bs12[1];
                $bss22 = $bs12[2];
                $bss32 = $bs12[3];
                $bss02 = $bs02[0];

                $bs13 = array( 0, 1, 2, 3, 4, 5, 6  );
                shuffle( &$bs13 );
                $bs03 = array( 0, 7, 13, 20 );
                shuffle( &$bs03 );
                $bss13 = $bs13[1];
                $bss23 = $bs13[2];
                $bss33 = $bs13[3];
                $bss03 = $bs03[0];

                $bs14 = array( 0, 1, 2, 3, 4, 5, 6  );
                shuffle( &$bs14 );
                $bs04 = array( 0, 7, 13, 20 );
                shuffle( &$bs04 );
                $bss14 = $bs14[1];
                $bss24 = $bs14[2];
                $bss34 = $bs14[3];
                $bss04 = $bs04[0];

                $bonusik = "&reel=$bss12|$bss22|$bss32|$bss02|$bonus_win|reel=$bss1|$bss2|$bss3|$bss0|$bonus_win|reel=$bss13|$bss23|$bss33|$bss03|$bonus_win|reel=$bss14|$bss24|$bss34|$bss04|$bonus_win";
             }

           if ( $mega == 3 ) 
             {
                $bs1 = array( 0, 1, 3, 4, 5, 6  );
                shuffle( &$bs1 );
                $bs01 = array( 5, 11, 17, 24 );
                shuffle( &$bs01 );
                $bss1 = $bs1[1];
                $bss2 = $bs1[2];
                $bss3 = $bs1[3];
                $bss0 = $bs01[0];
                $vish = rand( 1, 3 );

                if ( $vish == 1 )
                {
                 $bss1 = 2;
                }
                if ( $vish == 2 )
                {
                 $bss2 = 2;
                }
                if ( $vish == 3 )
                {
                 $bss3 = 2;
                }

                $bs12 = array( 0, 1, 2, 3, 4, 5, 6  );
                shuffle( &$bs12 );
                $bs02 = array( 0, 7, 13, 20 );
                shuffle( &$bs02 );
                $bss12 = $bs12[1];
                $bss22 = $bs12[2];
                $bss32 = $bs12[3];
                $bss02 = $bs02[0];

                $bs13 = array( 0, 1, 2, 3, 4, 5, 6  );
                shuffle( &$bs13 );
                $bs03 = array( 0, 7, 13, 20 );
                shuffle( &$bs03 );
                $bss13 = $bs13[1];
                $bss23 = $bs13[2];
                $bss33 = $bs13[3];
                $bss03 = $bs03[0];

                $bs14 = array( 0, 1, 2, 3, 4, 5, 6  );
                shuffle( &$bs14 );
                $bs04 = array( 0, 7, 13, 20 );
                shuffle( &$bs04 );
                $bss14 = $bs14[1];
                $bss24 = $bs14[2];
                $bss34 = $bs14[3];
                $bss04 = $bs04[0];

                $bs15 = array( 1, 2, 3, 4, 0, 6  );
                shuffle( &$bs15 );
                $bs05 = array( 6 );
                shuffle( &$bs05 );
                $bss15 = $bs15[1];
                $bss25 = $bs15[2];
                $bss35 = $bs15[3];
                $bss05 = $bs05[0];

                $bs16 = array( 0, 1, 2, 3, 4, 5  );
                shuffle( &$bs16 );
                $bs06 = array( 19 );
                shuffle( &$bs06 );
                $bss16 = $bs16[1];
                $bss26 = $bs16[2];
                $bss36 = $bs16[3];
                $bss06 = $bs06[0];

                $bonusik = "&reel=$bss12|$bss22|$bss32|$bss02|$bonus_win|reel=$bss15|$bss25|$bss35|$bss05|$bonus_win|reel=$bss13|$bss23|$bss33|$bss03|$bonus_win|reel=$bss16|$bss26|$bss36|$bss06|$bonus_win|reel=$bss1|$bss2|$bss3|$bss0|$bonus_win|reel=$bss14|$bss24|$bss34|$bss04|$bonus_win";
             }


  
}

        }



























         if ( $bb_win == 20 )
        {





           if ( $goldsvet == 3 )
            {
            $mega = rand( 1, 2 );

            if ( $mega == 1 )
                {

                $bs1 = array( 0, 1, 2, 4, 5, 6  );
                shuffle( &$bs1 );
                $bs01 = array( 3, 10, 23 );
                shuffle( &$bs01 );
                $bss1 = $bs1[0];
                $bss2 = $bs1[1];
                $bss3 = $bs1[2];
                $bss0 = $bs01[0];
                $bs012 = array( 0, 7, 13, 20 );
                shuffle( &$bs012 );
                $bss12 = $bs1[3];
                $bss22 = $bs1[4];
                $bss32 = $bs1[5];
                $bss02 = $bs012[0];
                $vish = rand( 1, 3 );
                if ( $vish == 1 )
                {
                 $bss1 = 3;
                }
                if ( $vish == 2 )
                {
                 $bss2 = 3;
                }
                if ( $vish == 3 )
                {
                 $bss3 = 3;
                }

                $bonusik = "&reel=$bss1|$bss2|$bss3|$bss0|$bonus_win|reel=$bss12|$bss22|$bss32|$bss02|$bonus_win";
}

            if ( $mega == 2 )
                { 
                $bs1 = array( 0, 1, 2, 4, 5, 6  );
                shuffle( &$bs1 );
                $bs01 = array( 3, 10, 23 );
                shuffle( &$bs01 );
                $bss1 = $bs1[0];
                $bss2 = $bs1[1];
                $bss3 = $bs1[2];
                $bss0 = $bs01[0];
                $bs012 = array( 0, 7, 13, 20 );
                shuffle( &$bs012 );
                $bss12 = $bs1[3];
                $bss22 = $bs1[4];
                $bss32 = $bs1[5];
                $bss02 = $bs012[0];
                $vish = rand( 1, 3 );
                if ( $vish == 1 )
                {
                 $bss1 = 3;
                }
                if ( $vish == 2 )
                {
                 $bss2 = 3;
                }
                if ( $vish == 3 )
                {
                 $bss3 = 3;
                }

                $bs14 = array( 0, 1, 2, 3, 5, 6  );
                shuffle( &$bs14 );
                $bs04 = array( 1, 14 );
                shuffle( &$bs04 );
                $bss14 = $bs14[1];
                $bss24 = $bs14[2];
                $bss34 = $bs14[3];
                $bss04 = $bs04[0];

                $bs15 = array( 1, 2, 3, 6, 5  );
                shuffle( &$bs15 );
                $bs05 = array( 1, 14 );
                shuffle( &$bs05 );
                $bss15 = $bs15[1];
                $bss25 = $bs15[2];
                $bss35 = $bs15[3];
                $bss05 = $bs05[0];

                $bs16 = array( 0, 1, 2, 3, 4, 5  );
                shuffle( &$bs16 );
                $bs06 = array( 19 );
                shuffle( &$bs06 );
                $bss16 = $bs16[1];
                $bss26 = $bs16[2];
                $bss36 = $bs16[3];
                $bss06 = $bs06[0];
            $me = rand( 1, 2 );
            if ( $me == 1 )
                { 
                $bonusik = "&reel=$bss16|$bss26|$bss36|$bss06|$bonus_win|reel=$bss15|$bss25|$bss35|$bss05|$bonus_win|reel=$bss14|$bss24|$bss34|$bss04|$bonus_win|reel=$bss1|$bss2|$bss3|$bss0|$bonus_win|reel=$bss12|$bss22|$bss32|$bss02|$bonus_win";
               }
            if ( $me == 2 )
                { 
                $bonusik = "&reel=$bss15|$bss25|$bss35|$bss05|$bonus_win|reel=$bss14|$bss24|$bss34|$bss04|$bonus_win|reel=$bss16|$bss26|$bss36|$bss06|$bonus_win|reel=$bss1|$bss2|$bss3|$bss0|$bonus_win|reel=$bss12|$bss22|$bss32|$bss02|$bonus_win";
               }

 }












                
            }

            if ( $goldsvet == 4 )
            {
            $mega = rand( 1, 2 );
            if ( $mega == 1 ) 
             {
                $bs1 = array( 0, 1, 2, 4, 5, 6  );
                shuffle( &$bs1 );
                $bs01 = array( 3, 10, 23 );
                shuffle( &$bs01 );
                $bss1 = $bs1[1];
                $bss2 = $bs1[2];
                $bss3 = $bs1[3];
                $bss0 = $bs01[0];
                $vish = rand( 1, 3 );

                if ( $vish == 1 )
                {
                 $bss1 = 3;
                }
                if ( $vish == 2 )
                {
                 $bss2 = 3;
                }
                if ( $vish == 3 )
                {
                 $bss3 = 3;
                }

                $bs12 = array( 0, 1, 2, 3, 4, 5, 6  );
                shuffle( &$bs12 );
                $bs02 = array( 0, 7, 13, 20 );
                shuffle( &$bs02 );
                $bss12 = $bs12[1];
                $bss22 = $bs12[2];
                $bss32 = $bs12[3];
                $bss02 = $bs02[0];

                $bs13 = array( 0, 1, 2, 3, 4, 5, 6  );
                shuffle( &$bs13 );
                $bs03 = array( 0, 7, 13, 20 );
                shuffle( &$bs03 );
                $bss13 = $bs13[1];
                $bss23 = $bs13[2];
                $bss33 = $bs13[3];
                $bss03 = $bs03[0];
                $bonusik = "&reel=$bss1|$bss2|$bss3|$bss0|$bonus_win|reel=$bss12|$bss22|$bss32|$bss02|$bonus_win|reel=$bss13|$bss23|$bss33|$bss03|$bonus_win";
             }  
            if ( $mega == 2 ) 
             {
                $bs1 = array( 0, 1, 2, 4, 5, 6  );
                shuffle( &$bs1 );
                $bs01 = array( 3, 10, 23 );
                shuffle( &$bs01 );
                $bss1 = $bs1[1];
                $bss2 = $bs1[2];
                $bss3 = $bs1[3];
                $bss0 = $bs01[0];
                $vish = rand( 1, 3 );

                if ( $vish == 1 )
                {
                 $bss1 = 3;
                }
                if ( $vish == 2 )
                {
                 $bss2 = 3;
                }
                if ( $vish == 3 )
                {
                 $bss3 = 3;
                }

                $bs12 = array( 0, 1, 2, 3, 4, 5, 6  );
                shuffle( &$bs12 );
                $bs02 = array( 0, 7, 13, 20 );
                shuffle( &$bs02 );
                $bss12 = $bs12[1];
                $bss22 = $bs12[2];
                $bss32 = $bs12[3];
                $bss02 = $bs02[0];

                $bs13 = array( 0, 1, 2, 3, 4, 5, 6  );
                shuffle( &$bs13 );
                $bs03 = array( 0, 7, 13, 20 );
                shuffle( &$bs03 );
                $bss13 = $bs13[1];
                $bss23 = $bs13[2];
                $bss33 = $bs13[3];
                $bss03 = $bs03[0];
                $bonusik = "&reel=$bss13|$bss23|$bss33|$bss03|$bonus_win|reel=$bss1|$bss2|$bss3|$bss0|$bonus_win|reel=$bss12|$bss22|$bss32|$bss02|$bonus_win";
             } 
}


            if ( $goldsvet == 5 )
            {
           $mega = rand( 1, 3 );
            if ( $mega == 1 ) 
             {
                $bs1 = array( 0, 1, 2, 4, 5, 6  );
                shuffle( &$bs1 );
                $bs01 = array( 3, 10, 23 );
                shuffle( &$bs01 );
                $bss1 = $bs1[1];
                $bss2 = $bs1[2];
                $bss3 = $bs1[3];
                $bss0 = $bs01[0];
                $vish = rand( 1, 3 );

                if ( $vish == 1 )
                {
                 $bss1 = 3;
                }
                if ( $vish == 2 )
                {
                 $bss2 = 3;
                }
                if ( $vish == 3 )
                {
                 $bss3 = 3;
                }

                $bs12 = array( 0, 1, 2, 3, 4, 5, 6  );
                shuffle( &$bs12 );
                $bs02 = array( 0, 7, 13, 20 );
                shuffle( &$bs02 );
                $bss12 = $bs12[1];
                $bss22 = $bs12[2];
                $bss32 = $bs12[3];
                $bss02 = $bs02[0];

                $bs13 = array( 0, 1, 2, 3, 4, 5, 6  );
                shuffle( &$bs13 );
                $bs03 = array( 0, 7, 13, 20 );
                shuffle( &$bs03 );
                $bss13 = $bs13[1];
                $bss23 = $bs13[2];
                $bss33 = $bs13[3];
                $bss03 = $bs03[0];

                $bs14 = array( 0, 1, 2, 3, 4, 5, 6  );
                shuffle( &$bs14 );
                $bs04 = array( 0, 7, 13, 20 );
                shuffle( &$bs04 );
                $bss14 = $bs14[1];
                $bss24 = $bs14[2];
                $bss34 = $bs14[3];
                $bss04 = $bs04[0];

                $bonusik = "&reel=$bss1|$bss2|$bss3|$bss0|$bonus_win|reel=$bss12|$bss22|$bss32|$bss02|$bonus_win|reel=$bss13|$bss23|$bss33|$bss03|$bonus_win|reel=$bss14|$bss24|$bss34|$bss04|$bonus_win";
             } 

            if ( $mega == 2 ) 
             {
                $bs1 = array( 0, 1, 2, 4, 5, 6  );
                shuffle( &$bs1 );
                $bs01 = array( 3, 10, 23 );
                shuffle( &$bs01 );
                $bss1 = $bs1[1];
                $bss2 = $bs1[2];
                $bss3 = $bs1[3];
                $bss0 = $bs01[0];
                $vish = rand( 1, 3 );

                if ( $vish == 1 )
                {
                 $bss1 = 3;
                }
                if ( $vish == 2 )
                {
                 $bss2 = 3;
                }
                if ( $vish == 3 )
                {
                 $bss3 = 3;
                }

                $bs12 = array( 0, 1, 2, 3, 4, 5, 6  );
                shuffle( &$bs12 );
                $bs02 = array( 0, 7, 13, 20 );
                shuffle( &$bs02 );
                $bss12 = $bs12[1];
                $bss22 = $bs12[2];
                $bss32 = $bs12[3];
                $bss02 = $bs02[0];

                $bs13 = array( 0, 1, 2, 3, 4, 5, 6  );
                shuffle( &$bs13 );
                $bs03 = array( 0, 7, 13, 20 );
                shuffle( &$bs03 );
                $bss13 = $bs13[1];
                $bss23 = $bs13[2];
                $bss33 = $bs13[3];
                $bss03 = $bs03[0];

                $bs14 = array( 0, 1, 2, 3, 4, 5, 6  );
                shuffle( &$bs14 );
                $bs04 = array( 0, 7, 13, 20 );
                shuffle( &$bs04 );
                $bss14 = $bs14[1];
                $bss24 = $bs14[2];
                $bss34 = $bs14[3];
                $bss04 = $bs04[0];

                $bonusik = "&reel=$bss12|$bss22|$bss32|$bss02|$bonus_win|reel=$bss1|$bss2|$bss3|$bss0|$bonus_win|reel=$bss13|$bss23|$bss33|$bss03|$bonus_win|reel=$bss14|$bss24|$bss34|$bss04|$bonus_win";
             }

           if ( $mega == 3 ) 
             {
                $bs1 = array( 0, 1, 2, 4, 5, 6  );
                shuffle( &$bs1 );
                $bs01 = array( 3, 10, 23 );
                shuffle( &$bs01 );
                $bss1 = $bs1[1];
                $bss2 = $bs1[2];
                $bss3 = $bs1[3];
                $bss0 = $bs01[0];
                $vish = rand( 1, 3 );

                if ( $vish == 1 )
                {
                 $bss1 = 3;
                }
                if ( $vish == 2 )
                {
                 $bss2 = 3;
                }
                if ( $vish == 3 )
                {
                 $bss3 = 3;
                }

                $bs12 = array( 0, 1, 2, 3, 4, 5, 6  );
                shuffle( &$bs12 );
                $bs02 = array( 0, 7, 13, 20 );
                shuffle( &$bs02 );
                $bss12 = $bs12[1];
                $bss22 = $bs12[2];
                $bss32 = $bs12[3];
                $bss02 = $bs02[0];

                $bs13 = array( 0, 1, 2, 3, 4, 5, 6  );
                shuffle( &$bs13 );
                $bs03 = array( 0, 7, 13, 20 );
                shuffle( &$bs03 );
                $bss13 = $bs13[1];
                $bss23 = $bs13[2];
                $bss33 = $bs13[3];
                $bss03 = $bs03[0];

                $bs14 = array( 0, 1, 2, 3, 4, 5, 6  );
                shuffle( &$bs14 );
                $bs04 = array( 0, 7, 13, 20 );
                shuffle( &$bs04 );
                $bss14 = $bs14[1];
                $bss24 = $bs14[2];
                $bss34 = $bs14[3];
                $bss04 = $bs04[0];

                $bs15 = array( 1, 2, 3, 4, 0, 6  );
                shuffle( &$bs15 );
                $bs05 = array( 6 );
                shuffle( &$bs05 );
                $bss15 = $bs15[1];
                $bss25 = $bs15[2];
                $bss35 = $bs15[3];
                $bss05 = $bs05[0];

                $bs16 = array( 0, 1, 2, 3, 6, 5  );
                shuffle( &$bs16 );
                $bs06 = array( 1, 14 );
                shuffle( &$bs06 );
                $bss16 = $bs16[1];
                $bss26 = $bs16[2];
                $bss36 = $bs16[3];
                $bss06 = $bs06[0];

                $bonusik = "&reel=$bss12|$bss22|$bss32|$bss02|$bonus_win|reel=$bss15|$bss25|$bss35|$bss05|$bonus_win|reel=$bss13|$bss23|$bss33|$bss03|$bonus_win|reel=$bss16|$bss26|$bss36|$bss06|$bonus_win|reel=$bss1|$bss2|$bss3|$bss0|$bonus_win|reel=$bss14|$bss24|$bss34|$bss04|$bonus_win";
             }


  
}

        }



































         if ( $bb_win == 50 )
        {





           if ( $goldsvet == 3 )
            {
                $bs1 = array( 0, 1, 2, 3, 5, 6  );
                shuffle( &$bs1 );
                $bs01 = array( 1, 14 );
                shuffle( &$bs01 );
                $bss1 = $bs1[1];
                $bss2 = $bs1[2];
                $bss3 = $bs1[3];
                $bss0 = $bs01[0];
                $bs012 = array( 0, 7, 13, 20 );
                shuffle( &$bs012 );
                $bss12 = $bs1[4];
                $bss22 = $bs1[5];
                $bss32 = $bs1[6];
                $bss02 = $bs012[0];
                $vish = rand( 1, 3 );
                if ( $vish == 1 )
                {
                 $bss1 = 4;
                }
                if ( $vish == 2 )
                {
                 $bss2 = 4;
                }
                if ( $vish == 3 )
                {
                 $bss3 = 4;
                }

                $bonusik = "&reel=$bss1|$bss2|$bss3|$bss0|$bonus_win|reel=$bss12|$bss22|$bss32|$bss02|$bonus_win";
                
            }

            if ( $goldsvet == 4 )
            {
            $mega = rand( 1, 2 );
            if ( $mega == 1 ) 
             {
                $bs1 = array( 0, 1, 3, 5, 6  );
                shuffle( &$bs1 );
                $bs01 = array( 1, 14 );
                shuffle( &$bs01 );
                $bss1 = $bs1[1];
                $bss2 = $bs1[2];
                $bss3 = $bs1[3];
                $bss0 = $bs01[0];
                $vish = rand( 1, 3 );

                if ( $vish == 1 )
                {
                 $bss1 = 4;
                }
                if ( $vish == 2 )
                {
                 $bss2 = 4;
                }
                if ( $vish == 3 )
                {
                 $bss3 = 4;
                }

                $bs12 = array( 0, 1, 2, 3, 4, 5, 6  );
                shuffle( &$bs12 );
                $bs02 = array( 0, 7, 13, 20 );
                shuffle( &$bs02 );
                $bss12 = $bs12[1];
                $bss22 = $bs12[2];
                $bss32 = $bs12[3];
                $bss02 = $bs02[0];

                $bs13 = array( 0, 1, 2, 3, 4, 5, 6  );
                shuffle( &$bs13 );
                $bs03 = array( 0, 7, 13, 20 );
                shuffle( &$bs03 );
                $bss13 = $bs13[1];
                $bss23 = $bs13[2];
                $bss33 = $bs13[3];
                $bss03 = $bs03[0];
                $bonusik = "&reel=$bss1|$bss2|$bss3|$bss0|$bonus_win|reel=$bss12|$bss22|$bss32|$bss02|$bonus_win|reel=$bss13|$bss23|$bss33|$bss03|$bonus_win";
             }  
            if ( $mega == 2 ) 
             {
                $bs1 = array( 0, 1, 2, 3, 5, 6  );
                shuffle( &$bs1 );
                $bs01 = array( 1, 14 );
                shuffle( &$bs01 );
                $bss1 = $bs1[1];
                $bss2 = $bs1[2];
                $bss3 = $bs1[3];
                $bss0 = $bs01[0];
                $vish = rand( 1, 3 );

                if ( $vish == 1 )
                {
                 $bss1 = 4;
                }
                if ( $vish == 2 )
                {
                 $bss2 = 4;
                }
                if ( $vish == 3 )
                {
                 $bss3 = 4;
                }

                $bs12 = array( 0, 1, 2, 3, 4, 5, 6  );
                shuffle( &$bs12 );
                $bs02 = array( 0, 7, 13, 20 );
                shuffle( &$bs02 );
                $bss12 = $bs12[1];
                $bss22 = $bs12[2];
                $bss32 = $bs12[3];
                $bss02 = $bs02[0];

                $bs13 = array( 0, 1, 2, 3, 4, 5, 6  );
                shuffle( &$bs13 );
                $bs03 = array( 0, 7, 13, 20 );
                shuffle( &$bs03 );
                $bss13 = $bs13[1];
                $bss23 = $bs13[2];
                $bss33 = $bs13[3];
                $bss03 = $bs03[0];
                $bonusik = "&reel=$bss13|$bss23|$bss33|$bss03|$bonus_win|reel=$bss1|$bss2|$bss3|$bss0|$bonus_win|reel=$bss12|$bss22|$bss32|$bss02|$bonus_win";
             } 
}


            if ( $goldsvet == 5 )
            {
           $mega = rand( 1, 3 );
            if ( $mega == 1 ) 
             {
                $bs1 = array( 0, 1, 3, 2, 5, 6  );
                shuffle( &$bs1 );
                $bs01 = array( 1, 14 );
                shuffle( &$bs01 );
                $bss1 = $bs1[1];
                $bss2 = $bs1[2];
                $bss3 = $bs1[3];
                $bss0 = $bs01[0];
                $vish = rand( 1, 3 );

                if ( $vish == 1 )
                {
                 $bss1 = 4;
                }
                if ( $vish == 2 )
                {
                 $bss2 = 4;
                }
                if ( $vish == 3 )
                {
                 $bss3 = 4;
                }

                $bs12 = array( 0, 1, 2, 3, 4, 5, 6  );
                shuffle( &$bs12 );
                $bs02 = array( 0, 7, 13, 20 );
                shuffle( &$bs02 );
                $bss12 = $bs12[1];
                $bss22 = $bs12[2];
                $bss32 = $bs12[3];
                $bss02 = $bs02[0];

                $bs13 = array( 0, 1, 2, 3, 4, 5, 6  );
                shuffle( &$bs13 );
                $bs03 = array( 0, 7, 13, 20 );
                shuffle( &$bs03 );
                $bss13 = $bs13[1];
                $bss23 = $bs13[2];
                $bss33 = $bs13[3];
                $bss03 = $bs03[0];

                $bs14 = array( 0, 1, 2, 3, 4, 5, 6  );
                shuffle( &$bs14 );
                $bs04 = array( 0, 7, 13, 20 );
                shuffle( &$bs04 );
                $bss14 = $bs14[1];
                $bss24 = $bs14[2];
                $bss34 = $bs14[3];
                $bss04 = $bs04[0];

                $bonusik = "&reel=$bss1|$bss2|$bss3|$bss0|$bonus_win|reel=$bss12|$bss22|$bss32|$bss02|$bonus_win|reel=$bss13|$bss23|$bss33|$bss03|$bonus_win|reel=$bss14|$bss24|$bss34|$bss04|$bonus_win";
             } 

            if ( $mega == 2 ) 
             {
                $bs1 = array( 0, 1, 3, 2, 5, 6  );
                shuffle( &$bs1 );
                $bs01 = array( 1, 14 );
                shuffle( &$bs01 );
                $bss1 = $bs1[1];
                $bss2 = $bs1[2];
                $bss3 = $bs1[3];
                $bss0 = $bs01[0];
                $vish = rand( 1, 3 );

                if ( $vish == 1 )
                {
                 $bss1 = 4;
                }
                if ( $vish == 2 )
                {
                 $bss2 = 4;
                }
                if ( $vish == 3 )
                {
                 $bss3 = 4;
                }

                $bs12 = array( 0, 1, 2, 3, 4, 5, 6  );
                shuffle( &$bs12 );
                $bs02 = array( 0, 7, 13, 20 );
                shuffle( &$bs02 );
                $bss12 = $bs12[1];
                $bss22 = $bs12[2];
                $bss32 = $bs12[3];
                $bss02 = $bs02[0];

                $bs13 = array( 0, 1, 2, 3, 4, 5, 6  );
                shuffle( &$bs13 );
                $bs03 = array( 0, 7, 13, 20 );
                shuffle( &$bs03 );
                $bss13 = $bs13[1];
                $bss23 = $bs13[2];
                $bss33 = $bs13[3];
                $bss03 = $bs03[0];

                $bs14 = array( 0, 1, 2, 3, 4, 5, 6  );
                shuffle( &$bs14 );
                $bs04 = array( 0, 7, 13, 20 );
                shuffle( &$bs04 );
                $bss14 = $bs14[1];
                $bss24 = $bs14[2];
                $bss34 = $bs14[3];
                $bss04 = $bs04[0];

                $bonusik = "&reel=$bss12|$bss22|$bss32|$bss02|$bonus_win|reel=$bss1|$bss2|$bss3|$bss0|$bonus_win|reel=$bss13|$bss23|$bss33|$bss03|$bonus_win|reel=$bss14|$bss24|$bss34|$bss04|$bonus_win";
             }

           if ( $mega == 3 ) 
             {
                $bs1 = array( 0, 1, 3, 2, 5, 6  );
                shuffle( &$bs1 );
                $bs01 = array( 1, 14 );
                shuffle( &$bs01 );
                $bss1 = $bs1[1];
                $bss2 = $bs1[2];
                $bss3 = $bs1[3];
                $bss0 = $bs01[0];
                $vish = rand( 1, 3 );

                if ( $vish == 1 )
                {
                 $bss1 = 4;
                }
                if ( $vish == 2 )
                {
                 $bss2 = 4;
                }
                if ( $vish == 3 )
                {
                 $bss3 = 4;
                }

                $bs12 = array( 0, 1, 2, 3, 4, 5, 6  );
                shuffle( &$bs12 );
                $bs02 = array( 0, 7, 13, 20 );
                shuffle( &$bs02 );
                $bss12 = $bs12[1];
                $bss22 = $bs12[2];
                $bss32 = $bs12[3];
                $bss02 = $bs02[0];

                $bs13 = array( 0, 1, 2, 3, 4, 5, 6  );
                shuffle( &$bs13 );
                $bs03 = array( 0, 7, 13, 20 );
                shuffle( &$bs03 );
                $bss13 = $bs13[1];
                $bss23 = $bs13[2];
                $bss33 = $bs13[3];
                $bss03 = $bs03[0];

                $bs14 = array( 0, 1, 2, 3, 4, 5, 6  );
                shuffle( &$bs14 );
                $bs04 = array( 0, 7, 13, 20 );
                shuffle( &$bs04 );
                $bss14 = $bs14[1];
                $bss24 = $bs14[2];
                $bss34 = $bs14[3];
                $bss04 = $bs04[0];

                $bs15 = array( 1, 2, 3, 4, 0, 5  );
                shuffle( &$bs15 );
                $bs05 = array( 19 );
                shuffle( &$bs05 );
                $bss15 = $bs15[1];
                $bss25 = $bs15[2];
                $bss35 = $bs15[3];
                $bss05 = $bs05[0];

                $bs16 = array( 0, 1, 3, 4, 5, 6  );
                shuffle( &$bs16 );
                $bs06 = array( 5, 11, 17, 24 );
                shuffle( &$bs06 );
                $bss16 = $bs16[1];
                $bss26 = $bs16[2];
                $bss36 = $bs16[3];
                $bss06 = $bs06[0];

                $bonusik = "&reel=$bss12|$bss22|$bss32|$bss02|$bonus_win|reel=$bss15|$bss25|$bss35|$bss05|$bonus_win|reel=$bss13|$bss23|$bss33|$bss03|$bonus_win|reel=$bss16|$bss26|$bss36|$bss06|$bonus_win|reel=$bss1|$bss2|$bss3|$bss0|$bonus_win|reel=$bss14|$bss24|$bss34|$bss04|$bonus_win";
             }


  
}

        }


































         if ( $bb_win == 70 )
        {





           if ( $goldsvet == 3 )
            {
                $bs1 = array( 0, 1, 3, 4, 2, 6  );
                shuffle( &$bs1 );
                $bs01 = array( 6 );
                shuffle( &$bs01 );
                $bss1 = $bs1[0];
                $bss2 = $bs1[1];
                $bss3 = $bs1[2];
                $bss0 = $bs01[0];
                $bs012 = array( 0, 7, 13, 20 );
                shuffle( &$bs012 );
                $bss12 = $bs1[3];
                $bss22 = $bs1[4];
                $bss32 = $bs1[5];
                $bss02 = $bs012[0];
                $vish = rand( 1, 3 );
                if ( $vish == 1 )
                {
                 $bss1 = 5;
                }
                if ( $vish == 2 )
                {
                 $bss2 = 5;
                }
                if ( $vish == 3 )
                {
                 $bss3 = 5;
                }

                $bonusik = "&reel=$bss1|$bss2|$bss3|$bss0|$bonus_win|reel=$bss12|$bss22|$bss32|$bss02|0";
                
            }

            if ( $goldsvet == 4 )
            {
            $mega = rand( 1, 2 );
            if ( $mega == 1 ) 
             {
                $bs1 = array( 0, 1, 2, 3, 4, 6  );
                shuffle( &$bs1 );
                $bs01 = array( 6 );
                shuffle( &$bs01 );
                $bss1 = $bs1[1];
                $bss2 = $bs1[2];
                $bss3 = $bs1[3];
                $bss0 = $bs01[0];
                $vish = rand( 1, 3 );

                if ( $vish == 1 )
                {
                 $bss1 = 5;
                }
                if ( $vish == 2 )
                {
                 $bss2 = 5;
                }
                if ( $vish == 3 )
                {
                 $bss3 = 5;
                }

                $bs12 = array( 0, 1, 2, 3, 4, 5, 6  );
                shuffle( &$bs12 );
                $bs02 = array( 0, 7, 13, 20 );
                shuffle( &$bs02 );
                $bss12 = $bs12[1];
                $bss22 = $bs12[2];
                $bss32 = $bs12[3];
                $bss02 = $bs02[0];

                $bs13 = array( 0, 1, 2, 3, 4, 5, 6  );
                shuffle( &$bs13 );
                $bs03 = array( 0, 7, 13, 20 );
                shuffle( &$bs03 );
                $bss13 = $bs13[1];
                $bss23 = $bs13[2];
                $bss33 = $bs13[3];
                $bss03 = $bs03[0];
                $bonusik = "&reel=$bss1|$bss2|$bss3|$bss0|$bonus_win|reel=$bss12|$bss22|$bss32|$bss02|$bonus_win|reel=$bss13|$bss23|$bss33|$bss03|$bonus_win";
             }  
            if ( $mega == 2 ) 
             {
                $bs1 = array( 0, 1, 2, 3, 4, 6  );
                shuffle( &$bs1 );
                $bs01 = array( 6 );
                shuffle( &$bs01 );
                $bss1 = $bs1[1];
                $bss2 = $bs1[2];
                $bss3 = $bs1[3];
                $bss0 = $bs01[0];
                $vish = rand( 1, 3 );

                if ( $vish == 1 )
                {
                 $bss1 = 5;
                }
                if ( $vish == 2 )
                {
                 $bss2 = 5;
                }
                if ( $vish == 3 )
                {
                 $bss3 = 5;
                }

                $bs12 = array( 0, 1, 2, 3, 4, 5, 6  );
                shuffle( &$bs12 );
                $bs02 = array( 0, 7, 13, 20 );
                shuffle( &$bs02 );
                $bss12 = $bs12[1];
                $bss22 = $bs12[2];
                $bss32 = $bs12[3];
                $bss02 = $bs02[0];

                $bs13 = array( 0, 1, 2, 3, 4, 5, 6  );
                shuffle( &$bs13 );
                $bs03 = array( 0, 7, 13, 20 );
                shuffle( &$bs03 );
                $bss13 = $bs13[1];
                $bss23 = $bs13[2];
                $bss33 = $bs13[3];
                $bss03 = $bs03[0];
                $bonusik = "&reel=$bss13|$bss23|$bss33|$bss03|$bonus_win|reel=$bss1|$bss2|$bss3|$bss0|$bonus_win|reel=$bss12|$bss22|$bss32|$bss02|$bonus_win";
             } 
}


            if ( $goldsvet == 5 )
            {
           $mega = rand( 1, 3 );
            if ( $mega == 1 ) 
             {
                $bs1 = array( 0, 1, 2, 3, 4, 6  );
                shuffle( &$bs1 );
                $bs01 = array( 6 );
                shuffle( &$bs01 );
                $bss1 = $bs1[1];
                $bss2 = $bs1[2];
                $bss3 = $bs1[3];
                $bss0 = $bs01[0];
                $vish = rand( 1, 3 );

                if ( $vish == 1 )
                {
                 $bss1 = 5;
                }
                if ( $vish == 2 )
                {
                 $bss2 = 5;
                }
                if ( $vish == 3 )
                {
                 $bss3 = 5;
                }

                $bs12 = array( 0, 1, 2, 3, 4, 5, 6  );
                shuffle( &$bs12 );
                $bs02 = array( 0, 7, 13, 20 );
                shuffle( &$bs02 );
                $bss12 = $bs12[1];
                $bss22 = $bs12[2];
                $bss32 = $bs12[3];
                $bss02 = $bs02[0];

                $bs13 = array( 0, 1, 2, 3, 4, 5, 6  );
                shuffle( &$bs13 );
                $bs03 = array( 0, 7, 13, 20 );
                shuffle( &$bs03 );
                $bss13 = $bs13[1];
                $bss23 = $bs13[2];
                $bss33 = $bs13[3];
                $bss03 = $bs03[0];

                $bs14 = array( 0, 1, 2, 3, 4, 5, 6  );
                shuffle( &$bs14 );
                $bs04 = array( 0, 7, 13, 20 );
                shuffle( &$bs04 );
                $bss14 = $bs14[1];
                $bss24 = $bs14[2];
                $bss34 = $bs14[3];
                $bss04 = $bs04[0];

                $bonusik = "&reel=$bss1|$bss2|$bss3|$bss0|$bonus_win|reel=$bss12|$bss22|$bss32|$bss02|$bonus_win|reel=$bss13|$bss23|$bss33|$bss03|$bonus_win|reel=$bss14|$bss24|$bss34|$bss04|$bonus_win";
             } 

            if ( $mega == 2 ) 
             {
                $bs1 = array( 0, 1, 2, 3, 4, 6  );
                shuffle( &$bs1 );
                $bs01 = array( 6 );
                shuffle( &$bs01 );
                $bss1 = $bs1[1];
                $bss2 = $bs1[2];
                $bss3 = $bs1[3];
                $bss0 = $bs01[0];
                $vish = rand( 1, 3 );

                if ( $vish == 1 )
                {
                 $bss1 = 5;
                }
                if ( $vish == 2 )
                {
                 $bss2 = 5;
                }
                if ( $vish == 3 )
                {
                 $bss3 = 5;
                }

                $bs12 = array( 0, 1, 2, 3, 4, 5, 6  );
                shuffle( &$bs12 );
                $bs02 = array( 0, 7, 13, 20 );
                shuffle( &$bs02 );
                $bss12 = $bs12[1];
                $bss22 = $bs12[2];
                $bss32 = $bs12[3];
                $bss02 = $bs02[0];

                $bs13 = array( 0, 1, 2, 3, 4, 5, 6  );
                shuffle( &$bs13 );
                $bs03 = array( 0, 7, 13, 20 );
                shuffle( &$bs03 );
                $bss13 = $bs13[1];
                $bss23 = $bs13[2];
                $bss33 = $bs13[3];
                $bss03 = $bs03[0];

                $bs14 = array( 0, 1, 2, 3, 4, 5, 6  );
                shuffle( &$bs14 );
                $bs04 = array( 0, 7, 13, 20 );
                shuffle( &$bs04 );
                $bss14 = $bs14[1];
                $bss24 = $bs14[2];
                $bss34 = $bs14[3];
                $bss04 = $bs04[0];

                $bonusik = "&reel=$bss12|$bss22|$bss32|$bss02|$bonus_win|reel=$bss1|$bss2|$bss3|$bss0|$bonus_win|reel=$bss13|$bss23|$bss33|$bss03|$bonus_win|reel=$bss14|$bss24|$bss34|$bss04|$bonus_win";
             }

           if ( $mega == 3 ) 
             {
                $bs1 = array( 0, 1, 2, 3, 4, 6  );
                shuffle( &$bs1 );
                $bs01 = array( 6 );
                shuffle( &$bs01 );
                $bss1 = $bs1[1];
                $bss2 = $bs1[2];
                $bss3 = $bs1[3];
                $bss0 = $bs01[0];
                $vish = rand( 1, 3 );

                if ( $vish == 1 )
                {
                 $bss1 = 5;
                }
                if ( $vish == 2 )
                {
                 $bss2 = 5;
                }
                if ( $vish == 3 )
                {
                 $bss3 = 5;
                }

                $bs12 = array( 0, 1, 2, 3, 4, 5, 6  );
                shuffle( &$bs12 );
                $bs02 = array( 0, 7, 13, 20 );
                shuffle( &$bs02 );
                $bss12 = $bs12[1];
                $bss22 = $bs12[2];
                $bss32 = $bs12[3];
                $bss02 = $bs02[0];

                $bs13 = array( 0, 1, 2, 3, 4, 5, 6  );
                shuffle( &$bs13 );
                $bs03 = array( 0, 7, 13, 20 );
                shuffle( &$bs03 );
                $bss13 = $bs13[1];
                $bss23 = $bs13[2];
                $bss33 = $bs13[3];
                $bss03 = $bs03[0];

                $bs14 = array( 0, 1, 2, 3, 4, 5, 6  );
                shuffle( &$bs14 );
                $bs04 = array( 0, 7, 13, 20 );
                shuffle( &$bs04 );
                $bss14 = $bs14[1];
                $bss24 = $bs14[2];
                $bss34 = $bs14[3];
                $bss04 = $bs04[0];

                $bs15 = array( 1, 2, 3, 4, 0, 5  );
                shuffle( &$bs15 );
                $bs05 = array( 19 );
                shuffle( &$bs05 );
                $bss15 = $bs15[1];
                $bss25 = $bs15[2];
                $bss35 = $bs15[3];
                $bss05 = $bs05[0];

                $bs16 = array( 0, 1, 3, 4, 5, 6  );
                shuffle( &$bs16 );
                $bs06 = array( 5, 11, 17, 24 );
                shuffle( &$bs06 );
                $bss16 = $bs16[1];
                $bss26 = $bs16[2];
                $bss36 = $bs16[3];
                $bss06 = $bs06[0];

                $bonusik = "&reel=$bss12|$bss22|$bss32|$bss02|$bonus_win|reel=$bss15|$bss25|$bss35|$bss05|$bonus_win|reel=$bss13|$bss23|$bss33|$bss03|$bonus_win|reel=$bss16|$bss26|$bss36|$bss06|$bonus_win|reel=$bss1|$bss2|$bss3|$bss0|$bonus_win|reel=$bss14|$bss24|$bss34|$bss04|$bonus_win";
             }


  
}

        }

































         if ( $bb_win == 100 )
        {



           if ( $goldsvet == 3 )
            {


            $mega = rand( 1, 2 );
            if ( $mega == 1 ) 
             {

                $bs1 = array( 0, 1, 2, 3, 4, 5  );
                shuffle( &$bs1 );
                $bs01 = array( 19 );
                shuffle( &$bs01 );
                $bss1 = $bs1[0];
                $bss2 = $bs1[1];
                $bss3 = $bs1[2];
                $bss0 = $bs01[0];
                $bs012 = array( 0, 7, 13, 20 );
                shuffle( &$bs012 );
                $bss12 = $bs1[3];
                $bss22 = $bs1[4];
                $bss32 = $bs1[5];
                $bss02 = $bs012[0];
                $vish = rand( 1, 3 );
                if ( $vish == 1 )
                {
                 $bss1 = 6;
                }
                if ( $vish == 2 )
                {
                 $bss2 = 6;
                }
                if ( $vish == 3 )
                {
                 $bss3 = 6;
                }

                $bonusik = "&reel=$bss1|$bss2|$bss3|$bss0|$bonus_win|reel=$bss12|$bss22|$bss32|$bss02|0";
                }
            if ( $mega == 2 ) 
             {

                $bs1 = array( 0, 1, 2, 4, 5, 6  );
                shuffle( &$bs1 );
                $bs01 = array( 3, 10, 23 );
                shuffle( &$bs01 );
                $bss1 = $bs1[0];
                $bss2 = $bs1[1];
                $bss3 = $bs1[2];
                $bss0 = $bs01[0];
                $bs012 = array( 0, 7, 13, 20 );
                shuffle( &$bs012 );
                $bss12 = $bs1[3];
                $bss22 = $bs1[4];
                $bss32 = $bs1[5];
                $bss02 = $bs012[0];
                $vish = rand( 1, 3 );
                if ( $vish == 1 )
                {
                 $bss1 = 3;
                }
                if ( $vish == 2 )
                {
                 $bss2 = 3;
                }
                if ( $vish == 3 )
                {
                 $bss3 = 3;
                }



                $bs14 = array( 0, 1, 2, 4, 5, 6  );
                shuffle( &$bs14 );
                $bs04 = array( 3, 10, 23 );
                shuffle( &$bs04 );
                $bss14 = $bs14[1];
                $bss24 = $bs14[2];
                $bss34 = $bs14[3];
                $bss04 = $bs04[0];
                $vish = rand( 1, 3 );
                if ( $vish == 1 )
                {
                 $bss14 = 3;
                }
                if ( $vish == 2 )
                {
                 $bss24 = 3;
                }
                if ( $vish == 3 )
                {
                 $bss34 = 3;
                }






                $bs13 = array( 0, 1, 2, 4, 5, 6  );
                shuffle( &$bs13 );
                $bs03 = array( 3, 10, 23 );
                shuffle( &$bs03 );
                $bss13 = $bs13[1];
                $bss23 = $bs13[2];
                $bss33 = $bs13[3];
                $bss03 = $bs03[0];
                $vish = rand( 1, 3 );
                if ( $vish == 1 )
                {
                 $bss13 = 3;
                }
                if ( $vish == 2 )
                {
                 $bss23 = 3;
                }
                if ( $vish == 3 )
                {
                 $bss33 = 3;
                }










                $bs15 = array( 1, 2, 4, 0, 5  );
                shuffle( &$bs15 );
                $bs05 = array( 3, 10, 23 );
                shuffle( &$bs05 );
                $bss15 = $bs15[1];
                $bss25 = $bs15[2];
                $bss35 = $bs15[3];
                $bss05 = $bs05[0];
                $vish = rand( 1, 3 );
                if ( $vish == 1 )
                {
                 $bss15 = 3;
                }
                if ( $vish == 2 )
                {
                 $bss25 = 3;
                }
                if ( $vish == 3 )
                {
                 $bss35 = 3;
                }


                $bs16 = array( 0, 1, 2, 4, 5, 6  );
                shuffle( &$bs16 );
                $bs06 = array( 3, 10, 23 );
                shuffle( &$bs06 );
                $bss16 = $bs16[1];
                $bss26 = $bs16[2];
                $bss36 = $bs16[3];
                $bss06 = $bs06[0];
                $vish = rand( 1, 3 );
                if ( $vish == 1 )
                {
                 $bss16 = 3;
                }
                if ( $vish == 2 )
                {
                 $bss26 = 3;
                }
                if ( $vish == 3 )
                {
                 $bss36 = 3;
                }


            $bonus_win1 = $bonus_win / 5;
            $bonus_win2 = $bonus_win1 + $bonus_win1;
            $bonus_win3 = $bonus_win2 + $bonus_win1;
            $bonus_win4 = $bonus_win3 + $bonus_win1;
            $bonus_win5 = $bonus_win4 + $bonus_win1;












                $bonusik = "&reel=$bss16|$bss26|$bss36|$bss06|$bonus_win1|reel=$bss15|$bss25|$bss35|$bss05|$bonus_win2|reel=$bss14|$bss24|$bss34|$bss04|$bonus_win3|reel=$bss13|$bss23|$bss33|$bss03|$bonus_win4|reel=$bss1|$bss2|$bss3|$bss0|$bonus_win5|reel=$bss12|$bss22|$bss32|$bss02|$bonus_win";
                }
                
            }

            if ( $goldsvet == 4 )
            {
            $mega = rand( 1, 2 );
            if ( $mega == 1 ) 
             {
            $me = rand( 1, 2 );

            if ( $me == 1 ) 
             {
                $bs1 = array( 0, 1, 2, 3, 4, 5  );
                shuffle( &$bs1 );
                $bs01 = array( 19 );
                shuffle( &$bs01 );
                $bss1 = $bs1[1];
                $bss2 = $bs1[2];
                $bss3 = $bs1[3];
                $bss0 = $bs01[0];
                $vish = rand( 1, 3 );

                if ( $vish == 1 )
                {
                 $bss1 = 6;
                }
                if ( $vish == 2 )
                {
                 $bss2 = 6;
                }
                if ( $vish == 3 )
                {
                 $bss3 = 6;
                }

                $bs12 = array( 0, 1, 2, 3, 4, 5, 6  );
                shuffle( &$bs12 );
                $bs02 = array( 0, 7, 13, 20 );
                shuffle( &$bs02 );
                $bss12 = $bs12[1];
                $bss22 = $bs12[2];
                $bss32 = $bs12[3];
                $bss02 = $bs02[0];

                $bs13 = array( 0, 1, 2, 3, 4, 5, 6  );
                shuffle( &$bs13 );
                $bs03 = array( 0, 7, 13, 20 );
                shuffle( &$bs03 );
                $bss13 = $bs13[1];
                $bss23 = $bs13[2];
                $bss33 = $bs13[3];
                $bss03 = $bs03[0];
                $bonusik = "&reel=$bss1|$bss2|$bss3|$bss0|$bonus_win|reel=$bss12|$bss22|$bss32|$bss02|$bonus_win|reel=$bss13|$bss23|$bss33|$bss03|$bonus_win";
             }  
 
            if ( $me == 2 ) 
             {
                $bs1 = array( 0, 1, 2, 3, 5, 6  );
                shuffle( &$bs1 );
                $bs01 = array( 1, 14 );
                shuffle( &$bs01 );
                $bss1 = $bs1[1];
                $bss2 = $bs1[2];
                $bss3 = $bs1[3];
                $bss0 = $bs01[0];
                $vish = rand( 1, 3 );

                if ( $vish == 1 )
                {
                 $bss1 = 4;
                }
                if ( $vish == 2 )
                {
                 $bss2 = 4;
                }
                if ( $vish == 3 )
                {
                 $bss3 = 4;
                }

                $bs12 = array( 0, 1, 2, 4, 5, 6  );
                shuffle( &$bs12 );
                $bs02 = array( 3, 10, 23 );
                shuffle( &$bs02 );
                $bss12 = $bs12[1];
                $bss22 = $bs12[2];
                $bss32 = $bs12[3];
                $bss02 = $bs02[0];
                $vish = rand( 1, 3 );

                if ( $vish == 1 )
                {
                 $bss12 = 3;
                }
                if ( $vish == 2 )
                {
                 $bss22 = 3;
                }
                if ( $vish == 3 )
                {
                 $bss32 = 3;
                }

                $bs13 = array( 0, 1, 2, 3, 4, 5, 6  );
                shuffle( &$bs13 );
                $bs03 = array( 0, 7, 13, 20 );
                shuffle( &$bs03 );
                $bss13 = $bs13[1];
                $bss23 = $bs13[2];
                $bss33 = $bs13[3];
                $bss03 = $bs03[0];

                $bs14 = array( 0, 1, 2, 4, 5, 6  );
                shuffle( &$bs14 );
                $bs04 = array( 3, 10, 23 );
                shuffle( &$bs04 );
                $bss14 = $bs12[1];
                $bss24 = $bs12[2];
                $bss34 = $bs12[3];
                $bss04 = $bs02[0];
                $vish = rand( 1, 3 );

                if ( $vish == 1 )
                {
                 $bss14 = 3;
                }
                if ( $vish == 2 )
                {
                 $bss24 = 3;
                }
                if ( $vish == 3 )
                {
                 $bss34 = 3;
                }

                $bs15 = array( 0, 1, 3, 4, 5, 6  );
                shuffle( &$bs15 );
                $bs05 = array( 5, 11, 17, 24 );
                shuffle( &$bs05 );
                $bss15 = $bs15[1];
                $bss25 = $bs15[2];
                $bss35 = $bs15[3];
                $bss05 = $bs05[0];
                $vish = rand( 1, 3 );

                if ( $vish == 1 )
                {
                 $bss15 = 2;
                }
                if ( $vish == 2 )
                {
                 $bss25 = 2;
                }
                if ( $vish == 3 )
                {
                 $bss35 = 2;
                }

$bonus_win1 = $allbet * 50;

$bonus_win2 = $allbet * 20;
$bonus_win3 = $allbet * 20;
$bonus_win4 = $allbet * 10;
                $bonusik = "&reel=$bss1|$bss2|$bss3|$bss0|$bonus_win1|reel=$bss12|$bss22|$bss32|$bss02|$bonus_win2|reel=$bss14|$bss24|$bss34|$bss04|$bonus_win3|reel=$bss15|$bss25|$bss35|$bss05|$bonus_win4|reel=$bss13|$bss23|$bss33|$bss03|$bonus_win";
             }


}


            if ( $mega == 2 ) 
             {
                $bs1 = array( 0, 1, 2, 3, 4, 5  );
                shuffle( &$bs1 );
                $bs01 = array( 19 );
                shuffle( &$bs01 );
                $bss1 = $bs1[1];
                $bss2 = $bs1[2];
                $bss3 = $bs1[3];
                $bss0 = $bs01[0];
                $vish = rand( 1, 3 );

                if ( $vish == 1 )
                {
                 $bss1 = 6;
                }
                if ( $vish == 2 )
                {
                 $bss2 = 6;
                }
                if ( $vish == 3 )
                {
                 $bss3 = 6;
                }

                $bs12 = array( 0, 1, 2, 3, 4, 5, 6  );
                shuffle( &$bs12 );
                $bs02 = array( 0, 7, 13, 20 );
                shuffle( &$bs02 );
                $bss12 = $bs12[1];
                $bss22 = $bs12[2];
                $bss32 = $bs12[3];
                $bss02 = $bs02[0];

                $bs13 = array( 0, 1, 2, 3, 4, 5, 6  );
                shuffle( &$bs13 );
                $bs03 = array( 0, 7, 13, 20 );
                shuffle( &$bs03 );
                $bss13 = $bs13[1];
                $bss23 = $bs13[2];
                $bss33 = $bs13[3];
                $bss03 = $bs03[0];
                $bonusik = "&reel=$bss13|$bss23|$bss33|$bss03|$bonus_win|reel=$bss1|$bss2|$bss3|$bss0|$bonus_win|reel=$bss12|$bss22|$bss32|$bss02|$bonus_win";
             } 
}


            if ( $goldsvet == 5 )
            {
           $mega = rand( 1, 3 );
            if ( $mega == 1 ) 
             {
                $bs1 = array( 0, 1, 2, 3, 4, 5  );
                shuffle( &$bs1 );
                $bs01 = array( 19 );
                shuffle( &$bs01 );
                $bss1 = $bs1[1];
                $bss2 = $bs1[2];
                $bss3 = $bs1[3];
                $bss0 = $bs01[0];
                $vish = rand( 1, 3 );

                if ( $vish == 1 )
                {
                 $bss1 = 6;
                }
                if ( $vish == 2 )
                {
                 $bss2 = 6;
                }
                if ( $vish == 3 )
                {
                 $bss3 = 6;
                }

                $bs12 = array( 0, 1, 2, 3, 4, 5, 6  );
                shuffle( &$bs12 );
                $bs02 = array( 0, 7, 13, 20 );
                shuffle( &$bs02 );
                $bss12 = $bs12[1];
                $bss22 = $bs12[2];
                $bss32 = $bs12[3];
                $bss02 = $bs02[0];

                $bs13 = array( 0, 1, 2, 3, 4, 5, 6  );
                shuffle( &$bs13 );
                $bs03 = array( 0, 7, 13, 20 );
                shuffle( &$bs03 );
                $bss13 = $bs13[1];
                $bss23 = $bs13[2];
                $bss33 = $bs13[3];
                $bss03 = $bs03[0];

                $bs14 = array( 0, 1, 2, 3, 4, 5, 6  );
                shuffle( &$bs14 );
                $bs04 = array( 0, 7, 13, 20 );
                shuffle( &$bs04 );
                $bss14 = $bs14[1];
                $bss24 = $bs14[2];
                $bss34 = $bs14[3];
                $bss04 = $bs04[0];

                $bonusik = "&reel=$bss1|$bss2|$bss3|$bss0|$bonus_win|reel=$bss12|$bss22|$bss32|$bss02|$bonus_win|reel=$bss13|$bss23|$bss33|$bss03|$bonus_win|reel=$bss14|$bss24|$bss34|$bss04|$bonus_win";
             } 

            if ( $mega == 2 ) 
             {
                $bs1 = array( 0, 1, 2, 3, 4, 5  );
                shuffle( &$bs1 );
                $bs01 = array( 19 );
                shuffle( &$bs01 );
                $bss1 = $bs1[1];
                $bss2 = $bs1[2];
                $bss3 = $bs1[3];
                $bss0 = $bs01[0];
                $vish = rand( 1, 3 );

                if ( $vish == 1 )
                {
                 $bss1 = 6;
                }
                if ( $vish == 2 )
                {
                 $bss2 = 6;
                }
                if ( $vish == 3 )
                {
                 $bss3 = 6;
                }

                $bs12 = array( 0, 1, 2, 3, 4, 5, 6  );
                shuffle( &$bs12 );
                $bs02 = array( 0, 7, 13, 20 );
                shuffle( &$bs02 );
                $bss12 = $bs12[1];
                $bss22 = $bs12[2];
                $bss32 = $bs12[3];
                $bss02 = $bs02[0];

                $bs13 = array( 0, 1, 2, 3, 4, 5, 6  );
                shuffle( &$bs13 );
                $bs03 = array( 0, 7, 13, 20 );
                shuffle( &$bs03 );
                $bss13 = $bs13[1];
                $bss23 = $bs13[2];
                $bss33 = $bs13[3];
                $bss03 = $bs03[0];

                $bs14 = array( 0, 1, 2, 3, 4, 5, 6  );
                shuffle( &$bs14 );
                $bs04 = array( 0, 7, 13, 20 );
                shuffle( &$bs04 );
                $bss14 = $bs14[1];
                $bss24 = $bs14[2];
                $bss34 = $bs14[3];
                $bss04 = $bs04[0];

                $bonusik = "&reel=$bss12|$bss22|$bss32|$bss02|$bonus_win|reel=$bss1|$bss2|$bss3|$bss0|$bonus_win|reel=$bss13|$bss23|$bss33|$bss03|$bonus_win|reel=$bss14|$bss24|$bss34|$bss04|$bonus_win";
             }

           if ( $mega == 3 ) 
             {
                $bs1 = array( 0, 1, 2, 3, 4, 5  );
                shuffle( &$bs1 );
                $bs01 = array( 19 );
                shuffle( &$bs01 );
                $bss1 = $bs1[1];
                $bss2 = $bs1[2];
                $bss3 = $bs1[3];
                $bss0 = $bs01[0];
                $vish = rand( 1, 3 );

                if ( $vish == 1 )
                {
                 $bss1 = 6;
                }
                if ( $vish == 2 )
                {
                 $bss2 = 6;
                }
                if ( $vish == 3 )
                {
                 $bss3 = 6;
                }

                $bs12 = array( 0, 1, 2, 3, 4, 5, 6  );
                shuffle( &$bs12 );
                $bs02 = array( 0, 7, 13, 20 );
                shuffle( &$bs02 );
                $bss12 = $bs12[1];
                $bss22 = $bs12[2];
                $bss32 = $bs12[3];
                $bss02 = $bs02[0];

                $bs13 = array( 0, 1, 2, 3, 4, 5, 6  );
                shuffle( &$bs13 );
                $bs03 = array( 0, 7, 13, 20 );
                shuffle( &$bs03 );
                $bss13 = $bs13[1];
                $bss23 = $bs13[2];
                $bss33 = $bs13[3];
                $bss03 = $bs03[0];

                $bs14 = array( 0, 1, 2, 3, 4, 5, 6  );
                shuffle( &$bs14 );
                $bs04 = array( 0, 7, 13, 20 );
                shuffle( &$bs04 );
                $bss14 = $bs14[1];
                $bss24 = $bs14[2];
                $bss34 = $bs14[3];
                $bss04 = $bs04[0];

                $bs15 = array( 1, 2, 3, 4, 6, 5  );
                shuffle( &$bs15 );
                $bs05 = array( 4, 8, 12, 16, 21, 25 );
                shuffle( &$bs05 );
                $bss15 = $bs15[1];
                $bss25 = $bs15[2];
                $bss35 = $bs15[3];
                $bss05 = $bs05[0];

                $bs16 = array( 0, 1, 3, 4, 5, 6  );
                shuffle( &$bs16 );
                $bs06 = array( 5, 11, 17, 24 );
                shuffle( &$bs06 );
                $bss16 = $bs16[1];
                $bss26 = $bs16[2];
                $bss36 = $bs16[3];
                $bss06 = $bs06[0];

                $bonusik = "&reel=$bss12|$bss22|$bss32|$bss02|$bonus_win|reel=$bss15|$bss25|$bss35|$bss05|$bonus_win|reel=$bss13|$bss23|$bss33|$bss03|$bonus_win|reel=$bss16|$bss26|$bss36|$bss06|$bonus_win|reel=$bss1|$bss2|$bss3|$bss0|$bonus_win|reel=$bss14|$bss24|$bss34|$bss04|$bonus_win";
             }


  
}

        }






















        if ( 0 < $bonus_win )
        {
            $mysql -> query( "update merchants set balance=balance+'".$bonus_win."' where username='$l'" );
            $mysql -> query( "update g_set_new set g_bank=g_bank-'".$bonus_win."' where g_name='cocktail'" );
            $stat_txt = "cocktail_bonus";
        }
        $winall = $bonus_win;
    }
    if ( 0 < $winall && $startbon != 1 )
    {
        $winall44 = sprintf( "%01.2f", $winall );
        $mysql -> query( "update merchants set balance=balance+'".$winall44."' where username='$l'" );
        $mysql -> query( "update g_set_new set g_bank=g_bank-'".$winall44."' where g_name='cocktail'" );
        $double_card = rand( 2, 13 );
        $double_card2 = vercard( $double_card );
        $_SESSION['double_card'] = $double_card;
        $_SESSION['double_card2'] = $double_card2;
        $_SESSION['double_win'] = $winall;
    }
    else
    {
        $_SESSION['double_card'] = 0;
        $_SESSION['double_card2'] = "";
        $_SESSION['double_win'] = 0;
    }
    $row = $mysql -> query( "select * from merchants where username='".$l."'"  );
    $user_balance = floor( $row[3] );
    $winall44 = sprintf( "%01.2f", $winall );
    $mysql -> query( "INSERT INTO stat_game VALUES('NULL','".$date."','$time','$l','$user_balance','$allbet','$winall44','$stat_txt')" );
    if ( 0 < $winall )
    {
        $user_balance -= $winall;
    }
    echo "OK|".$sym1."|{$sym6}|{$sym11}|{$sym2}|{$sym7}|{$sym12}|{$sym3}|{$sym8}|{$sym13}|{$sym4}|{$sym9}|{$sym14}|{$sym5}|{$sym10}|{$sym15}|{$winall}|{$user_balance}|{$double_card2}".$bonusik;
}
if ( $action == "double" )
{
$delitel = $_SESSION['delitel'];
    $double_card = $_SESSION['double_card'];
    $double_card2 = $_SESSION['double_card2'];
    $double_win = $_SESSION['double_win'];
    $mysql -> query( "update merchants set balance=balance-'".$double_win."' where username='{$l}'" );
    $mysql -> query( "update g_set_new set g_bank=g_bank+'".$double_win."' where g_name='cocktail'" );
    $stat_bet = $double_win;
    $dcard1 = $double_card2;
    $double_user_card = rand( 1, 13 );
    $double_user_card2 = vercard( $double_user_card );
    $double_user_card777 = rand( 1, 1 );
    if ( $double_card < $double_user_card )
    {
        $double_win *= 2;
    }
    if ( $double_user_card < $double_card )
    {
        $double_win = 0;
    }
    if ( $double_user_card == $double_card )
    {
        $double_win = $double_win;
    }
    $casbank = winlimit( );
$casbank /= $delitel;
    if ( $casbank < $double_win )
    {
        if ( $double_card == 1 )
        {
        $double_user_card = $double_card;
        $double_user_card2 = vercard( $double_user_card );
        $double_win /= 2;
        }
        else
        {
            $double_user_card = $double_card - 1;
        $double_user_card2 = vercard( $double_user_card );
        $double_win = 0;
        }


    }
    $date = date( "d.m.y" );
    $time = date( "H:i:s" );
    $stat_win = $double_win;
    $mysql -> query( "INSERT INTO stat_game VALUES('NULL','".$date."','{$time}','{$l}','{$user_balance}','{$stat_bet}','{$stat_win}','cocktail_double')" );
    if ( 0 < $double_win )
    {
        $double_card_new = rand( 1, 13 );
        $double_card_new2 = vercard( $double_card_new );
        $_SESSION['double_card'] = $double_card_new;
        $_SESSION['double_card2'] = $double_card_new2;
        $_SESSION['double_win'] = $double_win;
        $mysql -> query( "update merchants set balance=balance+'".$double_win."' where username='{$l}'" );
        $mysql -> query( "update g_set_new set g_bank=g_bank-'".$double_win."' where g_name='cocktail'" );
    }
    else
    {
        $_SESSION['double_card'] = 0;
        $_SESSION['double_card2'] = "";
        $_SESSION['double_win'] = 0;
        $double_card_new2 = "";
    }
    $row = $mysql -> query( "select * from merchants where username='".$l."'"  );
    $user_balance = floor( $row[3] );
    if ( 0 < $double_win )
    {
        $user_balance -= $double_win;
    }
    if ( $nado_card == 1 )
    {
        $ucard1 = $double_user_card2;
    }
    else
    {
        $ucard1 = rand( 0, 51 );
    }
    if ( $nado_card == 2 )
    {
        $ucard2 = $double_user_card2;
    }
    else
    {
        $ucard2 = rand( 0, 51 );
    }
    if ( $nado_card == 3 )
    {
        $ucard3 = $double_user_card2;
    }
    else
    {
        $ucard3 = rand( 0, 51 );
    }
    if ( $nado_card == 4 )
    {
        $ucard4 = $double_user_card2;
    }
    else
    {
        $ucard4 = rand( 0, 51 );
    }
    echo "OK|".$dcard1."|{$ucard1}|{$ucard2}|{$ucard3}|{$ucard4}|{$double_win}|{$user_balance}|{$double_card_new2}";
}
?>
