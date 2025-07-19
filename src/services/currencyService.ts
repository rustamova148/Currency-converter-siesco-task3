import api from "./api"
import type { ConvertParams } from "../types/types"

export const getSupportedCurrency = async () => {
    const response = await api.get("/api/Currency/Supported");
    return response.data;
}

export const convertCurrency = async ({ from, to, amount }: ConvertParams) => {
    const response = await api.get("/api/Currency/Convert", {
        params: { from, to, amount }
    });
    return response.data;
}