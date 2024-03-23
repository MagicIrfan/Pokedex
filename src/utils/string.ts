//fonctions pouvant etre exportés et être utiilisés dans toutes les pages du site
export const capitalize = (string : string) : string => {
    return string[0].toUpperCase() + string.slice(1);
}

export const pokenumber = (number : number) : string => {
    return `#${number.toString().padStart(3, '0')}`;
}

export const prettier = (string: string) : string => {
    return string.length ? capitalize(string
        .replaceAll("-", " ")
        .replaceAll("\n", " ")
        .replaceAll("_", " ")) : "";
}