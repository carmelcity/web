import dotenv from 'dotenv'

dotenv.config()

const DEPLOY_ID = `${process.env['DEPLOY_ID']}`

export default {
  "sites": [
    {
      "slug": DEPLOY_ID,
      "distDir": "out",
      "buildCommand": "yarn run build"
    }
  ]
}
