<script>
  let loggedIn = false;
  function toggle() {
    loggedIn = !loggedIn;
  }
  let users = [
    "Taro", "Hanako", "Ken",
  ];
</script>

<p>I am User.</p>
<ul>
  <!-- each block -->
  {#each users as user, i}
    <li>{i}. {user}</li>
  {/each}
</ul>

<!-- if block -->
{#if loggedIn}
<button on:click={toggle}>
	Log out
</button>
{/if}
{#if !loggedIn}
<button on:click={toggle}>
	Log in
</button>
{/if}
