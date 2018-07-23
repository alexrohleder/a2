# Routing

- [Overview](#overview)
- [Layout](#layout)
- [View](#view)
- [Guards](#guards)

## Overview

This project uses [Vue Router](https://router.vuejs.org), which initialize in [`src/router.ts`](/src/router.ts).

Routes are defined in separated files that compound [webpack chunks](https://webpack.js.org/guides/code-splitting/), they are stored at [`src/routes`](/src/routes) and are imported by the [`src/router.ts`](/src/router.ts).

Each route can have a [layout](#layout), a [content](#view) and some [guards metadata](#guards) further information can be found on the section below.

![routes diagram](/docs/resources/routes-diagram.png)

## Layout

Each route can have a layout, that in our case means a component that will surround the [`router-view`](https://router.vuejs.org/guide/essentials/named-views.html) component.

In our example we have [`src/views/auth/Layout.vue`](src/views/auth/Layout.vue) applying the specific shared style of authentication routes, as well as the [route transition](https://router.vuejs.org/guide/advanced/transitions.html) and some hooks as the autofocus the first input element.

## View

Each view component will be used by at least one route as the route content.

It will be included inside the [route layout](#layout) if found, or inside the [`app/App.vue`](/src/App.vue) container.

## Guards

This project defines three [navigation guards](https://router.vuejs.org/guide/advanced/navigation-guards.html) in the [`src/guards.ts`](/src/guards.ts) file. They behavior is described bellow:

### init

Wait until the app get initialized, this happens after [firebase app initialize](/src/App.vue#L50).

It means that the app will appears into a loading state until we have authentication up and running.

### auth

Check routes based on [route metadata](https://router.vuejs.org/guide/advanced/meta.html) `auth`.

- If [`AuthGuardFlag.CANNOT_BE_AUTHENTICATED`](/src/guards.ts#L8) is used, then the guard will redirect authenticated users to the dashboard.
- If [`AuthGuardFlag.MUST_BE_AUTHENTICATED`](/src/guards.ts#L7) is defined, then the guard will redirect unauthenticated users to the welcome page.

### precedence

Check routes based on [route metadata](https://router.vuejs.org/guide/advanced/meta.html) `precedence`.

It can receive a [route name](https://router.vuejs.org/guide/essentials/named-routes.html) and will redirect any direct access to its route to the given route name.

This prevent direct access to some protected routes, as in our case, the sign up wizard that is composed by three routes.
