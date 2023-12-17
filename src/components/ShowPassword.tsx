import {ChangeEvent, FC} from "react";

type ShowPasswordProps = {
    show?: boolean
    setVisibililty: (isShown: boolean) => void
}
export const ShowPassword: FC<ShowPasswordProps> = ({show = false, setVisibililty}) => {

    const handleShow = (e: ChangeEvent<HTMLInputElement>) => {
        setVisibililty(e.currentTarget.checked)
    }

    return (
        <div style={{display: 'flex', paddingTop: 20}}>

            <label htmlFor="see-pass">
                Show Password?
            </label>
            <input style={{width: "auto", cursor: 'pointer', outline: 'none'}} onChange={handleShow} checked={show} id={'see-pass'} type="checkbox"/>
        </div>

    )
}