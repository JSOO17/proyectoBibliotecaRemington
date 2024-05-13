const router = require('express').Router()
const { faker } = require('@faker-js/faker')

const { get, getById, create } = require('../services/book.service')
const { response } = require('../app/utils/reponse')

router.get('/', async (req, res) => {
   try {
      const books = await get();

      response(req, res, books, 200)
   } catch (error) {
      response(req, res, 'internal error server', 500)
   }
});

router.get('/:id', async (req, res) => {
   try {
      const book = await getById(req.params.id)

      if(!book) return response(req, res, 'book not found', 404)
   } catch (error) {
      response(req, res, 'internal error server', 500)
   }
})

router.post('/', async (req, res) => {
   try {
      await create(req.body)
   } catch (error) {
      response(req, res, 'internal error server', 500)
   }
})

router.delete('/:id', (req, res) => {
   res.send('Hello World!')
})

router.put('/:id', (req, res) => {
   res.send('Hello World!')
});

module.exports = router