# Firebase Authentication, Firestore and Firebase Hosting

- [Overview](#overview)

## Overview

This project rely on mainly on [Firebase Authentication]() and [Firestore](). We use [Firebase Hosting]() for deploying our example.

In order to use this project or to configure other project to support the features presented on this repository you will need to [configure your Firebase account](#configure-your-firebase-account).

We wrap all the used features of Firebase Authentication and Firestore into a [vuex module that we call auth](store#auth). This wrapping allow us to have integration with [Vuex plugins](https://vuex.vuejs.org/guide/plugins.html), to centralize authentication logic and to provide joined and normalized data from both sources.

## Configure Your Firebase Account

First of all, you will need a Firebase account that can be created [here]().

Then on your [Firebase console](https://console.firebase.google.com) you must create or access one existent project.

On the opened project vision, click on `Add Firebase to your web app`, the information shown there must be used to fill your [environment file](environment.md).

For new projects you will need to enable the authentication with Facebook, Google and Password on your project Authentication section and Firestore on the database section.

For more information you can follow the [official documentation](https://firebase.google.com/docs/web/setup).
