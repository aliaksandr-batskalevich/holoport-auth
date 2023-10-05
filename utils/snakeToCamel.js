const snakeToCamel = (str) => str.replace(/[^a-zA-Z0-9]+(.)/g, (m, chr) => chr.toUpperCase());

export const snakeToCamelObj = (obj) => {
    const result = {};

    const keys = Object.keys(obj).map(snakeToCamel);
    const values = Object.values(obj);
    for (let i = 0; i < keys.length; i++) {
        result[keys[i]] = values[i];
    }

    return result;
};