<input type="submit" value="Watch the video">

<style lang="scss">
    input {
        all: unset;
        cursor: pointer;
        background: $primary url("/play-arrow-white.svg") 93% no-repeat;
        background-size: 2rem;
        padding: 0.8rem 3rem 0.8rem 2rem;
        border-radius: 1.8rem;
        color: white;
        font-family: Arial, Helvetica, sans-serif;
        box-shadow: $btn-shadow;
        transition: box-shadow 250ms ease-in-out;
        &:hover {
            box-shadow: none;
        }
    }
</style>