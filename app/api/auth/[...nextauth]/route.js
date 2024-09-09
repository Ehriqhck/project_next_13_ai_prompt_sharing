import NextAuth from 'next-auth'
import GoogleProvider from 'next-auth/providers/google'

import User from '@models/user'
import { connectToDB } from '@utils/database'
const globalContext = {
  TEST_PROFILE_1: {
    profileName: 'TEST PROFILE 1',
    dateModified: 'yesterday',
    dateCreated: 'today',
    savedDevices: {
      VKB_GLADIATOR_NXT_EVO_RIGHT: {
        instance: '',
        type: 'joystick',
        buttons: {
          // X_Axis: {
          //   press: {
          //     name: 'TWIST X',
          //     actionName: 'rotx',
          //     layers: [
          //       {
          //         key: 'v_weapon_manual_gimbal_cycle_source',
          //         label:
          //           'Manual Gimbal Mode - Swap VJoy / Look Direction (Toggle, Hold) (Toggle)',
          //         data: {
          //           actionmapName: 'spaceship_weapons',
          //           name: {
          //             key: 'v_weapon_manual_gimbal_cycle_source',
          //             label:
          //               'Manual Gimbal Mode - Swap VJoy / Look Direction (Toggle, Hold) (Toggle)',
          //             data: {
          //               actionmapName: 'spaceship_weapons',
          //               name: 'Manual Gimbal Mode - Swap VJoy / Look Direction (Toggle, Hold)',
          //               category: 'Vehicles / Weapons',
          //               inputType: 'Toggle'
          //             }
          //           },
          //           category: 'Vehicles / Weapons',
          //           inputType: 'Toggle'
          //         }
          //       },
          //       {
          //         key: 'v_weapon_manual_gimbal_cycle_source',
          //         label:
          //           'Manual Gimbal Mode - Swap VJoy / Look Direction (Toggle, Hold) (Toggle)',
          //         data: {
          //           actionmapName: 'spaceship_weapons',
          //           name: 'Manual Gimbal Mode - Swap VJoy / Look Direction (Toggle, Hold)',
          //           category: 'Vehicles / Weapons',
          //           inputType: 'Toggle'
          //         }
          //       },
          //       {
          //         key: 'v_weapon_manual_gimbal_cycle_source',
          //         label:
          //           'Manual Gimbal Mode - Swap VJoy / Look Direction (Toggle, Hold) (Toggle)',
          //         data: {
          //           actionmapName: 'spaceship_weapons',
          //           name: {
          //             key: 'v_weapon_manual_gimbal_cycle_source',
          //             label:
          //               'Manual Gimbal Mode - Swap VJoy / Look Direction (Toggle, Hold) (Toggle)',
          //             data: {
          //               actionmapName: 'spaceship_weapons',
          //               name: 'Manual Gimbal Mode - Swap VJoy / Look Direction (Toggle, Hold)',
          //               category: 'Vehicles / Weapons',
          //               inputType: 'Toggle'
          //             }
          //           },
          //           category: 'Vehicles / Weapons',
          //           inputType: 'Toggle'
          //         }
          //       }
          //     ]
          //   }
          // },
          // Y_Axis: {
          //   'rotate Y': {
          //     bottom: {
          //       name: 'rotate Y',
          //       actionName: 'y',
          //       layers: [
          //         {
          //           key: 'v_weapon_manual_gimbal_cycle_source',
          //           label:
          //             'Manual Gimbal Mode - Swap VJoy / Look Direction (Toggle, Hold) (Toggle)',
          //           data: {
          //             actionmapName: 'spaceship_weapons',
          //             name: 'Manual Gimbal Mode - Swap VJoy / Look Direction (Toggle, Hold)',
          //             category: 'Vehicles / Weapons',
          //             inputType: 'Toggle'
          //           }
          //         },
          //         {
          //           key: 'v_weapon_manual_gimbal_cycle_source',
          //           label:
          //             'Manual Gimbal Mode - Swap VJoy / Look Direction (Toggle, Hold) (Toggle)',
          //           data: {
          //             actionmapName: 'spaceship_weapons',
          //             name: 'Manual Gimbal Mode - Swap VJoy / Look Direction (Toggle, Hold)',
          //             category: 'Vehicles / Weapons',
          //             inputType: 'Toggle'
          //           }
          //         },
          //         {
          //           key: 'v_weapon_manual_gimbal_cycle_source',
          //           label:
          //             'Manual Gimbal Mode - Swap VJoy / Look Direction (Toggle, Hold) (Toggle)',
          //           data: {
          //             actionmapName: 'spaceship_weapons',
          //             name: 'Manual Gimbal Mode - Swap VJoy / Look Direction (Toggle, Hold)',
          //             category: 'Vehicles / Weapons',
          //             inputType: 'Toggle'
          //           }
          //         }
          //       ]
          //     }
          //   }
          // },
          // Z_AXIS: {
          //   rotate_Z: {
          //     press: {
          //       name: 'rotate Z',
          //       actionName: 'rotZ',

          //       layers: [
          //         {
          //           key: 'v_weapon_manual_gimbal_cycle_source',
          //           label:
          //             'Manual Gimbal Mode - Swap VJoy / Look Direction (Toggle, Hold) (Toggle)',
          //           data: {
          //             actionmapName: 'spaceship_weapons',
          //             name: 'Manual Gimbal Mode - Swap VJoy / Look Direction (Toggle, Hold)',
          //             category: 'Vehicles / Weapons',
          //             inputType: 'Toggle'
          //           }
          //         },
          //         {
          //           key: 'v_weapon_manual_gimbal_cycle_source',
          //           label:
          //             'Manual Gimbal Mode - Swap VJoy / Look Direction (Toggle, Hold) (Toggle)',
          //           data: {
          //             actionmapName: 'spaceship_weapons',
          //             name: 'Manual Gimbal Mode - Swap VJoy / Look Direction (Toggle, Hold)',
          //             category: 'Vehicles / Weapons',
          //             inputType: 'Toggle'
          //           }
          //         },
          //         {
          //           key: 'v_weapon_manual_gimbal_cycle_source',
          //           label:
          //             'Manual Gimbal Mode - Swap VJoy / Look Direction (Toggle, Hold) (Toggle)',
          //           data: {
          //             actionmapName: 'spaceship_weapons',
          //             name: 'Manual Gimbal Mode - Swap VJoy / Look Direction (Toggle, Hold)',
          //             category: 'Vehicles / Weapons',
          //             inputType: 'Toggle'
          //           }
          //         }
          //       ]
          //     }
          //   },
          //   'Twist Z': {
          //     actionName: 'rotz',

          //     press: {
          //       name: 'TWIST Z',
          //       layers: [
          //         {
          //           key: 'v_weapon_manual_gimbal_cycle_source',
          //           label:
          //             'Manual Gimbal Mode - Swap VJoy / Look Direction (Toggle, Hold) (Toggle)',
          //           data: {
          //             actionmapName: 'spaceship_weapons',
          //             name: 'Manual Gimbal Mode - Swap VJoy / Look Direction (Toggle, Hold)',
          //             category: 'Vehicles / Weapons',
          //             inputType: 'Toggle'
          //           }
          //         },
          //         {
          //           key: 'v_weapon_manual_gimbal_cycle_source',
          //           label:
          //             'Manual Gimbal Mode - Swap VJoy / Look Direction (Toggle, Hold) (Toggle)',
          //           data: {
          //             actionmapName: 'spaceship_weapons',
          //             name: 'Manual Gimbal Mode - Swap VJoy / Look Direction (Toggle, Hold)',
          //             category: 'Vehicles / Weapons',
          //             inputType: 'Toggle'
          //           }
          //         },
          //         {
          //           key: 'v_weapon_manual_gimbal_cycle_source',
          //           label:
          //             'Manual Gimbal Mode - Swap VJoy / Look Direction (Toggle, Hold) (Toggle)',
          //           data: {
          //             actionmapName: 'spaceship_weapons',
          //             name: 'Manual Gimbal Mode - Swap VJoy / Look Direction (Toggle, Hold)',
          //             category: 'Vehicles / Weapons',
          //             inputType: 'Toggle'
          //           }
          //         }
          //       ]
          //     }
          //   }
          // },
          Front: {
            Circle_Stick: {
              top: {
                name: 'CIRCLE SWITCH UP',
                actionName: 'button6',
                inputType: 'discreet',
                layers: [
                  {
                    key: 'v_weapon_manual_gimbal_cycle_source',
                    label:
                      'Manual Gimbal Mode - Swap VJoy / Look Direction (Toggle, Hold) (Toggle)',
                    data: {
                      actionmapName: 'spaceship_weapons',
                      name: 'Manual Gimbal Mode - Swap VJoy / Look Direction (Toggle, Hold)',
                      category: 'Vehicles / Weapons',
                      inputType: 'Toggle'
                    }
                  },
                  {
                    key: 'v_weapon_manual_gimbal_cycle_source',
                    label:
                      'Manual Gimbal Mode - Swap VJoy / Look Direction (Toggle, Hold) (Toggle)',
                    data: {
                      actionmapName: 'spaceship_weapons',
                      name: 'Manual Gimbal Mode - Swap VJoy / Look Direction (Toggle, Hold)',
                      category: 'Vehicles / Weapons',
                      inputType: 'Toggle'
                    }
                  },
                  {
                    key: 'v_weapon_manual_gimbal_cycle_source',
                    label:
                      'Manual Gimbal Mode - Swap VJoy / Look Direction (Toggle, Hold) (Toggle)',
                    data: {
                      actionmapName: 'spaceship_weapons',
                      name: 'Manual Gimbal Mode - Swap VJoy / Look Direction (Toggle, Hold)',
                      category: 'Vehicles / Weapons',
                      inputType: 'Toggle'
                    }
                  }
                ]
              },
              bottom: {
                name: 'CIRCLE SWITCH DOWN',
                actionName: 'button8',
                inputType: 'discreet',
                layers: [
                  {
                    key: 'v_weapon_manual_gimbal_cycle_source',
                    label:
                      'Manual Gimbal Mode - Swap VJoy / Look Direction (Toggle, Hold) (Toggle)',
                    data: {
                      actionmapName: 'spaceship_weapons',
                      name: 'Manual Gimbal Mode - Swap VJoy / Look Direction (Toggle, Hold)',
                      category: 'Vehicles / Weapons',
                      inputType: 'Toggle'
                    }
                  },
                  {
                    key: 'v_weapon_manual_gimbal_cycle_source',
                    label:
                      'Manual Gimbal Mode - Swap VJoy / Look Direction (Toggle, Hold) (Toggle)',
                    data: {
                      actionmapName: 'spaceship_weapons',
                      name: 'Manual Gimbal Mode - Swap VJoy / Look Direction (Toggle, Hold)',
                      category: 'Vehicles / Weapons',
                      inputType: 'Toggle'
                    }
                  },
                  {
                    key: 'v_weapon_manual_gimbal_cycle_source',
                    label:
                      'Manual Gimbal Mode - Swap VJoy / Look Direction (Toggle, Hold) (Toggle)',
                    data: {
                      actionmapName: 'spaceship_weapons',
                      name: 'Manual Gimbal Mode - Swap VJoy / Look Direction (Toggle, Hold)',
                      category: 'Vehicles / Weapons',
                      inputType: 'Toggle'
                    }
                  }
                ]
              },
              press: {
                name: 'CIRCLE SWITCH PRESS',
                actionName: 'button10',
                inputType: 'discreet',
                layers: [
                  {
                    key: 'v_weapon_manual_gimbal_cycle_source',
                    label:
                      'Manual Gimbal Mode - Swap VJoy / Look Direction (Toggle, Hold) (Toggle)',
                    data: {
                      actionmapName: 'spaceship_weapons',
                      name: 'Manual Gimbal Mode - Swap VJoy / Look Direction (Toggle, Hold)',
                      category: 'Vehicles / Weapons',
                      inputType: 'Toggle'
                    }
                  },
                  {
                    key: 'v_weapon_manual_gimbal_cycle_source',
                    label:
                      'Manual Gimbal Mode - Swap VJoy / Look Direction (Toggle, Hold) (Toggle)',
                    data: {
                      actionmapName: 'spaceship_weapons',
                      name: 'Manual Gimbal Mode - Swap VJoy / Look Direction (Toggle, Hold)',
                      category: 'Vehicles / Weapons',
                      inputType: 'Toggle'
                    }
                  },
                  {
                    key: 'v_weapon_manual_gimbal_cycle_source',
                    label:
                      'Manual Gimbal Mode - Swap VJoy / Look Direction (Toggle, Hold) (Toggle)',
                    data: {
                      actionmapName: 'spaceship_weapons',
                      name: 'Manual Gimbal Mode - Swap VJoy / Look Direction (Toggle, Hold)',
                      category: 'Vehicles / Weapons',
                      inputType: 'Toggle'
                    }
                  }
                ]
              },
              left: {
                name: 'CIRCLE SWITCH LEFT',
                actionName: 'button9',
                inputType: 'discreet',
                layers: [
                  {
                    key: 'v_weapon_manual_gimbal_cycle_source',
                    label:
                      'Manual Gimbal Mode - Swap VJoy / Look Direction (Toggle, Hold) (Toggle)',
                    data: {
                      actionmapName: 'spaceship_weapons',
                      name: 'Manual Gimbal Mode - Swap VJoy / Look Direction (Toggle, Hold)',
                      category: 'Vehicles / Weapons',
                      inputType: 'Toggle'
                    }
                  },
                  {
                    key: 'v_weapon_manual_gimbal_cycle_source',
                    label:
                      'Manual Gimbal Mode - Swap VJoy / Look Direction (Toggle, Hold) (Toggle)',
                    data: {
                      actionmapName: 'spaceship_weapons',
                      name: 'Manual Gimbal Mode - Swap VJoy / Look Direction (Toggle, Hold)',
                      category: 'Vehicles / Weapons',
                      inputType: 'Toggle'
                    }
                  },
                  {
                    key: 'v_weapon_manual_gimbal_cycle_source',
                    label:
                      'Manual Gimbal Mode - Swap VJoy / Look Direction (Toggle, Hold) (Toggle)',
                    data: {
                      actionmapName: 'spaceship_weapons',
                      name: 'Manual Gimbal Mode - Swap VJoy / Look Direction (Toggle, Hold)',
                      category: 'Vehicles / Weapons',
                      inputType: 'Toggle'
                    }
                  }
                ]
              },
              right: {
                name: 'CIRCLE SWITCH RIGHT',
                actionName: 'button7',
                inputType: 'discreet',
                layers: [
                  {
                    key: 'v_weapon_manual_gimbal_cycle_source',
                    label:
                      'Manual Gimbal Mode - Swap VJoy / Look Direction (Toggle, Hold) (Toggle)',
                    data: {
                      actionmapName: 'spaceship_weapons',
                      name: 'Manual Gimbal Mode - Swap VJoy / Look Direction (Toggle, Hold)',
                      category: 'Vehicles / Weapons',
                      inputType: 'Toggle'
                    }
                  },
                  {
                    key: 'v_weapon_manual_gimbal_cycle_source',
                    label:
                      'Manual Gimbal Mode - Swap VJoy / Look Direction (Toggle, Hold) (Toggle)',
                    data: {
                      actionmapName: 'spaceship_weapons',
                      name: 'Manual Gimbal Mode - Swap VJoy / Look Direction (Toggle, Hold)',
                      category: 'Vehicles / Weapons',
                      inputType: 'Toggle'
                    }
                  },
                  {
                    key: 'v_weapon_manual_gimbal_cycle_source',
                    label:
                      'Manual Gimbal Mode - Swap VJoy / Look Direction (Toggle, Hold) (Toggle)',
                    data: {
                      actionmapName: 'spaceship_weapons',
                      name: 'Manual Gimbal Mode - Swap VJoy / Look Direction (Toggle, Hold)',
                      category: 'Vehicles / Weapons',
                      inputType: 'Toggle'
                    }
                  }
                ]
              }
            },
            Hat_Stick: {
              top: {
                name: 'HAT SWITCH UP',
                actionName: 'hat1_up',
                inputType: 'discreet',
                layers: [
                  {
                    key: 'v_weapon_manual_gimbal_cycle_source',
                    label:
                      'Manual Gimbal Mode - Swap VJoy / Look Direction (Toggle, Hold) (Toggle)',
                    data: {
                      actionmapName: 'spaceship_weapons',
                      name: 'Manual Gimbal Mode - Swap VJoy / Look Direction (Toggle, Hold)',
                      category: 'Vehicles / Weapons',
                      inputType: 'Toggle'
                    }
                  },
                  {
                    key: 'v_weapon_manual_gimbal_cycle_source',
                    label:
                      'Manual Gimbal Mode - Swap VJoy / Look Direction (Toggle, Hold) (Toggle)',
                    data: {
                      actionmapName: 'spaceship_weapons',
                      name: 'Manual Gimbal Mode - Swap VJoy / Look Direction (Toggle, Hold)',
                      category: 'Vehicles / Weapons',
                      inputType: 'Toggle'
                    }
                  },
                  {
                    key: 'v_weapon_manual_gimbal_cycle_source',
                    label:
                      'Manual Gimbal Mode - Swap VJoy / Look Direction (Toggle, Hold) (Toggle)',
                    data: {
                      actionmapName: 'spaceship_weapons',
                      name: 'Manual Gimbal Mode - Swap VJoy / Look Direction (Toggle, Hold)',
                      category: 'Vehicles / Weapons',
                      inputType: 'Toggle'
                    }
                  }
                ]
              },
              bottom: {
                name: 'HAT SWITCH DOWN',
                actionName: 'hat1_down',
                inputType: 'discreet',
                layers: [
                  {
                    key: 'v_weapon_manual_gimbal_cycle_source',
                    label:
                      'Manual Gimbal Mode - Swap VJoy / Look Direction (Toggle, Hold) (Toggle)',
                    data: {
                      actionmapName: 'spaceship_weapons',
                      name: 'Manual Gimbal Mode - Swap VJoy / Look Direction (Toggle, Hold)',
                      category: 'Vehicles / Weapons',
                      inputType: 'Toggle'
                    }
                  },
                  {
                    key: 'v_weapon_manual_gimbal_cycle_source',
                    label:
                      'Manual Gimbal Mode - Swap VJoy / Look Direction (Toggle, Hold) (Toggle)',
                    data: {
                      actionmapName: 'spaceship_weapons',
                      name: 'Manual Gimbal Mode - Swap VJoy / Look Direction (Toggle, Hold)',
                      category: 'Vehicles / Weapons',
                      inputType: 'Toggle'
                    }
                  },
                  {
                    key: 'v_weapon_manual_gimbal_cycle_source',
                    label:
                      'Manual Gimbal Mode - Swap VJoy / Look Direction (Toggle, Hold) (Toggle)',
                    data: {
                      actionmapName: 'spaceship_weapons',
                      name: 'Manual Gimbal Mode - Swap VJoy / Look Direction (Toggle, Hold)',
                      category: 'Vehicles / Weapons',
                      inputType: 'Toggle'
                    }
                  }
                ]
              },
              press: {
                name: 'HAT SWITCH PRESS',
                actionName: 'hat1_up',
                inputType: 'discreet',
                layers: [
                  {
                    key: 'v_weapon_manual_gimbal_cycle_source',
                    label:
                      'Manual Gimbal Mode - Swap VJoy / Look Direction (Toggle, Hold) (Toggle)',
                    data: {
                      actionmapName: 'spaceship_weapons',
                      name: 'Manual Gimbal Mode - Swap VJoy / Look Direction (Toggle, Hold)',
                      category: 'Vehicles / Weapons',
                      inputType: 'Toggle'
                    }
                  },
                  {
                    key: 'v_weapon_manual_gimbal_cycle_source',
                    label:
                      'Manual Gimbal Mode - Swap VJoy / Look Direction (Toggle, Hold) (Toggle)',
                    data: {
                      actionmapName: 'spaceship_weapons',
                      name: 'Manual Gimbal Mode - Swap VJoy / Look Direction (Toggle, Hold)',
                      category: 'Vehicles / Weapons',
                      inputType: 'Toggle'
                    }
                  },
                  {
                    key: 'v_weapon_manual_gimbal_cycle_source',
                    label:
                      'Manual Gimbal Mode - Swap VJoy / Look Direction (Toggle, Hold) (Toggle)',
                    data: {
                      actionmapName: 'spaceship_weapons',
                      name: 'Manual Gimbal Mode - Swap VJoy / Look Direction (Toggle, Hold)',
                      category: 'Vehicles / Weapons',
                      inputType: 'Toggle'
                    }
                  }
                ]
              },
              left: {
                name: 'HAT SWITCH LEFT',
                actionName: 'hat1_left',
                inputType: 'discreet',
                layers: [
                  {
                    key: 'v_weapon_manual_gimbal_cycle_source',
                    label:
                      'Manual Gimbal Mode - Swap VJoy / Look Direction (Toggle, Hold) (Toggle)',
                    data: {
                      actionmapName: 'spaceship_weapons',
                      name: 'Manual Gimbal Mode - Swap VJoy / Look Direction (Toggle, Hold)',
                      category: 'Vehicles / Weapons',
                      inputType: 'Toggle'
                    }
                  },
                  {
                    key: 'v_weapon_manual_gimbal_cycle_source',
                    label:
                      'Manual Gimbal Mode - Swap VJoy / Look Direction (Toggle, Hold) (Toggle)',
                    data: {
                      actionmapName: 'spaceship_weapons',
                      name: 'Manual Gimbal Mode - Swap VJoy / Look Direction (Toggle, Hold)',
                      category: 'Vehicles / Weapons',
                      inputType: 'Toggle'
                    }
                  },
                  {
                    key: 'v_weapon_manual_gimbal_cycle_source',
                    label:
                      'Manual Gimbal Mode - Swap VJoy / Look Direction (Toggle, Hold) (Toggle)',
                    data: {
                      actionmapName: 'spaceship_weapons',
                      name: 'Manual Gimbal Mode - Swap VJoy / Look Direction (Toggle, Hold)',
                      category: 'Vehicles / Weapons',
                      inputType: 'Toggle'
                    }
                  }
                ]
              },
              right: {
                name: 'HAT SWITCH RIGHT',
                layers: [
                  {
                    key: 'v_weapon_manual_gimbal_cycle_source',
                    label:
                      'Manual Gimbal Mode - Swap VJoy / Look Direction (Toggle, Hold) (Toggle)',
                    data: {
                      actionmapName: 'spaceship_weapons',
                      name: 'Manual Gimbal Mode - Swap VJoy / Look Direction (Toggle, Hold)',
                      category: 'Vehicles / Weapons',
                      inputType: 'Toggle'
                    }
                  },
                  {
                    key: 'v_weapon_manual_gimbal_cycle_source',
                    label:
                      'Manual Gimbal Mode - Swap VJoy / Look Direction (Toggle, Hold) (Toggle)',
                    data: {
                      actionmapName: 'spaceship_weapons',
                      name: 'Manual Gimbal Mode - Swap VJoy / Look Direction (Toggle, Hold)',
                      category: 'Vehicles / Weapons',
                      inputType: 'Toggle'
                    }
                  },
                  {
                    key: 'v_weapon_manual_gimbal_cycle_source',
                    label:
                      'Manual Gimbal Mode - Swap VJoy / Look Direction (Toggle, Hold) (Toggle)',
                    data: {
                      actionmapName: 'spaceship_weapons',
                      name: 'Manual Gimbal Mode - Swap VJoy / Look Direction (Toggle, Hold)',
                      category: 'Vehicles / Weapons',
                      inputType: 'Toggle'
                    }
                  }
                ]
              }
            },
            Pill_Stick: {
              top: {
                name: 'PILL SWITCH UP',
                actionName: 'button11',
                inputType: 'discreet',
                layers: [
                  {
                    key: 'v_weapon_manual_gimbal_cycle_source',
                    label:
                      'Manual Gimbal Mode - Swap VJoy / Look Direction (Toggle, Hold) (Toggle)',
                    data: {
                      actionmapName: 'spaceship_weapons',
                      name: 'Manual Gimbal Mode - Swap VJoy / Look Direction (Toggle, Hold)',
                      category: 'Vehicles / Weapons',
                      inputType: 'Toggle'
                    }
                  },
                  {
                    key: 'v_weapon_manual_gimbal_cycle_source',
                    label:
                      'Manual Gimbal Mode - Swap VJoy / Look Direction (Toggle, Hold) (Toggle)',
                    data: {
                      actionmapName: 'spaceship_weapons',
                      name: 'Manual Gimbal Mode - Swap VJoy / Look Direction (Toggle, Hold)',
                      category: 'Vehicles / Weapons',
                      inputType: 'Toggle'
                    }
                  },
                  {
                    key: 'v_weapon_manual_gimbal_cycle_source',
                    label:
                      'Manual Gimbal Mode - Swap VJoy / Look Direction (Toggle, Hold) (Toggle)',
                    data: {
                      actionmapName: 'spaceship_weapons',
                      name: 'Manual Gimbal Mode - Swap VJoy / Look Direction (Toggle, Hold)',
                      category: 'Vehicles / Weapons',
                      inputType: 'Toggle'
                    }
                  }
                ]
              },
              bottom: {
                name: 'PILL SWITCH DOWN',
                actionName: 'button13',
                inputType: 'discreet',
                layers: [
                  {
                    key: 'v_weapon_manual_gimbal_cycle_source',
                    label:
                      'Manual Gimbal Mode - Swap VJoy / Look Direction (Toggle, Hold) (Toggle)',
                    data: {
                      actionmapName: 'spaceship_weapons',
                      name: 'Manual Gimbal Mode - Swap VJoy / Look Direction (Toggle, Hold)',
                      category: 'Vehicles / Weapons',
                      inputType: 'Toggle'
                    }
                  },
                  {
                    key: 'v_weapon_manual_gimbal_cycle_source',
                    label:
                      'Manual Gimbal Mode - Swap VJoy / Look Direction (Toggle, Hold) (Toggle)',
                    data: {
                      actionmapName: 'spaceship_weapons',
                      name: 'Manual Gimbal Mode - Swap VJoy / Look Direction (Toggle, Hold)',
                      category: 'Vehicles / Weapons',
                      inputType: 'Toggle'
                    }
                  },
                  {
                    key: 'v_weapon_manual_gimbal_cycle_source',
                    label:
                      'Manual Gimbal Mode - Swap VJoy / Look Direction (Toggle, Hold) (Toggle)',
                    data: {
                      actionmapName: 'spaceship_weapons',
                      name: 'Manual Gimbal Mode - Swap VJoy / Look Direction (Toggle, Hold)',
                      category: 'Vehicles / Weapons',
                      inputType: 'Toggle'
                    }
                  }
                ]
              },
              press: {
                name: 'PILL SWITCH PRESS',
                actionName: 'button15',
                inputType: 'discreet',
                layers: [
                  {
                    key: 'v_weapon_manual_gimbal_cycle_source',
                    label:
                      'Manual Gimbal Mode - Swap VJoy / Look Direction (Toggle, Hold) (Toggle)',
                    data: {
                      actionmapName: 'spaceship_weapons',
                      name: 'Manual Gimbal Mode - Swap VJoy / Look Direction (Toggle, Hold)',
                      category: 'Vehicles / Weapons',
                      inputType: 'Toggle'
                    }
                  },
                  {
                    key: 'v_weapon_manual_gimbal_cycle_source',
                    label:
                      'Manual Gimbal Mode - Swap VJoy / Look Direction (Toggle, Hold) (Toggle)',
                    data: {
                      actionmapName: 'spaceship_weapons',
                      name: 'Manual Gimbal Mode - Swap VJoy / Look Direction (Toggle, Hold)',
                      category: 'Vehicles / Weapons',
                      inputType: 'Toggle'
                    }
                  },
                  {
                    key: 'v_weapon_manual_gimbal_cycle_source',
                    label:
                      'Manual Gimbal Mode - Swap VJoy / Look Direction (Toggle, Hold) (Toggle)',
                    data: {
                      actionmapName: 'spaceship_weapons',
                      name: 'Manual Gimbal Mode - Swap VJoy / Look Direction (Toggle, Hold)',
                      category: 'Vehicles / Weapons',
                      inputType: 'Toggle'
                    }
                  }
                ]
              },
              left: {
                name: 'PILL SWITCH LEFT',
                actionName: 'button14',
                inputType: 'discreet',
                layers: [
                  {
                    key: 'v_weapon_manual_gimbal_cycle_source',
                    label:
                      'Manual Gimbal Mode - Swap VJoy / Look Direction (Toggle, Hold) (Toggle)',
                    data: {
                      actionmapName: 'spaceship_weapons',
                      name: 'Manual Gimbal Mode - Swap VJoy / Look Direction (Toggle, Hold)',
                      category: 'Vehicles / Weapons',
                      inputType: 'Toggle'
                    }
                  },
                  {
                    key: 'v_weapon_manual_gimbal_cycle_source',
                    label:
                      'Manual Gimbal Mode - Swap VJoy / Look Direction (Toggle, Hold) (Toggle)',
                    data: {
                      actionmapName: 'spaceship_weapons',
                      name: 'Manual Gimbal Mode - Swap VJoy / Look Direction (Toggle, Hold)',
                      category: 'Vehicles / Weapons',
                      inputType: 'Toggle'
                    }
                  },
                  {
                    key: 'v_weapon_manual_gimbal_cycle_source',
                    label:
                      'Manual Gimbal Mode - Swap VJoy / Look Direction (Toggle, Hold) (Toggle)',
                    data: {
                      actionmapName: 'spaceship_weapons',
                      name: 'Manual Gimbal Mode - Swap VJoy / Look Direction (Toggle, Hold)',
                      category: 'Vehicles / Weapons',
                      inputType: 'Toggle'
                    }
                  }
                ]
              },
              right: {
                name: 'PILL SWITCH RIGHT',
                actionName: 'button12',
                inputType: 'discreet',
                layers: [
                  {
                    key: 'v_weapon_manual_gimbal_cycle_source',
                    label:
                      'Manual Gimbal Mode - Swap VJoy / Look Direction (Toggle, Hold) (Toggle)',
                    data: {
                      actionmapName: 'spaceship_weapons',
                      name: 'Manual Gimbal Mode - Swap VJoy / Look Direction (Toggle, Hold)',
                      category: 'Vehicles / Weapons',
                      inputType: 'Toggle'
                    }
                  },
                  {
                    key: 'v_weapon_manual_gimbal_cycle_source',
                    label:
                      'Manual Gimbal Mode - Swap VJoy / Look Direction (Toggle, Hold) (Toggle)',
                    data: {
                      actionmapName: 'spaceship_weapons',
                      name: 'Manual Gimbal Mode - Swap VJoy / Look Direction (Toggle, Hold)',
                      category: 'Vehicles / Weapons',
                      inputType: 'Toggle'
                    }
                  },
                  {
                    key: 'v_weapon_manual_gimbal_cycle_source',
                    label:
                      'Manual Gimbal Mode - Swap VJoy / Look Direction (Toggle, Hold) (Toggle)',
                    data: {
                      actionmapName: 'spaceship_weapons',
                      name: 'Manual Gimbal Mode - Swap VJoy / Look Direction (Toggle, Hold)',
                      category: 'Vehicles / Weapons',
                      inputType: 'Toggle'
                    }
                  }
                ]
              }
            },
            Red_Button: {
              press: {
                name: 'RED BUTTON PRESS',
                actionName: 'button3',
                inputType: 'discreet',
                layers: [
                  {
                    key: 'v_weapon_manual_gimbal_cycle_source',
                    label:
                      'Manual Gimbal Mode - Swap VJoy / Look Direction (Toggle, Hold) (Toggle)',
                    data: {
                      actionmapName: 'spaceship_weapons',
                      name: 'Manual Gimbal Mode - Swap VJoy / Look Direction (Toggle, Hold)',
                      category: 'Vehicles / Weapons',
                      inputType: 'Toggle'
                    }
                  },
                  {
                    key: 'v_weapon_manual_gimbal_cycle_source',
                    label:
                      'Manual Gimbal Mode - Swap VJoy / Look Direction (Toggle, Hold) (Toggle)',
                    data: {
                      actionmapName: 'spaceship_weapons',
                      name: 'Manual Gimbal Mode - Swap VJoy / Look Direction (Toggle, Hold)',
                      category: 'Vehicles / Weapons',
                      inputType: 'Toggle'
                    }
                  },
                  {
                    key: 'v_weapon_manual_gimbal_cycle_source',
                    label:
                      'Manual Gimbal Mode - Swap VJoy / Look Direction (Toggle, Hold) (Toggle)',
                    data: {
                      actionmapName: 'spaceship_weapons',
                      name: 'Manual Gimbal Mode - Swap VJoy / Look Direction (Toggle, Hold)',
                      category: 'Vehicles / Weapons',
                      inputType: 'Toggle'
                    }
                  }
                ]
              }
            },
            Chip_Stick: {
              top: {
                name: 'CHIP SWITCH UP',
                actionName: 'button16',
                inputType: 'discreet',
                layers: [
                  {
                    key: 'v_weapon_manual_gimbal_cycle_source',
                    label:
                      'Manual Gimbal Mode - Swap VJoy / Look Direction (Toggle, Hold) (Toggle)',
                    data: {
                      actionmapName: 'spaceship_weapons',
                      name: 'Manual Gimbal Mode - Swap VJoy / Look Direction (Toggle, Hold)',
                      category: 'Vehicles / Weapons',
                      inputType: 'Toggle'
                    }
                  },
                  {
                    key: 'v_weapon_manual_gimbal_cycle_source',
                    label:
                      'Manual Gimbal Mode - Swap VJoy / Look Direction (Toggle, Hold) (Toggle)',
                    data: {
                      actionmapName: 'spaceship_weapons',
                      name: 'Manual Gimbal Mode - Swap VJoy / Look Direction (Toggle, Hold)',
                      category: 'Vehicles / Weapons',
                      inputType: 'Toggle'
                    }
                  },
                  {
                    key: 'v_weapon_manual_gimbal_cycle_source',
                    label:
                      'Manual Gimbal Mode - Swap VJoy / Look Direction (Toggle, Hold) (Toggle)',
                    data: {
                      actionmapName: 'spaceship_weapons',
                      name: 'Manual Gimbal Mode - Swap VJoy / Look Direction (Toggle, Hold)',
                      category: 'Vehicles / Weapons',
                      inputType: 'Toggle'
                    }
                  }
                ]
              },
              bottom: {
                name: 'CHIP SWITCH DOWN',
                actionName: 'button18',
                inputType: 'discreet',
                layers: [
                  {
                    key: 'v_weapon_manual_gimbal_cycle_source',
                    label:
                      'Manual Gimbal Mode - Swap VJoy / Look Direction (Toggle, Hold) (Toggle)',
                    data: {
                      actionmapName: 'spaceship_weapons',
                      name: 'Manual Gimbal Mode - Swap VJoy / Look Direction (Toggle, Hold)',
                      category: 'Vehicles / Weapons',
                      inputType: 'Toggle'
                    }
                  },
                  {
                    key: 'v_weapon_manual_gimbal_cycle_source',
                    label:
                      'Manual Gimbal Mode - Swap VJoy / Look Direction (Toggle, Hold) (Toggle)',
                    data: {
                      actionmapName: 'spaceship_weapons',
                      name: 'Manual Gimbal Mode - Swap VJoy / Look Direction (Toggle, Hold)',
                      category: 'Vehicles / Weapons',
                      inputType: 'Toggle'
                    }
                  },
                  {
                    key: 'v_weapon_manual_gimbal_cycle_source',
                    label:
                      'Manual Gimbal Mode - Swap VJoy / Look Direction (Toggle, Hold) (Toggle)',
                    data: {
                      actionmapName: 'spaceship_weapons',
                      name: 'Manual Gimbal Mode - Swap VJoy / Look Direction (Toggle, Hold)',
                      category: 'Vehicles / Weapons',
                      inputType: 'Toggle'
                    }
                  }
                ]
              },
              press: {
                name: 'CHIP SWITCH PRESS',
                actionName: 'button20',
                inputType: 'discreet',
                layers: [
                  {
                    key: 'v_weapon_manual_gimbal_cycle_source',
                    label:
                      'Manual Gimbal Mode - Swap VJoy / Look Direction (Toggle, Hold) (Toggle)',
                    data: {
                      actionmapName: 'spaceship_weapons',
                      name: 'Manual Gimbal Mode - Swap VJoy / Look Direction (Toggle, Hold)',
                      category: 'Vehicles / Weapons',
                      inputType: 'Toggle'
                    }
                  },
                  {
                    key: 'v_weapon_manual_gimbal_cycle_source',
                    label:
                      'Manual Gimbal Mode - Swap VJoy / Look Direction (Toggle, Hold) (Toggle)',
                    data: {
                      actionmapName: 'spaceship_weapons',
                      name: 'Manual Gimbal Mode - Swap VJoy / Look Direction (Toggle, Hold)',
                      category: 'Vehicles / Weapons',
                      inputType: 'Toggle'
                    }
                  },
                  {
                    key: 'v_weapon_manual_gimbal_cycle_source',
                    label:
                      'Manual Gimbal Mode - Swap VJoy / Look Direction (Toggle, Hold) (Toggle)',
                    data: {
                      actionmapName: 'spaceship_weapons',
                      name: 'Manual Gimbal Mode - Swap VJoy / Look Direction (Toggle, Hold)',
                      category: 'Vehicles / Weapons',
                      inputType: 'Toggle'
                    }
                  }
                ]
              },
              left: {
                name: 'CHIP SWITCH LEFT',
                actionName: 'button19',
                inputType: 'discreet',
                layers: [
                  {
                    key: 'v_weapon_manual_gimbal_cycle_source',
                    label:
                      'Manual Gimbal Mode - Swap VJoy / Look Direction (Toggle, Hold) (Toggle)',
                    data: {
                      actionmapName: 'spaceship_weapons',
                      name: 'Manual Gimbal Mode - Swap VJoy / Look Direction (Toggle, Hold)',
                      category: 'Vehicles / Weapons',
                      inputType: 'Toggle'
                    }
                  },
                  {
                    key: 'v_weapon_manual_gimbal_cycle_source',
                    label:
                      'Manual Gimbal Mode - Swap VJoy / Look Direction (Toggle, Hold) (Toggle)',
                    data: {
                      actionmapName: 'spaceship_weapons',
                      name: 'Manual Gimbal Mode - Swap VJoy / Look Direction (Toggle, Hold)',
                      category: 'Vehicles / Weapons',
                      inputType: 'Toggle'
                    }
                  },
                  {
                    key: 'v_weapon_manual_gimbal_cycle_source',
                    label:
                      'Manual Gimbal Mode - Swap VJoy / Look Direction (Toggle, Hold) (Toggle)',
                    data: {
                      actionmapName: 'spaceship_weapons',
                      name: 'Manual Gimbal Mode - Swap VJoy / Look Direction (Toggle, Hold)',
                      category: 'Vehicles / Weapons',
                      inputType: 'Toggle'
                    }
                  }
                ]
              },
              right: {
                name: 'CHIP SWITCH RIGHT',
                actionName: 'button17',
                inputType: 'discreet',
                layers: [
                  {
                    key: 'v_weapon_manual_gimbal_cycle_source',
                    label:
                      'Manual Gimbal Mode - Swap VJoy / Look Direction (Toggle, Hold) (Toggle)',
                    data: {
                      actionmapName: 'spaceship_weapons',
                      name: 'Manual Gimbal Mode - Swap VJoy / Look Direction (Toggle, Hold)',
                      category: 'Vehicles / Weapons',
                      inputType: 'Toggle'
                    }
                  },
                  {
                    key: 'v_weapon_manual_gimbal_cycle_source',
                    label:
                      'Manual Gimbal Mode - Swap VJoy / Look Direction (Toggle, Hold) (Toggle)',
                    data: {
                      actionmapName: 'spaceship_weapons',
                      name: 'Manual Gimbal Mode - Swap VJoy / Look Direction (Toggle, Hold)',
                      category: 'Vehicles / Weapons',
                      inputType: 'Toggle'
                    }
                  },
                  {
                    key: 'v_weapon_manual_gimbal_cycle_source',
                    label:
                      'Manual Gimbal Mode - Swap VJoy / Look Direction (Toggle, Hold) (Toggle)',
                    data: {
                      actionmapName: 'spaceship_weapons',
                      name: 'Manual Gimbal Mode - Swap VJoy / Look Direction (Toggle, Hold)',
                      category: 'Vehicles / Weapons',
                      inputType: 'Toggle'
                    }
                  }
                ]
              }
            }
          },
          Back: {
            Primary_Trigger: {
              press: {
                name: 'PRIMARY TRIGGER PRESS LIGHT',
                actionName: 'button1',
                inputType: 'discreet',
                layers: [
                  {
                    key: 'v_weapon_manual_gimbal_cycle_source',
                    label:
                      'Manual Gimbal Mode - Swap VJoy / Look Direction (Toggle, Hold) (Toggle)',
                    data: {
                      actionmapName: 'spaceship_weapons',
                      name: 'Manual Gimbal Mode - Swap VJoy / Look Direction (Toggle, Hold)',
                      category: 'Vehicles / Weapons',
                      inputType: 'Toggle'
                    }
                  },
                  {
                    key: 'v_weapon_manual_gimbal_cycle_source',
                    label:
                      'Manual Gimbal Mode - Swap VJoy / Look Direction (Toggle, Hold) (Toggle)',
                    data: {
                      actionmapName: 'spaceship_weapons',
                      name: 'Manual Gimbal Mode - Swap VJoy / Look Direction (Toggle, Hold)',
                      category: 'Vehicles / Weapons',
                      inputType: 'Toggle'
                    }
                  },
                  {
                    key: 'v_weapon_manual_gimbal_cycle_source',
                    label:
                      'Manual Gimbal Mode - Swap VJoy / Look Direction (Toggle, Hold) (Toggle)',
                    data: {
                      actionmapName: 'spaceship_weapons',
                      name: 'Manual Gimbal Mode - Swap VJoy / Look Direction (Toggle, Hold)',
                      category: 'Vehicles / Weapons',
                      inputType: 'Toggle'
                    }
                  }
                ]
                // layers: [
                //   'FIRE WEAPONS',
                //   {
                //     key: 'v_weapon_manual_gimbal_cycle_source',
                //     label:
                //       'Manual Gimbal Mode - Swap VJoy / Look Direction (Toggle, Hold) (Toggle)',
                //     data: {
                //       actionmapName: 'spaceship_weapons',
                //       name: 'Manual Gimbal Mode - Swap VJoy / Look Direction (Toggle, Hold)',
                //       category: 'Vehicles / Weapons',
                //       inputType: 'Toggle'
                //     }
                //   },
                //   {
                //     key: 'v_weapon_manual_gimbal_cycle_source',
                //     label:
                //       'Manual Gimbal Mode - Swap VJoy / Look Direction (Toggle, Hold) (Toggle)',
                //     data: {
                //       actionmapName: 'spaceship_weapons',
                //       name: 'Manual Gimbal Mode - Swap VJoy / Look Direction (Toggle, Hold)',
                //       category: 'Vehicles / Weapons',
                //       inputType: 'Toggle'
                //     }
                //   }
                // ]
              },
              bottom: {
                name: 'PRIMARY TRIGGER PRESS FULL  ',
                actionName: 'button2',
                inputType: 'discreet',
                layers: [
                  {
                    key: 'v_weapon_manual_gimbal_cycle_source',
                    label:
                      'Manual Gimbal Mode - Swap VJoy / Look Direction (Toggle, Hold) (Toggle)',
                    data: {
                      actionmapName: 'spaceship_weapons',
                      name: 'Manual Gimbal Mode - Swap VJoy / Look Direction (Toggle, Hold)',
                      category: 'Vehicles / Weapons',
                      inputType: 'Toggle'
                    }
                  },
                  {
                    key: 'v_weapon_manual_gimbal_cycle_source',
                    label:
                      'Manual Gimbal Mode - Swap VJoy / Look Direction (Toggle, Hold) (Toggle)',
                    data: {
                      actionmapName: 'spaceship_weapons',
                      name: 'Manual Gimbal Mode - Swap VJoy / Look Direction (Toggle, Hold)',
                      category: 'Vehicles / Weapons',
                      inputType: 'Toggle'
                    }
                  },
                  {
                    key: 'v_weapon_manual_gimbal_cycle_source',
                    label:
                      'Manual Gimbal Mode - Swap VJoy / Look Direction (Toggle, Hold) (Toggle)',
                    data: {
                      actionmapName: 'spaceship_weapons',
                      name: 'Manual Gimbal Mode - Swap VJoy / Look Direction (Toggle, Hold)',
                      category: 'Vehicles / Weapons',
                      inputType: 'Toggle'
                    }
                  }
                ]
                // layers: [
                //   'FIRE WEAPONS',
                //   {
                //     key: 'v_weapon_manual_gimbal_cycle_source',
                //     label:
                //       'Manual Gimbal Mode - Swap VJoy / Look Direction (Toggle, Hold) (Toggle)',
                //     data: {
                //       actionmapName: 'spaceship_weapons',
                //       name: 'Manual Gimbal Mode - Swap VJoy / Look Direction (Toggle, Hold)',
                //       category: 'Vehicles / Weapons',
                //       inputType: 'Toggle'
                //     }
                //   },
                //   {
                //     key: 'v_weapon_manual_gimbal_cycle_source',
                //     label:
                //       'Manual Gimbal Mode - Swap VJoy / Look Direction (Toggle, Hold) (Toggle)',
                //     data: {
                //       actionmapName: 'spaceship_weapons',
                //       name: 'Manual Gimbal Mode - Swap VJoy / Look Direction (Toggle, Hold)',
                //       category: 'Vehicles / Weapons',
                //       inputType: 'Toggle'
                //     }
                //   }
                // ]
              }
            },
            Secondary_Trigger: {
              press: {
                actionName: 'button22',
                inputType: 'discreet',
                name: 'SECONDARY TRIGGER PRESS DOWN',
                layers: [
                  {
                    key: 'v_weapon_manual_gimbal_cycle_source',
                    label:
                      'Manual Gimbal Mode - Swap VJoy / Look Direction (Toggle, Hold) (Toggle)',
                    data: {
                      actionmapName: 'spaceship_weapons',
                      name: 'Manual Gimbal Mode - Swap VJoy / Look Direction (Toggle, Hold)',
                      category: 'Vehicles / Weapons',
                      inputType: 'Toggle'
                    }
                  },
                  {
                    key: 'v_weapon_manual_gimbal_cycle_source',
                    label:
                      'Manual Gimbal Mode - Swap VJoy / Look Direction (Toggle, Hold) (Toggle)',
                    data: {
                      actionmapName: 'spaceship_weapons',
                      name: 'Manual Gimbal Mode - Swap VJoy / Look Direction (Toggle, Hold)',
                      category: 'Vehicles / Weapons',
                      inputType: 'Toggle'
                    }
                  },
                  {
                    key: 'v_weapon_manual_gimbal_cycle_source',
                    label:
                      'Manual Gimbal Mode - Swap VJoy / Look Direction (Toggle, Hold) (Toggle)',
                    data: {
                      actionmapName: 'spaceship_weapons',
                      name: 'Manual Gimbal Mode - Swap VJoy / Look Direction (Toggle, Hold)',
                      category: 'Vehicles / Weapons',
                      inputType: 'Toggle'
                    }
                  }
                ]
              },
              top: {
                actionName: 'button21',
                inputType: 'discreet',
                name: 'SECONDARY TRIGGER PRESS UP',
                layers: [
                  {
                    key: 'v_weapon_manual_gimbal_cycle_source',
                    label:
                      'Manual Gimbal Mode - Swap VJoy / Look Direction (Toggle, Hold) (Toggle)',
                    data: {
                      actionmapName: 'spaceship_weapons',
                      name: 'Manual Gimbal Mode - Swap VJoy / Look Direction (Toggle, Hold)',
                      category: 'Vehicles / Weapons',
                      inputType: 'Toggle'
                    }
                  },
                  {
                    key: 'v_weapon_manual_gimbal_cycle_source',
                    label:
                      'Manual Gimbal Mode - Swap VJoy / Look Direction (Toggle, Hold) (Toggle)',
                    data: {
                      actionmapName: 'spaceship_weapons',
                      name: 'Manual Gimbal Mode - Swap VJoy / Look Direction (Toggle, Hold)',
                      category: 'Vehicles / Weapons',
                      inputType: 'Toggle'
                    }
                  },
                  {
                    key: 'v_weapon_manual_gimbal_cycle_source',
                    label:
                      'Manual Gimbal Mode - Swap VJoy / Look Direction (Toggle, Hold) (Toggle)',
                    data: {
                      actionmapName: 'spaceship_weapons',
                      name: 'Manual Gimbal Mode - Swap VJoy / Look Direction (Toggle, Hold)',
                      category: 'Vehicles / Weapons',
                      inputType: 'Toggle'
                    }
                  }
                ]
              }
            },
            Pinky_Button: {
              actionName: 'button5',
              inputType: 'discreet',
              press: {
                name: 'SECONDARY TRIGGER PRESS',
                layers: [
                  {
                    key: 'v_weapon_manual_gimbal_cycle_source',
                    label:
                      'Manual Gimbal Mode - Swap VJoy / Look Direction (Toggle, Hold) (Toggle)',
                    data: {
                      actionmapName: 'spaceship_weapons',
                      name: 'Manual Gimbal Mode - Swap VJoy / Look Direction (Toggle, Hold)',
                      category: 'Vehicles / Weapons',
                      inputType: 'Toggle'
                    }
                  },
                  {
                    key: 'v_weapon_manual_gimbal_cycle_source',
                    label:
                      'Manual Gimbal Mode - Swap VJoy / Look Direction (Toggle, Hold) (Toggle)',
                    data: {
                      actionmapName: 'spaceship_weapons',
                      name: 'Manual Gimbal Mode - Swap VJoy / Look Direction (Toggle, Hold)',
                      category: 'Vehicles / Weapons',
                      inputType: 'Toggle'
                    }
                  },
                  {
                    key: 'v_weapon_manual_gimbal_cycle_source',
                    label:
                      'Manual Gimbal Mode - Swap VJoy / Look Direction (Toggle, Hold) (Toggle)',
                    data: {
                      actionmapName: 'spaceship_weapons',
                      name: 'Manual Gimbal Mode - Swap VJoy / Look Direction (Toggle, Hold)',
                      category: 'Vehicles / Weapons',
                      inputType: 'Toggle'
                    }
                  }
                ]
              }
            },
            Side_Index_Button: {
              press: {
                actionName: 'button4',
                inputType: 'discreet',
                name: 'Side Index Button',
                layers: [
                  {
                    key: 'v_weapon_manual_gimbal_cycle_source',
                    label:
                      'Manual Gimbal Mode - Swap VJoy / Look Direction (Toggle, Hold) (Toggle)',
                    data: {
                      actionmapName: 'spaceship_weapons',
                      name: 'Manual Gimbal Mode - Swap VJoy / Look Direction (Toggle, Hold)',
                      category: 'Vehicles / Weapons',
                      inputType: 'Toggle'
                    }
                  },
                  {
                    key: 'v_weapon_manual_gimbal_cycle_source',
                    label:
                      'Manual Gimbal Mode - Swap VJoy / Look Direction (Toggle, Hold) (Toggle)',
                    data: {
                      actionmapName: 'spaceship_weapons',
                      name: 'Manual Gimbal Mode - Swap VJoy / Look Direction (Toggle, Hold)',
                      category: 'Vehicles / Weapons',
                      inputType: 'Toggle'
                    }
                  },
                  {
                    key: 'v_weapon_manual_gimbal_cycle_source',
                    label:
                      'Manual Gimbal Mode - Swap VJoy / Look Direction (Toggle, Hold) (Toggle)',
                    data: {
                      actionmapName: 'spaceship_weapons',
                      name: 'Manual Gimbal Mode - Swap VJoy / Look Direction (Toggle, Hold)',
                      category: 'Vehicles / Weapons',
                      inputType: 'Toggle'
                    }
                  }
                ]
              }
            }
          }
        },
        axis: [
          {
            slotName: 'press',
            name: 'rotate X',
            actionName: 'x',

            layers: [
              {
                key: 'v_weapon_manual_gimbal_cycle_source',
                label:
                  'Manual Gimbal Mode - Swap VJoy / Look Direction (Toggle, Hold) (Toggle)',
                data: {
                  actionmapName: 'spaceship_weapons',
                  name: 'Manual Gimbal Mode - Swap VJoy / Look Direction (Toggle, Hold)',
                  category: 'Vehicles / Weapons',
                  inputType: 'Toggle'
                }
              },
              {
                key: 'v_weapon_manual_gimbal_cycle_source',
                label:
                  'Manual Gimbal Mode - Swap VJoy / Look Direction (Toggle, Hold) (Toggle)',
                data: {
                  actionmapName: 'spaceship_weapons',
                  name: 'Manual Gimbal Mode - Swap VJoy / Look Direction (Toggle, Hold)',
                  category: 'Vehicles / Weapons',
                  inputType: 'Toggle'
                }
              },
              {
                key: 'v_weapon_manual_gimbal_cycle_source',
                label:
                  'Manual Gimbal Mode - Swap VJoy / Look Direction (Toggle, Hold) (Toggle)',
                data: {
                  actionmapName: 'spaceship_weapons',
                  name: 'Manual Gimbal Mode - Swap VJoy / Look Direction (Toggle, Hold)',
                  category: 'Vehicles / Weapons',
                  inputType: 'Toggle'
                }
              }
            ]
          },
          {
            slotName: 'press',
            name: 'TWIST Z',
            actionName: 'rotz',

            layers: [
              {
                key: 'v_weapon_manual_gimbal_cycle_source',
                label:
                  'Manual Gimbal Mode - Swap VJoy / Look Direction (Toggle, Hold) (Toggle)',
                data: {
                  actionmapName: 'spaceship_weapons',
                  name: 'Manual Gimbal Mode - Swap VJoy / Look Direction (Toggle, Hold)',
                  category: 'Vehicles / Weapons',
                  inputType: 'Toggle'
                }
              },
              {
                key: 'v_weapon_manual_gimbal_cycle_source',
                label:
                  'Manual Gimbal Mode - Swap VJoy / Look Direction (Toggle, Hold) (Toggle)',
                data: {
                  actionmapName: 'spaceship_weapons',
                  name: 'Manual Gimbal Mode - Swap VJoy / Look Direction (Toggle, Hold)',
                  category: 'Vehicles / Weapons',
                  inputType: 'Toggle'
                }
              },
              {
                key: 'v_weapon_manual_gimbal_cycle_source',
                label:
                  'Manual Gimbal Mode - Swap VJoy / Look Direction (Toggle, Hold) (Toggle)',
                data: {
                  actionmapName: 'spaceship_weapons',
                  name: 'Manual Gimbal Mode - Swap VJoy / Look Direction (Toggle, Hold)',
                  category: 'Vehicles / Weapons',
                  inputType: 'Toggle'
                }
              }
            ]
          },
          {
            name: 'rotate Y',
            slotName: 'bottom',
            actionName: 'y',

            layers: [
              {
                key: 'v_weapon_manual_gimbal_cycle_source',
                label:
                  'Manual Gimbal Mode - Swap VJoy / Look Direction (Toggle, Hold) (Toggle)',
                data: {
                  actionmapName: 'spaceship_weapons',
                  name: 'Manual Gimbal Mode - Swap VJoy / Look Direction (Toggle, Hold)',
                  category: 'Vehicles / Weapons',
                  inputType: 'Toggle'
                }
              },
              {
                key: 'v_weapon_manual_gimbal_cycle_source',
                label:
                  'Manual Gimbal Mode - Swap VJoy / Look Direction (Toggle, Hold) (Toggle)',
                data: {
                  actionmapName: 'spaceship_weapons',
                  name: 'Manual Gimbal Mode - Swap VJoy / Look Direction (Toggle, Hold)',
                  category: 'Vehicles / Weapons',
                  inputType: 'Toggle'
                }
              },
              {
                key: 'v_weapon_manual_gimbal_cycle_source',
                label:
                  'Manual Gimbal Mode - Swap VJoy / Look Direction (Toggle, Hold) (Toggle)',
                data: {
                  actionmapName: 'spaceship_weapons',
                  name: 'Manual Gimbal Mode - Swap VJoy / Look Direction (Toggle, Hold)',
                  category: 'Vehicles / Weapons',
                  inputType: 'Toggle'
                }
              }
            ]
          }
        ],
        attachments: {
          base: {
            buttons: {
              Function_Button_2: {
                press: {
                  actionName: 'button28',
                  inputType: 'discreet',
                  name: 'F2',
                  layers: [
                    {
                      key: 'v_weapon_manual_gimbal_cycle_source',
                      label:
                        'Manual Gimbal Mode - Swap VJoy / Look Direction (Toggle, Hold) (Toggle)',
                      data: {
                        actionmapName: 'spaceship_weapons',
                        name: 'Manual Gimbal Mode - Swap VJoy / Look Direction (Toggle, Hold)',
                        category: 'Vehicles / Weapons',
                        inputType: 'Toggle'
                      }
                    }
                  ]
                }
              },
              Function_Button_1: {
                press: {
                  actionName: 'button27',
                  inputType: 'discreet',
                  name: 'F1',
                  layers: [
                    {
                      key: 'v_weapon_manual_gimbal_cycle_source',
                      label:
                        'Manual Gimbal Mode - Swap VJoy / Look Direction (Toggle, Hold) (Toggle)',
                      data: {
                        actionmapName: 'spaceship_weapons',
                        name: 'Manual Gimbal Mode - Swap VJoy / Look Direction (Toggle, Hold)',
                        category: 'Vehicles / Weapons',
                        inputType: 'Toggle'
                      }
                    }
                  ]
                }
              },
              Function_Button_3: {
                press: {
                  actionName: 'button29',
                  inputType: 'discreet',
                  name: 'F3',
                  layers: [
                    {
                      key: 'v_weapon_manual_gimbal_cycle_source',
                      label:
                        'Manual Gimbal Mode - Swap VJoy / Look Direction (Toggle, Hold) (Toggle)',
                      data: {
                        actionmapName: 'spaceship_weapons',
                        name: 'Manual Gimbal Mode - Swap VJoy / Look Direction (Toggle, Hold)',
                        category: 'Vehicles / Weapons',
                        inputType: 'Toggle'
                      }
                    }
                  ]
                }
              },
              Slider_Switch: {
                press: {
                  actionName: 'button24',
                  inputType: 'discreet',
                  name: 'Slider Switch Down',
                  layers: [
                    {
                      key: 'v_weapon_manual_gimbal_cycle_source',
                      label:
                        'Manual Gimbal Mode - Swap VJoy / Look Direction (Toggle, Hold) (Toggle)',
                      data: {
                        actionmapName: 'spaceship_weapons',
                        name: 'Manual Gimbal Mode - Swap VJoy / Look Direction (Toggle, Hold)',
                        category: 'Vehicles / Weapons',
                        inputType: 'Toggle'
                      }
                    }
                  ]
                },
                top: {
                  name: 'Slider Switch Up',
                  actionName: 'button23',
                  inputType: 'discreet',
                  layers: [
                    {
                      key: 'v_weapon_manual_gimbal_cycle_source',
                      label:
                        'Manual Gimbal Mode - Swap VJoy / Look Direction (Toggle, Hold) (Toggle)',
                      data: {
                        actionmapName: 'spaceship_weapons',
                        name: 'Manual Gimbal Mode - Swap VJoy / Look Direction (Toggle, Hold)',
                        category: 'Vehicles / Weapons',
                        inputType: 'Toggle'
                      }
                    }
                  ]
                }
              },
              Slider: {
                press: {
                  actionName: 'z',
                  inputType: 'analogue',
                  name: 'Slider Axis Up/Down',
                  layers: [
                    {
                      key: 'v_weapon_manual_gimbal_cycle_source',
                      label:
                        'Manual Gimbal Mode - Swap VJoy / Look Direction (Toggle, Hold) (Toggle)',
                      data: {
                        actionmapName: 'spaceship_weapons',
                        name: 'Manual Gimbal Mode - Swap VJoy / Look Direction (Toggle, Hold)',
                        category: 'Vehicles / Weapons',
                        inputType: 'Toggle'
                      }
                    }
                  ]
                }
              },
              Clicky_Roller_Switch: {
                press: {
                  actionName: 'button26',
                  inputType: 'discreet',
                  name: 'Clicky Roller Switch Down',
                  layers: [
                    {
                      key: 'v_weapon_manual_gimbal_cycle_source',
                      label:
                        'Manual Gimbal Mode - Swap VJoy / Look Direction (Toggle, Hold) (Toggle)',
                      data: {
                        actionmapName: 'spaceship_weapons',
                        name: 'Manual Gimbal Mode - Swap VJoy / Look Direction (Toggle, Hold)',
                        category: 'Vehicles / Weapons',
                        inputType: 'Toggle'
                      }
                    }
                  ]
                },
                top: {
                  name: 'Clicky Roller Switch Up',
                  actionName: 'button25',
                  inputType: 'discreet',
                  layers: [
                    {
                      key: 'v_weapon_manual_gimbal_cycle_source',
                      label:
                        'Manual Gimbal Mode - Swap VJoy / Look Direction (Toggle, Hold) (Toggle)',
                      data: {
                        actionmapName: 'spaceship_weapons',
                        name: 'Manual Gimbal Mode - Swap VJoy / Look Direction (Toggle, Hold)',
                        category: 'Vehicles / Weapons',
                        inputType: 'Toggle'
                      }
                    }
                  ]
                }
              }
            }
          }
        }
      }
    }
  }
}
const handler = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET
    })
  ],
  callbacks: {
    async session ({ session }) {
      // store the user id from MongoDB to session
      const sessionUser = await User.findOne({ email: session.user.email })
      session.user.id = sessionUser._id.toString()

      return session
    },
    async signIn ({ account, profile, user, credentials }) {
      try {
        await connectToDB()

        // check if user already exists
        const userExists = await User.findOne({ email: profile.email })

        // if not, create a new document and save user in MongoDB
        if (!userExists) {
          await User.create({
            email: profile.email,
            username: profile.name.replace(' ', '').toLowerCase(),
            image: profile.picture,
            deviceProfiles: globalContext
          })
        }

        return true
      } catch (error) {
        console.log('Error checking if user exists: ', error.message)
        return false
      }
    }
  },
  secret: process.env.NEXTAUTH_SECRET
})

export { handler as GET, handler as POST }
