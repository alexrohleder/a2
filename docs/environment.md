# Environment Variables

- [Overview](#overview)
- [Base Environment File](#base-environment-file)

## Overview

This project uses [Vue CLI 3 ENV variables](https://cli.vuejs.org/guide/mode-and-env.html) for configuring the firebase connection.

The informations contained in env files can be found in your [firebase console](https://console.firebase.google.com), at the authentication section.
More information can be found on [official firebase docs](https://firebase.google.com/docs/web/setup).

## Base Environment File

```env
VUE_APP_FIREBASE_API_KEY=""
VUE_APP_FIREBASE_AUTH_DOMAIN=""
VUE_APP_FIREBASE_PROJECT_ID=""
```
