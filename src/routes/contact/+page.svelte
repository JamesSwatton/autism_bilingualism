<script>
    import Form from '$lib/components/Form.svelte';
    import Subscribe from '$lib/components/Subscribe.svelte';
    import '$lib/scss/fonts.css';
</script>


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

        <Form />
    </section>

    <img src="/computer_flipped.png" alt="a desktop computer">
</div>

<Subscribe />

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

    img {
        position: fixed;
        left: 60%;
        margin-top: 4rem;
        height: 450px;
    }
</style>