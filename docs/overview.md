# Authentication Project Overview

- [Welcome](#welcome)
- [Overview](#overview)

## Welcome

Welcome to the technical documentation of my [series of articles](articles.md) about authentication.

If you want a walk-through of this implementation you should [read the articles](articles.md).

If you want to see the progressive implementation you can always [look at the commits](https://github.com/alexrohleder/a2/commits/master), they are quite well separated.

## Overview

This project is an attempt to generate real world examples for the Vue community. If you feel that this is a good goal and have some idea or request, please [let me know at the issue board](https://github.com/alexrohleder/a2/issues).

The app consist of an authentication in the same basis as the [Airbnb android app](https://play.google.com/store/apps/details?id=com.airbnb.android&hl=en), where we provide access control via Facebook, Google and email/password using the Google Firebase SDK and functionalities of forgot and reset password using the same SDK.

Currently we count with 8 views containing the authentication flow and 1 view as example of authenticated user, this routes are protected by specialized logic that prevent unauthorized access. An better overview of the routes can be saw at the [routing doc](routing.md).

The project also contains some [Firestore configuration and persistance](firestore.md), we use some structured documents to store additional user information after a successful registration with any authentication provider (read as Facebook, Google or email/password).

In the future we will have an implementation of authorization, where we can define roles for users, and some sort of firebase cloud functions to handle scenarios as the GDPR compliance while deleting a user, where in this case, we should erase all the information related from the user on `/users` documents.

For more information about the technical setup, routing, state management and so on, please follow the links:

- [Languages and Technologies](technologies.md)
- [Routing, Layout and Views](routing.md)
- [State Management](state.md)
- [Styling](styling.md)
- [Firestore Structure](firestore.md)

In order to setup your environment for development, please see the links below:

- [Firebase Authentication, Firestore and Firebase Hosting](firebase.md)
- [Environment Variables](environment.md)
- [Scripts](scripts.md)
- Tests (wip)
- [Building and Deploying to Production](building.md)
