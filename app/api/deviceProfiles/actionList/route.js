import { connectToDB } from '@utils/database'
import { log } from 'console'
import User from '@models/user.js'
// import { signIn, signOut, useSession, getProviders } from 'next-auth/react'
import { signIn, signOut, useSession, getProviders } from 'next-auth/react'

// export const GET = async (request, ) => {

//   try {
//     await connectToDB()

//     const data = await User.findOne({ _id:'656ec352bd375007c9585a2d'})
//     // const existingId = await user.id;

//     // const data = await User.find({});

//     return new Response(JSON.stringify(data), { status: 200 })

//   } catch (error) {
//     console.log(error)
//     log(error)
//     return new Response('Failed to fetch device profiles', { status: 500 })
//   }
// }

export const POST = async (request, { params }) => {
  const { userId, inputSlot, selectedInput, selectedLayer } =  await request.json();

  try {
    await connectToDB()
    var device = 'VKB_GLADIATOR_EVO';
    var selectQuery =
      'deviceProfiles.deviceProfiles.saved.' +
      device +
      '.buttons.' +
      selectedInput +
      '.' +
      inputSlot +
      '.layers'

    var query = {}
    query[selectQuery] = inputSlot

    const data = await User.findOne({ _id: userId }, query).select('-_id')

    return new Response(JSON.stringify(data), { status: 200 })
  } catch (error) {
    console.log(error)
    log(error)
    return new Response('Failed to fetch device profiles', { status: 500 })
  }
}
