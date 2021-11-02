# Cypress Fetch Response Headers POC

This repository is here to show that response headers are different in some case when run inside cypress. To test this, the following should be done:

First, run the small express server (resembling a stub API):
```
node server.js
```

Now, run the React app:
```
yarn start
```

Try it in the browser by clicking the button. It should show "Ok".

Then, start the cypress tests:

```
yarn cypress open
```

It should show that an error is returned instead. This is because json deserialization is attempted, because the `Content-Length` header cannot be read, while it's present when run standalone.
