import {z} from "zod";

const UserSchema = z.object({
    nome: z.string().min(6, {message: 'O nome deve ter pelo menos 6 letras'}),
    email: z.string().email({message: 'E-mail inválido'}),
    senha: z.string().min(8, {message: 'A senha deve ter pelo menos 8 caracteres'}),
});

const UserController = {
    async createUser(req,res){
        try {
            const {data, recibo, valor, observacao} = req.body;
            UserSchema.parse({nome, email, senha});
            return res.status(201).json({message: 'User created', 
                data: {nome, email, senha}});
        } catch (error) {
            if (error instanceof z.ZodError){
                return res.status(400).json({message: 'Validation error', details: error.errors});
            }

            return res.status(500).json({message: 'Internal server error'});
        }
    },
};

export default UserController;