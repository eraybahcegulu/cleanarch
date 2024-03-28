import { Button, Input } from "@nextui-org/react";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { loginValidator } from "./validators";
import { loginService } from "../services/usersService";
import { useMutation } from "react-query";
import toast from "react-hot-toast";
import { AxiosError } from "axios";
import { LoadingButton } from "./Loading";

const LoginForm = () => {

    const loginMutation = useMutation('login', loginService,
        {
            onSuccess: async (res) => {
                if (res.data.succeeded) {
                    toast.success("Login successful");
                }
                else {
                    console.log(res)
                    toast.error(res.data.message);
                }

            },
            onError: (error) => {
                const axiosError = error as AxiosError;
                if (axiosError.response && axiosError.response.data) {
                    const errorData = axiosError.response.data;
                    let errorMessage = 'error';
                    if (Array.isArray(errorData)) {
                        errorMessage = errorData.map((errorItem) => {
                            return errorItem.value[0];
                        }).join('\n');
                    }
                    toast.error(errorMessage);
                } else {
                    toast.error("Server Error");
                }
            }
        });

    return (
        <Formik
            initialValues={{ usernameOrEmail: "", password: "" }}
            validationSchema={loginValidator}
            onSubmit={async (values) => {
                await loginMutation.mutateAsync({
                    usernameOrEmail: values.usernameOrEmail,
                    password: values.password,

                });
            }}
        >
            <Form>
                <div className="border border-black shadow-md shadow-black  p-10  rounded-2xl flex flex-col gap-3 items-center justify-center">
                    <div >
                        <span className="text-2xl font-bold"> LOGIN </span>
                    </div>
                    <div className=' flex flex-col gap-10 items-center justify-center'>
                        <div className="h-[50px] w-[300px]">
                            <Field name="usernameOrEmail" as={Input} label="Username or Email" />
                            <ErrorMessage name="usernameOrEmail" component="div" className="text-red-500 text-sm" />
                        </div>

                        <div className="h-[50px] w-[300px]">
                            <Field name="password" type="password" as={Input} label="Password" />
                            <ErrorMessage name="password" component="div" className="text-red-500 text-sm" />
                        </div>

                        <div className="h-[50px] w-[300px] flex items-center justify-center">
                            {
                                loginMutation.isLoading
                                    ?
                                    <LoadingButton color="primary" className={undefined} />
                                    :
                                    <Button type='submit' color="primary" variant="shadow">
                                        Login
                                    </Button>
                            }
                        </div>
                    </div>
                </div>

            </Form>
        </Formik>
    )
}





export default LoginForm