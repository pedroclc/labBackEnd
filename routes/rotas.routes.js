import express from "express";
import { v4 as uuidv4 } from "uuid";

const router = express.Router();

let data = [
  {
    id: "1",
    documentName: "Licitação Compras - Notebooks",
    status: "Em andamento",
    details: "Processo de licitação para compra de notebooks",
    dateInit: "30/11/2022",
    comments: ["Processo em aberto e sem previsão de conclusão"],
    dateEnd: "",
    setor: "tre",
  },
  {
    id: "2",
    documentName: "Licitação Compras - Ar Condicionado",
    status: "Finalizado",
    details: "Processo de licitação para compra de ar-condicionado",
    dateInit: "15/11/2022",
    comments: ["Processo em aberto", "Processo finalizado"],
    dateEnd: "25/11/2022",
    setor: "trj",
  },
];

//ROTAS
//GET
router.get("/", (request, response) => {
  return response.status(200).json(data);
});

//POST
router.post("/create", (request, response) => {
  const newData = {
    ...request.body,
    id: uuidv4(),
  };
  data.push(newData);
  return response.status(201).json(data);
});

//PUT
router.put("/edit/:id", (request, response) => {
  const { id } = request.params;
  const update = data.find((item) => item.id === id);
  const index = data.indexOf(update);
  data[index] = {
    ...update,
    ...request.body,
  };
  return response.status(200).json(data[index]);
});

//DELETE
router.delete("/delete/:id", (request, response) => {
  const { id } = request.params;
  const deleteById = data.find((item) => item.id === id);
  const index = data.indexOf(deleteById);
  data.splice(index, 1);
  return response.status(200).json(data);
});

export default router;
