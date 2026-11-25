import { HeartMinus, HeartPlus } from "lucide-react"

export const Intro = () => {
    return (

        <div className="w-md justify-center mt-30 flex ">
            <div>
                <h1 className="text-xl">
                    Reglas del juego
                </h1>
                <div>
                    <div>

                    </div>
                    <div>
                        <span>Cuando te equivoques </span>
                        <p>
                            Pierdes una vida <HeartMinus />
                        </p>
                        <p>Cuando te quedes sin vida el juego se termina y perderás todos tus stats</p>
                    </div>
                </div>
                <div>
                    <div>

                    </div>
                    <div>
                        <span>Cuando aciertes </span>
                        <p>
                            Ganas dos vidas ➕ <HeartPlus /><HeartPlus />
                        </p>
                    </div>
                </div>
                <div>
                    <div>

                    </div>
                    <div>
                        <span>gUIA DE COLORES </span>
                        <p>
                            Ganas dos vidas ➕ <HeartPlus /><HeartPlus />
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}