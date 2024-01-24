<button></button>

<style lang="scss">
    button {
        all: unset;
        cursor: pointer;
        background: $primary url("/arrow-outwards-white.svg") center no-repeat;
        background-size: 37%;
        border-radius: 50%;
        width: 3rem;
        height: 3rem;
        margin-right: 1rem;
        box-shadow: $btn-shadow;
        transition: box-shadow 200ms ease-in-out;
        &:hover {
            box-shadow: none;
        }
    }
</style>