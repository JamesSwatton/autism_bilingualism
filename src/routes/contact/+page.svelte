<script>
    import { onMount } from 'svelte';
    import Form from '$lib/components/Form.svelte';
    import Subscribe from '$lib/components/Subscribe.svelte';
    import '$lib/scss/fonts.css';

    export let form;

    let dialog;
    let submitted = false;
    let parsedCookie = [];

    onMount(() => {
        console.log(document.cookie);
        parsedCookie = parseCookie(document.cookie);
        if (parsedCookie[0] == "submitted" && parsedCookie[1] == "true") {
            submitted = true;
        }

        dialog = document.querySelector("dialog");
    })

    $: if (form?.sucess) {
        dialog.showModal();
        document.cookie = "submitted=; expires=-1;";
        document.cookie = "submitted=true; SameSite=Lax";
        submitted = true;
    }

    function parseCookie(cookie) {
        if (cookie) {
            return cookie.split("=");
        }
        return "";
    }
</script>

<dialog>
    <h2>Feedback sent.</h2>
    <p>Thank you!</p>
    <button class="close" on:click={() => dialog.close()}>Close</button>
</dialog>

<div class="contact-wrapper">
    <section>
        <article>
            <h1>Contact</h1>
            <a href="mailto:hello@autism_bilingualism.com">hello@autism_bilingualism.com </a>

            <p>If you would like to help with additional translation or notice any arreas that need revisions then please get in touch! We are a small team, but dedicated to improving and updating the site as much as we can.</p>
            <p>If you have time then please fill in the feedback form below, it will make a huge difference for future research and will only help us develop better ways of getting the information that matters to you in the best way possible. </p>
            <p><strong>None of this information will be shared and is for our research purposes only.</strong> Thank you!</p>
        </article>

        <hr>


        {#if !submitted}
            <Form />
        {:else}
        <div class="resubmit">
            <p><strong>You have already submitted feedback. If you would like to resubmit then please click below.</strong></p>
            <button on:click={() => submitted = false}>Feedback</button>
        </div>
        {/if}
    </section>

    <img src="/computer_flipped.png" alt="a desktop computer">
</div>

<!-- <Subscribe /> -->

<style lang="scss">
    .contact-wrapper {
        position: relative;
        display: flex;
        max-width: 900px;
        margin: 0 auto;
        padding: 0 1rem;
        font-size: 1.2rem;
        
        section {
            max-width: 48%;
            min-width: 400px;
        }
    }

    button {
        padding: 0.5rem;
        font-size: large;
    }

    button {
        border: none;
        border-radius: $border-radius;
        background: $primary;
        color: white;
        cursor: pointer;
        margin-top: 2rem;
        width: 100%;
    }

    h1 {
        margin-bottom: 1rem;
    }

    p, a {
        margin: 2rem 0;
    }

    a {
        font-style: italic;
        color: $primary;
    }

    img{
        position: fixed;
        left: 60%;
        margin-top: 4rem;
        height: 450px;
    }

    dialog {
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
        margin: auto;
        position: absolute;
        padding: 2rem;
        text-align: center;
        border: none;
        border-radius: $border-radius;
        h2, p {
            margin: 1rem 0;
        }
    }

    dialog::backdrop {
        backdrop-filter: blur(5px);
    }



</style>