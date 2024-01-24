<script>
    import '$lib/scss/fonts.css';
</script>

<div class="about-wrapper">
    <div class="article-wrapper">
        <article>
            <h1>About</h1>
            <p>Over the past six years, our team has published numerous papers, book chapters, and policy briefs based on three research grants.</p>

            <p>We have gained invaluable expertise by working in collaboration with additional academic researchers and individuals with lived experience.</p>

            <p>Our work has evolved from understanding the cognitive effects of bilingualism to expoloring the lived experiences of autistic people and their families.</p>

            <p><strong>Crucially, we highlight the importance of access to a linguistic and cultural identity as a fundamental right.</strong></p>
        <hr>
        </article>

        <img src="/researcher.png" alt="researcher character lecturing infront of a chalkboard.">
    </div>

    <div class="personnel-profiles">
        <div class="profile">
            <img src="/rachael-headshot.png" alt="Dr Rachael Davis headshot">
            <h2>Dr Rachael Davis</h2>

            <p>I am a developmental psychologist whose research focuses on Neurodivergent lived experiences, bilingualism and education.</p>

            <p>Central to my work is a commitment to involving the communities that I work with in the research process; ensuring this research has a strong participatory ethos and real-world relevance to the people that matter.</p>

            <p>I'm a lecturer in Psychology & Education at QMU in Edinburgh, and before this, I was a Research fellow at the SMRC, University of Edinburgh.</p>

            <p>I am part of an advisory board working with the <span><a href="https://differntminds.scot/">Scottish Government</a></span> on how to increase understanding of autism in the general public across Scotland and as a member of the <span><a href="https://embracingcomplexity.org.uk/">Embracing Complexity</a></span>  advisory group.</p>

            <hr>
        </div>

        <div class="profile">
            <img src="/rachael-headshot.png" alt="Dr Rachael Davis headshot">
            <h2>Dr Berengere Digard</h2>

            <p>I am an early career researcher interested in all things to do with autism and neurodiversity.</p>

            <p>After studying Biology and Neurobiology in Lyon (France), I came to Edinburgh to do a PhD researching whether being bilingual shaped the social life, mind, and brain of autistic and non-autistic people.</p>

            <p>Since then, I have expanded my research into other aspects of the autism & bilingualism experience, and I am also supervising serveral projects looking at mental health, masking, intersectionality, social cognition, and access to healthcare for neurodivergent people.</p>

            <p>I am absolutely passionate about community engagement and science communication, so I also always find a way to get involved in too many outreach and impact-related projects.</p>

            <p><a href="https://www.ed.ac.uk/profile/dr-berengere-digard">My staff page.</a></p>

        </div>
    </div>
</div>

<style lang="scss">
    .about-wrapper {
        max-width: 900px;
        margin: 0 auto;
        padding: 0 1rem;
        font-size: 1.2rem;
        
        .article-wrapper {
            // display: flex;
            // gap: 5rem;

            article {
                max-width: 48%;
                min-width: 400px;
            }

            img {
                position: fixed;
                top: 13rem;
                left: 55%;
                margin-top: 4rem;
                height: 420px;
            }
        }

        .personnel-profiles {
            // display: flex;
            // flex-wrap: wrap;
            // justify-content: space-between;
            .profile {
                margin-top: 5rem;
                min-width: 400px;
                width: 48%;
                img {
                    width: 150px;
                }
                h2 {
                    margin-top: 1rem;
                    font-size: 24px;
                }
            }
        }
    }

    h1 {
        font-size: 3.5rem;
    }

    h2 {
        margin-bottom: 2rem;
    }

    p {
        margin: 2rem 0;
    }

    hr {
        border-top: 0.5px solid black;
    }

</style>