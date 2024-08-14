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
                'MANUAL GIMBAL MODE - SWAP VJOY / LOOK DIRECTION (TOGGLE, HOLD)',
                'MANUAL GIMBAL MODE - SWAP VJOY / LOOK DIRECTION (TOGGLE, HOLD)',
                'MANUAL GIMBAL MODE - SWAP VJOY / LOOK DIRECTION (TOGGLE, HOLD)'
              ]
            },
            bottom: {
              name: 'TRANSLATE X',
              layers: [
                'MANUAL GIMBAL MODE - SWAP VJOY / LOOK DIRECTION (TOGGLE, HOLD)',
                'SECOND LAYER',
                'THIRD LAYER'
              ]
            }
          },
          Y_Axis: {
            'Twist Y': {
              press: {
                name: 'TWIST Y',
                layers: [
                  'MANUAL GIMBAL MODE - SWAP VJOY / LOOK DIRECTION (TOGGLE, HOLD)',
                  'SECOND LAYER',
                  'THIRD LAYER'
                ]
              }
            },
            'Translate Y': {
              bottom: {
                name: 'Translate Y',
                layers: [
                  'MANUAL GIMBAL MODE - SWAP VJOY / LOOK DIRECTION (TOGGLE, HOLD)',
                  'SECOND LAYER',
                  'THIRD LAYER'
                ]
              }
            }
          },
          Z_AXIS: {
            Translate_Z: {
              press: {
                name: 'TRANSLATE Z',
                layers: [
                  'MANUAL GIMBAL MODE - SWAP VJOY / LOOK DIRECTION (TOGGLE, HOLD)',
                  'SECOND LAYER',
                  'THIRD LAYER'
                ]
              }
            }
          },
          Front: {
            Circle_Stick: {
              top: {
                name: 'CIRCLE SWITCH UP',
                layers: [
                  'MANUAL GIMBAL MODE - SWAP VJOY / LOOK DIRECTION (TOGGLE, HOLD)',
                  'MANUAL GIMBAL MODE - SWAP VJOY / LOOK DIRECTION (TOGGLE, HOLD)',
                  'MANUAL GIMBAL MODE - SWAP VJOY / LOOK DIRECTION (TOGGLE, HOLD)'
                ]
              },
              bottom: {
                name: 'CIRCLE SWITCH DOWN',
                layers: [
                  'MANUAL GIMBAL MODE - SWAP VJOY / LOOK DIRECTION (TOGGLE, HOLD)',
                  'SECOND LAYER',
                  'THIRD LAYER'
                ]
              },
              press: {
                name: 'CIRCLE SWITCH PRESS',
                layers: [
                  'MANUAL GIMBAL MODE - SWAP VJOY / LOOK DIRECTION (TOGGLE, HOLD)',
                  'SECOND LAYER',
                  'THIRD LAYER'
                ]
              },
              left: {
                name: 'CIRCLE SWITCH LEFT',
                layers: [
                  'MANUAL GIMBAL MODE - SWAP VJOY / LOOK DIRECTION (TOGGLE, HOLD)',
                  'MANUAL GIMBAL MODE - SWAP VJOY / LOOK DIRECTION (TOGGLE, HOLD)',
                  'MANUAL GIMBAL MODE - SWAP VJOY / LOOK DIRECTION (TOGGLE, HOLD)'
                ]
              },
              right: {
                name: 'CIRCLE SWITCH RIGHT',
                layers: [
                  'MANUAL GIMBAL MODE - SWAP VJOY / LOOK DIRECTION (TOGGLE, HOLD)',
                  'SECOND LAYER',
                  'THIRD LAYER'
                ]
              }
            },
            Hat_Stick: {
              top: {
                name: 'HAT SWITCH UP',
                layers: [
                  'MANUAL GIMBAL MODE - SWAP VJOY / LOOK DIRECTION (TOGGLE, HOLD)',
                  'MANUAL GIMBAL MODE - SWAP VJOY / LOOK DIRECTION (TOGGLE, HOLD)',
                  'MANUAL GIMBAL MODE - SWAP VJOY / LOOK DIRECTION (TOGGLE, HOLD)'
                ]
              },
              bottom: {
                name: 'HAT SWITCH DOWN',
                layers: [
                  'MANUAL GIMBAL MODE - SWAP VJOY / LOOK DIRECTION (TOGGLE, HOLD)',
                  'SECOND LAYER',
                  'THIRD LAYER'
                ]
              },
              press: {
                name: 'HAT SWITCH PRESS',
                layers: [
                  'MANUAL GIMBAL MODE - SWAP VJOY / LOOK DIRECTION (TOGGLE, HOLD)',
                  'SECOND LAYER',
                  'THIRD LAYER'
                ]
              },
              left: {
                name: 'HAT SWITCH LEFT',
                layers: [
                  'MANUAL GIMBAL MODE - SWAP VJOY / LOOK DIRECTION (TOGGLE, HOLD)',
                  'MANUAL GIMBAL MODE - SWAP VJOY / LOOK DIRECTION (TOGGLE, HOLD)',
                  'MANUAL GIMBAL MODE - SWAP VJOY / LOOK DIRECTION (TOGGLE, HOLD)'
                ]
              },
              right: {
                name: 'HAT SWITCH RIGHT',
                layers: [
                  'MANUAL GIMBAL MODE - SWAP VJOY / LOOK DIRECTION (TOGGLE, HOLD)',
                  'SECOND LAYER',
                  'THIRD LAYER'
                ]
              }
            },
            Pill_Stick: {
              top: {
                name: 'PILL SWITCH UP',
                layers: [
                  'MANUAL GIMBAL MODE - SWAP VJOY / LOOK DIRECTION (TOGGLE, HOLD)',
                  'MANUAL GIMBAL MODE - SWAP VJOY / LOOK DIRECTION (TOGGLE, HOLD)',
                  'MANUAL GIMBAL MODE - SWAP VJOY / LOOK DIRECTION (TOGGLE, HOLD)'
                ]
              },
              bottom: {
                name: 'PILL SWITCH DOWN',
                layers: [
                  'MANUAL GIMBAL MODE - SWAP VJOY / LOOK DIRECTION (TOGGLE, HOLD)',
                  'SECOND LAYER',
                  'THIRD LAYER'
                ]
              },
              press: {
                name: 'PILL SWITCH PRESS',
                layers: [
                  'MANUAL GIMBAL MODE - SWAP VJOY / LOOK DIRECTION (TOGGLE, HOLD)',
                  'SECOND LAYER',
                  'THIRD LAYER'
                ]
              },
              left: {
                name: 'PILL SWITCH LEFT',
                layers: [
                  'MANUAL GIMBAL MODE - SWAP VJOY / LOOK DIRECTION (TOGGLE, HOLD)',
                  'MANUAL GIMBAL MODE - SWAP VJOY / LOOK DIRECTION (TOGGLE, HOLD)',
                  'MANUAL GIMBAL MODE - SWAP VJOY / LOOK DIRECTION (TOGGLE, HOLD)'
                ]
              },
              right: {
                name: 'PILL SWITCH RIGHT',
                layers: [
                  'MANUAL GIMBAL MODE - SWAP VJOY / LOOK DIRECTION (TOGGLE, HOLD)',
                  'SECOND LAYER',
                  'THIRD LAYER'
                ]
              }
            },
            Red_Button: {
              press: {
                name: 'RED BUTTON PRESS',
                layers: [
                  'MANUAL GIMBAL MODE - SWAP VJOY / LOOK DIRECTION (TOGGLE, HOLD)',
                  'SECOND LAYER',
                  'THIRD LAYER'
                ]
              }
            },
            Chip_Stick: {
              top: {
                name: 'CHIP SWITCH UP',
                layers: [
                  'MANUAL GIMBAL MODE - SWAP VJOY / LOOK DIRECTION (TOGGLE, HOLD)',
                  'MANUAL GIMBAL MODE - SWAP VJOY / LOOK DIRECTION (TOGGLE, HOLD)',
                  'MANUAL GIMBAL MODE - SWAP VJOY / LOOK DIRECTION (TOGGLE, HOLD)'
                ]
              },
              bottom: {
                name: 'CHIP SWITCH DOWN',
                layers: [
                  'MANUAL GIMBAL MODE - SWAP VJOY / LOOK DIRECTION (TOGGLE, HOLD)',
                  'SECOND LAYER',
                  'THIRD LAYER'
                ]
              },
              press: {
                name: 'CHIP SWITCH PRESS',
                layers: [
                  'MANUAL GIMBAL MODE - SWAP VJOY / LOOK DIRECTION (TOGGLE, HOLD)',
                  'SECOND LAYER',
                  'THIRD LAYER'
                ]
              },
              left: {
                name: 'CHIP SWITCH LEFT',
                layers: [
                  'MANUAL GIMBAL MODE - SWAP VJOY / LOOK DIRECTION (TOGGLE, HOLD)',
                  'MANUAL GIMBAL MODE - SWAP VJOY / LOOK DIRECTION (TOGGLE, HOLD)',
                  'MANUAL GIMBAL MODE - SWAP VJOY / LOOK DIRECTION (TOGGLE, HOLD)'
                ]
              },
              right: {
                name: 'CHIP SWITCH RIGHT',
                layers: [
                  'MANUAL GIMBAL MODE - SWAP VJOY / LOOK DIRECTION (TOGGLE, HOLD)',
                  'SECOND LAYER',
                  'THIRD LAYER'
                ]
              }
            }
          },
          Back: {
            Primary_Trigger: {
              press: {
                name: 'PRIMARY TRIGGER PRESS',
                layers: ['FIRE WEAPONS', 'SECOND LAYER', 'THIRD LAYER']
              }
            },
            Secondary_Trigger: {
              press: {
                name: 'SECONDARY TRIGGER PRESS',
                layers: ['FIRE WEAPONS', 'SECOND LAYER', 'THIRD LAYER']
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
        },
        axis: [
          {
            name: 'TWIST X',
            slotName: 'press',
            layers: [
              'MANUAL GIMBAL MODE - SWAP VJOY / LOOK DIRECTION (TOGGLE, HOLD)'
            ]
          },
          {
            slotName: 'bottom',
            name: 'TRANSLATE X',
            layers: [
              'MANUAL GIMBAL MODE - SWAP VJOY / LOOK DIRECTION (TOGGLE, HOLD)'
            ]
          },
          {
            slotName: 'press',
            name: 'TWIST Y',
            layers: [
              'MANUAL GIMBAL MODE - SWAP VJOY / LOOK DIRECTION (TOGGLE, HOLD)'
            ]
          },
          {
            name: 'Translate Y',
            slotName: 'bottom',
            layers: [
              'MANUAL GIMBAL MODE - SWAP VJOY / LOOK DIRECTION (TOGGLE, HOLD)'
            ]
          },

          {
            slotName: 'press',
            name: 'TRANSLATE Z',
            layers: [
              'MANUAL GIMBAL MODE - SWAP VJOY / LOOK DIRECTION (TOGGLE, HOLD)'
            ]
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
                  'MANUAL GIMBAL MODE - SWAP VJOY / LOOK DIRECTION (TOGGLE, HOLD)',
                  'MANUAL GIMBAL MODE - SWAP VJOY / LOOK DIRECTION (TOGGLE, HOLD)',
                  'MANUAL GIMBAL MODE - SWAP VJOY / LOOK DIRECTION (TOGGLE, HOLD)'
                ]
              },
              Twist_Y: {
                name: 'TWIST Y',
                layers: [
                  'MANUAL GIMBAL MODE - SWAP VJOY / LOOK DIRECTION (TOGGLE, HOLD)',
                  'SECOND LAYER',
                  'THIRD LAYER'
                ]
              },
              Translate_X: {
                name: 'TRANSLATE X',
                layers: [
                  'MANUAL GIMBAL MODE - SWAP VJOY / LOOK DIRECTION (TOGGLE, HOLD)',
                  'SECOND LAYER',
                  'THIRD LAYER'
                ]
              },
              Translate_Y: {
                name: 'TRANSLATE Y',
                layers: [
                  'MANUAL GIMBAL MODE - SWAP VJOY / LOOK DIRECTION (TOGGLE, HOLD)',
                  'MANUAL GIMBAL MODE - SWAP VJOY / LOOK DIRECTION (TOGGLE, HOLD)',
                  'MANUAL GIMBAL MODE - SWAP VJOY / LOOK DIRECTION (TOGGLE, HOLD)'
                ]
              },
              Translate_Z: {
                name: 'TRANSLATE Z',
                layers: [
                  'MANUAL GIMBAL MODE - SWAP VJOY / LOOK DIRECTION (TOGGLE, HOLD)',
                  'SECOND LAYER',
                  'THIRD LAYER'
                ]
              }
            },
            Hat_Stick: {
              top: {
                name: 'HAT SWITCH UP',
                layers: [
                  'MANUAL GIMBAL MODE - SWAP VJOY / LOOK DIRECTION (TOGGLE, HOLD)',
                  'MANUAL GIMBAL MODE - SWAP VJOY / LOOK DIRECTION (TOGGLE, HOLD)',
                  'MANUAL GIMBAL MODE - SWAP VJOY / LOOK DIRECTION (TOGGLE, HOLD)'
                ]
              },
              bottom: {
                name: 'HAT SWITCH DOWN',
                layers: [
                  'MANUAL GIMBAL MODE - SWAP VJOY / LOOK DIRECTION (TOGGLE, HOLD)',
                  'SECOND LAYER',
                  'THIRD LAYER'
                ]
              },
              press: {
                name: 'HAT SWITCH PRESS',
                layers: [
                  'MANUAL GIMBAL MODE - SWAP VJOY / LOOK DIRECTION (TOGGLE, HOLD)',
                  'SECOND LAYER',
                  'THIRD LAYER'
                ]
              },
              left: {
                name: 'HAT SWITCH LEFT',
                layers: [
                  'MANUAL GIMBAL MODE - SWAP VJOY / LOOK DIRECTION (TOGGLE, HOLD)',
                  'MANUAL GIMBAL MODE - SWAP VJOY / LOOK DIRECTION (TOGGLE, HOLD)',
                  'MANUAL GIMBAL MODE - SWAP VJOY / LOOK DIRECTION (TOGGLE, HOLD)'
                ]
              },
              right: {
                name: 'HAT SWITCH RIGHT',
                layers: [
                  'MANUAL GIMBAL MODE - SWAP VJOY / LOOK DIRECTION (TOGGLE, HOLD)',
                  'SECOND LAYER',
                  'THIRD LAYER'
                ]
              }
            },
            Pill_Stick: {
              top: {
                name: 'PILL SWITCH UP',
                layers: [
                  'MANUAL GIMBAL MODE - SWAP VJOY / LOOK DIRECTION (TOGGLE, HOLD)',
                  'MANUAL GIMBAL MODE - SWAP VJOY / LOOK DIRECTION (TOGGLE, HOLD)',
                  'MANUAL GIMBAL MODE - SWAP VJOY / LOOK DIRECTION (TOGGLE, HOLD)'
                ]
              },
              bottom: {
                name: 'PILL SWITCH DOWN',
                layers: [
                  'MANUAL GIMBAL MODE - SWAP VJOY / LOOK DIRECTION (TOGGLE, HOLD)',
                  'SECOND LAYER',
                  'THIRD LAYER'
                ]
              },
              press: {
                name: 'PILL SWITCH PRESS',
                layers: [
                  'MANUAL GIMBAL MODE - SWAP VJOY / LOOK DIRECTION (TOGGLE, HOLD)',
                  'SECOND LAYER',
                  'THIRD LAYER'
                ]
              },
              left: {
                name: 'PILL SWITCH LEFT',
                layers: [
                  'MANUAL GIMBAL MODE - SWAP VJOY / LOOK DIRECTION (TOGGLE, HOLD)',
                  'MANUAL GIMBAL MODE - SWAP VJOY / LOOK DIRECTION (TOGGLE, HOLD)',
                  'MANUAL GIMBAL MODE - SWAP VJOY / LOOK DIRECTION (TOGGLE, HOLD)'
                ]
              },
              right: {
                name: 'PILL SWITCH RIGHT',
                layers: [
                  'MANUAL GIMBAL MODE - SWAP VJOY / LOOK DIRECTION (TOGGLE, HOLD)',
                  'SECOND LAYER',
                  'THIRD LAYER'
                ]
              }
            },
            Red_Button: {
              press: {
                name: 'RED BUTTON PRESS',
                layers: [
                  'MANUAL GIMBAL MODE - SWAP VJOY / LOOK DIRECTION (TOGGLE, HOLD)',
                  'SECOND LAYER',
                  'THIRD LAYER'
                ]
              }
            },
            Chip_Stick: {
              top: {
                name: 'CHIP SWITCH UP',
                layers: [
                  'MANUAL GIMBAL MODE - SWAP VJOY / LOOK DIRECTION (TOGGLE, HOLD)',
                  'MANUAL GIMBAL MODE - SWAP VJOY / LOOK DIRECTION (TOGGLE, HOLD)',
                  'MANUAL GIMBAL MODE - SWAP VJOY / LOOK DIRECTION (TOGGLE, HOLD)'
                ]
              },
              bottom: {
                name: 'CHIP SWITCH DOWN',
                layers: [
                  'MANUAL GIMBAL MODE - SWAP VJOY / LOOK DIRECTION (TOGGLE, HOLD)',
                  'SECOND LAYER',
                  'THIRD LAYER'
                ]
              },
              press: {
                name: 'CHIP SWITCH PRESS',
                layers: [
                  'MANUAL GIMBAL MODE - SWAP VJOY / LOOK DIRECTION (TOGGLE, HOLD)',
                  'SECOND LAYER',
                  'THIRD LAYER'
                ]
              },
              left: {
                name: 'CHIP SWITCH LEFT',
                layers: [
                  'MANUAL GIMBAL MODE - SWAP VJOY / LOOK DIRECTION (TOGGLE, HOLD)',
                  'MANUAL GIMBAL MODE - SWAP VJOY / LOOK DIRECTION (TOGGLE, HOLD)',
                  'MANUAL GIMBAL MODE - SWAP VJOY / LOOK DIRECTION (TOGGLE, HOLD)'
                ]
              },
              right: {
                name: 'CHIP SWITCH RIGHT',
                layers: [
                  'MANUAL GIMBAL MODE - SWAP VJOY / LOOK DIRECTION (TOGGLE, HOLD)',
                  'SECOND LAYER',
                  'THIRD LAYER'
                ]
              }
            }
          },
          Front: {
            Circle_Stick: {
              top: {
                name: 'CIRCLE SWITCH UP',
                layers: [
                  'MANUAL GIMBAL MODE - SWAP VJOY / LOOK DIRECTION (TOGGLE, HOLD)',
                  'MANUAL GIMBAL MODE - SWAP VJOY / LOOK DIRECTION (TOGGLE, HOLD)',
                  'MANUAL GIMBAL MODE - SWAP VJOY / LOOK DIRECTION (TOGGLE, HOLD)'
                ]
              },
              bottom: {
                name: 'CIRCLE SWITCH DOWN',
                layers: [
                  'MANUAL GIMBAL MODE - SWAP VJOY / LOOK DIRECTION (TOGGLE, HOLD)',
                  'SECOND LAYER',
                  'THIRD LAYER'
                ]
              },
              press: {
                name: 'CIRCLE SWITCH PRESS',
                layers: [
                  'MANUAL GIMBAL MODE - SWAP VJOY / LOOK DIRECTION (TOGGLE, HOLD)',
                  'SECOND LAYER',
                  'THIRD LAYER'
                ]
              },
              left: {
                name: 'CIRCLE SWITCH LEFT',
                layers: [
                  'MANUAL GIMBAL MODE - SWAP VJOY / LOOK DIRECTION (TOGGLE, HOLD)',
                  'MANUAL GIMBAL MODE - SWAP VJOY / LOOK DIRECTION (TOGGLE, HOLD)',
                  'MANUAL GIMBAL MODE - SWAP VJOY / LOOK DIRECTION (TOGGLE, HOLD)'
                ]
              },
              right: {
                name: 'CIRCLE SWITCH RIGHT',
                layers: [
                  'MANUAL GIMBAL MODE - SWAP VJOY / LOOK DIRECTION (TOGGLE, HOLD)',
                  'SECOND LAYER',
                  'THIRD LAYER'
                ]
              }
            },
            Hat_Stick: {
              top: {
                name: 'HAT SWITCH UP',
                layers: [
                  'MANUAL GIMBAL MODE - SWAP VJOY / LOOK DIRECTION (TOGGLE, HOLD)',
                  'MANUAL GIMBAL MODE - SWAP VJOY / LOOK DIRECTION (TOGGLE, HOLD)',
                  'MANUAL GIMBAL MODE - SWAP VJOY / LOOK DIRECTION (TOGGLE, HOLD)'
                ]
              },
              bottom: {
                name: 'HAT SWITCH DOWN',
                layers: [
                  'MANUAL GIMBAL MODE - SWAP VJOY / LOOK DIRECTION (TOGGLE, HOLD)',
                  'SECOND LAYER',
                  'THIRD LAYER'
                ]
              },
              press: {
                name: 'HAT SWITCH PRESS',
                layers: [
                  'MANUAL GIMBAL MODE - SWAP VJOY / LOOK DIRECTION (TOGGLE, HOLD)',
                  'SECOND LAYER',
                  'THIRD LAYER'
                ]
              },
              left: {
                name: 'HAT SWITCH LEFT',
                layers: [
                  'MANUAL GIMBAL MODE - SWAP VJOY / LOOK DIRECTION (TOGGLE, HOLD)',
                  'MANUAL GIMBAL MODE - SWAP VJOY / LOOK DIRECTION (TOGGLE, HOLD)',
                  'MANUAL GIMBAL MODE - SWAP VJOY / LOOK DIRECTION (TOGGLE, HOLD)'
                ]
              },
              right: {
                name: 'HAT SWITCH RIGHT',
                layers: [
                  'MANUAL GIMBAL MODE - SWAP VJOY / LOOK DIRECTION (TOGGLE, HOLD)',
                  'SECOND LAYER',
                  'THIRD LAYER'
                ]
              }
            },
            Pill_Stick: {
              top: {
                name: 'PILL SWITCH UP',
                layers: [
                  'MANUAL GIMBAL MODE - SWAP VJOY / LOOK DIRECTION (TOGGLE, HOLD)',
                  'MANUAL GIMBAL MODE - SWAP VJOY / LOOK DIRECTION (TOGGLE, HOLD)',
                  'MANUAL GIMBAL MODE - SWAP VJOY / LOOK DIRECTION (TOGGLE, HOLD)'
                ]
              },
              bottom: {
                name: 'PILL SWITCH DOWN',
                layers: [
                  'MANUAL GIMBAL MODE - SWAP VJOY / LOOK DIRECTION (TOGGLE, HOLD)',
                  'SECOND LAYER',
                  'THIRD LAYER'
                ]
              },
              press: {
                name: 'PILL SWITCH PRESS',
                layers: [
                  'MANUAL GIMBAL MODE - SWAP VJOY / LOOK DIRECTION (TOGGLE, HOLD)',
                  'SECOND LAYER',
                  'THIRD LAYER'
                ]
              },
              left: {
                name: 'PILL SWITCH LEFT',
                layers: [
                  'MANUAL GIMBAL MODE - SWAP VJOY / LOOK DIRECTION (TOGGLE, HOLD)',
                  'MANUAL GIMBAL MODE - SWAP VJOY / LOOK DIRECTION (TOGGLE, HOLD)',
                  'MANUAL GIMBAL MODE - SWAP VJOY / LOOK DIRECTION (TOGGLE, HOLD)'
                ]
              },
              right: {
                name: 'PILL SWITCH RIGHT',
                layers: [
                  'MANUAL GIMBAL MODE - SWAP VJOY / LOOK DIRECTION (TOGGLE, HOLD)',
                  'SECOND LAYER',
                  'THIRD LAYER'
                ]
              }
            },
            Red_Button: {
              press: {
                name: 'RED BUTTON PRESS',
                layers: [
                  'MANUAL GIMBAL MODE - SWAP VJOY / LOOK DIRECTION (TOGGLE, HOLD)',
                  'SECOND LAYER',
                  'THIRD LAYER'
                ]
              }
            },
            Chip_Stick: {
              top: {
                name: 'CHIP SWITCH UP',
                layers: [
                  'MANUAL GIMBAL MODE - SWAP VJOY / LOOK DIRECTION (TOGGLE, HOLD)',
                  'MANUAL GIMBAL MODE - SWAP VJOY / LOOK DIRECTION (TOGGLE, HOLD)',
                  'MANUAL GIMBAL MODE - SWAP VJOY / LOOK DIRECTION (TOGGLE, HOLD)'
                ]
              },
              bottom: {
                name: 'CHIP SWITCH DOWN',
                layers: [
                  'MANUAL GIMBAL MODE - SWAP VJOY / LOOK DIRECTION (TOGGLE, HOLD)',
                  'SECOND LAYER',
                  'THIRD LAYER'
                ]
              },
              press: {
                name: 'CHIP SWITCH PRESS',
                layers: [
                  'MANUAL GIMBAL MODE - SWAP VJOY / LOOK DIRECTION (TOGGLE, HOLD)',
                  'SECOND LAYER',
                  'THIRD LAYER'
                ]
              },
              left: {
                name: 'CHIP SWITCH LEFT',
                layers: [
                  'MANUAL GIMBAL MODE - SWAP VJOY / LOOK DIRECTION (TOGGLE, HOLD)',
                  'MANUAL GIMBAL MODE - SWAP VJOY / LOOK DIRECTION (TOGGLE, HOLD)',
                  'MANUAL GIMBAL MODE - SWAP VJOY / LOOK DIRECTION (TOGGLE, HOLD)'
                ]
              },
              right: {
                name: 'CHIP SWITCH RIGHT',
                layers: [
                  'MANUAL GIMBAL MODE - SWAP VJOY / LOOK DIRECTION (TOGGLE, HOLD)',
                  'SECOND LAYER',
                  'THIRD LAYER'
                ]
              }
            }
          },
          Back: {
            Primary_Trigger: {
              press: {
                name: 'PRIMARY TRIGGER PRESS',
                layers: ['FIRE WEAPONS', 'SECOND LAYER', 'THIRD LAYER']
              }
            },
            Secondary_Trigger: {
              press: {
                name: 'SECONDARY TRIGGER PRESS',
                layers: ['FIRE WEAPONS', 'SECOND LAYER', 'THIRD LAYER']
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
