import { useState } from "react";
import { callbackify } from "util";
import Client from "../core/Client";
import Btn from "./Btn";
import Inpt from "./Inpt";

interface FormProps {
    client?: Client,
    cancel?: () => void,
    save?: (client: Client) => void
}
export default function Form(props: FormProps) {
    const id = props.client?.getId()
    const [name, setName] = useState(props.client?.getName() ?? '')
    const [age, setAge] = useState(props.client?.getAge() ?? 0) 
    return (
        <div>
            {
                id ? (
                    <Inpt label="Cod" value={id} readonly type="text" />
                ) 
                : false
            }
            <Inpt label="Name" value={name} onChange={setName} type="text" />
            <Inpt label="Age" value={age} onChange={setAge} type="number" />

            <div className="flex justify-end my-4">
                <Btn color="green" className="mx-2" onClick={ () => props.save?.(new Client(name, age, id))}> Save </Btn>
                <Btn color="gray" className="mx-2" onClick={ () => props.cancel?.()}> Cancel </Btn>
            </div>
        </div>
    )
}