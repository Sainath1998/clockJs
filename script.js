setInterval(setClock,1000)

const hourHand = document.getElementById('data-hour-hand')
const minutesHand = document.getElementById('data-minutes-hand')
const secondsHand = document.getElementById('data-seconds-hand')



function setClock()
{
    const currDate = new Date()
    const secondsRatio = currDate.getSeconds()/60
    const minutesRatio = (secondsRatio+currDate.getMinutes())/60
    const hoursRatio = (minutesRatio+currDate.getHours())/12

    setRotation(secondsHand,secondsRatio)
    setRotation(minutesHand,minutesRatio)
    setRotation(hourHand,hoursRatio)
}

function setRotation(element,rotationRatio)
{
    element.style.setProperty('--rotation',rotationRatio * 360)
}