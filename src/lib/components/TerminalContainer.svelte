<div class="container">
  <div class="scroll-area">
    <slot />
  </div>
</div>

<style>
  .container {
    position: absolute;
    overflow: hidden;

    border: 2px solid rgba(255, 255, 255, 0.87);
    border-radius: 0.25rem;
    padding: 8px;

    top: 10px;
    bottom: 10px;
    left: 10px;
    right: 10px;
  }

  .scroll-area {
    padding: 4px;
    overflow: scroll;

    position: absolute;
    top: 10px;
    bottom: 10px;
    left: 10px;
    right: 10px;

    -ms-overflow-style: none; /* for Internet Explorer, Edge */
    scrollbar-width: none; /* for Firefox */
  }

  .scroll-area::-webkit-scrollbar {
    display: none;
  }
</style>
