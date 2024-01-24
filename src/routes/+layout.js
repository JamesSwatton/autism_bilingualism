export const load = ({ url }) => {
    const currentRoute = url.pathname;

    // create array of language versions 
    const mdFiles = import.meta.glob('./resources/*.md');
    let versions = [];
    for (let version in mdFiles) {
        let striped = version.split('/').pop().split('.')[0];
        if (striped.includes('_')) {
            striped = striped.split('_');
            striped = striped.map((word) => {
               return word.charAt(0).toUpperCase() + word.slice(1);
            })
            striped = striped.join(' ');
        }
        striped = striped.charAt(0).toUpperCase() + striped.slice(1);
        versions.push(striped);
    }

    return {
        currentRoute,
        versions
    }
}
