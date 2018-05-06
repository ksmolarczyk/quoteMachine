$(document).ready(function() {

    var quote;
    var author;

    function getNewQuote() {
    $.ajax({
        url: 'http://api.forismatic.com/api/1.0/',
        jsonp:'jsonp',
        dataType: 'jsonp',
        data: {
        method: 'getQuote',
        lang: 'en',
        format: 'jsonp'
        },
    success: function(response) {
            quote = response.quoteText;
            author = response.quoteAuthor;
            $('#quote').text(quote);
            if (author) {
                $('#author').text('said by ' + author);
            } else {
                $('#author').text('-- unkown');
            }
    }
    })
    }

    getNewQuote();

    $('#qet-quote').on('click', function (event) {
        event.preventDefault();
        getNewQuote();
    });
});



// twitter button
window.twttr = (function(d, s, id) {
    var js, fjs = d.getElementsByTagName(s)[0],
        t = window.twttr || {};
    if (d.getElementById(id)) return t;
    js = d.createElement(s);
    js.id = id;
    js.src = "https://platform.twitter.com/widgets.js";
    fjs.parentNode.insertBefore(js, fjs);

    t._e = [];
    t.ready = function(f) {
        t._e.push(f);
    };

    return t;
}(document, "script", "twitter-wjs"));

//fb
(function(d, s, id) {
    var js, fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) return;
    js = d.createElement(s); js.id = id;
    js.src = "https://connect.facebook.net/en_US/sdk.js#xfbml=1";
    fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));