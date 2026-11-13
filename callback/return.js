"use strict";

const params = new URLSearchParams(window.location.search);
const status = document.getElementById("status");
const open = document.getElementById("open");
history.replaceState(null, "", window.location.pathname);
const code = params.get("code");
const state = params.get("state");

if (params.has("error") || !code || !state) {
  status.textContent = "Start Google Drive sign-in again from Air Sync in Obsidian.";
} else {
  const target = new URL("obsidian://air-sync-auth");
  target.searchParams.set("code", code);
  target.searchParams.set("state", state);
  open.href = target.href;
  open.hidden = false;
  status.textContent = "If the browser does not open Obsidian automatically, use the link below.";
  window.location.assign(target.href);
}
