import express from "express";

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
//PUT
router.put("/:id", (request, response) => {
  const { id } = request.params;
  const update = data.find((item) => item.id === id);
  const index = data.indexOf(update);
  data[index] = {
    ...update,
    ...request.body,
  };
  return response.status(200).json(data[index]);
});
export default router;
