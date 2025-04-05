import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import { imagetools } from 'vite-imagetools'
import { Mode, plugin } from 'vite-plugin-markdown'

export default defineConfig({
  plugins: [react(), imagetools({
    defaultDirectives: (url: URL) => {
      const searchParams = url.searchParams ?? new URLSearchParams();
      if (searchParams.get('transparent') === null) {
        searchParams.set('format', 'jpeg');
        searchParams.set('progressive', 'true');
      }
      else {
        searchParams.set('format', 'png');
        searchParams.delete('transparent')
      }
      return searchParams;
    },
  }), plugin({
    mode: [Mode.REACT]
  })],
})
