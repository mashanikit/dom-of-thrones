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

  // Character 2 - Joff
  joffContainer = document.createElement('div')
  joffContainer.id = 'joff-container'
  stage.append(joffContainer)
  joffContainer.style.width = '8%'
  joffContainer.style.position = 'absolute'
  joffContainer.style.height = '31%'
  joffContainer.style.top = '55%'
  joffContainer.style.left = '55%'

  joff = document.querySelector('#joffrey')
  joffContainer.append(joff)
  joff.style.width = '75%'
  joff.style.position = 'absolute'
  joff.style.left = '33%'

  kingWardrobe = document.querySelector('#king')
  joffContainer.append(kingWardrobe)
  kingWardrobe.style.position = 'absolute'
  kingWardrobe.style.bottom = 0

  // Setup Props
  sword = document.querySelector('#sword')
  stage.append(sword)


  // Prop 1

  sword.style.position = 'absolute'
  sword.style.top = '77%'
  sword.style.left = '31%'
  sword.style.height = '5%'
  sword.style.transform = 'rotateY(150deg)'

  // Prop 2

  // Action!

  // Stage direction 1

  frame(function() {
    sword.style.top = '77%'
    sword.style.left = '31%'
    joff.style.top = 0
    joff.style.left = '33%'
    joff.style.transform = 'rotateZ(220deg)'

  })

  // Stage direction 2

  frame(function() {
    sword.style.top = '74%'
    sword.style.left = '36%'
    joff.style.top = '17%'
    joff.style.left = '90%'
    joff.style.transform = 'rotateZ(140deg)'
})

  // Stage direction 3

  frame(function() {
    sword.style.top = '71%'
    sword.style.left = '41%'
    joff.style.top = '35%'
    joff.style.left = '160%'
    joff.style.transform = 'rotateZ(260deg)'


})

  // Stage direction 4
  frame(function() {
    sword.style.top = '68%'
    sword.style.left = '47%'
    joff.style.top = '55%'
    joff.style.left = '230%'
    joff.style.transform = 'rotateZ(180deg)'
})

  // Stage direction 5
  frame(function() {
    sword.style.top = '64%'
    sword.style.left = '53%'
    joff.style.top = '75%'
    joff.style.left = '300%'
    joff.style.transform = 'rotateZ(100deg)'

  })

}
