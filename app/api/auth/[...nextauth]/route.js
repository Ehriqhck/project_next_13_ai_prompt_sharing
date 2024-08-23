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
        buttons: {
          X_Axis: {
            press: {
              name: 'TWIST X',
              layers: [
                {
                  key: 'v_weapon_manual_gimbal_cycle_source',
                  label:
                    'Manual Gimbal Mode - Swap VJoy / Look Direction (Toggle, Hold) (Toggle)',
                  data: {
                    actionmapName: 'spaceship_weapons',
                    name: {
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
                    name: {
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
                    category: 'Vehicles / Weapons',
                    inputType: 'Toggle'
                  }
                }
              ]
            },
            bottom: {
              name: 'TRANSLATE X',
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
          Y_Axis: {
            'Twist Y': {
              press: {
                name: 'TWIST Y',
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
            'Translate Y': {
              bottom: {
                name: 'Translate Y',
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
          Z_AXIS: {
            Translate_Z: {
              press: {
                name: 'TRANSLATE Z',
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
          Front: {
            Circle_Stick: {
              top: {
                name: 'CIRCLE SWITCH UP',
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
                  },]
              },
              left: {
                name: 'CIRCLE SWITCH LEFT',
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
                  },]
              },
              right: {
                name: 'CIRCLE SWITCH RIGHT',
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
                  },]
              }
            },
            Hat_Stick: {
              top: {
                name: 'HAT SWITCH UP',
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
                  },]
              },
              bottom: {
                name: 'HAT SWITCH DOWN',
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
                  },]
              },
              press: {
                name: 'HAT SWITCH PRESS',
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
                  },]
              },
              left: {
                name: 'HAT SWITCH LEFT',
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
                  },]
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
                  },]
              }
            },
            Pill_Stick: {
              top: {
                name: 'PILL SWITCH UP',
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
                  },]
              },
              bottom: {
                name: 'PILL SWITCH DOWN',
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
                  },]
              },
              press: {
                name: 'PILL SWITCH PRESS',
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
                  },]
              },
              left: {
                name: 'PILL SWITCH LEFT',
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
                  },]
              },
              right: {
                name: 'PILL SWITCH RIGHT',
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
                  },]
              }
            },
            Red_Button: {
              press: {
                name: 'RED BUTTON PRESS',
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
                  },]
              }
            },
            Chip_Stick: {
              top: {
                name: 'CHIP SWITCH UP',
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
                  },]
              },
              bottom: {
                name: 'CHIP SWITCH DOWN',
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
                  },]
              },
              press: {
                name: 'CHIP SWITCH PRESS',
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
                  },]
              },
              left: {
                name: 'CHIP SWITCH LEFT',
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
                  },]
              },
              right: {
                name: 'CHIP SWITCH RIGHT',
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
                  },]
              }
            }
          },
          Back: {
            Primary_Trigger: {
              press: {
                name: 'PRIMARY TRIGGER PRESS',
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
                  },]
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
                  },]
              }
            },
            Pinky_Button: {
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
                  },]              }
            },
            Side_Index_Button: {
              press: {
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
                  },]              }
            }
          }
        },
        axis: [
          {
            name: 'TWIST X',
            slotName: 'press',
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
              },]
          },
          {
            slotName: 'bottom',
            name: 'TRANSLATE X',
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
              },]
          },
          {
            slotName: 'press',
            name: 'TWIST Y',
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
              },]
          },
          {
            name: 'Translate Y',
            slotName: 'bottom',
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
              },]
          },

          {
            slotName: 'press',
            name: 'TRANSLATE Z',
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
              },]
          }
        ]
      },
      VKB_GLADIATOR_NXT_EVO_LEFT: {
        buttons: {
          'Main Stick': {
            Twist_X: {
              top: {
                name: 'TWIST X',
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
                  'MANUAL GIMBAL MODE - SWAP VJOY / LOOK DIRECTION (TOGGLE, HOLD)'
                ]
              },
              Twist_Y: {
                name: 'TWIST Y',
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
              Translate_X: {
                name: 'TRANSLATE X',
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
              Translate_Y: {
                name: 'TRANSLATE Y',
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
                      name: {
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
                      category: 'Vehicles / Weapons',
                      inputType: 'Toggle'
                    }
                  }
                ]
              },
              Translate_Z: {
                name: 'TRANSLATE Z',
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
                      name: {
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
                      category: 'Vehicles / Weapons',
                      inputType: 'Toggle'
                    }
                  }
                ]
              },
              bottom: {
                name: 'HAT SWITCH DOWN',
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
                      name: {
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
                      name: {
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
                      category: 'Vehicles / Weapons',
                      inputType: 'Toggle'
                    }
                  }
                ]
              },
              bottom: {
                name: 'PILL SWITCH DOWN',
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
                      name: {
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
                      category: 'Vehicles / Weapons',
                      inputType: 'Toggle'
                    }
                  }
                ]
              },
              right: {
                name: 'PILL SWITCH RIGHT',
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
                      name: {
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
                      category: 'Vehicles / Weapons',
                      inputType: 'Toggle'
                    }
                  }
                ]
              },
              bottom: {
                name: 'CHIP SWITCH DOWN',
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
                      name: {
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
                      category: 'Vehicles / Weapons',
                      inputType: 'Toggle'
                    }
                  }
                ]
              },
              right: {
                name: 'CHIP SWITCH RIGHT',
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
          Front: {
            Circle_Stick: {
              top: {
                name: 'CIRCLE SWITCH UP',
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
                  'MANUAL GIMBAL MODE - SWAP VJOY / LOOK DIRECTION (TOGGLE, HOLD)'
                ]
              },
              bottom: {
                name: 'CIRCLE SWITCH DOWN',
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
                      name: {
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
                      category: 'Vehicles / Weapons',
                      inputType: 'Toggle'
                    }
                  }
                ]
              },
              right: {
                name: 'CIRCLE SWITCH RIGHT',
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
                      name: {
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
                      category: 'Vehicles / Weapons',
                      inputType: 'Toggle'
                    }
                  }
                ]
              },
              bottom: {
                name: 'HAT SWITCH DOWN',
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
                      name: {
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
                  'MANUAL GIMBAL MODE - SWAP VJOY / LOOK DIRECTION (TOGGLE, HOLD)'
                ]
              },
              bottom: {
                name: 'PILL SWITCH DOWN',
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
                      name: {
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
                      category: 'Vehicles / Weapons',
                      inputType: 'Toggle'
                    }
                  }
                ]
              },
              right: {
                name: 'PILL SWITCH RIGHT',
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
                      name: {
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
                      category: 'Vehicles / Weapons',
                      inputType: 'Toggle'
                    }
                  }
                ]
              },
              bottom: {
                name: 'CHIP SWITCH DOWN',
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
                  'MANUAL GIMBAL MODE - SWAP VJOY / LOOK DIRECTION (TOGGLE, HOLD)'
                ]
              },
              right: {
                name: 'CHIP SWITCH RIGHT',
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
                name: 'PRIMARY TRIGGER PRESS',
                layers: [
                  'FIRE WEAPONS',
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
            Secondary_Trigger: {
              press: {
                name: 'SECONDARY TRIGGER PRESS',
                layers: [
                  'FIRE WEAPONS',
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
              press: {
                name: 'SECONDARY TRIGGER PRESS',
                layers: ['TOGGLE INTERACTION MODE']
              }
            },
            Side_Index_Button: {
              press: {
                name: 'SECONDARY TRIGGER PRESS',
                layers: ['TOGGLE INTERACTION MODE']
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
