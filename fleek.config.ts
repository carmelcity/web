import dotenv from 'dotenv'

dotenv.config()

const FLEEK_SLUG = `${process.env['FLEEK_SLUG']}`

export default {
  "sites": [
    {
      "slug": FLEEK_SLUG,
      "distDir": ".fleek",
      "buildCommand": "yarn run build"
    }
  ]
}