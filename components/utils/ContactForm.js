import axios from "axios";
import { useForm } from "react-hook-form";
import {
    FormConteiner,
    Form,
    Label,
    Input,
    Select,
    Option,
    TextArea,
    ButtonEmail,
} from "./ContactFormElements";
const ContactForm = () => {
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = async (values) => {
        let config = {
            method: "post",
            url: "/api/mail",
            headers: {
                "Content-Type": "application/json",
            },
            data: values,
        };
        try {
            const respone = await axios(config);
            console.log(respone);
            reset();
            if (respone.data.status == 200) {
                console.log("succes");
            }
        } catch (err) {
            console.log(err);
        }
    };
    return (
        <FormConteiner>
            <Form onSubmit={handleSubmit(onSubmit)}>
                <Input
                    {...register("name", {
                        required: true,
                    })}
                    placeholder="Imię"
                />
                <Input
                    type="email"
                    {...register("email", {
                        required: true,
                    })}
                    placeholder="Email"
                />
                <Select {...register("temat")}>
                    <Option value="Temat">Temat</Option>
                    <Option value="Strony WWW">
                        Strony WWW
                    </Option>
                    <Option value="Pozycjonowanie">
                        Pozycjonowanie
                    </Option>
                </Select>
                <TextArea
                    {...register("messege", {
                        required: true,
                    })}
                    placeholder="Wiadomość"
                />
                <ButtonEmail type="submit">
                    Wyślij
                </ButtonEmail>
            </Form>
        </FormConteiner>
    );
};

export default ContactForm;
