import { Request, Response, Router } from 'express'

const jsonData = [
  {
    "id": 1,
    "created_at": "01/02/2022 11:11",
    "name": "Vinicius Duarte",
    "telephone": "62981715530",
    "address": "Rua Miguel Ângelo, 33 Jardim Planalto, Goiânia Goiás",
    "cakeDescription": "Bolo Alpino com trufas",
    "additional": "Sem muito chocolate",
    "weight": 2,
    "price": 95,
    "deliveryDate": "01/02/2022",
    "deliveryHour": "16:00",
    "status": "Entregue",
  },
  {
    "id": 2,
    "created_at": "01/02/2022 11:11",
    "name": "Vinicius Duarte",
    "telephone": "62981715530",
    "address": "Rua Miguel Ângelo, 33 Jardim Planalto, Goiânia Goiás",
    "cakeDescription": "Bolo Alpino com trufas",
    "additional": "Sem muito chocolate",
    "weight": 2,
    "price": 95,
    "deliveryDate": "01/02/2022",
    "deliveryHour": "16:30",
    "status": "Atrasado",
  },
  {
    "id": 3,
    "created_at": "01/02/2022 11:11",
    "name": "Vinicius Duarte",
    "telephone": "62981715530",
    "address": "Rua Miguel Ângelo, 33 Jardim Planalto, Goiânia Goiás",
    "cakeDescription": "Bolo Alpino com trufas",
    "additional": "Sem muito chocolate",
    "weight": 2,
    "price": 95,
    "deliveryDate": "01/02/2022",
    "deliveryHour": "19:30",
    "status": "Aguardando",
  },
  {
    "id": 4,
    "created_at": "01/02/2022 11:11",
    "name": "Vinicius Duarte",
    "telephone": "62981715530",
    "address": "Rua Miguel Ângelo, 33 Jardim Planalto, Goiânia Goiás",
    "cakeDescription": "Bolo Alpino com trufas",
    "additional": "Sem muito chocolate",
    "weight": 2,
    "price": 95,
    "deliveryDate": "01/02/2022",
    "deliveryHour": "19:30",
    "status": "Cancelado",
  },
]
 const orderList = jsonData

const routes = Router()

routes.get('/', (request: Request, response: Response) => {
  return (
    response.json({
      status: 'online',
      orders: orderList.length
    })
  )
})

routes.get('/orders', (request: Request, response: Response) => {
  return (
    response.status(200).json(orderList)
    //setTimeout(() => response.json(orderList), 3000)
  )
})

routes.get('/orders/:id', (request: Request, response: Response) => {
  const { id } = request.params
  const order = orderList.find((order) => order.id === Number(id))

  return response.json(order)
})

routes.post('/orders', (request: Request, response: Response) => {
  const {
    name,
    created_at,
    telephone,
    address,
    cakeDescription,
    additional,
    weight,
    price,
    deliveryDate,
    deliveryHour,
    status
  } = request.body

  const newOrder = {
    id: orderList.length + 1,
    created_at,
    name,
    telephone,
    address,
    cakeDescription,
    additional,
    weight,
    price,
    deliveryDate,
    deliveryHour,
    status
  }

  orderList.push(newOrder)
  console.log(orderList)

  return response.status(201).json(newOrder)
})

export default routes

