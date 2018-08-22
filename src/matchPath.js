import pathToRegexp from "path-to-regexp";
const patternCache = {};

const compilePath = (path) => {
    // if (patternCache[path]) return patternCache[path];
    const keys = []
    const re = pathToRegexp(path, keys);
    patternCache[path] = re
    return { re, keys }
}

const matchPath = (pathName, options = {}, parent) => {
    const { path } = options;

    const { re, keys } = compilePath(path)
    const match = re.exec(pathName);
    if (!match) return null;
    const [url, ...values] = match;
    return {
        pathName,
        url,
        params: keys.reduce((obj, key, index) => {
            obj[key.name] = values[index]
            return obj
        }, {})
    };
}

export default matchPath