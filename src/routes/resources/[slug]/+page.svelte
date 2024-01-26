<script>
    import { disableScroll } from '$lib/stores.js';
    import { onMount } from 'svelte';
    import PlayBtnPrimary from '$lib/components/PlayBtnPrimary.svelte';
    import GotoBtnPrimary from '$lib/components/GotoBtnPrimary.svelte';
    import '$lib/scss/fonts.css';

    export let data;
    
    let dialog; 
    let video;
    let iframe;
    let { title, subtitle, lang, Content } = data;

    function showVideo() {
        dialog.showModal();
    }

    function closeVideo(e) {
        console.log(e);
        if (e.target === dialog) {
            // video.pause();
            disableScroll.set(false);
            let iframeSrc = iframe.src;
            iframe.src = iframeSrc;
            dialog.close();
        }
    }

    onMount(() => {
        dialog = document.querySelector("dialog");
        video = document.querySelector("video");
        iframe = document.querySelector("iframe");

        // set page lang
        document.documentElement.lang = lang;

        // create imgs
        let squiggle = document.createElement('img');
        let questions = document.createElement('img');
        let happyJump = document.createElement('img');
        squiggle.src = '/squiggle_2.png';
        questions.src = '/questions.png';
        happyJump.src = '/happy_jump.png';

        let contentWrapper = document.querySelector('.content-wrapper');
        let elements = Array.from(contentWrapper.children);

        // create content wrappers
        let faqWrapper = document.createElement('div');
        let langWrapper = document.createElement('div');
        let takeawaysWrapper = document.createElement('div');
        let question = document.createElement('div');

        let wrappers = [faqWrapper, langWrapper, takeawaysWrapper];
        
        // name wrappers
        faqWrapper.className = 'faq-wrapper'
        langWrapper.className = 'lang-wrapper'
        takeawaysWrapper.className = 'takeaways-wrapper'
        question.className = 'question';


        // add inner wrapper to each content wrapper
        wrappers.forEach((wrapper) => {
            let innerWrapper = document.createElement('div');
            innerWrapper.className = 'inner-wrapper'

            wrapper.appendChild(innerWrapper)
            contentWrapper.appendChild(wrapper)
        })


        // iterate over all DOM elements and place them in designated wrapper
        let i = 0;
        elements.forEach(element => {
            if (element.localName == 'h1') {
                wrappers[i].firstChild.appendChild(element);
            } else if (element.localName == 'h2') {
                question.appendChild(element);
            } else if (element.localName == 'p') {
                question.appendChild(element);
                let q = question.cloneNode(true);
                wrappers[i].firstChild.appendChild(q);
                question.innerHTML = '';
            } else if (element.localName == 'hr') {
                element.remove();
                i = i + 1;
            } else {
                wrappers[i].firstChild.appendChild(element);
            }
        });

        // add imgs
        faqWrapper.appendChild(squiggle);
        langWrapper.firstChild.insertBefore(questions, langWrapper.firstChild.children[4]);
        takeawaysWrapper.appendChild(happyJump);

        let takeaways = takeawaysWrapper.firstChild.firstChild;

        Array.from(takeaways.children).forEach((t, i) => {
            let dot = document.createElement('div');
            dot.className = 'dot';

            if (t.localName == 'li') {
                t.insertAdjacentElement('afterend', dot)
            }
        })

        takeaways.lastChild.remove();
    })
</script>

<dialog on:click={ closeVideo }>
    <iframe src="https://www.youtube.com/embed/oPctNHggQJI?si=kFovJn_VkGrJDFXv" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
    <!-- <form method="dialog">
        <video controls src="/video/video.mp4"></video>
    </form> -->
</dialog>

<div class="resources-wrapper">

    <div class="title-wrapper">
        <div class="title">
            <h1>{ title }</h1>
            <p>{ subtitle }</p>
            <PlayBtnPrimary on:showVideo={ showVideo }/>
            <img src="/dude_sit_3.png" alt="happy pink character sittin on grass">
        </div>
        <div class="btn-wrapper">
            <GotoBtnPrimary />
            Are you a practitioner? We have more this way.
        </div>
    </div>

    <div class="content-wrapper">
        <Content />
    </div>

</div>

<style lang="scss">
    $width: 700px;

    .resources-wrapper {
        font-size: 1.2rem;

        .title-wrapper {
            position: relative;
            height: calc(100vh - 12rem);
            width: 100%;
            // padding: 3rem 0;
            .title {
                position: relative;
                max-width: calc($width + 200px);
                margin: 0 auto;
                h1 {
                    // font-family: Merriweather, serif;
                    width: 700px;
                    font-size: 3.5rem;
                }
                p {
                    margin: 2rem 0 4rem 0;
                    // font-family: Authentic, Arial, Helvetica, sans-serif;
                    color: $text-lighter;
                    width: 400px;
                }
                img {
                    position: absolute;
                    bottom: -100px;
                    right: -150px;
                    transform: scale(0.9);
                }
            }
        }
        .btn-wrapper {
            display: flex;
            align-items: center;
            position: absolute;
            bottom: 2rem;
            left: 2rem;
            font-family: 'Noto Sans', Arial, Helvetica, sans-serif;
        }
    }

    .content-wrapper {

        :global(h1) {
            // font-family: Merriweather, serif;
            // line-height: 1.2em;
            // text-align: center;
            margin-bottom: 3rem;
        }

        :global(p) {
            // font-family: Authentic, Arial, Helvetica, sans-serif;
            line-height: $line-height;
        }

        :global(.inner-wrapper) {
            position: relative;
            z-index: 1;
            max-width: $width;
            margin: 0 auto;
            padding: 3rem 1rem;
        }

        :global(.faq-wrapper) {
            position: relative;
            background-color: $primary;
            color: white;
            overflow: hidden;
            :global(img) {
                max-width: 800px;
                position: absolute;
                bottom: -280px;
                right: -200px;
            }
            :global(h1) {
                color: white;
            }
        }

        :global(.lang-wrapper) {
            :global(img) {
                display: block;
                width: 70%;
                margin: 0 auto;
            }
        }

        :global(.takeaways-wrapper) {
            background-color: $primary;
            color: white;
            :global(ul) {
                list-style-type: none;
                text-align: center;
                :global(li) {
                    margin: 3rem 0;
                    font-size: 2rem;
                }
                :global(.dot) {
                    height: 1rem;
                    width: 1rem;
                    border-radius: 50%;
                    background-color: white;
                    margin: 0 auto;
                }
            }
            :global(img) {
                display: block;
                width: 60%;
                min-width: $width;
                margin: 0 auto;
                padding-bottom: 2rem;
            }
        }

        :global(.question) {
            margin-bottom: 3rem;
            // text-align: justify;
            // text-justify: inter-word;
            :global(h2) {
                // font-family: Merriweather, serif;
                margin: 1rem 0;
            }
        }
    }

    dialog {
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
        padding: 0;
        margin: auto;
        position: absolute;
        border: none;
        border-radius: 10px;
        background-color: rgba(0, 0, 0, 0);
    }

    dialog::backdrop {
        background-color: rgba(0, 0, 0, 0.6);
        backdrop-filter: blur(5px);
    }

    video {
        border-radius: 10px;
        width: 800px;
    }

    iframe {
        border-radius: 10px;
        width: 800px;
        height: 450px;
    }
</style>