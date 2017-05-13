export function filterProps(props, ...tags) {
    return Object.keys(props)
        .filter(prop => {
            return tags.indexOf(prop) === -1;
        })
        .reduce((obj, prop) => {
            obj[prop] = props[prop];
            return obj;
        }, {});
}
