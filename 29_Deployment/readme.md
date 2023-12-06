# DEPLOYMENTS

* RENDER-COM -> https://render.com

---

### Stock Project - Backend

* Check running on local:
    * Set ".env" file
    * Create "logs" folder (for logger)
    * Install: <code> $ npm i </code>
    * Check running: <code> $ nodemon </code>

* DATABASE:
    * Set new db on cloud from https://cloud.mongodb.com
        * Set User Password -> / Security / Database Access / Database Users / Edit
        * Allow to All IP -> / Security / Network Access / IP Access List
            * Delete all IPs
            * or set IP to "0.0.0.0"
    * Change db local-addres to cloud-address at ".env" file.
    * Check running (can use sync.js).

* Before DEPLOYING:
    * remove from ".gitignore" file:
        * <code> .env </code>
    * "index.js" (main js file):
        * if there, remove "HOST" parameter: <code> app.listen(PORT, HOST, ...) </code>
        * set "cors" for all domains: <code> app.use(require('cors')()) </code>
        * disable logger: <code> // app.use(require("middlewares/logger")) </code>
    * platform may not supporting node-builtin-modules:
        * change <code> require('node:fs') </code> to <code> require('fs') </code>
        * change <code> require('node:crypto') </code> to <code> require('crypto') </code>
        * run <code> $ npm i fs crypto </code>
    * change "start" command at package.json:
        * <code> "start": "node index.js", </code>
    * push to your git repo.

* Deploy to RENDER-COM:
    * New Web Service
    * Select "deploy from Git Repo"
    * Write your github-repo-address to "Public Git Repo"
        * Name: 'application-name'
        * Region: 'Oregon' (someone)
        * Branch: 'main'
        * Root: './' (can be undefined)
        * Runtime: 'Node'
        * Build Command: 'npm i'
        * Start Command: 'npm start'
        * InstanceType: 'Free'
        * START
    * You can view log-records (so errors) from "Logs" section.

### Stock Project - Frontend

* Check running on local:

    * Set ".env" file
        * Change BASE_URL to new remote-backend-address
    * Install: <code> $ npm i </code> or <code> $ pnpm i </code>
    * Check running: <code> $npm run dev </code>

* Before DEPLOYING:
    * remove from ".gitignore" file:
        * <code> .env </code>
    * Set build: <code> $ npm run build </code>
    * push to your git repo.

* Deploy to RENDER-COM:
    * New Static Site
    * Select "deploy from Git Repo"
    * Write your github-repo-address to "Public Git Repo"
        * Name: 'application-name'
        * Branch: 'main'
        * Root: './build'
        * Build Command: '' (undefined)
        * Publish directory: './'
        * START
    * Fixing 'Not Found' error when refresh page:
        * Go to "Redirects/Rewrites"
        * Add Rule:
            * Source: '/*'
            * Destinition: '/'
            * Action: 'Rewrite'