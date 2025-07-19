export interface ConvertParams {
    from: string;
    to: string;
    amount: number;
    date: string;
}

export interface FormDataType {
    from: string;
    to: string;
    amount: string;
    date: string;
}

export interface OptionType {
    value: string;
    label: string;
}

export interface ConvertCurrencyProps {
    resultText: string;
    formData: FormDataType;
    setFormData: React.Dispatch<React.SetStateAction<FormDataType>>;
    handleConvert: (e: React.FormEvent<HTMLFormElement>) => Promise<void>;
    options: OptionType[];
}