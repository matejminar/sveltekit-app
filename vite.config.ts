import { sentryVitePlugin } from "@sentry/vite-plugin";
import { sentrySvelteKit } from '@sentry/sveltekit';
import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vitest/config';

export default defineConfig({
    plugins: [sentrySvelteKit({
        sourceMapsUploadOptions: {
            org: 'minarorg',
            project: 'javascript-sveltekit',
            url: 'https://sentry.io/'
        }
    }), sveltekit(), sentryVitePlugin({
        org: "minarorg",
        project: "javascript-sveltekit"
    })],

    test: {
		include: ['src/**/*.{test,spec}.{js,ts}']
	},

    build: {
        sourcemap: true
    }
});