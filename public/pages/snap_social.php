<?php
$uid = intval($_SESSION['uid']);
$base->Query("SELECT * FROM `".$pr."_users` WHERE `id` = '".$uid."'");
$user_data = $base->FetchArray();
?>
<?php
if(isset($_POST['token'])) {
    $s = file_get_contents('http://ulogin.ru/token.php?token=' . $_POST['token'] . '&host=' . $_SERVER['HTTP_HOST']);
    $user = json_decode($s, true);

    if ($user['network'] == 'vkontakte') {
        $social_vk = $user['uid'];
        $vk_avatar = $user['photo'];
        $vk_name = $user['first_name'].' '.$user['last_name'];
        $base->Query("UPDATE `".$pr."_users` SET `avatar` = '".$vk_avatar."', `social_vk` = '".$social_vk."', `vk_avatar` = '".$vk_avatar."', `vk_name` = '".$vk_name."' WHERE `id` = '".$uid."'");
        Header("Location: /snapsocial");

    } else if ($user['network'] == 'instagram') {
        $social_in = $user['nickname'];
        $in_avatar = '/img/in.png';
        $in_name = $user['first_name'];
        $base->Query("UPDATE `".$pr."_users` SET `avatar` = '".$in_avatar."', `social_in` = '".$social_in."', `in_avatar` = '".$in_avatar."', `in_name` = '".$in_name."' WHERE `id` = '".$uid."'");
        Header("Location: /snapsocial");

    } else if ($user['network'] == 'twitter') {
        $social_tw = $user['nickname'];
        $tw_avatar = $user['photo'];
        $tw_name = $user['first_name'].' '.$user['last_name'];
        $base->Query("UPDATE `".$pr."_users` SET `avatar` = '".$tw_avatar."', `social_tw` = '".$social_tw."', `tw_avatar` = '".$tw_avatar."', `tw_name` = '".$tw_name."' WHERE `id` = '".$uid."'");
        Header("Location: /snap_social");

    } else if ($user['network'] == 'facebook') {
        $social_fb = $user['uid'];
        $fb_avatar = $user['photo'];
        $fb_name = $user['first_name'].' '.$user['last_name'];
        $base->Query("UPDATE `".$pr."_users` SET `avatar` = '".$fb_avatar."', `social_fb` = '".$social_fb."', `fb_avatar` = '".$fb_avatar."', `fb_name` = '".$fb_name."' WHERE `id` = '".$uid."'");
        Header("Location: /snap_social");

    } else if ($user['network'] == 'youtube') {
        preg_match_all("#channel\/([0-9a-zA-Z]+)#",$user['profile'],$profile);
        $social_yt = $profile[1][0];
        $yt_avatar = $user['photo'];
        $yt_name = $user['first_name'].' '.$user['last_name'];
        $base->Query("UPDATE `".$pr."_users` SET `avatar` = '".$yt_avatar."', `social_yt` = '".$social_yt."', `yt_avatar` = '".$yt_avatar."', `yt_name` = '".$yt_name."' WHERE `id` = '".$uid."'");
        Header("Location: /snapsocial");

    } else if ($user['network'] == 'odnoklassniki') {
        preg_match_all("#profile\/([0-9]+)#",$user['profile'],$profile);
        $social_ok = $profile[1][0];
        $ok_avatar = $user['photo'];
        $ok_name = $user['first_name'].' '.$user['last_name'];
        $base->Query("UPDATE `".$pr."_users` SET `avatar` = '".$ok_avatar."', `social_ok` = '".$social_ok."', `ok_avatar` = '".$ok_avatar."', `ok_name` = '".$ok_name."' WHERE `id` = '".$uid."'");
        Header("Location: /snap_social");
    }
}

?>

