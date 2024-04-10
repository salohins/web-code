export const scrollTo = (elementId, position) => {
    if (elementId)
        document.getElementById(elementId).scrollIntoView({ behavior: 'smooth', block: position, inline: 'center' })
    else
        document.body.scrollIntoView({ behavior: 'smooth', block: position, inline: 'center' })
}



