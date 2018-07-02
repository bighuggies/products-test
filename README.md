# Product Test

## Running the app

The app uses `create-react-app` with TypeScript + NPM.

1.  Install dependencies with `npm install`.
1.  Run the app with `npm start`.
1.  Run tests with `npm test`.

## App structure

### api

This module contains the API client and models returned by the api.

### components

This module contains dumb components which are used only for rendering. Components are styled with `styled-components`.

### containers

This module contains smart components which are hooked up to the app state using `mobx`.

#### CategoryContainer

The main app container which contains the list of categories. This includes a router to manage synchronization of the URL with the selected category, enabling back and forward functionality.

#### ProductsContainer

A child of `CategoryContainer`. Manages the state for a list of products on a given page (e.g. filter state).

### stores

This module contains stores which modify and maintain the app state using `mobx`.

#### CategoryStore

Store for categories. Manages the selected category and filters categories based on their hidden state.

#### ProductStore

Store for products. Manages filtering products based on the current category and the filter input.

## Tests

Snapshot tests are largely used for UI logic. The stores have more extensive tests as this is where the business logic is.

## Compatibility

Tested mainly Windows 10 + Chrome due to CORS issues. Libraries used should be compatible with Latest 2 + IE11.
