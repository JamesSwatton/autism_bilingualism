<script>
    let showSubscribe = true;
</script>

{#if showSubscribe}
    <div class="subscribe-container">
        <button class="clear" on:click={() => showSubscribe = !showSubscribe}>
            <img src="/close.svg" alt="close icon">
        </button>
        <form method="POST" action="?/create">
            <input type="email" name="email" placeholder="Your email">
            <input type="checkbox" name="subscribed" checked hidden>
            <button type="submit">Subscribe</button>
        </form>
    </div>
{/if}

<style lang="scss">
    .subscribe-container {
        position: fixed;
        display: flex;
        justify-content: center;
        bottom: 0;
        width: 100%;
        height: 200px;
        background: white;
        border-top: 1px black solid;
    }

    form {
        margin-top: 80px;
    }

    button, input {
        padding: 0.5rem;
        font-size: large;
    }

    button {
        border: none;
        border-radius: $border-radius;
        background: $primary;
        color: white;
        cursor: pointer;
    }

    .clear {
        position: absolute;
        top: 0;
        right: 0;
        margin: 1rem;
        padding: 0;
        background-color: white;
    }

    img {
        width: 2rem;
    }
</style>