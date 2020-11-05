import App from './App.svelte';

const app = new App({
	target: document.body,
	props: {
		name: 'world',
    hoge: 'foo',
    fuga: 'bar',
	}
});

export default app;