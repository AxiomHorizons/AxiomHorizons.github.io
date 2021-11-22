(function () {
    function getCookieValue(name) {
        return decodeURIComponent(document.cookie.match('(^|;)\\s*' + name + '\\s*=\\s*([^;]+)')?.pop() || '');
    }
    var ck = getCookieValue('AH_User');
    if (ck) {
        location.href = '../dashboard';
        return;
    } 
})();
