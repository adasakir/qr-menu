// Kahvebahane preload - güvenli köprü
// - kahvebahane-server.json dosyasından API adresini okur (Node tarafında, file:// CORS sorunu yok)
// - localStorage override ile birlikte çalışır
const { contextBridge } = require('electron');
const fs = require('fs');
const path = require('path');

const DEFAULT_API = 'https://kahvebahane-eight.vercel.app';

function readServerConfig() {
  const candidates = [
    path.join(__dirname, 'kahvebahane-server.json'),
    path.join(__dirname, 'renderer', 'kahvebahane-server.json'),
  ];
  for (const f of candidates) {
    try {
      if (fs.existsSync(f)) {
        const raw = fs.readFileSync(f, 'utf8');
        const j = JSON.parse(raw);
        if (j && typeof j.apiBase === 'string' && j.apiBase.trim()) {
          return j.apiBase.trim().replace(/\/$/, '');
        }
      }
    } catch (e) {}
  }
  return DEFAULT_API;
}

function writeServerConfig(apiBase) {
  const f = path.join(__dirname, 'kahvebahane-server.json');
  const clean = String(apiBase || '').trim().replace(/\/$/, '');
  if (!/^https?:\/\/.+/.test(clean)) throw new Error('Geçersiz adres. Örnek: http://192.168.1.50:3000');
  fs.writeFileSync(f, JSON.stringify({ apiBase: clean }, null, 2), 'utf8');
  return clean;
}

try {
  contextBridge.exposeInMainWorld('electronAPI', {
    getApiBase: () => readServerConfig(),
    setApiBase: (url) => writeServerConfig(url),
    getDefaultApi: () => DEFAULT_API,
  });
} catch (e) {}

window.addEventListener('DOMContentLoaded', () => {});
