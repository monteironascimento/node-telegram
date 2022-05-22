import MTProto from 'telegram-mtproto'

try {
    
const phone = {
  num : '+5544999427975', // basically it is your phone number
  code: '86353' // your 2FA code
}

const api = {
  layer          : 57,
  initConnection : 0x69796de9,
  api_id         : 111111
}

const server = {
  dev: true //We will connect to the test server.
}           //Any empty configurations fields can just not be specified

const client = MTProto({ server, api })

async function connect(){
  const { phone_code_hash } = await client('auth.sendCode', {
    phone_number  : phone.num,
    current_number: false,
    api_id        : 6667642, // obtain your api_id from telegram
    api_hash      : 'd903728c9871ea52d6f64590018b769c' // obtain api_hash from telegram
  })
  const { user } = await client('auth.signIn', {
    phone_number   : phone.num,
    phone_code_hash: phone_code_hash,
    phone_code     : phone.code
  })
      console.log('signed as ', user);
}

connect();
} catch (error) {
    console.log(error)
    
}
