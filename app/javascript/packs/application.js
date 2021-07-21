import 'stylesheets/application.scss'

import Rails, { CableCar } from 'mrujs'
import * as Turbo from '@hotwired/turbo'
import CableReady from 'cable_ready'
// import AudioOperations from '@cable_ready/audio_operations'
import '@fortawesome/fontawesome-free/js/solid'

window.Turbo = Turbo

import 'channels'
import 'controllers'

const images = require.context('../images', true)
// const imagePath = name => images(name, true)

Rails.start({
  plugins: [new CableCar(CableReady)]
})
// CableReady.addOperations(AudioOperations)
