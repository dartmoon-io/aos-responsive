import AOS from 'aos'

/**
 * Initialize AOS responsive compiling data-aos-* attributes
 * and then initiating the real AOS
 * 
 * @param {Object} options
 */
const init = function init(conf) {
  AOS.init(conf)
}

export default {
  init
}