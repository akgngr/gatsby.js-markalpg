import React, {useEffect} from 'react';
const facebookAppId = "105611457923834"

function Fbchat(){
    useEffect(()=>{
        window.fbAsyncInit = function() {
            window.FB.init({
                xfbml            : true,
                version          : 'v8.0'
            });
        };
        (function(d, s, id) {
            var js, fjs = d.getElementsByTagName(s)[0];
            if (d.getElementById(id)) return;
            js = d.createElement(s); js.id = id;
            js.src = 'https://connect.facebook.net/en_US/sdk/xfbml.customerchat.js';
            fjs.parentNode.insertBefore(js, fjs);
        }(document, 'script', 'facebook-jssdk'));
    })
    return(
        <>
            <div id="fb-root" />
            <div
                className="fb-customerchat"
                attribution="setup_tool"
                page_id={facebookAppId}
                logged_in_greeting="Merhaba! Size nasıl yardımcı olabilirim."
                logged_out_greeting="Merhaba! Size nasıl yardımcı olabilirim."
            />
        </>
    )
}

export default Fbchat