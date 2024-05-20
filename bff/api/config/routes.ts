import { Express, Router } from 'express';
import { readdirSync } from 'node:fs'
import { join } from 'node:path'

export const setupRoutes = (app: Express): void => {
  const router = Router();
  app.use('/api', router);
  readdirSync(join(__dirname, '../routes')).map(async file => {
    if (file.includes('.route')) {
      (await import(`../routes/${file}`)).default(router)
    }
  })
}