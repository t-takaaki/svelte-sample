<script>
  let count = 0;
  $: doubled = count * 2; // reactive declaration -> computed
  $: if (count >= 10) { // statement
    alert(`count is dangerously high!`);
    count = 0;
  }
  function handleClick() {
    // event handler
    count++;
  }
</script>


<p>I am Counter.</p>
<p>Clicked {count} {count === 1 ? 'time' : 'times'}</p>
<p>doubled is {doubled}</p>
<!-- reactivity -->
<button on:click={handleClick}>click me!</button>
