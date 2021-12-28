interface InptProps {
    label: string,
    type: 'text' | 'number',
    value: any,
    readonly?: boolean,
    onChange?: (value: any) => void
}
export default function Inpt(props: InptProps) {
    return (
        <div className="flex flex-col">
            <label className="my-2">{props.label ?? ''}</label>
            <input 
                type={props.type ?? 'text'}
                value={props.value} 
                onChange={(evt) => props.onChange?.(evt.target.value)}
                readOnly={props.readonly}
                className={`
                    border border-blue-500 rounded-lg
                    focus:outline-none bg-gray-50 px-4 py-2
                    ${props.readonly ? '' : 'focus:bg-white'}
                `}
            />
        </div>
    )
}