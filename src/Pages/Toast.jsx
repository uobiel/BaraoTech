import { toast } from "react-toastify";

export const exibeToast = (tipo, mensagem) => {
    toast[tipo](mensagem);
};