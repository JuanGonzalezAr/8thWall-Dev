                        // This is a component file. You can use this file to define a custom component for your project.
// This component will appear as a custom component in the editor.

import * as ecs from '@8thwall/ecs'

ecs.registerComponent({
  name: 'Play Video',

  schema: {
    target: ecs.eid,
  },

  stateMachine: ({ world, eid, schemaAttribute }) => {
    ecs.defineState('default')
      .initial()
      .listen(eid, ecs.input.UI_CLICK, () => {
        const { target } = schemaAttribute.get(eid)

        const video = ecs.VideoControls.get(world, target)

        if (!video) return

        ecs.VideoControls.set(world, target, {
          paused: !video.paused,   // Cambia entre pausa y reproducción
        })
      })
  },
})
  // schemaDefaults: {
  // },
  // data: {
  // },
  // add: (world, component) => {
  // },
  // tick: (world, component) => {
  // },
  // remove: (world, component) => {
  // },
  // stateMachine: ({world, eid, schemaAttribute, dataAttribute}) => {
  //   ecs.defineState('default').initial()
  // },
