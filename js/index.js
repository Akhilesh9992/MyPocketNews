
var app = {
    // Application Constructor
    initialize: function() {
        this.bindEvents();
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicitly call 'app.receivedEvent(...);'
    // Update DOM on a Received Event
    receivedEvent: function(id) {
        var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');

        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');

        console.log('Received Event: ' + id);
    }
};

function about(){
	window.open("https://www.facebook.com/digital15hawk/?ref=bookmarks","_system");
}

function rateus(){

	window.open("market://details?id=com.wTipsandTricks_3761762","_system");
}

function moreRelatedApps(){
	window.open("https://play.google.com/store/search?q=digitalhawk2016&hl=en","_system");
}

var isAppForeground = true;

    function initAds() {
      if (admob) {
        var adPublisherIds = {
          ios : {
            banner : "ca-app-pub-3670000423095472/3826999342",
            interstitial : "ca-app-pub-3670000423095472/5303732548"
          },
          android : {
            banner : "ca-app-pub-3670000423095472/3826999342",
            interstitial : "ca-app-pub-3670000423095472/5303732548"
          }
        };

        var admobid = (/(android)/i.test(navigator.userAgent)) ? adPublisherIds.android : adPublisherIds.ios;

        admob.setOptions({
          publisherId:      admobid.banner,
          interstitialAdId: admobid.interstitial,
          tappxIdiOs:       "/XXXXXXXXX/Pub-XXXX-iOS-IIII",
          tappxIdAndroid:   "/XXXXXXXXX/Pub-XXXX-Android-AAAA",
          tappxShare:       0.5
          //,
          //autoShowInterstitial: true

        });

        registerAdEvents();

      } else {
        alert('AdMobAds plugin not ready');
      }
    }

    function onAdLoaded(e) {
      if (isAppForeground) {
        if (e.adType === admob.AD_TYPE.INTERSTITIAL) {
          //admob.showInterstitialAd();
          console.log("An interstitial has been loaded and autoshown. If you want to load the interstitial first and show it later, set 'autoShowInterstitial: false' in admob.setOptions() and call 'admob.showInterstitialAd();' here");
        } else if (e.adType === admob.AD_TYPE_BANNER) {
          console.log("New banner received");
        }
      }
    }

    function onPause() {
      if (isAppForeground) {
        admob.destroyBannerView();
        isAppForeground = false;
      }
    }

    function onResume() {
      if (!isAppForeground) {
        setTimeout(admob.createBannerView, 1);
        setTimeout(admob.requestInterstitialAd, 1);
        isAppForeground = true;
      }
    }

    // optional, in case respond to events
    function registerAdEvents() {
      document.addEventListener(admob.events.onAdLoaded, onAdLoaded);
      document.addEventListener(admob.events.onAdFailedToLoad, function (e) {});
      document.addEventListener(admob.events.onAdOpened, function (e) {});
      document.addEventListener(admob.events.onAdClosed, function (e) {});
      document.addEventListener(admob.events.onAdLeftApplication, function (e) {});
      document.addEventListener(admob.events.onInAppPurchaseRequested, function (e) {});

      document.addEventListener("pause", onPause, false);
      document.addEventListener("resume", onResume, false);
    }
	
function ondeviceload(){
	
	document.addEventListener("backbutton", backCall, false);
//navigator.notification.confirm("Are you sure want to exit from App?", onConfirmExit, "Confirmation", "Yes,No");
  //  }, false );
      document.removeEventListener('deviceready', onDeviceReady, false);
      initAds();

      // display a banner at startup
      admob.createBannerView();

      // request an interstitial
      admob.requestInterstitialAd();
	
}
