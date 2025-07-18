import api from "./api"
import type { ConvertParams } from "../types/parameterTypes"

export const getSupportedCurrency = async () => {
    const response = await api.get("/api/Currency/Supported");
    return response.data;
}

export const convertCurrency = async ({ from, to, amount, date }: ConvertParams) => {
    const response = await api.get("/api/Currency/Convert", {
        params: { from, to, amount, date }
    });
    return response.data;
}