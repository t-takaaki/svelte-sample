<script>
  // Nested Components
  import Counter from './Counter.svelte';
  import User from './User.svelte';
  import Timer from './Timer.svelte';

  // Declaring props
  export let name, hoge, fuga;
  let piyo = "OK!";
</script>

<main>
  <h1>Hello {name}!</h1>
  <h2>{hoge} is {fuga}</h2>
  <h3>{piyo}!</h3>
  <p>Visit the <a href="https://svelte.dev/tutorial">Svelte tutorial</a> to learn how to build Svelte apps.</p>
  <hr />
  <Counter />
  <hr />
  <User />
  <hr />
  <Timer />
</main>

<style>
  main {
    text-align: center;
    padding: 1em;
    max-width: 240px;
    margin: 0 auto;
  }

  h1 {
    color: #ff3e00;
    text-transform: uppercase;
    font-size: 4em;
    font-weight: 100;
  }

  @media (min-width: 640px) {
    main {
      max-width: none;
    }
  }
</style>