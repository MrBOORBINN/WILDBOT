import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.infbottt.ai',
  appName: 'INFBOTT',
  webDir: 'dist',
  bundledWebRuntime: false,
  android: { allowMixedContent: false },
};

export default config;
