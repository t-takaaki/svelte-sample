<script>
  // sample: https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Statements/async_function
  function resolveAfter2Seconds() {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve('resolved');
      }, 2000);
    });
  }

  async function asyncCall() {
    return await resolveAfter2Seconds();
  }

  // let promise = asyncCall();
  let promise = new Promise(resolve => resolve("init!"));

  function handleClick() {
    promise = asyncCall();
  }

</script>

<p>I am Timer.</p>
<!-- await block -->
{#await promise}
  <p>...waiting 2 seconds.</p>
{:then result}
  <p>promise result is {result}</p>
{:catch error}
  <p style="color: red">{error.message}</p>
{/await}
<button on:click={handleClick}>run timer</button>
