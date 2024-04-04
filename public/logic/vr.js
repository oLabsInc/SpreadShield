console.log('HIIII!!!!')


const
    screenshotButtonEqui = document.getElementById('screenshotButtonEqui'),
    screenshotButtonRect = document.getElementById('screenshotButtonRect'),
    sharePageQr = document.getElementById('sharePageQr'),
    fullscreenImage = document.getElementById('fullscreenImage')


// screenshotButtonEqui.addEventListener('click', takeScreenshot('equirectangular'))
// screenshotButtonRect.addEventListener('click', takeScreenshot('perspective'))
sharePageQr.addEventListener('click', e => {
    const sharePageQrImage = sharePageQr.querySelector('img')
    const sharePageQrLink = sharePageQrImage.getAttribute('src')
    const fullscreenImageImg = fullscreenImage.querySelector('img')
    fullscreenImageImg.setAttribute('src', sharePageQrLink)
    fullscreenImage.style.display = 'flex'
})
fullscreenImage.addEventListener('click', e => {
    fullscreenImage.style.display = 'none'
})

// function takeScreenshot(imageType) {

//     document.querySelector('a-scene').components.screenshot.capture('equirectangular')
// }

console.log(document.querySelector('a-scene').components)
// ICON ATTRIBUTIONS

// <a href="https://www.freepik.com/icon/360_1614527">Icon by Kiranshastry</a>

// https://www.freepik.com/author/kiranshastry/icons/kiranshastry-gradient_630?t=f



// QR CODE DESIGN


// https://www.qrcode-monkey.com/
// #56B7C0 -> #0277BD Linear Gradient
// Body Shape: 6th template
// Eye Frame Shape: 2nd
// Eye Ball Shape: 2nd
