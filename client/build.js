import { build } from 'vite';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function runBuild() {
  try {
    console.log('📦 Bundling React client static assets...');
    await build({
      root: __dirname,
      configFile: path.resolve(__dirname, 'vite.config.js'),
    });
    console.log('✅ Client build completed successfully!');
  } catch (error) {
    console.error('Build Error:', error);
    process.exit(1);
  }
}

runBuild();
