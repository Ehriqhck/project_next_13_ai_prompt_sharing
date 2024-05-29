import NextAuth from 'next-auth'
import GoogleProvider from 'next-auth/providers/google'

import User from '@models/user'
import { connectToDB } from '@utils/database'
const globalContext = {
  TEST_PROFILE_1: {
    profileName: 'TEST PROFILE 1',
    dateModified: '',
    dateCreated: '',
    saved: {
      VKB_GLADIATOR_EVO: {
        buttons: {
          circleSwitch: {
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
              name: 'CIRCLE SWITCH UP',
              layers: [
                'MANUAL GIMBAL MODE - SWAP VJOY / LOOK DIRECTION (TOGGLE, HOLD)',
                'SECOND LAYER',
                'THIRD LAYER'
              ]
            }
          },
          hatSwitch: {
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
              name: 'HAT SWITCH UP',
              layers: [
                'MANUAL GIMBAL MODE - SWAP VJOY / LOOK DIRECTION (TOGGLE, HOLD)',
                'SECOND LAYER',
                'THIRD LAYER'
              ]
            }
          },
          pillSwitch: {
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
              name: 'PILL SWITCH UP',
              layers: [
                'MANUAL GIMBAL MODE - SWAP VJOY / LOOK DIRECTION (TOGGLE, HOLD)',
                'SECOND LAYER',
                'THIRD LAYER'
              ]
            }
          },
          redButton: {
            press: {
              name: 'RED BUTTON PRESS',
              layers: [
                'MANUAL GIMBAL MODE - SWAP VJOY / LOOK DIRECTION (TOGGLE, HOLD)',
                'SECOND LAYER',
                'THIRD LAYER'
              ]
            }
          },
          chipSwitch: {
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
              name: 'CHIP SWITCH UP',
              layers: [
                'MANUAL GIMBAL MODE - SWAP VJOY / LOOK DIRECTION (TOGGLE, HOLD)',
                'SECOND LAYER',
                'THIRD LAYER'
              ]
            }
          }
        }
      }
    }
  },
  TEST_PROFILE_2: {
    profileName: 'TEST PROFILE 2',
    dateModified: '',
    dateCreated: '',
    saved: {
      VKB_GLADIATOR_EVO: {
        buttons: {
          circleSwitch: {
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
              name: 'CIRCLE SWITCH UP',
              layers: [
                'MANUAL GIMBAL MODE - SWAP VJOY / LOOK DIRECTION (TOGGLE, HOLD)',
                'SECOND LAYER',
                'THIRD LAYER'
              ]
            }
          },
          hatSwitch: {
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
              name: 'HAT SWITCH UP',
              layers: [
                'MANUAL GIMBAL MODE - SWAP VJOY / LOOK DIRECTION (TOGGLE, HOLD)',
                'SECOND LAYER',
                'THIRD LAYER'
              ]
            }
          },
          pillSwitch: {
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
              name: 'PILL SWITCH UP',
              layers: [
                'MANUAL GIMBAL MODE - SWAP VJOY / LOOK DIRECTION (TOGGLE, HOLD)',
                'SECOND LAYER',
                'THIRD LAYER'
              ]
            }
          },
          redButton: {
            press: {
              name: 'RED BUTTON PRESS',
              layers: [
                'MANUAL GIMBAL MODE - SWAP VJOY / LOOK DIRECTION (TOGGLE, HOLD)',
                'SECOND LAYER',
                'THIRD LAYER'
              ]
            }
          },
          chipSwitch: {
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
              name: 'CHIP SWITCH UP',
              layers: [
                'MANUAL GIMBAL MODE - SWAP VJOY / LOOK DIRECTION (TOGGLE, HOLD)',
                'SECOND LAYER',
                'THIRD LAYER'
              ]
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
