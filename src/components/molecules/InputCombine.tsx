import { Input , Label } from "../atoms";
import type { InputCombineProps } from "../../types";
export function InputCombine({label , link , ...inputProps} : InputCombineProps){
    return(
        <div className="flex flex-col w-full">
            <div className="flex items-center justify-between gap-3 mb-3">
                <Label>{label}</Label>
                {link && <div>{link}</div>}
            </div>
            <Input {...inputProps} />
        </div>
    )
}
