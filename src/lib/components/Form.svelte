<script>
    let hidden = true;

    function onChange(event) {
        hidden = event.currentTarget.id == 'other' ? false : true;
    }

    import '$lib/scss/fonts.css';
</script>

<dialog>
    <h1>Hello world!</h1>
</dialog>

<div class="form-container">
    <h2>Feedback</h2>
    <form method="POST" action="?/create">

        <input on:change={onChange} name="name" type="text" placeholder="Your name (optional)">

        <input on:change={onChange} name="email" type="email" placeholder="Your email (required)" required>

        <fieldset>
            <legend>Are you a:</legend>

                <input on:change={onChange} type="radio" name="type" value="parent/caregiver" id="parent/caregiver" required>
                <label for="parent/caregiver">Parent / caregiver</label><br>

                <input on:change={onChange} type="radio" name="type" value="practitioner" id="practitioner">
                <label for="practitioner">Practitioner</label><br>

                <input on:change={onChange} type="radio" name="type" value="teacher" id="teacher">
                <label for="teacher">Teacher</label><br>

                <input on:change={onChange} type="radio" name="type" value="other" id="other">
                <label for="other">Other</label><br>
                {#if !hidden}
                    <input type="text" name="other" placeholder="Description">
                {/if}
        </fieldset>

        <fieldset>
            <legend>How useful did you find this website?</legend>
            <div class="range-container">
                <input type="range" id="how-useful" name="how-useful"  list="useful-values" value="1" min="0" max="4"/>

                <datalist id="useful-values">
                    <option value="0" label="&#128577;" aria-label="not useful"></option>
                    <option value="1" aria-label="inbetween not and somewhat useful"></option>
                    <option value="2" label="&#128528" aria-label="somewhat useful"></option>
                    <option value="3" aria-label="inbetween somewhat and very useful"></option>
                    <option value="4" label="&#128512" aria-label="very useful"></option>
                </datalist>
            </div>
        </fieldset>

        <fieldset>
            <legend>How likely are you to recommend this website to parents?</legend>
            <div class="range-container">
                <input type="range" id="recommend" name="recommend"  list="recommend-values" value="1" min="0" max="4"/>

                <datalist id="recommend-values">
                    <option value="0" label="&#128577;" aria-label="not recommend"></option>
                    <option value="1" aria-label="inbetween not and maybe recommend"></option>
                    <option value="2" label="&#128528" aria-label="maybe recommend"></option>
                    <option value="3" aria-label="inbetween maybe and definitely recommend"></option>
                    <option value="4" label="&#128512" aria-label="definitely recommend"></option>
                </datalist>
            </div>
        </fieldset>

        <fieldset>
            <legend>Has this changed your opinions about autism and bilingualism?</legend>
            <input type="radio" name="changed-opinions" value="yes" id="yes" required>
            <label for="yes">Yes</label><br>
            <input type="radio" name="changed-opinions" value="no" id="no">
            <label for="no">No</label>

            <div class="additional-field">
                <p>Please tell us how...</p>
                <textarea name="changed-opinions-message" rows="5" placeholder=" message (optional)"></textarea>
            </div>
        </fieldset>

        <fieldset>
            <legend>Is there anything else you'd like to tell us?</legend>
            <div class="additional-field">
                <textarea name="message" rows="5" placeholder=" message (optional)"></textarea>
            </div>
        </fieldset>

        <fieldset>
            <legend>Would you like to be updated on future studies and events via email?</legend>
            <input type="radio" name="subscribe" value="yes" id="yes">
            <label for="yes">Yes</label><br>
            <input type="radio" name="subscribe" value="no" id="no" checked>
            <label for="no">No</label>
        </fieldset>
        <button type="submit">Submit</button>
    </form>
</div>

<style lang="scss">
    .form-container {
        margin-top: 3rem;
        margin-bottom: 10rem;
        display:flex;
        flex-direction: column;
        width: 100%;
    }

    .range-container {
        width: 75%;
        margin: 0 auto;
    }

    .additional-field {
        margin-top: 1rem;
    }

    input, button {
        padding: 0.5rem;
    }

    input[type=text] {
        width: 100%;
        font-size: large;
    }

    input[type=email] {
        font-size: large;
    }
    
    input[type=radio] {
        cursor: pointer;
        margin: 0.5rem;
    }

    input[type=range] {
        accent-color: $primary;
        width: 100%;
    }

    fieldset {
        gap: 8px;
        padding: 1rem;
        border-radius: $border-radius;
    }

    legend {
        padding: 6px;
    }

    form {
        margin-top: 2rem;
        display: flex;
        flex-direction: column;
        gap: 20px;
    }

    datalist {
        display: flex;
        justify-content: space-between;
        width: 100%;
    }

    button {
        margin: 1rem 0;
        background: $primary;
        color: white;
        border: none;
        border-radius: $border-radius;
        cursor: pointer;
        font-size: large;
    }

    textarea {
        width: 100%;
        resize: none;
    }

    p {
        margin-bottom: 1rem;
    }
</style>