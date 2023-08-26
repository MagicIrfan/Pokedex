//fonctions pouvant etre exportés et être utiilisés dans toutes les pages du site
export function capitalize(str)
{
    return str[0].toUpperCase() + str.slice(1);
}

export function pokenumber(number)
{
    return `#${number.toString().padStart(3, '0')}`;
}