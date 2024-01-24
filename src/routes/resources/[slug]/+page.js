export async function load({ params }) {
    const version = await import(`../${params.slug}.md`);
    const { title, subtitle, lang } = version.metadata;
    const Content = version.default;

    return {
        title,
        subtitle,
        lang,
        Content
    }
}