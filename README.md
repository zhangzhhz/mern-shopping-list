## [Learn the MERN Stack](https://www.youtube.com/playlist?list=PLillGF-RfqbbiTGgA77tGO426V3hRF9iE)

Updated to use functional components with hooks.

### config/keys.js

I removed this file from repository. It has simply the following:

```
module.exports = {
  mongoURI: 'mongodb+srv://<user>:<pass>@cluster0.9o1yx.azure.mongodb.net/mern-shopping?retryWrites=true&w=majority',
}
```

### To deploy to subdirectory **shopping-list** of my web site on my own Nginx server:

1. Add the following in `client/package.json`:

   `"homepage": "shopping-list",`

2. Run build in `client` directory:

   `npm run build`

3. Copy the whole `client/build` directory to directory `shopping-list` in the root of my web site:

   ```
   mkdir <web_site_root>/shopping-list && cp -ar `<project_root>/client/build <web_site_root>/shopping-list`
   ```

4. Update Nginx site to include the following:

   ```
    # for running mern-shopping-list
    ## front-end
    location /shopping-list {
    }
    ## back-end
    location /api/items {
      proxy_pass http://localhost:5000; # backend express server to serve API endpoints
    }
   ```

PS: Update `mongoURI` in `config/keys.js` to your own. 



