<script lang="ts">
  import type { CommandResultIntroData } from "../../domain/command-result/command-result-intro-data";

  export let data: CommandResultIntroData;
</script>

<div>
  <pre>
  ____            _    __       _ _       
 |  _ \ ___  _ __| |_ / _| ___ | (_) ___  
 | |_) / _ \| '__| __| |_ / _ \| | |/ _ \ 
 |  __/ (_) | |  | |_|  _| (_) | | | (_) |
 |_|   \___/|_|   \__|_|  \___/|_|_|\___/ 
  </pre>

  <div class="title">{data.title}</div>

  <div>{data.description}</div>
</div>

<style>
  pre {
    margin: 0;
    font-size: min(3vw, 14px);
  }
</style>
