# Firestore Structure

- [Overview](#overview)

## Overview

This project uses the [Firestore](https://firebase.google.com/docs/firestore/) as an auxiliary structure for user handling.

There we have the following information for each user:

| data type | data source           | field name     | used in (view)              |
|-----------|-----------------------|----------------|-----------------------------|
| `string`  | user / auth providers | email          | confirm profile             |
| `string`  | user / auth providers | name           | confirm profile / dashboard |
| `string`  | user / auth providers | surname        | confirm profile / dashboard |
| `boolean` | user                  | wantsMarketing | confirm profile             |

> We have a planning for creating [firebase functions](https://firebase.google.com/docs/functions/) for erasing this user data when it is deleted in compliance with [GDPR](https://www.google.com/search?q=gdpr).
