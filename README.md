# WorshipON (worshipon)
WorshipON will be a world-wide worship app providing an easy entry for artists to share content that glorifies Jesus Christ in their own languages, and the opportunity for any one to listen and worship Him.Meanwhile, worship leaders can download content to use in worship services.

Eventually, we are looking to have a platform that also enables chats, pod casts, and videos.

# installation

This project has been initiated following the same steps laid out on https://medium.com/quasar-framework/creating-a-quasar-framework-application-with-aws-amplify-services-part-1-4-9a795f38e16d

So not repeating the Amplify steps here. If you want to initiate the amplify build, you will need an AWS account and follow the instructions for initiating amplify.  It will cost you approximately $1/day it running.


## Install the dependencies
```bash
npm install
```

### Start the app in development mode (hot-code reloading, error reporting, etc.)
```bash
quasar dev
```

### Lint the files
```bash
npm run lint
```

### Build the app for dev on AWS
```bash
amplify configure (follow steps above)
amplify init
amplify push
amplify publish
```

### Customize the configuration
See [Configuring quasar.conf.js](https://quasar.dev/quasar-cli/quasar-conf-js).

# Looking for help in the following areas
  * graphic desin for favicon and background
  * Amplify graphql for backend models
  * Amplify components for front end 
  * Quasar and/or Vue for frontend
  * data scientist for creating song lists from language, genre, favorites, etc.
  * marketingcontract documentation for music rights
  * block-chain for keeping track of usage of uploads and payments
  * experienced git team management
  * experienced project manager with open source pm app
  * a lawyer for music contract and app usage
# TODO
  * add pages for viewing privacy, terms_conditions, dcma
  * add confirmation to profile for new signups for TC&Privacy
  * add confirmation check to BaseMainLayout.vue similar to signin check
  * add page for artists to upload content to S3
    * must accept dcma -> add to profile
    * fields: content-type(mp4,etc. pdf,etc.), title, type (music, lyrics, chords, sheet music, background) , genere, grade(prof, home studio, draft)
  * add page for listening (Should listeners be able to listen w/out signin-no profile or likes, etc. to click on? Random song list only by language and grade)
  * start simple with just a random song list according to language & grade preferences
  * will add song lists according to prefrences genre, likes, favorites
  * will add thumbs for like/dislike
  * will add crosses for honors/dishonors Christ
  * will add heart for favorit
  * will add search functionality for artist, song, or album
  * will add subscription for support