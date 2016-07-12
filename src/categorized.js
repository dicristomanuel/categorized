'use strict';

import teach from './teach';

export default (props = {}) => {

  let state = {
    knowledge: [],
    debug: props.debug || false
  }

  return Object.assign(
    {},
    teach(state)
  )
}
