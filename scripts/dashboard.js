(function () {
    function getCookieValue(name) {
        return decodeURIComponent(document.cookie.match('(^|;)\\s*' + name + '\\s*=\\s*([^;]+)')?.pop() || '');
    }
    var ck = getCookieValue('AH_User');
    if (!ck) {
        location.href = '../sign-in';
        return;
    } 
    var parts = ck.split('|');
    document.getElementById('welcome-msg').innerText = 'Hi ' + parts[1] + ' ' + parts[2] + '!';
})();
