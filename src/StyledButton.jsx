import style from './StyledButton.module.css'

export default function StyledButton({tex, bla}) {
    return (
            <button className={style.button} onClick={bla}>{tex || "none"}</button>
    )
}