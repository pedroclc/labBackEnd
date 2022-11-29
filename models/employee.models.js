import { model, Schema } from "mongoose";

const employeeSchema = new Schema(
  {
    name: {
      type: String,
      required: true, //campo obrigatório
    },
    email: {
      type: String,
      unique: true, //verifica se a informação que o usuário colocou ainda não está cadastrada no banco de dados
      match: /[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/, //regex para e-mail
      lowercase: true,
    },
    role: {
      type: String,
      enum: ["TI", "Marketing", "People", "CEO", "Intern"],
    },
    age: {
      type: Number,
    },
    active: {
      type: Boolean,
      default: true, //qdo é criado sempre tem o valor true, mas dá pra mudar pra false
    },
    address: {
      city: { type: String },
    },
  },
  {
    timestamps: true,
  }
);

const EmployeeModel = model("Employee", employeeSchema);
//"Employee" fica no singular pq na collection (do Mongo) ele fica automaticamente no plural

export default EmployeeModel;
