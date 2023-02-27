<script lang="ts">
  export let value: string;
  export let selected: boolean;
</script>

<div class="container" class:selected>{value}</div>

<style>
  .container {
    margin: 4px;
    padding: 0 4px;
    width: 120px;
  }

  .selected {
    background-color: rgba(255, 255, 255, 0.87);
    color: #242424;
  }
</style>
