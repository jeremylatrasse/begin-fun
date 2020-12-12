const Main = require('@architect/views/main.js')
const arc = require('@architect/functions')

// Customize your site by changing the data below
exports.handler = async function Index () {
  let body = Main({
    /**
     * Basic bio
     */
    fullname: 'Jeremy', // ←  Start by adding your name!
    title: 'coded in the browser with github? ',
    occupation: ' LIVER ',
    location: ' Mostly the Desert ',
    bio: 'Some sort of matter conversion device',

    /**
     * Contact / social
     * - Comment out any item below to remove it from your page
     */
    email: 'your@email.com',
    twitter: 'jeremy',
    linkedin: 'your-linkedin-name',
    instagram: 'yourInsta',
    facebook: 'your-facebook-name',

    /**
     * Layout
     */
    photographer: 'Ivana Cajina',
    service: 'Unsplash',
    credit: 'https://unsplash.com/@von_co',
    image: arc.static('background.jpg', {stagePath: false})
    // or link to an external image URL such as ↓
    // image: 'https://images.unsplash.com/photo-1506535772317-9fdb71c959c6'
  })

  return {
    statusCode: 200,
    headers: {
      'content-type': 'text/html; charset=utf8',
      'cache-control': 'no-cache, no-store, must-revalidate, max-age=0, s-maxage=0'
    },
    body
  }
}
