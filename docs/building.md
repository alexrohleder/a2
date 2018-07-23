# Building and Deploying to Production

- [Overview](#overview)
- [Building a Production Version](#building-a-production-version)
- [Deploying](#deploying)

## Overview

As this application was build using the [Vue CLI 3](https://cli.vuejs.org) we follow the specifications on the [official documentation about deploying with Firebase](https://cli.vuejs.org/guide/deployment.html#firebase).

## Building a Production Version

First of all, you will need to have the [Firebase CLI configured](scripts.md#using-firebase-specific-commands) and you [Firebase project setup](firebase.md).

With both ready, you will need to setup your `.env.production` file, that [is used by the Vue CLI during the production build](https://cli.vuejs.org/guide/mode-and-env.html#modes).

For more information about environment files please see the [environment variables section](environment.md).

## Deploying

```bash
# this will deploy all the application, including source code and Firestore rules.
$ yarn deloy

# this will deploy just the application.
$ yarn deploy:hosting

# this will deploy just the Firestore rules.
$ yarn deploy:firestore
```

