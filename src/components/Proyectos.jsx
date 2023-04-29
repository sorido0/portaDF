


import "../components/compartir/section.scss"
import { proyectosRealizados } from "../helps";
import { Filtro, Section } from "./compartir"
import { VerProjectos } from './VerProjectos';
import { useState } from 'react';




export const Proyectos = () => {


    const [data, setdata] = useState(proyectosRealizados);

    const filtroProyectos = (id = "") => {
        if (id === "all") {
            setdata(proyectosRealizados);
            return;
        }

        if (id === "app") {
            const filtro = proyectosRealizados?.filter((proyecto) => proyecto.tipo === "app");
            setdata(filtro);
            return;
        }

        if (id === "web") {
            const filtro = proyectosRealizados?.filter((proyecto) => proyecto.tipo === "web");
            setdata(filtro);
            return;
        }

    }



    return (
        <Section
            id="proyectos"
            title="Mira mis proyectos"
            background="light"
        >
            <br />
            <Filtro filtroProyectos={(id) => filtroProyectos(id)} />

            <VerProjectos proyectos={data} />
        </Section>
    )
}
