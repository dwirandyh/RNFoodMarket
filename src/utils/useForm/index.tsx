import { useState } from 'react';

type FormValue = { [key: string]: any }

const useForm = <T extends FormValue>(initialValue: T) => {
    const [form, setForm] = useState<T>(initialValue)

    const updateForm = (formType: keyof T, formValue: T[keyof T]) => {
        setForm({ ...form, [formType]: formValue })

    };

    const resetForm = () => {
        setForm(initialValue);
    }

    return [form, updateForm, resetForm] as const
};

export default useForm
