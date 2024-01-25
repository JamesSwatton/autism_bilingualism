<script>
    import Header from "../lib/components/Header.svelte";
    import { fade } from 'svelte/transition';
    import { page } from '$app/stores';
    import { beforeUpdate, onMount } from 'svelte';
    import { thisPage, lang } from '$lib/stores.js'
    import '$lib/scss/fonts.css';

    export let data;

    let blur = false;

    function handleClick(e) {
        blur = !blur
        console.log(`blur: ${blur}`);
    }

    function format(blah) {
        let l = blah.split("/")[2];
        return l.slice(0, 1).toUpperCase() + l.slice(1);
    }

    beforeUpdate(() => {
        // set current page for header styling
        let path = $page.url.pathname.split('/');

        thisPage.set(path[1]);

        // set language for header language styling
        if (path[2]) lang.set(format($page.url.pathname));
    })

</script>

<div class="main-wrapper" class:hide={blur}>
    <Header languages={data.versions} on:clicked={ handleClick }/> {#key data.currentRoute}
        <!-- <main in:fade={{ duration: 200, delay: 200 }} out:fade={{ duration: 200 }}> -->
        <main>
            <div class="window-blur" style:backdrop-filter={blur ? 'blur(10px)' : 'blur(0px)'}></div>
            <slot />
        </main>
        <!-- </main> -->
    {/key}
</div>

<style lang="scss">
    .window-blur {
        z-index: 1;
        pointer-events: none;
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        transition: backdrop-filter 500ms ease-in-out;
    }

    .hide {
        height: 100vh;
        overflow: hidden;
    }

    main {
        padding-top: 5rem;
        margin-bottom: 5rem;
        color: $text-lighter;

        :global(h1) {
            font-family: 'Noto Serif', 'Times New Roman', Times, serif;
            font-size: 3.5rem;
        }

        :global(h2) {
            font-family: 'Noto Serif', 'Times New Roman', Times, serif;
        }

        :global(p) {
            font-family: 'Noto Sans', Arial, Helvetica, sans-serif;
            font-weight: 200;
        }

        :global(a) {
            font-family: 'Noto Sans', Arial, Helvetica, sans-serif;
        }

        :global(label) {
            font-family: 'Noto Sans', Arial, Helvetica, sans-serif;
            font-weight: 300;
        }

        :global(legend) {
            font-family: 'Noto Sans', Arial, Helvetica, sans-serif;
            // font-weight: 300;
        }
    }
</style>