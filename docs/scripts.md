# Scripts

- [Overview](#overview)
- [Using Firebase Specific Commands](#using-firebase-specific-commands)

## Overview

This project was created using the [Vue CLI 3](https://cli.vuejs.org/) and all the default scripts are available in its standard versions.

In additional we have firebase specific commands such as [`deploy`](/package.json#L9) and all its sub-commands [`deploy:hosting`](/package.json#10) and [`deploy:firestore`](/package.json#11).

## Using Firebase Specific Commands

You will need to configure the [firebase cli](https://firebase.google.com/docs/cli/) on your machine, this can be done following the [official documentation](https://firebase.google.com/docs/cli/) or the commands below:

```bash
# 1. install globally the firebase cli
$ npm install -g firebase-tools

# 2. login with your firebase account
$ firebase login
```
