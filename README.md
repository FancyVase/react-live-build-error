`react-live` + Gatsby + `koa-static-server` does not work when changing the root path served.

## Repro steps

1. Run `npm install` to install dependencies.
2. Run `npm run build` to build the Gatsby app.
3. Run `npm run server` to serve the Gatsby app with a Koa static server.
4. Navigate to `localhost:3000/my-app/`
5. Editing the code snippet doesn't update the live preview.

Changing the `koa-static-server` rootPath from `/my-app/` to `/` works (navigating to `localhost:3000`), but for the live application I'm working on, I need to add a prefix to my app route:

https://user-images.githubusercontent.com/3051980/123475026-d776e180-d5c8-11eb-8b79-c0458abcba4c.mp4
