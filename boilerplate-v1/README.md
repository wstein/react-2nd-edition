### Start babel and live-server

Run Babel and live-server in the background:

```bash
babel src/app.js --out-file=public/scripts/app.js --presets=env,react --watch &
live-server public &
```
