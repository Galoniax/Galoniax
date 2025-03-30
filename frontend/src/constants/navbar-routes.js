import { ROUTES } from "./constants";

import { faHouse } from "@fortawesome/free-solid-svg-icons";

export const NAVBAR_ROUTES = [
    { path: ROUTES.INICIO,  icon: faHouse }, 
    { path: `${ROUTES.INICIO}#Acerca`, name: "Acerca" },
    { path: `${ROUTES.INICIO}#Experiencia`, name: "Experiencia" },
    { path: `${ROUTES.INICIO}#Proyectos`, name: "Proyectos" },
];