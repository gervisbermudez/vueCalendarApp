const { app, session } = require("electron");
const path = require("path");
const os = require("os");

// on macOS
const reactDevToolsPath = path.join(
  os.homedir(),
  "/Library/Application Support/Google/Chrome/Default/Extensions/fmkadmapgofadopljbjfkapdkoienihi/4.9.0_0"
);

app.whenReady().then(async () => {
  await session.defaultSession.loadExtension(reactDevToolsPath);
});

// Require `main` process to boot app
require("./index");
