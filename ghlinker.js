/*
* @Author: GaNeShKuMaRm
* @Date:   2017-04-08 16:16:06
* @Last Modified by:   GaNeShKuMaRm
* @Last Modified time: 2017-04-26 15:22:31
*/

'use strict';
function getUser(username) {
    return $.ajax({
        url: "http://api.github.com/users/" + username,
        method: "GET"
    });
}

function displayProfile(data, username) {
    var url = "http://github.com/" + username;
    var avatar_url = data.avatar_url;
    var username = data.login;
    var name = data.name;
    var email = data.email;

    var html = '<div id="' + username + '" class="col-md-3 gh-user"><img class="img img-responsive gh-img" src="' + avatar_url + '" alt=""><div class="gh-nav"><span class="gh-username">' + name + '</span><a href="mailto:' + email + '"><span><i class="fa fa-envelope"></i></span></a><a href="' + url +'" target="_blank"><span><i class="fa fa-external-link-square"></i></span></a></div></div>';
    $('#gh-main').append(html);
}

$.link = function(username) {
    var promise = getUser(username);
    promise.success(function(data) {
        displayProfile(data, username);
    });
    promise.error(function(data) {
        alert(JSON.stringify(data));
    })
};

