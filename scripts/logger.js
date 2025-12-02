#!/usr/bin/env node

/**
 * Developer Study - Task Time Logger
 * Usage:
 *   pnpm log:start <task-id>
 *   pnpm log:end <task-id>
 * Writes to: logs/timelog.json
 */

const fs = require("fs");
const path = require("path");

const LOG_DIR = path.join(process.cwd(), "logs");
const LOG_FILE = path.join(LOG_DIR, "timelog.json");

function ensureLogFile() {
  if (!fs.existsSync(LOG_DIR)) fs.mkdirSync(LOG_DIR);
  if (!fs.existsSync(LOG_FILE)) fs.writeFileSync(LOG_FILE, JSON.stringify({}, null, 2));
}

function loadLogs() {
  ensureLogFile();
  return JSON.parse(fs.readFileSync(LOG_FILE, "utf8"));
}

function saveLogs(logs) {
  fs.writeFileSync(LOG_FILE, JSON.stringify(logs, null, 2));
}

function now() {
  return new Date().toISOString();
}

function start(taskId) {
  const logs = loadLogs();

  if (!logs[taskId]) logs[taskId] = {};
  logs[taskId].start = now();
  saveLogs(logs);
  console.log(`⏱️  Started task: ${taskId}`);
}

function end(taskId) {
  const logs = loadLogs();
  if (!logs[taskId] || !logs[taskId].start) {
    console.error("❌ Task was not started. Run: pnpm log:start <task-id>");
    process.exit(1);
  }
  logs[taskId].end = now();

  const startTime = new Date(logs[taskId].start);
  const endTime = new Date(logs[taskId].end);
  const durationMs = endTime - startTime;
  const durationMin = (durationMs / 1000 / 60).toFixed(2);
  logs[taskId].duration_minutes = durationMin;

  saveLogs(logs);
  console.log(`✅ Ended task: ${taskId}`);
  console.log(`⏲️ Duration: ${durationMin} minutes`);
}

const [command, taskId] = process.argv.slice(2);
if (!command || !taskId) {
  console.error("Usage: pnpm log:start <task-id>  OR  pnpm log:end <task-id>");
  process.exit(1);
}
ensureLogFile();
if (command === "start") start(taskId);
else if (command === "end") end(taskId);
else console.error("Unknown command");
