import dotenv from 'dotenv'

dotenv.config()

const FLEEK_SLUG = `${process.env['FLEEK_SLUG']}`

export default {
  "sites": [
    {
      "slug": FLEEK_SLUG,
      "distDir": "out",
      "buildCommand": "yarn run build"
    }
  ]
}