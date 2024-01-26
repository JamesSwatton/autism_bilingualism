<script>
    import { thisPage, lang, disableScroll } from '$lib/stores.js';
    import { tweened } from "svelte/motion";
    import { cubicOut } from "svelte/easing";
    import { createEventDispatcher } from 'svelte';

    import logo from '$lib/assets/logo.svg'
    import downloadFile from '$lib/assets/download-file.svg'
    import expandArrow from '$lib/assets/expand-arrow.svg'

    import '$lib/scss/fonts.css';

    export let languages;

    let dispatch = createEventDispatcher();

    let y = 0;
    let lastY = 0;
    let duration = '1000ms';
    let offset = 0;
    let tolerance = 10;

    function updateClass(y) {
        const dy = lastY - y;
        lastY = y;
        // determine show / hide class
        return deriveClass(y, dy);
    }

    function deriveClass(y, dy) {
        if (currentPage != 'resources') {
            return 'show';
        }

        if (y < offset) {
            return 'show';
        }

        if (Math.abs(dy) <= tolerance) {
            return headerClass;
        }

        if (dy > 0) {
            return 'show';
        }

        return 'hide';
    }

    function setTransitionDuration(node) {
        node.style.TransitionDuration = duration;
    }

    $: headerClass = updateClass(y);
    // let languages = [
        // 'Arabic',
        // 'Bengali',
        // 'Chinese',
        // 'English',
        // 'French',
        // 'Greek',
        // 'Italian',
        // 'Polish',
        // 'Punjab',
        // 'Romanian',
        // 'Scottish Gaelic',
        // 'Somali',
        // 'Spanish',
        // 'Turkish',
        // 'Ukranian',
        // 'Urdu',
        // 'Welsh'
    // ]

    let selectedLanguage = "";
    lang.subscribe((value) => {
        console.log(`nav: ${value}`);
        selectedLanguage = value;
    })
    let currentPage = "";
    thisPage.subscribe((value) => {
        console.log('current page: ' + value);
        currentPage = value;
    })

    let clicked = false;

    function handleClick() {
        // const language = event.target.value;
        // selectedLanguage = language;

        dispatch('blur', true)
        disableScroll.set(!$disableScroll);
        clicked = !clicked;
    }

    $: if (clicked) {
        height.set(400)
        rotate.set(-180)
    } else {
        height.set(0)
        rotate.set(0)
    }


    let height = tweened(0, {
        duration: 800,
        easing: cubicOut
    })

    let rotate = tweened(0, {
        duration: 200,
        easing: cubicOut
    })
</script>

<svelte:window bind:scrollY={y} />

<header use:setTransitionDuration class={headerClass}>
    <img class="logo" src={logo} alt="autism and bilingualism logo">
    <div class="outer-wrapper">
        <div class="nav-wrapper" class:resources={currentPage == 'resources'}>
            {#if currentPage == 'resources'}
                <div class="select-window" style="height: {$height}px">
                    <ul class="language-select">
                    {#each languages as language}
                        <li><a on:click={ handleClick } href="/resources/{language.toLowerCase()}">{language}</a></li>
                    {/each}
                    </ul>
                </div>
                <button on:click={ handleClick } class="language-select-btn">
                    Language
                    <img style="rotate: {$rotate}deg" src={expandArrow} alt="expand arrow icon">
                </button>
            {/if}
            <nav>
                <ul>
                    <li class={currentPage == 'resources' ? 'current' : ''}><a href="/resources/{selectedLanguage.toLowerCase()}">Resources</a></li>
                    <li class={currentPage == 'about' ? 'current' : ''}><a href="/about">About</a></li>
                    <li class={currentPage == 'contact' ? 'current' : ''}><a href="/contact">Contact</a></li>
                </ul>
            </nav>
        </div>
        {#if currentPage == 'resources'}
            <div class="downloads-wrapper">
                <div class="language">{selectedLanguage}</div>
                <img src={downloadFile} alt="download-file.svg">
                Download PDF
            </div>
        {/if}
    </div>
</header>

<style lang="scss">
    $padding: 1rem;
    $font-size: 1.2rem;

    $select-padding: 3.6rem;

    button {
        all: unset;
    }

    header {
        position: sticky;
        top: 0;
        left: 0;
        z-index: 10;
        font-family: 'Noto Sans', Arial, Helvetica, sans-serif;
        font-size: $font-size;
        display: flex;
        width: 100%;
        background-color: white;
        border-bottom: solid rgb(235, 235, 235) 1px;
        transition: transform 300ms linear;

        .logo {
            padding: 0.7rem;
            transform: scale(0.9);
            height: 7.6rem;
        }
    }

    .outer-wrapper {
        border-left: 5px solid #000;
        width: inherit;
    }

    .select-window {
        margin-top: $select-padding;
        position: absolute;
        top: 0;
        left: -5px;
        width: calc(100% + 5px);
        border-left: 5px solid #000;
        overflow-y: hidden;
        height: 0px;
        box-shadow: 13px 14px 13px 1px rgba(0,0,0,0.09);
    }

    .language-select {
        padding-top: $select-padding;
        padding-left: 2rem;
        display: flex;
        flex-direction: column;
        flex-flow: column wrap;
        position: absolute;
        top: 0;
        width: calc(100% + 5px);
        height: 400px;
        background-color: white;
        left: -5px;
        overflow-y: hidden;

        li {
            display: block;
            padding: 0;
            margin: 0.2rem;
            a {
                padding: 0.5rem;
                background-color: #E7F2FF;
                color: #2353FF;
                cursor: pointer;
                transition: 250ms;
                &:hover {
                    // color: #9868EA;
                    background-color: #9CCAFF;
                }
                &:active {
                    background-color: #9868EA;
                }
            }
        }
    }

    .language-select-btn {
        display: flex;
        align-items: center;
        cursor: pointer;
        padding: $padding;
    }

    .nav-wrapper {
        position: relative;
        display: flex;
        width: inherit;
        justify-content: flex-end;
        padding-right: 2rem;
    }

    .downloads-wrapper {
        display: flex;
        padding: $padding;
        background-color: rgb(235, 235, 235);

        .language {
            padding-right: 0.5rem;
            border-right: 2px solid black;
            color: #2353FF;
        }
        
        img {
            padding: 0 0.5rem;
            cursor: pointer;
        }
    }

    li {
        display: inline-block;
        padding: $padding;
        a {
            text-decoration: none;
        }
    }

    a:visited {
        color: black;
    }

    .current {
        border-top: 4px solid black;
    }

    .resources {
        justify-content: space-between;
        box-shadow: 1px 4px 10px 1px rgba(0,0,0,0.11);
    }

    .show {
        transform: translateY(0%);
    }

    .hide {
        transform: translateY(-100%);
    }
</style>