export function getSkiSubtitle(d: Date) {
    if (d.getMonth() > 5 && d.getMonth() < 12) {
        return `It's literally ${monthToName(d.getMonth())}, you might want to reconsider.`
    } else {
        return `It's prime season baby.`
    }
}

function monthToName(month: number) {
    return new Date(0, month).toLocaleString('default', { month: 'long' })
}