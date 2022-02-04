import { Request, Response, Router } from 'express'
import { v4 as uuidv4 } from 'uuid'

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

const clients = [
  {
    id: uuidv4(),
    name: 'Vinicius Duarte',
    cpf: '06070117182',
    telephone: '62981715530',
    address: 'Rua Miguel Angelo, Jardim Planalto, Goiânia, Goiás.',
    number: '37',
    complement: 'quadra 23 Lote 38',
    cep: '74333170'
  },
  {
    id: uuidv4(),
    name: 'Nathalia Cristina Garcia Costa Duarte',
    cpf: '05994940186',
    telephone: '62986345390',
    address: 'Rua Miguel Angelo, Jardim Planalto, Goiânia, Goiás.',
    number: '37',
    complement: 'quadra 23 Lote 38',
    cep: '74333170'
  },
  {
    id: uuidv4(),
    name: 'Nara Rubia da Paz Garcia Rosa',
    cpf: '93725362106',
    telephone: '62986345390',
    address: 'Rua SB 11, Solar Bouganville, Goiânia, Goiás.',
    number: '',
    complement: 'quadra 20 lt 13 casa 01',
    cep: '74393435'
  },
  {
    id: uuidv4(),
    name: 'Vinicius Duarte',
    cpf: '06070117182',
    telephone: '62981715530',
    address: 'Rua Miguel Angelo, Jardim Planalto, Goiânia, Goiás.',
    number: '37',
    complement: 'quadra 23 Lote 38',
    cep: '74333170'
  },
  {
    id: uuidv4(),
    name: 'Nathalia Cristina Garcia Costa Duarte',
    cpf: '05994940186',
    telephone: '62986345390',
    address: 'Rua Miguel Angelo, Jardim Planalto, Goiânia, Goiás.',
    number: '37',
    complement: 'quadra 23 Lote 38',
    cep: '74333170'
  },
  {
    id: uuidv4(),
    name: 'Nara Rubia da Paz Garcia Rosa',
    cpf: '93725362106',
    telephone: '62986345390',
    address: 'Rua SB 11, Solar Bouganville, Goiânia, Goiás.',
    number: '',
    complement: 'quadra 20 lt 13 casa 01',
    cep: '74393435'
  },
  {
    id: uuidv4(),
    name: 'Vinicius Duarte',
    cpf: '06070117182',
    telephone: '62981715530',
    address: 'Rua Miguel Angelo, Jardim Planalto, Goiânia, Goiás.',
    number: '37',
    complement: 'quadra 23 Lote 38',
    cep: '74333170'
  },
  {
    id: uuidv4(),
    name: 'Nathalia Cristina Garcia Costa Duarte',
    cpf: '05994940186',
    telephone: '62986345390',
    address: 'Rua Miguel Angelo, Jardim Planalto, Goiânia, Goiás.',
    number: '37',
    complement: 'quadra 23 Lote 38',
    cep: '74333170'
  },
  {
    id: uuidv4(),
    name: 'Nara Rubia da Paz Garcia Rosa',
    cpf: '93725362106',
    telephone: '62986345390',
    address: 'Rua SB 11, Solar Bouganville, Goiânia, Goiás.',
    number: '',
    complement: 'quadra 20 lt 13 casa 01',
    cep: '74393435'
  },
  {
    id: uuidv4(),
    name: 'Vinicius Duarte',
    cpf: '06070117182',
    telephone: '62981715530',
    address: 'Rua Miguel Angelo, Jardim Planalto, Goiânia, Goiás.',
    number: '37',
    complement: 'quadra 23 Lote 38',
    cep: '74333170'
  },
  {
    id: uuidv4(),
    name: 'Nathalia Cristina Garcia Costa Duarte',
    cpf: '05994940186',
    telephone: '62986345390',
    address: 'Rua Miguel Angelo, Jardim Planalto, Goiânia, Goiás.',
    number: '37',
    complement: 'quadra 23 Lote 38',
    cep: '74333170'
  },
  {
    id: uuidv4(),
    name: 'Nara Rubia da Paz Garcia Rosa',
    cpf: '93725362106',
    telephone: '62986345390',
    address: 'Rua SB 11, Solar Bouganville, Goiânia, Goiás.',
    number: '',
    complement: 'quadra 20 lt 13 casa 01',
    cep: '74393435'
  },
]

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

routes.delete('/orders/:id', (request: Request, response: Response) => {
  const { id } = request.params
  console.log(id)
  const index = (+id) - 1

  orderList.splice(index)
  return response.status(200).json(
    {
      message: `O pedido número ${id} foi excluído.`
    }
    )
})

routes.patch('/orders/:id/cancel', (request: Request, response: Response) => {
  const { id } = request.params
  orderList[(+id-1)].status = 'Cancelado'

  return response.status(200).json({
    message: `O pedido número ${id} foi cancelado.`
  })
})

routes.get('/clients', (request: Request, response: Response) => {
  return (
    response.status(200).json(clients)
    //setTimeout(() => response.json(clients), 3000)
  )
})

routes.get('/clients/:id', (request: Request, response: Response) => {
  const { id } = request.params
  const client = clients.find((client) => client.id === id)
  if(client === undefined) {
    return response.status(404).json({message: 'Client is not found.'})
  }
  return response.json(client)
})

routes.post('/clients', (request: Request, response: Response) => {
  const {
  name,
  cpf,
  telephone,
  address,
  number,
  complement,
  cep,
  } = request.body

  const newPerson = {
    id: uuidv4(),
    name,
    cpf,
    telephone,
    address,
    number,
    complement,
    cep,
  }

  clients.push(newPerson)
  console.log(newPerson)

  return response.status(201).json(newPerson)
})


export default routes

