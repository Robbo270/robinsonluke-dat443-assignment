function capture() {
    const captureElement = document.querySelector('#capture')
    html2canvas(captureElement)
      .then(canvas => {
        canvas.style.display = 'none'
        document.body.appendChild(canvas)
        return canvas
      })
      
      .then(canvas => {
        const image = canvas.toDataURL('image/png').replace('image/png', 'image/octet-stream')
        const a = document.createElement('a')
        a.setAttribute('download', 'my-image.png')
        a.setAttribute('href', image)
        a.click()
        canvas.remove()
      })
  }
  
let btn = document.getElementById('btn');
btn.addEventListener('click', capture);