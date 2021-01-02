 $(document).ready(function() {
                var examples = {
                    basic: function() {
                        $.ytLoad();
                    },

                    manual: function() {
                        $.ytLoad({
                            registerAjaxHandlers: false
                        });
                        $.ytLoad('start');
                        $.ytLoad('complete');
                        $.ytLoad('error');
                    },

                    customDurations: function() {
                        $.ytLoad({
                            startPercentage: 50,
                            startDuration: 2000,
                            completeDuration: 500,
                            fadeDelay: 2000,
                            fadeDuration: 2000
                        });
                    },

                    setProgress: function() {
                        $.ytLoad({
                            registerAjaxHandlers: false
                        });

                        $.ytLoad('progress', 50);
                        alert($.ytLoad('progress'));
                        $.ytLoad('progress', 100);
                    },

                    callbacks: function() {
                        $.ytLoad({
                            onStart: function() {
                                alert('Started!');
                            },
                            onComplete: function() {
                                alert('Complete!');
                            }
                        });
                    },

                    multipleRequests: function() {
                        $.ytLoad();

                        for(i=0; i < 2000; i++) {
                            $('#ajaxContent').load('ajax.html');
                        }
                    }
                };

                $('#loadButton').click(function(){
                    $('#ajaxContent').load('ajax.html');
                });

                $('#usageType').change(function() {
                    $.ytLoad('destroy');
                    examples[$(this).val()]();
                });

                examples.basic();
            });

$(document).ready(function(){   
    setTimeout(function () {
        $("#cookieConsent").fadeIn(200);
     }, 4000);
    $("#closeCookieConsent, .cookieConsentOK").click(function() {
        $("#cookieConsent").fadeOut(200);
    }); 
}); 
