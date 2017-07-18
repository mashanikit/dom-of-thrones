function scene2() {
  console.log('Executing scene 2!')

  // Setup Stage
  stage = document.querySelector('#stage')
  castle = document.querySelector('#castle')
  castleImgSrc = castle.getAttribute('src')
  stageImg = stage.querySelector('#stage-img')
  stageImg.setAttribute('src', castleImgSrc)


  // Setup Cast
  nedContainer = document.createElement('div')
    stage.append(nedContainer)

    nedContainer.style.position = 'absolute'
    nedContainer.style.width = '10%'
    nedContainer.style.height = '37%'
    ned.style.width = '70%'
    nedContainer.style.top = '55%'
    nedContainer.style.left = '25%'
    nedContainer.style.border = 'none'
    nedContainer.style.background = 'none'

    ned = document.querySelector('#ned')
    nedContainer.append(ned)

    leather = document.querySelector('#leather-armour')
    nedContainer.append(leather)

  ned.style.border = 'none'
  leather.style.border = 'none'

  ned.style.position = 'absolute'
  ned.style.top = 0
  leather.style.position = 'absolute'
  leather.style.bottom = 0

  // Character 1

  // Character 2

  // Setup Props

  // Prop 1

  // Prop 2

  // Action!

  // Stage direction 1

  frame(function() {

  })

  // Stage direction 2

  frame(function() {

  })

}