<div class="content_block">
    <div class="text_title"><span class="fa fa-link"></span> Привязка аккаунтов</div>
    <hr class="hr_green">

    <script type="text/javascript" src="//vk.com/js/api/openapi.js?105"></script>

    <div class="center"><b>Привяжите социальные сети для начала работы с сервисом.</b></div>

    <!-- Вконтакте -->
    <div class="div_snap_social">
        <?php
        if ($user_data['social_vk'] == '0') {
            ?>
            <div style="display: inline-block; padding-right: 15px"><img src="/img/vk.png"></div>
            <div style="display: inline-block; width: 200px; text-align: center">
                <div id="uLogin_1" data-ulogin="display=buttons;optional=first_name,last_name,photo;providers=vkontakte;redirect_uri=http%3A%2F%2Fsmm%2Fsnapsocial">
                    <a href="#" data-uloginbutton="vkontakte" class="btn btn-primary">Привязать</a>
                </div>
            </div>
            <?php
        } else {
            if ($user_data['vk_avatar'] == '0') {
                $vk_avatar = '/img/noavatar.png';
            } else {
                $vk_avatar = $user_data['vk_avatar'];
            }
            ?>
            <div style="display: inline-block; padding-right: 15px; float: left"><img style="width: 60px; height: 60px" src="<?=$vk_avatar; ?>"></div>
            <div style="display: inline-block; width: 230px; text-align: left">
                <span class="modal_text_title"><span class="fa fa-vk"></span> <?=$user_data['vk_name']; ?></span><br><br>
                <a class="div_task_btn" href="#" id="vk_unlink"><span class="fa fa-times"></span> Отвязать аккаунт</a>
            </div>
            <?php
        }
        ?>
    </div>

    <!-- Инстаграм -->
    <div class="div_snap_social">
        <?php
        if ($user_data['social_in'] == '0') {
            ?>
            <div style="display: inline-block; padding-right: 15px"><img src="/img/in.png"></div>
            <div style="display: inline-block; width: 200px; text-align: center">
                <div id="uLogin_2" data-ulogin="display=buttons;optional=first_name,nickname,photo;providers=instagram;redirect_uri=http%3A%2F%2Fsmm%2Fsnapsocial">
                    <a href="#" data-uloginbutton="instagram" class="btn btn-primary">Привязать</a>
                </div>
            </div>
            <?php
        } else {
            if ($user_data['in_avatar'] == '0') {
                $in_avatar = '/img/noavatar.png';
            } else {
                $in_avatar = $user_data['in_avatar'];
            }
            ?>
            <div style="display: inline-block; padding-right: 15px; float: left"><img style="width: 60px; height: 60px" src="<?=$in_avatar; ?>"></div>
            <div style="display: inline-block; width: 230px; text-align: left">
                <span class="modal_text_title"><span class="fa fa-instagram"></span> <?=$user_data['in_name']; ?></span><br><br>
                <a class="div_task_btn" href="#" id="in_unlink"><span class="fa fa-times"></span> Отвязать аккаунт</a>
            </div>
            <?php
        }
        ?>
    </div>

    <script>
        // Вконтакте
        $(document).ready(function() {
            $(document).on('click', '#vk_unlink', function() {
                showPreloader();
                var uid = <?=$uid;?>;

                $.ajax({
                    url: "/ajax/ajax_snap_vk.php",
                    type: "POST",
                    dataType: "json",
                    data: {
                        social: 'vk',
                        uid: uid
                    },
                    success: (function() {
                        return function(data) {
                            if (data.status === 'success') {
                                setTimeout(function(){
                                    hidePreloader();
                                    window.location.reload();
                                }, 1000);
                            }
                        };
                    })()
                });
                return false;
            });
        });

        // Инстаграм
        $(document).ready(function() {
            $(document).on('click', '#in_unlink', function() {
                showPreloader();
                var uid = <?=$uid;?>;

                $.ajax({
                    url: "/ajax/ajax_snap_in.php",
                    type: "POST",
                    dataType: "json",
                    data: {
                        social: 'in',
                        uid: uid
                    },
                    success: (function() {
                        return function(data) {
                            if (data.status === 'success') {
                                setTimeout(function(){
                                    hidePreloader();
                                    window.location.reload();
                                }, 1000);
                            }
                        };
                    })()
                });
                return false;
            });
        });

        // Ютуб
        $(document).ready(function() {
            $(document).on('click', '#yt_unlink', function() {
                showPreloader();
                var uid = <?=$uid;?>;

                $.ajax({
                    url: "/ajax/ajax_snap_yt.php",
                    type: "POST",
                    dataType: "json",
                    data: {
                        social: 'yt',
                        uid: uid
                    },
                    success: (function() {
                        return function(data) {
                            if (data.status === 'success') {
                                setTimeout(function(){
                                    hidePreloader();
                                    window.location.reload();
                                }, 1000);
                            }
                        };
                    })()
                });
                return false;
            });
        });
    </script>
</div>
