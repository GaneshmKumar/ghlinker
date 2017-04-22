/*
* @Author: GaNeShKuMaRm
* @Date:   2017-04-08 16:16:06
* @Last Modified by:   GaNeShKuMaRm
* @Last Modified time: 2017-04-22 15:51:38
*/

'use strict';
function getUser(username) {
    return $.ajax({
        url: "http://api.github.com/users/" + username,
        method: "GET"
    });
}

function displayProfile(div, data, username) {
    //alert(JSON.stringify(data));
    var url = "http://github.com/" + username;
    var avatar_url = data.avatar_url;
    var username = data.login;
    var name = data.name;
    var bio = data.bio;
    var blog = data.blog;
    var email = data.email;

    var html = '<div class="ghlink-wrapper"><div class="ghlink-basic-wrapper"><a href="' + url + '" target="_blank"><i class="fa fa-external-link pull-right" aria-hidden="true"></i></a><br><img class="img img-circle img-responsive ghlink-avatar" src="' + avatar_url +'" alt=""><br><span class="ghlink-name">' + name + '</span><br><span class="ghlink-name ghlink-username">' + username + '</span><br></div><div class="ghlink-advanced-wrapper"><p class="ghlink-bio">' + bio + '</p><a class="ghlink-blog" href="' + blog + '" target="_blank"><span class="fa fa-globe"></span></a><a class="ghlink-mail"  href="' + email + '" target="_blank"><span class="fa fa-envelope"> </span></a></div></div>';

    $(div).append(html);
    /*username = '#' + username;
    $(username + ' .ghlink-name').text(data.name);
    $(username + ' .ghlink-username').text(data.login);*/
}

$.fn.link = function(username) {
    var promise = getUser(username);
    var div = this;
    promise.success(function(data) {
        displayProfile(div, data, username);
    });
    promise.error(function(data) {
        alert(JSON.stringify(data));
    })
};

