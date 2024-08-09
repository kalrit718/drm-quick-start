(function () {
    "use strict";

    // The responsibility of this module is to provide information about videos to other modules.

    // The videos are defined here. Add your videos to this list.
    let allVideos = [
        // Uncomment and copy-paste the block below as an example for adding custom
        // videos to the list.
        /*
        {
            "name": "My video 1",
            "url": "https://example.com/Manifest.mpd",
            "keys": [
                {
                    "keyId": "1c817fed-0686-45b6-bce2-d6a4eb873588",
                }
            ]
        }
        */

        // The following entries are for the pre-generated demo videos. To add your own videos, 
        // copy the sample video above, append to the list and adjust the fields as needed.
        //
        // Note: The demo videos have hardcoded license tokens for maximum ease of use of the
        // sample app. Never do this in production - always generate a new license token on
        // every request.

        // Note: the "tags" property is optional. The demo player uses this to filter the video
        // list -- for example, to only display FairPlay-compliant videos on Safari.
        {
            "name": "Kalindu Abayakoon - SampleUpload (Single Key)",
            "url": "https://0b1dbb1c3cb0e04dcc0fa763.blob.core.windows.net/video-output/JqHUUWSKFcnMS62y3hMP5H/dash/manifest.mpd",
            "keys": [
                {
                    "keyId": "b2a3dafc-4b64-4db2-a868-e6ce498fd6c5"
                }
            ]
        },
        {
            "name": "Kalindu Abayakoon - SampleUpload (Multiple Keys)",
            "url": "https://0b1dbb1c3cb0e04dcc0fa763.blob.core.windows.net/video-output/FtMZH4Fdx75YEfzUv6T6jR/dash/manifest.mpd",
            "keys": [
                {
                    "keyId": "49c570c5-5737-4700-be83-b3173209e7f2"
                },
                {
                    "keyId": "25da3d66-18da-4eb0-95c8-da78b4902831"
                },
                {
                    "keyId": "95a083b0-8844-423c-981e-ad91e777d8b6"
                }
            ]
        },
        {
            "name": "Axinom demo video - single key (DASH; cenc)",
            "url": "https://media.axprod.net/VTB/DrmQuickStart/AxinomDemoVideo-SingleKey/Encrypted_Cenc/Manifest.mpd",
            "licenseToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ2ZXJzaW9uIjogMSwKImJlZ2luX2RhdGUiOiAiMjAwMC0wMS0wMVQxNzo1NzowNyswMzowMCIsCiJleHBpcmF0aW9uX2RhdGUiOiAiMjAyNS0xMi0zMVQyMzo1OTo0MCswMzowMCIsCiJjb21fa2V5X2lkIjogIjMwZGQ1NDI0LWIwNDItNGY5NC04OGEwLWIxYzUwMGEyOWYxOCIsCiJtZXNzYWdlIjogewogICJ0eXBlIjogImVudGl0bGVtZW50X21lc3NhZ2UiLAogICJ2ZXJzaW9uIjogMiwKICAibGljZW5zZSI6IHsKICAgICJkdXJhdGlvbiI6IDM2MDAKICB9LAogICJjb250ZW50X2tleXNfc291cmNlIjogewogICAgImlubGluZSI6IFsKICAgICAgewogICAgICAgICJpZCI6ICIxMTExMTExMS0wMDAwLTAwMDAtMDAwMC0wMDAwMDAwMDAwMDAiCiAgICAgIH0KICAgIF0KICB9Cn19._zcHeRLolaKLsf8WYhahC66Igld8IAH2iTF3w_zVssE"
        },
        {
            "name": "Axinom demo video - single key (HLS; cbcs)",
            "url": "https://media.axprod.net/VTB/DrmQuickStart/AxinomDemoVideo-SingleKey/Encrypted_Cbcs/Manifest.m3u8",
            "licenseToken": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ2ZXJzaW9uIjoxLCJjb21fa2V5X2lkIjoiNjllNTQwODgtZTllMC00NTMwLThjMWEtMWViNmRjZDBkMTRlIiwibWVzc2FnZSI6eyJ2ZXJzaW9uIjoyLCJ0eXBlIjoiZW50aXRsZW1lbnRfbWVzc2FnZSIsImxpY2Vuc2UiOnsiYWxsb3dfcGVyc2lzdGVuY2UiOnRydWV9LCJjb250ZW50X2tleXNfc291cmNlIjp7ImlubGluZSI6W3siaWQiOiIyMTFhYzFkYy1jOGEyLTQ1NzUtYmFmNy1mYTRiYTU2YzM4YWMiLCJ1c2FnZV9wb2xpY3kiOiJUaGVPbmVQb2xpY3kifV19LCJjb250ZW50X2tleV91c2FnZV9wb2xpY2llcyI6W3sibmFtZSI6IlRoZU9uZVBvbGljeSIsInBsYXlyZWFkeSI6eyJwbGF5X2VuYWJsZXJzIjpbIjc4NjYyN0Q4LUMyQTYtNDRCRS04Rjg4LTA4QUUyNTVCMDFBNyJdfX1dfX0.D9FM9sbTFxBmcCOC8yMHrEtTwm0zy6ejZUCrlJbHz_U",
            "tags": ["FairPlay"]
        },
        {
            "name": "Axinom demo video - multikey (DASH; cenc)",
            "url": "https://media.axprod.net/VTB/DrmQuickStart/AxinomDemoVideo-MultiKey/Encrypted_Cenc/Manifest.mpd",
            "licenseToken": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ2ZXJzaW9uIjoxLCJjb21fa2V5X2lkIjoiNjllNTQwODgtZTllMC00NTMwLThjMWEtMWViNmRjZDBkMTRlIiwibWVzc2FnZSI6eyJ2ZXJzaW9uIjoyLCJ0eXBlIjoiZW50aXRsZW1lbnRfbWVzc2FnZSIsImxpY2Vuc2UiOnsiYWxsb3dfcGVyc2lzdGVuY2UiOnRydWV9LCJjb250ZW50X2tleXNfc291cmNlIjp7ImlubGluZSI6W3siaWQiOiJmM2Q1ODhjNy1jMTdhLTQwMzMtOTAzNS04ZGIzMTczOTBiZTYiLCJ1c2FnZV9wb2xpY3kiOiJUaGVPbmVQb2xpY3kifSx7ImlkIjoiNDRiMThhMzItNmQzNi00OTlkLThiOTMtYTIwZjk0OGFjNWYyIiwidXNhZ2VfcG9saWN5IjoiVGhlT25lUG9saWN5In0seyJpZCI6ImFlNmU4N2UyLTNjM2MtNDZkMS04ZTlkLWVmNGM0NjFkNDY4MSIsInVzYWdlX3BvbGljeSI6IlRoZU9uZVBvbGljeSJ9XX0sImNvbnRlbnRfa2V5X3VzYWdlX3BvbGljaWVzIjpbeyJuYW1lIjoiVGhlT25lUG9saWN5IiwicGxheXJlYWR5Ijp7InBsYXlfZW5hYmxlcnMiOlsiNzg2NjI3RDgtQzJBNi00NEJFLThGODgtMDhBRTI1NUIwMUE3Il19fV19fQ.DpwBd1ax4Z7P0cCOZ7ZJMotqVWfLFCj2DYdH37xjGxM"
        },
        {
            "name": "Axinom demo video - multikey (HLS; cbcs)",
            "url": "https://media.axprod.net/VTB/DrmQuickStart/AxinomDemoVideo-MultiKey/Encrypted_Cbcs/Manifest.m3u8",
            "licenseToken": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ2ZXJzaW9uIjoxLCJjb21fa2V5X2lkIjoiNjllNTQwODgtZTllMC00NTMwLThjMWEtMWViNmRjZDBkMTRlIiwibWVzc2FnZSI6eyJ2ZXJzaW9uIjoyLCJ0eXBlIjoiZW50aXRsZW1lbnRfbWVzc2FnZSIsImxpY2Vuc2UiOnsiYWxsb3dfcGVyc2lzdGVuY2UiOnRydWV9LCJjb250ZW50X2tleXNfc291cmNlIjp7ImlubGluZSI6W3siaWQiOiJmM2Q1ODhjNy1jMTdhLTQwMzMtOTAzNS04ZGIzMTczOTBiZTYiLCJ1c2FnZV9wb2xpY3kiOiJUaGVPbmVQb2xpY3kifSx7ImlkIjoiNDRiMThhMzItNmQzNi00OTlkLThiOTMtYTIwZjk0OGFjNWYyIiwidXNhZ2VfcG9saWN5IjoiVGhlT25lUG9saWN5In0seyJpZCI6ImFlNmU4N2UyLTNjM2MtNDZkMS04ZTlkLWVmNGM0NjFkNDY4MSIsInVzYWdlX3BvbGljeSI6IlRoZU9uZVBvbGljeSJ9XX0sImNvbnRlbnRfa2V5X3VzYWdlX3BvbGljaWVzIjpbeyJuYW1lIjoiVGhlT25lUG9saWN5IiwicGxheXJlYWR5Ijp7InBsYXlfZW5hYmxlcnMiOlsiNzg2NjI3RDgtQzJBNi00NEJFLThGODgtMDhBRTI1NUIwMUE3Il19fV19fQ.DpwBd1ax4Z7P0cCOZ7ZJMotqVWfLFCj2DYdH37xjGxM",
            "tags": ["FairPlay"]
        }
    ];

    // Verifies that all critical information is present on a video.
    // Automatically performs sanity checks to avoid making mistakes in the above list. 
    function verifyVideoIntegrity(video) {
        if (!video)
            throw new Error("A video was expected but was not present.");
        if (!video.name || !video.name.length)
            throw new Error("A video is missing its name.");

        console.log("Verifying integrity of video definition: " + video.name);

        if (!video.url || !video.url.length)
            throw new Error("The video is missing its URL.");

        // Either a hardcoded license token or the keys structure must exist. Not both.
        if (video.licenseToken && video.keys)
            throw new Error("The video has both a hardcoded license token and a content key list - pick only one.");
        if (!video.licenseToken && !video.keys)
            throw new Error("The video is missing the content key list.");

        if (video.keys) {
            if (!video.keys.length)
                throw new Error("The content key list for this video is empty.");

            // Verify that each item in the keys list has all the required data.
            video.keys.forEach(function verifyKey(item) {
                if (!item.keyId)
                    throw new Error("A content key is missing the key ID.");
            });
        }
    }

    // Verify all videos on startup.
    allVideos.forEach(verifyVideoIntegrity);

    module.exports = {
        "getAllVideos": function getAllVideos() {
            return allVideos;
        },
        "getVideoByName": function getVideoByName(name) {
            return allVideos.find(function filter(item) {
                return item.name === name;
            });
        }
    };
})();