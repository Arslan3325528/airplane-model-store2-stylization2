import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/airplane-model-store2-stylization2/', //! <-- ім'я репозиторію
});

