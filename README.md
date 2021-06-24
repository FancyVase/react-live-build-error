`react-live` + Gatsby works when doing local development, but not when building and serving.

## Repro steps

### Doesn't work
1. Run `npm install`
2. Run `npm run build`
3. Serve the production build on a server, e.g. `python -m SimpleHTTPServer`
4. Navigate to `localhost:8000/public`
5. Editing the code snippet doesn't update the live preview.

### Works
WIP
